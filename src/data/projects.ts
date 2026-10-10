export type Project = {
  name: string;
  url: string;
  description: string;
  github: string;
};

export const projects: Project[] = [
  {
    name: "Fate Of The Eight",
    url: "https://fate-of-the-eight.jeremyphilipson.dev",
    description: "A custom-built Formula 1 fantasy league with drafts, scoring, standings, race-by-race points, and graphical race replays.",
    github: "https://github.com/jlp0422/fate-of-the-eight",
  },
  {
    name: "NFL Wins Pool",
    url: "https://nfl-wins-pool.jeremyphilipson.dev",
    description: "Multi-year wins pool standings for friends, tracking weekly wins and results over time.",
    github: "https://github.com/jlp0422/nfl-wins-pool",
  },
  {
    name: "Coffee Golf Leaderboard",
    url: "https://coffee-golf-leaderboard.jeremyphilipson.dev",
    description: "Track your Coffee Golf scores, share and compete against friends, follow your progress over time, and see all-time bests.",
    github: "https://github.com/jlp0422/coffee-golf-leaderboard",
  },
  {
    name: "Sports Percentage",
    url: "https://sports-percentage.jeremyphilipson.dev",
    description: "Curious what 44% means in the world of sports? Enter any percentage to find a sports moment that's just as likely.",
    github: "https://github.com/jlp0422/sports-percentage",
  },
  {
    name: "Sport Logo Alphabet Quiz",
    url: "https://sport-logo-alphabet-quiz.jeremyphilipson.dev",
    description: "A trivia game that tests your knowledge of sports logos using the letters found in each one.",
    github: "https://github.com/jlp0422/sport-logo-alphabet-quiz",
  },
];
