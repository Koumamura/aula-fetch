const cep = document.querySelector("#cep");

cep.addEventListener("blur", (e)=>{
      let cepCorrigido = cep.value.replace("-","");
      const opt = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'

      }
      fetch(`https://viacep.com.br/ws/${cepCorrigido}/json/`)
      .then((response) => {response.json() 
            .then( data => console.log(data) );
      })
      .catch( e =>console.log('Erro : ' + e , message))
})