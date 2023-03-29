import Image from "next/image";
import React, { useState } from "react";
import { CheckGoodYes, ChevronDownArrow } from "../basic-icons";
import Modal from "../modal/modal";

import inputStyles from '../input/input.module.scss';
import Label from "../input/label";
import styles from './select.module.scss';
interface ControlnetSelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  value: string
  id: string
}

export default function ControlnetSelect({ onChange, value, id }: ControlnetSelectProps): JSX.Element {
  const [open, setOpen] = useState(false)


  function handleChange(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    onChange(e)
    setOpen(false);
  }

  const controlnets = [
    {
      id: 'none',
      name: 'None',
      description: 'Simple image to image mode.',
      image: '/gifs/.gif'
    },
    {
      id: 'canny',
      name: 'Edges (Canny)',
      description: 'Keep most of visible edges.',
      image: '/gifs/canny.gif'
    },
    {
      id: 'hed',
      name: 'Edges (HED)',
      description: 'Best for recoloring and stylizing.',
      image: '/gifs/hed.gif'
    },
    {
      id: 'mlsd',
      name: 'Straight lines',
      description: 'Best for buildings or other structures.',
      image: '/gifs/lines.gif'
    },
    {
      id: 'normal',
      name: 'Normal Map',
      description: 'Retain original image normal map.',
      image: '/gifs/normal.gif'
    },
    {
      id: 'depth',
      name: 'Depth',
      description: 'Retain original image depth.',
      image: '/gifs/depth.gif'
    },
    {
      id: 'openpose',
      name: 'Pose',
      description: 'Copy any human pose.',
      image: '/gifs/pose.gif'
    },
    {
      id: 'scribble',
      name: 'Scribble',
      description: 'Turn sketches into photos or art.',
      image: '/gifs/scribble.gif'
    },
  ]

  const selected = controlnets.find(m => m.id === value)

  return (
    <div className={styles._controlnet_select}>
      <div className={[inputStyles._, inputStyles.with_label].join(' ')} onClick={() => setOpen(true)}>
        <div className={[inputStyles.input, inputStyles.md, inputStyles._select, styles.controlnet_select].join(' ')}>
          {selected && selected.name}
          <Label htmlFor={id} className={inputStyles.input_label}>Control image with</Label>
          <ChevronDownArrow className={styles.chevron} size={16} style={{ top: 32 }} />
        </div>
      </div>
      <div>
        <Modal
          onClose={() => setOpen(false)}
          title={
            <div className={styles.model_search}>
              <span>Select ControlNet</span>
            </div>
          }
          show={open}
          size='md'
        >

          <div className={styles.models_list}>
            {
              controlnets.map(v => (
                <label key={v.id} htmlFor={id + v.id} className={[styles._model, v.id.toString() === value ? styles.checked : ''].join(' ')}>
                  <div className={styles.model}>
                    <div className={styles.controlnet_images}>
                      <Image src={v.image} width={400} height={400} />
                    </div>

                    <div className={styles.model_info}>
                      <div>
                        <div className={styles.model_name}>
                          {v.name}
                        </div>
                        <div className={styles.model_desc}>
                          {v.description}
                        </div>
                      </div>

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