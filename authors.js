var authors = [
  {name:"Margaret Atwood",
  	food:"apples",
  	drink:"tea",
  },
  {name:"Jane Austen",
  	food:"oranges",
  	drink:"water",
  },
  {name:"Bill Bryson",
  	food:"pears",
  	drink:"soda",
  },
  {name:"Roald Dahl",
  	food:"grapes",
  	drink:"beer",
  },
  {name:"Tom Holt",
  	food:"bananas",
  	
  },
  {name:"J.K. Rowling",
  	food:"watermelon",
  	
  },
];

authors.forEach(function(author){
if (author.drink !== undefined){
  console.log(author.drink)}

});