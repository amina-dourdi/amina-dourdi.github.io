import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('cv amina dourdi - ang 3.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error(error);
});
