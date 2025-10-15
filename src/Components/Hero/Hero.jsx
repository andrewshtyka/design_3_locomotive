import { forwardRef } from "react";
import css from "./Hero.module.css";

export const Hero = forwardRef(({ className }, ref) => {
	return (
		<section ref={ref} className={`${css.c_container} ${className ? " " + className : ""}`}>
			<h1 className={`f_decor ${css.c_heading}`}>
				<span aria-hidden="true">🔶 </span>
				Locomotive&reg;
				<br />
				Digital-first Design Agency<span aria-hidden="true">🍺🔞</span>
			</h1>
		</section>
	);
});
