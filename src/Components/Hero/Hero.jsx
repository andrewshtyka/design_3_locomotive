import { forwardRef } from "react";
import css from "./Hero.module.css";
import posterDesktop from "../../Assets/Video/poster_locomotive_desktop.png";
import posterMobile from "../../Assets/Video/poster_locomotive_mobile.png";

export const Hero = forwardRef(({ className, isMobile, progress }, ref) => {
	const videoSrc =
		"https://player.vimeo.com/progressive_redirect/playback/792718372/rendition/1080p/file.mp4?loc=external&log_user=0&signature=978abf9e4b33e3e143901fbcbf68e159d90d5eeb95ed25f8378d341514009cf8";

	const poster = isMobile ? posterMobile : posterDesktop;

	return (
		<section
			ref={ref}
			className={`${css.c_container}${className ? " " + className : ""}`}
			style={{ "--progress": progress }}
		>
			<h1 className={`f_decor u_kerning_normal ${css.c_heading}`}>
				<span aria-hidden="true">🔶 </span>
				Locomotive&reg;
				<br />
				Digital-first Design Agency<span aria-hidden="true">🍺🔞</span>
			</h1>

			<div className={css.o_video_wrapper}>
				<video src={videoSrc} className={css.o_video} autoPlay playsInline muted loop poster={poster} />
			</div>
		</section>
	);
});
