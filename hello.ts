interface Bird {
  fly(): any
  layEggs(): any
}

interface Fish {
  swim(): any
  layEggs(): any
}

function getSmallPet(): Fish | Bird {
  return new class implements Fish {
    layEggs(): any {}
    swim(): any {}
  };
}

const pet = getSmallPet();

function isFish(pet: Fish | Bird): boolean {
  return ((<Fish>pet).swim !== undefined);
}

if (isFish(pet)) {
  pet.swim();
}

function isFishGuard(pet: Fish | Bird): pet is Fish {
  return ((<Fish>pet).swim !== undefined);
}

if (isFishGuard(pet)) {
  pet.swim();
}




