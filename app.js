const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
const [name, github, extra] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github, extra), err => {
  if (err) throw new Error(err);
  console.log (extra);
  console.log('Portfolio complete! Check out index.html to see the output!');
});