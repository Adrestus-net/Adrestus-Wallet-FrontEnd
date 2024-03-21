import React, { useState, useEffect } from 'react';
import apiRequest from "../Services/apiRequest";
import Testnet from "../config/Testnet";

function Test() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);

    useEffect(() => {
        async function fetchBalance() {
            try {
                   await apiRequest(Testnet.BALANCE_URL+"ADR-AADE-ROH3-CAFV-XK5V-2NKZ-QMTG-SFMC-37W5-SHUV-2T46"+"/"+"0", 'GET', null, 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwYW5vc0BnbWFpbC5jb20iLCJpc3MiOiJwYW5vc0BnbWFpbC5jb20iLCJpc1VzZXIiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTEwMjU4MjgsImV4cCI6MTcxMTExMjIyOH0.Kr552S_YjjAAJHvjjaXKDVrK8ZUPk2rkx6WG0DyV114DO9MnHOBbIRxuDgef3baa42ppi6f8QDUNxWKRfJAZmA')
                       .then((response) => {
                    return response.json().then((data) => {
                        console.log(data);
                        return data;
                    }).catch((err) => {
                        console.log(err);
                    })
               });
            } catch (err) {
                console.log(err.toString())
            } finally {
            }
        }
        fetchBalance();
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
export default Test;