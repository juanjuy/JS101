// will the below code raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// no, but it will fill in the empty spaces (indexes 3 through 5) with "empty" items

numbers[4]; // this will return undefined, but note that the value is not actually undefined.