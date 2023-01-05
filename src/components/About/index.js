import Cookie from 'js-cookie'
import Header from '../Header'

import './index.css'

const About = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div>
        <h1>About Route</h1>
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </>
  )
}

export default About
