import { forwardRef, useState, useEffect, useRef } from "react";
import css from "./Hero.module.css";
import posterDesktop from "../../Assets/Video/poster_locomotive_desktop.png";
import posterMobile from "../../Assets/Video/poster_locomotive_mobile.png";

export const Hero = forwardRef(({ className, isMobile }, ref) => {
	const [showVideo, setShowVideo] = useState(true);
	const videoRef = useRef(null);

	const videoSrc =
		"https://player.vimeo.com/progressive_redirect/playback/792718372/rendition/1080p/file.mp4?loc=external&log_user=0&signature=978abf9e4b33e3e143901fbcbf68e159d90d5eeb95ed25f8378d341514009cf8";

	const poster = isMobile ? posterMobile : posterDesktop;

	useEffect(() => {
		// Перевірка через Data Saver API
		if ("connection" in navigator && "saveData" in navigator.connection) {
			if (navigator.connection.saveData) {
				setShowVideo(false);
				return;
			}
		}

		// Перевірка через prefers-reduced-motion
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReducedMotion) {
			setShowVideo(false);
			return;
		}

		// Спроба запустити відео та перевірка чи воно реально грає
		const video = videoRef.current;
		if (video) {
			const playPromise = video.play();

			if (playPromise !== undefined) {
				playPromise.catch(() => {
					// Якщо автоплей заблокований (Low Power Mode) - показуємо картинку
					setShowVideo(false);
				});
			}

			// Додаткова перевірка через таймаут - якщо відео не почало грати за 1 секунду
			const timeoutId = setTimeout(() => {
				if (video.paused || video.currentTime === 0) {
					setShowVideo(false);
				}
			}, 1000);

			return () => clearTimeout(timeoutId);
		}
	}, []);

	return (
		<section ref={ref} className={`${css.c_container}${className ? " " + className : ""}`}>
			<h1 className={`f_decor u_kerning_normal ${css.c_heading}`}>
				<span aria-hidden="true">🔶 </span>
				Locomotive&reg;
				<br />
				Digital-first Design Agency<span aria-hidden="true">🍺🔞</span>
			</h1>

			<div className={css.o_video_container}>
				{showVideo ? (
					<video ref={videoRef} className={css.o_video} autoPlay playsInline muted loop poster={poster}>
						<source src={videoSrc} type="video/mp4" />
						<img src={poster} alt="Locomotive Agency" />
					</video>
				) : (
					<img src={poster} alt="Locomotive Agency" className={css.o_video} />
				)}
			</div>
		</section>
	);
});
