// ===============================
// ALBUMS DATA
// ===============================
// Elk album heeft: titel, artiest, mood, map, cover-afbeelding en tracklist.
// De volgorde van tracks moet exact overeenkomen met de bestandsnamen in je map.

const albums = [
    {
        id: "rodeo",
        title: "Rodeo",
        artist: "Travis Scott",
        mood: "Night Drive",
        folder: "assets/music/rodeo/",
        cover: "assets/music/rodeo/plaatje1.png",
        tracks: [
            "01 Pornography.mp3",
            "02 Oh My Dis Side.mp3",
            "03 3500.mp3",
            "04 Wasted.mp3",
            "05 90210.mp3",
            "06 Pray 4 Love.mp3",
            "07 Nightcrawler.mp3",
            "08 Piss On Your Grave.mp3",
            "09 Antidote.mp3",
            "10 Impossible.mp3",
            "11 Maria I'm Drunk.mp3",
            "12 Flying High.mp3",
            "13 I Can Tell.mp3",
            "14 Apple Pie.mp3"
        ]
    },
    {
        id: "takecare",
        title: "Take Care",
        artist: "Drake",
        mood: "Chill",
        folder: "assets/music/takecare/",
        cover: "assets/music/takecare/plaatje2.png",
        tracks: [
            "Drake - Over My Dead Body.mp3",
            "Drake - Shot For Me.mp3",
            "Drake - Headlines.mp3",
            "Drake, The Weeknd - Crew Love.mp3",
            "Drake, Rihanna - Take Care.mp3",
            "Drake - Marvins Room.mp3",
            "Drake, Kendrick Lamar - Buried Alive Interlude.mp3", // CHECK bestandsnaam
            "Drake - Under Ground Kings.mp3",
            "Drake, Birdman - We'll Be Fine.mp3",
            "Drake, Nicki Minaj - Make Me Proud.mp3", // CHECK bestandsnaam
            "Drake, Rick Ross - Lord Knows.mp3",
            "Drake - Cameras  Good Ones Go Interludes.mp3", // CHECK bestandsnaam
            "Drake - Doing It Wrong.mp3",
            "Drake, Lil Wayne, André 3000 - The Real Her.mp3", // CHECK bestandsnaam
            "Drake - Look What You've Done.mp3",
            "Drake, Lil Wayne - HYFR (Hell Ya Fuckin Right).mp3", // CHECK bestandsnaam
            "Drake - Practice.mp3",
            "Drake - The Ride.mp3"
        ]
    },
    {
        id: "thankmelater",
        title: "Thank Me Later",
        artist: "Drake",
        mood: "Chill",
        folder: "assets/music/thankmelater/",
        cover: "assets/music/thankmelater/plaatje3.png",
        tracks: [
            "Drake - Karaoke.mp3",
            "Drake - The Resistance.mp3",
            "Drake, Alicia Keys - Fireworks.mp3",
            "Drake - Show Me A Good Time.mp3",
            "Drake, Nicki Minaj - Up All Night.mp3",
            "Drake, T.I., Swizz Beatz - Fancy.mp3",
            "Drake, Jeezy - Unforgettable.mp3",
            "Drake, JAY-Z - Light Up.mp3",
            "Drake, Lil Wayne - Miss Me.mp3",
            "Drake - Cece's Interlude.mp3",
            "Drake - Find Your Love.mp3",
            "Drake, The-Dream - Shut It Down.mp3", // CHECK bestandsnaam
            "Drake - Thank Me Now.mp3",
            "Drake - Best I Ever Had.mp3",
            "Drake - Over.mp3"
        ]
    },
    {
        id: "watttba",
        title: "What A Time To Be Alive",
        artist: "Drake & Future",
        mood: "Workout",
        folder: "assets/music/what-a-time-to-be-alive/",
        cover: "assets/music/what-a-time-to-be-alive/plaatje4.png",
        tracks: [
            "Drake, Future - Digital Dash.mp3",
            "Drake, Future - Big Rings.mp3",
            "Drake, Future - Live From The Gutter.mp3", // CHECK bestandsnaam
            "Drake, Future - Diamonds Dancing.mp3", // CHECK bestandsnaam
            "Drake, Future - Scholarships.mp3",
            "Drake, Future - Jumpman.mp3",
            "Drake, Future - Change Locations.mp3",
            "Drake - 30 for 30 Freestyle.mp3",
            "Drake, Future - I'm The Plug.mp3",
            "Drake, Future - Plastic Bag.mp3",
            "Future - Jersey.mp3"
        ]
    },
    {
        id: "ss4u",
        title: "SS4U",
        artist: "Various Artists",
        mood: "Chill",
        folder: "assets/music/SS4U/",
        cover: "assets/music/SS4U/plaatj5.png",
        tracks: [
            "01 CN TOWER.mp3",
            "02 MOTH BALLS.mp3",
            "03 SOMETHING ABOUT YOU.mp3",
            "04 GLORIOUS.mp3",
            "05 OMW.mp3",
            "06 CELIBACY.mp3",
            "07 SOMEBODY LOVES ME.mp3",
            "08 DIE TRYING.mp3",
            "09 NOKIA.mp3",
            "10 MEET YOUR PADRE.mp3",
            "11 LASERS.mp3",
            "12 RAINING IN HOUSTON.mp3",
            "13 GIMME A HUG.mp3",
            "14 BRIAN STEEL.mp3",
            "15 PIMMIE'S DILEMMA.mp3",
            "16 SMALL TOWN FAME.mp3",
            "17 DEEPER.mp3",
            "18 SPIDER-MAN SUPERMAN.mp3",
            "19 CRYING IN CHANEL.mp3",
            "20 WHEN HE'S GONE.mp3",
            "21 GREEDY.mp3"
        ]
    },
    {
        id: "bully",
        title: "BULLY",
        artist: "Ye",
        mood: "Night Drive",
        folder: "assets/music/BULLY/",
        cover: "assets/music/BULLY/plaatje6.png",
        tracks: [
            "YE - ALL THE LOVE (feat. ANDRÉ TROUTMAN).mp3",
            "YE - BEAUTY AND THE BEAST.mp3",
            "YE - BULLY (feat. CEELO GREEN).mp3",
            "YE - CIRCLES (feat. DON TOLIVER).mp3",
            "YE - DAMN.mp3",
            "YE - FATHER (feat. TRAVIS SCOTT).mp3",
            "YE - HIGHS AND LOWS.mp3",
            "YE - I CAN’T WAIT.mp3",
            "YE - KING.mp3",
            "YE - LAST BREATH (feat. PESO PLUMA).mp3",
            "YE - MAMA'S FAVORITE.mp3",
            "YE - PREACHER MAN.mp3",
            "YE - PUNCH DRUNK.mp3",
            "YE - SISTERS AND BROTHERS.mp3",
            "YE - THIS A MUST.mp3",
            "YE - THIS ONE HERE.mp3",
            "YE - WHATEVER WORKS.mp3",
            "YE - WHITE LINES (feat. ANDRÉ TROUTMAN).mp3"
        ]
    },
    {
        id: "thecollagedropout",
        title: "The Collage Dropout",
        artist: "Kanye West",
        mood: "Chill",
        folder: "assets/music/TheCollageDropout/",
        cover: "assets/music/TheCollageDropout/plaatje7.png",
        tracks: [
            "All Falls Down.mp3",
            "Family Business.mp3",
            "Get Em High.mp3",
            "Graduation Day.mp3",
            "I'll Fly Away.mp3",
            "Intro.mp3",
            "Jesus Walks.mp3",
            "Last Call.mp3",
            "Never Let Me Down.mp3",
            "School Spirit Skit 1.mp3",
            "School Spirit.mp3",
            "Slow Jamz.mp3",
            "Spaceship.mp3",
            "The New Workout Plan.mp3",
            "Two Words.mp3",
            "We Don't Care.mp3",
            "Workout Plan(3).mp3"
        ]
    },
    {
        id: "chromakopia",
        title: "Chromakopia",
        artist: "Tyler, The Creator",
        mood: "Night Drive",
        folder: "assets/music/Chromakopia/",
        cover: "assets/music/Chromakopia/plaatj8.png",
        tracks: [
            "01. St. Chroma.mp3",
            "02. Rah Tah Tah.mp3",
            "03. Noid.mp3",
            "04. Darling, I.mp3",
            "05. Hey Jane.mp3",
            "06. I Killed You.mp3",
            "07. Judge Judy.mp3",
            "08. Sticky.mp3",
            "09. Take Your Mask Off.mp3",
            "10. Tomorrow.mp3",
            "11. Thought I Was Dead.mp3",
            "12. Like Him.mp3",
            "13. Balloon.mp3",
            "14. I Hope You Find Your Way Home.mp3"
        ]
    },
    {
        id: "mycreations",
        title: "My Creations",
        artist: "You",
        mood: "Custom",
        folder: "",
        cover: "",
        tracks: []
    }
];


