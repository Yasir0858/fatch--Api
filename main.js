// let data=[1,2,3,4,5,6,7,8]

// const getData=(arr)=> {
//     console.log(arr);
    
// }
// getData(data);
// const errorhandler = () =>{
//     console.log("something went wrong");
    
// }
//  fetch("https://jsonplaceholder.typicode.com/todos")
//  .then((resp)=> resp.json())
//  .then((data)=>console.log(data)
//  )
// .catch(() => {
//     console.log("something went wrong ");
    
// })
 const  button= document.querySelector('button')
 const ul= document.querySelector('ul')
const fetchtodo = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await resp.json();
   data.forEach((todo) => {
   let li = document.createElement('li');
   li.className= 'list-group-item'
   li.textContent = todo.title;
   ul.appendChild(li);                                                                   
});
};

button.addEventListener('click' , fetchtodo);

                             