import tShirtURL from "../../Assets/Images/pros-de-linternet-white-t-shirt.jpg";
import capURL from "../../Assets/Images/pros-de-linternet-sand-cap.jpg";

import { ShopCard } from "../ShopCard/ShopCard";
import css from "./Shop.module.css";

export function Shop({ className }) {
	return (
		<section className={`${css.o_container} ${className ? " " + className : ""}`}>
			<ShopCard
				className={css.c_card_1}
				src={tShirtURL}
				alt="T-Shirt"
				linkURL="#"
				product_name="Pros de l'internet White T-Shirt"
				product_price="30 USD"
			/>
			<ShopCard
				className={css.c_card_2}
				src={capURL}
				alt="Cap"
				linkURL="#"
				product_name="Pros de l'internet Sand Hat"
				product_price="25 USD"
			/>
		</section>
	);
}
