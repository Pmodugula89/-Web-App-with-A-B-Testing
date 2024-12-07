function getCookie(name) {
  let cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}

function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function goToUserPage() {
  let version = getCookie('version');
  if (!version) {
    // Randomly assign user to Version A or B
    version = Math.random() < 0.5 ? 'A' : 'B';
    setCookie('version', version, 7); // Keep the version for 7 days
  }
  
  if (version === 'A') {
    window.location.href = 'user_a.html';
  } else {
    window.location.href = 'user_b.html';
  }
}
