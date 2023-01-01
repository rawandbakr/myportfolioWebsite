import React from "react";

export default function Login() {
  return (
    <div className=" bg-homeP1 bg-center bg-fixed flex flex-col items-center justify-center h-screen bg-cover">
      <form className="  flex flex-col items-center justify-center gap-4 bg-opacity-50 bg-secondary2 h-60 w-60 rounded-3xl">
        <input placeholder="email" type='email' className=" rounded-lg"/>
        <input placeholder="password" type='password' className=" rounded-lg"/>
        <button className="hover:bg-primary1 hover:text-white rounded border-primary1 border-b-2  border-r-2 shadow-xl p-1">Login</button>
      </form>
    </div>
  );
}
