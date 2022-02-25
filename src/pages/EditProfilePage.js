import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import EditProfile from '../components/EditProfile';
import './../scss/EditProfilePage.scss';

const EditProfilePage = ()=>{
    return <div>
        <ProfileHeader />
        <div className="edit-profile-content">
            <EditProfile />
        </div>
    </div>
}

export default EditProfilePage;