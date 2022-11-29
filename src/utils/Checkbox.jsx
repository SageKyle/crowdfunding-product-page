export const Checkbox = ({ children, isChecked, setIsChecked, isDisabled }) => {
	return (
		<article className="checkbox-wrapper">
			<label className="checkbox">
				<input
					type="radio"
					name="pledge-checkbox"
					checked={isChecked}
					onChange={() => setIsChecked((prev) => !prev)}
				/>
				<span className="pledge">{children}</span>
			</label>
		</article>
	);
};
