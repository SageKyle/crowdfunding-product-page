import './App.scss';

import { PledgeModal } from './modals/PledgeModal';
import { CTA } from './sections/cta/CTA';
import { Hero } from './sections/hero/Hero';
import { Project } from './sections/project/Project';

import { useState } from 'react';

function App() {
	const [showModal, setShowModal] = useState(true);
	const number = 101;

	return (
		<div className="App">
			<Hero />
			<CTA />
			<Project />
			{showModal && <PledgeModal setShowModal={setShowModal} number={number} />}
			<button onClick={() => setShowModal(true)}>Show Modal</button>
		</div>
	);
}

export default App;
