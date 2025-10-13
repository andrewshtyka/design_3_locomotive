import Dynasty from "../Dynasty/Dynasty";
import Featured from "../Featured/Featured";
import About from "../About/About";
import { Extras } from "../Extras/Extras";
import { Shop } from "../Shop/Shop";
import { Footer } from "../Footer/Footer";

import css from "./MainSection.module.css";

export default function MainSection() {
	return (
		<section className={css.o_container}>
			<Dynasty />
			<Featured />
			<About />
			<Extras />
			<Shop />
			<Footer />
		</section>
	);
}
