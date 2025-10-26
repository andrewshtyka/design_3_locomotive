// ShopCard.jsx
import { useRef, useEffect } from "react";
import { animDepixelateOnScroll } from "../../Scripts/pixelateImage";
import { createHoverShuffle } from "../../Scripts/HoverShuffle";
import css from "./ShopCard.module.css";

export function ShopCard({ className, src, alt, linkURL, product_name, product_price }) {
	// letters shuffle effect
	const nameRef = useRef();
	const priceRef = useRef();
	const linkRef = useRef();
	const { onMouseEnter, onMouseLeave } = createHoverShuffle();

	// image pixelization on scroll
	const imgRef = useRef();
	useEffect(() => {
		animDepixelateOnScroll(imgRef.current);
	}, []);

	return (
		<article className={`${css.o_card} ${className ? className : ""}`}>
			<div className={css.o_image_wrapper}>
				<img ref={imgRef} src={src} alt={alt} />
				<canvas className={css.o_canvas}></canvas>
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
