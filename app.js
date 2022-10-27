//Select DOM
const card = document.querySelector('.card');


//Event listners
card.addEventListener('mousemove',(e) => {
  
  
  const py = e.pageY - card.getBoundingClientRect().top;
  const px = e.pageX - card.getBoundingClientRect().left;


  const simiWidth = card.offsetWidth / 2;
  const simiHeight = card.offsetHeight / 2;
  const rotY = ((px - simiWidth) / simiWidth) * 10;
  const rotX = -((py - simiHeight) / simiHeight) * 10;


  const shX = rotX * 3;
  const shY =rotY * 3;


  card.style.transform = `perspective(50rem) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  card.style['box-shadow'] = `${-shY}px ${shX}px 20px rgba(230, 97, 97, 0.548)`;
});

card.addEventListener('mouseleave',(e) => {
  card.style.transform = '';
  card.style['box-shadow'] = '0px 0px 20px rgba(230, 97, 97, 0.548)'
});







