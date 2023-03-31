import axios from 'axios';
import ImageView from 'frontend/components/image/view';
import WebsiteLayout from 'frontend/components/layout/website';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';


export default function ImageSharePage(props: ImageI): JSX.Element {
  const router = useRouter();


  const prompt = props.modelTask ? (props.modelTask.params.prompt || "") : "";
  const splitted = prompt.split(/[,|.]/gi)
  let h = splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1) + '.';

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


export async function getServerSideProps({ params }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<ImageI>> {
  try {
    const res = await axios.get(`http://localhost/api/images/${params?.id}`)

    return {
      props: res.data
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}