let currentAlbum = 0;
let currentTrack = 0;
let isPlaying = false;
let favoritesFilter = false;



const savedFavorites = JSON.parse(localStorage.getItem("sonicflow-favorites") || "[]");
const favorites = Array.isArray(savedFavorites) ? savedFavorites : [];
 
const audio = new Audio();
 
const playButton = document.querySelector(".play-button");
const progressFill = document.querySelector(".progress-fill");
 
const playerTitle = document.querySelector(".player-song h4");
const playerArtist = document.querySelector(".player-song p");
 
const songTitle = document.querySelector(".song-info h3");
const songArtist = document.querySelector(".song-info p:last-child");
 
const moodButtons = document.querySelectorAll(".mood");
 
const albumCover = document.querySelector(".album-cover");
const coverArt = document.querySelector(".cover-art");
const miniCover = document.querySelector(".mini-cover");

const songGrid = document.querySelector(".song-grid");
const sidebarAlbums = document.querySelector(".sidebar-albums");
const favoritesList = document.querySelector(".favorites-list");
const searchInput = document.querySelector("#searchInput");
const favoritesLink = document.querySelectorAll("nav a")[2];
const lyricsText = document.querySelector("#lyricsText");
const canvas = document.getElementById("visualizer");
const canvasCtx = canvas.getContext("2d");

let audioContext;
let analyser;
let source;
let dataArray;
let bufferLength;
 
 
// ===============================
// HELPER: bestandsnaam -> nette titel
// ===============================
 
function trackTitle(fileName) {
 
    let title = fileName.replace(/\.mp3$/i, "");
 
    // verwijder leidend tracknummer, bv. "01 "
    title = title.replace(/^\d+\s+/, "");
 
    // verwijder "Artiest - " of "Artiest, Artiest2 - " ervoor
    // (knip op " - " met spaties, anders gaat het mis bij The-Dream of JAY-Z)
    title = title.replace(/^.*?\s-\s+/, "");
 
    return title;
}
 
 
// ===============================
// NUMMER LADEN
// ===============================
 
function loadSong(albumIndex, trackIndex) {
 
    const album = albums[albumIndex];
 
    if (!album.tracks.length) {
        return;
    }
 
    currentAlbum = albumIndex;
    currentTrack = trackIndex;
 
    const track = album.tracks[currentTrack];
 
    let title;
 
    if (typeof track === "string") {
 
        audio.src = album.folder + track;
        title = trackTitle(track);
 
    } else {
 
        audio.src = track.url;
        title = track.title;
 
    }
 
    playerTitle.textContent = title;
    playerArtist.textContent = album.artist;
 
    songTitle.textContent = title;
    songArtist.textContent = `${album.artist} • ${album.title}`;
 
    progressFill.style.width = "0%";
 
    setAlbumCover(album.cover);

    if (miniCover) {
        if (album.cover) {
            miniCover.style.backgroundImage = `url('${album.cover}')`;
            miniCover.style.backgroundSize = "cover";
            miniCover.style.backgroundPosition = "center";
            miniCover.style.backgroundRepeat = "no-repeat";
        } else {
            miniCover.style.backgroundImage = "linear-gradient(135deg, #D4A33D, #241B15)";
        }
    }

    document.querySelectorAll(".song-card").forEach((card) => {
        card.classList.toggle(
            "active-album",
            Number(card.dataset.index) === albumIndex
        );
    });
 
    document.querySelectorAll(".sidebar-albums a").forEach((link) => {
        link.classList.toggle(
            "active-album",
            Number(link.dataset.index) === albumIndex
        );
    });

    updateFavoriteButton();
    showLyricsForCurrentTrack();
}
 
 
// ===============================
// CROSS-FADE ALBUMCOVER
// ===============================
// Vervaagt de huidige cover eerst weg voor de bron wisselt,
// en vervaagt daarna in i.p.v. abrupt te verspringen.

function setAlbumCover(url) {

    if (!url) {
        coverArt.style.opacity = "0";
        albumCover.classList.remove("has-art");
        coverArt.dataset.currentSrc = "";
        return;
    }

    // zelfde cover als nu? dan hoeft er niks te faden
    if (coverArt.dataset.currentSrc === url) {
        coverArt.style.opacity = "1";
        albumCover.classList.add("has-art");
        return;
    }

    // stap 1: weg-faden
    coverArt.style.opacity = "0";

    setTimeout(() => {

        // stap 2: bron wisselen terwijl hij onzichtbaar is
        coverArt.src = url;
        coverArt.dataset.currentSrc = url;

    }, 220);
}

