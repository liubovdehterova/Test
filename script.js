let closeHeader = document.querySelector('.fixed__header__inner__close');
closeHeader.addEventListener('click', () => {
    let headerBlock = document.querySelector('.fixed__header');
    headerBlock.classList.add('hidden');
});
let bgMob = document.querySelector('.burger__mob');
bgMob.addEventListener('click', () => {
    let mobMenu = document.querySelector('.header__navigation__mob');
    if(mobMenu.style.display !== 'block') {
        mobMenu.style.display = 'block'
    } else {
        mobMenu.style.display = 'none'
    }
});