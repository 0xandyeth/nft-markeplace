import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/animated.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './assets/style.scss';
import './assets/style_grey.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
//redux store
import { Provider } from 'react-redux'
import store from './store';
if ('ethereum' in window) {
	window.ethereum.autoRefreshOnNetworkChange = false;
  }
  function getLibrary(provider){
	const library = new Web3Provider(provider)
	library.pollingInterval = 15000
	return library
  }
  const client = new ApolloClient({
	uri: `${process.env.REACT_APP_BACKEND_ENDPOPINT}/graphql`
  });
  
ReactDOM.render(
	<Provider store={store}>
		<ApolloProvider client={client}>
		 <Web3ReactProvider getLibrary={getLibrary}>
		    <BrowserRouter>
			<App />
	    	</BrowserRouter>
		 </Web3ReactProvider>
		 </ApolloProvider>
	</Provider>, 
	document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();