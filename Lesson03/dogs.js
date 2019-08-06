const dogs = ['corgi', 'labrador', 'beagle', 'mastiff', 'aussie', 'chihuahua'];
console.log(dogs[5]);

dogs.push('bulldog');
console.log(dogs);

dogs.splice(2,1);
console.log(dogs);

let str = dogs.join(',');
console.log(str);
