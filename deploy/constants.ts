import dotenv from 'dotenv'
dotenv.config({path: '../.env'});

export const CONTRACT = {
    PRIVATE_KEY: process.env.PRIVATE_KEY as string,
    PROVIDED_URL: process.env.PROVIDED_URL as string
}