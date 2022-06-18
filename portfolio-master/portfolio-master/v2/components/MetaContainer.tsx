import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Navbar from "@components/Navigation";
import Footer from "@components/Footer";

// @ts-ignore
export default function MetaContainer({children, ...customMeta}) {
    const router = useRouter();

    const meta = {
        title: "Nikhil Saraswat - Analyst, Developer, Writer",
        description: `I've been looking to work in IT as Data Analyst. Get in touch with me to know more.`,
        image: "/public/1604_nobg.png",
        type: "website",
        date: new Date().toDateString(),
        ...customMeta,
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta
                    property="og:url"
                    content={`https://www.nikhilsaraswat.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://www.nikhilsaraswat.com${router.asPath}`}
                />
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="Nikhil Saraswat"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@NikhilAnalyst"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>
                <meta name="twitter:image" content={meta.image}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>
            <main className="w-full">
                <Navbar/>
                <div>{children}</div>
                <Footer/>
            </main>
        </div>
    );
}