coverArt.addEventListener("load", () => {
    // stap 3: weer in-faden zodra de nieuwe afbeelding geladen is
    coverArt.style.opacity = "1";
    albumCover.classList.add("has-art");
});
 
coverArt.addEventListener("error", () => {
    albumCover.classList.remove("has-art");
});
 
 
// ===============================
// AUDIO VISUALIZER SETUP
// ===============================
 
function setupVisualizer() {
 
    if (audioContext) {
        return;
    }
 
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
 
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
 
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
 
    source = audioContext.createMediaElementSource(audio);
 
    source.connect(analyser);
    analyser.connect(audioContext.destination);
}
 
 
function drawVisualizer() {
 
    requestAnimationFrame(drawVisualizer);
 
    if (!analyser) {
        return;
    }
 
    analyser.getByteFrequencyData(dataArray);
 
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
 
    const barWidth = (canvas.width / bufferLength) * 1.8;
    let x = 0;
 
    for (let i = 0; i < bufferLength; i++) {
 
        const barHeight = dataArray[i] * 0.5;
 
        const gradient = canvasCtx.createLinearGradient(
            0, canvas.height, 0, canvas.height - barHeight
        );
 
        gradient.addColorStop(0, "rgba(212, 163, 61, 0.9)");
        gradient.addColorStop(1, "rgba(178, 67, 46, 0.9)");
 
        canvasCtx.fillStyle = gradient;
 
        canvasCtx.fillRect(
            x,
            canvas.height - barHeight,
            barWidth,
            barHeight
        );
 
        x += barWidth + 2;
    }
}
 
drawVisualizer();
 
 
// ===============================
// PLAY / PAUSE
// ===============================
 
function playAudio() {
 
    setupVisualizer();
 
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
 
    audio.play();
 
    playButton.textContent = "Ⅱ";
 
    isPlaying = true;
}
 
 
function togglePlay() {
 
    setupVisualizer();
 
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
 
    if (isPlaying) {
 
        audio.pause();
 
        playButton.textContent = "▶";
 
        isPlaying = false;
 
    } else {
 
        audio.play();
 
        playButton.textContent = "Ⅱ";
 
        isPlaying = true;
 
    }
}
 
playButton.addEventListener("click", togglePlay);
 
 
// ===============================
// VOLGEND / VORIG NUMMER (binnen het huidige album)
// ===============================
 
function nextSong() {
 
    const album = albums[currentAlbum];
 
    let index = currentTrack + 1;
 
    if (index >= album.tracks.length) {
        index = 0;
    }
 
    loadSong(currentAlbum, index);
    playAudio();
}
 
 
function previousSong() {
 
    const album = albums[currentAlbum];
 
    let index = currentTrack - 1;
 
    if (index < 0) {
        index = album.tracks.length - 1;
    }
 
    loadSong(currentAlbum, index);
    playAudio();
}
 
 
const controls =
    document.querySelectorAll(".controls button");
 
controls[0].addEventListener("click", previousSong);
controls[2].addEventListener("click", nextSong);
 
 
// ===============================
// PROGRESSBAR
// ===============================
 
audio.addEventListener("timeupdate", () => {
 
    if (!audio.duration) {
        return;
    }
 
    const progress =
        (audio.currentTime / audio.duration) * 100;
 
    progressFill.style.width = `${progress}%`;
 
});
 
 
// ===============================
// NUMMER IS AFGELOPEN
// ===============================
 
audio.addEventListener("ended", () => {
    nextSong();
});
 
 
// ===============================
// SURPRISE ME (random album + random nummer)
// ===============================
 
function surpriseMe() {
 
    const playableAlbums = albums.filter((a) => a.tracks.length > 0);
 
    if (!playableAlbums.length) {
        return;
    }
 
    const randomAlbum =
        playableAlbums[Math.floor(Math.random() * playableAlbums.length)];
 
    const albumIndex = albums.indexOf(randomAlbum);
 
    const trackIndex =
        Math.floor(Math.random() * randomAlbum.tracks.length);
 
    loadSong(albumIndex, trackIndex);
    playAudio();
}
 
 
// ===============================
// MOOD KNOPPEN
// ===============================
 
moodButtons.forEach((button) => {
 
    button.addEventListener("click", () => {
 
        moodButtons.forEach((btn) => {
            btn.classList.remove("active-mood");
        });
 
        button.classList.add("active-mood");
 
        const moodName = button.textContent.trim();
 
        if (moodName.includes("Surprise")) {
 
            surpriseMe();
 
        } else {
 
            const match = albums.find(
                (a) => a.mood === moodName && a.tracks.length > 0
            );
 
            if (match) {
 
                const albumIndex = albums.indexOf(match);
 
                loadSong(albumIndex, 0);
                playAudio();
 
            }
 
        }
 
    });
 
});
 
 
// ===============================
// HEART BUTTON
// ===============================
 
const heartButton = document.querySelector(".heart");

function saveFavorites() {
    localStorage.setItem("sonicflow-favorites", JSON.stringify(favorites));
    renderFavoritesList();
    renderAlbumGrid(getFilteredAlbumIndices());
    renderSidebarAlbums(getFilteredAlbumIndices());
}

function updateFavoriteButton() {
    const albumId = albums[currentAlbum]?.id;
    const isLiked = !!albumId && favorites.includes(albumId);
    heartButton.textContent = isLiked ? "❤" : "♡";
    heartButton.classList.toggle("liked-state", isLiked);
}

heartButton.addEventListener("click", () => {
 
    const albumId = albums[currentAlbum]?.id;
    if (!albumId) {
        return;
    }

    const alreadyFav = favorites.includes(albumId);
    if (alreadyFav) {
        const index = favorites.indexOf(albumId);
        if (index >= 0) {
            favorites.splice(index, 1);
        }
    } else {
        favorites.push(albumId);
    }

    updateFavoriteButton();
    saveFavorites();
 
    heartButton.classList.add("liked");
 
    setTimeout(() => {
        heartButton.classList.remove("liked");
    }, 350);
 
});
 
 
// ===============================
// ALBUM COVER 3D MOUSE EFFECT
// ===============================
 
albumCover.addEventListener("mousemove", (event) => {
 
    const rect = albumCover.getBoundingClientRect();
 
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
 
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
 
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
 
    albumCover.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;
});
 
 
albumCover.addEventListener("mouseleave", () => {
 
    albumCover.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
 
});
 
 
// ===============================
// ALBUM COVER PLAY ANIMATION
// ===============================
 
audio.addEventListener("play", () => {
    albumCover.classList.add("playing");
});
 
audio.addEventListener("pause", () => {
    albumCover.classList.remove("playing");
});
 
 
function getFilteredAlbumIndices() {
    const base = searchInput.value
        ? searchAlbums(searchInput.value)
        : albums.map((album, index) => index);

    if (!favoritesFilter) {
        return base;
    }

    return base.filter((index) => favorites.includes(albums[index].id));
}

