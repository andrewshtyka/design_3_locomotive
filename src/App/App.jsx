import { useState, useEffect } from "react";

import { Menu } from "../Components/Menu/Menu";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Dynasty from "../Components/Dynasty/Dynasty";
import Featured from "../Components/Featured/Featured";
import About from "../Components/About/About";
import { Extras } from "../Components/Extras/Extras";
import { Shop } from "../Components/Shop/Shop";
import { Footer } from "../Components/Footer/Footer";
import { FooterAddress } from "../Components/FooterAddress/FooterAddress";

import css from "./App.module.css";

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

	// check if width is <= 1024 px. If not, then close the menu.
	useEffect(() => {
		const handleResize = () => {
			const nowMobile = window.innerWidth <= 1024;
			setIsMobile(nowMobile);
			if (!nowMobile) setIsMenuOpen(false);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// block scroll when menu is opened
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	return (
		<div>
			<Header className={css.o_container} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isMobile={isMobile} />
			<Menu className={css.o_container} isMenuOpen={isMenuOpen} />
			<Hero className={css.o_container} />
			<Dynasty className={css.o_container} />
			<Featured className={css.o_container} />
			<About className={css.o_container} />
			<Extras className={css.o_container} />
			<Shop className={css.o_container} />
			<Footer className={css.o_container} />
			<FooterAddress className={css.o_container} />
		</div>
	);
}
