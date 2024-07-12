export const questions = [
  {
    question: "Quem descobriu a América?",
    choices: ["Cristóvão Colombo", "Vasco da Gama", "Fernando de Magalhães"],
    answer: "Cristóvão Colombo"
  },
  {
    question: "Em que ano ocorreu a Revolução Francesa?",
    choices: ["1789", "1776", "1804"],
    answer: "1789"
  },
  {
    question: "Quem foi o primeiro presidente dos Estados Unidos?",
    choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    question: "Qual era o nome do navio de Cristóvão Colombo?",
    choices: ["Santa Maria", "Pinta", "Niña"],
    answer: "Santa Maria"
  },
  {
    question: "Em que ano terminou a Segunda Guerra Mundial?",
    choices: ["1945", "1939", "1950"],
    answer: "1945"
  }
];

export function fisherYatesShuffle(arr: any[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
