import defaultLogo from './images/charged-particles-logo-default-colors.svg';
import { ThemeProvider } from '@material-ui/core/styles';
import { UseWalletProvider } from "use-wallet";

import Main from './containers/Main';
import { NETWORK } from './contracts';

import theme from './root.theme';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <UseWalletProvider chainId={NETWORK.KOVAN}>
        <header className="App-header">
          <img width="80%" src={defaultLogo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Main />
        </main>
      </UseWalletProvider>
    </ThemeProvider>
  );
}

export default App;
