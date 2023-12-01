document.getElementById('askButton').addEventListener('click', function() {
    var answers = ["不要", "ㄅㄨˊㄧㄠˋ", "ㄅㄧㄠˋ", "ㄅㄨˊ要辣", "ㄅㄨˊ。ㄧㄠˋ。"];
    var randomIndex = Math.floor(Math.random() * answers.length);
    var selectedAnswer = answers[randomIndex];

    document.getElementById('answer').textContent = selectedAnswer;
});
