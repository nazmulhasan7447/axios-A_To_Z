import React from "react";
import axios from  'axios';
import authFetch from "./Interceptors";

// const url = 'https://course-api.com/react-store-productss';

const AxiosGetRequest = () => {

    const fetchDataOnHanldeClick = async () =>{
        try {
            const resp = await authFetch('/react-store-products');
            console.log(resp);
        }catch(error) {
            console.log(error.response.data);
        }
    }

    return (
        <center style={{'marginTop': '50px'}}>
            <h1>Axios Get Request Method</h1>
            <button className="btn" onClick={fetchDataOnHanldeClick} style={{'width': '150px', 'height': '35px', 'cursor': 'pointer'}}>Click</button>
        </center>
    );
}

export default AxiosGetRequest;