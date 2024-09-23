//your JS code here. If required.
const form = documnet.getElementbyUd('myForm');
const ageInput = document.getElementById('age');
const nameInput = document.getElementbId('name');

form.addEventListner('submit'),
(event) =>
event.preventDefault(); //prevent default form submission


const age = parseInt(ageInput.value);
const name = nameInput.value;

//validation
if(age === '' || name=== '') {
  alert('please fill in all fields.');
  return;
}
const promise = new promise((resolve,reject)  =>{
  setTimeout(()=>{
    if (age .= 18){
      resolve(name);
      
    }else{
      reject(name);
    }
  },4000); //4 seconds delay
});

promise
.then((name) =>{
  alert('welcome, ${name}. you can vote.');
})
.catch((name) =>{
  alert('welcome,${name}. you aren't old enough.');
});

