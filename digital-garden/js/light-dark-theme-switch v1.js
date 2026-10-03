const lightDark = document.getElementById("lightDark");
const html = document.getElementById("htmlTheme");
//const bgImg = document.getElementById("mainBgImage");
lightDark.addEventListener("click", () => {
    html.classList.toggle('lightTheme');
    html.classList.toggle('darkTheme');
/*        if (html.classList.contains('lightTheme')) {
    console.log('Theme is light')
    bgImg.src = "https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg" //Alpen plaatje
}
    if (html.classList.contains('darkTheme')) {
    console.log('Theme is dark')
    bgImg.src = "https://cdn.pixabay.com/photo/2022/11/09/06/45/sakura-7579975_1280.jpg" //Sakura plaatje
}*/
})