const defaultColor = "rgb(57, 79, 152)";
const colorPicker = document.getElementById("colorPicker");
const colorText = document.getElementById("dynamicTextColor");
colorPicker.value = defaultColor;
colorPicker.addEventListener("input", updateColor);
colorPicker.select();

function updateColor() {
    {
        colorText.style.color = colorPicker.value;
        document.getElementById("dynamicBg").style.setProperty("--dynamic-color", colorPicker.value);
        //van hex code naar rgb waarde, met hulp van een antwoord op Stack Overflow https://stackoverflow.com/questions/58184508/html5-input-type-color-read-single-rgb-values
        var hex_code = this.value.split("");
        var red = parseInt(hex_code[1]+hex_code[2],16);
        var green = parseInt(hex_code[3]+hex_code[4],16);
        var blue = parseInt(hex_code[5]+hex_code[6],16);
        var rgb = red+", "+green+", "+blue;
        colorText.innerHTML = "hex" + colorPicker.value + "<br>" + "rgb(" + rgb + ")";
    }
}
    