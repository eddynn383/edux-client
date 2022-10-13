import Button from "../../components/Button"
import Icon from "../../components/Icon"
import Cover from "../../components/Cover"
import useAuth from "../../hooks/useAuth"


import './style.scss'

const Profile = ({ progress }) => {
    const { avatar, firstname, lastname, email, status } = useAuth()
    console.log(email)
    console.log(status)
    const level = 11

    return (
        <div className="module profile">
            <div className="profile_user">
                <Cover url={avatar} alt="Profile" cn={['progress']} progressData={progress} progress={true} style={{maxWidth: "70px"}} />
                <div className="user_details">
                    <span className="details_name">{firstname + " " + lastname}</span>
                    <span className="details_email">{`Level ${level}`}</span>
                </div>
                <Button cn={['logout']} variant="text"><Icon value="faRightFromBracket"/></Button>
            </div>
        </div>  
    )
}

export default Profile
