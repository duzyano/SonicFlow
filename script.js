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

const trackLyrics = {
    "02 Oh My Dis Side.mp3": "Oh My Dis Side — Travis Scott ft. Quavo\nI've been up for a long time, oh my\nBroad day, I've been poppin' pills, oh my\nPourin' syrup, great day\nStill can't get away, oh my\n\nThis side, this side, this side\nYou really can't make it on this side\nLot of lone stars on this side\nI feel a lot at home on this side.",
    "Drake, Rihanna - Take Care.mp3": "Take Care — Drake ft. Rihanna\nI know you've been hurt by someone else\nI can tell by the way you carry yourself\nIf you let me, here's what I'll do\nI'll take care of you\n\nYou don't have to be afraid\nWe're gonna make it through the night\nI know you've been on your own\nBut I'll be there for you, girl, every time.",
    "Drake - Marvins Room.mp3": "Marvin's Room — Drake\nThat ain't workin', that's the way you do it\nI just had to let you know\nI know you got a lot going on\nBut this is where I belong, girl\n\nI know you got a lot on your mind\nBut I'm still thinking 'bout you, girl.",
    "Drake, The Weeknd - Crew Love.mp3": "Crew Love — Drake ft. The Weeknd\nWe do what we want 'cause we can\nWe can get high if we want to\nI got a lot of things to say\nBut I don't know what to do\n\nWe just keep it low-key, keep it real\nSome nights we ride, some nights we feel.",
    "Drake - Headlines.mp3": "Headlines — Drake\nI don't really know what to say\nI just gotta put it out there\nPeople talking, people watching\nBut I stay on my grind\n\nWhen the night gets dark, I keep moving\nI got my own lane, I stay focused.",
    "Drake - Best I Ever Had.mp3": "Best I Ever Had — Drake\nI know I got a lot to say\nBut I don't want to waste your time\nI know you mad, I know you sad\nBut I still think you're the one\n\nYou know I am, I am, I am what I am\nAnd I know you got a lot to say.",
    "Drake - Over.mp3": "Over — Drake\nI know I got a lot going on\nBut I still keep it moving\nThe road is long, the road is rough\nBut I don't stop, I just keep going\n\nI'm on top and I'm not going down\nI still got that fire in my soul.",
    "Drake - Find Your Love.mp3": "Find Your Love — Drake\nI know you think that love is fake\nBut I can find your love\nWe can make it through the night\nIf you just stay with me\n\nI know you're scared, but I can help\nJust hold on, don't let go.",
    "Drake - Show Me A Good Time.mp3": "Show Me A Good Time — Drake\nWe just need a little time\nTo forget the world, forget the pain\nShow me a good time\nAnd I can leave the rest behind\n\nWe can be anywhere, anywhere\nAs long as we keep the lights on.",
    "Drake, Future - Jumpman.mp3": "Jumpman — Drake & Future\nJumpman, jumpman, jumpman\nI know you're watchin' me\nWe don't stop, we don't slow down\nWe just keep pushing, keep going\n\nJumpman, jumpman, jumpman\nMoney talk, I don't speak much.",
    "Drake, Future - Big Rings.mp3": "Big Rings — Drake & Future\nBig rings, big rings\nBig money, big life\nI got the whole city on my mind\nI just keep getting bigger\n\nBig rings, big rings\nYeah, that's the life I live.",
    "Drake - The Ride.mp3": "The Ride — Drake\nI got a lot of love to give\nAnd a lot of pain to hide\nWe keep moving, we keep rising\nEven when the road is wild\n\nI know my heart's still with you\nEven when it feels like it's all gone.",
    "Drake - Practice.mp3": "Practice — Drake\nI been practicing all my life\nTrying to get it right\nBut I keep learning, I keep moving\nAnd I still ain't done\n\nIt's a long road, but I know\nI'm gonna make it home someday."
};

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

let lyricsTimer = null;
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
function getLyricsUrls(folder, fileName) {
    const cleanFolder = (folder || "").replace(/\\/g, "/");
    const safeFileName = (fileName || "").replace(/\\/g, "/");
    const urls = new Set();

    if (cleanFolder && safeFileName) {
        urls.add(cleanFolder + safeFileName);
        urls.add(cleanFolder + encodeURIComponent(safeFileName));
        urls.add(cleanFolder + decodeURIComponent(safeFileName));
    }

    return [...urls].filter(Boolean);
}

async function showLyricsForCurrentTrack() {
    const album = albums[currentAlbum];
    const track = album?.tracks[currentTrack];

    if (!album || !track || !lyricsText) return;

    const title = typeof track === "string"
        ? trackTitle(track)
        : track.title;

    const fileName = typeof track === "string"
        ? track.replace(/\.mp3$/i, ".txt")
        : `${track.title}.txt`;

    const folder = album.folder;
    const lyricUrls = getLyricsUrls(folder, fileName);

    if (lyricsTimer) {
        clearTimeout(lyricsTimer);
    }

    lyricsText.textContent = "Lyrics laden...";

    let lastError = null;

    for (const lyricUrl of lyricUrls) {
        try {
            const response = await fetch(lyricUrl);

            if (response.ok) {
                const lyrics = await response.text();

                if (
                    album !== albums[currentAlbum] ||
                    track !== album.tracks[currentTrack]
                ) {
                    return;
                }

                if (lyrics.trim()) {
                    typeLyrics(lyrics);
                    return;
                }
            }
        } catch (error) {
            lastError = error;
            console.error("Lyrics laden mislukt:", error, lyricUrl);
        }
    }

    // Terugvallen op lyrics die al in de JavaScript staan.
    const fallbackKey = typeof track === "string" ? track : "";
    if (trackLyrics[fallbackKey]) {
        typeLyrics(trackLyrics[fallbackKey]);
    } else {
        const isFileOrigin = window.location.protocol === "file:";
        const message = isFileOrigin
            ? "Open de app via een lokale webserver, bv. python -m http.server 8000, om .txt-lyrics te laden."
            : `Geen lyricsbestand gevonden: ${fileName}`;

        typeLyrics(`${album.title} — ${title}\n\n${message}`);
    }

    if (lastError && window.location.protocol === "file:") {
        console.warn("Lyric fetching failed because the app is being opened with file://. Serve it via a local web server.");
    }
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

function typeLyrics(text) {
    if (!lyricsText) {
        return;
    }

    if (lyricsTimer) {
        clearTimeout(lyricsTimer);
    }

    lyricsText.textContent = "";
    let index = 0;

    const tick = () => {
        lyricsText.textContent = text.slice(0, index);
        index += 1;

        if (index <= text.length) {
            lyricsTimer = setTimeout(tick, 18);
        }
    };

    tick();
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