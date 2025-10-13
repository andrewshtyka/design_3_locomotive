import { LinkCustomLine } from "../LinkCustom/LinkCustom";
import css from "./Dynasty.module.css";

export default function Dynasty() {
	return (
		<div className={css.o_container}>
			<div className={css.o_years}>
				<span>&copy;2008-2025</span>
			</div>

			<div className={css.o_canvas}>
				<div className={css.o_canvas_wrapper}>
					<span>Six Years</span>
					<span>Running</span>
					<span>2018-2023</span>
					<div className={css.o_canvas_area}></div>
					<LinkCustomLine linkURL="#" className_1={css.c_link_area}>
						The dynasty
					</LinkCustomLine>
				</div>
			</div>
		</div>
	);
}
