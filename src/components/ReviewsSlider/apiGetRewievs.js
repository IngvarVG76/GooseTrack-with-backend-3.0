import axios from "axios";

export async function  getRewievs(){
try {
    const response = await axios.get('https://project-backend-8dts.onrender.com/reviews');
 return response?.data
} catch (error) {
    return "error"
}
}