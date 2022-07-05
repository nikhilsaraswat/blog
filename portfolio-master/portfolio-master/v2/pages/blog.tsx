import { useEffect, useState } from "react";
import Image from "next/image"
import marriott from "../public/marriott.jpg"
import amazon from "../public/Amazon.png"
import Link from 'next/link'

const Blog = () => {

    return (
        <div className="w-screen h-screen grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-8 grid grid-cols-2 grid-rows-3">
            <Link href="/blogs/marriotthotel">
                <button className="col-span-1 row-span-1 border-2 grid grid-cols-2 m-2">
                    <div className="col-span-1 grid grid-rows-6">
                        <div className="row-span-4">
                        <Image
                        src={marriott}
                        alt="Marriott"
                        priority={true}
                        className="w-max h-max"
                        placeholder="blur"
                    />
                        </div>
                        <h4 className="row-span-1 grid place-content-center">Marriott Hotel-Data Breach</h4>
                        <p className="row-span-1 grid place-content-center">Created on 18-06-2022</p>
                    </div>
                    <div className="col-span-1 m-2">
                        <p>Hello, This is my first blog. I will explain the data breach scenario of The Giant Marriott Hotel that happened in 2018.</p>
                    </div>
                    </button>
                    </Link>
                <Link href="/blogs/webscrapping">
                <button className="col-span-1 row-span-1 border-2 grid grid-cols-2 m-2">
                    <div className="col-span-1 grid grid-rows-6 p-4">
                        <div className="row-span-4">
                        <Image
                        src={amazon}
                        alt="Amazon"
                        priority={true}
                        className="w-max h-max"
                        placeholder="blur"
                    />
                        </div>
                        <h4 className="row-span-1 grid place-content-center">Web Scraping-Amazon</h4>
                        <p className="row-span-1 grid place-content-center">Created on 20-06-2022</p>
                    </div>
                    <div className="col-span-1 m-2">
                        <p>Web Scraping bot to scrap data from Amazon website at regular intervals and will send an email on the matching of criterion.</p>
                    </div>
                    </button>
                    </Link>
            </div>
            <div className="col-span-2"></div>
            
        </div>
    );
};

export default Blog;
