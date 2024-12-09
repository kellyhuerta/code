// Contact form behavior
document
	.getElementById('contact-form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const message = document.getElementById('message').value;

		if (!name || !email || !message) {
			alert('Please fill out all fields.');
			return;
		}

		alert(`Thank you, ${name}! Your message has been sent successfully!`);

		// Submit the form after success message is shown
		this.submit();
	});


document.addEventListener('scroll', () => {
	lastKnownScrollPosition = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(() => {
			handleScrollHighlight(lastKnownScrollPosition);
			ticking = false;
		});
		ticking = true;
	}
});

function handleScrollHighlight(scrollPosition) {
	document.querySelectorAll('section').forEach((section) => {
		const sectionTop = section.offsetTop - 50;
		const sectionHeight = section.offsetHeight;
		const id = section.getAttribute('id');

		if (
			scrollPosition >= sectionTop &&
			scrollPosition < sectionTop + sectionHeight
		) {
			// Only update if the current link is not already active
			const activeLink = document.querySelector(`nav a[href="#${id}"]`);
			if (!activeLink.classList.contains('active')) {
				document
					.querySelectorAll('nav a')
					.forEach((link) => link.classList.remove('active'));
				activeLink.classList.add('active');
			}
		}
	});
}

// Smooth scrolling
document.querySelectorAll('nav a').forEach((link) => {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		const targetSection = document.querySelector(this.getAttribute('href'));

		if (targetSection) {
			const offset = 50;
			const topPosition = targetSection.offsetTop - offset;

			window.scrollTo({
				top: topPosition,
				behavior: 'smooth',
			});
		}
	});
});
