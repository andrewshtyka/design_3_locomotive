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
	// ======================================================================
	//
	// MOB MENU: check if width is <= 1024 px. If not, then close the menu.
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

	useEffect(() => {
		const handleResize = () => {
			const nowMobile = window.innerWidth <= 1024;
			setIsMobile((prev) => {
				if (prev !== nowMobile) {
					if (!nowMobile) setIsMenuOpen(false);
					return nowMobile;
				}
				return prev;
			});
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// ======================================================================
	//
	// HEADER BG COLOR: check if Hero is in viewport
	const heroRef = useRef(null);
	const [headerBg, setHeaderBg] = useState(false);

	useEffect(() => {
		if (!heroRef.current) return;
		const observer = new IntersectionObserver(([entry]) => setHeaderBg(!entry.isIntersecting), { threshold: 0 });
		observer.observe(heroRef.current);

		return () => observer.disconnect();
	}, [heroRef]);

	// ======================================================================
	//
	// MARKUP
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
			<Dynasty className={`${css.o_container} ${css.u_bg_color_white}`} />
			<Featured className={`${css.o_container} ${css.u_bg_color_white}`} />
			<About className={`${css.o_container} ${css.u_bg_color_white}`} />
			<Extras className={`${css.o_container} ${css.u_bg_color_white}`} />
			<Shop className={`${css.o_container} ${css.u_bg_color_white}`} />
			<Footer className={`${css.o_container} ${css.u_bg_color_white}`} />
			<FooterAddress className={`${css.o_container} ${css.u_bg_color_white}`} />
		</div>
	);
}
