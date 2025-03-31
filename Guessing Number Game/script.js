;(()=> {
  const userInput = document.querySelector('.userInput')
  const form = document.querySelector('form')
  const displayMessage = document.querySelector('.displayOutput')
  const guessDisplay = document.querySelector('.guessDisplay')
  const submitButton = document.querySelector('.submitButton')
  const newGameStart = document.querySelector('.newGameStart')
  const allGuessCollections = []
  let randomNumber = Math.round(Math.random() * 100)
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)

    if (userInputValue < randomNumber) {
      displayMessage.innerText = `Too Low!  😏`
    } else if (userInputValue > randomNumber) {
      displayMessage.innerText = `Too High! 😲`
    } else {
      displayMessage.innerText = `You Win  😎`
      newGameStart.disabled = false
      submitButton.disabled = true
    }
    allGuessCollections.push(userInputValue)
    guessDisplay.innerText = 'Your Guesses : ' + allGuessCollections.join(' , ')
    form.reset()
  })

  newGameStart.addEventListener('click', () => {
    displayMessage.innerText = ''
    allGuessCollections.innerText = ''
    newGameStart.disabled = true
    submitButton.disabled = false
    randomNumber = Math.round(Math.random() * 100)
  })
})()
