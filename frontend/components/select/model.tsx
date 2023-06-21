import { Link, Search, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { cloudflareLoader } from "utils/cloudflare";
import {
  CheckGoodYes,
  ChevronDownArrow,
  ChevronRightArrow,
  Delete,
} from "../basic-icons";
import Input from "../input/input";
import Modal from "../modal/modal";
import classnames from "classnames";

import styles from "./select.module.scss";
import { useGlobal18Plus } from "@/frontend/context/18puls";
import EyeInvisibleOutlined from "@ant-design/icons/EyeInvisibleOutlined";
import EyeOutlined from "@ant-design/icons/EyeOutlined";

interface ModelSelectProps {
  lora?: boolean;
  title: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  models: ModelI[];
  value: string;
  id: string;
}

const Model = ({
  v,
  modelID,
  value,
  handleChange,
}: {
  v: ModelI;
  modelID: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
}) => {
  const { show18Plus: gloablShow18Plus } = useGlobal18Plus();
  const [show18Plus, setShow18Plus] = useState(false);
  useEffect(() => {
    setShow18Plus(gloablShow18Plus);
  }, [gloablShow18Plus]);
  return (
    <label
      key={v.id}
      htmlFor={modelID + v.id}
      className={[
        styles._model,
        v.id.toString() === value ? styles.checked : "",
      ].join(" ")}
    >
      <div className={styles.model}>
        {v.params.images ? (
          v.params.images?.length >= 4 ? (
            <div className={styles.model_images}>
              {v.params.images?.map((im: string, i: number) => (
                <Image
                  src={im}
                  key={i}
                  width={100}
                  height={100}
                  loader={cloudflareLoader}
                  objectFit="cover"
                  style={{
                    filter: v.nsfw && !show18Plus ? "blur(10px)" : "",
                  }}
                />
              ))}
            </div>
          ) : (
            <div className={styles.model_images_1}>
              <Image
                src={v.params.images[0]}
                width={400}
                height={400}
                loader={cloudflareLoader}
                objectFit="cover"
                style={{
                  filter: v.nsfw && !show18Plus ? "blur(10px)" : "",
                }}
              />
            </div>
          )
        ) : (
          <div className={styles.model_images}></div>
        )}

        <div className={styles.model_info}>
          <div>
            <div
              className={classnames(
                styles.image_badge_wrapper,
                styles.image_badge_left_top
              )}
            >
              {v.nsfw && (
                <div
                  className={classnames(
                    styles.image_badge,
                    styles.image_badge_18
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShow18Plus((show) => !show);
                  }}
                >
                  18+{" "}
                  {show18Plus ? (
                    <EyeInvisibleOutlined className="leading-0 ml-1" rev="" />
                  ) : (
                    <EyeOutlined className="leading-0 ml-1" rev="" />
                  )}
                </div>
              )}
              {v.type && (
                <div
                  className={[styles.image_badge, styles.image_badge_type].join(
                    " "
                  )}
                >
                  {v.type}
                </div>
              )}
            </div>
            <div className={styles.model_name}>{v.name}</div>
            {/* <div className={styles.model_desc}>
                          {v.params.description || `Your own DreamBooth model. Modifer to invoke style "${v.params.instance_prompt}"`}
                        </div> */}
          </div>
          {v.params.author_url ? (
            <div className={styles.model_author}>
              by{" "}
              <a
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noreferrer"
                href={v.params.author_url}
              >
                <Link size={13} />
                {v.params.author}
              </a>
            </div>
          ) : null}
        </div>
        <input
          name={modelID}
          id={modelID + v.id}
          type="radio"
          value={v.id}
          checked={v.id === value}
          onChange={handleChange}
          className={styles.model_input}
        />
        {v.id === value ? (
          <div className={styles.checked_icon}>
            <CheckGoodYes size={10} strokeWidth={4} />
          </div>
        ) : null}
      </div>
    </label>
  );
};

export default function ModelSelect({
  title = "Model",
  lora = false,
  onChange,
  models,
  value,
  id,
}: ModelSelectProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [textFilter, setTextFilter] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    onChange(e);
    setOpen(false);
  }

  const allModels = [...models];

  const selected = allModels.find((m) => m.id === value);

  return (
    <div
      className={classnames(
        styles._model_select,
        lora && styles._model_select_noborder
      )}
    >
      <div onClick={() => setOpen(true)}>
        <div className={[styles.selected_model].join(" ")}>
          <Image
            src={selected && selected.params.images[2]}
            width={26}
            height={26}
            loader={cloudflareLoader}
          />
          {title}: {selected ? selected.name : "Unselected"}
          <span className={styles.tag}>{allModels.length}</span>
          <div className={styles.arrow}>
            {lora ? (
              <div className="flex gap-1">
                {/* <ChevronRightArrow size={16} strokeWidth={3} /> */}
                <Trash2
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onChange({ target: { name: id, value: "" } } as any);
                  }}
                />
              </div>
            ) : (
              <ChevronDownArrow size={16} strokeWidth={3} />
            )}
          </div>
        </div>
      </div>
      <div>
        <Modal
          onClose={() => setOpen(false)}
          title={
            <div className={styles.model_search}>
              <span>Select {title}</span>
              <div className={styles.search}>
                <Input
                  size="sm"
                  id="textFilter"
                  value={textFilter}
                  onChange={(e) => setTextFilter(e.target.value)}
                  placeholder="Search"
                  Icon={Search}
                  disableInfo
                  customStyles={["no-margin"]}
                />
              </div>
            </div>
          }
          show={open}
          size="lg"
        >
          <div className={styles.models_list}>
            {allModels
              .filter(
                (v) =>
                  (v.name + " " + v.params.description)
                    .toLowerCase()
                    .search(textFilter.toLowerCase()) > -1
              )
              .map((v) => (
                <Model
                  v={v}
                  modelID={id}
                  value={value}
                  handleChange={handleChange}
                />
              ))}
          </div>
        </Modal>
      </div>
    </div>
  );
}
