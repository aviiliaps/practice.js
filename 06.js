const people = [  { name: "udin", sex: "male", age: 10, marital: "single", social: "student" },  
{ name: "ujang", sex: "male", age: 25, marital: "married", social: "employee" },  
{ name: "icih", sex: "female", age: 10, marital: "single", social: "student" }, 
{ name: "eneng", sex: "female", age: 100, marital: "married", social: "employee" },  
{ name: "asep", sex: "male", age: 20, marital: "single", social: "employee" },];

const groupedData = {};

// Grouping people by sex
groupedData.sex = {};
people.forEach((person) => {
  if (!groupedData.sex[person.sex]) {
    groupedData.sex[person.sex] = [];
  }
  groupedData.sex[person.sex].push(person.name);
});

// Grouping people by age
groupedData.age = {};
people.forEach((person) => {
  if (person.age < 20) {
    if (!groupedData.age.under20) {
      groupedData.age.under20 = [];
    }
    groupedData.age.under20.push(person.name);
  } else {
    if (!groupedData.age.older) {
      groupedData.age.older = [];
    }
    groupedData.age.older.push(person.name);
  }
});

// Grouping people by marital status
groupedData.marriage = {};
people.forEach((person) => {
  if (person.marital === "single") {
    if (!groupedData.marriage.single) {
      groupedData.marriage.single = [];
    }
    groupedData.marriage.single.push(person.name);
  } else {
    if (!groupedData.marriage.double) {
      groupedData.marriage.double = [];
    }
    groupedData.marriage.double.push(person.name);
  }
});

// Grouping people by job status
groupedData.status = {};
people.forEach((person) => {
  if (!groupedData.status[person.social]) {
    groupedData.status[person.social] = [];
  }
  groupedData.status[person.social].push(person.name);
});

console.log(groupedData);
