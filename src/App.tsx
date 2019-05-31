import * as React from 'react';
import loadjs from 'loadjs';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import './component/test';
import './component/Organisms/Sidebar';

interface IWrapper {
    hoge?: boolean;
}

const Wrapper = styled.div<IWrapper>`
    font-size: ${(props): number => (props.hoge ? 20 : 30)}px;
    background: #999;
    display: block;
`;

const PreactItem = styled.p`
    color: blue;
    font-size: 20px;
    font-style: italic;
`;

const guest = {
    loginText: 'ろぐいん',
    signupText: '会員登録',
};

const adminTopics = [
    {
        to: 'https://dmm.com',
        children: 'おしらせ1',
    },
    {
        to: 'https://dmm.com',
        children: 'おしらせ2',
    },
    {
        to: 'https://dmm.com',
        children: 'おしらせ3',
    },
];

const banners = [
    {
        to: 'https://dmm.com',
        thumbPath: 'https://p.dmm.com/p/netgame/top/bnr/bnr_PUBG.jpg',
    },
    {
        to: 'https://dmm.com',
        thumbPath: 'https://p.dmm.com/p/netgame/top/bnr/bnr_PUBG.jpg',
    },
];

class App extends React.Component {
    public componentDidMount(): void {
        loadjs('http://127.0.0.1:8887/dist/public/bundle.js', '');
    }

    public render(): JSX.Element {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit src/App.ts and save to reload.</p>
                    <Link to="./test">リンク</Link>
                    <PreactItem>Preactと同じスタイルのReactコンポーネントです</PreactItem>
                </header>
                <Wrapper>
                    <p>ここは30pxになるはず</p>
                </Wrapper>
                <Wrapper hoge>
                    <p>ここは20pxになるはず</p>
                </Wrapper>
                <Wrapper>
                    <p>ここは30pxになるはず</p>
                </Wrapper>
                <div id="preact-root" />
                <sidebar-element
                    guest={JSON.stringify(guest)}
                    adminTopics={JSON.stringify(adminTopics)}
                    banners={JSON.stringify(banners)}
                />
            </div>
        );
    }
}

export default App;
