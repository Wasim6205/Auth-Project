import { Link } from "react-router";
import {useForm} from "react-hook-form"
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const {registeredUsers,setRegisteredUsers} = useContext(Auth)
    
    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm({
        mode:"onChange"
    })

    const formSubmit = (data) => {
        let arr = [...registeredUsers,data]
        setRegisteredUsers(arr)
        toast.success("user registered successfully")
        localStorage.setItem("registeredUsers",JSON.stringify(arr))
        reset()
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Enter your details to create an account.
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
            {...register("name",{
                required:"name is required"
            })}
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
            {...register("email",{
                required:"email is required"
            })}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
            {...register("password",{
                required:"password is required"
            })}
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
            disabled={!isValid}
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/"
            className="font-semibold text-indigo-600 transition hover:text-indigo-800"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;