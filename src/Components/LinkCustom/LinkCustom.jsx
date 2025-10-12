import css from "./LinkCustom.module.css";

export default function LinkCustom({ linkURL, className, children, ...props }) {
	return (
		<a href={linkURL} className={`${css.c_link} ${className ? " " + className : ""}`} {...props}>
			{children}
		</a>
	);
}
