const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
const btn4 = document.getElementById("button4")
const result = document.getElementById("result")

const optionsType = [

      {
        title: "Harry Poter",
        type: "film",
        id: 11,
      },

      {
        title: "God of war",
        type: "game",
        id: 12,
      },

      {
        title: "Production Ready - Microservices",
        type: "book",
        id: 13,
      },

      {
        title: "Avatar",
        type: "film",
        id: 14,
      },

      {
        title: "Elden Ring",
        type: "game",
        id: 15,
      },

      {
        title: "Capital",
        type: "book",
        id: 16,
      },
]

const button1 = () => {

result.innerHTML = ``
for(let i = 0; i < optionsType.length; i++){

result.innerHTML += `<div>title:${optionsType[i].title}<br>type:${optionsType[i].type}<br><hr></div>`

}};

const button2 = () => {
result.innerHTML = ``

for(let i = 0; i < optionsType.length; i++){

 if(optionsType[i].type == "film")
result.innerHTML += `<div>title:${optionsType[i].title}<br>type:${optionsType[i].type}<br><hr></div>`
    
}};

    const button3 = () => {

        result.innerHTML = ``
    for(let i = 0; i < optionsType.length; i++){

     if(optionsType[i].type == "game")
    result.innerHTML += `<div>title:${optionsType[i].title}<br>type:${optionsType[i].type}<br><hr></div>`

        }};

        const button4 = () => {
        result.innerHTML = ``

        for(let i = 0; i < optionsType.length; i++){

        if(optionsType[i].type == "book")
        result.innerHTML += `<div>title:${optionsType[i].title}<br>type:${optionsType[i].type}<br><hr></div>`

            }};

btn1.addEventListener("click", button1)
btn2.addEventListener("click", button2)
btn3.addEventListener("click", button3)
btn4.addEventListener("click", button4)