import React from "react";
import axios from  'axios';
import authFetch from "./Interceptors";

// const url = 'https://icanhazdadjoke.com/';

const AxiosGetRequestWithRequestHeader = () => {

    const [joke, setJoke] = React.useState('');

    const fetchDataOnHanldeClick = async () =>{
        try {
            const resp = await authFetch('');
            console.log(resp)
            setJoke(resp.data ? resp.data.joke : 'No joke found!')
        }catch(error) {
            console.log(error.response.data);
        }
    }

    return (
        <center style={{'marginTop': '50px'}}>
            <h1>Axios Get Request Method With Request Header</h1>
            <button className="btn" onClick={fetchDataOnHanldeClick} style={{'width': '150px', 'height': '35px', 'cursor': 'pointer'}}>Random Joke</button>
            <h4>{joke ? joke : ''}</h4>
        </center>
    );
}

export default AxiosGetRequestWithRequestHeader;