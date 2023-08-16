// buttons 
const elDarkModeBtn = document.querySelector('#js-dark-mode-btn');
const elContactAddBtn = document.querySelector('.js-contact-adder-btn');
// dark filter 
const elDarkFilter = document.querySelector('.dark-filter');

elDarkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    elDarkFilter.classList.toggle('dark-filter-run');
});
elContactAddBtn.addEventListener('click', function () {
    // parents 
    const elContactForm = document.querySelector('.form-parent');
    const elContactList = document.querySelector('.list-parent');
    // icons
    const elContactAddIcon = document.querySelector('.contact-add-icon');
    const elContactListcon = document.querySelector('.contact-list-icon');
    // dark filter 
    const elListDarkFilter = document.querySelector('.list-dark-filter');
    // parents movement
    elContactForm.classList.toggle('form-parent-run');
    elContactList.classList.toggle('list-parent-run');
    // dark filter movement
    elContactList.classList.toggle('hidden-and-dark');
    // icons movement
    elContactAddIcon.classList.toggle('hidden');
    elContactListcon.classList.toggle('hidden');
});