import css from "./LinkCustom.module.css";

export function LinkCustom({ linkURL, className, children, ...props }) {
	return (
		<a href={linkURL} className={`${css.c_link} ${className ? " " + className : ""}`} {...props}>
			{children}
		</a>
	);
}

export function LinkCustomLine({ linkURL, className_1, className_2, children, ...props }) {
	return (
		<span className={`${css.c_link_area} ${className_1 ? " " + className_1 : ""}`}>
			<a
				href={linkURL}
				className={`u_no_hover ${css.c_link_line} ${className_2 ? " " + className_2 : ""}`}
				data-icon="→"
				{...props}
			>
				{children}
			</a>
		</span>
	);
}

export function LinkList({ linkURL, className, children }) {
	return (
		<a href={linkURL} className={`${css.o_link_list} ${className ? className : ""}`} data-icon="↗">
			{children}
		</a>
	);
}
