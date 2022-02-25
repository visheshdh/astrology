import React from 'react';
import './../scss/ProfileHeader.scss';
import { Link } from 'react-router-dom';
import icon from './../assets/icon.png';

const ProfileHeader = ()=>{
    return <header>
        <div className="profile-header-wrapper">
            <div className="profile-header">
                <div className="profile-header-back"><Link to="/">&#8249;</Link></div>
                <div className="profile-header-icon"><img src={icon}></img></div>
                <div className="profile-header-logout"><button>Logout</button></div>
            </div>
            <div className="profile-sub-header">
                <div className="profile-sub-header-myprofile">My Profile</div>
                <div className="profile-sub-header-history">Order history</div>
            </div>
            <div className="profile-header-nav">
                <div className="profile-header-nav-basic">Basic Profile</div>
                <div className="profile-header-nav-friends">Friends and Family Profile</div>
            </div>
        </div>
    </header>
}

export default ProfileHeader;