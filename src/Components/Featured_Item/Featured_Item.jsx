import { useRef } from "react";
import { createHoverShuffle } from "../../Scripts/HoverShuffle";
import { animDepixelate } from "../../Scripts/pixelateImage";
import css from "./Featured_Item.module.css";

export function Featured_Item({ project_Name, name_1, name_2, src, alt }) {
	// letters shuffle effect
	const textRef_1 = useRef();
	const textRef_2 = useRef();
	const linkRef = useRef();
	const { onMouseEnter, onMouseLeave } = createHoverShuffle();

	// image pixelization
	const imgRef = useRef();

	return (
		<li className={css.c_item}>
			<h3 className={css.o_item_name}>{project_Name}</h3>

			<div aria-hidden="true" className={css.o_title}>
				<span ref={textRef_1} className={`f_project_title u_kerning_normal ${css.o_title_name}`}>
					{name_1}
				</span>
				<div className={css.o_image_wrapper}>
					<img ref={imgRef} className={(css.c_image, css.pixelate_target)} src={src} alt={alt} />
				</div>
				{name_2 && (
					<span ref={textRef_2} className={`f_project_title u_kerning_normal ${css.o_title_name}`}>
						{name_2}
					</span>
				)}
			</div>

			<a
				ref={linkRef}
				onMouseEnter={() => {
					const $parent = imgRef.current.parentNode;
					if ($parent.classList.contains("-pixelated")) return;

					onMouseEnter({ currentTarget: textRef_1.current });
					if (name_2) onMouseEnter({ currentTarget: textRef_2.current });

					if (window.innerWidth > 700) {
						animDepixelate(imgRef.current);
					}
				}}
				onMouseLeave={(e) => {
					onMouseLeave({ currentTarget: textRef_1.current });
					if (name_2) onMouseLeave({ currentTarget: textRef_2.current });

					const $parent = imgRef.current.parentNode;
					if (!e.currentTarget.contains(e.relatedTarget)) {
						$parent.classList.remove("-pixelated");
					}
				}}
				href="#"
				className={css.c_link}
			>
				Read more about this project
			</a>
		</li>
	);
}

export function Featured_All() {
	const textRef = useRef();
	const linkRef = useRef();
	const { onMouseEnter, onMouseLeave } = createHoverShuffle();

	return (
		<li className={css.c_item_last}>
			<h3 className={css.o_item_name}>All Work</h3>

			<div aria-hidden="true" className={css.o_title}>
				<span ref={textRef} className={`f_project_title u_kerning_normal ${css.o_title_name} ${css.o_title_final}`}>
					All Work
				</span>
			</div>

			<a
				ref={linkRef}
				onMouseEnter={() => {
					onMouseEnter({ currentTarget: textRef.current });
				}}
				onMouseLeave={() => {
					onMouseLeave({ currentTarget: textRef.current });
				}}
				href="#"
				className={css.c_link}
			>
				See all projects
			</a>
		</li>
	);
}
