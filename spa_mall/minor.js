function getChildren(persons) {
    // 코드 작성
    return persons.filter((persons) => persons.age < 20);
  }
  
  const allPersons = [
    { name: "John Kim", age: 10 },
    { name: "Jane Doe", age: 20 },
    { name: "Fred Kang", age: 13 },
    { name: "Chris Doe", age: 39 },
    { name: "Layla Park", age: 19 },
  ];
  
  console.log(getChildren(allPersons));
  // Print: [
  // 	{"name": "John Kim", "age": 10},
  // 	{"name": "Fred Kang", "age": 13},
  //  {"name": "Layla Park", "age": 19},
  // ]