import React from 'react';
import { Router, Store } from '../config';
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store = {Store}> 
      <Router />
    </Provider>
  );
}

export default App;
