import { closeModal, openModal } from './modal';
import { postData } from '../services/services';

function forms(formSelector, modalTimerId) {

	const forms = document.querySelectorAll(formSelector);

	const message = {
		loading: "img/form/spinner.svg",
		success: " Спасибо! Скоро мы с вами свяжемся",
		failure: "Что - то пошло не так ...",
	};

	forms.forEach(item => {
		bindPostData(item);
	});

	function bindPostData(form) {
		form.addEventListener("submit", e => {
			e.preventDefault();

			const statusMessage = document.createElement("img");

			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
			display: block;
			margin: 0 auto;
			`;

			form.insertAdjacentElement("afterend", statusMessage);
			// const request = new XMLHttpRequest();
			// request.open("POST", "server.php");

			//Для json
			// request.setRequestHeader("Content-type", "application/json");

			// обязателен атрибут 'name' для input, form
			const formData = new FormData(form);
			//Транформация formData в JSON формат
			// const object = {};
			// formData.forEach(function (value, key) {
			// 	object[key] = value;
			// });

			// request.send(json);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData("http://localhost:3000/requests", json)
				.then(data => {
					console.log(data);
					showThankModal(message.success);

					statusMessage.remove();
				})
				.catch(() => {
					showThankModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});
		});
	}

	function showThankModal(message) {
		const prewModalDialog = document.querySelector(".modal__dialog");

		prewModalDialog.classList.add("hide");
		openModal(".modal", modalTimerId);

		const thanksModal = document.createElement("div");
		thanksModal.classList.add("modal__dialog");
		thanksModal.innerHTML = `
		<div class="modal__content">
		<div class="modal__close" data-close>×</div>
		<div class=	"modal__title">${message}</div>
		</div>
		`;

		document.querySelector(".modal").append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prewModalDialog.classList.add("show");
			prewModalDialog.classList.remove("hide");
			closeModal(".modal");
		}, 4000);
	}
}

export default forms;