import { CopyDuplicate } from 'frontend/components/basic-icons';
import Button from 'frontend/components/button/button';
import { InputRow } from 'frontend/components/form/form';
import Input from 'frontend/components/input/input';
import WebsiteLayout from 'frontend/components/layout/website';
import { useAppDispatch, useAppSelector } from 'frontend/redux/hooks';
import { message } from "frontend/redux/info/slice";
import { selectUser } from 'frontend/redux/user/slice';

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
    <WebsiteLayout title="Invite friends. Earn free image credits.
    " description="Get more credits by sharing getimg.ai with friends." robots='noindex'>
      <div className='container'>
        <div className='w640 center-h'>

          <div className='hero'>
            <h1 className='h3'>
              Invite friends. Earn free image credits.
            </h1>
            <div className='p3'>
              Get more credits by sharing getimg.ai with friends.
            </div>
          </div>

          <div>
            <h2 className='h4'>Give 50 credits, Get 20 credits.
            </h2>
            <p className='p3'>
              Everyone you refer gets 50 image credits. Once they create an account with us, you&apos;ll get 20 credits too. Credits earned through referrals do not expire, and there is no limit to the amount you can earn.
            </p>
            {user.id ? <p className='p3'>
              Copy your personal referral link and share it with your friends and followers.
            </p> : <p className='p3'>
              Log in to see your personal referral link.
            </p>}


            {user.id ? <InputRow>
              <Input
                label="Referral Link"
                id="link"
                value={`https://${window.location.host}/?ref=${user.id}`}
                disableInfo
              />
              <div style={{ marginTop: 34 }}>
                <Button onClick={handleCopy}><CopyDuplicate /> Copy</Button>
              </div>
            </InputRow> : null}
          </div>
        </div>
      </div>
    </WebsiteLayout >
  )
}
