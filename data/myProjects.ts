import { IProject } from "./types";

export const projects: IProject[] = [
  {
    img: "/financeApp.png",
    title: "Portofolio Tracker",
    shortDesc: "A finance app made with React and Golang",
    github: "https://github.com/TudorEsan/FinanceAppGo",
    desc: String.raw`The main goal when I started to develop this app was to learn Golang. 
    The frontent is made with React and the backend is made with Golang. 
    The app is deployed on Digital Ocean and the database is hosted on MongoDB Atlas. 

    The app is a portofolio tracker. You can add your portofolio and see how much money you have made or lost.
    Currently you cannot connect to specific brokers or exchanges, but I hope to add binance and coinbase in the future.

    This project is still in development, and I will add features to it.
    `,
    learnedAbilities: [
      "Golang Programming Language",
      "Docker",
      "Deploy on a Digital Ocean Dropplet",
      "GRPC",
    ],
    link: "http://financeapp.tudoresan.com/",
  },
  {
    img: "/sdt.jpeg",
    title: "Secure Document Transfer",
    shortDesc:
      "I created this app at a contest named (DPIT - Descopera ti pasiunea in IT/Discover your passion in IT)",
    desc: "The purpose of this app is to share documents easier. The app has two different types of accounts, providers and regular accounts, the providers can share documents with other accounts. This app is made with react and firebase. The site is only styled for mobile.",
    learnedAbilities: [
      "Work in react",
      "Use firebase",
      "Authenticate users",
      "Do simple styling with css",
    ],
    github: "https://github.com/ssebastianp/sdt",
  },
  {
    img: "/minimax.png",
    title: "Maze Solver",
    shortDesc: "A python app that solves mazes using Lee and A* algorithm",
    desc: "This app lets you create a maze and find the shortest path to the finish. The solution can be found using 2 different algorithms, one is faster than the other but there is a catch. The A* also knows how far his current position is relative to the finish point.",
    learnedAbilities: [
      "Use more complex algorithms",
      "Build a python GUI",
      "Debugging errors in the algorithm",
    ],
    github: "https://github.com/TudorEsan/Maze",
  },
  {
    img: "/old-site.png",
    title: "My older Website",
    shortDesc: "An older version of my site that I decided to remake",
    desc: "I decided to remake this site because I did not really like the design and it was not responsive. However, I liked that I created a backend for it where I could log in and keep track of the cryptocurrencies that I had at the time. It was a fun project. At first, my backend ran on a raspberry pi 3 on my network. I struggled quite a lot until I managed to get the HTTPS certificate, only to realize that it was quite expensive to get a static IP :). You can find this site at this address: \n https://tudoresan.netlify.app",
    learnedAbilities: [
      "Build a node backend using express",
      "Use jwt to authenticate",
      "Use Mongo DB",
      "Work with middlewares",
      "Work with Typescript",
    ],
    github: "https://github.com/TudorEsan/MySite",
  },
  {
    img: "/tictactoe.png",
    title: "Tic Tac Toe",
    shortDesc: "A python app that plays tic tac toe against you",
    desc: "The game uses the minimax algorithm to play against a human. It will predict next moves and will find a way to beat the human player or at least to make a draw.",
    learnedAbilities: [
      "Understand the minimax algorithm",
      "Build a python GUI",
      "Debbuging errors in the algorithm",
    ],
    github: "https://github.com/TudorEsan/TicTacToe",
  },
];