const questions = [
    "If you could have any superpower but only use it once a year, what would it be?",
    "What fictional world would you love to live in and what role would you play?",
    "If you could talk to animals, what’s the first thing you would ask them?",
    "If you could master one skill instantly, what would it be?",
    "What’s the most unusual food you’ve ever tried and would you eat it again?",
    "If you could spend a day in someone else's shoes, who would it be and why?",
    "What’s the most thought-provoking book or movie you’ve experienced and how did it change you?",
    "Which vegetable do you trust the least?",
    "How many french fries is it okay for a friend to take before you tell them to order their own?",
    "Would you rather take a nap inside a giant warm burrito or between two giant slices of warm French toast?",
    "Do you prefer dogs or cats?",
    "What do you think would happen if aliens found us?",
    "If you could pick up a new skill in an instant, what would it be?",
    "What’s one superpower you would NOT want?",
    "If you found yourself trapped in an elevator stacked floor to ceiling with one type of pastry, which pastry would you want it to be?",
    "Which fruit do you think would be most disappointed by the name we gave it?",
    "If you could have a song play every time you entered a room, what would it be?",
    "If spiders were always playing tiny guitars, would this make you more or less afraid of them?",
    "Your friend Todd is leaning out the window, asking you to toss him a donut. How many stories up could Todd be for you to still be confident in your ability to be on target with the donut?",
    "How would you spell the sound a hand dryer makes?",
    "If you were invited to four different animal dance parties happening simultaneously, whose party would you choose: the snake, horse, eagle, or Chihuahua?",
    "If you had to choose between a llama and a penguin preparing your tax return, which one would you trust?",
    "What is your go-to Super Smash Bros. character?",
  "What job do you think you’d be really good at?",
  "What’s the best / worst thing about your work / school?",
  "If you were an ice cream flavour, what would you be?",
  "What’s the last show you binge-watched?",
  "What food do you absolutely dislike",
  "If you could only listen to 1 genre of music forever, what would it be?",
  "If you could have an unlimited supply of one thing for the rest of your life, what would it be",
  "If your life was a hashtag, what would it be?",
  "If you could speak any language fluently, which would it be?", 
];

let usedQuestions = [];

document.getElementById('generate-btn').addEventListener('click', function() {
    if (usedQuestions.length === questions.length) {
        // All questions have been used, reset the list
        usedQuestions = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);
    const question = questions[randomIndex];
    const questionElement = document.getElementById('question');
    
    // Display the full question immediately
    questionElement.textContent = question;
});

