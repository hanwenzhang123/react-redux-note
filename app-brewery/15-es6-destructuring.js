//index.js
import animals, {useAnimals} from './data';


//destructuring arrays

//destructuring to object, first name cat, second name dog, names must be unique
const [cat, dog] = animals;  
console.log(cat);           //var cat = animals[0]  


//destructuring objects

//destructuring objects, same names from the key, unless we do {name: catName, sound: catSound} - alternative name 
const {name, sound} = cat; 
console.log(sound);        //animals[0].sound


//default value. if name is undefined, use this default value instead
const {name = 'Fluffy', sound = 'Purr'} = cat;    


const {name, sound, feedingRequirements: {food, water}} = cat; //destruture nested object {}
console.log(food)   //feedingRequirements.food


const [animal, makeSound] = useAnimals(cat);    //output is an array
console.log(animal); //cat
makeSound(); //meow


//data.js

const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [      //return an array, inside the array, there is an string for name and a function
    animal.name,
    function() {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };
   
