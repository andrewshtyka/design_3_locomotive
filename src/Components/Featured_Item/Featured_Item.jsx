import css from "./Featured_Item.module.css";

export function Featured_Item({ project_Name, name_1, name_2, src, alt }) {
	return (
		<li className={css.c_item}>
			<h3 className={css.o_item_name}>{project_Name}</h3>

			<div aria-hidden="true" className={css.o_title}>
				<span className={`f_project_title ${css.o_title_name}`}>{name_1}</span>
				<div className={css.o_image_wrapper}>
					<img className={css.c_image} src={src} alt={alt} />
				</div>
				{name_2 && <span className={`f_project_title ${css.o_title_name}`}>{name_2}</span>}
			</div>

			<a href="#" className={css.c_link}>
				Read more about this project
			</a>
		</li>
	);
}

export function Featured_All() {
	return (
		<li className={css.c_item_last}>
			<h3 className={css.o_item_name}>All Work</h3>

			<div aria-hidden="true" className={css.o_title}>
				<span className={`f_project_title ${css.o_title_name} ${css.o_title_final}`}>All Work</span>
			</div>

			<a href="#" className={css.c_link}>
				See all projects
			</a>
		</li>
	);
}
