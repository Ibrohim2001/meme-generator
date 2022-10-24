const memeButton = document.querySelector('.meme_button');
const jokeButton = document.querySelector('.joke_button');
const quoteButton = document.querySelector('.quote_button');
const riddleButton = document.querySelector('.riddle_button');
const revealButton = document.querySelector('.reveal_btn');
const memesContent = document.querySelector('.meme_content');
const jokesContent = document.querySelector('.jokes_content');
const quotesContent = document.querySelector('.quotes_content');
const riddlesContent = document.querySelector('.riddles_content');

// MEMES

const memes = [
  "https://i.redd.it/a0v87gwzoge61.jpg",
  "https://i.redd.it/q29egav34ee61.jpg",
  "https://i.redd.it/iij16swxjie61.jpg",
  "https://i.redd.it/vek7dm2hrge61.jpg",
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
  "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
  "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
  "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
];

// JOKES
const jokes = [
  "This statement",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
];

// Quotes

const quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote:
      "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum",
  },
  {
    quote:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan",
  },
  {
    quote:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
  },
];

// Riddles

const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
  },
  {
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine",
  },
];
function clearAll() {
  memesContent.innerHTML = '';
  jokesContent.innerHTML = '';
  quotesContent.innerHTML = '';
  riddlesContent.innerHTML = '';
}
memeButton.addEventListener('click', () => {
  const randomImg = Math.floor(Math.random() * memes.length);
  const img = memes[randomImg];
  const image = document.createElement('img');
  image.setAttribute('src', img);
  clearAll();
  memesContent.appendChild(image);
});

jokeButton.addEventListener('click', () => {
  const randomJoke = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomJoke];
  const jokeText = document.createElement('p');
  jokeText.textContent = joke;
  clearAll();
  jokesContent.appendChild(jokeText);
});

quoteButton.addEventListener('click', () => {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  const quoting = quotes[randomQuote].quote;
  const quoteText = document.createElement('p');
  const quotingAuthor = quotes[randomQuote].author;
  const authorText = document.createElement('span');
  quoteText.textContent = `"${quoting}"`;
  authorText.textContent = quotingAuthor;
  clearAll();
  quotesContent.appendChild(quoteText);
  quotesContent.appendChild(authorText);
});

riddleButton.addEventListener('click', () => {
  const randomRiddle = Math.floor(Math.random() * riddles.length);
  const {question, answer} = riddles[randomRiddle];
  const riddleQuestion = document.createElement('p');
  riddleQuestion.textContent = question;
  
  const riddleAnswer = document.createElement('p');
  riddleAnswer.setAttribute('id', 'answer_text');
  riddleAnswer.textContent = answer;
  clearAll();
  riddleAnswer.hidden = true;

  riddlesContent.appendChild(riddleQuestion);
  riddlesContent.appendChild(riddleAnswer);
});

revealButton.addEventListener('click', () => {
  const riddleAnswer = document.querySelector('#answer_text');
  const riddle = riddlesContent.querySelector('p');
  if(riddle && riddleAnswer.hidden) {
    riddleAnswer.hidden = false;
  }
});