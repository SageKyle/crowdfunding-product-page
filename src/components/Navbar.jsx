// styles/images
import Close from '../assets/icons/icon-close-menu.svg';
import Open from '../assets/icons/icon-hamburger.svg';
import './Navbar.scss';

import { useRef } from 'react';

export const Navbar = () => {
	const navRef = useRef('');
	const openNavRef = useRef('');
	const closeNavRef = useRef('');

	const handleRef = () => {
		navRef.current.classList.toggle('hidden');
		openNavRef.current.classList.toggle('hidden');
		closeNavRef.current.classList.toggle('hidden');
	};

	return (
		<header className="navbar">
			<h1 className="navbar__brand">crowdfund</h1>
			<nav className="navbar__container">
				<div className="navbar__toggle">
					<img
						src={Open}
						ref={openNavRef}
						onClick={handleRef}
						alt="Open Navigation"
						className="logo navbar__toggle--open"
					/>
					<img
						src={Close}
						ref={closeNavRef}
						onClick={handleRef}
						alt="Close Navigation"
						className="logo hidden navbar__toggle--close"
					/>
				</div>
				<section className="navbar__nav hidden" ref={navRef}>
					<a href="/" className="navbar__nav--link">
						about
					</a>
					<a href="/" className="navbar__nav--link">
						discover
					</a>
					<a href="/" className="navbar__nav--link">
						get started
					</a>
				</section>
			</nav>
		</header>
	);
};
