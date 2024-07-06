import { useRouter } from 'next/router'
import React, { useState } from 'react'
import mongoose from "mongoose";
import Error from 'next/error'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Blogs from '@/models/Blogs';

const Post = ({ error, blog, relevantBlogs }) => {
    const router = useRouter();
    const { slug } = router.query



    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Nunito' />
                <title>KnowledgeHub | Course</title>
                <link rel="icon" href="/icon.ico" type="image/x-icon" />
            </Head>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-lg" style={{ boxShadow: '0px 4px 26px -1px rgba(252, 211, 77, 0.5), 0 2px 4px -1px rgba(252, 211, 77, 0.5)' }} alt="hero"src={blog.img}/>
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{blog.title}</h1>
                        <p class="leading-relaxed mb-8">{blog.descr}</p>

                    </div>
                </div>
            </section>


            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <h1 className="text-2xl font-bold mt-1 mb-2">Relevant Blogs </h1>



                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        infinite={true}>
                        {relevantBlogs.map((k) => (
                            <Link passHref={true} key={k._id} href={`/product/${k.slug}`}>
                                <div className="group border-spacing-2 rounded-lg border overflow-hidden mx-1 flex flex-col" style={{ height: "20rem" }}>
                                    <img src={k.img} alt="" className="w-full object-cover" style={{ height: "8rem" }} />
                                    <div className="flex-grow p-4 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-gray-500 text-xs tracking-widest title-font mb-1">{k.category}</h4>
                                            <h2 className="text-white title-font text-lg font-medium">{k.title}</h2>
                                            <p className="leading-relaxed mb-3">
                                                {k.descr.split(' ').length > 10 ? k.descr.split(' ').slice(0, 10).join(' ') + '...' : k.descr}
                                            </p>
                                        </div>
                                        <h4 className={`text-white ${k.tag ? 'bg-orange-600' : ''} inline-block pt-1 px-1 m-2 text-xs tracking-widest title-font`}>{k.tag}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </Carousel>
                </div>
            </section>
        </>
    );
};

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let blog = await Blogs.findOne({ slug: context.query.slug });
    if (!blog) {
        return {
            props: { error: 404 }
        }
    }
    let relevantBlogs = await Blogs.find().limit(10);

    return {
        props: {
            blog: JSON.parse(JSON.stringify(blog)),
            relevantBlogs: JSON.parse(JSON.stringify(relevantBlogs))
        }
    }
}

export default Post;
