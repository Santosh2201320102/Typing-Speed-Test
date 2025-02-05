const sampleTexts = [
    "Typing fast isn't just about speed; it's about efficiency and confidence. The more you practice, the sharper your mind becomes. Every extra word per minute puts you ahead in the game. Stay consistent, challenge yourself, and push beyond your limits. Mastering typing is mastering productivity. Keep going, and let your fingers do the talking."
];
let startTime, timer, selectedText, correctWords, totalWords;
let timeLeft = 30;
function startTest() {
    selectedText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    document.getElementById("text").innerText = selectedText;
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").disabled = false;
    document.getElementById("inputText").focus();
    document.getElementById("result").innerText = "";
    timeLeft = 30;
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
    startTime = new Date().getTime();
}
function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endTest();
    }
}
function endTest() {
    document.getElementById("inputText").disabled = true;
    let typedText = document.getElementById("inputText").value.trim();
    totalWords = selectedText.split(" ").length;
    correctWords = typedText.split(" ").filter((word, index) => word === selectedText.split(" ")[index]).length;
    let timeTaken = (30 - timeLeft) / 60;
    let wpm = Math.round((typedText.split(" ").length / timeTaken));
    let accuracy = ((correctWords / totalWords) * 100).toFixed(2);
    let rating = getRating(wpm);
    document.getElementById("result").innerText = `WPM: ${wpm}, Accuracy: ${accuracy}%, Rating: ${rating}`;
}
function getRating(wpm) {
    if (wpm >= 40) return "Excellent";
    if (wpm >= 30) return "Good";
    if (wpm >= 20) return "Average";
    return "Poor";
}
function resetTest() {
    clearInterval(timer);
    document.getElementById("text").innerText = "Loading text...";
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").disabled = true;
    document.getElementById("result").innerText = "";
    document.getElementById("timer").innerText = "Time: 30s";
}
