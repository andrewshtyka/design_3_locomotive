import { LinkCustom, LinkNoUnderline } from "../LinkCustom/LinkCustom";
import css from "./Footer.module.css";

export function Footer() {
	return (
		<footer className={css.o_container}>
			<nav className={css.o_container_menu}>
				<h2 className={css.o_title}>Menu</h2>
				<div className={css.c_double_col}>
					<ul>
						<li>
							<LinkCustom linkURL="#">Work</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Agency</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Careers</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Let's talk</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Privacy</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Français</LinkCustom>
						</li>
					</ul>

					<ul>
						<li>
							<LinkNoUnderline linkURL="#">Cookie preferences</LinkNoUnderline>
						</li>
						<li>
							<LinkNoUnderline linkURL="#">Newsletter ↓</LinkNoUnderline>
						</li>
					</ul>
				</div>
			</nav>

			<nav className={css.o_container_social}>
				<h2 className={css.o_title}>Social</h2>
				<div className={css.c_single_col}>
					<ul>
						<li>
							<LinkCustom linkURL="#">Instagram</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Twitter</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">LinkedIn</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Behance</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">GitHub</LinkCustom>
						</li>
					</ul>
				</div>
			</nav>

			<nav className={css.o_container_external}>
				<h2 className={css.o_title}>External</h2>
				<div className={css.c_single_col}>
					<ul>
						<li>
							<LinkCustom linkURL="#">Store</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Locomotive Scroll</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Charcoal CMS</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Annual trips</LinkCustom>
						</li>
						<li>
							<LinkCustom linkURL="#">Dynasty</LinkCustom>
						</li>
					</ul>
				</div>
			</nav>
		</footer>
	);
}