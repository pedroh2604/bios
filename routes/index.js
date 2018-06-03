var express = require('express');
var router = express.Router();

// // stores character's info
const bios = {
	//bios key (e.g pedro:)
	pedro: {
	id: 'pedro',
	name: 'Pete π',
	role: 'Vulcan, programador, professor, cabeludo, futuro colonizador de Marte',
	birth: '1999',
	background: 'Pedro sempre foi apaixonado por tecnologia, matemática, inglês e música. Sonha com a exploração espacial e união de diversos seres vivos por meio da tecnologia, sendo eles humanos ou não',
	photo: '/images/pete.png',
	quote: 'Obrigado pela confiança',
	highlights: ['CTO da We-Sci', 'Colaborador da Hike Academy'],
	},

	helicopterson: {
	id: 'helicopterson',
	name: 'Helicopterson dos Santos',
	role: 'Escritor, poeta, filantropo',
  	birth: '1870',
  	death: '1950',
  	background: 'Helicopterson sempre foi um jovem diferenciado, no mundo da lua, com aspirações muito além de sua geração. Com todos os seus sonhos e com muito esforço, um dia aprendeu a voar. Isso, ele aprendeu a voar, fazendo justiça à seu nome tão único. Ele continuou se esforçando, aprendendo muito e dominando a arte do voô, sempre chegando a alturas cada vez maiores. Até que um dia chegou na Lua, e essa na verdade é a última notícia que se tem dele. Depois disso, ele continuou voando cada vez mais alto, e ninguém mais o viu.' ,
  	photo: '/images/helicopterson.png',
  	quote: 'Se não for pra voar, eu nem desço pro Play',
  	highlights: ['Nasceu', 'Voou', 'Voou mais alto', 'Primeiro homem a pisar na lua', 'Sumiu'],
	},

	lincoln: {
	id: 'lincoln',
    name: 'Abraham Lincoln',
    role: 'Ex-presidente, advogado',
    birth: '1809',
    death: '1865',
    background: 'Abraham Lincoln foi um político norte-americano que serviu como o 16° presidente dos Estados Unidos, posto que ocupou de 4 de março de 1861 até seu assassinato em 15 de abril de 1865. Lincoln liderou o país de forma bem-sucedida durante sua maior crise interna, a Guerra Civil Americana, preservando a União e abolindo a escravidão, fortalecendo o governo nacional. Lincoln tem sido consistentemente considerado por estudiosos e pelo povo como um dos três maiores presidentes dos Estados Unidos.',
    photo: '/images/lincoln.png',
    quote: 'Governo das pessoas, pelas pessoas, para as pessoas, nunca deixará de existir na Terra.',
    highlights: ['Aprovou a Lei da Propriedade Rural', 'Emitiu a Proclamação de Emancipação, que levou à abolição da escravatura nos EUA', 'Liderou a União à vitória da Guerra Civil'],
	},

	boça: {
	id: 'boça',
	name: 'Luis Boça',
	role: 'Protagonista da novela Sinhá-Boça',
	birth: '31 anos muito bem vividos mew',
	death: '2031',
	background: 'Boça é um filho de vó com orgulho, criado a muito leite com pera.',
	photo: 'images/boça.png',
	quote: 'Mundo injusto mew',
	highlights: ['Sócio fundador do fã clube dos minigameiros', 'Fã n° 1 do Kenny G', 'Cliente preferencial do Mr. Lanches'],
	},

	joselito: {
	id: 'joselito',
	name: 'Joselito',
	role: 'Dono de dogão, pedreiro',
	birth: '1982',
	background: 'Se você sempre teve vontade fazer isso, mas nunca teve coragem, vote em mim',
	death: 'Zoeira never dies',
	photo: 'images/joselito.png',
	quote: 'Ele não sabe brincar, ele é Joselito',
	highlights: ['Fundador do PSN: Partido dos Sem Noção']
	}
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { bios: bios });
});

/* GET character's page. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('bio', bios[id]);
});

module.exports = router;
