import { ShopCard } from "../ShopCard/ShopCard";
import css from "./Shop.module.css";

export function Shop() {
	return (
		<div className={css.o_container}>
			<ShopCard
				className={css.c_card_1}
				src="https://locomotive.ca/assets/images/temp/pros-de-linternet-white-t-shirt.jpg"
				alt="T-Shirt"
				linkURL="#"
				product_name="Pros de l'internet White T-Shirt"
				product_price="30 USD"
			/>
			<ShopCard
				className={css.c_card_2}
				src="https://locomotive.ca/assets/images/temp/pros-de-linternet-sand-cap.jpg"
				alt="Cap"
				linkURL="#"
				product_name="Pros de l'internet Sand Hat"
				product_price="25 USD"
			/>
		</div>
	);
}
