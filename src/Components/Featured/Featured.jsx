import mateImg from "../../Assets/Images/mate-intro-300w.jpg";
import stengerImg from "../../Assets/Images/stenger-300w.png";
import lightshipImg from "../../Assets/Images/Lightship_Website_2-300w.jpg";
import frameImg from "../../Assets/Images/Frame_1466-300w.png";
import baillatImg from "../../Assets/Images/Screen_Shot_2022-10-17_at_1.28_1-300w.png";

import { Featured_Item, Featured_All } from "../Featured_Item/Featured_Item";

import css from "./Featured.module.css";

export default function Featured({ className }) {
	return (
		<section className={`${className} && ${className}}`}>
			<h2 className={css.o_title}>Featured work</h2>
			<ul>
				<Featured_Item project_Name="Mate Libre" name_1="Mate" name_2="Libre" src={mateImg} alt="" />
				<Featured_Item project_Name="Stenger Bike" name_1="Stenger" name_2="Bike" src={stengerImg} alt="" />
				<Featured_Item project_Name="Lightship" name_1="Lightship" src={lightshipImg} alt="" />
				<Featured_Item project_Name="Pangram Pangram" name_1="Pangram" name_2="Pangram" src={frameImg} alt="" />
				<Featured_Item project_Name="Baillat Studio" name_1="Baillat" name_2="Studio" src={baillatImg} alt="" />
				<Featured_All />
			</ul>
		</section>
	);
}
