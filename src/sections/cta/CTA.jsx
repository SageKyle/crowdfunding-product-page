// styles
import BookmarkIcon from '../../assets/icons/icon-bookmark.svg';
import Logo from '../../assets/img/logo-mastercraft.svg';
import './CTA.scss';

export const CTA = () => {
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
				<button className="btn cta__buttons--action">Back this project</button>
				<img
					src={BookmarkIcon}
					alt="add to bookmark"
					className="logo cta__buttons--bookmark"
				/>
			</div>
		</article>
	);
};
