// styles
import './Project.scss';

import Data from '../../data/db.json';
import { Pledges } from '../../utils/Pledges';

const filteredPledges = Data.filter((pledge) => pledge.amount != null);

export const Project = () => {
	return (
		<section className="projects">
			<h3 className="projects__heading">About this project</h3>
			<p className="projects__info">
				The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
				that elevates your screen to a more comfortable viewing height. Placing
				your monitor at eye level has the potential to improve your posture and
				make you more comfortable while at work, helping you stay focused on the
				task at hand.
			</p>
			<p className="projects__info">
				Featuring artisan craftsmanship, the simplicity of design creates extra
				desk space below your computer to allow notepads, and USB sticks to be
				stored under the stand.
			</p>
			<arcticle className="projects__container">
				<Pledges Pledges={filteredPledges} />
			</arcticle>
		</section>
	);
};
