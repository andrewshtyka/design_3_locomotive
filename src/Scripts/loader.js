import gsap from "gsap";

const MIN_DISPLAY_TIME = 1200;
const startTime = performance.now();

function playLoaderAnimation() {
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

function handleLoaderComplete() {
	const elapsed = performance.now() - startTime;
	const remaining = MIN_DISPLAY_TIME - elapsed;

	if (remaining > 0) {
		setTimeout(playLoaderAnimation, remaining);
	} else {
		playLoaderAnimation();
	}
}

window.addEventListener("load", handleLoaderComplete);
