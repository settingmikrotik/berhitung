

  // Deteksi Ctrl + U
  document.addEventListener('keydown', async function (e) {
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
      e.preventDefault();
      showAlert();
    }
  });

  // Tampilkan popup
  async function showAlert() {
    const alertBox = document.getElementById("alertBox");
    const content = document.getElementById("alertContent");

    let info = getClientInfo();
    let ipInfo = await getIPInfo();

    content.innerHTML = `
      🚫 ILEGAL ACCESS DETECTED<br><br>
      🚫 GAK UAH NGAWUR MAU NGAPAIN??? INFORMASI KAMU TERSIMPAN DI DATABASE<br><br>
      📱 Perangkat: ${info.device}<br>
      💻 OS: ${info.os}<br>
      🌐 Browser: ${info.browser}<br><br>
      🌐 IP PUBLIC KAMU: ${ipInfo.ip}<br>
      🏙️ Kota: ${ipInfo.city}<br>
      🗺️ Negara: ${ipInfo.country}<br>
      🛰️ ISP: ${ipInfo.isp}
    `;

    alertBox.style.display = "block";
    setTimeout(() => alertBox.style.display = "none", 6000);
  }

  // Tutup popup manual
  function closeAlert() {
    document.getElementById("alertBox").style.display = "none";
  }

  // Info browser
  function getClientInfo() {
    const ua = navigator.userAgent;
    let device = /Mobile|Android|iPhone/.test(ua) ? "Mobile" : "Desktop";
    let browser = /Chrome/.test(ua) ? "Chrome" :
                  /Firefox/.test(ua) ? "Firefox" :
                  /Safari/.test(ua) ? "Safari" :
                  /Edge/.test(ua) ? "Edge" : "Lainnya";
    let os = /Windows/.test(ua) ? "Windows" :
             /Mac/.test(ua) ? "MacOS" :
             /Linux/.test(ua) ? "Linux" :
             /Android/.test(ua) ? "Android" :
             /iPhone/.test(ua) ? "iOS" : "Lainnya";
    return { device, browser, os };
  }

  // Dapatkan IP dan lokasi
  async function getIPInfo() {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      return {
        ip: data.ip,
        city: data.city,
        country: data.country_name,
        isp: data.org
      };
    } catch {
      return { ip: "?", city: "?", country: "?", isp: "?" };
    }
  }