function renderFavoritesList() {
    if (!favoritesList) {
        return;
    }

    favoritesList.innerHTML = "";

    if (!favorites.length) {
        const empty = document.createElement("span");
        empty.className = "favorites-empty";
        empty.textContent = "No favorites yet";
        favoritesList.appendChild(empty);
        return;
    }

    favorites.forEach((albumId) => {
        const album = albums.find((entry) => entry.id === albumId);
        if (!album) {
            return;
        }

        const item = document.createElement("button");
        item.type = "button";
        item.className = "favorite-pill";
        item.textContent = album.title;

        item.addEventListener("click", () => {
            const albumIndex = albums.findIndex((entry) => entry.id === albumId);
            if (albumIndex >= 0 && albums[albumIndex].tracks.length) {
                loadSong(albumIndex, 0);
                playAudio();
            }
        });

        favoritesList.appendChild(item);
    });
}

function renderAlbumGrid(indices) {
 
    const list = indices || getFilteredAlbumIndices();
 
    songGrid.innerHTML = "";
 
    if (!list.length) {
 
        const empty = document.createElement("p");
        empty.className = "no-results";
        empty.textContent = favoritesFilter
            ? "Je hebt nog geen favoriete albums."
            : "Geen albums of nummers gevonden.";
 
        songGrid.appendChild(empty);
        return;
    }
 
    list.forEach((albumIndex) => {
 
        const album = albums[albumIndex];
 
        const card = document.createElement("div");
        card.className = "song-card";
        card.dataset.index = albumIndex;
 
        const trackCount = album.tracks.length;
 
        card.innerHTML = `
            <div class="card-cover" style="background-image: url('${album.cover}')">
                <span class="card-tag">${album.mood}</span>
            </div>
            <h3>${album.title}</h3>
            <p>${album.artist}${trackCount ? "" : " • nog geen nummers"}</p>
        `;
 
        card.addEventListener("click", () => {
 
            if (!trackCount) {
                return;
            }
 
            loadSong(albumIndex, 0);
            playAudio();
 
        });
 
        songGrid.appendChild(card);
 
    });
 
    document.querySelectorAll(".song-card").forEach((card) => {
        card.classList.toggle(
            "active-album",
            Number(card.dataset.index) === currentAlbum
        );
    });
}
 
renderAlbumGrid();
 
 
// ===============================
// SIDEBAR ALBUMKIEZER
// ===============================
 
function renderSidebarAlbums(indices) {
 
    const list = indices || getFilteredAlbumIndices();
 
    sidebarAlbums.innerHTML = "";
 
    list.forEach((albumIndex) => {
 
        const album = albums[albumIndex];
 
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = album.title;
        link.dataset.index = albumIndex;
 
        if (!album.tracks.length) {
            link.style.opacity = "0.4";
        }
 
        link.addEventListener("click", (event) => {
 
            event.preventDefault();
 
            if (!album.tracks.length) {
                return;
            }
 
            loadSong(albumIndex, 0);
            playAudio();
 
        });
 
        sidebarAlbums.appendChild(link);
 
    });
 
    document.querySelectorAll(".sidebar-albums a").forEach((link) => {
        link.classList.toggle(
            "active-album",
            Number(link.dataset.index) === currentAlbum
        );
    });
}
 
renderSidebarAlbums();
renderFavoritesList();
 
 
// ===============================
// ZOEKBALK
// ===============================
 
function searchAlbums(query) {
 
    const q = query.trim().toLowerCase();
 
    if (!q) {
        return albums.map((a, i) => i);
    }
 
    return albums
        .map((a, i) => i)
        .filter((i) => {
 
            const album = albums[i];
 
            if (album.title.toLowerCase().includes(q)) {
                return true;
            }
 
            if (album.artist.toLowerCase().includes(q)) {
                return true;
            }
 
            return album.tracks.some((track) => {
                const trackName =
                    typeof track === "string" ? trackTitle(track) : track.title;
                return trackName.toLowerCase().includes(q);
            });
 
        });
}
 
 
searchInput.addEventListener("input", () => {
    renderAlbumGrid(getFilteredAlbumIndices());
    renderSidebarAlbums(getFilteredAlbumIndices());
});

favoritesLink.addEventListener("click", (event) => {
    event.preventDefault();
    favoritesFilter = !favoritesFilter;
    favoritesLink.classList.toggle("active", favoritesFilter);
    renderAlbumGrid(getFilteredAlbumIndices());
    renderSidebarAlbums(getFilteredAlbumIndices());
});

// ===============================
// GESYNCHRONISEERDE LYRICS (Spotify-stijl)
// ===============================
// Zoekt assets/lyrics/<bestandsnaam>.lrc (met tijdstempels, exact)
// of .txt (zonder tijdstempels, dan wordt de timing geschat).
// De regel die nu gezongen wordt licht op, de rest is gedimd.

let lyricLines = [];      // { text, time, marker }
let lyricsTimed = false;  // true = echte LRC-tijden, false = geschat
let activeLyricIndex = -1;
let lyricsRequestId = 0;
let currentLyricsKey = "";

function parseLyrics(raw) {

    const lrcRegex = /^\[(\d+):(\d+(?:\.\d+)?)\]\s*(.*)$/;
    const rows = raw.replace(/\r/g, "").split("\n");

    const lines = [];
    let foundTimes = 0;

    rows.forEach((row) => {

        const match = row.match(lrcRegex);

        if (match) {
            foundTimes++;
            lines.push({
                text: match[3].trim(),
                time: Number(match[1]) * 60 + Number(match[2]),
                marker: false
            });
            return;
        }

        // metadata-regels zoals [ar:Drake] overslaan
        if (/^\[[a-z]+:.*\]$/i.test(row.trim())) {
            return;
        }

        const text = row.trim();

        lines.push({
            text: text,
            time: null,
            marker: /^\[.*\]$/.test(text) // bv. [Chorus]
        });
    });

    return { lines: lines, timed: foundTimes > 2 };
}


function estimateLyricTimes(duration) {

    // regels met zingbare tekst (geen lege regels, geen [Chorus]-kopjes)
    const singable = lyricLines.filter((l) => l.text && !l.marker);

    if (!singable.length || !duration) {
        return;
    }

    // zang begint niet direct en stopt iets voor het einde
    const startAt = duration * 0.12;
    const endAt = duration * 0.92;

    const weights = singable.map((l) => Math.max(l.text.length, 12));
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);

    let elapsed = startAt;

    singable.forEach((line, i) => {
        line.time = elapsed;
        elapsed += ((endAt - startAt) * weights[i]) / totalWeight;
    });
}


