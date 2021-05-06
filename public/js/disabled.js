const select = document.querySelector('select');
const button = document.querySelector('button');
const p = document.createElement('p');
p.textContent = 'You must chose something...';
p.className = 'red';


document.body.addEventListener('mouseover',()=>{
   if(select.value == "" && document.querySelector('p') == null){
      document.body.append(p);
      console.log('HH');
   }
});

select.addEventListener('change',()=>{
   button.removeAttribute('disabled');
   document.body.removeChild(p);
});