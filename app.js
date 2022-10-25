const memeButton = document.querySelector('.meme_button');
const jokeButton = document.querySelector('.joke_button');
const quoteButton = document.querySelector('.quote_button');
const riddleButton = document.querySelector('.riddle_button');
const revealButton = document.querySelector('.reveal_btn');
const memesContent = document.querySelector('.meme_content');
const jokesContent = document.querySelector('.jokes_content');
const quotesContent = document.querySelector('.quotes_content');
const riddlesContent = document.querySelector('.riddles_content');


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

const api_url = "https://api.imgflip.com/get_memes";
const joke_api_url = "https://icanhazdadjoke.com/";

memeButton.addEventListener('click', () => {
  // fetch data
  async function getMemes(url) {
    const response = await fetch(url);
    const data = await response.json();
    getData(data);
  }
  // call function to fetch data
  getMemes(api_url);

  // getData to print to the screen
  const getData = (data) => {
    const memes = data.data.memes;
    const randomImg = Math.floor(Math.random() * memes.length);
    const img = memes[randomImg].url;
    const image = document.createElement('img');
    image.setAttribute('src', img);
    clearAll();
    memesContent.appendChild(image);
  }
});

jokeButton.addEventListener('click', () => {
  // fetch jokes
  const fetchJokes = async (url) => {
    const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: 'application/json'
          }
    });
    const jokesData = await response.json();
    // call getJokes function
    getJokes(jokesData);
  }
  
  // call fetchJokes() function 
  fetchJokes(joke_api_url);

  // print the joke to the screen
  const getJokes = (jokesData) => {
    const jokeText = document.createElement('p');
    jokeText.textContent = jokesData.joke;
    clearAll();
    jokesContent.appendChild(jokeText);
  }
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
