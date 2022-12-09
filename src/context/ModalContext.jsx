import { createContext, useState } from 'react';

export const ModalContext = createContext();
export const ModalUpdateContext = createContext();

export const ModalContextProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(true);

	const handleModal = (state) => {
		setShowModal(state);
	};

	return (
		<ModalContext.Provider value={showModal}>
			<ModalUpdateContext.Provider value={handleModal}>
				{children}
			</ModalUpdateContext.Provider>
		</ModalContext.Provider>
	);
};
