const output = document.getElementById('output');
const buttons = document.getElementById('buttons');

// USE THIS LOG FUNCTION TO OUTPUT TO THE PAGE.
// THINK OF IT LIKE A CONSOLE.LOG() BUT ON THE PAGE :)

function log(text) {
  output.textContent += text + "\n";
}

function clearLog() {
  output.textContent = '';
}

const problems = [
  function problem1() {
    class Calculator {
      add(x, y) {
        return (x+y)
      }
      subtract(x, y) {
        return (x-y)
      }
    }

    let thing = new Calculator();
    log(thing.add(0, 1));
    log(thing.subtract(0, 1));
  },
  function problem2() {

    class Person {
      constructor() {
        this.name = null;
      }
      setName(name) {
        this.name = name;
      }
      getName() {
        return this.name;
      }
    }

    let thing = new Person();
    thing.setName("Christopher")
    log(thing.getName())
  },
  function problem3() {

    class Bird {
      fly() {
        log("Flying")
      }
    }

    class Penguin extends Bird {
      fly() {
        log("Penguins can't fly")
      }
    }

    let thing1 = new Bird()
    let thing2 = new Penguin()
    thing1.fly()
    thing2.fly()
  },
  function problem4() {
    class Shape {
      describe() {
        log("I'm a shape")
      }
    }

    class Circle extends Shape {
      describe() {
        log("I'm a circle")
      }
    }

    class Square extends Shape {
      describe() {
        log("I'm a square")
      }
    }

    let thing2 = new Circle()
    let thing1 = new Square()
    thing2.describe()
    thing1.describe()
  },
  function problem5() {
    class Employee {
      work() {
        log("Working...")
      }
    }

    class Manager extends Employee {
      hireEmployee() {
        log("Employee hired");
      }
    }
    let thing = new Manager();
    thing.hireEmployee()
    thing.work()
  }
];

problems.forEach((fn, index) => {
  const btn = document.createElement('button');
  btn.textContent = `Run Problem ${index + 1}`;
  btn.addEventListener('click', () => {
    clearLog();
    fn();
  });
  buttons.appendChild(btn);
});
