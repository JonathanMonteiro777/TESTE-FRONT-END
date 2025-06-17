describe("Teste Calculadora", function(){
     it("Somas validas", function(){
      expect(soma(1,2)).toBe(3);
      expect(soma(9,9)).toBe(18);
     });

     it("Somas invalidas", function(){
      expect(soma(1,2)).not.toBe(5);
      expect(soma(9,9)).not.toBe(15);
     });
});