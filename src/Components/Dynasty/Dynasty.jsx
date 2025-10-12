import LinkCustom from "../LinkCustom/LinkCustom";
import css from "./Dynasty.module.css";

export default function Dynasty() {
	return (
		<section className={css.o_container}>
			<div className={css.o_years}>
				<span>&copy;2008-2025</span>
			</div>
			<div className={css.o_canvas}>
				<div className={css.o_canvas_wrapper}>
					<span>Six Years</span>
					<span>Running</span>
					<span>2018-2023</span>
					<div className={css.o_canvas_area}></div>
					<span className={css.c_link_area}>
						<LinkCustom className={`${css.c_link} u_no_hover`} linkURL="#" data-icon="→">
							The dynasty
						</LinkCustom>
					</span>
				</div>
			</div>
		</section>
	);
}
