import css from "./Header.module.css";
import { LinkCustom } from "../LinkCustom/LinkCustom";

export default function Header({ className }) {
	return (
		<div className={`${css.c_menu} ${className ? " " + className : ""}`}>
			<LinkCustom linkURL="#" className={`${css.c_logo} u_no_hover`}>
				<span>Locomotive</span>
				&reg;
			</LinkCustom>
			<span className={css.c_icon}></span>

			<nav className={css.o_links}>
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
			<LinkCustom linkURL="#" className={css.o_link_talk}>
				Let's talk
			</LinkCustom>
		</div>
	);
}
