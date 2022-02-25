import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import './../scss/EditProfile.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiUrl, TOKEN } from './../utils'

const EditProfile = ()=>{
    const profile = useSelector((state)=>state.reducer && state.reducer.profileDetails);
    let profileDetails = {}
    if(profile){
        profileDetails = {
            fullname: profile.firstName,
            dobDay: profile.birthDetails.dobDay,
            dobMonth: profile.birthDetails.dobMonth,
            dobYear: profile.birthDetails.dobYear,
            tobHour: profile.birthDetails.tobHour,
            tobMin: profile.birthDetails.tobMin,
            relation: profile.relation,
            gender: profile.gender,
            meridiem: profile.birthDetails.meridiem,
            placeId: profile.birthPlace.placeId,
            placeName: profile.birthPlace.placeName
        }
    }
    const [newProfileDetails, setNewProfileDetails] = useState(profileDetails);
    const [apiSuccess, setApiSuccess] = useState("pending")
    const [invalidObj, setInvalidObj] = useState({})

    const handleChange = (e)=>{
        setInvalidObj({...invalidObj, [e.target.name]: false})
        setNewProfileDetails({...newProfileDetails, [e.target.name]: e.target.value})
    }
    const handleMeridiemChange = (value)=>{
        setNewProfileDetails({...newProfileDetails, meridiem: value})
    }
    const handleSave = async() => {
        let isFormValid = true;
        const inValidObj = {}
        if(!newProfileDetails.dobDay){
            isFormValid = false;
            inValidObj.dobDay = true
        }
        if(!newProfileDetails.dobMonth){
            isFormValid = false;
            inValidObj.dobMonth = true
        }
        if(!newProfileDetails.dobYear){
            isFormValid = false;
            inValidObj.dobYear = true
        }
        if(!newProfileDetails.tobHour){
            isFormValid = false;
            inValidObj.tobHour = true
        }
        if(!newProfileDetails.tobMin){
            isFormValid = false;
            inValidObj.tobMin = true
        }
        if(!newProfileDetails.meridiem){
            isFormValid = false;
            inValidObj.meridiem = true
        }
        if(!newProfileDetails.placeName){
            isFormValid = false;
            inValidObj.placeName = true
        }
        if(!newProfileDetails.fullname){
            isFormValid = false;
            inValidObj.fullname = true
        }
        if(!newProfileDetails.gender){
            isFormValid = false;
            inValidObj.gender = true
        }
        if(!newProfileDetails.relation){
            isFormValid = false;
            inValidObj.relation = true
        }
        if(!isFormValid){
            setInvalidObj(inValidObj)
        }
        const option = {
            headers: {
                'Authorization':
                TOKEN,
            },
        };
        const req = {
            "uuid": profile && profile.uuid,
            "birthDetails": {
              "dobDay": newProfileDetails.dobDay,
              "dobMonth": newProfileDetails.dobMonth,
              "dobYear": newProfileDetails.dobYear,
              "tobHour": newProfileDetails.tobHour,
              "tobMin": newProfileDetails.tobMin,
              "meridiem": newProfileDetails.meridiem,
            },
            "birthPlace": {
              "placeName":  newProfileDetails.placeName,
              "placeId": "ChIJL_P_CXMEDTkRw0ZdG-0GVvw"
            },
            "firstName":  newProfileDetails.fullname,
            "lastName": "",
            "gender": newProfileDetails.gender,
            "relation": newProfileDetails.relation,
            "relationId": profile && profile.relationId
        }
        try{
            const resp = await axios.post(
                `${apiUrl}relative/update/${profile.uuid}`,
                req,
                option
            )
            console.log(resp, resp.data, resp.data.success)
            if(resp.data && resp.data.success === true){
                setApiSuccess("success")
            }else{
                setApiSuccess("failed")
            }
        }catch(e){
            setApiSuccess("failed")
        }
        setTimeout(()=>{
            setApiSuccess("pending")
        }, 3000)
    }
    console.log('profileDetails', profileDetails)
    return (
        <div className="edit-profile">
            <div className="edit-profile-heading">
                <Link to="/view-profile">&#8249;</Link>
                <div className="edit-profile-text">Add new Profile</div>
            </div>
            <label className="edit-profile-name">Name</label>
            <div className={`edit-profile-name-input`}>
                <input 
                    style={{border: invalidObj.fullname ? '2px solid red':'2px solid lightgray'}}
                    name="fullname"
                    value={newProfileDetails.fullname}
                    type="text"
                    onChange={(e)=>handleChange(e)}>
                </input>
                {invalidObj.fullname && <div className="edit-profile-error">Invalid name</div>}
            </div>
            <label className="edit-profile-dob">Date of Birth</label>
            <div className="edit-profile-dob-wrapper">
                <div>
                    <input style={{border: invalidObj.dobDay ? '2px solid red':'2px solid lightgray'}} value={newProfileDetails.dobDay || ""} name="dobDay" onChange={(e)=>handleChange(e)} type="text" placeholder="DD"></input>
                    {invalidObj.dobDay && <div className="edit-profile-error">Invalid day</div>}
                </div>
                <div>
                    <input style={{border: invalidObj.dobMonth ? '2px solid red':'2px solid lightgray'}} value={newProfileDetails.dobMonth || ""} name="dobMonth" onChange={(e)=>handleChange(e)} type="text" placeholder="MM"></input>
                    {invalidObj.dobMonth && <div className="edit-profile-error">Invalid Month</div>}
                </div>
                <div>
                    <input style={{border: invalidObj.dobYear ? '2px solid red':'2px solid lightgray'}} value={newProfileDetails.dobYear || ""} name="dobYear" onChange={(e)=>handleChange(e)} type="text" placeholder="YYYY"></input>
                    {invalidObj.dobYear && <div className="edit-profile-error">Invalid Year</div>}
                </div>
            </div>
            <label className="edit-profile-tob">Time of Birth</label>
            <div className="edit-profile-tob-wrapper">
                <div>
                    <input style={{border: invalidObj.tobHour ? '2px solid red':'2px solid lightgray'}} value={newProfileDetails.tobHour || ""} name="tobHour" onChange={(e)=>handleChange(e)} type="text" placeholder="HH"></input>
                    {invalidObj.tobHour && <div className="edit-profile-error">Invalid hour</div>}
                </div>
                <div>
                    <input style={{border: invalidObj.tobMin ? '2px solid red':'2px solid lightgray'}} value={newProfileDetails.tobMin || ""} name="tobMin" onChange={(e)=>handleChange(e)} type="text" placeholder="MM"></input>
                    {invalidObj.tobMin && <div className="edit-profile-error">Invalid min</div>}
                </div>
                <div className="edit-profile-tob-meridian">
                    <div onClick={()=>handleMeridiemChange('AM')} className={`edit-profile-tob-meridian-am ${newProfileDetails.meridiem !== "AM" ? "": 'edit-profile-tob-meridian-am--active'}`}>AM</div>
                    <div onClick={()=>handleMeridiemChange('PM')} className={`edit-profile-tob-meridian-am ${newProfileDetails.meridiem !== "PM" ? "": 'edit-profile-tob-meridian-pm--active'}`}>PM</div>
                </div>
            </div>
            <label className="edit-profile-pob">Place of birth</label>
            <div className="edit-profile-pob-input">
                <input style={{border: invalidObj.placeName ? '2px solid red':'2px solid lightgray'}} onChange={(e)=>handleChange(e)} value={newProfileDetails.placeName || ""} name="placeName" onClick={(e)=>handleChange(e)}  type="text"></input>
                {invalidObj.placeName && <div className="edit-profile-error">Invalid placeName</div>}
            </div>
            <div className="edit-profile-gender-wrapper">
                <div className="edit-profile-gender-input">
                    <label>Gender</label>
                    <input style={{border: invalidObj.tobMin ? '2px solid red':'2px solid lightgray'}} value={newProfileDetails.gender || ""} name="gender" onChange={(e)=>handleChange(e)} type="text"></input>
                    {invalidObj.gender && <div className="edit-profile-error">Invalid gender</div>}
                </div>
                <div className="edit-profile-relation-input">
                    <label>Relation</label>
                    <input style={{border: invalidObj.tobMin ? '2px solid red':'2px solid lightgray'}} value={newProfileDetails.relation || ""} name="relation" onChange={(e)=>handleChange(e)} type="text"></input>
                    {invalidObj.relation && <div className="edit-profile-error">Invalid relation</div>}
                </div>
            </div>
            <div className="edit-profile-save"><button onClick={()=>handleSave()}>Save changes</button></div>
            {apiSuccess === "success" && <div className="edit-profile-message">Profile added/edited successfully</div>}
            {apiSuccess === "failed" && <div className="edit-profile-failed-message">Profile added/edited Failed</div>}
        </div>
    )
}

export default EditProfile;