// HoverShuffle.js
import gsap from "gsap";
import { shuffle } from "./string";

const DURATION = 0.25;
const SHUFFLE_PER_SECOND = 4;

export function createHoverShuffle() {
	// remove common timeline
	const timelines = new WeakMap();

	const onMouseEnter = ({ currentTarget }) => {
		const target = currentTarget;

		// stop prev animation of this element
		if (timelines.has(target)) {
			timelines.get(target).kill();
		}

		// save original html
		if (!target.dataset.originalHtml) {
			target.dataset.originalHtml = target.innerHTML;
		}

		// create new timeline
		const tl = gsap.timeline({
			onComplete: () => {
				target.innerHTML = target.dataset.originalHtml;
			},
		});
		timelines.set(target, tl);

		const shuffleDelay = DURATION / SHUFFLE_PER_SECOND;

		for (let i = 0; i < SHUFFLE_PER_SECOND; i++) {
			tl.add(() => {
				shuffleElementTexts(target, shuffle);
			}, shuffleDelay * i);
		}
	};

	const onMouseLeave = ({ currentTarget }) => {
		if (timelines.has(currentTarget)) {
			timelines.get(currentTarget).kill();
		}
		currentTarget.innerHTML = currentTarget.dataset.originalHtml || currentTarget.innerHTML;
	};

	return { onMouseEnter, onMouseLeave };
}

// shuffle for one element
function shuffleElementTexts(item, shuffleFn) {
	if ((!item.children.length || item.dataset.allowShuffle !== undefined) && item.innerText) {
		const words = item.innerText.replace("\n", " \n ").split(" ");
		for (let i = 0; i < words.length; i++) {
			const chars = Array.from(words[i]);
			words[i] = shuffleFn(chars);
		}
		item.innerText = words.join(" ");
	}
}
