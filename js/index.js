const shareLnk = document.querySelector('.share-lnk');
const tooltip = document.querySelector('.tooltip');

shareLnk.addEventListener('click',(e)=>{
    e.preventDefault(); 
    console.log(e.target);
    tooltip.classList.toggle('hidden');
})
