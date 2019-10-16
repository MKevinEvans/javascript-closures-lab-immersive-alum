const app = "I don't do much."

let test = "this is a test"

function bumpCounter(){
  let counter = 0;
  
  function closureAdd(x){
    counter += x;
  }

  return {
    addBump: function(){
      counter += 1;
    },
    getBumps: function(){
      return counter;
    }
  }
}

function createAnimal(animalType){
  return function (deadlyDevice){
    return {animalType: animalType, deadlyDevice: deadlyDevice}
  }
  }
  
  function sharkCreator(weapon){
    let shark = createAnimal("shark");
    return shark(weapon);
  }
  
  let sharkWithFrickinLaserbeam = sharkCreator("laser beam");
  let sharkWithFrickinCannon = sharkCreator("cannon")
