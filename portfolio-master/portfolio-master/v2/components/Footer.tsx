import React from "react";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"/>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>Built with Next.js, Tailwind</p>
                    <a href="https://github.com/nikhilsaraswat/android/archive/refs/heads/master.zip" className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer">Android</a>
                    <a href="https://github.com/nikhilsaraswat/iosblogapp/archive/refs/heads/main.zip" className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer">IOS</a>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://twitter.com/NikhilAnalyst"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nikhil-saraswat-619a03104/"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/nikhilsaraswat"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://medium.com/@nikhilsaraswat644"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Medium
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
