// ShopCard.jsx
import { useRef } from "react";
import { createHoverShuffle } from "../../Scripts/HoverShuffle";
import css from "./ShopCard.module.css";

export function ShopCard({ className, src, alt, linkURL, product_name, product_price }) {
	const nameRef = useRef();
	const priceRef = useRef();
	const linkRef = useRef();
	const { onMouseEnter, onMouseLeave } = createHoverShuffle();

	return (
		<article className={`${css.o_card} ${className ? className : ""}`}>
			<div>
				<img src={src} alt={alt} />
			</div>

			<div className={css.o_details}>
				<span ref={nameRef} className={css.o_name}>
					{product_name}
				</span>
				<span ref={priceRef} className={css.o_button}>
					Buy now→
				</span>
				<span className={css.o_price}>{product_price}</span>
			</div>

			<a
				ref={linkRef}
				onMouseEnter={() => {
					onMouseEnter({ currentTarget: nameRef.current });
					onMouseEnter({ currentTarget: priceRef.current });
				}}
				onMouseLeave={() => {
					onMouseLeave({ currentTarget: nameRef.current });
					onMouseLeave({ currentTarget: priceRef.current });
				}}
				href={linkURL}
				className={css.o_link}
			></a>
		</article>
	);
}
