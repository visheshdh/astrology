import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import WalletBalanceProfile from '../components/WalletBalanceProfile';
import Profile from './../components/Profile';
import './../scss/ProfilePage.scss'

const ProfilePage = ()=>{
    return <div>
        <ProfileHeader />
        <div className="profile-page-content">
            <WalletBalanceProfile />
            <Profile />
        </div>
    </div>
}

export default ProfilePage;