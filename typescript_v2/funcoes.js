var soma = function (x, y) {
    return x + y;
};
var sub = function (x, y) {
    return x - y;
};
var funcao = function (name) {
    return 'Welcome ' + name;
};
var getNome = function (name) { return 'Nome: ' + name; };
var getNomeCompleto = function (nome, sobrenome) {
    if (typeof sobrenome != 'undefined')
        return nome + ' ' + sobrenome;
    else
        return nome;
};
console.log(soma(3, 1));
console.log(sub(3, 1));
console.log(funcao('Rossano'));
console.log(getNome('Rossano'));
console.log(getNomeCompleto('Rossano', 'Bavaresco'));
console.log(getNomeCompleto('Rossano'));
