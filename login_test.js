Feature("login");

Scenario("Login com Sucesso", ({ I }) => {
  I.amOnPage("https://automationpratice.com.br/");
  I.click("Login");
  I.fillField("#user", "leticiiar@outlook.com");
  I.fillField("#password", "1234567");
  I.click("#btnLogin");
  I.waitForText("Login realizado", 5);
}).tag("@sucesso");

Scenario("Login apenas com e-mail", ({ I }) => {
  I.amOnPage("https://automationpratice.com.br/");
  I.click("Login");
  I.fillField("#user", "leticiiar@outlook.com");
  I.click("#btnLogin");
  I.waitForText("Senha inválida", 5);
}).tag("@apenasE-mail");

Scenario("Login sem digitar e-mail e senha", ({ I }) => {
  I.amOnPage("https://automationpratice.com.br/");
  I.click("Login");
  I.click("#btnLogin");
  I.waitForText("E-mail inválido", 5);
}).tag("@apenasLogin");

Scenario("Login apenas com senha", ({ I }) => {
  I.amOnPage("https://automationpratice.com.br/");
  I.click("Login");
  I.fillField("#password", "1234567");
  I.click("#btnLogin");
  I.waitForText("E-mail inválido", 5);
}).tag("@apenasSenha");
