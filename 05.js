const data = [
    { name: "udin", age: 10 },
    { name: "ujang", age: 11 },
    { name: "asep", age: 12 },
  ];
  
  data.forEach((obj, index) => {
    console.log(`${index + 1}. nama: ${obj.name}, usia: ${obj.age}`);
  });
