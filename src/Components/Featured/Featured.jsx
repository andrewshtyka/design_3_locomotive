import { Featured_Item, Featured_All } from "../Featured_Item/Featured_Item";

import css from "./Featured.module.css";

export default function Featured() {
	return (
		<div>
			<h2 className={css.o_title}>Featured work</h2>
			<ul>
				<Featured_Item
					project_Name="Mate Libre"
					name_1="Mate"
					name_2="Libre"
					src="https://locomotive.ca/uploads/projects/Mate_Libre/mate-intro-300w.jpg"
					alt=""
				/>
				<Featured_Item
					project_Name="Lightship"
					name_1="Lightship"
					src="https://locomotive.ca/uploads/projects/LIGHTSHIP/Lightship_Website_2-300w.jpg"
					alt=""
				/>
				<Featured_Item
					project_Name="Pangram Pangram"
					name_1="Pangram"
					name_2="Pangram"
					src="https://locomotive.ca/uploads/projects/PANGRAM/Frame_1466-300w.png"
					alt=""
				/>
				<Featured_Item
					project_Name="Baillat Studio"
					name_1="Baillat"
					name_2="Studio"
					src="https://locomotive.ca/uploads/projects/BAILLAT/Screen_Shot_2022-10-17_at_1.28_1-300w.png"
					alt=""
				/>
				<Featured_All />
			</ul>
		</div>
	);
}
