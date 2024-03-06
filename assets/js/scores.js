let highScore = JSON.parse(localStorage.getItem('highScore'));
let initials = document.getElementById('initials');
let scores = document.getElementById('scores');

if (localStorage.getItem('highScore') == null) {
    let empty = document.getElementById('heading');
    empty.textContent = "You Don't Have Any Scores Yet!!!";
} else {
    let filled = document.getElementById('heading');
    filled.textContent = 'Top Ten Highscores!!!';
    for (each of highScore) {
        let tempInit = document.createElement('h3');
        let tempScore = document.createElement('h3');
        tempInit.textContent = each[0].initials;
        tempScore.textContent = each[0].highscore;
        initials.append(tempInit);
        scores.append(tempScore);
    }
    
}