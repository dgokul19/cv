
export const handleNavbarScroll = (event) => {
    let targetElement = event.target;
    let navElement = document.querySelector('.navigationBar');
    if(targetElement.scrollTop > 60) {
        navElement.classList.add('navBackground');
    } else {
        navElement.classList.remove('navBackground');

    }
}