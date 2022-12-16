import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
	const [showModal, setShowModal] = useState(false);

	const modalState = {
		showModal,
		setShowModal,
	};

	return (
		<ModalContext.Provider value={{ modalState }}>
			{children}
		</ModalContext.Provider>
	);
}
