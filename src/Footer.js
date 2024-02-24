import { SocialIcon } from 'react-social-icons'

function Footer(){
  return(
    <div className="Footer-div">
      <SocialIcon url="https://twitter.com/iNoxeus" target="_blank" network='twitter' bgColor='white' fgColor='black' className='Social-icon' style={{ height: 23, width: 23 }} />
      <SocialIcon url="https://www.instagram.com/manav.shandilya" target="_blank" network='instagram' bgColor='white' fgColor='black' className='Social-icon' style={{ height: 23, width: 23 }} />
      <SocialIcon url='https://www.linkedin.com/in/manavshandilya/' target='_blank' network='linkedin' bgColor='white' fgColor='black' className='Social-icon' style={{ height: 23, width: 23 }}/>
      <SocialIcon url='https://github.com/Manav-Shandilya' target='_blank' network='github' bgColor='white' fgColor='black' className='Social-icon' style={{ height: 23, width: 23 }}/>
    </div>
  )
}

export default Footer;