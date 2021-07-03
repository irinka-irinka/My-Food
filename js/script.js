  
	require("es6-promise/auto");
import "nodelist-foreach-polyfill";


import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", function () {
	const modalTimerId = setTimeout(
		() => openModal(".modal", modalTimerId),
		50000,
	);
	tabs(
		".tabheader__item",
		".tabcontent",
		".tabheader__items",
		"tabheader__item_active",
	);
	modal("[data-modal]", ".modal", modalTimerId);
	timer(".timer", "2021-09-31");
	cards();
	calc();
	forms("form", modalTimerId);
	slider({
		container: ".offer__slider",
		nextArrow: ".offer__slider-next",
		prevArrow: ".offer__slider-prev",
		totalCounter: "#total",
		currentCounter: "#current",
		wrapper: ".offer__slider-wrapper",
		field: ".offer__slider-inner",
		slide: ".offer__slide",
	});
});
// //Tabs
// let tabs = document.querySelectorAll(".tabheader__item"),
// 	tabsContent = document.querySelectorAll(".tabcontent"),
// 	tabsParent = document.querySelector(".tabheader__items");

// function hideTabContent() {
// 	tabsContent.forEach(item => {
// 		item.classList.add("hide");
// 		item.classList.remove("show", "fade");
// 	});

// 	tabs.forEach(item => {
// 		item.classList.remove("tabheader__item_active");
// 	});
// }

// function showTabContent(i = 0) {
// 	tabsContent[i].classList.add("show", "fade");
// 	tabsContent[i].classList.remove("hide");
// 	tabs[i].classList.add("tabheader__item_active");
// 	// tabs[i].style.color = 'green';
// 	// tabs[i].style.fontSize = "34px";
// }

// hideTabContent();
// showTabContent();

// tabsParent.addEventListener("click", function (event) {
// 	const target = event.target;
// 	if (target && target.classList.contains("tabheader__item")) {
// 		tabs.forEach((item, i) => {
// 			if (target == item) {
// 				hideTabContent();
// 				showTabContent(i);
// 			}
// 		});
// 	}
// });
//Timer
// const deadLine = "2021-09-31";

// function getTimeRemaining(endtime) {
// 	const t = Date.parse(endtime) - Date.parse(new Date()),
// 		days = Math.floor(t / (1000 * 60 * 60 * 24)),
// 		hours = Math.floor((t / (1000 * 60 * 60)) % 24),
// 		minutes = Math.floor((t / 1000 / 60) % 60),
// 		seconds = Math.floor((t / 1000) % 60);
// 	return {
// 		total: t,
// 		days: days,
// 		hours: hours,
// 		minutes: minutes,
// 		seconds: seconds,
// 	};
// }

// function setClock(selector, endtime) {
// 	const timer = document.querySelector(selector),
// 		days = timer.querySelector("#days"),
// 		hours = timer.querySelector("#hours"),
// 		minutes = timer.querySelector("#minutes"),
// 		seconds = timer.querySelector("#seconds"),
// 		timeInterval = setInterval(updateClock, 1000);

// 	function updateClock() {
// 		const t = getTimeRemaining(endtime);

// 		days.innerHTML = t.days;
// 		hours.innerHTML = t.hours;
// 		minutes.innerHTML = t.minutes;
// 		seconds.innerHTML = t.seconds;

// 		if (t.total <= 0) {
// 			clearInterval(timeInterval);
// 		}
// 	}
// }
// setClock(".timer", deadLine);

//Modal

// const modal = document.querySelector(".modal"),
// 	modalTrigger = document.querySelectorAll("[data-modal]");

// function openModal() {
// 	modal.classList.add("show");
// 	modal.classList.remove("hide");
// 	document.body.style.overflow = "hidden";
// 	clearInterval(modalTimerId);
// }

// modalTrigger.forEach(btn => {
// 	btn.addEventListener("click", openModal);
// });

// function closeModal() {
// 	modal.classList.add("hide");
// 	modal.classList.remove("show");
// 	document.body.style.overflow = "";
// }

