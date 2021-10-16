// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One dollar should be 114.38 yens", function(){
    //import the function from app.js
    const { fromDollartoYen } = require('./app.js')

    const dollars = fromDollartoYen(1)

    const expected = 1 * 114.38; 
    
     expect(fromDollartoYen(1)).toBe(114.38);
});

test("One Yan should be 0.0064 pounds", function(){
    //import the function from app.js
    const { fromYantoPound } = require('./app.js')

    const dollars = fromYantoPound(1)

    const expected = 1 * 0.0064; 
    
     expect(fromYantoPound(1)).toBe(0.0064);
});