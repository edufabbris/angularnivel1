angular.module('angularNivel1App').controller('appCtrl', function ($scope) {

    //Objeto vazio
    var aluno = {};

    //objeto com atributos
    var aluno2 = {
        nome: null,
        idade: null,
        sexo: null
    };


    aluno.nome = 'Eduardo';
    console.log(aluno.nome);
    aluno2.telefone = '1234567890';
    console.log(aluno2.telefone);


    ///array vazio
    $scope.alunos = [];
    //var alunos = new Array();
    $scope.alunos[0] = aluno2;
    $scope.alunos.push(aluno2);
    var arrayPopulado = ['string1', 'string2', 'string3']; 

    $scope.alunos = [
        {nome: 'João', idade: 25},
        {nome: 'Maria', idade: 3},
        {nome: 'Josué', idade: 30},
        {nome: 'Anastácia', idade: 32}
    ]
});