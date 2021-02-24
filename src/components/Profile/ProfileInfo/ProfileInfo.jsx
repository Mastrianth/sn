import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return <div>
        <div>
            <img
                src='https://sun2.48276.userapi.com/ZW1LARB0RnVkJBKzNnvNDpifTc1i6GH7p4eOUw/nS9wAdDm0ZQ.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}  />
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}  />
        </div>
    </div>
}

export default ProfileInfo;