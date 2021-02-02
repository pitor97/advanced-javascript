/*
const students = [
  { id: 21, name: "omar sunny " },
  { id: 31, name: "manna" },
  { id: 41, name: "mouyouri" },
  { id: 71, name: "deepjol" },
];

  const names = students.map((x) => x.name)
  console.log(names); /// result will be all the name property 

*/
/*
  const students = [
    { id: 21, name: "omar sunny " },
    { id: 31, name: "manna" },
    { id: 41, name: "mouyouri" },
    { id: 71, name: "deepjol" },
  ];
  
    const ids = students.map(s => s.id)
    console.log(ids);
  */


  /*
    const students = [
        { id: 21, name: "omar sunny " },
        { id: 31, name: "manna" },
        { id: 41, name: "mouyouri" },
        { id: 71, name: "deepjol" },
      ];
      
        const bigger = students.filter(s => s.id>40)
        console.log(bigger); // result is just bigger then 40 
      */
      
        const students = [
            { id: 21, name: "omar sunny " },
            { id: 31, name: "manna" },
            { id: 41, name: "mouyouri" },
            { id: 71, name: "deepjol" },
          ];
          
            const bigger = students.find(s => s.id>40)
            console.log(bigger); // result is only 41, name:"mouyouri"
          
          