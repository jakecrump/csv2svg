const fs = require('fs');
const cheerio = require('cheerio');


const csvFilePath='./input.csv'
const csv=require('csvtojson');

let spaceBetweenLines = 15;

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    fs.readFile('./initial.svg', 'utf-8', (err, bod)=>{
    	const $ = cheerio.load(bod);
    	for (let i in jsonObj){
    		$('svg').append(`<text transform="matrix(1 0 0 1 58.7788 ${spaceBetweenLines})" class="st1 st2">${jsonObj[i].something}</text>`)
    		spaceBetweenLines += 15;
    	}	
    	fs.writeFileSync('./output.svg', $.html('svg'), 'utf-8')
    	console.log('converted!!')
    })
})