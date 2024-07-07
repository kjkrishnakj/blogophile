import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const router = useRouter();
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
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            let response = await res.json()
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
               <Head>
      <title>BlogoPhile | AddBlog</title>
    </Head>
            <ToastContainer />

            <section className="text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-5 py-12 mx-auto flex flex-col items-center">
                    {/* <span className="bg-yellow-500 text-white px-4 py-2 justify-center rounded-2xl text-2xl mb-12">BlogoPhile</span> */}
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add a Blog</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fill the following details to become a Creator.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="title" className="leading-7 text-sm text-gray-400">Title</label>
                                    <input required value={title} onChange={handleChange} type="text" id="title" name="title" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="category" className="leading-7 text-sm text-gray-400">Category</label>
                                    <input required value={category} onChange={handleChange} type="text" id="category" name="category" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="descr" className="leading-7 text-sm text-gray-400">Description</label>
                                    <textarea required value={descr} onChange={handleChange} id="descr" name="descr" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="image" className="leading-7 text-sm text-gray-400">Image (Link)</label>
                                    <input required value={image} onChange={handleChange} type="text" id="image" name="image" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button onClick={handleSubmit} className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Submit</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddBlog
