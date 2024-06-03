var quote = [
  "Be yourself; everyone else is already taken.",
  "So many books, so little time.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "A room without books is like a body without a soul.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
  "If you tell the truth, you don't have to remember anything.",
  "A friend is someone who knows all about you and still loves you.",
  "Always forgive your enemies; nothing annoys them so much.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "We accept the love we think we deserve.",
  "Time you enjoy wasting is not wasted time.",
  "No one can make you feel inferior without your consent.",
  "A dead end is just a good place to turn around.",
  "Even miracles take a little time.",
  "Find out who you are and do it on purpose.",
  "Each day comes bearing its gifts. Untie the ribbon.",
  "Say something positive, and you'll see something positive.",
  " Success is falling nine times and getting up ten.",
  "Do not judge me by my success, judge me by how many times I fell down and got back up again.",
  "Failure is the condiment that gives success its flavor.",
  "The secret to getting ahead is getting started.",
  "Money and success don't change people; they merely amplify what is already there.",
  "The time is always right to do what is right.",
  "The best thing to hold onto in life is each other.",
  "Despite the forecast, live like it's spring.",
  "If you don't like the road you're walking, start paving another one.",
  "Life has no limitations, except the ones you make.",
  "All serious daring starts from within.",
  "Never let the fear of striking out keep you from playing the game.",
  "You'll never do a whole lot unless you're brave enough to try.",
];

var quoteBox = document.getElementById("quote");
quoteBox.innerHTML =`“ ${quote[Math.floor(Math.random() * (quote.length + 1))]}”`;
let index = 0;

function newQ() {
  quoteBox.innerText =`“ ${quote[Math.floor(Math.random() * (quote.length + 1))]}”`;
}

console.log(quote.length);
