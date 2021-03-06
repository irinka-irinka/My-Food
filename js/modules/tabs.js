function tabs(tabsSelector, tabsContentSelector, tabsParetSelector, activeClass) {
	//Tabs
	let tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParetSelector);

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add("hide");
			item.classList.remove("show", "fade");
		});

		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add("show", "fade");
		tabsContent[i].classList.remove("hide");
		tabs[i].classList.add(activeClass);
		// tabs[i].style.color = 'green';
		// tabs[i].style.fontSize = "34px";
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener("click", function (event) {
		const target = event.target;
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}
export default tabs;