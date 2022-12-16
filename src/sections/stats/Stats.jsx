// styles
import './Stats.scss';

export const Stats = ({ fundingAmount, totalBackers }) => {
	const numFormater = (number) => {
		const f = new Intl.NumberFormat('en-us');
		return f.format(number);
	};

	return (
		<section className="stats">
			<div className="stats__section">
				<h4 className="stats__section--heading">
					${numFormater(fundingAmount)}
				</h4>
				<p className="stats__section--info">of $100,000 backed</p>
			</div>
			<div className="stats__section">
				<h4 className="stats__section--heading">{numFormater(totalBackers)}</h4>
				<p className="stats__section--info">total backers</p>
			</div>
			<div className="stats__section">
				<h4 className="stats__section--heading">56</h4>
				<p className="stats__section--info">days left</p>
			</div>
			<div className="stats__progress--backdrop">
				<div className="stats__progress--foreground"></div>
			</div>
		</section>
	);
};
