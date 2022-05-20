var products = [
    {name:'A',quantity:2,unitPrice:10},
    {name:'B',quantity:3,unitPrice:20},
    {name:'C',quantity:4,unitPrice:30}
]
// reduce
var total = products.reduce((currentTotal, product) => {
    return currentTotal + product.quantity*product.unitPrice
},0)

console.log(total)

// sort array
var numbers = [9,5,7,6,1,2,3]
var descendingNumbers = numbers.sort((a,b) => b-a)
var ascendingNumbers = numbers.sort((a,b) => a-b)