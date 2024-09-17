import dotenv from 'dotenv'

dotenv.config()

const api_key = process.env.TEST_API_KEY

console.log(api_key)