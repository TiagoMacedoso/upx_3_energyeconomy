let chuveiro = document.querySelector("#input_chuveiro")
let luz_andar1 = document.querySelector("#input_luz_andar1")
let luz_andar2 = document.querySelector("#input_luz_andar2")
let tomadas_10a = document.querySelector("#input_tomadas_10a")
let tomadas_20a = document.querySelector("#input_tomadas_20a")
let ar_condicionado = document.querySelector("#input_ar_condicionado")
let fatura = document.querySelector("#input_fatura")
let span_total_em_w = document.querySelector("#total_em_w")
let span_total_em_real = document.querySelector("#total_em_real")

let value_chuveiro = 0
let value_luz_andar1 = 0
let value_luz_andar2 = 0
let value_tomadas_10a = 0
let value_tomadas_20a = 0
let value_ar_condicionado = 0
let value_fatura = 0
let total_em_w = 0
let total_em_real = 0

setInterval(() => {
    getValues()

    total_em_w = value_chuveiro + value_luz_andar1 + value_luz_andar2 + value_tomadas_10a + value_tomadas_20a + value_ar_condicionado

    total_em_real = total_em_w * value_fatura

    let total_em_real_formatado = total_em_real.toFixed(2).replace('.', ',')

    span_total_em_real.textContent = total_em_real_formatado
    span_total_em_w.textContent = total_em_w
}, 500);


function getValues() {
    value_chuveiro = parseInt(chuveiro.value)
    value_luz_andar1 = parseInt(luz_andar1.value)
    value_luz_andar2 = parseInt(luz_andar2.value)
    value_tomadas_10a = parseInt(tomadas_10a.value)
    value_tomadas_20a = parseInt(tomadas_20a.value)
    value_ar_condicionado = parseInt(ar_condicionado.value)
    value_fatura = parseFloat(fatura.value.replace(',', '.'))
    
    value_chuveiro = isNaN(value_chuveiro) ? 0 : value_chuveiro
    value_luz_andar1 = isNaN(value_luz_andar1) ? 0 : value_luz_andar1
    value_luz_andar2 = isNaN(value_luz_andar2) ? 0 : value_luz_andar2
    value_tomadas_10a = isNaN(value_tomadas_10a) ? 0 : value_tomadas_10a
    value_tomadas_20a = isNaN(value_tomadas_20a) ? 0 : value_tomadas_20a
    value_ar_condicionado = isNaN(value_ar_condicionado) ? 0 : value_ar_condicionado
    value_fatura = isNaN(value_fatura) ? 0.0 : value_fatura
}