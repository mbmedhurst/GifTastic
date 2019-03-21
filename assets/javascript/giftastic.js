// giphy api key: 2C01k7c92UOBlnlnBpB2y3P6B4Vdmxw7

// code to handle blank submission into search field
// const animal = document.querySelector("inputDiv").value.length >= 1 {
//     run fetch
// } else {
//     display text, e.g. please enter the name of an animal
// }

// user enters an animal name into the search field
// on clicking submit
// -- adds a new button with the id of the animal name they entered, to the #displayBtn div 
// -- clicking on that button fires the ajax request using ${animal}
// clicking on any gif will pause/play the gif



let animalArr = []

// most of this taken from the To Do List activity
const renderButtons = _ => {
    document.querySelector('#displayBtn').innerHTML = ''
    animalArr.forEach((item, i) => {
        let animalArrElem = document.createElement('button')
        animalArrElem.textContent = item
        animalArrElem.className = 'animal'
        animalArrElem.setAttribute('data-animalaArrLoc', i)
        document.querySelector('#displayBtn').append(animalArrElem)
    })
}

// text entered into input field is pushed to animal array
// input field is cleared upon submit/enter
document.querySelector('#submit').addEventListener('click', e => {
    e.preventDefault()
    animalArr.push(document.querySelector('#animal').value)
    renderButtons()
    document.querySelector('#animal').value = ''
})


// fetch request for animal gifs

// const getGif = animal => {
//     event.preventDefault()
//     fetch (`https://api.giphy.com/v1/gifs/search?api_key=2C01k7c92UOBlnlnBpB2y3P6B4Vdmxw7&q=${animal}&limit=10&rating=g`)
//     .then(r => r.json())
//     .then(({data}) => {
//         document.querySelector('#displayGif').innerHTML = ''
//         data.forEach(gif => {
//         const url = gif.images.fixed_height.url
//         let gifElem = document.createElement('img')
//         gifElem.setAttribute('src', url)
//         document.querySelector('#displayGif').append(gifElem)
//         })
//     })
//     .catch(e => console.log(e))
// } 