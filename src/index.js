import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalContextProvider } from './context/ModalContext';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ModalContextProvider>
			<App />
		</ModalContextProvider>
	</React.StrictMode>
);
