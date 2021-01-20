new fullpage('#fullpage', {
	autoScrolling: true,
	navigation: true,
	onLeave: (origin, destination, direction) => {
		const section = destination.item;
		const content = section.querySelectorAll('.section__content');
		const tl = new TimelineMax({ delay: 0.5 });
		tl.fromTo(content, 0.5, { y: '100', opacity: 0 }, { y: 0, opacity: 1 });
	},
});
