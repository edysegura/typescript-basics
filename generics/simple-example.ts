function getFirstElement<ElementType>(list: ElementType[]): ElementType {
  return list[0]
}

const numbers = [1, 2, 3]
const firstNumber = getFirstElement(numbers)
console.log(firstNumber) // 1

const strings = ['hello', 'world']
const firstString = getFirstElement(strings)
console.log(firstString) // hello
