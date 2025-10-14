import css from "./Header.module.css";
import { LinkCustom } from "../LinkCustom/LinkCustom";

export default function Header({ className }) {
	return (
		<div className={`${css.c_menu} ${className ? " " + className : ""}`}>
			<LinkCustom linkURL="#" className={`${css.c_logo} u_no_hover u_kerning_normal`}>
				<span>Locomotive</span>
				&reg;
			</LinkCustom>
			<span className={css.c_icon}></span>

			<nav className={`${css.o_links} ${css.u_display_none}`}>
				<ul>
					<li className={css.o_link_item}>
						<LinkCustom linkURL="#">Work</LinkCustom>
					</li>
					<li className={css.o_link_item}>
						<LinkCustom linkURL="#">Agency</LinkCustom>
					</li>
					<li className={css.o_link_item}>
						<LinkCustom linkURL="#">Careers</LinkCustom>
					</li>
					<li className={css.o_link_item}>
						<LinkCustom linkURL="#">Store</LinkCustom>
					</li>
				</ul>
			</nav>
			<LinkCustom linkURL="#" className={`${css.o_link_talk} ${css.u_display_none} u_kerning_normal`}>
				Let's talk
			</LinkCustom>
			<LinkCustom linkURL="#" className={`${css.o_link_talk} ${css.u_display} u_no_hover u_kerning_normal`}>
				Menu
			</LinkCustom>
		</div>
	);
}
