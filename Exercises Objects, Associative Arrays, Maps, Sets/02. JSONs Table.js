function jsonTable(input) {
    let html = '<table>\n'
    for (let i = 0; i < input.length; i++) {
        let curent = (input[i]).split(',')
        let names = curent[0].split(':')
        let position = curent[1].split(':')
        let salary = curent[2].split(':')
        salary[1] = salary[1].substring(0, salary[1].length - 1)

        let namee = JSON.parse(names[1])
        let positionn = JSON.parse(position[1])
        let salaryy = JSON.parse(salary[1])

        html += '    <tr>\n        <td>' + namee + '</td>\n' + '        <td>' + positionn + '</td>\n' + '        <td>' + salaryy + '</td>\n    <tr>\n'
    }
    html += '</table>'

    console.log(html)
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}', '{"name":"Teo","position":"Lecturer","salary":1000}', '{"name":"Georgi","position":"Lecturer","salary":1000}']);