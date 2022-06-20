import Image from "next/image"
import marriott from "../../public/marriott.jpg"
import amazon from "../../public/Amazon.png"
import email from "../../public/email.png"
import excel from "../../public/excel.png"
const WebScrapping = () => {

    return (
        <div className="w-screen grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-8">
          <div className="grid justify-center m-2">
            <h1 className="text-7xl font-serif mb-2">Web Scrapping-Amazon</h1>
          <Image
                        src={amazon}
                        alt="Amazon"
                        priority={true}
                        className="w-max h-max m-2"
                        placeholder="blur"
                    /></div>
          <p >
            Web scraping is the art of extracting data from the web. It is used to obtain any kind of data from any website. Here, I am using it to extract data from Amazon Website. I will be using Colab Notebooks and Python3. The purpose is to create a web scraper bot that will be able to scrape data from the amazon website at regular intervals and will be able to email on the matching of certain criteria. I will be using libraries such as Pandas for managing data, BeautifulSoup for extracting data, and SMTP for sending an email.  
          </p>
                <a href="https://github.com/nikhilsaraswat/bot">Check the code here.</a>
            </div>
            <div className="grid justify-center m-2">
            <h1 className="text-5xl font-serif mb-2">Excel Sheet with the data.</h1>
          <Image
                        src={excel}
                        alt="Excel"
                        priority={true}
                        className="w-max h-max m-2"
                        placeholder="blur"
                    /></div>
            <div className="grid justify-center m-2">
            <h1 className="text-7xl font-serif mb-2">Email Sent by bot.</h1>
          <Image
                        src={email}
                        alt="Email"
                        priority={true}
                        className="w-max h-max m-2"
                        placeholder="blur"
                    /></div>
            
            <div className="col-span-2"></div>
            
        </div>
    );
};

export default WebScrapping;
