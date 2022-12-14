import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export const useModalContext = () => {
	const modalContext = useContext(ModalContext);

	if (!modalContext) {
		throw Error('useModalContext must be inside a ModalContextProvider');
	}

	return modalContext;
};

// export const useModalUpdateContext = () => {
// 	const handleModal = useContext(ModalUpdateContext);

// 	if (!handleModal) {
// 		throw Error(
// 			'useModalUpdateContext must be inside a ModalUpdateContextProvider'
// 		);
// 	}

// 	return handleModal;
// };
