var animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

var menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timom',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

console.log(menagerie.warthog === animal); // false
console.log(menagerie.warthog);
console.log(menagerie.meerkat === animal); // true



// animal was reassinged to a different object, but the menagerie.warthog property still references the orignal object.