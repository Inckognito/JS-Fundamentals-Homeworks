function quiz(input) {
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n';
    html += '<quiz>\n';
    for( let i = 0; i < input.length; i += 2){
        let question = input[i];
        let answer = input[i + 1];
        html += `    <question>\n      ${question}\n   </question>\n`;
        html += `    <answer>\n      ${answer}\n   </answer>\n`;
    }
    html += '</quiz>';
    console.log(html);
}