/* function createAllStatesOptions (allStates) {

let estados = document.querySelector('#est-usuario');

    for (let index = 0; index <allStates.length; index += 1) {
        if (allStates[index] != allStates) {
        estados.createElement('option')
        }
    }
}
createAllStatesOptions([Acre - AC, Alagoas - AL, Amapá - AP, Amazonas - AM, Bahia - BA, Ceará - CE, Distrito Federal - DF, Espírito Santo - ES, Goiás - GO, Maranhão - MA, Mato Grosso - MT, Mato Grosso do Sul - MS, Minas Gerais - MG, Pará - PA, Paraíba - PB, Paraná - PR, Pernambuco - PE, Piauí - PI, Rio de Janeiro - RJ, Rio Grande do Norte - RN, Rio Grande do Sul - RS, Rondônia - RO, Roraima - RR, Santa Catarina - SC, São Paulo - SP, Sergipe - SE, Tocantins - TO]) */

let brStates = [
    { name: 'Acre', abbreviation: 'AC'},
    { name: 'Alagoas', abbreviation: 'AL'},
    { name: 'Amapá', abbreviation: 'AP'},
    { name: 'Amazonas', abbreviation: 'AM'},
    { name: 'Bahia', abbreviation: 'BA'},
    { name: 'Ceará', abbreviation: 'CE'},
    { name: 'Distrito Federal', abbreviation: 'DF'},
    { name: 'Espírito Santo', abbreviation: 'ES'},
    { name: 'Goiás', abbreviation: 'GO'},
    { name: 'Maranhão', abbreviation: 'MA'},
    { name: 'Mato Grosso ', abbreviation: 'MT'},
    { name: 'Mato Grosso do Sul', abbreviation: 'MS'},
    { name: 'Minas Gerais ', abbreviation: 'MG'},
    { name: 'Pará', abbreviation: 'PA'},
    { name: 'Paraíba', abbreviation: 'PB'},
    { name: 'Paraná ', abbreviation: 'PR'},
    { name: 'Pernambuco', abbreviation: 'PE'},
    { name: 'Piauí', abbreviation: 'PI'},
    { name: 'Rio de Janeiro', abbreviation: 'RJ'},
    { name: 'Rio Grande do Norte', abbreviation: 'RN'},
    { name: 'Rio Grande do Sul ', abbreviation: 'RS'},
    { name: 'Rondônia', abbreviation: 'RO'},
    { name: 'Roraima', abbreviation: 'RR'},
    { name: 'Santa Catarina', abbreviation: 'SC'},
    { name: 'São Paulo ', abbreviation: 'SP'},
    { name: 'Sergipe', abbreviation: 'SE'},
    { name: 'Tocantins', abbreviation: 'TO'}
];

let stateSelect = document.querySelector('#estado-usuario');

for(let index = 0; index < brStates.length; index+= 1) {
    let option = document.createElement("option");
    option.text = brStates[index].name;
    option.value = brStates[index].abbreviation;
    stateSelect.add(option);
};