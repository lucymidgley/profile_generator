const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let name = '';
let activity1 = '';
let musicGenre = '';
let hatedFood = '';
let favFood = '';
let song = '';
let superPower = '';
rl.question('What is your name? ', (answer) => {
  name = answer;
  rl.question('what do you enjoy to do on the weekends? ', (answer) => {
    activity1 = answer;
    rl.question('What is your favorite music genre? ', (answer) => {
      musicGenre = answer;
      rl.question('What is a food that you absolutely hate? ', (answer) => {
        hatedFood = answer;
        rl.question('What is your favorite food? ', (answer) => {
          favFood = answer;
          rl.question('If you were stranded on an island, what one song would you have with you? ', (answer) => {
            song = answer;
            rl.question('If you could have any super-human ability, what would it be? ', (answer) => {
              superPower = answer;
              console.log(`\n${name} really enjoys to ${activity1} on the weekends whilst listening to ${musicGenre}. While ${name} truly despises ${hatedFood}, ${name} loves to eat ${favFood}. If ${name} was stranded on a desert island and could only listen to one song, it would be ${song}. In ${name}'s world, no superpower is more desirable than the ability to ${superPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});