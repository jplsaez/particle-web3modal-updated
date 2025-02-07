import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ConnectButton from './connectButton';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
function HomePage() {
    const { address, chainId, isConnected } = useWeb3ModalAccount();
    return (_jsxs("main", { children: [_jsx(ConnectButton, {}), isConnected && (_jsxs("div", { children: [_jsxs("div", { children: ["Address: ", address] }), _jsxs("div", { children: ["ChainId: ", chainId] })] }))] }));
}
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(App, { children: _jsx(HomePage, {}) }) }));
