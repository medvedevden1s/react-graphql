import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Client from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

import config from './appsync';


ReactDOM.render(<App />, document.getElementById('root'));

