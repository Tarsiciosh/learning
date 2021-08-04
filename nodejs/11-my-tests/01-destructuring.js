const myObject = {
  name:"John", 
  age: 34,
};

const newObject = {...myObject, height:45};

function example (obj) {

  //const name =  obj.props.name;
  //const age = obj.props.age;

  const {name, age, height} = obj.props;

  console.log(`My name is ${name} and I am ${age}`);
}

example( {props: newObject} );

console.log(newObject);