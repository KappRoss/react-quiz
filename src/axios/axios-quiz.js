import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-25a52-default-rtdb.firebaseio.com'
})