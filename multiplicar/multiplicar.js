
const fs = require('fs');

let listarTabla = (base, limite) => {

	if (!Number(base)) {

		console.log(`El valor para la base (${base}) no es un número`);
		return;
	}

	if (!Number(limite)) {

		console.log(`El valor para el límite (${limite}) no es un número`);
		return;
	}

	for (let i=1;i<=limite;i++) {

		console.log(`${base} * ${i} = ${base*i}`);
	}
}

let crearArchivo = (base, limite) => {

	return new Promise((resolve, reject) => {

		if (!Number(base)) {

			reject(`El valor para la base (${base}) no es un número`);
			return;
		}

		if (!Number(limite)) {

			reject(`El valor para el límite (${limite}) no es un número`);
			return;
		}

		let data = '';

		for (let i=1;i<=limite;i++) {

			data += `${base} * ${i} = ${base*i}\n`;
		}

		fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {

			if (err) 
				reject(err);
			else
				resolve(`tabla_${base}.txt`);
		});
	});
}

module.exports = {

	listarTabla,
	crearArchivo
}
