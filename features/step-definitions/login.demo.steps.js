const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^que o usuário está na página de (\w+)$/, async function (page) {
    await pages[page].open()
});

When(/^o usuário insere (\w+) e (.+)$/, async function (username, password) {
    await LoginPage.inputUsername.setValue(username);
    await LoginPage.inputPassword.setValue(password);
});

When('clica no botão de login', async function () {
    await LoginPage.btnSubmit.click();
});

Then('o usuário deve ser redirecionado para a página inicial', async function () {
    const currentUrl = await browser.getUrl();
    if (!currentUrl.includes('secure')) {
        throw new Error(`Expected URL to contain 'secure' but was ${currentUrl}`);
    }
});

Then(/^a mensagem (.*) de confirmação deve ser exibida$/, async function (message) {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
    const screenshot = await browser.takeScreenshot();
});