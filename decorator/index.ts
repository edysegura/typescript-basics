function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString)
    console.log(target)
  }
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Edy Segura'

  constructor() {
    console.log('Person created')
  }
}

const p1 = new Person()
