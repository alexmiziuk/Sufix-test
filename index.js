document.addEventListener('DOMContentLoaded', () => {
	const hamburgerBtn = document.querySelector('.hamburger-button');
	const mobileSidebar = document.getElementById('mobile-sidebar');
	const closeSidebarBtn = document.getElementById('close-sidebar-btn');
	const mobileSidebarItems = document.querySelectorAll('.mobile-sidebar__nav-item');
	const footerMobileNavItems = document.querySelectorAll('.footer-mobile-nav__item');
	const desktopNavItems = document.querySelectorAll('.desktop-sidebar__nav-item');
	const header = document.querySelector(".header");
	const main = document.querySelector(".main");

	function toggleActive(clickedItem, items, activeItemClass, activeLinkClass, activeIconClass) {

		items.forEach(item => {
			item.classList.remove(activeItemClass);
			item.querySelector('a')?.classList.remove(activeLinkClass);
			item.querySelector('.footer-mobile-nav__icon')?.classList.remove(activeIconClass);
			item.querySelector('.desktop-sidebar__icon')?.classList.remove(activeIconClass);
		});

		clickedItem.classList.add(activeItemClass);
		clickedItem.querySelector('a')?.classList.add(activeLinkClass);
		clickedItem.querySelector('.footer-mobile-nav__icon')?.classList.add(activeIconClass);
		clickedItem.querySelector('.desktop-sidebar__icon')?.classList.add(activeIconClass);
	}

	hamburgerBtn.addEventListener('click', () => {
		mobileSidebar.classList.add('mobile-sidebar--open');
		document.body.classList.add('overflow-hidden');
	});

	closeSidebarBtn.addEventListener('click', () => {
		mobileSidebar.classList.remove('mobile-sidebar--open');
		document.body.classList.remove('overflow-hidden');
	});

	mobileSidebarItems.forEach(item => {
		item.addEventListener('click', () => {
			toggleActive(item, mobileSidebarItems, 'mobile-sidebar__nav-item--active', 'mobile-sidebar__link--active');
			mobileSidebar.classList.remove('mobile-sidebar--open');
			document.body.classList.remove('overflow-hidden');
		});
	});

	footerMobileNavItems.forEach(item => {
		item.addEventListener('click', () => {
			toggleActive(item, footerMobileNavItems, 'footer-mobile-nav__item--active', 'footer-mobile-nav__link--active', 'footer-mobile-nav__icon--active');
		});
	});

	desktopNavItems.forEach(item => {
		item.addEventListener('click', () => {
			toggleActive(item, desktopNavItems, 'desktop-sidebar__nav-item--active', 'desktop-sidebar__nav-link--active', 'desktop-sidebar__icon--active');
		});
	});

	function updateOffsets() {
		if (!header) return;
		const headerHeight = header.offsetHeight;

		if (main) {
			main.style.marginTop = headerHeight + "px";
		}

		if (mobileSidebar) {
			mobileSidebar.style.top = headerHeight + "px";
		}
	}

	updateOffsets();

	window.addEventListener("resize", updateOffsets);

	const observer = new ResizeObserver(updateOffsets);
	if (header) observer.observe(header);
});