// modal.addEventListener("click", e => {
// 	if (e.target === modal || e.target.getAttribute("data-close") == "") {
// 		closeModal();
// 	}
// });

// document.addEventListener("keydown", e => {
// 	if (e.code === "Escape" && modal.classList.contains("show")) {
// 		closeModal();
// 	}
// });

// const modalTimerId = setTimeout(openModal, 50000);

// function showModalByScroll() {
// 	if (
// 		window.pageYOffset + document.documentElement.clientHeight >=
// 		document.documentElement.scrollHeight
// 	) {
// 		openModal();
// 		window.removeEventListener("scroll", showModalByScroll);
// 	}
// }

// window.addEventListener("scroll", showModalByScroll);

// Используем классы для создание карточек меню

// class MenuCard {
// 	constructor(src, alt, title, descr, price, parentSelector, ...classes) {
// 		this.src = src;
// 		this.alt = alt;
// 		this.title = title;
// 		this.descr = descr;
// 		this.price = price;
// 		this.classes = classes;
// 		this.parent = document.querySelector(parentSelector);
// 		this.transfer = 27;
// 		this.changeToUAN();
// 	}
// 	changeToUAN() {
// 		this.price = this.price * this.transfer;
// 	}
// 	render() {
// 		const element = document.createElement("div");

// 		if (this.classes.length === 0) {
// 			this.element = "menu__item";
// 			element.classList.add(this.element);
// 		} else {
// 			this.classes.forEach(className => element.classList.add(className));
// 		}

// 		element.innerHTML = `
//                   <img src=${this.src} alt=${this.alt}>
//                   <h3 class="menu__item-subtitle">${this.title}</h3>
//                   <div class="menu__item-descr">${this.descr}</div>
//                   <div class="menu__item-divider"></div>
//                   <div class="menu__item-price">
//                       <div class="menu__item-cost">Цена:</div>
//                       <div class="menu__item-total"><span>${this.price}</span>грн/день</div>
//                   </div>`;
// 		this.parent.append(element);
// 	}
// }
// // const div = new MenuCard();
// // div.render();

// const getResourse = async url => {
// 	const res = await fetch(url);

// 	if (!res.ok) {
// 		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
// 	}

// 	return await res.json();
// };

// //Создание (динамическое) при помощи классов элементов на странице 1-способ

// // getResourse("http://localhost:3000/menu").then(data => {
// // 	data.forEach(({ img, altimg, title, descr, price }) => {
// // 		new MenuCard(
// // 			img,
// // 			altimg,
// // 			title,
// // 			descr,
// // 			price,
// // 			".menu .container",
// // 		).render();
// // 	});
// // });

// //axios;

// axios.get("http://localhost:3000/menu").then(data => {
// 	data.data.forEach(({ img, altimg, title, descr, price }) => {
// 		new MenuCard(
// 			img,
// 			altimg,
// 			title,
// 			descr,
// 			price,
// 			".menu .container",
// 		).render();
// 	});
// });

//Создание (динамическое) элементов на странице 2-способ (без классов)

// getResourse("http://localhost:3000/menu").then(data => createCard(data));

// function createCard(data) {
// 	data.forEach(({ img, altimg, title, descr, price}) => {
// 		const element = document.createElement('div');
// 		price = price * 27;
// 		element.classList.add('menu__item');

// 		element.innerHTML = `<img src=${img} alt=${altimg}>
//                   <h3 class="menu__item-subtitle">${title}</h3>
//                   <div class="menu__item-descr">${descr}</div>
//                   <div class="menu__item-divider"></div>
//                   <div class="menu__item-price">
//                       <div class="menu__item-cost">Цена:</div>
//                       <div class="menu__item-total"><span>${price}</span>грн/день</div>
//                   </div>`;
// 		document.querySelector('.menu .container').append(element);
// 	});
// }

// Forms

// const forms = document.querySelectorAll("form");

// const massage = {
// 	loading: "img/form/spinner.svg",
// 	success: " Спасибо! Скоро мы с вами свяжемся",
// 	failure: "Что - то пошло не так ...",
// };

