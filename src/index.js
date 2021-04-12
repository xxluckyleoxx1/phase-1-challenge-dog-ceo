console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

function fetchDogs(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderDogs(json.message))

}

function fetchAllBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => console.log(json.message))
}

function renderDogs(dogs){
    let dogList = document.querySelector("div#dog-image-container")
    dogs.forEach(dog => {
        let dogLi = document.createElement("li")
        let dogImg = document.createElement('img')
        dogImg.src = dog
        dogList.append(dogImg)
        dogList.append(dogLi)
    })

    function renderAllBreeds(breeds){
        let breedList = document.querySelector('ul#dog-breeds')
        breeds.forEach(breed => {
            let breedLi = document.createElement('li')
            
        })
    }
}








document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
})