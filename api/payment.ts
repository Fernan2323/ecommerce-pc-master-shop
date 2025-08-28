import axios from "axios"

export const createPaymentRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_LOCALHOST,
    headers: {
        Authorization: "bearer" + process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    },
})