
     let round =1;
     function randomNumber() {
      return new Promise(resolve => setTimeout(() => {
        const number = Math.floor(Math.random() * 10);
        resolve(number);
      }, 2000));
    }

     async function startGame(round) {
      console.log("Wait 2 second . . .");
      const number = await randomNumber();
      console.log("Num " + round + " : " + number );
        if (number % 2 !== 0) {
          console.log("You lost");
          return;
        }

        if (round === 3) {
          console.log("You win");
          return;
        }
        startGame(round + 1);
    }
      startGame(round);