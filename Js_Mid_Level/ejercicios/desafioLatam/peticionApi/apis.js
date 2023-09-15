//nota: las funciones asyn await no sirve el metodo then
let btnConversor = document.getElementById('btnConvertir');

const dataAxios = async ()=> {
    try {
        let getDataAxios =  await axios.get("https://mindicador.cl/api");
        let response = getDataAxios.data;
        console.log(response);
        return response;
       
    } catch (err) {
        console.error(err.response.data.message);
    }
};

btnConversor.addEventListener('click', async () => {
    const data = await dataAxios();
    console.log(data);
    convertirMoneda(data);
    createdGraphi(data);
});

const convertirMoneda = (data) => {
    let inputPesos = document.getElementById('inputPesos').value;
    let selectValue = document.getElementById('selectValue').value;
    let resultado = document.getElementById('result');

    let dolarValor = data[selectValue].valor;
    console.log(dolarValor);
    console.log(selectValue);
    let result = inputPesos * dolarValor;
    
    let renderHTML = `
                    <h5>El valor del ${selectValue} es: ${dolarValor}</h5>
                    <h3>El cambio es: ${result}</h3>`
    resultado.innerHTML = renderHTML;
};

const createdGraphi = ({dolar, euro}) => {
    let myChart = document.getElementById('myChart');
    let html = "";
    html = `La ultima fecha de actualizacion es: ${dolar.fecha}
            La ultima fecha de actualizacion es: ${euro.fecha}
            `;
    myChart.innerText = html;
}