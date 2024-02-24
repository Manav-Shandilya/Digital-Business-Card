import Image from './images/me.jpeg';

function Profile(){
  return (
    <div>
      <img src={Image} className='profile-pic' />
    </div>
  );
}

export default Profile;