function renderLyricLines() {

    lyricsText.innerHTML = "";
    activeLyricIndex = -1;

    lyricLines.forEach((line, index) => {

        if (!line.text) {
            const spacer = document.createElement("div");
            spacer.className = "lyric-gap";
            lyricsText.appendChild(spacer);
            return;
        }

        const el = document.createElement("p");
        el.className = line.marker ? "lyric-marker" : "lyric-line";
        el.textContent = line.text;
        el.dataset.index = index;

        if (!line.marker) {
            el.addEventListener("click", () => {
                if (!syncMode && line.time !== null && audio.duration) {
                    audio.currentTime = line.time;
                }
            });
        }

        lyricsText.appendChild(el);
    });

    lyricsText.scrollTop = 0;
}


function setLyricsMessage(message) {
    lyricLines = [];
    lyricsText.innerHTML = "";

    const p = document.createElement("p");
    p.className = "lyric-empty";
    p.textContent = message;
    lyricsText.appendChild(p);
}


function applyLyrics(raw) {

    const parsed = parseLyrics(raw);

    lyricLines = parsed.lines;
    lyricsTimed = parsed.timed;

    if (!lyricLines.some((l) => l.text)) {
        setLyricsMessage("Geen lyrics gevonden voor dit nummer.");
        return;
    }

    if (!lyricsTimed) {
        loadSavedSync();
    }

    if (!lyricsTimed && audio.duration) {
        estimateLyricTimes(audio.duration);
    }

    renderLyricLines();
}


function updateActiveLyric() {

    if (!lyricLines.length || syncMode) {
        return;
    }

    // schatting kan pas als de duur van het nummer bekend is
    if (!lyricsTimed && lyricLines.every((l) => l.time === null) && audio.duration) {
        estimateLyricTimes(audio.duration);
    }

    const t = audio.currentTime + lyricsOffset;
    let current = -1;

    for (let i = 0; i < lyricLines.length; i++) {
        if (lyricLines[i].time !== null && lyricLines[i].time <= t) {
            current = i;
        }
    }

    if (current === activeLyricIndex) {
        return;
    }

    activeLyricIndex = current;

    lyricsText.querySelectorAll(".lyric-line").forEach((el) => {

        const i = Number(el.dataset.index);

        el.classList.toggle("active", i === current);
        el.classList.toggle("sung", i < current);
    });

    const activeEl = lyricsText.querySelector(".lyric-line.active");

    if (activeEl) {

        // alleen binnen het lyrics-vak scrollen, niet de hele pagina
        const target =
            activeEl.offsetTop - lyricsText.clientHeight / 2 + activeEl.clientHeight / 2;

        lyricsText.scrollTo({ top: target, behavior: "smooth" });
    }
}

audio.addEventListener("timeupdate", updateActiveLyric);
audio.addEventListener("seeked", updateActiveLyric);
audio.addEventListener("loadedmetadata", () => {
    if (lyricLines.length && !lyricsTimed) {
        estimateLyricTimes(audio.duration);
    }
});


// ===============================
// TAP-SYNC: zelf de timing instellen
// ===============================
// Geschatte timing loopt vaak uit de pas. Met Sync speel je het nummer
// af en druk je op SPATIE precies als een regel begint. De tijden worden
// opgeslagen in de browser en daarna gebruikt voor dit nummer.

let syncMode = false;
let syncIndex = 0;
let syncList = [];
let syncHint = null;
let syncButton = null;

function singableLines() {
    return lyricLines.filter((l) => l.text && !l.marker);
}

function loadSavedSync() {

    try {
        const saved = JSON.parse(
            localStorage.getItem("sonicflow-sync:" + currentLyricsKey) || "null"
        );
        const lines = singableLines();

        if (saved && Array.isArray(saved) && saved.length === lines.length) {
            lines.forEach((line, i) => { line.time = saved[i]; });
            lyricsTimed = true;
        }
    } catch (error) {
        // kapotte opslag negeren
    }
}

function saveSync() {

    const times = singableLines().map((l) => l.time);

    localStorage.setItem(
        "sonicflow-sync:" + currentLyricsKey,
        JSON.stringify(times)
    );
}

function markSyncPosition() {

    lyricsText.querySelectorAll(".lyric-line").forEach((el) => {
        el.classList.remove("active", "sync-next");
    });

    const line = syncList[syncIndex];

    if (!line) {
        return;
    }

    const el = lyricsText.querySelector(
        `.lyric-line[data-index="${lyricLines.indexOf(line)}"]`
    );

    if (el) {
        el.classList.add("sync-next");

        lyricsText.scrollTo({
            top: el.offsetTop - lyricsText.clientHeight / 2 + el.clientHeight / 2,
            behavior: "smooth"
        });
    }
}

function startSync() {

    if (!singableLines().length) {
        return;
    }

    syncList = singableLines();
    syncList.forEach((l) => { l.time = null; });

    lyricsTimed = true;
    syncMode = true;
    syncIndex = 0;

    audio.currentTime = 0;
    playAudio();

    syncButton.textContent = "Stop sync";
    syncHint.textContent =
        "Druk op SPATIE als de gemarkeerde regel begint. Backspace = terug, Esc = stoppen.";

    markSyncPosition();
}

function stopSync(reload) {

    syncMode = false;
    syncButton.textContent = "Sync";
    syncHint.textContent = "";

    if (reload) {
        showLyricsForCurrentTrack();
    }
}

function tapSync() {

    if (!syncMode || syncIndex >= syncList.length) {
        return;
    }

    syncList[syncIndex].time = audio.currentTime;
    syncIndex++;

    if (syncIndex >= syncList.length) {
        saveSync();
        stopSync(false);
        syncHint.textContent = "Sync opgeslagen voor dit nummer.";
        activeLyricIndex = -1;
        updateActiveLyric();
        return;
    }

    markSyncPosition();
}

function undoSync() {

    if (!syncMode || syncIndex === 0) {
        return;
    }

    syncIndex--;
    syncList[syncIndex].time = null;
    markSyncPosition();
}

function resetSync() {

    localStorage.removeItem("sonicflow-sync:" + currentLyricsKey);
    stopSync(true);
}

function updateOffsetHint() {

    if (!syncHint || syncMode) {
        return;
    }

    syncHint.textContent = lyricsOffset
        ? `Timing ${lyricsOffset > 0 ? "+" : ""}${lyricsOffset.toFixed(1)}s`
        : "";
}

function nudgeLyrics(seconds) {

    lyricsOffset = Math.round((lyricsOffset + seconds) * 10) / 10;

    localStorage.setItem(
        "sonicflow-offset:" + currentLyricsKey,
        String(lyricsOffset)
    );

    updateOffsetHint();
    activeLyricIndex = -1;
    updateActiveLyric();
}

