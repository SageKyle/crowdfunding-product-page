import { useState } from 'react';
import { Checkbox } from './Checkbox';

export const Pledges = ({ Pledges }) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<>
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
									<div className="pledge__action">
										<p className="pledge__left">
											<strong className="pledge__left--number">
												{pledge.pledges}
											</strong>{' '}
											left
										</p>
										<button className="btn pledge__btn">Select Reward</button>
									</div>
									<div className="pledge__cta">
										<p className="pledge__cta--info">Enter your pledge</p>
										<div className="pledge__cta--btns">
											<button className="btn" disabled>
												$ <strong className="amount">{pledge.amount}</strong>
											</button>
											<button className="btn">Continue</button>
										</div>
									</div>
								</>
							)}
						</div>
					</Checkbox>
				))}
		</>
	);
};
