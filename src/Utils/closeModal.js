export function closeModal(changeModalStatus, setActiveClass) {
    setActiveClass("");
    setTimeout(() => {
        changeModalStatus();
    }, 500);
}