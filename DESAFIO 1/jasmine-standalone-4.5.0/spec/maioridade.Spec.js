describe("Teste de validação - Maior Idade", function(){
    it("Validação Maior idade", function(){
        expect(maioridade(18)).toBe('Maior Idade');
    });

});

describe("Teste de Validação - Menor de Idade", function(){
    it("Validação - Menor idade", function(){
        expect(maioridade(10)).toBe('Menor Idade');
    });
});
