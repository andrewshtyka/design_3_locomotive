import { useRef } from "react";
import { createHoverShuffle } from "../../Scripts/hoverShuffle";
import css from "./LinkCustom.module.css";

// =============================================================================
//
// LinkCustom
export function LinkCustom({ linkURL, className, children, ...props }) {
	const refText = useRef();
	const { onMouseEnter, onMouseLeave } = createHoverShuffle();

	return (
		<a
			ref={refText}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			href={linkURL}
			className={`${css.c_link} ${className ? " " + className : ""}`}
			{...props}
		>
			{children}
		</a>
	);
}

// =============================================================================
//
// LinkCustomLine
export function LinkCustomLine({ linkURL, className_1, className_2, children, ...props }) {
	const refText = useRef();
	const { onMouseEnter, onMouseLeave } = createHoverShuffle();

	return (
		<span className={`${css.c_link_area} ${className_1 ? " " + className_1 : ""}`}>
			<a
				ref={refText}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
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

// =============================================================================
//
// LinkList
export function LinkList({ linkURL, className, children, ...props }) {
	const refText = useRef();
	const { onMouseEnter, onMouseLeave } = createHoverShuffle();

	return (
		<a
			ref={refText}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			href={linkURL}
			className={`${css.o_link_list} ${className ? className : ""}`}
			{...props}
			data-icon="↗"
		>
			{children}
		</a>
	);
}

// =============================================================================
//
// export function LinkNoUnderline({ linkURL, className, children, ...props }) {

export function LinkNoUnderline({ linkURL, className, children, ...props }) {
	const refText = useRef();
	const { onMouseEnter, onMouseLeave } = createHoverShuffle();

	return (
		<a
			ref={refText}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			href={linkURL}
			className={`${css.c_link_no_underline} ${className ? className : ""}`}
			{...props}
		>
			{children}
		</a>
	);
}
