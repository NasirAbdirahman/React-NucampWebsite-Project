import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

//The return value from configureStore captured here//
const store = ConfigureStore();

//Provider makes the redux store availble to all connected components that are children of App//
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  };
  

}

export default App;
