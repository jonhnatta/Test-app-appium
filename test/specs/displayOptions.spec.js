describe("testando Display Options", () => {

  afterEach(async () => {
    driver.reset()
  })

  it("verifica titulo do aplicativo", async () => {
    const tituloApp = await $("android.widget.TextView").getText()
    expect(tituloApp).toBe('API Demos')
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

