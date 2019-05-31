import * as React from 'react';
import loadjs from 'loadjs';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import './App.css';

// import './component/test';
// import './component/Organisms/Sidebar'

const Wrapper = styled('div')({
    background: 'red',
    display: 'inline-block',
});

class App extends React.Component {
    public componentDidMount(): void {
        loadjs('http://127.0.0.1:8887/dist/public/bundle.js', '');
    }

    public render(): JSX.Element {
        return (
            <div className="App">
                <div
                    css={css`
                        font-size: 15px;
                    `}>
                    遷移先だよーん
                </div>
                <Wrapper>
                    <p>遷移したよ</p>
                </Wrapper>
                <div id="preact-root" />
            </div>
        );
    }
}

export default App;
