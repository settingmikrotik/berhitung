function getGreeting() {
  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 4 && hour < 10) {
    greeting = "🌤️ Selamat Pagi! Semoga harimu menyenangkan.";
  } else if (hour >= 10 && hour < 15) {
    greeting = "🌞 Selamat Siang! Tetap semangat dan produktif.";
  } else if (hour >= 15 && hour < 18) {
    greeting = "🌇 Selamat Sore! Saatnya istirahat sejenak.";
  } else {
    greeting = "🌙 Selamat Malam! Waktunya bersantai dan beristirahat.";
  }

  return greeting;
}

document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("ucapan");
  if (el) {
    el.innerHTML = `<marquee behavior="scroll" direction="left" scrollamount="6">${getGreeting()}</marquee>`;
  }
});
