const button = document.querySelector("button")!;
const numberA = document.getElementById("num1")! as HTMLInputElement;
const numberB = document.getElementById("num2")! as HTMLInputElement;
const result = document.getElementById("result")! as HTMLSpanElement;

function add(numberA: number, numberB: number): number {
  return numberA + numberB;
}

button.addEventListener("click", () => {
  result.textContent = add(+numberA.value, +numberB.value).toString();
});
