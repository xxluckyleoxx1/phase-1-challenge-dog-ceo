console.log('%c HI', 'color: firebrick')
//const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

// challenge 1
function fetchDogs(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderDogs(json.message))

}


//challenge 1
function renderDogs(dogs){
    let dogList = document.querySelector("div#dog-image-container")
    dogs.forEach(dog => {
        let dogLi = document.createElement("li")
        let dogImg = document.createElement('img')
        dogImg.src = dog
        dogList.append(dogImg)
        dogList.append(dogLi)
    })

}

//change 2
function fetchAllBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderAllBreeds((Object.keys(json.message))))
}
let breedListUL = document.querySelector('ul#dog-breeds')
function renderAllBreeds(breeds){
    breeds.forEach(breed => {
        let breedLi = document.createElement('li')
        breedLi.innerText = breed
        breedListUL.append(breedLi)

        
    })
}

//challenge 3
let breedList = document.querySelector('#dog-breeds')
breedList.addEventListener('click', function(e){
    e.target.style.color = "red"

})
//challenge 4
let dogSelect = document.getElementById('breed-dropdown')

dogSelect.addEventListener("change", (event) => {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
        let dogBreedArr = Object.keys(json.message)
        let filteredBreeds = dogBreedArr.filter(breed => {
            return breed.startsWith(event.target.value)
        })
        breedListUL.innerHTML = ""
        filteredBreeds.forEach((breed) => {
            makeDog(breed)
        })
    })

})
function makeDog(breed){
    let breedLi = document.createElement("li")
    breedLi.innerText = breed
    breedListUL.append(breedLi)
}




document.addEventListener("DOMContentLoaded", () => {
    fetchDogs();
    fetchAllBreeds();
})

