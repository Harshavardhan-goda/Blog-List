/* eslint-disable arrow-body-style */
import './index.css'

const UserInfo = () => {
  return (
    <div className="profile-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="image-icon"
      />
      <h1 className="profile-heading">Wade Warren</h1>
      <p className="profile-paragraph">Software developer at UK</p>
    </div>
  )
}

export default UserInfo
