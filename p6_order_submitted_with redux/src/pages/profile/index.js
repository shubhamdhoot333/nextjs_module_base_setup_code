// components/Profile.js
import Layout from '@/components/layouts/Layout';
import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { getUser  } from "@/redux/slices/userSlice";
import { useDispatch, useSelector } from 'react-redux';
const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.value[0]);
  
  useEffect(()=>{
    const token = localStorage.getItem('pizztoken');
    dispatch(getUser(token));
  },[])
  
console.log("user",user)

  

  return (
    <Layout>
         {status === 'loading' && (
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      </div>
    )}
    {error && (<p>"something went wrong"</p>)}
 <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 md:flex-row md:max-w-4xl mx-auto mt-10">
      <div className="flex-shrink-0">
        <img
          className="h-32 w-32 rounded-full object-cover md:h-48 md:w-48"
          src={ user && (user?.image)}
          alt="Profile"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 px-3">
        <h2 className="text-3xl font-semibold text-gray-800">{user && (user?.username)}</h2>
        <p className="mt-2 text-gray-600">Gender: {user && (user?.gender)}</p>
        <p className="mt-2 text-gray-600">
         Email:{user && ( user?.email)}
        </p>
      
        <div className="mt-6">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
    </Layout>
   
  );
};

export default Profile;
