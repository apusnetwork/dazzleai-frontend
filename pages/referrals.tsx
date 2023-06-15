import { CopyDuplicate } from 'frontend/components/basic-icons';
import Button from 'frontend/components/button/button';
import { InputRow } from 'frontend/components/form/form';
import Input from 'frontend/components/input/input';
import WebsiteLayout from 'frontend/components/layout/website';
import { useAppDispatch, useAppSelector } from 'frontend/redux/hooks';
import { message } from "frontend/redux/info/slice";
import { selectUser } from 'frontend/redux/user/slice';
import ImageShare from 'frontend/images/share-example.jpg'

export default function ReferralsPage(): JSX.Element {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch()

  function handleCopy() {
    if (!navigator.clipboard) {
      const textArea = document.getElementById("link-copy");
      if (!textArea) return

      try {
        textArea.focus()
        document.execCommand('copy');
        message(dispatch, { type: 'success', "text": "Copied link to clipboard!" })
        textArea.blur()

      } catch {
        message(dispatch, { type: 'danger', "text": "Error while copying link to clipboard!" })
      }

    }

    navigator.clipboard.writeText(`${window.location.protocol}://${window.location.host}/?ref=${user.id}`).then(function () {
      message(dispatch, { type: 'success', "text": "Copied link to clipboard!" })
    }, function () {
      message(dispatch, { type: 'danger', "text": "Error while copying link to clipboard!" })
    });
  }


  return (
    <WebsiteLayout title="Unlock Extra Credits by Sharing with Friends!" description="Invite your pals to Dazzle AI and watch your credits soar." robots='noindex' footer={false}>
      <div className='container'>
        <div className='w640 center-h'>
          <div className='hero'>
            <h1 className='h3' style={{ marginBottom: 24 }}>
              Unlock Extra Credits by Sharing with Friends!
            </h1>
            <div className='p3'>
              Invite your pals to Dazzle AI and watch your credits soar.<br /><span style={{ fontWeight: 500, color: '#000' }}>Both you and your friend will receive a fantastic 10 Credits</span> when they sign up using the image you share.<br />
            </div>
          </div>

          <div>
            <p className='p3' style={{ marginBottom: 24 }}>
              Spread the word on Facebook and Twitter, and enjoy the rewards!<br />Remember, the more friends you invite, the more credits you earn.<br />Supercharge your image collection today with Dazzle AI's referral program. Share and reap the benefits!
            </p>
            <img src={ImageShare.src} />
          </div>
        </div>
      </div>
    </WebsiteLayout >
  )
}
