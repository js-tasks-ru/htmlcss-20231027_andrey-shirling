(function() {
    console.log('start');
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        console.log('test');
        modal.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();