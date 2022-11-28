import { CreateModal } from '../utils/CreateModal';

import { useState } from 'react';
import { Checkbox } from '../utils/Checkbox';

// styles/images
import Icon from '../assets/icons/icon-close-modal.svg';
import './PledgeModal.scss';

export const PledgeModal = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<CreateModal>
			<section className="pledges__container">
				<h3 className="pledges__heading">Back this project</h3>
				<img src={Icon} alt="Close modal" className="pledges__close" />
				<p className="pledges__intro">
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
					the world?
				</p>
				<Checkbox id={'test'} isChecked={isChecked} setIsChecked={setIsChecked}>
					<p>Testing this </p>
				</Checkbox>
				<Checkbox
					id={'another-test'}
					isChecked={!isChecked}
					setIsChecked={setIsChecked}
				>
					<p>This is another test </p>
				</Checkbox>
			</section>
		</CreateModal>
	);
};
