document.addEventListener("DOMContentLoaded", function() {
    let elScore1 = document.getElementById("score1");
    let elScore2 = document.getElementById("score2");
    let elBtn1 = document.getElementById("btn1");
    let elBtn2 = document.getElementById("btn2");
    let elNumber1 = document.getElementById("number1");
    let elNumber2 = document.getElementById("number2");
    let restartBtn = document.getElementById("restartBtn");
    let turn1 = document.getElementById("turn1");
    let turn2 = document.getElementById("turn2");

    let winnerModal = document.getElementById("winnerModal");
    let winnerMessage = document.getElementById("winnerMessage");
    let closeModal = document.getElementById("closeModal");
    let closeModalButton = document.getElementById("closeModalButton");

    let currentPlayer = 1;
    const winningScore = 100;

    // Display initial turn message
    turn1.textContent = "Your turn!";
    turn2.textContent = "";

    elBtn2.disabled = true;

    // Open modal
    function openModal(winner) {
        winnerMessage.textContent = `${winner} wins!`;
        winnerModal.style.display = "flex"; // Show modal
    }

    // Close modal
    function closeModalWindow() {
        winnerModal.style.display = "none";
        restartGame(); // Restart the game after closing the modal
    }

    // Check if any player has won
    function checkWinner() {
        let score1 = parseInt(elScore1.textContent);
        let score2 = parseInt(elScore2.textContent);

        if (score1 >= winningScore) {
            openModal("Player 1");
            endGame();
        } else if (score2 >= winningScore) {
            openModal("Player 2");
            endGame();
        }
    }

    function endGame() {
        elBtn1.disabled = true;
        elBtn2.disabled = true;
    }

    function restartGame() {
        // Reset all scores and numbers
        elScore1.textContent = "0";
        elScore2.textContent = "0";
        elNumber1.textContent = "0";
        elNumber2.textContent = "0";
        currentPlayer = 1;
        elBtn1.disabled = false;
        elBtn2.disabled = true;

        // Reset turn message
        turn1.textContent = "Your turn!";
        turn2.textContent = "";
    }

    elBtn1.addEventListener("click", function() {
        if (currentPlayer === 1) {
            let res = Math.floor(Math.random() * 10);
            elNumber1.textContent = res.toString();
            elScore1.textContent = (parseInt(elScore1.textContent) + res).toString();

            currentPlayer = 2;
            elBtn1.disabled = true;
            elBtn2.disabled = false;

            turn1.textContent = "";
            turn2.textContent = "Your turn!";

            checkWinner();
        }
    });

    elBtn2.addEventListener("click", function() {
        if (currentPlayer === 2) {
            let res = Math.floor(Math.random() * 10);
            elNumber2.textContent = res.toString();
            elScore2.textContent = (parseInt(elScore2.textContent) + res).toString();

            currentPlayer = 1;
            elBtn2.disabled = true;
            elBtn1.disabled = false;

            turn2.textContent = "";
            turn1.textContent = "Your turn!";

            checkWinner();
        }
    });

    restartBtn.addEventListener("click", restartGame);

    // Close modal events
    closeModal.addEventListener("click", closeModalWindow);
    closeModalButton.addEventListener("click", closeModalWindow);
    window.addEventListener("click", function(event) {
        if (event.target === winnerModal) {
            closeModalWindow();
        }
    });
});
