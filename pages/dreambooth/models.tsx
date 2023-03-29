import WebsiteLayout from '@/frontend/components/layout/website';

import { useEffect, useState } from "react";

import axios from 'axios';
import { useAppDispatch, useAppSelector } from "@/frontend/redux/hooks";
import { updateAuthState } from "@/frontend/redux/info/slice";
import { selectUser, selectUserStatus } from "@/frontend/redux/user/slice";

import dayjs from 'dayjs';
import Button from '@/frontend/components/button/button';
import Loader from '@/frontend/components/loader/loader';
import { DreamBoothOnboardingModal } from '@/frontend/components/onboarding/onboarding';
import styles from '@/frontend/styles/dreambooth.module.scss';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';
import { dreamboothLimits } from '@/utils/limits';


export default function DreamboothModels(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const userState = useAppSelector(selectUserStatus);
  const [models, setModels] = useState<ModelI[]>([])
  const [loader, setLoader] = useState(true);

  async function getData() {
    try {
      const [resModels] = await Promise.all([
        axios.get('/api/models?sort=createdAt'),
      ]);

      setModels(resModels.data)
    } catch {
      //
    } finally {
      // 
      setLoader(false)
    }
  }
  useEffect(() => {
    if ((userState === 'failed' || userState === 'completed') && !user.id) {
      dispatch(updateAuthState('register'));
    }
    getData()
  }, [userState, user.id]);



  return <WebsiteLayout
    title="Dreambooth - My models"
    canonical='/dreambooth/models'
    image='/social-image-dreambooth.png'
    robots='noindex'
    footer={false}
  >
    <div className='container'>
      <div className={styles.models_head}>
        <div>
          <h1 className={styles.title}>
            My models <small>[{models.length}/{dreamboothLimits[user.plan || 'free']}]</small>
          </h1>
          <p className={styles.description}>
            You can create {dreamboothLimits[user.plan || 'free']} models with your plan. {models.length > dreamboothLimits[user.plan || 'free'] ? <>
              <Link href={`/pricing`}>
                <a>Upgrade</a>
              </Link> to create more or delete some models.</> : ''}
          </p>
        </div>
        <Button
          href='/dreambooth/model/create'
          disabled={user.hasBetaAccess ? false : models.length >= dreamboothLimits[user.plan || 'free'] || user.credits < 2000}
        >
          <PlusCircle /> Create new model - 2000 credits
        </Button>
      </div>

      {
        loader ?
          <div style={{ fontSize: 15, paddingLeft: 3, height: '60vh', display: 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
            <Loader />
          </div>
          :
          models.length ?
            <div>
              <div className={styles.models_list}>
                {
                  models.map(m => (
                    <div key={m.id} className={styles.model}>
                      <div className={styles.model_preview}>
                        {
                          m.status === 'active' ?
                            <div className={styles.model_images}>
                              {
                                m.params.images.map((im: string, i: number) => (
                                  <img src={im} key={i} />
                                ))
                              }
                            </div>
                            :
                            <div className={styles.model_status}>
                              <span className={styles.status} style={{ color: statusMap[m.status].color }}>
                                <i className={styles.status_dot} style={{ backgroundColor: statusMap[m.status].color, boxShadow: `0 0 0 3px ${statusMap[m.status].shadowColor}` }} />
                                {statusMap[m.status].text}
                              </span>
                            </div>
                        }
                      </div>
                      <div className={styles.model_info}>
                        <div className={styles.model_name}>
                          {m.name}
                        </div>
                        <div className={styles.model_desc}>
                          {m.status === 'active' ? m.id : "Should finish " + dayjs(m.params.estimated_finish_at).fromNow() + ' (' + dayjs(m.params.estimated_finish_at).format('D MMM HH:mm') + ')'}
                        </div>
                        <div className={styles.model_actions} style={{ marginLeft: 'auto' }}>
                          <Button size='sm' type='default' href={`/dreambooth/model/${m.id}`} disabled={!(m.status === 'active' || m.status === 'failed')}>View Model <ArrowRight style={{ marginLeft: 9, marginRight: 0 }} /></Button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            : user.plan === 'free' || !user.plan ?
              <div style={{ fontSize: 15, paddingLeft: 3, height: '60vh', display: 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                You can&apos;t create DreamBooth models with the free plan. Start by&nbsp;<Link href={`/pricing`}>
                  <a>upgrading your plan</a>
                </Link>.
              </div>
              :
              <div style={{ fontSize: 15, paddingLeft: 3, height: '60vh', display: 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                You don&apos;t have any models yet, start by&nbsp;<Link href={`/dreambooth/model/create`}>
                  <a>creating yout first model</a>
                </Link>.
              </div>
      }

      <DreamBoothOnboardingModal />
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