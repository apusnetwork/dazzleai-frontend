import WebsiteLayout from '@/frontend/components/layout/website';
import AiGenerator from '@/frontend/components/tools/ai-generator/ai-generator';


import { useAppDispatch, useAppSelector } from "@/frontend/redux/hooks";
import { selectUser, selectUserStatus } from "@/frontend/redux/user/slice";



export default function AiGeneratorPage(): JSX.Element {

  // useEffect(() => {
  //   if ((userState === 'failed' || userState === 'completed') && !user.id) {
  //     dispatch(updateAuthState('register'));
  //   }
  // }, [userState, user.id]);

  return <WebsiteLayout
    title="Generate photo-realistic images from text using Stable Diffusion"
    description="We provide simple access to Stable Diffusion model, which enables generating photo-realistic images with given text input."
    canonical='/text-to-image'
    image='/social-image-generator.png'
    footer={false}
  >
    <AiGenerator />
  </WebsiteLayout >
}