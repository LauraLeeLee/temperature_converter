// Celsius converter JS
let f;
let c;
let body = document.getElementById('body');
let input = document.getElementById('faren');
if(input.value.length == 0) {
  input.value =  null;
}
console.log(input.value);
console.log(input.value.length);

document.getElementById('faren').addEventListener('input', function() {
  f = document.getElementById('faren').value;
  c = (5/9) * (f - 32);
  if(f) {
    document.getElementById('celsius').value = c;
  }else {
    document.getElementById('celsius').value = null;
  }
  if(input.value.length == 0) {
    input.value =  null;
  }
  console.log("farenValue: " + input.value);
  console.log(input.value.length);
  
  if(f<=32) {
    body.classList.remove('cool', 'mild', 'warm','hot', 'very-hot');
    body.classList.add('frozen');
   
  } else if(f>32 && f<60) {
    body.classList.remove('frozen', 'mild', 'warm', 'hot', 'very-hot');
    body.classList.toggle('cool');
    
  } else if(f>=60 && f<70) {
    body.classList.remove('cool', 'frozen', 'warm', 'hot', 'very-hot');
    body.classList.toggle('mild');
    
  }else if(f>=70 && f<80) {
    body.classList.remove('cool', 'mild', 'frozen', 'hot', 'very-hot');
    body.classList.toggle('warm');
    
  }else if(f>=80 && f<100) {
    body.classList.remove('cool', 'mild', 'warm', 'frozen', 'very-hot');
    body.classList.toggle('hot');
  
  }else if(f>=100 ) {
    body.classList.toggle('very-hot');
    body.classList.remove('cool', 'mild', 'warm', 'hot', 'frozen');
    
  } else {
    body.classList.remove('cool', 'mild', 'warm', 'hot', 'frozen', 'very-hot');
    body.classList.toggle('nothing');
  }
  console.log("faren is:" + f);
  console.log("cels is:" + c);
});

document.getElementById('celsius').addEventListener('input', function() {
  c = document.getElementById('celsius').value;
  f = (9 / 5) * c + 32;
  
  if (c) {
    document.getElementById('faren').value = f;
  } else {
        document.getElementById('faren').value = null;
  }  
  console.log("faren2 is:" + f);
  console.log("cels2 is:" + c);
});

document.getElementById('reset').addEventListener('click', function(){
  document.getElementById('myForm').reset();
})