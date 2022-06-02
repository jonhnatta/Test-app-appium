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

describe("testando Display Options", () => {

  afterEach(async () => {
    driver.reset()
  })

  it("verifica display home as up", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Action Bar']").click()
    await $("//android.widget.TextView[@content-desc='Display Options']").click()
    await $("//android.widget.Button[@content-desc='DISPLAY_HOME_AS_UP']").click()
    const conteudo = await $("//android.widget.ImageButton[@content-desc='Navigate up']").isDisplayed()
    expect(conteudo).toBe(true)
  })

  it("verifica display show title", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Action Bar']").click()
    await $("//android.widget.TextView[@content-desc='Display Options']").click()
    await $("//android.widget.Button[@content-desc='DISPLAY_SHOW_TITLE']").click()
    const conteudo = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed()
    expect(conteudo).toBe(false)
  })

  it("verifica display show custom", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Action Bar']").click()
    await $("//android.widget.TextView[@content-desc='Display Options']").click()
    await $("//android.widget.Button[@content-desc='DISPLAY_SHOW_CUSTOM']").click()
    const conteudo = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed()
    expect(conteudo).toBe(true)
  })

  it("verifica display show navigation", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Action Bar']").click()
    await $("//android.widget.TextView[@content-desc='Display Options']").click()
    await $("//android.widget.Button[@content-desc='Navigation']").click()
    const tab1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed()
    expect(tab1).toBe(true)
    const tab2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').isDisplayed()
    expect(tab2).toBe(true)
    const tab3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').isDisplayed()
    expect(tab3).toBe(true)
  })


})

describe("testando fragment hide and show", () => {

  afterEach(async () => {
    driver.reset()
  })

  it("verifica conteudo de fragment hide and show", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Fragment']").click()
    await $("//android.widget.TextView[@content-desc='Hide and Show']").click()
    const conteudo = await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').isDisplayed()
    expect(conteudo).toBe(true)
  })

  it("verifica primeiro botão hide", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Fragment']").click()
    await $("//android.widget.TextView[@content-desc='Hide and Show']").click()
    await $("id=io.appium.android.apis:id/frag1hide").click()
    const botao = await $('android=new UiSelector().text("SHOW").className("android.widget.Button")').getText()
    expect(botao).toBe("SHOW")
    const text = await $("id=io.appium.android.apis:id/fragment1").isDisplayed()
    expect(text).toBe(false)

  })

  it("verifica segundo botão hide", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click()
    await $("//android.widget.TextView[@content-desc='Fragment']").click()
    await $("//android.widget.TextView[@content-desc='Hide and Show']").click()
    await $("id=io.appium.android.apis:id/frag2hide").click()
    const botao = await $('android=new UiSelector().text("SHOW").className("android.widget.Button")').getText()
    expect(botao).toBe("SHOW")
    const text = await $("id=io.appium.android.apis:id/fragment2").isDisplayed()
    expect(text).toBe(false)
  })

})


