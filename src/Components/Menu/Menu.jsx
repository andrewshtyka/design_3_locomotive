import { LinkNoUnderline } from "../LinkCustom/LinkCustom";
import css from "./Menu.module.css";

export function Menu({ className, isMenuOpen }) {
	return ( isMenuOpen &&
		<nav className={`${css.c_menu} ${className ? " " + className : ""}`}>
			<div className={css.o_menu_container}>
				<ul>
					<li>
						<a className="f_menu_mobile" href="#">
							Work
						</a>
					</li>
					<li>
						<a className="f_menu_mobile" href="#">
							Agency
						</a>
					</li>
					<li>
						<a className="f_menu_mobile" href="#">
							Careers
						</a>
					</li>
					<li>
						<a className="f_menu_mobile" href="#">
							Let's talk
						</a>
					</li>
					<li>
						<a className="f_menu_mobile" href="#">
							Store
						</a>
					</li>
				</ul>

				<div className={css.o_info_container}>
					<LinkNoUnderline linkURL="#" className={`u_kerning_normal ${css.c_link}`}>
						Français
					</LinkNoUnderline>
					<span>
						<span className="u_screen_reader_text">Montréal, Quebec</span>
						<span className={css.f_glyphs}>🛑🚹🚺</span>
					</span>
				</div>
			</div>
		</nav>
	);
}
