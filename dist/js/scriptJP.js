function updateClock() {
  var now = new Date();

  // Mengatur zona waktu tujuan (Tokyo)
  var timeZoneOffset = 2; // Tokyo Standard Time (JST)

  // Menghitung waktu di zona waktu tujuan
  var targetTime = new Date(now.getTime() + timeZoneOffset * 60 * 60 * 1000);

  // Mengambil komponen waktu (jam, menit, detik) dari zona waktu tujuan
  var hours = targetTime.getHours();
  var minutes = targetTime.getMinutes();
  var seconds = targetTime.getSeconds();

  // Menambahkan nol di depan angka tunggal
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Mengubah elemen dengan id "clock" dengan waktu yang diupdate
  document.getElementById("clock").textContent =
    hours + ":" + minutes + ":" + seconds;

  // Mengupdate jam setiap detik
  setTimeout(updateClock, 1000);
}
updateClock();
