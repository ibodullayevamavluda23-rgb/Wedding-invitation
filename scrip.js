function playMusic() {
    const music = document.getElementById("music");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

const weddingDate = new Date("August 25, 2026 18:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + " kun " +
        hours + " soat " +
        minutes + " daqiqa " +
        seconds + " soniya";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "🎉 To'y boshlandi!";
    }

}, 1000);