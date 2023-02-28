let next = document.querySelector('[for="next"]');
next.addEventListener('click',()=>{
arr=[1,2,3]
for(let i of arr){
    element = document.querySelector(`[for="${i}"]`)
    element.innerText = Number(element.innerText) + 3
    console.log(element);
}
})

let previous = document.querySelector('[for="previous"]');
previous.addEventListener('click',()=>{
    arr=[1,2,3]
for(let i=1;i>0;i++){
    element = document.querySelector(`[for="${i}"]`)
    element.innerText = Number(element.innerText) - 3
    console.log(element);

}
})