import { LinkList } from "../LinkCustom/LinkCustom";
import css from "./Extras.module.css";

export function Extras({ className }) {
	// data
	const articles = [
		"Locomotive x Chivalry: How We Became More Than Just Collaborators",
		"Should I use Locomotive Scroll on my project?",
		"Why don't we use front-end frameworks at Locomotive?",
		"The revolution of the workspace as we know it",
		"A few things your UX designer can learn from your shrink",
		"Can I say bravo?",
	];

	const culture = [
		"(2024) Locomotive in Jamaica",
		"(2023) Locomotive in Samaná",
		"(2022) Locomotive in Playa del Carmen",
		"(2019) Locomotive in Mexico",
		"(2018) Locomotive in Jamaica",
		"(2017) Locomotive in Samaná",
	];

	const store = ["Check out our gear"];

	// paste data into markup
	const allLinks = [...articles, ...culture, ...store];

	return (
		<section className={`${className} && ${className}`}>
			<div className={css.o_container_title}>
				<h2 className={`f_decor`}>Extras</h2>
				<h2 className={`f_decor`}>({allLinks.length})</h2>
			</div>

			<div className={css.c_section}>
				<h3 className={css.o_section_title}>Articles</h3>
				<ul className={css.o_list}>
					{articles.map((text, i) => (
						<li key={i} className={css.c_list_item}>
							<LinkList linkURL="#">{text}</LinkList>
						</li>
					))}
				</ul>
			</div>

			<div className={css.c_section}>
				<h3 className={css.o_section_title}>Culture</h3>
				<ul className={css.o_list}>
					{culture.map((text, i) => (
						<li key={i} className={css.c_list_item}>
							<LinkList linkURL="#">{text}</LinkList>
						</li>
					))}
				</ul>
			</div>

			<div className={css.c_section}>
				<h3 className={css.o_section_title}>Store</h3>
				<ul className={css.o_list}>
					{store.map((text, i) => (
						<li key={i} className={css.c_list_item}>
							<LinkList linkURL="#">{text}</LinkList>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
