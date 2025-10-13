import css from "./ShopCard.module.css";

export function ShopCard({ className, src, alt, linkURL, product_name, product_price }) {
	return (
		<article className={`${css.o_card} ${className ? className : ""}`}>
			<div className={css.o_image_wrapper}>
				<img src={src} alt={alt} />
			</div>

			<div className={css.o_details}>
				<span className={css.o_name}>{product_name}</span>
				<span className={css.o_button}>Buy now→</span>
				<span className={css.o_price}>{product_price}</span>
			</div>

			<a className={css.o_link} href={linkURL}></a>
		</article>
	);
}
