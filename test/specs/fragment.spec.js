describe("testando fragment hide and show", () => {

  afterEach(async () => {
    driver.reset()
  })

  it("verifica titulo do aplicativo", async () => {
    const tituloApp = await $("android.widget.TextView").getText()
    expect(tituloApp).toBe('API Demos')
  })

  it("verifica conteudo de OK CANCEL DIALOG WITH A MESSAGE", async () => {
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

