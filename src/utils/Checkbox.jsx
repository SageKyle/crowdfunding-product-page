export const Checkbox = ({ children, id, isChecked, setIsChecked }) => {
	return (
		<article className="checkbox-wrapper">
			<label className="checkbox">
				<input
					type="radio"
					name="pledge-checkbox"
					checked={isChecked}
					onChange={() => setIsChecked((prev) => !prev)}
					id={id}
				/>
				<span className="pledge">{children}</span>
			</label>
		</article>
	);
};
