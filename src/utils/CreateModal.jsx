// styles
import './CreateModal.scss';

export const CreateModal = ({ children }) => {
	return (
		<div className="backdrop">
			<div className="modal">{children}</div>
		</div>
	);
};
