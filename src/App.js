import React from 'react';
import 'antd/dist/antd.min.css'
import './index.css';
import {  Layout } from 'antd';
import classes from './App.module.css'
import {AllRoutes} from "./Routing/AllRoutes";
import {AllLinks} from "./Routing/AllLinks";
const { Header, Content } = Layout;

const App = () => (
    <div className={classes.allWindow}>

      <div >
        <Header
            className={classes.panel}
        >
          <AllLinks />
        </Header>
        <Content
            className={classes.content}
        >
          <AllRoutes />
        </Content>

      </div>
    </div>
);

export default App;