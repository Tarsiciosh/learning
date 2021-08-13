let myArray = [{
    stat : 'speed',
    value: 30 
  },{
    stat: 'mongo',
    value: 34
  },{
    stat: 'otro',
    value: 45 
  }
]

myArray.sort((a,b) => (b.value - a.value))

let myObject = {}

myArray.forEach ((item) => {
  myObject[item.stat] = item.value
})

console.log(myArray)

console.log(myObject)