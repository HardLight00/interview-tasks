class NumberExtend extends Number {
    static get [Symbol.species]() { return Number; }

    f(value) { return new NumberExtend(value) }
    add (value) {
        return this.f(this + value);
    }
    
    minus (value) {
        return this.f(this - value);
    }
    
    multiply (value) {
        return this.f(this * value);
    }
    
    divide (value) {
        return this.f(this / value);
    }
}
const myNum = new NumberExtend(4);
console.log(myNum.add(34).minus(12));