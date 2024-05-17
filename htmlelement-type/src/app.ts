const button = document.querySelector('button')!
const numberA = document.querySelector<HTMLInputElement>('#numberA')!
const numberB = document.querySelector<HTMLInputElement>('#numberB')!
const result = document.querySelector<HTMLSpanElement>('#result')!

function add(numberA: number, numberB: number) {
  return numberA + numberB
}

button.addEventListener('click', () => {
  result.textContent = add(+numberA.value, +numberB.value).toString()
})