// forms.forEach(item => {
// 	bindPostData(item);
// });

// const postData = async (url, data) => {
// 	const res = await fetch(url, {
// 		method: "POST",
// 		headers: {
// 			"Content-type": "application/json",
// 		},
// 		body: data,
// 	});

// 	return await res.json();
// };

// function bindPostData(form) {
// 	form.addEventListener("submit", e => {
// 		e.preventDefault();

// 		const statusMassage = document.createElement("img");

// 		statusMassage.src = massage.loading;
// 		statusMassage.style.cssText = `
// 		display: block;
// 		margin: 0 auto;
// 		`;

// 		form.insertAdjacentElement("afterend", statusMassage);
// 		// const request = new XMLHttpRequest();
// 		// request.open("POST", "server.php");

// 		//Для json
// 		// request.setRequestHeader("Content-type", "application/json");

// 		// обязателен атрибут 'name' для input, form
// 		const formData = new FormData(form);
// 		//Транформация formData в JSON формат
// 		// const object = {};
// 		// formData.forEach(function (value, key) {
// 		// 	object[key] = value;
// 		// });

// 		// request.send(json);

// 		const json = JSON.stringify(Object.fromEntries(formData.entries()));

// 		postData("http://localhost:3000/requests", json)
// 			.then(data => {
// 				console.log(data);
// 				showThankModal(massage.success);

// 				statusMassage.remove();
// 			})
// 			.catch(() => {
// 				showThankModal(massage.failure);
// 			})
// 			.finally(() => {
// 				form.reset();
// 			});
// 		//Обработка запроса
// 		// request.addEventListener("load", () => {
// 		// 	if (request.status === 200) {
// 		// 		console.log(request.response);
// 		// 		showThankModal(massage.success);
// 		// 		form.reset();
// 		// 		statusMassage.remove();
// 		// 	} else {
// 		// 		showThankModal(massage.failure);
// 		// 	}
// 		// });
// 	});
// }

//Второе модальное окно

// function showThankModal(massage) {
// 	const prewModalDialog = document.querySelector(".modal__dialog");

// 	prewModalDialog.classList.add("hide");
// 	openModal();

// 	const thanksModal = document.createElement("div");
// 	thanksModal.classList.add("modal__dialog");
// 	thanksModal.innerHTML = `
// 	<div class="modal__content">
// 	<div class="modal__close" data-close>×</div>
// 	<div class=	"modal__title">${massage}</div>
// 	</div>
// 	`;

// 	document.querySelector(".modal").append(thanksModal);
// 	setTimeout(() => {
// 		thanksModal.remove();
// 		prewModalDialog.classList.add("show");
// 		prewModalDialog.classList.remove("hide");
// 		closeModal();
// 	}, 4000);
// }

// // fetch("https://jsonplaceholder.typicode.com/posts", {
// // 	method: "POST",
// // 	body: JSON.stringify({
// // 		name: "Alex",
// // 	}),
// // 	headers: {
// // 		"Content-type": "application/json",
// // 	},
// // })
// // 	.then(response => response.json())
// // 	.then(json => console.log(json));

// fetch("http://localhost:3000/menu")
// 	.then(data => data.json())
// 	.then(res => console.log(res));

//Slider

// const slides = document.querySelectorAll(".offer__slide"),
// 	slider = document.querySelector(".offer__slider"),
// 	prev = document.querySelector(".offer__slider-prev"),
// 	next = document.querySelector(".offer__slider-next"),
// 	total = document.querySelector("#total"),
// 	current = document.querySelector("#current"),
// 	slidesWrapper = document.querySelector(".offer__slider-wrapper"),
// 	slidesField = document.querySelector(".offer__slider-inner"),
// 	width = window.getComputedStyle(slidesWrapper).width;

// let slideIndex = 1;

// let offset = 0;

// //Второй вариант

// if (slides.length < 10) {
// 	total.textContent = `0${slides.length}`;
// 	current.textContent = `0${slideIndex}`;
// } else {
// 	total.textContent = slides.length;
// 	current.textContent = slideIndex;
// }

