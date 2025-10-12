import Dynasty from "../Dynasty/Dynasty";
import Featured from "../Featured/Featured";

import css from "./MainSection.module.css";

export default function MainSection() {
	return (
		<section className={css.o_container}>
			<Dynasty />
			<Featured />
		</section>
	);
}
