// styles
import './Hero.scss';

import { Navbar } from './components/Navbar';

export const Hero = () => {
	return (
		<section className="hero">
			<Navbar />
			<div className="hero-item">This is the hero container</div>
		</section>
	);
};
