import { useEffect, useState } from "react";
import Image from "next/image"
import marriott from "../public/marriott.jpg"
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
                        <p>Hello, This is my first blog in which i am going to explain about the data breach scenario of The Giant Marriott Hotel happened in 2018.</p>
                    </div>
                    </button>
                    </Link>
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
                        <p>Hello, This is my first blog in which i am going to explain about the data breach scenario of The Giant Marriott Hotel happened in 2018.</p>
                    </div>
                    </button>
                    </Link>
            </div>
            <div className="col-span-2"></div>
            
        </div>
    );
};

export default Blog;
