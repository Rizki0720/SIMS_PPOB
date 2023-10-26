import React,{useEffect} from 'react';
import ProfileLayouts from '../components/Layouts/ProfileLayouts';
import FormProfile from '../components/Fragments/FormProfile';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from './../redux/Slice/ProfileSlice';

const Profile = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const {data,loading,error } = useSelector((state) => state.profile)
      useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            dispatch(getProfile(token))
        }else{
            navigate('/login')
        }
      },[dispatch])
      console.log(data)
    return (
       <ProfileLayouts firstName={data.first_name} lastName={data.last_name}>
        <FormProfile firstName={data.first_name} lastName={data.last_name} email={data.email} />
       </ProfileLayouts>
    );
}

export default Profile;
