import './App.scss';

import { CTA } from './sections/cta/CTA';
import { Hero } from './sections/hero/Hero';
import { Project } from './sections/project/Project';

function App() {
	return (
		<div className="App">
			<Hero />
			<CTA />
			<Project />
		</div>
	);
}

export default App;
