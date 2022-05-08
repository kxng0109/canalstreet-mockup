'use strict'
const makeVariable = (element, selectorType = 'querySelector', theTarget = document) => {return theTarget[selectorType](`${element}`)};
const container = makeVariable('#container');
const main = makeVariable('#main');
const menu = makeVariable('#menu');
const menuIconBox = makeVariable('#header--menu-icon-box');
const closeMenu = makeVariable('.closeTheMenu');
const openMenu = makeVariable('.openTheMenu');
const menuOptions = makeVariable(".menu--options", 'querySelectorAll');
const menuMoreInfo = makeVariable("#menu--more-info");
const logo = makeVariable('#logo');
const deviceWidth = screen.width;
const verticalPixels = document.documentElement.onscroll = () => document.documentElement.scrollTop;
const fadeInImages = makeVariable('.fade', 'querySelectorAll');

menuIconBox.onclick = () =>{
	getComputedStyle(closeMenu, undefined).getPropertyValue('opacity') == '0' 
	? (closeMenu.style.animation = 'moveRightShow 0.3s linear forwards', 
		openMenu.style.animation = 'moveRightHide 0.3s linear forwards', 
		menu.style.opacity = '1',
		menuOptions.forEach( (element, index) => {
			menuOptions[index].style.animation = `options 0.25s linear 0.${index}s forwards`;
		}), 
		menuMoreInfo.style.animation = `options 0.25s linear 0.4s forwards`, 
		menu.style.display = 'block',
		document.documentElement.style.overflowY = 'hidden',
		logo.style.opacity = '0'
	)
	: (closeMenu.style.animation = 'moveLeftHide 0.3s linear forwards', 
		openMenu.style.animation = 'moveLeftShow 0.3s linear forwards',
		logo.style.opacity = '1',
		menuOptions.forEach( (element, index) => {
			menuOptions[index].style.opacity = '0';
			menuMoreInfo.style.opacity = '0'
		}),
		menu.style.opacity = '0', 
		setTimeout(() => menu.style.display = 'none', 500),
		document.documentElement.style.overflowY = 'auto'
	)
}

let [elementPosition, elementHeight, difference] = [[], [], []];
let imageHeightAndPosition = () =>{
	fadeInImages.forEach( (element, index) =>{
		elementHeight[index] = fadeInImages[index].getBoundingClientRect().height;
		elementPosition[index] = fadeInImages[index].getBoundingClientRect().top;
		difference[index] = elementPosition[index] - elementHeight[index];
	});
	return difference;
}

verticalPixels() >= 20 ? (window.scrollTo(0, 0), setTimeout(() => imageHeightAndPosition(), 1000)) 
: imageHeightAndPosition();

window.onresize = () => imageHeightAndPosition();
window.onscroll = () => {
	if (deviceWidth < 768) {
		if (difference[0] <= verticalPixels() && verticalPixels() < difference[1]){
			fadeInImages[0].style.opacity = '1'
		}
		else if (difference[1] <= verticalPixels() && verticalPixels() < difference[2]){
			fadeInImages[1].style.opacity = '1';
		}
		else if (difference[2] <= verticalPixels() && verticalPixels() < difference[3]){
			fadeInImages[2].style.opacity = '1';
		}
		else if (difference[3] <= verticalPixels()){
			fadeInImages[3].style.opacity = '1';
		}
	}else {
		if (difference[0] <= verticalPixels() && verticalPixels() < difference[1]){
			fadeInImages[0].style.opacity = '1'
		}else if (difference[1] <= verticalPixels()) {
			fadeInImages[1].style.opacity = '1';
			fadeInImages[2].style.opacity = '1';
			fadeInImages[3].style.opacity = '1';
		}
	}
}