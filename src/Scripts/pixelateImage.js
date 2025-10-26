// ==========================================================================================
//
// depixelization on hover
export async function animDepixelate($el) {
	if (!$el.complete) await new Promise((r) => ($el.onload = r));

	const $parent = $el.parentNode;
	$parent.classList.add("-pixelated");

	const prevCanvas = $parent.querySelector("canvas");
	if (prevCanvas) prevCanvas.remove();

	const canvas = document.createElement("canvas");
	Object.assign(canvas.style, {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 10,
		pointerEvents: "none",
	});
	$parent.appendChild(canvas);

	const ctx = canvas.getContext("2d", { willReadFrequently: true });

	function updateSize() {
		const maxWidth = window.innerWidth * 0.12;
		let w = Math.floor($el.naturalWidth);
		let h = Math.floor($el.naturalHeight);

		if (w > maxWidth) {
			h = Math.floor(maxWidth * (h / w));
			w = Math.floor(maxWidth);
		}
		canvas.width = w;
		canvas.height = h;
		return { w, h };
	}

	let { w, h } = updateSize();
	const resizeHandler = () => ({ w, h } = updateSize());
	window.addEventListener("resize", resizeHandler);

	const pixelate = async (sample_amount) => {
		if (!canvas.parentNode) return;

		const sample_size = Math.round(w / sample_amount);
		ctx.drawImage($el, 0, 0, w, h);
		const pixelArr = ctx.getImageData(0, 0, w, h).data;

		for (let y = 0; y < h; y += sample_size) {
			for (let x = 0; x < w; x += sample_size) {
				const p = (x + y * w) * 4;
				ctx.fillStyle = `rgb(${pixelArr[p]},${pixelArr[p + 1]},${pixelArr[p + 2]})`;
				ctx.fillRect(x, y, sample_size, sample_size);
			}
		}
	};

	const delay = (ms) => new Promise((r) => setTimeout(r, ms));
	for (const step of [8, 16, 32, 48, 96, 128]) {
		ctx.clearRect(0, 0, w, h);
		await pixelate(step);
		await delay(100);
	}

	window.removeEventListener("resize", resizeHandler);
	canvas.remove();
	$parent.classList.remove("-pixelated");
}

// ==========================================================================================
//
// depixelization on scroll
export function animDepixelateOnScroll($el) {
	if (!$el || !$el.complete) {
		$el.onload = () => animDepixelateOnScroll($el);
		return;
	}

	const $parent = $el.parentNode;
	const canvas = $parent.querySelector("canvas");
	if (!canvas) return;

	const ctx = canvas.getContext("2d", { willReadFrequently: true });

	function updateSize() {
		const rect = $el.getBoundingClientRect();
		canvas.width = rect.width;
		canvas.height = rect.height;
		return { w: canvas.width, h: canvas.height };
	}

	const PIXEL_STEPS = [8, 16, 32, 48, 96, 128];
	const INITIAL_PIXEL = 8;
	const DELAY_MS = 100;

	let depixelized = false; // контроль для одного виконання

	function pixelate(sample) {
		const { w, h } = updateSize();
		ctx.drawImage($el, 0, 0, w, h);
		const data = ctx.getImageData(0, 0, w, h).data;
		const step = Math.round(w / sample);

		for (let y = 0; y < h; y += step) {
			for (let x = 0; x < w; x += step) {
				const i = (x + y * w) * 4;
				ctx.fillStyle = `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`;
				ctx.fillRect(x, y, step, step);
			}
		}
	}

	// пікселізація одразу при завантаженні
	pixelate(INITIAL_PIXEL);

	async function depixelize() {
		if (depixelized) return;
		depixelized = true; // після першого запуску більше не буде
		canvas.style.pointerEvents = "auto";

		for (const step of PIXEL_STEPS) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			pixelate(step);
			await new Promise((r) => setTimeout(r, DELAY_MS));
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		canvas.style.pointerEvents = "none";
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !depixelized) depixelize();
			});
		},
		{ threshold: [0.4] }
	);

	observer.observe($el);

	window.addEventListener("resize", () => {
		if (!depixelized) pixelate(INITIAL_PIXEL);
		updateSize();
	});
}