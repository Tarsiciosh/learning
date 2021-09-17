import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import Users from './users'
const sum = require('./sum')


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('adds 1 + 2 to equal 3', ()=>{
  expect(sum(1,2)).toBe(3)
})

// toBe uses Object.is to test exact equality. 
// If you want to check the value of an object, 
// use toEqual instead:

test('object assigment',()=>{
  const data = {one: 1}
  data['two'] = 2
  expect(data).toEqual({one: 1, two: 2})
})

// toEqual recursively checks every field of an object or array.

test('adding positive number is not zero', ()=>{
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a+b).not.toBe(0)
    }
  }
})


// Truethiness
test('null', ()=>{
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})


test('zero', ()=>{
  const z=0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})


//numbers
test('two plus two', ()=>{
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)
  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});


//Strings
test('there is no I in team', ()=>{
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', ()=> {
  expect('Christoph').toMatch(/stop/)
})

//Arrays and iterables

const shoppingList = [
  'diapers',
  'klennez',
  'trash bags',
  'milk'
]

test('the shopping list has milk on it',()=>{
  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

//Exceptions
function compileAndroidCode(){
  throw new Error('you are useing the wrong JDK')
}

test('compiling android goes as expected',()=>{
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)
})

//TESTING ASYNCHRONOUS CODE - promises

async function fetchData (){
  return 'peanut butter'
}

test('the data is peanut butter (promise)',()=> {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter')
  })
})

test('the data is peanut butter (await)', async () => {
  const data = await fetchData()
  expect(data).toBe('peanut butter')
})

/*
test('the fetch fails with an error(await)', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
*/

test('the data is peanut butter', async() => {
  await expect(fetchData()).resolves.toBe('peanut butter')
})

/*
test('the fetch fails with an error', async() => {
  await expect(fetchData()).rejects.toMatch('error')
})*/

//SETUP AND TEARDOWN

//repeating setup for many tests
function initializeCityDatabase (){
}
function clearCityDatabase (){
}

function isCity (city)
{
  if (city === 'Vienna')
    return true
  return false
}

beforeEach(()=>{
  initializeCityDatabase() 
})

afterEach(()=>{
  clearCityDatabase()
})

test('city database has Vienna', ()=> {
  expect(isCity('Vienna')).toBeTruthy()
})

test('city database does not has San Juan', ()=> {
  expect(isCity('San Juan')).toBeFalsy()
})

//One-time test
beforeAll(() => {
  return initializeCityDatabase(); // added return because of the async function
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna (one-time)', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan (one-time)', () => {
  expect(isCity('San Juan')).toBeFalsy();
});

//scoping

function initializeFoodDatabase (){}

function isValidCityFoodPair () {return true}

// Applies to all tests in this file
beforeEach(() => {
  return initializeCityDatabase();
});

test('city database has Vienna(scoping)', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeFalsy();
});

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});

/*
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('..', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('.', () => console.log('2 - test'));
});

describe('outer', () => {
  console.log('describe outer-a')
  describe('describe inner 1', () => {
    console.log('describe inner 1')
    test('test 1', () => {
      console.log('test for describe inner 1')
      expect(true).toEqual(true)
    })
  })
  console.log('describe outer-b')
  test('test 1', () => {
    console.log('test for describe outer')
    expect(true).toEqual(true)
  });
  describe('describe inner 2', () => {
    console.log('describe inner 2')
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2')
      expect(false).toEqual(false)
    })
  })
  console.log('describe outer-c')
})

test.only('this will be the only test that runs', ()=> {
  expect(true).toBe(false)
})
*/

//Mocking
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test( 'the mock function is called twice', () => {
  const mockCallback = jest.fn(x => 42 + x)
  forEach([0,1],mockCallback)

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);
  
  // In the first call, the first argument was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // In the second call, the first argument was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
})


test('the mock property', () => {
  const myMock = jest.fn();
  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();
  console.log(myMock.mock.instances);
})

test('mock return values', ()=>{
  const myMock = jest.fn();
  console.log(myMock());
  // > undefined
  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
  console.log(myMock(), myMock(), myMock(), myMock());

  const filterTestFn = jest.fn()
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)
  const result = [11,12].filter(num => filterTestFn(num))
  console.log(result) //[11]
  console.log('first call, first argument:',filterTestFn.mock.calls[0][0]) //first call, first argument -> 11
  console.log('second call, first argument:',filterTestFn.mock.calls[1][0]) //second call, first argument -> 12
})

// Moking modules
// (see also users.js)
jest.mock('axios')

test('mocking modules', () =>{
  const users = [{name: 'Bob'}]
  const resp = {data: users}
  axios.get.mockResolvedValue(resp)
  //axios.get.mockImplementation(()=> Promise.resolve(resp))
  return Users.all().then(data => expect(data).toEqual(users))
})

const myMockFn = jest.fn(cb => cb(null, true))
const tarTest = arg => arg(null, true)
console.log(tarTest((arg1, arg2)=>{console.log(`arg1: ${arg1} arg2: ${arg2}`)}))

//Mock implementation

jest.mock('axios')
axios.get.mockImplementation ((id) => Promise.resolve({
  data:[
    {name:'Bob'},
    {name:'Tom'},
    {name:'Roger'}
  ]
}))
