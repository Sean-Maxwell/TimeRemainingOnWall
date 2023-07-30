const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateTimeOnWall(R, P) {
  const timeSeconds = R / P;
  const hours = Math.floor(timeSeconds / 3600);
  const remainderSeconds = timeSeconds % 3600;
  const minutes = Math.floor(remainderSeconds / 60);
  const seconds = remainderSeconds % 60;
  return { hours, minutes, seconds };
}

function calculateDuration(futureTime) {
  const currentTime = new Date();
  const durationInMilliseconds = futureTime - currentTime;
  const hours = Math.floor(durationInMilliseconds / 3600000);
  const minutes = Math.floor((durationInMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((durationInMilliseconds % 60000) / 1000);
  return { hours, minutes, seconds };
}

rl.question("\nThis Mathematical formula solves the amount of hours minutes and seconds left on a wall. Intended for Torn City.\nEnter the values that apply to the current situation on your wall\n\nEnter the remaining points left on the wall (R): ", (R) => {
  rl.question("Enter the number of people on the wall (P): ", (P) => {
    R = parseInt(R);
    P = parseInt(P);

    if (Number.isNaN(R) || Number.isNaN(P)) {
      console.log("Please enter valid integers for R and P.");
    } else {
      const { hours, minutes, seconds } = calculateTimeOnWall(R, P);

      console.log(`The time taken to reach ${R} points with ${P} people on the wall is approximately ${Math.floor(hours)} hours, ${Math.floor(minutes)} minutes, and ${Math.floor(seconds)} seconds.`);

      const currentTime = new Date();
      const futureTime = new Date(currentTime.getTime() + hours * 3600000 + minutes * 60000 + seconds * 1000);
      console.log(`At the current rate, you'll finish at: ${futureTime.toISOString().replace('T', ' ').substr(0, 19)}`);

      const { hours: durationHours, minutes: durationMinutes, seconds: durationSeconds } = calculateDuration(futureTime);
      console.log(`Time duration between current time and finish time: ${durationHours} hours, ${durationMinutes} minutes, and ${durationSeconds} seconds.`);
    }

    rl.close();
  });
});
