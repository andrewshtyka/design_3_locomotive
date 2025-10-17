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

	// useEffect(() => {
	// 	// check via Data Saver API
	// 	if ("connection" in navigator && "saveData" in navigator.connection) {
	// 		if (navigator.connection.saveData) {
	// 			setShowVideo(false);
	// 			return;
	// 		}
	// 	}

	// 	// check via prefers-reduced-motion
	// 	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	// 	if (prefersReducedMotion) {
	// 		setShowVideo(false);
	// 		return;
	// 	}

	// 	// try to play video and check if it's playing
	// 	const video = videoRef.current;
	// 	if (video) {
	// 		const playPromise = video.play();

	// 		if (playPromise !== undefined) {
	// 			playPromise.catch(() => {
	// 				// if autoplay locked (Low Power Mode) - show image
	// 				setShowVideo(false);
	// 			});
	// 		}

	// 		// additional check via timeout - if video didn't start playing anfter 1 sec
	// 		const timeoutId = setTimeout(() => {
	// 			if (video.paused || video.currentTime === 0) {
	// 				setShowVideo(false);
	// 			}
	// 		}, 1000);

	// 		return () => clearTimeout(timeoutId);
	// 	}
	// }, []);

	return (
		<section ref={ref} className={`${css.c_container}${className ? " " + className : ""}`}>
			<h1 className={`f_decor u_kerning_normal ${css.c_heading}`}>
				<span aria-hidden="true">🔶 </span>
				Locomotive&reg;
				<br />
				Digital-first Design Agency<span aria-hidden="true">🍺🔞</span>
			</h1>

			<div className={css.o_video_container}>
				<video ref={videoRef} src={videoSrc} className={css.o_video} autoPlay playsInline muted loop poster={poster} />

				{/* {showVideo ? (
					<video
						ref={videoRef}
						src={videoSrc}
						className={css.o_video}
						autoPlay
						playsInline
						muted
						loop
						poster={poster}
					/>
				) : (
					<img src={poster} alt="Locomotive Agency" className={css.o_video} />
				)} */}
			</div>
		</section>
	);
});
