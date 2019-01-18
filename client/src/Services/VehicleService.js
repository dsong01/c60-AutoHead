import axios from 'axios';

function getAll () {
    let url = `/api/vehicles`
    const config = {
        method:"GET"
    } 
return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler)
}

function decodeVin(vin){
    let url = `http://api2.carmd.com/v2.0/decode?vin=${vin}`;
    const config = {
        method: 'GET',
        'partner-token' : process.env.PARTNER_TOKEN,
        'authorization' : process.env.AUTHORIZATION_KEY
    }
    return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler)
}

const responseSuccessHandler = response => {
    return response.data; 
};

const responseErrorHandler = error => {
    return Promise.reject(error); 
}

export { getAll, decodeVin }