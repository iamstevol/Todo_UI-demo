const name = document.querySelector("#name");
const desc= document.querySelector("#description");
const btn = document.querySelector("#btn");
const out = document.querySelector("#output");


btn.addEventListener("click", createTodo)

async function  createTodo(e){
    e.preventDefault();
    const todoname = name.value;
    const description = desc.value;
   const newTodo = {name: todoname, description: description}
   const res =  await fetch("http://localhost:8080/api/v1/task",{
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {"Content-Type": "application/json"}
    })
  console.log(res)

}
async function getAll(){
    const result = await fetch("http://localhost:8080/api/v1/task")
    const data = await result.json()
console.log(data)
    out.innerHTML  = '';

    data.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = "<div>" + element.name + "</div>"
         out.appendChild(li);
    });
}


getAll()