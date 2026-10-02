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
        mood: "Night Drive",
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

const songGrid = document.querySelector(".song-grid");
const sidebarAlbums = document.querySelector(".sidebar-albums");
const searchInput = document.querySelector("#searchInput");

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
    title = title.replace(/^.*?-\s*/, "");

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

    coverArt.src = album.cover;

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
}


coverArt.addEventListener("load", () => {
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

        gradient.addColorStop(0, "rgba(139, 92, 246, 0.9)");
        gradient.addColorStop(1, "rgba(236, 72, 153, 0.9)");

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

heartButton.addEventListener("click", () => {

    const liked = heartButton.classList.contains("liked-state");

    heartButton.textContent = liked ? "♡" : "❤";
    heartButton.classList.toggle("liked-state");

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


// ===============================
// ALBUM GRID (Recommended -> albumkiezer)
// ===============================

function renderAlbumGrid(indices) {

    const list = indices || albums.map((a, i) => i);

    songGrid.innerHTML = "";

    if (!list.length) {

        const empty = document.createElement("p");
        empty.className = "no-results";
        empty.textContent = "Geen albums of nummers gevonden.";

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
                <span>${String(albumIndex + 1).padStart(2, "0")}</span>
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

    const list = indices || albums.map((a, i) => i);

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

    const matches = searchAlbums(searchInput.value);

    renderAlbumGrid(matches);
    renderSidebarAlbums(matches);

});


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

generateBtn.addEventListener("click", () => {

    const title = document.querySelector("#songTitleInput").value.trim();
    const prompt = document.querySelector("#songPromptInput").value.trim();

    if (!title || !prompt) {
        makeSongResult.innerHTML =
            `<p class="upload-zone-warning">Vul minstens een titel en een beschrijving in.</p>`;
        return;
    }

    let step = 0;

    makeSongResult.innerHTML = `
        <div class="generating">
            <div class="spinner"></div>
            <p id="generatingText">${generatingMessages[0]}</p>
        </div>
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
        showUploadZone(title);

    }, 700 * generatingMessages.length);

});


function showUploadZone(title) {

    makeSongResult.innerHTML = `
        <div class="upload-zone">
            <p>🎧 "${title}" is klaar! Upload hier het mp3-bestand dat je op suno.com hebt gedownload:</p>
            <input type="file" id="songFileInput" accept="audio/mp3,audio/mpeg">

            <p>Cover afbeelding (optioneel):</p>
            <input type="file" id="coverFileInput" accept="image/*">

            <button id="addSongBtn" class="add-song-btn" disabled>Voeg toe aan mijn nummers</button>
        </div>
    `;

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
            url: audioUrl
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