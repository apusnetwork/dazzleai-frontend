import { Link, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { cloudflareLoader } from "utils/cloudflare";
import { CheckGoodYes, ChevronDownArrow } from "../basic-icons";
import Input from "../input/input";
import Modal from "../modal/modal";

import styles from './select.module.scss';

interface ModelSelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  models: ModelI[]
  value: string
  id: string
}

export default function ModelSelect({ onChange, models, value, id }: ModelSelectProps): JSX.Element {
  const [open, setOpen] = useState(false)
  const [textFilter, setTextFilter] = useState('');


  function handleChange(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    onChange(e)
    setOpen(false);
  }

  const allModels = [
    {
      id: 'stable-diffusion-v2.1',
      name: 'Stable Diffusion v2.1',
      params: {
        description: 'Latest text-to-image model from StabilityAI',
        author: 'stability.ai',
        author_url: 'https://stability.ai/',
        images: [
          'https://img.getimg.ai/generated/img-9jjtCkXWwKjZe9wElBEly2.png',
          'https://img.getimg.ai/generated/img-YkfgHICXA8YFGEzbWC36kS.png',
          'https://img.getimg.ai/generated/img-q9tOtcskhqYjxvpFdvE5c2.png',
          'https://img.getimg.ai/generated/img-vU4xLUCrxSBSA6ky8cXtuP.png'
        ]
      },
    },
    {
      id: 'stable-diffusion-v1.5',
      name: 'Stable Diffusion v1.5',
      params: {
        description: 'Text-to-image model from StabilityAI',
        author: 'stability.ai',
        author_url: 'https://stability.ai/',

        images: [
          'https://img.getimg.ai/generated/img-gOyyHvmiu4Fjl21f6ucKav.png',
          'https://img.getimg.ai/generated/img-G99O7IbVKSyyH9XyOMzlxA.png',
          'https://img.getimg.ai/generated/img-Kzpf5VdKQCQkbGFwew5y2q.png',
          'https://img.getimg.ai/generated/img-8VpR28yCp2Bq1T3wfrxeeM.png',
        ]
      },
    },
    ...models
  ]

  const selected = allModels.find(m => m.id === value)

  return (
    <div className={styles._model_select}>
      <div onClick={() => setOpen(true)}>
        <div className={[styles.selected_model].join(' ')}>
          <Image src={selected && selected.params.images[2]} width={16} height={16} loader={cloudflareLoader} />

          Model: {selected ? selected.name : "Undefined"}
          <span className={styles.tag}>
            {Math.floor(allModels.length / 10) * 10}+
          </span>
          <div className={styles.arrow}>
            <ChevronDownArrow size={16} strokeWidth={3} />
          </div>

        </div>
      </div>
      <div>
        <Modal
          onClose={() => setOpen(false)}
          title={
            <div className={styles.model_search}>
              <span>Select Model</span>
              <div className={styles.search}>
                <Input
                  size='sm'
                  id='textFilter'
                  value={textFilter}
                  onChange={(e) => setTextFilter(e.target.value)}
                  placeholder='Search'
                  Icon={Search}
                  disableInfo
                  customStyles={['no-margin']}
                />
              </div>
            </div>
          }
          show={open}
          size='lg'
        >

          <div className={styles.models_list}>
            {
              allModels.filter(v => (v.name + ' ' + v.params.description).toLowerCase().search(textFilter.toLowerCase()) > -1).map(v => (
                <label key={v.id} htmlFor={id + v.id} className={[styles._model, v.id.toString() === value ? styles.checked : ''].join(' ')}>
                  <div className={styles.model}>
                    <div className={styles.model_images}>
                      {
                        v.params.images && v.params.images.map((im: string, i: number) => (
                          <Image src={im} key={i} width={100} height={100} loader={cloudflareLoader} />

                        ))
                      }
                    </div>

                    <div className={styles.model_info}>
                      <div>
                        <div className={styles.model_name}>
                          {v.name}
                        </div>
                        <div className={styles.model_desc}>
                          {v.params.description || `Your own DreamBooth model. Modifer to invoke style "${v.params.instance_prompt}"`}
                        </div>
                      </div>
                      {
                        v.params.author_url ? <div className={styles.model_author}>
                          by <a onClick={e => e.stopPropagation()} target="_blank" rel='noreferrer' href={v.params.author_url}>
                            <Link size={13} />
                            {v.params.author}
                          </a>
                        </div>
                          : null
                      }
                    </div>
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
                  </div>
                </label>
              ))
            }
          </div>
        </Modal>


      </div>
    </div >
  );
}