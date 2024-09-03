const questions = [
    "If you could have any superpower but only use it once a year, what would it be?",
    "What’s the most interesting place you’ve ever visited and why?",
    "If you were an inventor, what would you create first and why?",
    "What fictional world would you love to live in and what role would you play?",
    "If you could talk to animals, what’s the first thing you would ask them?",
    "What’s one question you would love to ask a historical figure?",
    "If you could master one skill instantly, what would it be?",
    "What’s the most unusual food you’ve ever tried and would you eat it again?",
    "If you could spend a day in someone else's shoes, who would it be and why?",
    "What’s the most thought-provoking book or movie you’ve experienced and how did it change you?"
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    const questionElement = document.getElementById('question');
    
    // Clear the previous question
    questionElement.textContent = '';
    
    // Typewriter effect
    let i = 0;
    function typeWriter() {
        if (i < question.length) {
            questionElement.textContent += question.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Adjust the speed of typing here (lower = faster)
        }
    }
    typeWriter();
});
