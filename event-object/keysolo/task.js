class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.currentSymbol = container.querySelector('.symbol');

    this.reset();

    this.registerEvents();
  }
  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }
  registerEvents() {
     let targetSymbol = this.currentSymbol.textContent.toLowerCase().charCodeAt(0);
     let x = false;

     function pressedKey(event) {
      let pressedKey = event.key.toLowerCase().charCodeAt(0);
      if (targetSymbol !== pressedKey) {
        x = true;
      } else {
        x = false;
      }
      console.log(event, x);
     }

     document.addEventListener('keydown', pressedKey);

     if (x = true) {
      this.fail();
     } else {
      this.success();
     }

     document.addEventListener('keydown', (event) => {
     	let keyboardSymbol = event.key.toLowerCase().charCodeAt(0);
     	let targetSymbol = this.currentSymbol.textContent.toLowerCase().charCodeAt(0);
     	if (keyboardSymbol === targetSymbol) {
     		this.success();
     	} else {
     		this.fail();
     	}
     });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }
    if (++this.winsElement.textContent === 10) {
      alert('Поздравляем, Вы победили)))!');
      this.reset();
    }
    this.setNewWord();
  }
  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!(((');
      this.reset();
    }
    this.setNewWord();
  }
  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
  }
  getWord() {
    const words = [
        'desteny',
        'london',
        'netology',
        'green',
        'html',
        'css',
        'tourist',
        'great',
        'washington',
        'portrait',
        'photo'
      ],
      index = Math.floor(Math.random() * words.length);
    return words[index];
  }
  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}
new Game(document.getElementById('game'))