// slidesField.style.width = 100 * slides.length + "%";
// slidesField.style.display = "flex";
// slidesField.style.transition = "0.5 all";

// slidesWrapper.style.overflow = "hidden";

// slides.forEach(slide => {
// 	slide.style.width = width;
// });

// slider.style.position = "relative";

// const indicators = document.createElement("ol"),
// 	dots = [];

// indicators.classList.add("carousel-indicators");
// indicators.style.cssText = `
//    position: absolute;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 15;
//   display: flex;
//   justify-content: center;
//   margin-right: 15%;
//   margin-left: 15%;
//   list-style: none;
// 	`;
// slider.append(indicators);

// for (let i = 0; i < slides.length; i++) {
// 	const dot = document.createElement("li");
// 	dot.setAttribute("data-slide-to", i + 1);
// 	dot.style.cssText = `
// 	     box-sizing: content-box;
//   flex: 0 1 auto;
//   width: 30px;
//   height: 6px;
//   margin-right: 3px;
//   margin-left: 3px;
//   cursor: pointer;
//   background-color: #fff;
//   background-clip: padding-box;
//   border-top: 10px solid transparent;
//   border-bottom: 10px solid transparent;
//   opacity: .5;
//   transition: opacity .6s ease;
// 	 `;

// 	if (i == 0) {
// 		dot.style.opacity = 1;
// 	}
// 	indicators.append(dot);
// 	dots.push(dot);
// }

// function dotsTransform() {
// 	dots.forEach(dot => (dot.style.opacity = ".5"));
// 	dots[slideIndex - 1].style.opacity = 1;
// }

// function deleteNotDigits(str) {
// 	return +str.replace(/\D/g, "");
// }

// next.addEventListener("click", () => {
// 	if (offset === deleteNotDigits(width) * (slides.length - 1)) {
// 		offset = 0;
// 	} else {
// 		offset += deleteNotDigits(width);
// 	}
// 	slidesField.style.transform = `translateX(-${offset}px)`;

// 	if (slideIndex == slides.length) {
// 		slideIndex = 1;
// 	} else {
// 		slideIndex++;
// 	}

// 	if (slides.length < 10) {
// 		current.textContent = `0${slideIndex}`;
// 	} else {
// 		current.textContent = slideIndex;
// 	}
// 	dotsTransform(dots);
// 	// dots.forEach(dot => (dot.style.opacity = ".5"));
// 	// dots[slideIndex - 1].style.opacity = 1;
// });

// prev.addEventListener("click", () => {
// 	if (offset == 0) {
// 		offset = deleteNotDigits(width) * (slides.length - 1);
// 	} else {
// 		offset -= deleteNotDigits(width);
// 	}

// 	slidesField.style.transform = `translateX(-${offset}px)`;

// 	if (slideIndex == 1) {
// 		slideIndex = slides.length;
// 	} else {
// 		slideIndex--;
// 	}

// 	if (slides.length < 10) {
// 		current.textContent = `0${slideIndex}`;
// 	} else {
// 		current.textContent = slideIndex;
// 	}
// 	dotsTransform(dots);
// 	// dots.forEach(dot => (dot.style.opacity = ".5"));
// 	//  dots[slideIndex - 1].style.opacity = 1;
// });
// dots.forEach(dot => {
// 	dot.addEventListener("click", e => {
// 		const slideTo = e.target.getAttribute("data-slide-to");

// 		slideIndex = slideTo;
// 		offset = deleteNotDigits(width) * (slideTo - 1);

// 		slidesField.style.transform = `translateX(-${offset}px)`;

// 		if (slides.length < 10) {
// 			current.textContent = `0${slideIndex}`;
// 		} else {
// 			current.textContent = slideIndex;
// 		}
// 		dotsTransform(dots);
// 		// dots.forEach(dot => (dot.style.opacity = ".5"));
// 		// dots[slideIndex - 1].style.opacity = 1;
// 	});
// });

//Первый вариант
// 	showSlides(slideIndex);
// 	if (slides.length < 10) {
// 		total.textContent = `0${slides.length}`;
// 	}
// 	else {
// 		total.textContent = slides.length;
// 	}

