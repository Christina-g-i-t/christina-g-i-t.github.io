const dog = document.getElementById("deltaDog");
let eyes = "open";
let poseIndex = -1;
const poseOptions = [
    {poseState: "default"},
    {poseState: "lower"},
    {poseState: "default"},
    {poseState: "upper"},
];
function setPose(poseState) {
    dog.removeAttribute("onclick");
    setInterval(() => {
        if (poseState.length -1 > poseIndex) {
        poseIndex++;
        } else {
        poseIndex = 0;
        }
        const pose = poseState[poseIndex];
        const currentPose = pose.poseState;
        dog.src = "../images/dog/export-dog-tail-" + currentPose + "-" + eyes + ".png";
        //console.log("index " + poseIndex + ", path is " + dog.src);
        eyes = "open";
    }, 350);
}
dog.addEventListener("mouseover", (event) => {
    eyes = "blink";
});