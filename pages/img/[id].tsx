import axios from 'axios';
import ImageView from 'frontend/components/image/view';
import WebsiteLayout from 'frontend/components/layout/website';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function ImageSharePage(props: ImageI): JSX.Element {
  const router = useRouter();

  const prompt = props.modelTask ? (props.modelTask.params.prompt || "") : "";
  const splitted = prompt.split(/[,|.]/gi)
  let h = splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1) + '.';

  useEffect(() => {
    if (props.id) {
      sessionStorage.setItem('from_img', props.id)
    }
  }, [props])

  if (props.modelTask.model === 'real-esrgan' || props.modelTask.model === 'gfpgan') {
    h = 'Enhanced image.'
  }
  if (props.modelTask.model === 'image-mixer') {
    h = 'Mixed image.'
  }

  return <WebsiteLayout
    title={h + ' Generated with Stable Diffusion'}
    description={prompt}
    canonical={`/img/${router.query.id}`}
    image={props.url}
    footer={false}
  >

    <ImageView
      {...props}
    />

  </WebsiteLayout>
}


export async function getServerSideProps({ params, req }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<ImageI>> {
  try {
    const host = req.headers.host;
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const res = await axios.get(`${protocol}://${host}/api/images/shared/${params?.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': req.headers.cookie || '',
      },
    })

    return {
      props: res.data
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}