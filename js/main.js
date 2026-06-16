/* Willow Waterhole — shared behavior */
document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.nav-toggle');
  var ul=document.querySelector('.nav ul');
  if(btn&&ul){btn.addEventListener('click',function(){ul.classList.toggle('open');});}
});