// 	function showSlides(n) {
// 		if (n > slides.length) {
// 			slideIndex = 1;
// 		}

// 		if (n < 1) {
// 			slideIndex = slides.length;
// 		}

// 		slides.forEach(item => item.style.display = "none");
// 		slides[slideIndex - 1].style.display = "block";

// 		if (slides.length < 10) {
// 			current.textContent = `0${slideIndex}`;
// 		} else {
// 			current.textContent = slideIndex;
// 		}

// 	}

// 		function plusSlides(n) {
// 	 showSlides(slideIndex += n);
//  }

// 		prev.addEventListener("click", () => {
// 			plusSlides(-1);
// 		});

// 	  next.addEventListener("click", () => {
// 			plusSlides(1);
// 		});

//Calculator

// 	const result = document.querySelector(".calculating__result span");

// 	let sex,
// 		height,
// 		weight,
// 		age,
// 		ratio;

// if (localStorage.getItem("ratio")) {
// 	  ratio = localStorage.getItem("ratio");
// } else {
// 	ratio = 1.375;
// 	localStorage.setItem('ratio', 1.375);
// }

// 	if (localStorage.getItem("sex")) {
// 		sex = localStorage.getItem("sex");
// 	} else {
// 		sex = "female";
// 		localStorage.setItem("sex", "female");
// 	}

// 	function initLocalSettings(selector, activeClass) {
// 		const elements = document.querySelectorAll(selector);
// 		elements.forEach(elem => {
// 			elem.classList.remove(activeClass);

// 			if (elem.getAttribute("id") === localStorage.getItem("sex")) {
// 				elem.classList.add(activeClass);
// 			}
// 			if (elem.getAttribute('data-ratio') === localStorage.getItem("ratio")) {
// 				elem.classList.add(activeClass);
// 			}
// 		});

// }

// 	initLocalSettings("#gender div", "calculating__choose-item_active");
// 	initLocalSettings(
// 		".calculating__choose_big div",
// 		"calculating__choose-item_active",
// 	);

// 	function calcTotal() {
// 		if (!sex || !height || !weight || !age || !ratio) {
// 			result.textContent = "_____";
// 			return;
// 		}
// 		if (sex === "female") {
// 			result.textContent = Math.round(
// 				(447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio,
// 			);
// 		} else {
// 			result.textContent = Math.round(
// 				(88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio,
// 			);
// 		}
// 	}

// 	calcTotal();

// 	function getStaticInformation(selector, activeClass) {
// 		const elements = document.querySelectorAll(selector);

// 		elements.forEach(elem => {
// 			elem.addEventListener("click", (e) => {
// 				if (e.target.getAttribute("data-ratio")) {
// 					ratio = +e.target.getAttribute("data-ratio");
// 					localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
// 				} else {
// 					sex = e.target.getAttribute("id");
// 					localStorage.setItem("sex", e.target.getAttribute("id"));
// 				}

// 				elements.forEach(elem => {
// 					elem.classList.remove(activeClass);
// 				});

// 				e.target.classList.add(activeClass);

// 				calcTotal();
// 			});
// 		});
// 	}

// 	getStaticInformation("#gender div", "calculating__choose-item_active");
// 	getStaticInformation(
// 		".calculating__choose_big div",
// 		"calculating__choose-item_active",
// 	);

// 	function getDynamicInformation(selector) {
// 		const input = document.querySelector(selector);

// 		input.addEventListener("input", () => {

// 			if (input.value.match(/\D/g)) {
// 				input.style.border = '1px dashed red';
// 			} else {
// 				input.style.border = 'none';

// }

// 			switch (input.getAttribute("id")) {
// 				case "height":
// 					height = +input.value;
// 					break;
// 				case "weight":
// 					weight = +input.value;
// 					break;
// 				case "age":
// 					age = +input.value;
// 					break;
// 			}

// 			calcTotal();
// 		});
// 	}

// 	getDynamicInformation("#height");
// 	getDynamicInformation("#weight");
// 	getDynamicInformation("#age");
