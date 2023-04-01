import Image from "next/image";
import React, { useState } from "react";
import { cloudflareLoader } from "utils/cloudflare";
import { CheckGoodYes, ChevronDownArrow } from "../basic-icons";
import Modal from "../modal/modal";

import styles from './select.module.scss';

interface ModelSelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  models: ModelI[]
  value: string
  id: string
}

export default function NodesSelect({ onChange, models, value, id }: ModelSelectProps): JSX.Element {
  const [open, setOpen] = useState(false)
  const [textFilter, setTextFilter] = useState('');


  function handleChange(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    onChange(e)
    setOpen(false);
  }

  const allModels = [
    ...models
  ]

  const selected = allModels.find(m => m.id === value)

  return (
    <div className={styles._model_select}>
      <div onClick={() => setOpen(true)}>
        <div className={[styles.selected_model].join(' ')}>
          Node: {selected ? selected.name : "Undefined"}
          <div className={styles.arrow}>
            <ChevronDownArrow size={16} strokeWidth={3} />
          </div>

        </div>
      </div>
      <div>
        <Modal
          onClose={() => setOpen(false)}
          title="选择节点"
          show={open}
          size='lg'
        >
          <div className={styles.nodes_list}>
            {
              allModels.map(v => (
                <label key={v.id} htmlFor={id + v.id} className={[styles._node, v.id.toString() === value ? styles.checked : ''].join(' ')}>
                  {v.name}
                  <input
                    name={id}
                    id={id + v.id}
                    type="radio"
                    value={v.id}
                    checked={v.id === value}
                    onChange={handleChange}
                    className={styles.model_input}
                  />
                  {
                    v.id === value
                      ?
                      <div className={styles.checked_icon}>
                        <CheckGoodYes size={10} strokeWidth={4} />
                      </div>
                      : null
                  }
                </label>
              ))
            }
          </div>
        </Modal>


      </div>
    </div >
  );
}