import { LinkCustomLine } from "../LinkCustom/LinkCustom";
import css from "./About.module.css";

export default function About() {
	return (
		<div className={css.o_container}>
			<p className={`f_decor`}>
				🔰Design and code are only tools of expression. What sets us and our work apart is people. We’re a small group
				of creative thinkers who craft bespoke digital-first brand identities and experiences, tailor-made for you and
				your audience.🔛🔜
			</p>
			<div className={css.o_details}>
				<div className={css.c_visual}></div>
				<div className={css.o_description}>
					<p className={css.o_text_secr}>
						From strategy to deployment and maintenance, we're the ultimate digital one-stop shop. Over the past 15
						years, Locomotive® has become a go-to for meaningful, innovative, results-driven digital experiences, web
						design and branding. Freshness guaranteed.
					</p>
					<div className={css.o_links}>
						<LinkCustomLine linkURL="#" className_1={css.c_link_area}>
							Agency
						</LinkCustomLine>
						<LinkCustomLine linkURL="#" className_1={css.c_link_area}>
							Careers
						</LinkCustomLine>
					</div>
				</div>

				<span className={css.o_text_top}>Always looking</span>
				<span className={css.o_text_bottom}>for top shelf talent</span>
			</div>
		</div>
	);
}
