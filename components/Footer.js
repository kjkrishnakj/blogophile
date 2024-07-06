import React from 'react'

import Image from "next/image"

import logo from "../public/logo.png"
import Link from 'next/link'

function Footer() {
  return (
    <div>
      <footer className="text-gray-300 bg-gray-900 body-font">
  <div className="container px-5 py-2 pt-10 mx-auto flex items-center sm:flex-row flex-col">
  <Link href='/' className="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
            {/* <Image src={logo} alt="" style={{ height: "4rem", width: "4rem" }}></Image> */}
            <span class="ml-1 bg-yellow-500 text-white px-6 py-2  justify-center  rounded-2xl text-2xl">BlogoPhile</span>

            {/* <span className="ml-3 text-gray-300 text-4xl">Blogophile</span> */}
          </Link>
    <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-green-200 sm:py-2 sm:mt-0 mt-4">© 2024 BlogoPhile —
      <a href="https://www.linkedin.com/in/krishna-jaiswal-383122248/" className="text-gray-300 ml-1" rel="noopener noreferrer" target="_blank">@krishnajaiswal</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <a href='https://x.com/Krishna37115452' className="ml-3 text-gray-300">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fkj_krishna_kj%2F&is_from_rle' className="ml-3 text-gray-300">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a  href="https://www.linkedin.com/in/krishna-jaiswal-383122248/" className="ml-3 text-gray-300">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer 