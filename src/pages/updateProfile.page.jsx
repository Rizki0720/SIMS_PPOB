import React,{useEffect} from 'react';
import ProfileLayouts from '../components/Layouts/ProfileLayouts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from './../redux/Slice/ProfileSlice';
import UpdateProfile from './../components/Fragments/UpdateProfile';

const UpdateProfilePage = () => {
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
    return (
       <ProfileLayouts firstName={data.first_name} lastName={data.last_name}>
        <UpdateProfile firstName={data.first_name} lastName={data.last_name} email={data.email}/>
       </ProfileLayouts>
    );
}

export default UpdateProfilePage;
