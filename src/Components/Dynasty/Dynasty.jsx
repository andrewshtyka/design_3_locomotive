import { useState, useEffect } from "react";
import { LinkCustomLine } from "../LinkCustom/LinkCustom";
import css from "./Dynasty.module.css";

export default function Dynasty({ className }) {
	const [isDesktop, setIsDesktop] = useState(() => window.matchMedia("(min-width: 1024px)").matches);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 1024px)");
		const handler = (e) => setIsDesktop(e.matches);
		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, []);

	return (
		<section className={`${css.o_container} ${className ? " " + className : ""}`}>
			<span className={css.o_years}>&copy;2008-2025</span>

			<div className={css.o_canvas}>
				<div className={css.o_canvas_wrapper}>
					{isDesktop ? (
						<>
							<span className={css.o_text_item_1}>Six Years</span>
							<span className={css.o_text_item_2}>Running</span>
							<span className={css.o_text_item_3}>2018-2023</span>
						</>
					) : (
						<p className={css.o_text_items}>
							<span>Six Years</span>
							<span>Running</span>
							<span>2018-2023</span>
						</p>
					)}
					<div className={css.o_canvas_area}></div>
					<LinkCustomLine linkURL="#" className_1={`${css.c_link_area} u_kerning_normal`}>
						The dynasty
					</LinkCustomLine>
				</div>
			</div>
		</section>
	);
}
