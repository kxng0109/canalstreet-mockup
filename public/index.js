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
const deviceWidth = screen.width
const verticalPixels = document.documentElement.onscroll = () => document.documentElement.scrollTop;
const fadeInImages = makeVariable('.fade', 'querySelectorAll');
let documentSize = parseInt(getComputedStyle(document.documentElement, undefined).getPropertyValue('height'));

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
		setTimeout(() => menu.style.display = 'none', 300),
		document.documentElement.style.overflowY = 'auto'
	)
}

const calcWindowsHeight = value =>{
	return (value / 100) * documentSize;
}

const imagesChecker = (index, firstValue, secondValue) =>{
	return verticalPixels() >= calcWindowsHeight(firstValue)  && verticalPixels() < calcWindowsHeight(secondValue) &&  getComputedStyle(fadeInImages[index], undefined).getPropertyValue('opacity') == 0
}

// Didn't use window.onscroll because it lags the clients side. Interval seems much better
switch (true) {
	case deviceWidth >= 768:
	break;
	default:				
		setInterval(() =>{
			imagesChecker(0, 3.4, 9) ? fadeInImages[0].style.opacity = '1'
			: imagesChecker(1, 16, 23) ? fadeInImages[1].style.opacity = '1'
			: imagesChecker(2, 28, 35) ? fadeInImages[2].style.opacity = '1'
			: imagesChecker(3, 38, 50) ? fadeInImages[3].style.opacity = '1'
			: false
		}, 250)
	break;
}
// window.onscroll = () => console.log(verticalPixels())

window.onresize = () => {return documentSize = parseInt(getComputedStyle(document.documentElement, undefined).getPropertyValue('height'))};