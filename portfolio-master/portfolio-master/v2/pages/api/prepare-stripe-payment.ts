// defining stripe secret key
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// for get or post request
import { NextApiRequest, NextApiResponse } from "next";
// defining base url
const URL = process.env.BASE_URL
// async method for handling requests
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // passing only amount in json request
    const { amount } = req.body;
    // defining data for purchase
    const items = [{
        price_data: {
            currency: "usd",
            product_data: {
                name: `Sponsor Nikhil`,
            },
            unit_amount: amount * 100,
        },
        quantity: 1,
    },];
    //redirect purchaser
    const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: "payment",
        success_url: `${URL}/payment-successful`,
        cancel_url: `${URL}/payment-unsuccessful`,
    });

    res.status(200).json({id: session.id});
};

export default handler;

