import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Store from './Features/Store';
import Routings from './Routings';

function App() {
  return (
    <Provider store={Store}>
          <BrowserRouter>
             <Routings/>
          </BrowserRouter>
    </Provider>

  );
}

export default App;
