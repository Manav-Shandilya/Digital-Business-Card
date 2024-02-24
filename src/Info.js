import { SocialIcon } from 'react-social-icons'

function Info(){
  return(
    <>
    <div className="Info-div">
      <h2 className="name">Manav Shandilya</h2>
      <h5 className="job">Frontend Developer</h5>
      <h6>manav2084.be21@chitkara.edu.in</h6>
    </div>
    <div className="Buttons"> 
      <button className='email'>
        <SocialIcon network='email' bgColor='white' fgColor='black' style={{height: 28, width: 28}} />
        Email
      </button>
      <button className='linkedin' >
      <SocialIcon network='linkedin' bgColor='white' fgColor='#5093E2' className='linkedin-icon' style={{ height: 20, width: 20 }}/>
        linkedin</button>
    </div>
    </>
  )
}

export default Info;