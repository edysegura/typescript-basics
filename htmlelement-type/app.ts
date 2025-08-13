/*
 * You can run this example using bun
 * bun index.html
 */

const calculatorForm = document.querySelector<HTMLFormElement>('#calculator')!
const numberA = document.querySelector<HTMLInputElement>('#numberA')!
const numberB = document.querySelector<HTMLInputElement>('#numberB')!
const result = document.querySelector<HTMLElement>('#result')!

function add(numberA: number, numberB: number) {
  return numberA + numberB
}

function performAddition(event: SubmitEvent) {
  event.preventDefault()
  result.textContent = add(+numberA.value, +numberB.value).toString()
}

calculatorForm.addEventListener('submit', performAddition)
