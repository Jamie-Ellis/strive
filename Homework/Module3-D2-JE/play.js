const playAudioTrack = () => {
    let audio = document.querySelector(".isplaying");
    let pausebtn = document.querySelector("#pauseBtn");
    pausebtn.classList.toggle("d-none");
    audio.play();
  };
  const pauseAudioTrack = () => {
    let audio = document.querySelector(".isplaying");
    audio.pause();
  };
  async function getPodcasts() {
    let headerContent = document.querySelector(".sticky-bg");
  
    let title = document.querySelector("#title");
    let search = document.querySelector(".audio");
    title.innerText = search;
    const response = await fetch(
      "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
        search
    );
    const data1 = await response.json();
    const data = data1.data;
    console.log(data1);
    displayPodcasts(data1.data.splice(0, 6));
    playAudio(data1);
    return data;
  }
  
  const playAudio = (data) => {
    const newData = data.data;
    newData.map((element) => getTracks(element));
  };
  