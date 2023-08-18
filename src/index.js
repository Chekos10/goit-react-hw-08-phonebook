import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App';
import { Provider } from 'react-redux';
import { persistor ,store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <PersistGate  persistor={persistor}>
    <App/>
    </PersistGate>
  </BrowserRouter>
  </Provider>

);
