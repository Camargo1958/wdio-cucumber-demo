# WebdriverIO with Cucumber demo project

Steps:
1 - >npm init -y
2 - >nm init wdio

===============================
🤖 WDIO Configuration Wizard 🧙
===============================

✔ A project named "wdio-cucumber-demo" was detected at "C:\Local-Dev\wdio-cucumber-demo", correct? Yes
✔ What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
✔ Where is your automation backend located? On my local machine
✔ Which environment you would like to automate? Web - web applications in the browser
✔ With which browser should we start? Chrome
✔ Which framework do you want to use? Cucumber (https://cucumber.io/)
✔ Do you want to use Typescript to write tests? No
✔ Do you want WebdriverIO to autogenerate some test files? Yes
✔ What should be the location of your feature files? C:\Local-Dev\wdio-cucumber-demo\features\**\*.feature
✔ What should be the location of your step definitions? C:\Local-Dev\wdio-cucumber-demo\features\step-definitions\steps.js
✔ Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
✔ Where are your page objects located? C:\Local-Dev\wdio-cucumber-demo\features\pageobjects\**\*.js
✔ Which reporter do you want to use? spec
✔ Do you want to add a plugin to your test setup?
✔ Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! No
✔ Do you want to add a service to your test setup?
✔ Do you want me to run `npm install` Yes

3 - Executar o teste:
>npx wdio

4 - Criar um novo feature file (login.demo.fature)

5 - Criar um novo steps file (login.demo.steps.js)

6 - Criar steps não definidos:
a)>.\node_modules\.bin\cucumber-js (powershell)
b)Colar as estruturas dos steps gerados pelo Cucumber no novo steps file
c)Incluir 'async' nos funções de cada step
d)Implementar cada step com as ações necessárias

7 - IA - Prompt: 'configure o Allure Reporter para extrair relatórios de execução dos testes neste projeto'