var box0 = document.getElementById('game-box0');
var box1 = document.getElementById('game-box1');
var box2 = document.getElementById('game-box2');
var box3 = document.getElementById('game-box3');
var box4 = document.getElementById('game-box4');
var box5 = document.getElementById('game-box5');
var box6 = document.getElementById('game-box6');
var box7 = document.getElementById('game-box7');
var box8 = document.getElementById('game-box8');

const playerFactory = (marker) => {
    this.marker = marker;
    const won = () => {
        game.showScore(marker);
        game.reset();
    };
    return {won};
};

const player1 = playerFactory('X');
const player2 = playerFactory('O');

const game = (() => {
    const showScore = (marker) => {
        var h1Element = document.createElement('h1');
        h1Element.textContent = marker + ' Won';

        var blurStyle = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; backdrop-filter: blur(10px);';

        var containerDiv = document.createElement('div');
        containerDiv.style.textAlign = 'center';
        containerDiv.style.cssText = blurStyle + ' display: flex; justify-content: center; align-items: center; flex-direction: column;';

        containerDiv.appendChild(h1Element);

        document.body.appendChild(containerDiv);

        setTimeout(function() {
            containerDiv.remove();
        }, 1500);
        if(marker === 'X') {
            counter = 1;
        }else if(marker === 'O'){
            counter = 2;
        }
    };
    const showTie = () => {
        var h1Element = document.createElement('h1');
        h1Element.textContent = 'IT IS A TIE';

        var blurStyle = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; backdrop-filter: blur(10px);';

        var containerDiv = document.createElement('div');
        containerDiv.style.textAlign = 'center';
        containerDiv.style.cssText = blurStyle + ' display: flex; justify-content: center; align-items: center; flex-direction: column;';

        containerDiv.appendChild(h1Element);

        document.body.appendChild(containerDiv);

        setTimeout(function() {
            containerDiv.remove();
        }, 1500);
        counter = 1;
    };
    const reset = () => {
        box0.textContent = '';
        box1.textContent = '';
        box2.textContent = '';
        box3.textContent = '';
        box4.textContent = '';
        box5.textContent = '';
        box6.textContent = '';
        box7.textContent = '';
        box8.textContent = '';
        for(let i = 0; i < clicked.length; i++){
            clicked[i] = false;
        }
        gameCounter = 0;
    };
    const check = (player1, player2) => {
        if (box0.textContent === 'X' && box1.textContent === 'X' && box2.textContent === 'X') {
            player1.won();
        } else if (box0.textContent === 'O' && box1.textContent === 'O' && box2.textContent === 'O') {
            player2.won();
        } else if (box3.textContent === 'X' && box4.textContent === 'X' && box5.textContent === 'X') {
            player1.won();
        } else if (box3.textContent === 'O' && box4.textContent === 'O' && box5.textContent === 'O') {
            player2.won();
        } else if (box6.textContent === 'X' && box7.textContent === 'X' && box8.textContent === 'X') {
            player1.won();
        } else if (box6.textContent === 'O' && box7.textContent === 'O' && box8.textContent === 'O') {
            player2.won();
        } else if (box0.textContent === 'X' && box4.textContent === 'X' && box8.textContent === 'X') {
            player1.won();
        } else if (box0.textContent === 'O' && box4.textContent === 'O' && box8.textContent === 'O') {
            player2.won();
        } else if (box2.textContent === 'X' && box4.textContent === 'X' && box6.textContent === 'X') {
            player1.won();
        } else if (box2.textContent === 'O' && box4.textContent === 'O' && box6.textContent === 'O') {
            player2.won();
        } else if (box0.textContent === 'X' && box3.textContent === 'X' && box6.textContent === 'X') {
            player1.won();
        } else if (box0.textContent === 'O' && box3.textContent === 'O' && box6.textContent === 'O') {
            player2.won();
        } else if (box1.textContent === 'X' && box4.textContent === 'X' && box7.textContent === 'X') {
            player1.won();
        } else if (box1.textContent === 'O' && box4.textContent === 'O' && box7.textContent === 'O') {
            player2.won();
        } else if (box2.textContent === 'X' && box5.textContent === 'X' && box8.textContent === 'X') {
            player1.won();
        } else if (box2.textContent === 'O' && box5.textContent === 'O' && box8.textContent === 'O') {
            player2.won();
        } else if (gameCounter == 9){
            showTie();
            reset();
        }
    };
    var counter = 1;
    var clicked = [false, false, false, false, false, false, false, false, false];
    var gameCounter = 0;
    const changeContent0 = () => {
        if(clicked[0] == false){
            if(counter % 2 == 1){
                box0.textContent = 'X';
                counter++;
                gameCounter++;
                clicked[0] = true;
                game.check(player1, player2);
            }else if(counter % 2 == 0){
                box0.textContent = 'O';
                counter++;
                gameCounter++;
                clicked[0] = true;
                game.check(player1, player2);
            }
        }
    };
    const changeContent1 = () => {
        if(clicked[1] == false){
            if(counter % 2 == 1){
                box1.textContent = 'X';
                counter++;
                gameCounter++;
                clicked[1] = true;
                game.check(player1, player2);
            }else if(counter % 2 == 0){
                box1.textContent = 'O';
                counter++;
                gameCounter++;
                clicked[1] = true;
                game.check(player1, player2);
            }
        }
    };
    const changeContent2 = () => {
        if(clicked[2] == false){
            if(counter % 2 == 1){
                box2.textContent = 'X';
                counter++;
                gameCounter++;
                clicked[2] = true;
                game.check(player1, player2);
            }else if (counter % 2 == 0){
                box2.textContent = 'O';
                counter++;
                gameCounter++;
                clicked[2] = true;
                game.check(player1, player2);
            }
        }
    };
    const changeContent3 = () => {
        if(clicked[3] == false){
            if(counter % 2 == 1){
                box3.textContent = 'X';
                counter++;
                gameCounter++;
                clicked[3] = true;
                game.check(player1, player2);
            }else if (counter % 2 == 0){
                box3.textContent = 'O';
                counter++;
                gameCounter++;
                clicked[3] = true;
                game.check(player1, player2);
            }
        }
    };
    const changeContent4 = () => {
        if(clicked[4] == false){
            if(counter % 2 == 1){
                box4.textContent = 'X';
                counter++;
                gameCounter++;
                clicked[4] = true;
                game.check(player1, player2);
            }else if (counter % 2 == 0){
                box4.textContent = 'O';
                counter++;
                gameCounter++;
                clicked[4] = true;
                game.check(player1, player2);
            }
        }
    };
    const changeContent5 = () => {
        if(clicked[5] == false){
            if(counter % 2 == 1){
                box5.textContent = 'X';
                counter++;
                gameCounter++;
                clicked[5] = true;
                game.check(player1, player2);
            }else if (counter % 2 == 0){
                box5.textContent = 'O';
                counter++;
                gameCounter++;
                clicked[5] = true;
                game.check(player1, player2);
            }
        }
    };
    const changeContent6 = () => {
        if(clicked[6] == false){
            if(counter % 2 == 1){
                box6.textContent = 'X';
                counter++;
                gameCounter++;
                clicked[6] = true;
                game.check(player1, player2);
            }else if (counter % 2 == 0){
                box6.textContent = 'O';
                counter++;
                gameCounter++;
                clicked[6] = true;
                game.check(player1, player2);
            }
        }
    };
    const changeContent7 = () => {
        if(clicked[7] == false){
            if(counter % 2 == 1){
                box7.textContent = 'X';
                counter++;
                gameCounter++;
                clicked[7] = true;
                game.check(player1, player2);
            }else if (counter % 2 == 0){
                box7.textContent = 'O';
                counter++;
                gameCounter++;
                clicked[7] = true;
                game.check(player1, player2);
            }
        }
    };
    const changeContent8 = () => {
        if(clicked[8] == false){
            if(counter % 2 == 1){
                box8.textContent = 'X';
                counter++;
                gameCounter++;
                clicked[8] = true;
                game.check(player1, player2);
            }else if (counter % 2 == 0){
                box8.textContent = 'O';
                counter++;
                gameCounter++;
                clicked[8] = true;
                game.check(player1, player2);
            }

        }
    };
    return {
      check,
      changeContent0,
      changeContent1,
      changeContent2,
      changeContent3,
      changeContent4,
      changeContent5,
      changeContent6,
      changeContent7,
      changeContent8,
      reset,
      showScore,
      showTie
    };
})();