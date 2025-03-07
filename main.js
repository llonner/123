const sliderTabs = document.querySelectorAll('.tab')
const sliderIndicator = document.querySelector('.indicator')
const toggleBtn = document.querySelector('.nav-button')
const toggleBtnIcon = document.querySelector('.nav-button i')
const NavbarMenu = document.querySelector('.nav-menu')

toggleBtn.onclick = function () {
	NavbarMenu.classList.toggle('open')
	const isOpen = NavbarMenu.classList.contains('open')

	toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

const updateIndicator = (tab, index) => {
	sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`
	sliderIndicator.style.width = `${tab.getBoundClientRect().width}px`
}

const swiper = new Swiper('.main', {
	effect: 'fade',
	speed: 1300,
	// autoplay: { delay: 4000 },
	navigation: {
		prevEl: '#slider-prev',
		nextEl: '#slider-next',
	},
	on: {
		slideChange: () => {
			const currentTabIndex = [...sliderTabs].indexOf(
				sliderTabs[swiper.activeIndex]
			)
			updateIndicator(sliderTabs[swiper.activeIndex], currentTabIndex)
		},
	},
})

sliderTabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		swiper.slideTo(index)
		updateIndicator(tab, index)
	})
})

updateIndicator(sliderTabs[0], 0)
window.addEventListener('resize', () =>
	updateIndicator(sliderTabs[swiper.activeIndex], 0)
)
