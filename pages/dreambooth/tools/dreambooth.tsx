import WebsiteLayout from 'frontend/components/layout/website';

import { useState } from "react";

import { ArrowRight } from 'frontend/components/basic-icons';
import Button from 'frontend/components/button/button';
import { ButtonRow } from 'frontend/components/form/form';
import { useAppDispatch, useAppSelector } from "frontend/redux/hooks";
import { selectUser, selectUserStatus } from "frontend/redux/user/slice";

import styles from 'frontend/styles/dreambooth.module.scss';


export default function DreamboothPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const userState = useAppSelector(selectUserStatus);
  const [models, setModels] = useState<ModelI[]>([])
  const [waitingTime, setWaitingTime] = useState(2000)



  return <WebsiteLayout
    title="Dreambooth  - Transform your images into custom AI models"
    description="Turn your photos into Text to Image model that can generate stunning images of your chosen subject"
    canonical='/dreambooth'
    image='/social-image-dreambooth.png'
  >
    <div className='container'>
      <div className='hero center'>
        <div>
          <h1 className='h1'>Transform your images <br />into custom AI models.</h1>
          <p className='p1'>
            Turn your photos into Text to Image model that can generate stunning images of your chosen subject. Bring your creative vision to life, explore new art styles, create custom AI avatars, or generate product shots. Possibilities are endless.
          </p>
          <div style={{ height: 32 }} />
          <ButtonRow align='center'>
            <Button size='xl' href='/dreambooth/models'>
              Create your first model
              <ArrowRight style={{ marginLeft: 12, marginRight: 0 }} />
            </Button>
          </ButtonRow>
        </div>
      </div>

      <div className={styles.example}>
        <div className={styles.example_info}>
          <h2>AI Avatars</h2>
          <p>Create hundreds of AI avatars yourself.</p>
        </div>
        <div className={styles._example_images}>
          <div className={styles.example_label}>
          </div>
          <div className={styles.example_label}>
            AI Generated
          </div>
          <div className={styles._real_image}>
            <img src="/images/db-jakub.jpg" className={styles.real_image} />
            <img src='/arrow-whirl.svg' className={styles.arrow} />
          </div>

          <div className={styles.example_images}>

            <img src="https://img.dazzle.ai/generated/img-U2efQ3F9o4yP37oTfCCXxR.png" />
            <img src="https://img.dazzle.ai/generated/img-rZiWNezaSn9UMuMMJg2bqp.png" />
            <img src="https://img.dazzle.ai/generated/img-oIWeclzIe2vp2NXido3JFn.png" />
            <img src="https://img.dazzle.ai/generated/img-QbzTUjPZm5tVu4lxk6uCe9.png" />
            <img src="https://img.dazzle.ai/generated/img-6vLJI5bXMZ2VQG6IjWPkSK.png" />
            <img src="https://img.dazzle.ai/generated/img-ETWuAUF1SaDIjDPlJpwwX9.png" />
            <img src="https://img.dazzle.ai/generated/img-PhLyAbKohiIefUUBFn6awq.png" />
            <img src="https://img.dazzle.ai/generated/img-mP3P8GuLiAR2eg7F00uR2q.png" />
            <img src="https://img.dazzle.ai/generated/img-WU8vR8bQgazTZJXjEtRURZ.png" />

            <img src="https://img.dazzle.ai/generated/img-RSjzhXKvpdcNwdkFV26OBK.png" />
            <img src="https://img.dazzle.ai/generated/img-IkRayyu2jd1IuWssD23cJE.png" />
            <img src="https://img.dazzle.ai/generated/img-j6x1gMtfhKJds9mkEXXlBZ.png" />
            <img src="https://img.dazzle.ai/generated/img-etfc1VVkDN4PluZ9czyehs.png" />
            <img src="https://img.dazzle.ai/generated/img-ojbMGJ8YbQllsExO7Rsa7x.png" />
            <img src="https://img.dazzle.ai/generated/img-W4jaNmKperH4aWTFZccigQ.png" />
            <img src="https://img.dazzle.ai/generated/img-5IMpDEnBTDnNDmtAUcemBM.png" />
          </div>
        </div>
      </div>
      <div className={styles.example}>
        <div className={styles.example_info}>
          <h2>Product Shots</h2>
          <p>See your product in different scenerios or get inspired generating infinite variations.</p>

        </div>
        <div className={styles._example_images}>
          <div className={styles.example_label}>
          </div>
          <div className={styles.example_label}>
            AI Generated
          </div>
          <div className={styles._real_image}>
            <img src="/images/db-backpack.jpg" className={styles.real_image} />
            <img src='/arrow-whirl.svg' className={styles.arrow} />
          </div>



          <div className={styles.example_images}>

            <img src="https://img.dazzle.ai/generated/img-aoEPgGPKnxXlNR61m5JvcU.png" />
            <img src="https://img.dazzle.ai/generated/img-mt4rTAldHhkUzf1X7HDePI.png" />
            <img src="https://img.dazzle.ai/generated/img-xv5IMMWo0DVYbmAYX1uoZK.png" />
            <img src="https://img.dazzle.ai/generated/img-JasB5u0M6Ae0vH4F2NvA9r.png" />
            <img src="https://img.dazzle.ai/generated/img-tmcxIsHnzLCxfFNjAc1ShZ.png" />
            <img src="https://img.dazzle.ai/generated/img-nz8Lig1PHPaeqTLjbkbxqw.png" />
            <img src="https://img.dazzle.ai/generated/img-m7S3HKYItOdOXrNUi6uhZs.png" />
            <img src="https://img.dazzle.ai/generated/img-3MU4NG9aaPVW2AQvEPyIrd.png" />


            <img src="https://img.dazzle.ai/generated/img-LcWDzogqMgfxlWDsWHBsA4.png" />
            <img src="https://img.dazzle.ai/generated/img-57AmVI4xGD95mo6vEUeFmS.png" />
            <img src="https://img.dazzle.ai/generated/img-OOrYGLKobLKflNx0dUUAhG.png" />
            <img src="https://img.dazzle.ai/generated/img-fu1GBlCA6LC5scIsnOqS24.png" />
            <img src="https://img.dazzle.ai/generated/img-VPAH7PKQCr5u9jOZifUaUx.png" />
            <img src="https://img.dazzle.ai/generated/img-XiFCmIZmatQoiWdzcKsOLd.png" />
            <img src="https://img.dazzle.ai/generated/img-C5tuMvfxj5rgUzmO1XKsLK.png" />
            <img src="https://img.dazzle.ai/generated/img-KPBIgng2i4E07E8j366aIT.png" />
          </div>
        </div>
      </div>
      <div className={styles.example}>
        <div className={styles.example_info}>
          <h2>Styles</h2>
          <p>Teach AI to replicate any style or get creative with endless art possibilities.</p>

        </div>
        <div className={styles._example_images}>

          <div className={styles.example_label}>
          </div>
          <div className={styles.example_label}>
            AI Generated
          </div>
          <div className={styles._real_image}>
            <img src="/images/db-graffiti.jpg" className={styles.real_image} />
            <img src='/arrow-whirl.svg' className={styles.arrow} />
          </div>

          <div className={styles.example_images}>

            <img src="https://img.dazzle.ai/generated/img-3z3AfcIa6d0Ll0xQhMc8M6.png" />
            <img src="https://img.dazzle.ai/generated/img-sd31sMjVAoHjOqAXhGhO66.png" />
            <img src="https://img.dazzle.ai/generated/img-DcEGlr2Qxck1fNPgbhzIEo.png" />
            <img src="https://img.dazzle.ai/generated/img-InVMWuRlqRVYvomz77Alcq.png" />
            <img src="https://img.dazzle.ai/generated/img-kLt5F7z8stqeuGYZimy3OA.png" />
            <img src="https://img.dazzle.ai/generated/img-4i8HcW0hrTm8BUvYHmQRKO.png" />
            <img src="https://img.dazzle.ai/generated/img-ntTBCtWWHuXC51gJnpehSQ.png" />
            <img src="https://img.dazzle.ai/generated/img-804lATrdQuhiNAA8lqmTG4.png" />
            <img src="https://img.dazzle.ai/generated/img-RppRoZsByPyLBVngmdLLLO.png" />
            <img src="https://img.dazzle.ai/generated/img-0JVBZ9WewsJbHwfSBrOCUh.png" />
            <img src="https://img.dazzle.ai/generated/img-PxXWRB91UP5r3UW3v3wQ39.png" />
            <img src="https://img.dazzle.ai/generated/img-xlxIVR16DDKF2dHNxEd3ud.png" />
            <img src="https://img.dazzle.ai/generated/img-tu20LSBCQi1swMlsxt2BGt.png" />
            <img src="https://img.dazzle.ai/generated/img-knoMQO3rBoIeprx8mD6kO3.png" />
            <img src="https://img.dazzle.ai/generated/img-kVRh99JJzPoQ6K9SavNtcA.png" />
            <img src="https://img.dazzle.ai/generated/img-yqa9UPEfcBBVcZlDrcUim7.png" />
          </div>
        </div>
      </div>

    </div>

  </WebsiteLayout >
}


const statusMap: Record<string, any> = {
  'pending': {
    color: 'rgba(245, 169, 6, 1)',
    shadowColor: 'rgba(245, 169, 6, 0.2)',
    text: 'Waiting in queue'
  },
  'training': {
    color: 'rgb(6, 122, 245)',
    shadowColor: 'rgba(6, 122, 245, 0.2)',
    text: "Training"
  },
  'trained': {
    color: 'rgb(6, 122, 245)',
    shadowColor: 'rgba(6, 122, 245, 0.2)',
    text: "Loading"
  },
  'active': {
    color: 'rgb(20, 165, 97)',
    shadowColor: 'rgba(20, 165, 97, 0.2)',
    text: 'Active'
  },
  'failed': {
    color: '#f51606',
    shadowColor: 'rgba(245, 22, 6, 0.2)',
    text: 'Failed'
  },
}