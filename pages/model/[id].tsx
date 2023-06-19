import WebsiteLayout from '@/frontend/components/layout/website';
import axiosInstance, { oapi } from '@/frontend/utils/axios';
import axios from 'axios';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { createRef, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import GeneratedImage from '@/frontend/components/image/image';
import Button from '@/frontend/components/button/button';
import styles from '@/frontend/components/tools/ai-generator/ai-generator.module.scss';
import { transformGetImagesResponse } from '../api/images';
import { SimpleImage } from '@/frontend/components/website/visuals';
import DefaultAvatar from '@/frontend/components/website/default_avatar.webp'

export default function Model({model}: any): JSX.Element {
    const [images, setImages] = useState<ImageI[]>([])
    const [pagination, setPagination] = useState({
      loading: false, hasMore: true
    });
    async function getImages() {
    if (!model) return
      if (!pagination.hasMore) return
      let hasMore = true;
      try {
        setPagination({ ...pagination, loading: true })
        const res = await oapi.get('/shared/images/list', {
            params: {
                limit: 24,
                offset: images.length,
                model: model.model_file_name,
                order: 'desc',
            }
        });
        setImages([...images, ...transformGetImagesResponse(res.data)])
        hasMore = res.data.length > 0
      } catch(e) {
        console.error(e)
        setImages([]);
      } finally {
        setPagination({ loading: false, hasMore: hasMore });
      }
    }
    
  useEffect(() => {
    getImages();
  }, [model])

    if (!model) return <WebsiteLayout
    title="Everything you need to create images with AI"
    description="Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more."
    canonical='/'
    footer={false}
  >{''}</WebsiteLayout>

  return <WebsiteLayout
    title="Everything you need to create images with AI"
    description="Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more."
    canonical='/'
    footer={false}
  >
    <div className='py-1 px-2 md:py-2 md:px-12 lg:py-4 lg:px-24'>
    <div className='p-2 md:p-4 lg:p-8 flex'>
        <div className="flex items-end flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden">
            <SimpleImage model={model} />
            <div className='flex flex-col w-full pl-4 py-4 md:py-0' style={{ alignItems: 'start' }}>
            <div className='flex'>
                <img className="w-12 h-12 rounded-full mr-4" src={model.author_avatar || DefaultAvatar.src} />
                <div className='text-2xl font-semibold text-slate-600'>{model.author}</div>
            </div>
            <div className='pl-2 w-full'>
                {[
                    { label: 'Type', value: model.type },
                    { label: 'Run Count', value: model.use_count },
                    { label: 'Base Model', value: model.checkpoint_file_name },
                ].map(({ label, value }) => <div key={label} className='flex flex-col justify-start mt-4' style={{alignItems: 'flex-start'}}>
                    <div className='w-24 flex-shrink-0 text-sm text-gray-600'>{label}</div>
                    <div className=''>{value}</div>
                </div>)}
            </div>
            </div>
        </div>
    </div>
    <div className='flex justify-center text-3xl font-medium text-gray-800 mt-8 md:mt-0'>Explore Related</div>
    <div className={styles.images} id='images'>
        <InfiniteScroll
          dataLength={images.length}
          next={getImages}
          hasMore={pagination.hasMore}
          loader
          className={styles.infinite}
        >
          <Masonry
            breakpointCols={{
              default: 8,
              2400: 6,
              1700: 4,
              1260: 3,
              1024: 2,
              840: 1,
              760: 2
            }}
            className={styles.grid}
            columnClassName={styles.column}
          >
            {
              images.map((i) => (
                <div id={i.id} key={i.id} className={styles.img}>
                  <GeneratedImage
                    image={i}
                  />
                </div>
              ))
            }
            {
              images.length == 0 && Array(24).fill(1).map((_, i) => (
                <div
                  key={i}
                  className={styles.image}
                  style={{
                    paddingBottom: '100%'
                  }}
                >

                </div>
              ))
            }

          </Masonry>
          <div style={{ height: 24 }}></div>
          {pagination.hasMore ?
            <Button
              type='default'
              loading={pagination.loading}
              onClick={getImages}
              fullWidth
            >
              Load{pagination.loading ? 'ing' : ''} more images
            </Button>
            : <div />}
          <div style={{ height: 24 }}></div>

        </InfiniteScroll>
        {/* <TextToImageOnboardingModal /> */}
      </div>
      </div>
  </WebsiteLayout >
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    if (!params) return { notFound: true }
    const modelRes = await axiosInstance.get('/api/models/list', { params: {ids: params.id}})
    if (!modelRes.data.length) return { notFound: true }
    return { props: {model: modelRes.data[0]} }
}

export function getStaticPaths(): GetStaticPathsResult {
    return {
        paths: [],
        fallback: false, // false or "blocking"
      }
  }