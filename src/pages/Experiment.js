import React, {useEffect, useRef, useState} from 'react';
import '../css/App.css';

function App() {
    const [address, setAddress] = useState('ADR-GC7K-YMOY-UNWB-HZPR-5V25-UCVM-PXCR-NEKR-APD4-MWKD');
    const [message, setMessage] = useState('0');
    const bloom_filter_api = useRef(null);
    let carName = "0";
    let lib = null;
    // useEffect(() => {
    //     async function callAsync() {
    //         var l='{"numBitsRequired":479,"array":[38,68,98],"hashFunctionNum":3}'
    //         const response = await apiRequest(Testnet.BLOOM_FILTER_URL, 'POST', l, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRFItR0M3Sy1ZTU9ZLVVOV0ItSFpQUi01VjI1LVVDVk0tUFhDUi1ORUtSLUFQRDQtTVdLRCIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNzA2MzY5ODM4LCJpYXQiOjE3MDYzNjk3Nzh9.7AyoFFdSmS1iGS13dmgw5YFEgO_0mxHe3Tn0if-PKQuwN59i0yHYdXa_sCE87r9XvAeeO3f-agmBg4sXmVqE-Q');
    //         if (!response.ok) throw Error('Did not receive expected data');
    //         const jsonRes = await response.json();
    //         console.log(jsonRes)
    //     }
    //     callAsync();
    // }, []);

    useEffect(() => {
        async function callAsync() {
            if (carName === "0") {
                await window.cheerpjInit();
                lib = await window.cheerpjRunLibrary("/app/external/BloomFilter.jar");
                carName="1"
            }
            const Creation = await lib.io.Adrestus.bloom_filter.Creation;
            const creation = await new Creation();
            const d = await creation.create(address);
            setMessage(String(d))
            // const result = await apiRequest(Testnet.BALANCE_URL+0, 'POST', d, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRFItR0M3Sy1ZTU9ZLVVOV0ItSFpQUi01VjI1LVVDVk0tUFhDUi1ORUtSLUFQRDQtTVdLRCIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNzA2MzY5ODM4LCJpYXQiOjE3MDYzNjk3Nzh9.7AyoFFdSmS1iGS13dmgw5YFEgO_0mxHe3Tn0if-PKQuwN59i0yHYdXa_sCE87r9XvAeeO3f-agmBg4sXmVqE-Q');
            // if (result.status === 200) {
            //     result.text().then(function (jsonBalance){
            //         console.log("Balance: "+jsonBalance)
            //         const map=JSON.parse(jsonBalance);
            //         let myMap = new Map(Object.entries(map));
            //         const entry=myMap.get('ADR-GC7K-YMOY-UNWB-HZPR-5V25-UCVM-PXCR-NEKR-APD4-MWKD');
            //         setMessage(entry)
            //     });
            // }
        }

        callAsync();
    }, []);

    const onClick = (event) => {
        async function BloomFilterAsync() {
            const Creation = await bloom_filter_api.current.io.Adrestus.bloom_filter.Creation;
            const creation = await new Creation();
            const d = await creation.create("sadsad");
            setMessage(d)
        }

        BloomFilterAsync();
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>Wait for the cheerpj value to load here {message} </p>
                {/*<button onClick={(event) => onClick(event)}>*/}
                {/*    Click me*/}
                {/*</button>*/}
            </header>
        </div>
    );
}

export default App;
