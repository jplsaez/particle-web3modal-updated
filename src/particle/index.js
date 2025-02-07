import { jsx as _jsx } from "react/jsx-runtime";
import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
const meta = import.meta.env.VITE_APP_ID;
const APP_ID = import.meta.env.VITE_APP_ID;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const CLIENT_KEY = import.meta.env.VITE_CLIENT_KEY;
const WALLETCONNECT_PROJECT_ID = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
//const APP_ID=`${__VITE_APP_ID__}`;
//const PROJECT_ID=`${__VITE_PROJECT_ID__}`;
//const CLIENT_KEY=`${__VITE_CLIENT_KEY__}`;
//const WALLETCONNECT_PROJECT_ID=`${__VITE_WALLETCONNECT_PROJECT_ID__}`;
console.log("WALLETCONNECT_PROJECT_ID", WALLETCONNECT_PROJECT_ID);
console.log("APP_ID", APP_ID);
console.log("CLIENT_KEY", CLIENT_KEY);
console.log("PROJECT_ID", PROJECT_ID);
// 2. Set chains
const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com',
};
const goerli = {
    chainId: 5,
    name: 'Ethereum Goerli',
    currency: 'ETH',
    explorerUrl: 'https://goerli.etherscan.io',
    rpcUrl: 'https://ethereum-goerli.publicnode.com',
};
// 3. Create modal
const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/'],
};
const web3Modal = createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet, goerli],
    projectId: WALLETCONNECT_PROJECT_ID,
    enableAnalytics: true,
});
const particleConfig = {
    projectId: PROJECT_ID,
    clientKey: CLIENT_KEY,
    appId: APP_ID,
    web3Modal
};
const ParticleProvider = ({ children }) => {
    return (_jsx(AuthCoreContextProvider, { options: particleConfig, children: children }));
};
export default ParticleProvider;
