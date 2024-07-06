import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
// import logo from "../public/favicon (1).ico"
import logo from "../public/logo.png"
import Link from "next/link"
import { useRouter } from "next/router"


const Navbar = ({ logout, user }) => {
     return(
        <>
        <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
      <span class="ml-3 bg-yellow-500 text-white px-4 py-2  justify-center  rounded-2xl text-2xl">BlogoPhile</span>
    </a>
    <nav className="md:ml-auto   text-white md:mr-auto flex flex-wrap items-center text-base justify-center bg-yellow-500 rounded-3xl px-6 py-2">
  <Link href={"/"} class="mx-7 hover:text-white">Home</Link>
      <Link href={"/about"}class="mx-7 hover:text-white">About</Link>
      <Link href={"/contact"}class="mx-7 hover:text-white">Contact</Link>
    </nav>
    <Link href={"/addBlog"}>
    <button  className="inline-flex text-white items-center justify-center bg-yellow-500 border-0 p-2 focus:outline-none hover:bg-yellow-700 rounded-full text-base mt-4 md:mt-0 w-12 h-12">
 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M12 5v14M5 12h14"></path>
  </svg>
</button>
  </Link>


  </div>
</header></>
    )
}

export default Navbar
