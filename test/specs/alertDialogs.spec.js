describe("testando Alert Dialogs", () => {


  it("verifica titulo do aplicativo", async () => {
    const tituloApp = await $("android.widget.TextView").getText()
    expect(tituloApp).toBe('API Demos')
  })

  it("verifica conteudo do OK CANCEL DIALOG WITH A MESSAGE", async () => {
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

  it("verifica click botão OK", async () => {
    await $('android=new UiSelector().text("OK").className("android.widget.Button")').click()
    const titulo = await $("android.widget.TextView").getText()
    expect(titulo).toBe('App/Alert Dialogs')
  })

  it("verifica click botão CANCEL", async () => {
    await $("//android.widget.Button[@content-desc='OK Cancel dialog with a message']").click()
    await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').click()
    const titulo = await $("android.widget.TextView").getText()
    expect(titulo).toBe('App/Alert Dialogs')
  })

})

