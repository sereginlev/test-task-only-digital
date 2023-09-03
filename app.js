const buttonStartWidth = getComputedStyle(document.documentElement).getPropertyValue('--width');
const borderRadius = getComputedStyle(document.documentElement).getPropertyValue('--border-radius');
const opacity = getComputedStyle(document.documentElement).getPropertyValue('--opacity');
const blue = getComputedStyle(document.documentElement).getPropertyValue('--blue');
const green = getComputedStyle(document.documentElement).getPropertyValue('--green');

const buttons = document.querySelectorAll('.button');

function handleClick(e) {
	buttons.forEach(button => {
		const text = button.querySelector('.text');
		const span = button.querySelector('.span');

		const buttonWidth = Number(window.getComputedStyle(button).width.replace('px', ''));
		const backgroundColor = window.getComputedStyle(button).backgroundColor;

		if (e.target.closest('.button') === button && !button.classList.contains('button-active')) {
			button.classList.add('button-active');
			button.style.width = `${buttonWidth + text.scrollWidth}px`;
			button.style.backgroundColor = backgroundColor.replace(opacity, 1);
	
			span.classList.add('span-active');
			span.style.backgroundColor = backgroundColor.replace(opacity, 1);
	
			text.style.right = '0';
			text.style.opacity = '1';
		} else if (button.classList.contains('button-active')) {
			const rgb = `rgb(${blue})`;

			button.classList.remove('button-active');
			button.style.width = buttonStartWidth;
			button.style.borderRadius = borderRadius;
			button.style.backgroundColor = backgroundColor === rgb ? `rgba(${blue}, ${opacity})` : `rgba(${green}, ${opacity})`;

			span.classList.remove('span-active');
			span.style.backgroundColor = backgroundColor === rgb ? `rgba(${blue}, ${opacity})` : `rgba(${green}, ${opacity})`;

			text.style.right = '100%';
			text.style.opacity = '0';
		} 
	})
}

document.addEventListener('click',handleClick);