const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove('open');
        } else {
            document.querySelectorAll('.accordion-content').forEach(el => {
                el.style.maxHeight = null;
                el.classList.remove('open');
            });

            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('open');
        }
    });
});
