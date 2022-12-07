import './App.scss';

import { PledgeModal } from './modals/PledgeModal';
import { CTA } from './sections/cta/CTA';
import { Hero } from './sections/hero/Hero';
import { Project } from './sections/project/Project';
import { Stats } from './sections/stats/Stats';

import { useReducer, useState } from 'react';

let FUND_AMOUNT = 89914;
let TOTAL_BACKERS = 5007;

const reducer = (state, action) => {
	switch (action.payload) {
		case 25:
		case 75:
		case 200:
			return {
				FUND_AMOUNT: state.FUND_AMOUNT + action.payload,
				TOTAL_BACKERS: state.TOTAL_BACKERS + 1,
			};

		default:
			return state;
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, { FUND_AMOUNT, TOTAL_BACKERS });
	const [showModal, setShowModal] = useState(true);
	const number = 101;

	return (
		<div className="App">
			<Hero />
			<CTA setShowModal={setShowModal} />
			<Stats
				fundingAmount={state.FUND_AMOUNT}
				totalBackers={state.TOTAL_BACKERS}
			/>
			<Project />
			{showModal && (
				<PledgeModal
					setShowModal={setShowModal}
					dispatch={dispatch}
					number={number}
				/>
			)}
		</div>
	);
}

export default App;
