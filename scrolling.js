function Navigate(sectionIndex) {
    const sections = ['home', 'links', 'gallery'];
    const targetSection = document.getElementById(sections[sectionIndex]);

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });

    document.querySelectorAll('.section-title').forEach((item, index) => {
        if (index === sectionIndex) {
            item.classList.add('activeLink');
        } else {
            item.classList.remove('activeLink');
        }
    });
}