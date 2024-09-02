const audios = [
  { pauseWhenAction: false, loop: false, volume: 0.3, type: 'red', name: "Ai", url: './audios/1.mp3' },
  { pauseWhenAction: false, loop: false, volume: 0.9, type: 'red', name: "Reéquiti", url: './audios/2.mp3' },
  { pauseWhenAction: false, loop: false, volume: 0.3, type: 'red', name: "Ele gosta", url: './audios/3.mp3' },
  { pauseWhenAction: false, loop: false, volume: 0.1, type: 'blue', name: 'Lá ele', url: './audios/4.mp3' },
  { pauseWhenAction: false, loop: false, volume: 0.9, type: 'blue', name: "Suspense", url: './audios/5.mp3' },
  { pauseWhenAction: false, loop: false, volume: 0.1, type: 'blue', name: "Palmas", url: './audios/6.mp3' },
  { pauseWhenAction: true, loop: false, volume: 0.3, type: 'yellow', name: 'Para de mandar audio', url: './audios/7.mp3' },
  { pauseWhenAction: true, loop: false, volume: 0.1, type: 'yellow', name: "Faz o Pix", url: './audios/8.mp3' },
  { pauseWhenAction: true, loop: false, volume: 0.3, type: 'yellow', name: "Momento Camarada", url: './audios/12.mp3' },
  { pauseWhenAction: true, loop: true, volume: 0.3, type: 'box', name: "Dupeta Ei", url: './audios/9.mp3' },
  { pauseWhenAction: true, loop: true, volume: 0.3, type: 'box', name: "Chorume News", url: './audios/10.mp3' },
  { pauseWhenAction: true, loop: true, volume: 0.3, type: 'box', name: "Leitura duvidosa", url: './audios/11.mp3' },
];

const padlist = document.getElementById('padlist');
const playingAudios = {};

audios.forEach(audio => {
  const button = document.createElement('button');
  button.className = audio.type;
  button.innerText = audio.name;
  button.onclick = () => handleAudioAction(audio);
  padlist.appendChild(button);
});

function handleAudioAction(audio) {
  const { url, volume, loop, pauseWhenAction } = audio;

  if (pauseWhenAction && playingAudios[url]) {
    playingAudios[url].pause();
    playingAudios[url].currentTime = 0;
    delete playingAudios[url]; 
  } else {
    playAudio(url, volume, loop);
  }
}

function playAudio(url, volume, loop) {
  const audio = new Audio(url);
  audio.volume = volume;
  audio.loop = loop;
  audio.play();

  playingAudios[url] = audio;

  audio.addEventListener('ended', () => {
    delete playingAudios[url];
  });
}