import React from "react";
import Navbar from "./components/navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="from-container  mx-24 my-16 text-white">   
        <h1>Send a Query!!</h1>
        <form className="pt-12 flex flex-col w-1/2 mx-auto">
            <input type="text" placeholder="Name" className="h-12 px-4 mb-8 rounded-md border border-red-800"/>
            <input type="email" placeholder="Email" className="h-12 px-4 mb-8 rounded-md border border-red-800"/>
            <input type="subject" placeholder="Subject" className="h-12 px-4 mb-8 rounded-md border border-red-800"/>
            <textarea type="query" placeholder="Query" rows={4} className="px-4 mb-8 rounded-md border border-red-800"></textarea>
            <button >Send Query</button> 
        </form>
        </div>
    </>
  );
}

export default Contact;
