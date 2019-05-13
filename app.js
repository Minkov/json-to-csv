const fs = require('fs');

const contents = fs.readFileSync('./source.json', 'utf-8');

const json = JSON.parse(contents);

const columns = Object.keys(json[0]);

let titles = '';
columns.forEach(column => {
    titles += `${column},`;
});

console.log(titles.substr(0, titles.length - 1));
json.forEach(application => {
    let result = '';
    columns.forEach(column => {
        result += `${application[column]},`;
    });
    console.log(result.substr(0, result.length - 1));
});