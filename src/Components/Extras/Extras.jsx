import { LinkList } from "../LinkCustom/LinkCustom";
import css from "./Extras.module.css";

export function Extras({ className }) {
	return (
		<section className={`${className} && ${className}`}>
			<div className={css.o_container_title}>
				<h2 className={`f_decor`}>Extras</h2>
				<h2 className={`f_decor`}>(13)</h2>
			</div>

			<div className={css.o_section}>
				<h3 className={css.o_section_title}>Articles</h3>
				<ul className={css.o_list}>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">Locomotive x Chivalry: How We Became More Than Just Collaborators</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">Should I use Locomotive Scroll on my project?</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">Why don't we use front-end frameworks at Locomotive?</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">The revolution of the workspace as we know it</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">A few things your UX designer can learn from your shrink</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">Can I say bravo?</LinkList>
					</li>
				</ul>
			</div>

			<div className={css.o_section}>
				<h3 className={css.o_section_title}>Culture</h3>
				<ul className={css.o_list}>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">(2024) Locomotive in Jamaica</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">(2023) Locomotive in Samaná</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">(2022) Locomotive in Playa del Carmen</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">(2019) Locomotive in Mexico</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">(2018) Locomotive in Jamaica</LinkList>
					</li>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">(2017) Locomotive in Samaná</LinkList>
					</li>
				</ul>
			</div>

			<div className={css.o_section}>
				<h3 className={css.o_section_title}>Store</h3>
				<ul className={css.o_list}>
					<li className={css.c_list_item}>
						<LinkList linkURL="#">Check out our gear</LinkList>
					</li>
				</ul>
			</div>
		</section>
	);
}
