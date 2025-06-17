# Teste‑Front‑End

Repositório de **prática e documentação** em testes de aplicações front‑end, organizado em *desafios* e *atividades* independentes. Cada etapa demonstra ferramentas de automação, desempenho e qualidade de software (Selenium WebDriver, Jasmine, Apache JMeter, Maven, Java SDK 8, entre outras).

> **Objetivo** Consolidar conhecimento em QA e servir como portfólio técnico.

---

## 📂 Estrutura

```text
teste-front-end/
├── desafio-1/
│   ├── apache-jmeter-5.6.3/                    # Ferramenta de testes de performance
│   ├── jasmine-standalone-4.5.0/
|   ├── PDFs/              # Testes unitários JS no navegador
│   |   ├── Exemplo_documento-de-caso-de-teste.office
│   |   ├── teste front-end.pdf                     # Guia geral do desafio
│   |   ├── Testefront_jasmine_RO.pdf               # Guia de teste com Jasmine
│   |   ├── Testefront_Jmeter_ro.pdf              # Guia de teste com JMeter
│   └── JavaSetup8u421/                         # Instalador JRE 8 (dependência)
│
├── desafio-2/
│   ├── apache-maven-3.9.9-bin/                 # Build e gestão de dependências
│   ├── PDFs/                                   # 1‑eclipse, 2‑jdk8, 3‑apache‑maven …
│   │   ├── 1-eclipse.pdf
│   │   ├── 2-jdk8.pdf
│   │   ├── 3-apache-maven.pdf
│   │   ├── 4-config-windows.pdf
│   │   ├── 5-chromedriver.pdf
│   │   ├── 8-interagindo-elementos.pdf
│   │   └── 9-interagindo-pagina.pdf
│   ├── teste o google.side 
│   └── testegoogle-1.side
│
├── atividade-2/
│   ├── projeto-api-jmeter/                     # Plano de performance de uma API
│   ├── atividade-teste-JMeter.office           # Documento de teste
│   ├── modelo-plano-de-testes-JMeter.office    # Template de plano de testes
│   └── testefront-ativ-jmeter.pdf              # Guia da atividade utilizando JMeter
│
├── atividade-3/
│   ├── testes-sistema-de-calculadora.pdf       # Caso de teste funcional
│   ├── modelo-plano-de-testes-jasmine          # Template de testes unitários
│   ├── teste-maior-idade.pdf                   # Guia da atividade maior idade
│   └── testefront-ativ-jasmine.pdf             # Guia da atividade utilizando jasmine
│
└── atividade-4/
    ├── projeto-api/                            # API CRUD para testes E2E
    ├── atividade-selenium.office               # Documento da atividade proposta
    ├── editar.side | excluir.side | inserir.side # Rotinas gravadas no Selenium IDE
    ├── modelo-plano-de-teste-fcional.office    # Template de teste funcional
    └── testefront-ativ-selenium.pdf            # Guia da atividade utilizando o selenium
```

---

## Como usar este repositório

1. **Clonar** o projeto:
   ``` bash
   git clone https://github.com/seu‑usuario/teste-front-end.git
   ```
2. **Instalar dependências** conforme cada desafio:
   - Java 8 JDK (OpenLogic) + Maven 3.9.9 (desafio‑2)
   - Eclipse IDE (bundled) ou VS Code
   - JMeter 5.6.3, Jasmine 4.5.0 stand‑alone
3. **Importar projetos**:
   - Desafios 1 e 2 podem ser importados no Eclipse via *Existing Maven Project*.
   - Scripts `.side` podem ser executados no [Selenium IDE](https://www.selenium.dev/selenium-ide/).
4. **Executar testes**:
   - **Jasmine**: abrir `SpecRunner.html` em `jasmine-standalone-4.5.0`.
   - **JMeter**: abrir o plano `.jmx` em `apache-jmeter-5.6.3` e pressionar ▶.
   - **Selenium WebDriver**: compilar com Maven e rodar `mvn test`.

---

## Documentação
Para cada desafio/atividade há arquivos `.pdf` ou `.office` com:
- Cenários e casos de teste
- Plano de testes detalhado
- Evidências de execução

---

## Contribuindo
Sinta‑se livre para abrir *issues* ou *pull requests* com melhorias de scripts, documentação ou novos desafios.

---

## Licença
Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
