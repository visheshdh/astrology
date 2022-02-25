import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import './../scss/Profile.scss';
import Edit from './../assets/icons8-edit.svg'
import Delete from './../assets/icons8-delete.svg';
import { apiUrl, TOKEN } from './../utils';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Profile = ()=>{
    const dispatch = useDispatch()
    const [relatives, setRelatives] = useState([])
    const option = {
        headers: {
            'Authorization':
            TOKEN,
        },
    };
    useEffect(()=>{
        (async ()=>{
            const resp = await axios.get(`${apiUrl}relative/all`, option);
            resp.data.data && setRelatives(resp.data.data.allRelatives)
        })()
    }, []);
    const handleDelete = async (uuid, ind)=>{
        window.confirm('Do you really want to delete')
        const resp = await axios.post(`${apiUrl}relative/delete/${uuid}`,{}, option);
        relatives.splice(ind, 1)
        setRelatives([...relatives])
    }
    console.log('relatives', relatives)
    return (
        <div className="profile">
            {relatives && relatives.length <= 0 && <div>No Relatives fetched by api</div>}
            {relatives && relatives.length > 0 && <div>
                <div className="profile-column-header">
                    <div className="profile-column-header-name">Name</div>
                    <div className="profile-column-header-dob">DOB</div>
                    <div className="profile-column-header-tob">TOB</div>
                    <div className="profile-column-header-relation">Relation</div>
                </div>
                {relatives.map((relative, i)=>{
                    const {birthDetails, firstName, relation} = relative;
                    const dob = `${birthDetails.dobDay}-${birthDetails.dobMonth}-${birthDetails.dobYear}`;
                    const tob = `${birthDetails.tobHour}:${birthDetails.tobMin}`
                    return <div key={'profile'+i} className="profile-card">
                        <div className="profile-card-name">{firstName}</div>
                        <div className="profile-card-dob">{dob}</div>
                        <div className="profile-card-tob">{tob}</div>
                        <div className="profile-card-relation">{relation}</div>
                        <div onClick={()=>dispatch({
                            type: 'ADD_PROFILE_DETAILS',
                            payload: relative
                            })}
                            className="profile-card-edit">
                            <Link to='/profile'><img src={Edit}></img></Link>
                        </div>
                        <div onClick={()=>handleDelete(relative.uuid, i)} className="profile-card-delete">
                            <img src={Delete}></img>
                        </div>
                    </div>
                })}
            </div>}
            <div className="profile-add-new">
                <button onClick={()=>alert("No API provided to fetch relationId to save new profiles")} className="profile-add-new-button">Add new profile</button>
            </div>
        </div>
    )
}

export default Profile;