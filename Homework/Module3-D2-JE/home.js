const removeGradient = () => {
    let navbar = document.querySelector(".navbar");
    navbar.style.backgroundImage =
      "linear-gradient(rgba(185, 75, 179, 0), #131518)";
  };
  const changeBackgroundColor = () => {
    let navbar = document.querySelector(".navbar");
    colors = [
      "linear-gradient(rgba(185, 75, 179, 0.24), #131518)",
      "linear-gradient(rgba(185, 75, 75, 0.24), #131518)",
      "linear-gradient(rgba(238, 202, 202, 0.322), #131518)",
      "linear-gradient(rgba(46, 107, 165, 0.24), #131518)",
      "linear-gradient(rgba(46, 165, 159, 0.24), #131518)",
      "linear-gradient(rgba(46, 165, 76, 0.24), #131518)",
      "linear-gradient(rgba(104, 165, 46, 0.24), #131518)",
      "linear-gradient(rgba(165, 153, 46, 0.24), #131518)",
      "linear-gradient(rgba(165, 117, 46, 0.24), #131518)",
      "linear-gradient(rgba(11, 17, 92, 0.363), #131518)",
      "linear-gradient(rgba(92, 11, 52, 0.719), #131518)",
    ];
    navbar.style.opacity = "0";
    navbar.style.backgroundImage =
      colors[Math.floor(Math.random() * colors.length)];
    setTimeout(function () {
      navbar.style.opacity = "1";
    }, 500);
  };
  

  const showData4 = () => {
    throwbackPlaylists.forEach(async (id) => {
      await showAlbums(id);
      async function showAlbums(id) {
        const response = await fetch(playlistURL + id);
        const data = await response.json();
        
        console.log(data);
  
        let firstRow = document.getElementById("throwback-playlists");
        firstRow.classList.add("row");
        firstRow.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 music-album-card bg">
        <div class="bgSpotify">
          <div class="divCover">
            <div
              class="coverImg"
              style="background-image: url('/WeBeVibin.jpg')"
            >
              <div>
                <img
                  aria-hidden="false"
                  draggable="false"
                  loading="lazy"
                  src="${data.picture}"
                  alt=""
                />
              </div>
            </div>
            <div class="buttonDiv invisible">
              <button class="playButton">
                <svg
                  height="16"
                  role="img"
                  width="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="5"
                    y="3"
                    width="4"
                    height="18"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="15"
                    y="3"
                    width="4"
                    height="18"
                    fill="currentColor"
                  ></rect>
                </svg>
              </button>
            </div>
          </div>
          <div class="card-body">
            <a class="title" href="">
              <div class="titleScroll">${data.title}</div>
            </a>
            <div class="info">
              <span>${data.description}</span>
            </div>
          </div>
        </div>
      </div>`;
  
        return data;
      }
    });
  };
  // const directToNewPage = () =>{
  //   let a= document.querySelector(".title")
  //   a.addEventListener("click", newContent())
  // }
  // const emptyContent = () =>{
  //   let box = document.querySelector(".box");
  //   box.classList.add("invisible")
  // }
  
  // const addContent = () =>{
  //   let div = document.createElement("div")
  //   div.classList.add("container-fluid")
  //   div.setAttribute("id", "magic-container")
  //     throwbackPlaylists.forEach(async (id) => {
  //       await showAlbums(id);
  //       async function showAlbums(id) {
  //         const response = await fetch(playlistURL + id);
  //         const data = await response.json();
          
  //         console.log(data);
    
  //         let firstRow = document.getElementById("throwback-playlists");
  //         firstRow.classList.add("row");
  //         firstRow.innerHTML +=
  // }
  //     });
  // }
  window.onload =showData4();
  