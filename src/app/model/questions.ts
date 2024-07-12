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
  },
  {
    question: "Quem proclamou a Independência do Brasil?",
    choices: ["Dom Pedro I", "Dom Pedro II", "José Bonifácio"],
    answer: "Dom Pedro I"
  },
  {
    question: "Em que ano o Brasil foi descoberto?",
    choices: ["1500", "1492", "1530"],
    answer: "1500"
  },
  {
    question: "Qual foi a primeira capital do Brasil?",
    choices: ["Salvador", "Rio de Janeiro", "São Paulo"],
    answer: "Salvador"
  },
  {
    question: "Quem foi o líder da Revolução Farroupilha?",
    choices: ["Bento Gonçalves", "Tiradentes", "Dom Pedro II"],
    answer: "Bento Gonçalves"
  },
  {
    question: "Qual foi o último imperador do Brasil?",
    choices: ["Dom Pedro II", "Dom João VI", "Dom Pedro I"],
    answer: "Dom Pedro II"
  },
  {
    question: "Em que ano foi assinada a Lei Áurea?",
    choices: ["1888", "1822", "1900"],
    answer: "1888"
  },
  {
    question: "Quem foi o presidente do Brasil durante a Proclamação da República?",
    choices: ["Deodoro da Fonseca", "Prudente de Morais", "Floriano Peixoto"],
    answer: "Deodoro da Fonseca"
  },
  {
    question: "Qual foi a guerra que opôs Brasil e Paraguai?",
    choices: ["Guerra do Paraguai", "Guerra dos Farrapos", "Guerra do Contestado"],
    answer: "Guerra do Paraguai"
  },
  {
    question: "Quem foi o líder da Inconfidência Mineira?",
    choices: ["Tiradentes", "Dom Pedro I", "José Bonifácio"],
    answer: "Tiradentes"
  },
  {
    question: "Em que ano ocorreu a Proclamação da República no Brasil?",
    choices: ["1889", "1822", "1900"],
    answer: "1889"
  },
  {
    question: "Qual foi a primeira Constituição do Brasil?",
    choices: ["Constituição de 1824", "Constituição de 1891", "Constituição de 1988"],
    answer: "Constituição de 1824"
  },
  {
    question: "Quem foi o líder da Revolta da Vacina?",
    choices: ["Oswaldo Cruz", "Carlos Chagas", "Anita Garibaldi"],
    answer: "Oswaldo Cruz"
  },
  {
    question: "Em que ano foi fundada a cidade de Brasília?",
    choices: ["1960", "1956", "1945"],
    answer: "1960"
  },
  {
    question: "Qual foi a primeira capital do Brasil Império?",
    choices: ["Rio de Janeiro", "Salvador", "São Paulo"],
    answer: "Rio de Janeiro"
  },
  {
    question: "Quem foi o presidente do Brasil durante a Revolução Constitucionalista de 1932?",
    choices: ["Getúlio Vargas", "Júlio Prestes", "Washington Luís"],
    answer: "Washington Luís"
  },
  {
    question: "Quem foi o líder da Revolução Russa de 1917?",
    choices: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky"],
    answer: "Vladimir Lenin"
  },
  {
    question: "Quem foi o imperador romano conhecido por seu édito de tolerância religiosa em 313 d.C.?",
    choices: ["Augusto", "Nero", "Constantino"],
    answer: "Constantino"
  },
  {
    question: "Qual foi o evento que marcou o início da Idade Moderna na Europa?",
    choices: ["Queda do Império Romano", "Descoberta da América por Cristóvão Colombo", "Revolução Francesa"],
    answer: "Descoberta da América por Cristóvão Colombo"
  },
  {
    question: "Quem foi o líder sul-africano conhecido por seu papel na luta contra o apartheid?",
    choices: ["Nelson Mandela", "Desmond Tutu", "F. W. de Klerk"],
    answer: "Nelson Mandela"
  },
  {
    question: "Qual foi o ano da independência dos Estados Unidos?",
    choices: ["1776", "1783", "1812"],
    answer: "1776"
  },
  {
    question: "Quem foi o primeiro imperador de Roma?",
    choices: ["Júlio César", "Augusto", "Nero"],
    answer: "Augusto"
  },
  {
    question: "Em que ano começou a Primeira Guerra Mundial?",
    choices: ["1914", "1918", "1939"],
    answer: "1914"
  },
  {
    question: "Qual país foi liderado por Genghis Khan?",
    choices: ["China", "Japão", "Mongólia"],
    answer: "Mongólia"
  },
  {
    question: "Quem descobriu a América em 1492?",
    choices: ["Cristóvão Colombo", "Vasco da Gama", "Ferdinando Magalhães"],
    answer: "Cristóvão Colombo"
  },
  {
    question: "Em que ano o muro de Berlim foi derrubado?",
    choices: ["1989", "1991", "1975"],
    answer: "1989"
  },
  {
    question: "Quem foi o primeiro presidente dos Estados Unidos?",
    choices: ["Thomas Jefferson", "George Washington", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    question: "Qual foi a civilização antiga que construiu as pirâmides de Gizé?",
    choices: ["Maias", "Astecas", "Egípcios"],
    answer: "Egípcios"
  },
  {
    question: "Em que ano o Titanic afundou?",
    choices: ["1912", "1905", "1920"],
    answer: "1912"
  },
  {
    question: "Quem pintou a Mona Lisa?",
    choices: ["Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  }
];

export function fisherYatesShuffle(arr: any[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
