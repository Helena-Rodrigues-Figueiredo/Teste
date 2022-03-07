const piece = "BISPO";

switch (piece.toLowerCase()) {
  case "cavalo":
    console.log("ande em L, 2 casas na horizontal e mais 1 casa na vertical");
    break;

  case "bispo":
    console.log("ande na diagonal quantas casas quiser");
    break;

  case "peão":
    console.log("ande 1 casa para frente, se for a primeira jogada pode mover 2 casas");
    break;

  case "torre":
    console.log("ande na vertical ou na horizontal quantas casas quiser, desde que não esteja ocupada");
    break;

  case "rei":
    console.log("ande 1 casa na vertical ou na horizontal");
    break;

  case "rainha":
    console.log("ande em qualquer direção quantas casas quiser, desde que não esteja ocupada");
    break;

  default:
    console.log("não existe esta peça no xadrez");
}
