const listaDePessoasAprovadas = [
'gabriel@jlkg.com.br',
'helena@fldksjf.com.br',
'flavia@fgafjlj.com.br',
]

let listaDeEmails;

listaDeEmails =  listaDePessoasAprovadas.map((email) => {
	return {email: email, nota: 10};
});

console.log(listaDeEmails);