function buildSyncTools() {

    const panel = document.querySelector(".lyrics-panel");

    if (!panel || panel.querySelector(".lyrics-tools")) {
        return;
    }

    const tools = document.createElement("div");
    tools.className = "lyrics-tools";

    syncButton = document.createElement("button");
    syncButton.type = "button";
    syncButton.textContent = "Sync";

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.textContent = "Reset";

    const earlierButton = document.createElement("button");
    earlierButton.type = "button";
    earlierButton.textContent = "Eerder";
    earlierButton.title = "Regels 0,5 seconde eerder tonen";
    earlierButton.addEventListener("click", () => nudgeLyrics(0.5));

    const laterButton = document.createElement("button");
    laterButton.type = "button";
    laterButton.textContent = "Later";
    laterButton.title = "Regels 0,5 seconde later tonen";
    laterButton.addEventListener("click", () => nudgeLyrics(-0.5));

    syncHint = document.createElement("span");
    syncHint.className = "lyrics-hint";

    syncButton.addEventListener("click", () => {
        if (syncMode) {
            stopSync(true);
        } else {
            startSync();
        }
    });

    resetButton.addEventListener("click", resetSync);

    tools.append(earlierButton, laterButton, syncButton, resetButton, syncHint);
    panel.appendChild(tools);
}

buildSyncTools();

document.addEventListener("keydown", (event) => {

    if (!syncMode) {
        return;
    }

    const tag = event.target.tagName;

    if (tag === "INPUT" || tag === "TEXTAREA") {
        return;
    }

    if (event.code === "Space") {
        event.preventDefault();
        tapSync();
    } else if (event.code === "Backspace") {
        event.preventDefault();
        undoSync();
    } else if (event.code === "Escape") {
        stopSync(true);
    }
});


async function fetchLyricsFile(folder, base) {

    const name = encodeURIComponent(base);

    // naast de mp3 in dezelfde albummap
    const places = [folder];

    for (const place of places) {

        for (const ext of ["lrc", "txt"]) {

            try {
                const response = await fetch(`${place}${name}.${ext}`);

                if (response.ok) {
                    return { text: await response.text(), ext: ext };
                }
            } catch (error) {
                // niet gevonden, volgende proberen
            }
        }
    }

    return null;
}


// ===============================
// AUTOMATISCHE SYNC via LRCLIB (gratis lyrics-database met tijden)
// ===============================
// Zoekt op artiest + titel + duur. Levert LRC met tijdstempels, dus
// de regels lichten vanzelf op zonder dat jij iets hoeft te doen.

let lyricsOffset = 0; // seconden; + = regels eerder tonen

function waitForDuration(ms) {

    return new Promise((resolve) => {

        if (Number.isFinite(audio.duration) && audio.duration > 0) {
            resolve(audio.duration);
            return;
        }

        const done = () => {
            audio.removeEventListener("loadedmetadata", done);
            clearTimeout(timer);
            resolve(Number.isFinite(audio.duration) ? audio.duration : 0);
        };

        const timer = setTimeout(done, ms);
        audio.addEventListener("loadedmetadata", done);
    });
}


function guessArtistAndTitle(album, fileName) {

    const base = fileName.replace(/\.mp3$/i, "");
    let artist = album.artist;

    // "Drake, Future - Big Rings" -> eerste artiest = Drake
    const dash = base.match(/^(?!\d+\s)(.+?)\s-\s(.+)$/);

    if (dash) {
        artist = dash[1].split(",")[0].trim();
    }

    if (/various|you/i.test(artist)) {
        artist = "";
    }

    return { artist: artist, title: trackTitle(fileName) };
}


async function fetchOnlineLyrics(album, fileName) {

    const cacheKey = "sonicflow-lrclib2:" + currentLyricsKey;

    try {
        const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");

        // gevonden lyrics blijven bewaard, "niet gevonden" 1 dag
        if (cached && (!cached.none || Date.now() - cached.at < 86400000)) {
            return cached.none ? null : cached;
        }
    } catch (error) {
        // kapotte cache negeren
    }

    const { artist, title } = guessArtistAndTitle(album, fileName);
    const duration = await waitForDuration(2500);

    let record = null;

    try {

        // 1. exacte zoekopdracht
        if (artist && duration) {

            const params = new URLSearchParams({
                artist_name: artist,
                track_name: title,
                album_name: album.title,
                duration: String(Math.round(duration))
            });

            const response = await fetch(`https://lrclib.net/api/get?${params}`);

            if (response.ok) {
                record = await response.json();
            }
        }

        // 2. ruimere zoekopdracht, kies resultaat met de meest gelijke duur
        if (!record || !(record.syncedLyrics || record.plainLyrics)) {

            const params = new URLSearchParams({ track_name: title });

            if (artist) {
                params.set("artist_name", artist);
            }

            const response = await fetch(`https://lrclib.net/api/search?${params}`);

            let results = [];

            if (response.ok) {
                results = (await response.json()).filter(
                    (r) => r.syncedLyrics || r.plainLyrics
                );
            }

            // niks gevonden? zoek vrij op "artiest titel" (zonder haakjes)
            if (!results.length) {

                const cleanTitle = title.replace(/\(.*?\)|\[.*?\]/g, "").trim();
                const loose = new URLSearchParams({ q: `${artist} ${cleanTitle}`.trim() });
                const looseResponse = await fetch(`https://lrclib.net/api/search?${loose}`);

                if (looseResponse.ok) {
                    results = (await looseResponse.json()).filter(
                        (r) => r.syncedLyrics || r.plainLyrics
                    );
                }
            }

            {

                results.sort((x, y) => {
                    const sx = x.syncedLyrics ? 0 : 1000;
                    const sy = y.syncedLyrics ? 0 : 1000;
                    return (sx + Math.abs((x.duration || 0) - duration)) -
                           (sy + Math.abs((y.duration || 0) - duration));
                });

                record = results[0] || null;
            }
        }

    } catch (error) {
        return null; // offline of geblokkeerd: niet cachen
    }

    const found = record && (record.syncedLyrics || record.plainLyrics)
        ? { synced: record.syncedLyrics || "", plain: record.plainLyrics || "", at: Date.now() }
        : { none: true, at: Date.now() };

    try {
        localStorage.setItem(cacheKey, JSON.stringify(found));
    } catch (error) {
        // opslag vol, niet erg
    }

    return found.none ? null : found;
}


