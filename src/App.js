import { jsx as _jsx } from "react/jsx-runtime";
import ParticleProvider from './particle';
function App({ children }) {
    return (_jsx(ParticleProvider, { children: children }));
}
export default App;
