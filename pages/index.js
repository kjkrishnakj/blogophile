import Image from "next/image";
import { Inter } from "next/font/google";
import Blogs from "../models/Blogs";
import mongoose from "mongoose";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs }) {
  return (
    <>
    <Head>
      <title>BlogoPhile | Home</title>
    </Head>
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {blogs.map((k) => (
        
        <div key={k._id} className="p-4 md:w-1/3">
          <Link passHref={true} key={k._id} href={`/product/${k.slug}`}>

            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img loading="lazy" src={k.img} alt="Add image here" className="lg:h-48 md:h-36 w-full object-fill object-center shadow-lg" style={{ boxShadow: '0px 4px 26px -1px rgba(252, 211, 77, 0.5), 0 2px 4px -1px rgba(252, 211, 77, 0.5)', height: "16rem" }} />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{k.category}</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">{k.title}</h1>
                <p className="leading-relaxed mb-3">
                  {k.descr.split(' ').length > 20 ?
                    k.descr.split(' ').slice(0, 20).join(' ') + '...' :
                    k.descr
                  }
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0">Explore
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

    </>

  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let blogs = await Blogs.find();
  // console.log(blogs);
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }
  };
}