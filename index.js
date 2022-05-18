const fs = require('fs');

fs.readFile('Schedule.txt', (err, data) => {
  if (err) {
    throw err;
  }
  
  const array = data.toString().split("\n");
  const newArray = [];
  // console.log(array);
  for (const a of array) {
    for(const b of a.split("/n")) {
       for(const c in b.split(" ")){
         if(c != 1){continue;}
         else{newArray.push(b.split(" ")[c]);}
       }
    }
    
  }
  let finalArray = [... new Set(newArray)];
  console.log(finalArray.length);

});