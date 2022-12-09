import { useContext } from 'react';
import { ModalContext, ModalUpdateContext } from '../context/ModalContext';

export const useModalContext = () => {
	const showModal = useContext(ModalContext);

	if (!showModal) {
		throw Error('useModalContext must be inside a ModalContextProvider');
	}

	return showModal;
};

export const useModalUpdateContext = () => {
	const handleModal = useContext(ModalUpdateContext);

	if (!handleModal) {
		throw Error(
			'useModalUpdateContext must be inside a ModalUpdateContextProvider'
		);
	}

	return handleModal;
};
