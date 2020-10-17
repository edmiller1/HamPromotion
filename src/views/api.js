import axios from 'axios';

const ham = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

export default {
    ham
}