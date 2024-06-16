const marvel_heroes = ["spiderman", "thor", "ironman"]
const dc_heroes = ["batman", "flash", "superman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const another_allheroes = [...marvel_heroes, ...dc_heroes];
console.log(another_allheroes);
