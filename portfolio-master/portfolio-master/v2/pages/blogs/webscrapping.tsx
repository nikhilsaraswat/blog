import Image from "next/image"
import marriott from "../../public/marriott.jpg"
import amazon from "../../public/Amazon.png"
const WebScrapping = () => {

    return (
        <div className="w-screen grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-8">
          <div className="grid justify-center m-2">
            <h1 className="text-7xl font-serif">Web Scrapping-Amazon</h1>
          <Image
                        src={amazon}
                        alt="Amazon"
                        priority={true}
                        className="w-max h-max"
                        placeholder="blur"
                    /></div>
          <p >
            When scrapping is the art of extracting data from web. It is used to obtain any kind of data from any website. Here, I am using it to extract data from Amazon Website.I will be using Colab Notebooks and Python3. The purpose is to create a web scrapper bot which will be able to scrap data from amazon website at regular interval and will able to email on matching of certain criterion. I will be using libraries such as Pandas for managing data, BeautifulSoup for extracting data, and SMTP for sending email. 
          </p>
            </div>
            <div className="col-span-2"></div>
            
        </div>
    );
};

export default WebScrapping;
