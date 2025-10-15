import { useState, useEffect, useRef } from "react";

import { Menu } from "../Components/Menu/Menu";
import Header from "../Components/Header/Header";
import { Hero } from "../Components/Hero/Hero";
import Dynasty from "../Components/Dynasty/Dynasty";
import Featured from "../Components/Featured/Featured";
import About from "../Components/About/About";
import { Extras } from "../Components/Extras/Extras";
import { Shop } from "../Components/Shop/Shop";
import { Footer } from "../Components/Footer/Footer";
import { FooterAddress } from "../Components/FooterAddress/FooterAddress";

import css from "./App.module.css";

export default function App() {
	// MOB MENU: check if width is <= 1024 px. If not, then close the menu.
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

	useEffect(() => {
		const handleResize = () => {
			const nowMobile = window.innerWidth <= 1024;
			setIsMobile(nowMobile);
			if (!nowMobile) setIsMenuOpen(false);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// HEADER BG COLOR: check if Hero is in viewport
	const heroRef = useRef(null);
	const [headerBg, setHeaderBg] = useState(false);

	useEffect(() => {
		if (!heroRef.current) return;
		const observer = new IntersectionObserver(
			([entry]) => setHeaderBg(!entry.isIntersecting),
			{ threshold: 0 } // коли хоча б 1px Hero виходить з viewport
		);
		observer.observe(heroRef.current);

		return () => observer.disconnect();
	}, [heroRef]);

	return (
		<div>
			<Header
				className={css.o_container}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				isMobile={isMobile}
				bg={headerBg}
			/>
			<Menu className={css.o_container} isMenuOpen={isMenuOpen} />
			<Hero className={css.o_container} ref={heroRef} />
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
