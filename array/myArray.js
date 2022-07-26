class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) { // O(1)
        return this.data[index]
    }

    push(item) { // O(1)
        this.data[this.length] = item
        this.length++
    }

    pop() { // O(1)
        const item = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--

        return item
    }

    delete(index) { // O(n)
        const item = this.data[index]
        this.unshifItems(index)
    }

    unshifItems(index) { // O(n)
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }

        this.pop()
    }
}

const myArray = new MyArray()
myArray.push(5)
myArray.push(66)
myArray.push(22)
myArray.push(12)
myArray.push(66900)
console.log(myArray)
myArray.delete(0)
console.log(myArray)