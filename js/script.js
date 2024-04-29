const burger = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-nav-close');
const btnArray = document.querySelectorAll('.customers-container__button');
const menu = document.querySelector('.sidebar');
const input = document.getElementById('input');
const search = document.getElementById('search');
const userBlock = document.querySelectorAll('.user-block');
const mobUserFilter = document.querySelectorAll('.mv-customers__card');



burger.addEventListener('click', () => {
    menu.classList.add('sidebar--active');
});


closeBtn.addEventListener('click', () => {
    menu.classList.remove('sidebar--active')
});


btnArray.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('customers-container__button--inactive')) {
            btn.classList.remove('customers-container__button--inactive')
            btn.textContent = 'Active'
        } else {
            btn.classList.add('customers-container__button--inactive')
            btn.textContent = 'Inactive'
        }
    })
})


search.addEventListener('click', () => {
    

    for (let i = 0; i < userBlock.length; i++) {
        if(userBlock[i].classList.contains('user-block--active')) {
            userBlock[i].classList.remove('user-block--active');
        }  if (userBlock[i].children[0].children[0].textContent !== input.value) {
            userBlock[i].classList.add('user-block--active')
        } 
    }

    for (let i = 0; i < mobUserFilter.length; i++) {
        if(mobUserFilter[i].classList.contains('mv-customers__card--active')) {
            mobUserFilter[i].classList.remove('mv-customers__card--active');
        }  if (mobUserFilter[i].children[1].children[0].children[0].textContent !== input.value) {
            mobUserFilter[i].classList.add('mv-customers__card--active')
        }
    }

    input.value = '';
})
