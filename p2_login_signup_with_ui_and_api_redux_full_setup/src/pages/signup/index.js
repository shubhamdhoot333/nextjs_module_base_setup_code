import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState,useEffect } from "react";
import { addUser  } from "@/redux/slices/userSlice";
import { setStatus  } from "@/redux/slices/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import Layout from "@/components/layouts/Layout";


function index() {
  const router = useRouter();
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.user.value);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
 
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(setStatus("idle"));
       router.push('/login'); // Replace '/somepage' with your target route
    }
  }, [status, router]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("credentials",credentials);
    dispatch(addUser({credentials}));
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <Layout>
  <div
      style={{
        height: "90vh",
        backgroundImage:
          'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center"
    >{status === 'loading' && (
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      </div>
    )}
      <div className="container w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              placeholder="Enter your name"
              name="username"
              onChange={handleChange}
              type="text"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.username}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              type="email"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              placeholder="*******"
              onChange={handleChange}
              name="password"
              required
              type="password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.password}
            />
          </div>
          <div className="flex items-center justify-between">
            {status === 'failed' && <p className="text-red-500">{error}</p>}
          </div>
          <button
            type="submit"
            className="border font-bold text-gray-900 dark:text-gray-100 dark:border-gray-400 border-gray-900 rounded p-2 mr-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100"
            disabled={status === 'loading'}
          >
            Signup
          </button>
          <Link href={"/login"} style={{ all: "unset" }}>
            <button className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
              Already a user?
            </button>
          </Link>
        </form>
      </div>
    </div>
    </Layout>
  
  );
}

export default index;
