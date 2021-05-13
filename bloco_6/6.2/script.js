/* function createStateOptions() {
    let states = document.getElementById('state');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
    for (let index = 0; index < stateOptions.length; index += 1) {
      let createOptions = document.createElement('option');
      states.appendChild(createOptions).innerText = stateOptions[index];
      states.appendChild(createOptions).value = stateOptions[index];
    }
  }    --------> gabarito exercicio */ 


  let stateSelect = document.querySelector('#estado-usuario');
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
  
  
  
  for(let index = 0; index < brStates.length; index+= 1) {
      let option = document.createElement("option");
      option.text = brStates[index].name;
      option.value = brStates[index].abbreviation;
      stateSelect.add(option);
  };
  
  let picker = new Pikaday({ field: $('#datepicker')[0] });

  
  /* function dateValidation(input, name){
      if(input.value.length === 0){
        return {
          message: 'A data não foi preenchida!'
        }
      }
    
      let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
      
      if(!regex.test(input.value)){
        return {
          message: 'Data: Formato inválido'
        };
      }
    
      let splitted = input.value.split('/');
      let day = splitted[0];
      let month = splitted[1];
      let year = splitted[2];
    
      if(day < 0 || day > 30){
        return {
          message: 'Dia inválido'
        };
      }
    
      if(month < 0 || month > 12){
        return {
          message: 'Mês inválido'
        }
      }
    
      if(year < 0) {
        return {
          message: 'Ano inválido'
        };
      }
    
      return true;
    }
   */