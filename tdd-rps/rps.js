// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

function rps(player1, player2) {
    if (player1 == player2) {
        return "Draw!";
    }

    if ((player1 == "rock" && player2 == "scissors") || (player1 == "paper" && player2 == "rock")) {
        return "Player 1 won!"
    }



}

module.exports = {
    rps
}