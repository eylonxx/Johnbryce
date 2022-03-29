// // let i: number;
// // for (i = 100; i <= 200; i++) {
// //   if (i % 2 === 0) console.log(i);
// // }

// // function printText(text: string, times: number) {
// //   for (let i = 1; i <= times; i++) {
// //     console.log(text);
// //   }
// // }
// // printText('hello', 3);

// // function getAverage(n1: number, n2: number): number {
// //   //must have a return
// //   const sum = (n1 + n2) / 2;
// //   //need to declare what a function returns
// //   return sum;
// // }
// // console.log(getAverage(3, 5));

// // //export and import works like react
// const randState = (): string => {
//   const states: string[] = ['America', 'Africa', 'Australia'];
//   return states[Math.floor(Math.random() * states.length)];
// };
// class Parrot {
//   name: string;
//   color: string;
//   breed: string;
//   origin: string;

//   constructor(name: string, color: string, breed: string) {
//     this.name = name;
//     this.color = color;
//     this.breed = breed;
//     this.origin = randState();
//   }

//   display(): void {
//     console.log('my name is' + this.name);
//   }

//   fly(): void {
//     console.log(`${this.name} is flying`);
//   }
// }

// const parrot1 = new Parrot('oded', 'black', 'gay');

// console.log(parrot1);
enum Affinity {
  NONE,
  SHUAL,
  TSLOFAH,
  ARNAV,
}
class ShutzMember {
  public name: string;
  public age: number;
  public joinDate: Date;
  public affinity: Affinity;

  constructor(name: string, age: number, joinDate?: Date, affinity?: Affinity) {
    this.name = name;
    this.age = age;
    this.joinDate = joinDate ? joinDate : new Date();
    this.affinity = affinity ? affinity : Affinity.NONE;
  }
  private getAffinityString(): string {
    switch (this.affinity) {
      case Affinity.SHUAL:
        return 'Shual';
      case Affinity.TSLOFAH:
        return 'Tslofah';
      case Affinity.ARNAV:
        return 'Arnav';
      default:
        return 'None';
    }
  }

  public toString(): string {
    return `Name: ${this.name}, Age:${
      this.age
    }, Date joined:${this.joinDate.toLocaleTimeString()}, Affinity: ${this.getAffinityString()}`;
  }
}

class Arnav extends ShutzMember {
  constructor(name: string, age: number, joinDate?: Date) {
    super(name, age, joinDate, Affinity.ARNAV);
  }
}

const dor = new Arnav('dor', 22, new Date(1998, 1, 1));
console.log(dor.toString());
