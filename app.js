let homeScore = 0
let awayScore = 0


function increaseHomeScore() {
  homeScore++
  console.log('homeScore', homeScore);

  run()
}
function increaseAwayScore() {
  awayScore++
  console.log('awayScore', awayScore);

  run()
}

function run() {
  document.getElementById('homeBeginScore').innerText = homeScore
  document.getElementById('awayBeginScore').innerText = awayScore
}