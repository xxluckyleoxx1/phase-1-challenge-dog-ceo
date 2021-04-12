console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

function fetchDogs(){
    return fetch("https://dog.ceo/api/breeds/image/random/4").then(resp => 
    resp.json()).then(json => 
        renderDogs(json))

}
function renderDogs(dogs){
    let dogList = document.querySelector("ul#dog-breeds")
    dogs.forEach(dog => {
        let dogLi = document.createElement("li")
        let dogImg = document.createElement('img')
        dogImg.src = dog.message
        dogLi.innerHTML = dogImg
        dogList.append(dogLi)
    })
}








document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
})