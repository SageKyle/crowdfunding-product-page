import { CreateModal } from '../utils/CreateModal';

import { useState } from 'react';
import Pledges from '../data/db.json';
import { Checkbox } from '../utils/Checkbox';

// styles/images
import Icon from '../assets/icons/icon-close-modal.svg';
import './PledgeModal.scss';

export const PledgeModal = ({ setShowModal, number }) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<CreateModal>
			<section className="pledges">
				<h3 className="pledges__heading">Back this project</h3>
				<img
					src={Icon}
					alt="Close modal"
					className="pledges__close"
					onClick={() => setShowModal(false)}
				/>
				<p className="pledges__intro">
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
					the world?
				</p>
				{Pledges &&
					Pledges.map((pledge) => (
						<Checkbox
							key={pledge.id}
							className="pledge"
							isChecked={isChecked}
							setIsChecked={setIsChecked}
						>
							<div className="pledge__container">
								<div className="pledge__heading">
									<h4 className="pledge__heading--title">{pledge.name}</h4>
									{pledge.amount && (
										<h5 className="pledge__heading--amount">
											Pledge ${pledge.amount} or more
										</h5>
									)}
								</div>
								<p className="pledge__info">{pledge.info}</p>
								{pledge.pledges && (
									<>
										<p className="pledge__left">
											<strong className="pledge__left--number">
												{pledge.pledges}
											</strong>{' '}
											left
										</p>
										<div className="pledge__cta">
											<p className="pledge__cta--info">Enter your pledge</p>
											<div className="pledge__cta--btns">
												<button className="btn" disabled>
													$ {pledge.amount}
												</button>
												<button className="btn">Continue</button>
											</div>
										</div>
									</>
								)}
							</div>
						</Checkbox>
					))}
				{/* <Checkbox
					className="pledge"
					isChecked={isChecked}
					setIsChecked={setIsChecked}
				>
					<h4 className="pledge__heading">Pledge with no reward</h4>
					<p className="pledge__info">
						Choose to support us without any reward if you simply believe in our
						project. As a backer, you will be signed up to receive product
						updates via mail.
					</p>
				</Checkbox>
				<Checkbox isChecked={!isChecked} setIsChecked={setIsChecked}>
					<div className="pledge__heading">
						<h4 className="pledge__heading--title">Bamboo Stand</h4>
						<h5 className="pledge__heading--amount">Pledge $25 or more</h5>
					</div>
					<p className="pledge__info">
						You get an ergonomic stand made of nautral bamboo. You've helped us
						launch our promotional campaign, and you'll be added to a special
						Backer member list.
					</p>
					<p className="pledge__left">
						<strong className="pledge__left--number">{number}</strong> left
					</p>
				</Checkbox>
				<Checkbox isChecked={!isChecked} setIsChecked={setIsChecked}>
					<h4 className="pledge__heading">Bamboo Stand</h4>
					<h5 className="pledge__amount">Pledge $25 or more</h5>
					<p className="pledge__info">
						You get an ergonomic stand made of nautral bamboo. You've helped us
						launch our promotional campaign, and you'll be added to a special
						Backer member list.
					</p>
				</Checkbox> */}
			</section>
		</CreateModal>
	);
};
