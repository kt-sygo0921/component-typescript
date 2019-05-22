import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import './component/test'; 
import './component/Organisms/Sidebar'

const guest = {
  loginText: 'ろぐいん',
  signupText: '会員登録'
}

const adminTopics = [
      {
          to: 'https://dmm.com',
          children: 'おしらせ1'
      },
      {
          to: 'https://dmm.com',
          children: 'おしらせ2'
      },
      {
          to: 'https://dmm.com',
          children: 'おしらせ3'
      },
  ]

const banners = [
  {
      to: 'https://dmm.com',
      thumbPath: 'https://p.dmm.com/p/netgame/top/bnr/bnr_PUBG.jpg'
  },
  {
      to: 'https://dmm.com',
      thumbPath: 'https://p.dmm.com/p/netgame/top/bnr/bnr_PUBG.jpg'
  }
]

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <test-element></test-element>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <sidebar-element guest={JSON.stringify(guest)} adminTopics={JSON.stringify(adminTopics)} banners={JSON.stringify(banners)}></sidebar-element>
    </div>
  );
}

export default App;
