export const Checkbox = ({ children, isChecked, setIsChecked, isDisabled }) => {
	const handleClick = () => {
		setIsChecked((prev) => !prev);
		console.log(this);
	};

	return (
		<article className="checkbox-wrapper">
			<label className="checkbox">
				<input
					type="radio"
					name="pledge-checkbox"
					checked={isChecked}
					onChange={handleClick}
				/>
				<span className="pledge">{children}</span>
			</label>
		</article>
	);
};