async function showLyricsForCurrentTrack() {

    if (!lyricsText) {
        return;
    }

    const album = albums[currentAlbum];
    const track = album?.tracks[currentTrack];

    if (!track) {
        return;
    }

    const requestId = ++lyricsRequestId;

    currentLyricsKey = typeof track === "string"
        ? album.folder + track
        : "creation:" + track.title;

    lyricsOffset = Number(localStorage.getItem("sonicflow-offset:" + currentLyricsKey) || 0);
    updateOffsetHint();

    if (syncMode) {
        stopSync(false);
    }

    // eigen gegenereerde nummers hebben hun lyrics al bij zich
    if (typeof track !== "string") {
        applyLyrics(track.lyrics || "");
        return;
    }

    setLyricsMessage("Lyrics laden...");

    const base = track.replace(/\.mp3$/i, "");
    const local = await fetchLyricsFile(album.folder, base);

    if (requestId !== lyricsRequestId) {
        return;
    }

    // 1. eigen .lrc-bestand met tijden wint altijd
    if (local && local.ext === "lrc") {
        applyLyrics(local.text);
        return;
    }

    // 2. zelf gesynced met de Sync-knop? Dan gebruiken we jouw tijden
    const hasManualSync =
        localStorage.getItem("sonicflow-sync:" + currentLyricsKey) !== null;

    if (local && hasManualSync) {
        applyLyrics(local.text);
        return;
    }

    // 3. automatisch gesynchroniseerde lyrics van LRCLIB
    const online = await fetchOnlineLyrics(album, track);

    if (requestId !== lyricsRequestId) {
        return;
    }

    if (online && online.synced) {
        applyLyrics(online.synced);
        return;
    }

    // 4. jouw eigen tekstbestand (timing geschat)
    if (local) {
        applyLyrics(local.text);
        return;
    }

    // 5. online tekst zonder tijden (timing geschat)
    if (online && online.plain) {
        applyLyrics(online.plain);
        return;
    }

    setLyricsMessage("Geen lyrics gevonden voor dit nummer.");
}


// ===============================
// MAKE YOUR SONG (Suno-stijl)
// ===============================
// Suno zelf heeft geen publieke browser-API, dus hier simuleren we
// het "genereren" even, waarna je het echte mp3-bestand dat je op
// suno.com hebt gemaakt kan uploaden. Die komt dan in je eigen
// album "My Creations" terecht en is direct afspeelbaar.
 
const generateBtn = document.querySelector("#generateBtn");
const makeSongResult = document.querySelector("#makeSongResult");
 
const generatingMessages = [
    "Componeert melodie...",
    "Schrijft de lyrics uit...",
    "Mixt de beat...",
    "Voegt de laatste finishing touch toe..."
];
 
// ===============================
// VOLLEDIGE LYRICS GENERATOR
// ===============================
// Geen echte AI — losse woorden/zinnen die random gecombineerd
// worden tot een songstructuur met Couplet 1, Refrein, Couplet 2, Refrein.
 
const lyricSubjects = [
    "midnight", "neon lights", "stardust", "the static",
    "diamonds", "shadows", "velvet skies", "your echo",
    "the city", "slow fire", "a heartbeat", "broken glass",
    "the moonlight", "a wildfire", "the ocean", "a memory",
    "the horizon", "a whisper", "the rooftops", "a mirror",
    "the rain", "a flashback", "the skyline", "a heartbeat drum",
    "the silence", "a candle flame", "the thunder", "a paper plane",
    "the wind", "a loaded gun", "the sunrise", "a photograph",
    "the dashboard lights", "a getaway car", "the backseat",
    "a falling star", "the tidal wave", "a secret code"
];
 
const lyricPhrases = [
    "fading into the night",
    "burning slow in my mind",
    "chasing what we left behind",
    "running through empty streets",
    "caught between dreams and static",
    "glowing like it's the last time",
    "spinning out of control",
    "lost in the afterglow",
    "breaking like the dawn",
    "drowning in the sound",
    "holding on for dear life",
    "falling like the rain",
    "burning down to ash",
    "flying without wings",
    "screaming into the void",
    "dancing on the edge",
    "driving with no destination",
    "waiting for the sunrise",
    "drifting further away",
    "writing it in the stars",
    "losing track of time",
    "walking through the fire",
    "singing to an empty room",
    "painting the sky on fire",
    "swimming against the current",
    "counting down the seconds",
    "tracing shadows on the wall",
    "chasing taillights in the dark",
    "turning static into gold",
    "breaking every rule we made"
];
 
