const getEndereco = require('./services/serviceEndereco')
const getFrete = require('./services/serviceFrete')

test('recuperar endereco pelo cep - erro', async ()=>{
    expect(await getEndereco('26087111')).toBe('cep invalido')
})

test('calcular frete pelo cep', async ()=>{
    // resultado da api é estranho
    expect(await getFrete('99999999')).toBe(`{\n    \"Servicos\": {\n        \"cServico\": [\n            {\n                \"Codigo\": [\n                    \"41106\"\n                ],\n                \"Valor\": [\n                    \"35,40\"\n                ],\n                \"PrazoEntrega\": [\n                    \"9\"\n                ],\n                \"ValorSemAdicionais\": [\n                    \"35,40\"\n                ],\n                \"ValorMaoPropria\": [\n                    \"0,00\"\n                ],\n                \"ValorAvisoRecebimento\": [\n                    \"0,00\"\n                ],\n                \"ValorValorDeclarado\": [\n                    \"0,00\"\n                ],\n                \"EntregaDomiciliar\": [\n                    \"N\"\n                ],\n                \"EntregaSabado\": [\n                    \"N\"\n                ],\n                \"obsFim\": [\n                    \"\"\n                ],\n                \"Erro\": [\n                    \"0\"\n                ],\n                \"MsgErro\": [\n                    \"\"\n                ]\n            }\n        ]\n    }\n}`)
})