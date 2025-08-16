document.addEventListener('DOMContentLoaded', () => {
    const appIcons = document.querySelectorAll('.app-icon');

    appIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const appName = icon.getAttribute('data-app');
            alert(`Hai aperto: ${appName}`);
        });
    });
});
