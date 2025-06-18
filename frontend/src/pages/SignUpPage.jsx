import { useState } from "react";
import { ShipWheelIcon} from "lucide-react";
import { Link } from "react-router";
import useSignUP from "../hooks/useSignUP.js";

const SignUpPage = () => {
    const [SignUpData, setSignupData] = useState({
        fullName:"",
        email:"",
        password:"",
    });

    const {isPending,error,signupMutation} = useSignUP();

    const handleSignup = (e) => {
        e.preventDefault();
        signupMutation(SignUpData);
    };


    return<div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" data-theme="forest">
     <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
     
     {/* Signup form Left side */}
     <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
     {/* LOGO */}
     <div className="mb-4 flex items-center justify-start gap-2">
        <ShipWheelIcon className="size-9 text-primary"/>
        <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
            Lingofy
        </span>
     </div>

     {/* Error Message if any */}
     {error && (
      <div className="alert alert-error mb-4">
      <span>{error.response.data.message}</span>
      </div>
     )}

     <div className="w-full">
        <form onSubmit={handleSignup}>
            <div className="space-y-4">
                <div>
          <h2 className="text-xl font-semibold">Create an Account</h2>
          <p className="text-sm opacity-70">Join Lingofy and start your language learning adventure!
          </p>
            </div>
             
            <div className="space-y-3">
                {/* Full Name */}
            <div className="form-control w-full">
            <label className="label">
             <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className= "input input-bordered w-full"
              value={SignUpData.fullName}
              onChange={(e) => setSignupData({...SignUpData,fullName: e.target.value})}required/>
            </div>
            {/* Email */}
            <div className="form-control w-full">
            <label className="label">
             <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="John@gmail.com"
              className= "input input-bordered w-full"
              value={SignUpData.email}
              onChange={(e) => setSignupData({...SignUpData,email: e.target.value})}required/>
            </div>
            {/* Password */}
            <div className="form-control w-full">
            <label className="label">
             <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="********"
              className= "input input-bordered w-full"
              value={SignUpData.password}
              onChange={(e) => setSignupData({...SignUpData,password: e.target.value})}required/>
              <p className="text-xs opacity-70 mt-1">Password must be at least 6 characters long</p>
            </div>
             
             <div className="form-control">
                <label className="label cursor-pointer justify-start gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" required/>
                    <span className="text-xs leading-tight">I agree to the{" "}
                        <span className="text-primary hover:underline">terms of service</span> and {" "}
                        <span className="text-primary hover:underline">privacy policy</span>
                    </span>
                </label>
             </div>
            </div>

            <button className="btn btn-primary w-full" type="submit">
             {isPending ? (
              <>
              <span className="loading loading-spinner loading-xs"></span>
              Loading...
              </>
             ):(
              "Create Account"
             )}
            </button>

            <div className="text-center mt-4">
             <p className="text-sm">Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">Sign In</Link>
             </p>
            </div>
            </div>
        </form>
     </div>
     </div>

     {/* Signup form Right side */}
     <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/i.png" alt="Language connection illustration" className="w-full h-full" />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Connect with language partners worldwide</h2>
              <p className="opacity-70">
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
        </div>
     </div>  
    </div>
}

export default SignUpPage;