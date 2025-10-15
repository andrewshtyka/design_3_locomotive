import { LinkCustom } from "../LinkCustom/LinkCustom";
import css from "./Header.module.css";

export default function Header({ className, isMenuOpen, setIsMenuOpen, isMobile, bg }) {
	return (
		<div
			className={`${css.c_menu} ${className ? " " + className : ""}
			${isMenuOpen && "u_blend_normal"}
			${!bg && !isMenuOpen && "u_blend_difference"}`}
			style={{
				backgroundColor: bg && !isMenuOpen ? "var(--color-white)" : "transparent",
				transition:
					bg && !isMenuOpen ? "background-color 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)" : "background-color 0s",
			}}
		>
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
			{isMobile && (
				<LinkCustom
					className={`${css.o_link_talk} ${css.u_display} u_no_hover u_kerning_normal`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? "Close" : "Menu"}
				</LinkCustom>
			)}
		</div>
	);
}
