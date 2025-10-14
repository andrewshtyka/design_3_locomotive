import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Dynasty from "../Components/Dynasty/Dynasty";
import Featured from "../Components/Featured/Featured";
import About from "../Components/About/About";
import { Extras } from "../Components/Extras/Extras";
import { Shop } from "../Components/Shop/Shop";
import { Footer } from "../Components/Footer/Footer";
import { FooterAddress } from "../Components/FooterAddress/FooterAddress";

import css from "./App.module.css";

export default function App() {
	return (
		<div>
			<Header className={css.o_container} />
			<Hero className={css.o_container} />
			<Dynasty className={css.o_container} />
			<Featured className={css.o_container} />
			<About className={css.o_container} />
			<Extras className={css.o_container} />
			<Shop className={css.o_container} />
			<Footer className={css.o_container} />
			<FooterAddress className={css.o_container} />
		</div>
	);
}
