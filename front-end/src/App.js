import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Info from './Info/Info';
import { MoralisProvider } from 'react-moralis';
import { NotificationProvider } from '@web3uikit/core';

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
    <div className="App">
      <NavBar />
      <Info />
    </div>
    </NotificationProvider>
    </MoralisProvider>
  );
}

export default App;
