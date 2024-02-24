import {AuthProvider, RequireAuth} from 'react-auth-kit'
import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Login from "./pages/Login";
import Register from "./pages/Register";
import refreshApi from "./Services/refreshApi";
import Dashboard from "./pages/Dashboard";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <AuthProvider authType={"cookie"}
                          authName={"_auth"}
                          cookieDomain={window.location.hostname}
                          cookieSecure={false}
                          refresh={refreshApi}>
                <Routes>
                    <Route path="*" element={<Navigate to="/Login"/>}/>
                    <Route exact path="/Register" element={<Register/>}/>
                    <Route exact path="/Login" element={<Login/>}/>
                    {/*<Route exact path="/View" element={<Dashboard/>}/>*/}
                    {/*<Route exact path="/Dashboard" element={<Dashboard/>}/>*/}
                    {<Route exact path={'/Dashboard'} element={
                        <RequireAuth loginPath={'/login'}>
                            <Dashboard/>
                        </RequireAuth>
                    }/>}
                    <Route path="/Register" element={<Register/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
);
//browserify src/crypto/Mnemonic.js --standalone myBundle > src/bundle/WalletBundle.js
// browserify src/crypto/BloomFilter.js -p esmify --standalone bloombundle > src/BloomFilterBundle.js
// browserify src/crypto/BloomFilter.js -p esmify --save utf-8-validate -o src/bundle/BloomFilterBundle.js
// browserify src/crypto/Network.js --save utf-8-validate -o src/bundle/NetworkBundle.js
// browserify src/crypto/Mnemonic.js --save utf-8-validate -o src/bundle/MnemonicBundle.js
// browserify src/crypto/UtilBase64.js --save utf-8-validate -o src/bundle/UtilBase64Bundle.js
// browserify src/crypto/HashFunction.js --save utf-8-validate -o src/bundle/HashFunctionBundle.js
// browserify src/crypto/WalletAddress.js --save utf-8-validate -o src/bundle/WalletAddressBundle.js
// browserify src/crypto/Keypair.js --save utf-8-validate -o src/bundle/KeypairBundle.js
// browserify src/crypto/ECDSASignature.js --save utf-8-validate -o src/bundle/ECDSASignatureBundle.js
