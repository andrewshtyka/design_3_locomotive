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
