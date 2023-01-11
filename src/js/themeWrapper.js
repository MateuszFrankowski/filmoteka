const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
// pobieramy z localStorage theme rodzaj dark/light
const currentTheme = localStorage.getItem('theme');

// jeżeli theme istnieje
if (currentTheme) {
  // ustawiamy data-theme klasę w elemencie html data-theme="light"
  document.documentElement.setAttribute('data-theme', currentTheme);

  // jeżeli theme jest dark zmieniamy przełącznik a dokładnie checkbox na true
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

// funkcja ustawiająca data-theme w zależności od przełącznika
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

// obserwujemy zdarzenie w naszym przypadku na change uruchamiamy funkcję switchTheme
toggleSwitch.addEventListener('change', switchTheme, false);
