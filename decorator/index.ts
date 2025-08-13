function Logger(logString: string) {
  return function (target: Function) {
    console.group('[decorator] Logger')
    console.log(logString)
    console.log(target)
    console.groupEnd()
  }
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Edy Segura'

  constructor() {
    console.log('Person created')
  }
}

new Person()
