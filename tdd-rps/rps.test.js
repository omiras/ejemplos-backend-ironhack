const { rps } = require('./rps');

// TDD dice que tenemos que crear un test para probar cada una de las entradas posibles. Una estrategia es empezar por la que pueda ser más fácil de implementar

it('should return "Draw!" if both players choose paper', () => {
    // Arrange
    const player1 = "paper";
    const player2 = "paper";

    // Act
    const result = rps(player1, player2);

    // Assert
    expect(result).toBe("Draw!");
})

it('should return "Draw!" if noth players choose rock', () => {
    // Arrange
    const player1 = "rock";
    const player2 = "rock";

    // Act
    const result = rps(player1, player2);

    // Assert
    expect(result).toBe("Draw!");
});

it('should return "Draw!" if both players choose scissors', () => {
    // Arrange
    const player1 = "scissors";
    const player2 = "scissors";

    // Act
    const result = rps(player1, player2);

    // Assert
    expect(result).toBe("Draw!");
});

