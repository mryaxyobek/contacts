const elDarkModeBtn = document.querySelector('#js-dark-mode-btn');
const elDarkFilter = document.querySelector('.dark-filter');

elDarkModeBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    elDarkFilter.classList.toggle('dark-filter-run');
})