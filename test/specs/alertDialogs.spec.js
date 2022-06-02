describe("testando Alert Dialogs", () => {

  afterEach(async () => {
    driver.reset()
  })

  it("verifica titulo do aplicativo", async () => {
    const tituloApp = await $("android.widget.TextView").getText()
    expect(tituloApp).toBe('API Demos')
  })

  it("verifica conteudo de OK CANCEL DIALOG WITH A MESSAGE", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click()
    await $("//android.widget.Button[@content-desc='OK Cancel dialog with a message']").click()
    const conteudoDaMensagemVisivel = await $("id=android:id/alertTitle").isDisplayed()
    expect(conteudoDaMensagemVisivel).toBe(true)
    const btnOkVisivel = await $('android=new UiSelector().text("OK").className("android.widget.Button")').isDisplayed()
    expect(btnOkVisivel).toBe(true)
    const btnCancelarVisivel = await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').isDisplayed()
    expect(btnCancelarVisivel).toBe(true)
  })

  it("verifica click botão OK de OK CANCEL DIALOG WITH A MESSAGE", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click()
    await $("//android.widget.Button[@content-desc='OK Cancel dialog with a message']").click()
    await $('android=new UiSelector().text("OK").className("android.widget.Button")').click()
    const btnOkVisivel = await $('android=new UiSelector().text("OK").className("android.widget.Button")').isDisplayed()
    expect(btnOkVisivel).toBe(false)
  })

  it("verifica click botão CANCEL de OK CANCEL DIALOG WITH A MESSAGE", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click()
    await $("//android.widget.Button[@content-desc='OK Cancel dialog with a message']").click()
    await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').click()
    const btnCancelarVisivel = await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').isDisplayed()
    expect(btnCancelarVisivel).toBe(false)
  })

  it("verifica conteudo de LIST DIALOG", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click()
    await $("//android.widget.Button[@content-desc='List dialog']").click()

    const btnComando1 = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed()
    expect(btnComando1).toBe(true)

    const btnComando2 = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed()
    expect(btnComando2).toBe(true)

    const btnComando3 = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed()
    expect(btnComando3).toBe(true)

    const btnComando4 = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed()
    expect(btnComando4).toBe(true)
  })

  it("verifica click command one de LIST DIALOG", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click()
    await $("//android.widget.Button[@content-desc='List dialog']").click()
    await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click()
    const verificaTextoComando = await $('android=new UiSelector().text("You selected: 0 , Command one").className("android.widget.TextView")').isDisplayed()
    expect(verificaTextoComando).toBe(true)
  })

  it("verifica click command two de LIST DIALOG", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click()
    await $("//android.widget.Button[@content-desc='List dialog']").click()
    await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').click()
    const verificaTextoComando = await $('android=new UiSelector().text("You selected: 1 , Command two").className("android.widget.TextView")').isDisplayed()
    expect(verificaTextoComando).toBe(true)
  })

  it("verifica click command three de LIST DIALOG", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click()
    await $("//android.widget.Button[@content-desc='List dialog']").click()
    await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').click()
    const verificaTextoComando = await $('android=new UiSelector().text("You selected: 2 , Command three").className("android.widget.TextView")').isDisplayed()
    expect(verificaTextoComando).toBe(true)
  })

  it("verifica click command four de LIST DIALOG", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click()
    await $("//android.widget.Button[@content-desc='List dialog']").click()
    await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click()
    const verificaTextoComando = await $('android=new UiSelector().text("You selected: 3 , Command four").className("android.widget.TextView")').isDisplayed()
    expect(verificaTextoComando).toBe(true)
  })

})

