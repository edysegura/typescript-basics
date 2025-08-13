/*
 * You can run this example using bun
 * bun index.html
 */

const button = document.querySelector('button')!
const numberA = document.querySelector<HTMLInputElement>('#numberA')!
const numberB = document.querySelector<HTMLInputElement>('#numberB')!
const result = document.querySelector<HTMLSpanElement>('#result')!

function add(numberA: number, numberB: number) {
  return numberA + numberB
}

function performAddition() {
  result.textContent = add(+numberA.value, +numberB.value).toString()
}

button.addEventListener('click', performAddition)
