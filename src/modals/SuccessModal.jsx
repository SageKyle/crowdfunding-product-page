import { CreateModal } from '../utils/CreateModal';

// styles
import Icon from '../assets/icons/icon-check.svg';
import './SuccessModal.scss';

export const SuccessModal = ({ setShowModal }) => {
	return (
		<CreateModal>
			<article className="success">
				<img src={Icon} alt="checkmark" className="success__icon" />
				<h2 className="success__heading">Thanks for your support</h2>
				<p className="success__info">
					Your pledge brings us closer to sharing Mastercraft Bamboo Monitor
					Riser worldwide. You will get an email once our campaign is completed.
				</p>
				<button
					className="btn success__btn"
					onClick={() => setShowModal(false)}
				>
					Got it!
				</button>
			</article>
		</CreateModal>
	);
};
