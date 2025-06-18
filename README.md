# 🌐 TESTE FRONT-END: Qualidade e Automação em Aplicações Web

Bem-vindo ao meu repositório dedicado a **testes de aplicações front-end**!

Este espaço reúne uma série de desafios e atividades práticas que consolidam meu conhecimento em **Qualidade de Software (QA)** para interfaces de usuário. Aqui, demonstro minha experiência com diversas ferramentas e estratégias para automação, análise de desempenho e garantia da qualidade de software voltada para o cliente.

---

## 🎯 Objetivo

O principal objetivo deste repositório é consolidar e exibir meu conhecimento em:

* **Automação de Testes:** Utilização de ferramentas para simular interações do usuário e validar o comportamento da interface.
* **Testes de Performance:** Avaliação da velocidade e responsividade das aplicações front-end sob diferentes cargas.
* **Testes Unitários de JavaScript:** Validação de componentes e funções JavaScript isoladamente.
* **Testes Funcionais e E2E (End-to-End):** Verificação do fluxo completo de usuários em sistemas web.
* **Planejamento e Documentação de Testes:** Criação de planos de teste, casos de uso e relatórios para evidenciar os resultados.

---

## 🛠️ Tecnologias e Ferramentas

Neste repositório, você encontrará exemplos e projetos desenvolvidos com as seguintes tecnologias:

* **Selenium WebDriver:** Framework para automação de testes de navegador.
* **Selenium IDE:** Ferramenta para gravação e reprodução de interações de usuário para testes.
* **Jasmine:** Framework para testes unitários em JavaScript.
* **Apache JMeter:** Ferramenta para testes de carga e performance.
* **Maven:** Ferramenta de automação de build e gerenciamento de dependências para projetos Java.
* **Java SDK 8:** Ambiente de desenvolvimento para execução de projetos Java.
* **HTML, CSS, JavaScript:** Tecnologias base das aplicações front-end testadas.
* **Eclipse IDE / VS Code:** Ambientes de desenvolvimento utilizados.

---

## 📂 Estrutura do Repositório

Este repositório está organizado em desafios e atividades independentes, cada um com foco em diferentes aspectos dos testes front-end:

* **`desafio-1/`**: Focado em testes de performance com **Apache JMeter** e testes unitários JavaScript com **Jasmine**. Inclui guias e documentações em PDF.
    * `apache-jmeter-5.6.3/`: Ferramenta JMeter.
    * `jasmine-standalone-4.5.0/`: Framework Jasmine.
    * `PDFs/`: Documentos de caso de teste, guias gerais e específicos (Jasmine, JMeter).
    * `JavaSetup8u421/`: Instalador JRE 8.
* **`desafio-2/`**: Aborda a configuração de ambiente, gerenciamento de dependências com **Maven** e a utilização de **Selenium IDE** para rotinas de teste.
    * `apache-maven-3.9.9-bin/`: Ferramenta Maven.
    * `PDFs/`: Guias de instalação e configuração de ferramentas (Eclipse, JDK, Maven, ChromeDriver).
    * `teste o google.side`, `testegoogle-1.side`: Rotinas de teste gravadas no Selenium IDE.
* **`atividade-2/`**: Exemplos de plano de performance de APIs utilizando **JMeter**, com documentos de teste e templates.
    * `projeto-api-jmeter/`: Plano de performance de uma API.
    * `atividade-teste-JMeter.office`, `modelo-plano-de-testes-JMeter.office`: Documentos e templates de teste.
* **`atividade-3/`**: Casos de teste funcional e unitário com **Jasmine**, incluindo modelos de plano de testes.
    * `testes-sistema-de-calculadora.pdf`: Caso de teste funcional.
    * `modelo-plano-de-testes-jasmine`: Template de testes unitários.
    * `teste-maior-idade.pdf`, `testefront-ativ-jasmine.pdf`: Guias de atividades.
* **`atividade-4/`**: Focada em testes E2E com **Selenium WebDriver** e **Selenium IDE** em uma API CRUD.
    * `projeto-api/`: API CRUD para testes E2E.
    * `atividade-selenium.office`: Documento da atividade proposta.
    * `editar.side`, `excluir.side`, `inserir.side`: Rotinas gravadas no Selenium IDE.
    * `modelo-plano-de-teste-fcional.office`, `testefront-ativ-selenium.pdf`: Template e guia da atividade.

---

## 💡 Como Usar/Explorar

1.  **Clone o Repositório:** Para explorar os projetos localmente, clone este repositório em sua máquina:
    ```bash
    git clone [https://github.com/SEU_USUARIO/teste-front-end.git](https://github.com/SEU_USUARIO/teste-front-end.git)
    ```
    *(Lembre-se de substituir `SEU_USUARIO` pelo seu nome de usuário do GitHub)*
2.  **Instale as Dependências:** Consulte os PDFs e guias dentro de cada pasta de desafio/atividade para instalar as dependências específicas (Java JDK, Maven, JMeter, Jasmine, etc.).
3.  **Importe e Execute os Projetos:**
    * Projetos Java/Maven (Desafios 1 e 2): Podem ser importados no Eclipse via *Existing Maven Project*.
    * Scripts `.side` (Atividade 4): Podem ser executados diretamente no [Selenium IDE](https://www.selenium.dev/selenium-ide/).
    * Testes **Jasmine**: Abra o arquivo `SpecRunner.html` na pasta `jasmine-standalone-4.5.0` diretamente no navegador.
    * Testes **JMeter**: Abra o plano `.jmx` (ex: em `projeto-api-jmeter/`) na interface do Apache JMeter e clique em "Iniciar" (▶).
    * Testes **Selenium WebDriver**: Navegue até a pasta do projeto (ex: em `desafio-2/`) e compile com Maven (`mvn clean install` ou `mvn test`).

---

## 📄 Documentação

Para cada desafio/atividade, você encontrará arquivos `.pdf` ou `.office` detalhados, que incluem:

* **Cenários e Casos de Teste:** Descrição dos fluxos e interações a serem testados.
* **Plano de Testes Detalhado:** Estratégias e ambientes para execução dos testes.
* **Evidências de Execução:** Resultados e artefatos gerados durante os testes.

---

## 🤝 Contribuições

Sinta-se livre para abrir *issues* ou *pull requests* com sugestões de melhorias nos scripts, na documentação ou para adicionar novos desafios de teste!

---

## ⚖️ Licença

Este projeto é distribuído sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE` no repositório.

---
