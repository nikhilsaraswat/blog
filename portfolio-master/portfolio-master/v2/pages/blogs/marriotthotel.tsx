import Image from "next/image"
import marriott from "../../public/marriott.jpg"
const MarriottCaseStudy = () => {

    return (
        <div className="w-screen grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-8">
          <div className="grid justify-center m-2">
            <h1 className="text-7xl font-serif">Marriott Hotel - Data Breach</h1>
          <Image
                        src={marriott}
                        alt="Marriott"
                        priority={true}
                        className="w-max h-max"
                        placeholder="blur"
                    /></div>
          <p >
          Detected in 2018, the biggest cyber attack after Yahoo happened which we called the Marriott hotel attack. What’s strange, is that it took 2 years to be detected. If we talk about technological advancement in mankind where everything happens in a second like if we try to open a website and if took a delay of minutes to open then we will not see that webpage, but here it's not about minutes but a couple of years that database clusters infected with the virus remain undetected in the machine for 2 years.

Now, I think we understand the impact of the attack. Let's see the incident in detail, as we all know that a few years back there was a big chain of hotels called Starwood hotel and in 2016 another big hotel called Marriot acquired this hotel. As we all know that acquiring means all the assets of Starwood will come under Marriott including the information system which includes a database of their customers and this leads to the center of malicious threats into the Marriott hotel database. So, in terms of dates, hackers hacked the Starwood hotel database in 2014, and until 2016 it remained undetected in the Starwood hotel system after Marriott acquired it, and then it remained with this global leading chain for 2 years till 2018 when Accenture who is maintaining the database detected it. By using the IBM Cardiom Database solution Data engineers of Accenture find that an unusual SQL query was processed before a few days of detection.

Although Marriott detected the malicious activity and hacking of their database by the hackers, it was delayed by a big fraction of time. What they can find is Guest payment card information, guests' general records, and passport numbers got breached. Among these almost 9.1million encrypted payment card numbers, expiration dates out of which 385000 cards are working at the time of the breach, 385 million general records including general details such as full names, mailing address, phone number, email address, general address, rewards information, arrival/departure information and passport numbers of 5.25million unencrypted out of 18.5 million encrypted got breached by alleged Chainese Hackers Group. Out of 339 million records, 30 million records are of EU personnel and 7 million are of UK citizens.

As a consequence of this. ICO information commissioner office of the United Kingdom fined Marriott hotel a charge of infringement of GDPR and a 99.2 million pounds fine. As per ICO Marriott didn’t do their due diligence carefully and did not take precautions. As per Infringement GDPR fines will be equal to 4% of global turnover 20 million pounds whichever is the highest and Marriott Hotel's turnover is approx 14 billion and 618 million pounds. Thus, as per law, Marriott was fined 99.2 million pounds.

Taking this into consideration this global hotel chain started a thorough investigation by calling 3 party investigators to find the scope of the breach. They took into consideration logs deleted by hackers. Endpoint protection solutions are implemented from 17 thousand to 200thousands. Also, they whitelisted the internal database IP address and performed network segmentation to protect the sensitivity of data.

The best thing that happened about this incident is that Marriott hotel has insured with the cyber insurance which means that they got a big part of 3 months loss from initial discovery till the end which is about a 524624800 pounds out of which they receive 51893900 as the insured amount and they have to pay 731000 pounds from their pocket in addition to 99.2 million pounds.
            </p>
            </div>
            <div className="col-span-2"></div>
            
        </div>
    );
};

export default MarriottCaseStudy;
