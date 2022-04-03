let skills = ["HTML", "CSS", "JavaScript", "Empatia", "Organização"];

const alteraLetraX = (stringInformada, frase) => {
  let separador = frase.split(" ");
  for (let index = 0; index < separador.length; index += 1) {
    if (separador[index] === "x") {
      separador[index] = stringInformada;
    }
  }
  return separador.join(" ");
};

console.log(alteraLetraX("Helena", "Tryber x aqui!"));

const concatenar = () => {
  let ordenar = skills.sort();
  return ordenar;
};

console.log(`${alteraLetraX('Helena', 'Tryber x aqui')} Minha cinco principais habilidades são:`);
