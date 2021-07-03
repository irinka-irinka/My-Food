function openModal(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);
	
	modal.classList.add("show");
	modal.classList.remove("hide");
	document.body.style.overflow = "hidden";

console.log (modalTimerId);
	if (modalTimerId) {
	clearInterval(modalTimerId);	
	}
		
}

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add("hide");
	modal.classList.remove("show");
	document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector),
		modalTrigger = document.querySelectorAll(triggerSelector);

	modalTrigger.forEach(btn => {
		btn.addEventListener("click", () => openModal(modalSelector, modalTimerId));
	});

	modal.addEventListener("click", e => {
		if (e.target === modal || e.target.getAttribute("data-close") == "") {
			closeModal(modalSelector);
		}
	});

	document.addEventListener("keydown", e => {
		if (e.code === "Escape" && modal.classList.contains("show")) {
			closeModal(modalSelector);
		}
	});

	

	function showModalByScroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight
		) {
			openModal(modalSelector, modalTimerId);
			window.removeEventListener("scroll", showModalByScroll);
		}
	}

	window.addEventListener("scroll", showModalByScroll);

	// fetch("https://jsonplaceholder.typicode.com/posts", {
	// 	method: "POST",
	// 	body: JSON.stringify({
	// 		name: "Alex",
	// 	}),
	// 	headers: {
	// 		"Content-type": "application/json",
	// 	},
	// })
	// 	.then(response => response.json())
	// 	.then(json => console.log(json));

	// fetch("http://localhost:3000/menu")
	// 	.then(data => data.json())
	// 	.then(res => console.log(res));
}

export default modal;
export { closeModal };
export { openModal };