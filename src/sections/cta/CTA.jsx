// styles
import BookmarkIcon from '../../assets/icons/icon-bookmark.svg';
import Logo from '../../assets/img/logo-mastercraft.svg';
import './CTA.scss';

import { useState } from 'react';

import { useModalContext } from '../../hooks/useModalContext';

export const CTA = () => {
	const [bookmark, setBookmark] = useState('Bookmark');
	const { modalContext } = useModalContext();

	const handleModal = () => {
		// const openModal = modalContext.showModal;
		console.log(modalContext);
		// openModal(true);
	};

	const handleBookmark = () => {
		setBookmark('Bookmarked');
	};

	return (
		<article className="cta">
			<div className="cta__logo">
				<img src={Logo} alt="Mastercraft logo" className="logo icon" />
			</div>
			<h2 className="cta__heading">mastercraft bamboo monitor riser</h2>
			<p className="cta__detail">
				A beautifully handcrafted monitor stand to reduce neck and eye strain.
			</p>
			<div className="cta__buttons">
				<button
					className="btn cta__buttons--action"
					onClick={() => handleModal()}
				>
					Back this project
				</button>
				<button
					className={
						bookmark === 'Bookmarked'
							? 'cta__buttons--bookmark bookmark'
							: 'cta__buttons--bookmark'
					}
					onClick={handleBookmark}
				>
					<img src={BookmarkIcon} alt="add to bookmark" className="logo" />
					<span className="bookmark__txt">{bookmark}</span>
				</button>
			</div>
		</article>
	);
};
