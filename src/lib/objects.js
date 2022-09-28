const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};
const hasProperty = (property, object) => {
  // eslint-disable-next-line no-prototype-builtins
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  // eslint-disable-next-line no-shadow
  return people.find(people => people.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  return people.reduce((previous, current) => previous + current.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: friendName => {
      return `Hi ${friendName}, my name is ${name} and I am ${age}!`;
    },
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
