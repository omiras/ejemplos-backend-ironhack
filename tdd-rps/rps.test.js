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

// Verificar que piedra gana a tijeras
it('should return "Player 1 won!" if player 1 chooses rock and player 2 scissors', () => {
    // Arrange
    const player1 = "rock";
    const player2 = "scissors";

    // Act
    const result = rps(player1, player2);

    // Assert
    expect(result).toBe("Player 1 won!");
})

// Verificar que papel gana a piedra
it('should return "Player 1 won!" if player 1 chooses paper and player 2 chooses rock', ()=> {
     // Arrange
     const player1 = "paper";
     const player2 = "rock";
 
     // Act
     const result = rps(player1, player2);
 
     // Assert
     expect(result).toBe("Player 1 won!");
})

// Verificar que las tijeras ganan a papel
it('should return "Player 1 won!" if player 1 chooses scissors and player 2 chooses paper', ()=> {
      // Arrange
      const player1 = "scissors";
      const player2 = "paper";
  
      // Act
      const result = rps(player1, player2);
  
      // Assert
      expect(result).toBe("Player 1 won!");
})

// verificar que las tijeras pierden contra la roca (gana el jugador 2)
it('should return "Player 2 wins!" if player 1 chooses scissors and player 2 chooses rock', ()=> {
    // Arrange
    const player1 = "scissors";
    const player2 = "rock";

    // Act
    const result = rps(player1, player2);

    // Assert
    expect(result).toBe("Player 2 won!");
})

// verificar que las tijeras pierden contra la roca (gana el jugador 2)
it('should return "Player 2 wins!" if player 1 chooses paper and player 2 chooses scissors', ()=> {
    // Arrange
    const player1 = "paper";
    const player2 = "scissors";

    // Act
    const result = rps(player1, player2);

    // Assert
    expect(result).toBe("Player 2 won!");
})

