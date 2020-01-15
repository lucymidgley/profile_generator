const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questionArray = ['What is your name? ', 'what do you enjoy to do on the weekends? ', 'What is your favorite music genre? ', 'What is a food that you absolutely hate? ', 'What is your favorite food? ', 'If you were stranded on an island, what one song would you have with you? ', 'If you could have any super-human ability, what would it be? '];

const askquestion = function(qArray, n, aArray) {

  if (n === qArray.length) {
    rl.close();
    return console.log(`\n${aArray[0]} really enjoys to ${aArray[1]} on the weekends whilst listening to ${aArray[2]}. While ${aArray[0]} truly despises ${aArray[3]}, ${aArray[4]} loves to eat ${aArray[5]}. If ${aArray[0]} was stranded on a desert island and could only listen to one song, it would be ${aArray[6]}. In ${aArray[0]}'s world, no superpower is more desirable than the ability to ${aArray[6]}.`);
  } else {
    rl.question(qArray[n], (answer) => {
      aArray.push(answer);
      n++;
      return askquestion(qArray, n, aArray);
    });
  }
};

askquestion(questionArray, 0, []);
