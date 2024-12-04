export const scrollToSectionWithOffset = (id: string, offset: number) => {
    const section = document.getElementById(id);
    if (section) {
        const position = section.offsetTop - offset;
        window.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    }
};
