document.body.addEventListener("keyup", (e) => {
  playSound(e.code.toLocaleLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;

  if (song !== "") {
    // Transforma em array
    let songArray = song.split("");
    playComposition(songArray);
  }
});

function playSound(sound) {
  // Pega o elemento baseado na tecla digitada
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  // Verifica se o elemento existe
  if (audioElement) {
    audioElement.play();
  }
  // Verifica se o elemento existe
  if (keyElement) {
    audioElement.currentTime = 0;
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}

function playComposition(songArray) {
  let wait = 0;

  for (let i of songArray) {
    setTimeout(() => {
      playSound(`key${i}`);
    }, wait);

    wait += 280;
  }
}
