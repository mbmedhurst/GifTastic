// giphy api key: 2C01k7c92UOBlnlnBpB2y3P6B4Vdmxw7

// array of animal names entered into the input field
let animalArr = []

// toggle variable for still/animated gifs
let toggle = false


// text entered into input field is pushed to animal array
document.querySelector('#submit').addEventListener('click', e => {
    // prevents page reload upon submit/enter
    e.preventDefault()
    // logic to prevent empty and duplicate submissions
    let submitValue = document.querySelector('#animalInput').value
    if (submitValue.length >= 1 && !animalArr.includes(submitValue)) {
        animalArr.push(submitValue)
        renderButtons()
    }
    // input field is cleared upon submit/enter
    document.querySelector('#animalInput').value = ''
})

// main construction of this taken from the ToDo List activity
// and then adapted from class video / giphy demos
// buttons are rendered from user's input
const renderButtons = _ => {
    document.querySelector('#displayBtn').innerHTML = ''
    animalArr.forEach((item, i) => {
        let animalArrElem = document.createElement('button')
        animalArrElem.textContent = item
        animalArrElem.className = 'animalBtn'
        animalArrElem.setAttribute('data-animalArrLoc', i)
        document.querySelector('#displayBtn').addEventListener('click', function (e) {
            let animal = animalArr[e.target.dataset.animalarrloc]
            getGif(animal)
        })
        document.querySelector('#displayBtn').append(animalArrElem)
    })
}

// fetch request for animal gifs
const getGif = (animal) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=2C01k7c92UOBlnlnBpB2y3P6B4Vdmxw7&q=${animal}&limit=10&rating=g`)
        .then(r => r.json())
        .then(({ data }) => {
            document.querySelector('#displayGif').innerHTML = ''
            data.forEach(gif => {
                let { url: animated } = gif.images.fixed_height
                let { url: still } = gif.images.fixed_height_still
                let gifElem = document.createElement('img')
                gifElem.setAttribute('src', `${still}`)
                gifElem.setAttribute('class', 'gifImg')
                gifElem.setAttribute('alt', `${animal} Gif`)
                gifElem.setAttribute('data-still', `${still}`)
                gifElem.setAttribute('data-animated', `${animated}`)
                document.querySelector('#displayGif').append(gifElem)
            })
        })
        .catch(e => console.log(e))
}

// event listener to toggle between still and animated gifs
// copied heavily from class video
document.querySelector('#displayGif').addEventListener('click', ({ target }) => {
    let { animated, still } = target.dataset
    toggle = !toggle
    target.setAttribute('src', toggle ? animated : still)
})