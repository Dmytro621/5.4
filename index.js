      let input = prompt("Введіть ціле число:");
      let number = parseInt(input);

      if (!isNaN(number)) {
        let isPrime = true;

        if (number <= 1) {
          isPrime = false;
        } else if (number >= 1) {
          for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
              isPrime = false;
              break;
            }
          }
        }

        if (isPrime) {
          alert(`${number} є простим числом.`);
        } else {
          alert(`${number} не є простим числом.`);
        }
      } else {
        alert("Це не число");
      }