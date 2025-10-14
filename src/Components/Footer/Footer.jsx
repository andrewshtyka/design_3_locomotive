import { LinkCustom, LinkNoUnderline } from "../LinkCustom/LinkCustom";
import css from "./Footer.module.css";

export function Footer({ className }) {
	return (
		<footer className={`${css.o_container} ${className ? " " + className : ""}`}>
			<nav className={css.o_container_menu}>
				<h2 className={css.o_title}>Menu</h2>
				<div className={css.c_double_col}>
					<ul>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Work
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Agency
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Careers
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Let's talk
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Privacy
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Français
							</LinkCustom>
						</li>
					</ul>

					<ul>
						<li>
							<LinkNoUnderline linkURL="#" className="u_kerning_normal">
								Cookie preferences
							</LinkNoUnderline>
						</li>
						<li>
							<LinkNoUnderline linkURL="#" className="u_kerning_normal">
								Newsletter ↓
							</LinkNoUnderline>
						</li>
					</ul>
				</div>
			</nav>

			<nav className={css.o_container_social}>
				<h2 className={css.o_title}>Social</h2>
				<div className={css.c_single_col}>
					<ul>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Instagram
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Twitter
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								LinkedIn
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Behance
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								GitHub
							</LinkCustom>
						</li>
					</ul>
				</div>
			</nav>

			<nav className={css.o_container_external}>
				<h2 className={css.o_title}>External</h2>
				<div className={css.c_single_col}>
					<ul>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Store
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Locomotive Scroll
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Charcoal CMS
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Annual trips
							</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#" className="u_kerning_normal">
								Dynasty
							</LinkCustom>
						</li>
					</ul>
				</div>
			</nav>

			<ul className={css.c_lang}>
				<li>
					<LinkCustom linkURL="#" className="u_kerning_normal">
						Français
					</LinkCustom>
				</li>
			</ul>

			<ul className={css.c_extra}>
				<li>
					<LinkNoUnderline linkURL="#" className="u_kerning_normal">
						Cookie preferences
					</LinkNoUnderline>
				</li>
				<li>
					<LinkNoUnderline linkURL="#" className="u_kerning_normal">
						Newsletter ↓
					</LinkNoUnderline>
				</li>
			</ul>
		</footer>
	);
}
