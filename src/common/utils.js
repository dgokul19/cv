
export const handleNavbarScroll = (event) => {
    let targetElement = event.target;
    let navElement = document.querySelector('.navigationBar');
    if(targetElement.scrollTop > 60) {
        navElement.classList.add('navBackground');
    } else {
        navElement.classList.remove('navBackground');

    }
};

export const formatBlogDate = (date = new Date()) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// transistion Routerto the transform style property
export const mapStyles = (styles) => {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
};



