import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Para from './Para';
import List from './List';
import Profile from './Profile';
import Test from './PropsInfunction';
import TestOne from './PropsInclass';
import App from './App';
import App1 from './ComponentWillMount';
import App2 from './ComponentDidUpdate';

ReactDOM.render(

  <>
    <Heading />
    <Para />
    
    <List />
    <Profile />

    <Test var={{name:"Hetvi"}} var1={{lastname:"Vyas"}}/>

    <TestOne var={{name:"Hetvi"}}  data="This is props in class"/>

    <App />

    <App1 />
    <App2 />
  </>,document.getElementById("root")
);


