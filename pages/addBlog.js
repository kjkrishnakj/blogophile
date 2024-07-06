import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const router=useRouter();
    const handleChange = (e) => {

        if (e.target.name == 'title') {
            setTitle(e.target.value);
        }
        else if (e.target.name == 'category') {
            setCategory(e.target.value);
        }
        else if (e.target.name == 'descr') {
            setDescr(e.target.value);
        }
        else if (e.target.name == 'image') {
            setImage(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        if (title == '' || category == '' || image == '' || descr == "") {
            toast.error("Fill all the  details ! ⚠️", { autoClose: 1000 })

        }
        else {
            e.preventDefault()
            const data = { title, category, descr, image }
            let res = await fetch(`http://localhost:3000/api/addBlog`, {
                // console.log(res);
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            let response = await res.json()
            // console.log(response);
            setTitle('')
            setDescr('')
            setImage('')
            setCategory('')




            toast.success("Blog added successfully ✅", { autoClose: 1000 })
            setTimeout(() => {

                router.push("http://localhost:3000")
            }, 1000)


        }
    }

    return (
        <div>
            <ToastContainer />

            <section class="text-gray-400 bg-gray-900 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add a Blog</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Fill the following details to become a Creator.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="title" class="leading-7 text-sm text-gray-400">Title</label>
                                    <input required value={title} onChange={handleChange} type="text" id="title" name="title" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="category" class="leading-7 text-sm text-gray-400">Category</label>
                                    <input required value={category} onChange={handleChange} type="text" id="category" name="category" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="descr" class="leading-7 text-sm text-gray-400">Description</label>
                                    <textarea required value={descr} onChange={handleChange} id="descr" name="descr" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="image" class="leading-7 text-sm text-gray-400">Image (Link)</label>
                                    <input required value={image} onChange={handleChange} type="text" id="image" name="image" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button onClick={handleSubmit} class="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Submit</button>
                            </div>
                            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                <a class="text-yellow-400">example@email.com</a>
                                <p class="leading-normal my-5">49 Smith St.
                                    <br />Saint Cloud, MN 56301
                                </p>
                                <span class="inline-flex">
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-4 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-4 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-4 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddBlog
