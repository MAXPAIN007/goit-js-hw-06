class StringBuilder {
  #value = '';
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// class StringBuilder {
//   #value = '';
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     let chars = this.#value.split('');
//     chars.push(...str);
//     this.#value = chars.join('');
//     return this.#value;
//   }
//   padStart(str) {
//     let chars = this.#value.split('');
//     chars.unshift(...str);
//     this.#value = chars.join('');
//     return this.#value;
//   }
//   padBoth(str) {
//     let chars = this.#value.split('');
//     chars.unshift(...str);
//     chars.push(...str);
//     this.#value = chars.join('');
//     return this.#value;
//   }
// }

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