const hookPhrases = [
    "we're burning bright tonight",
    "never letting this go",
    "lost in the lights with you",
    "living for right now",
    "this is our moment, hold on",
    "hearts on fire, don't stop",
    "nothing's gonna slow us down",
    "dancing with the stars tonight",
    "we're unstoppable tonight",
    "turning heartbreak into gold",
    "running till the sun comes up",
    "we could live forever like this",
    "screaming it from the rooftops",
    "nobody can bring us down",
    "we're alive like never before",
    "feel the rhythm, feel the fire",
    "this is the only way home",
    "we're writing our own ending",
    "lighting up the whole skyline",
    "we were born for nights like this"
];
 
 
function capitalizeLine(line) {
    return line.charAt(0).toUpperCase() + line.slice(1);
}
 
 
// kiest een willekeurig item, maar vermijdt waar mogelijk
// hetzelfde item twee keer na elkaar
function pickRandom(list, avoid) {
 
    if (list.length === 1) {
        return list[0];
    }
 
    let choice = list[Math.floor(Math.random() * list.length)];
    let attempts = 0;
 
    while (choice === avoid && attempts < 5) {
        choice = list[Math.floor(Math.random() * list.length)];
        attempts++;
    }
 
    return choice;
}
 
 
// Knipt de eigen beschrijving van de gebruiker op in losse zinsdelen,
// zodat die als echte regels tussen de gegenereerde tekst passen.
function splitUserPhrases(text) {
 
    return text
        .split(/[.,\n]+|\ben\b|\bmaar\b|\bwant\b|\bdan\b/i)
        .map((part) => part.trim())
        .filter((part) => part.length > 1);
}
 
 
function buildVerseLines(count, userPhrases, offset, word) {
 
    // templates die altijd het gekozen woord zelf verwerken,
    // zodat elk couplet echt over "hoi" (of welk woord dan ook) gaat
    const wordTemplates = [
        (phrase) => `${word}, ${phrase}`,
        (phrase, subject) => `${subject}, ${phrase}`,
        () => `all I see is ${word} tonight`,
        () => `whisper ${word}, let it fly`,
        () => `${word}, written on my heart`,
        (phrase, subject) => `${subject}, remind me of ${word}`,
        () => `chasing ${word} through the dark`,
        () => `say ${word} and the world stops still`,
        () => `${word} echoes down the hall`,
        (phrase) => `${word} keeps ${phrase}`,
        () => `every road leads back to ${word}`,
        (phrase, subject) => `${subject} and ${word}, ${phrase}`,
        () => `can't shake the thought of ${word}`,
        () => `${word} is the only thing that's real`,
        (phrase) => `we keep ${phrase}, thinking of ${word}`,
        () => `somewhere between here and ${word}`,
        () => `${word} on repeat inside my head`,
        (phrase, subject) => `${subject}, just like ${word}`
    ];
 
    const lines = [];
    let lastTemplateIndex = -1;
    let lastPhrase = null;
    let lastSubject = null;
 
    for (let i = 0; i < count; i++) {
 
        // elke even regel is (indien mogelijk) een eigen zin van de gebruiker,
        // de tussenliggende regels vult de generator zelf aan rond het woord
        const useUserLine = i % 2 === 0 && userPhrases.length > 0;
 
        if (useUserLine) {
 
            const phrase =
                userPhrases[(offset + Math.floor(i / 2)) % userPhrases.length];
 
            lines.push(capitalizeLine(phrase));
 
        } else {
 
            let templateIndex = Math.floor(Math.random() * wordTemplates.length);
            let attempts = 0;
 
            while (templateIndex === lastTemplateIndex && attempts < 5) {
                templateIndex = Math.floor(Math.random() * wordTemplates.length);
                attempts++;
            }
 
            lastTemplateIndex = templateIndex;
 
            const phrase = pickRandom(lyricPhrases, lastPhrase);
            const subject = pickRandom(lyricSubjects, lastSubject);
 
            lastPhrase = phrase;
            lastSubject = subject;
 
            lines.push(capitalizeLine(wordTemplates[templateIndex](phrase, subject)));
        }
    }
 
    return lines;
}
 
 
function buildChorusLines(count, title) {
 
    const lines = [
        capitalizeLine(`${title}, ${pickRandom(hookPhrases)}`)
    ];
 
    let lastHook = null;
 
    for (let i = 1; i < count; i++) {
 
        const hook = pickRandom(hookPhrases, lastHook);
        lastHook = hook;
 
        lines.push(capitalizeLine(hook));
    }
 
    return lines;
}
 
 
function generateFullLyrics(title, prompt) {
 
    const userPhrases = prompt ? splitUserPhrases(prompt) : [];
 
    const verse1 = buildVerseLines(4, userPhrases, 0, title);
    const chorus = buildChorusLines(3, title);
    const verse2 = buildVerseLines(4, userPhrases, 2, title);
 
    const sections = [
        { label: "Couplet 1", lines: verse1 },
        { label: "Refrein", lines: chorus },
        { label: "Couplet 2", lines: verse2 },
        { label: "Refrein", lines: chorus }
    ];
 
    const fullText = sections
        .map((section) => `[${section.label}]\n${section.lines.join("\n")}`)
        .join("\n\n");
 
    const snippet = `${chorus[0]}<br>${chorus[1]}`;
 
    return { fullText, snippet };
}
 
generateBtn.addEventListener("click", () => {
 
    const title = document.querySelector("#songTitleInput").value.trim();
    const prompt = document.querySelector("#songPromptInput").value.trim();
 
    if (!title) {
        makeSongResult.innerHTML =
            `<p class="upload-zone-warning">Typ minstens een woord of titel in.</p>`;
        return;
    }
 
    let step = 0;
 
    const lyrics = generateFullLyrics(title, prompt);
 
    makeSongResult.innerHTML = `
        <div class="generating-card">
 
            <div class="generating-lyrics">
                <p class="lyrics-label">A line from the chorus</p>
                <p class="lyrics-snippet">${lyrics.snippet}</p>
            </div>
 
            <div class="generating-disc"></div>
 
        </div>
 
        <p id="generatingText" class="generating-status">${generatingMessages[0]}</p>
    `;
 
    const generatingText = document.querySelector("#generatingText");
 
    const interval = setInterval(() => {
 
        step++;
 
        if (step < generatingMessages.length) {
            generatingText.textContent = generatingMessages[step];
        }
 
    }, 700);
 
    setTimeout(() => {
 
        clearInterval(interval);
        showUploadZone(title, lyrics.fullText);
 
    }, 700 * generatingMessages.length);
 
});
 
 
function showUploadZone(title, fullLyrics) {
 
    makeSongResult.innerHTML = `
        <div class="upload-zone">
            <p>🎧 "${title}" is klaar! Upload hier het mp3-bestand dat je op suno.com hebt gedownload:</p>
            <input type="file" id="songFileInput" accept="audio/mp3,audio/mpeg">
 
            <p>Cover afbeelding (optioneel):</p>
            <input type="file" id="coverFileInput" accept="image/*">
 
            <button id="toggleLyricsBtn" class="lyrics-toggle">📝 Bekijk volledige lyrics</button>
            <pre id="fullLyricsBox" class="full-lyrics" hidden>${fullLyrics}</pre>
 
            <button id="addSongBtn" class="add-song-btn" disabled>Voeg toe aan mijn nummers</button>
        </div>
    `;
 
    const toggleLyricsBtn = document.querySelector("#toggleLyricsBtn");
    const fullLyricsBox = document.querySelector("#fullLyricsBox");
 
    toggleLyricsBtn.addEventListener("click", () => {
 
        const isHidden = fullLyricsBox.hidden;
 
        fullLyricsBox.hidden = !isHidden;
 
        toggleLyricsBtn.textContent = isHidden
            ? "📝 Verberg lyrics"
            : "📝 Bekijk volledige lyrics";
 
    });
 
    const songFileInput = document.querySelector("#songFileInput");
    const coverFileInput = document.querySelector("#coverFileInput");
    const addSongBtn = document.querySelector("#addSongBtn");
 
    songFileInput.addEventListener("change", () => {
        addSongBtn.disabled = !songFileInput.files.length;
    });
 
    addSongBtn.addEventListener("click", () => {
 
        if (!songFileInput.files.length) {
            return;
        }
 
        const audioFile = songFileInput.files[0];
        const audioUrl = URL.createObjectURL(audioFile);
 
        const myCreations = albums.find((a) => a.id === "mycreations");
        const albumIndex = albums.indexOf(myCreations);
 
        myCreations.tracks.push({
            title: title,
            url: audioUrl,
            lyrics: fullLyrics
        });
 
        if (coverFileInput.files.length) {
            myCreations.cover = URL.createObjectURL(coverFileInput.files[0]);
        }
 
        renderAlbumGrid();
        renderSidebarAlbums();
 
        loadSong(albumIndex, myCreations.tracks.length - 1);
        playAudio();
 
        makeSongResult.innerHTML =
            `<p class="upload-zone-warning">✅ "${title}" is toegevoegd aan "My Creations" en speelt nu!</p>`;
 
        document.querySelector("#songTitleInput").value = "";
        document.querySelector("#songPromptInput").value = "";
        document.querySelector("#songStyleInput").value = "";
 
    });
}
 
 
// ===============================
// EERSTE NUMMER
// ===============================
 
loadSong(0, 0);