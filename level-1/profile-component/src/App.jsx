
import './App.css'
import { Profile } from './cmponents/Profile'

function App() {

  const profileInfo = [{
    name: 'Yuvraj Prasad',
    age: '22',
    city: 'Siliguri',
    bio: 'Learning React'
  }]

  const socialInfo = [{
    followers: '0',
    likes: '0',
    photos: '0'
  }]

  return (
    <>
    <Profile  profileInfo={profileInfo} socialInfo={socialInfo} />
    </>
  )
}

export default App
