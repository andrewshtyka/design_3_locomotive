import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const MIN_DISPLAY_TIME = 1400;
const startTime = performance.now();

// ============================================================
//
// ANIMATION - LONG
function LoaderAnimationLong() {
	console.log("loooooooong");

	const text1 = document.getElementById("text1");
	const text2 = document.getElementById("text2");
	const text3 = document.getElementById("text3");
	const text4 = document.getElementById("text4");
	const text5 = document.getElementById("text5");
	const text6 = document.getElementById("text6");
	const text7 = document.getElementById("text7");
	const text8 = document.getElementById("text8");
	const text9 = document.getElementById("text9");
	const text10 = document.getElementById("text10");
	const text11 = document.getElementById("text11");
	const text12 = document.getElementById("text12");
	const text13 = document.getElementById("text13");
	const loader = document.getElementById("loader");
	if (!loader) return;

	gsap.set([text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13], {
		opacity: 0,
	});

	const DURATION = 0.4;
	const DURATION_HIDE = 0.6;
	const SPEED = 0.1;
	const EASE_SHOW = "linear";
	const EASE_HIDE = "linear";
	const START_TIME_SHOW = "-=0.1";
	const START_TIME_HIDE = "< +0.2";
	const START_TIME_BOTTOM_SHOW = "< +0.2";

	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-={}[]|:;\"'<>,.?/~`";
	const textTimeline = gsap.timeline();

	textTimeline
		// SHOW TOP TEXT ==========================================
		.to(text1, {
			onStart: () => {
				text1.style.opacity = 1;
			},
			scrambleText: { chars, text: "Digital", speed: SPEED },
			duration: DURATION,
			ease: EASE_SHOW,
		})
		.to(
			text2,
			{
				onStart: () => {
					text2.style.opacity = 1;
				},
				scrambleText: { chars, text: "Digital-First", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_SHOW
		)
		.to(
			text3,
			{
				onStart: () => {
					text3.style.opacity = 1;
				},
				scrambleText: { chars, text: "Digital-First Design", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
				onComplete: () => {
					const elements = [
						"#el7",
						"#el10",
						"#el5",
						"#el2",
						"#el9",
						"#el6",
						"#el12",
						"#el11",
						"#el4",
						"#el1",
						"#el3",
						"#el8",
						"#el13",
					];

					elements.forEach((selector, index) => {
						gsap.to(selector, {
							opacity: 0,
							duration: 0.2,
							ease: "steps(1)",
							delay: index * 0.02, // ось правильний спосіб затримки
						});
					});
				},
			},
			START_TIME_SHOW
		)
		.to(
			text4,
			{
				onStart: () => {
					text4.style.opacity = 1;
				},
				scrambleText: { chars, text: "Digital-First Design", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_SHOW
		)
		.to(
			text5,
			{
				onStart: () => {
					text5.style.opacity = 1;
				},
				scrambleText: { chars, text: "Digital-First Agency", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_SHOW
		)
		.to(
			text6,
			{
				onStart: () => {
					text6.style.opacity = 1;
				},
				scrambleText: { chars, text: "Digital-First Agency", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_SHOW
		)
		// HIDE TOP TEXT ==========================================
		.to(
			text1,
			{
				onStart: () => {
					text1.style.display = "inline-block";
					text1.style.width = `${text1.textContent.length - 2}ch`;
					text1.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION,
				ease: EASE_HIDE,
				x: "2rem",
			},
			`${DURATION * 2}`
		)
		.to(
			text2,
			{
				onStart: () => {
					text2.style.display = "inline-block";
					text2.style.width = `${text2.textContent.length - 2}ch`;
					text2.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
			},
			START_TIME_HIDE
		)
		.to(
			text3,
			{
				onStart: () => {
					text3.style.display = "inline-block";
					text3.style.width = `${text3.textContent.length - 2}ch`;
					text3.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
			},
			START_TIME_HIDE
		)
		.to(
			text4,
			{
				onStart: () => {
					text4.style.display = "inline-block";
					text4.style.width = `${text4.textContent.length - 2}ch`;
					text4.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
			},
			START_TIME_HIDE
		)
		.to(
			text5,
			{
				onStart: () => {
					text5.style.display = "inline-block";
					text5.style.width = `${text5.textContent.length - 2}ch`;
					text5.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
			},
			START_TIME_HIDE
		)
		// SHOW BOTTOM TEXT ==========================================
		.to(
			text13,
			{
				onStart: () => {
					text13.style.opacity = 1;
				},
				scrambleText: { chars, text: "Based", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			`${DURATION}`
		)
		.to(
			text12,
			{
				onStart: () => {
					text12.style.opacity = 1;
				},
				scrambleText: { chars, text: "Based in", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_BOTTOM_SHOW
		)
		.to(
			text11,
			{
				onStart: () => {
					text11.style.opacity = 1;
				},
				scrambleText: { chars, text: "Based in Montreal", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_BOTTOM_SHOW
		)
		.to(
			text10,
			{
				onStart: () => {
					text10.style.opacity = 1;
				},
				scrambleText: { chars, text: "Based in Montreal", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_BOTTOM_SHOW
		)
		.to(
			text9,
			{
				onStart: () => {
					text9.style.opacity = 1;
				},
				scrambleText: { chars, text: "Based in Montreal, Canada", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_BOTTOM_SHOW
		)
		.to(
			text8,
			{
				onStart: () => {
					text8.style.opacity = 1;
				},
				scrambleText: { chars, text: "Based in Montreal, Canada", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_BOTTOM_SHOW
		)
		.to(
			text7,
			{
				onStart: () => {
					text7.style.opacity = 1;
				},
				scrambleText: { chars, text: "Based in Montreal, Canada", speed: SPEED },
				duration: DURATION,
				ease: EASE_SHOW,
			},
			START_TIME_BOTTOM_SHOW
		)
		// HIDE BOTTOM TEXT ==========================================
		.to(
			text13,
			{
				onStart: () => {
					text13.style.display = "inline-block";
					text13.style.width = `${text13.textContent.length - 2}ch`;
					text13.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION,
				ease: EASE_HIDE,
				x: "2rem",
			},
			`${DURATION * 3}`
		)
		.to(
			text12,
			{
				onStart: () => {
					text12.style.display = "inline-block";
					text12.style.width = `${text12.textContent.length - 2}ch`;
					text12.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
			},
			START_TIME_HIDE
		)
		.to(
			text11,
			{
				onStart: () => {
					text11.style.display = "inline-block";
					text11.style.width = `${text11.textContent.length - 2}ch`;
					text11.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
			},
			START_TIME_HIDE
		)
		.to(
			text10,
			{
				onStart: () => {
					text10.style.display = "inline-block";
					text10.style.width = `${text10.textContent.length - 2}ch`;
					text10.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
			},
			START_TIME_HIDE
		)
		.to(
			text9,
			{
				onStart: () => {
					text9.style.display = "inline-block";
					text9.style.width = `${text9.textContent.length - 2}ch`;
					text9.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
			},
			START_TIME_HIDE
		)
		.to(
			text8,
			{
				onStart: () => {
					text8.style.display = "inline-block";
					text8.style.width = `${text8.textContent.length - 2}ch`;
					text8.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
			},
			START_TIME_HIDE
		)
		// HIDE FINAL TEXT ==========================================
		.to(
			text6,
			{
				onStart: () => {
					text6.style.display = "inline-block";
					text6.style.width = `${text6.textContent.length - 2}ch`;
					text6.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
				delay: `${DURATION_HIDE}`,
			},
			START_TIME_HIDE
		)
		.to(
			text7,
			{
				onStart: () => {
					text7.style.display = "inline-block";
					text7.style.width = `${text7.textContent.length - 2}ch`;
					text7.style.textAlign = "right";
				},
				scrambleText: { chars, text: "", speed: SPEED },
				duration: DURATION_HIDE,
				ease: EASE_HIDE,
				x: "2rem",
				delay: `${DURATION / 1.5}`,
			},
			START_TIME_HIDE
		)
		// HIDE OVERLAY ==========================================
		.to(
			loader,
			{
				onStart: () => {
					document.body.style.overflow = "auto";
				},
				opacity: 0,
				duration: 1,
				ease: "power1.out",

				onComplete: () => {
					loader.remove();
					document.documentElement.style.backgroundColor = "";
				},
			},
			"< -0.5"
		);
}

// ============================================================
//
// ANIMATION - SHORT
function LoaderAnimationShort() {
	console.log("short");

	const loader = document.getElementById("loader");
	if (!loader) return;

	const tl = gsap.timeline({
		onStart: () => {
			document.body.style.overflow = "auto";
		},
		onComplete: () => {
			gsap.to(loader, {
				opacity: 0,
				duration: 0.6,
				ease: "power2.inOut",
				onComplete: () => {
					loader.remove();
					document.documentElement.style.backgroundColor = "";
				},
			});
		},
	});

	const elements = [
		"#el7",
		"#el10",
		"#el5",
		"#el2",
		"#el9",
		"#el6",
		"#el12",
		"#el11",
		"#el4",
		"#el1",
		"#el3",
		"#el8",
		"#el13",
	];

	// symbols
	elements.forEach((el, index) => {
		tl.to(
			el,
			{
				opacity: 0,
				duration: 0.2,
				ease: "steps(1)",
			},
			index * 0.02
		);
	});

	// background
	tl.to(
		loader,
		{
			backgroundColor: "rgba(0, 0, 0, 0)",
			duration: 0.5,
			ease: "easeOut.power3",
		},
		0.15
	);
}

// ============================================================
//
// SESSION STORAGE:
// show long animation for first-time visit, for second and later - show second animation
const KEY = "loaderAnimation";
let animationType = sessionStorage.getItem(KEY);

if (!animationType) {
	animationType = "long";
	sessionStorage.setItem(KEY, "long");
} else {
	animationType = "long";
	sessionStorage.setItem(KEY, "long");
}

// if (!animationType) {
// 	animationType = "long";
// 	sessionStorage.setItem(KEY, "short");
// } else {
// 	animationType = "short";
// 	sessionStorage.setItem(KEY, "short");
// }

function handleLoaderComplete() {
	const elapsed = performance.now() - startTime;
	const remaining = MIN_DISPLAY_TIME - elapsed;

	const runAnimation = animationType === "long" ? LoaderAnimationLong : LoaderAnimationShort;

	if (remaining > 0) {
		setTimeout(runAnimation, remaining);
	} else {
		runAnimation();
	}
}

window.addEventListener("load", handleLoaderComplete);
