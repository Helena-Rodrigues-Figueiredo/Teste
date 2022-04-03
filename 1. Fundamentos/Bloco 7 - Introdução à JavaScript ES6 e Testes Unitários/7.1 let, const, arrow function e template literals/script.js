// function testingScope(escopo) {
//     if (escopo === true) {
//         var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

  const testingScope = escopo => {
      if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        console.log(`${ifScope}. Ótimo, fui utilizada no escopo`)
      } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(`${elseScope}. Tudo certo por aqui também!`)
      }
  }

  testingScope(false);