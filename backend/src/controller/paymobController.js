
const axios = require('axios')

// Set your Paymob API token
const API_TOKEN = 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRBNU5qUXpMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuX1dPSXcwTHNIbHZueUEwem51SXU4TFc2Vk5majhYR1hicEFUaHlCTkNNQVU1Q0U3WXA2OFJBbEk0d1ozdGtPZEUwaEcwYV9adGs5WjZNdlQ5aWhCa2c=';
const PAYMOB_URL = "https://pakistan.paymob.com/api";
// const PAYMOB_URL = "https://accept.paymob.com/api";


const PASSWORD = 'L38q#qnwy3GZ3jC';
const USERNAME = '3055992846';

let order_cart = [
  {
    name: "ASC1515",
    amount_cents: 500000,
    description: "Smart Watch",
    quantity: 1
  },
  {
    name: "ERT6565",
    amount_cents: 200000,
    description: "Power Bank",
    quantity: 1
  }
]
const AuthUrl = `${PAYMOB_URL}/auth/tokens`;
const OrderUrl = `${PAYMOB_URL}/ecommerce/orders`;
const headers = {
  "Content-Type": "application/json",
};
async function authenticate() {
  try {


    const AuthData = {
      api_key: API_TOKEN,
      // username: USERNAME,
      // password: PASSWORD,
    };
    const response = await axios.post(AuthUrl, AuthData, { headers });
    const accessToken = response.data.token;
    return accessToken;
  } catch (error) {
    console.error("Error authenticating:", error.response.data);
  }
}
// Authenticate with Paymob to get an access token


exports.testing = (req, res) => {
  try {
    console.log("HI i am here")
    authenticate().then(async (response) => {
      console.log("response ", response)
      const cardData = {
        "amount": 35000,
        "currency": "PKR",
        "payment_methods": ["card", "Nift", "Jazzcash", "Easypaisa"],
        "items": [
          {
            "name": "Item name",
            "amount": 35000,
            "description": "Item description",
            "quantity": 1
          }
        ],
        "billing_data": {
          "apartment": "dumy",
          "first_name": "dumy",
          "last_name": "dumy",
          "street": "dumy",
          "building": "dumy",
          "phone_number": "+2001125773493",
          "city": "dumy",
          "country": "dumy",
          "email": "dumy@dumy.com",
          "floor": "dumy",
          "state": "dumy"
        },
        "extras": {
          "billing_data": {
            "apartment": "dumy",
            "first_name": "dumy",
            "last_name": "dumy",
            "street": "dumy",
            "building": "dumy",
            "phone_number": "+2001125773493",
            "city": "dumy",
            "country": "dumy",
            "email": "dumy@dumy.com",
            "floor": "dumy",
            "state": "dumy"
          }
        }
      }

      axios.post('https://pak.paymob.com/v1/intention/', cardData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${response}` // Your Paymob API key
        }
      })
        .then(response => {
          const paymentToken = response.data.token;
          console.log('Payment Token:', paymentToken);
          // Use this paymentToken in your payment request
        })
        .catch(error => {
          // Handle errors
          console.error(error);
        });
      // res.json({ message: 'orderId is here', orderId: orderId });

    }).catch((err) => {
      console.log("err ", err)
    });





  } catch (error) {
    console.error("Error authenticating:", error);
  }
}
