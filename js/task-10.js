function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes() {
    const amount = document.getElementById('inputAmount').value;

    if (isNaN(amount) || amount <= 0) {
      alert('Podaj liczbę większą od zera.');
      return;
    }

    const boxesContainer = document.getElementById('boxes');

    const boxesCollection = [];

    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesCollection.push(box);

      boxSize += 10;
    }

    boxesContainer.append(...boxesCollection);
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }