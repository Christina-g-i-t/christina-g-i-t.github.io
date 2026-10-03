const lightDark = document.getElementById("lightDark");
const html = document.getElementById("htmlTheme");
let savedTheme = localStorage.getItem("theme");
let theme = localStorage.getItem("theme");
console.log('Deja vu: Theme onthouden in localStorage is ' + savedTheme + 'Theme');
html.classList.toggle(theme + 'Theme');

lightDark.addEventListener("click", () => {   
    localStorage.clear(); 
    html.classList.toggle('lightTheme');
    html.classList.toggle('darkTheme');
    if (html.classList.contains('lightTheme')) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    let savedTheme = localStorage.getItem("theme");
    console.log('Huidige theme in localStorage is ' + savedTheme)
});