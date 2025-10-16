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

	const loader = document.getElementById("loader");
	const textTop = document.getElementById("loader_text_top");
	const textBottom = document.getElementById("loader_text_bottom");
	if (!loader || !textTop || !textBottom) return;
	const textTopElements = Array.from(textTop.children).filter((el) => el.tagName.toLowerCase() !== "br");
	console.log(textTopElements);

	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;\"'<>,.?/~`";
	const textTopTimeline = gsap.timeline({ defaults: { ease: "none" } });

	gsap.set(textTop, {
		ease: "steps(1)",
	});

	// TOP TEXT: appear
	textTopElements.forEach((el, i) => {
		textTopTimeline.from(
			el,
			{
				onStart: () => {
					el.style.opacity = "1";
				},
				scrambleText: { chars },
				duration: 0.25,
			},
			i === 0 ? 0 : "-=0.1"
		);
	});

	textTopElements.forEach((el, i) => {
		textTopTimeline.to(
			el,
			{
				duration: 0.25,
				scrambleText: { chars },
			},
			i === textTopElements.length - 1 ? "+=3" : "-=0.1"
		);
	});
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
