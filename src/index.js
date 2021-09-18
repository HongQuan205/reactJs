import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/reducer/configStore';


ReactDOM.render(
  <Provider store={store}>
    sdfdgdfg
    </Provider>,
  document.getElementById('root')
);


