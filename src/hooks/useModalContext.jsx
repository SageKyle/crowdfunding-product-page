import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw Error('useModalContext must be inside a ModalContextProvider');
	}

	return context;
};
