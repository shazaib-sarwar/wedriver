const LoginPage = require('./../pageobjects/login.page')
const SecurePage = require('./../pageobjects/secure.page');
const internet = require('./../pageobjects/internet');
const QTT = require('./../pageobjects/qtt.page')
const mixingdeck = require('./../pageobjects/mixingdeck.page')
const deiveryAndExtras = require('./../pageobjects/deliveryExtra.page')
const reviewPayPage = require('./../pageobjects/reviewPay.page')
const { email, password } = require('./../data/credentails');


describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        //await LoginPage.login('qanita.bokhari@wizardscrew.com', 'Keetusyed1@');
        await LoginPage.login(email, password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Login successful');
    })

    it('Page header?', async () => {
        console.log($("//h2[contains(text(),'Bookings')]").isDisplayed())
    })

    it('get text for subheadig element', async () => {
        let text = await $("div.col.col-8");
        await expect(text).toBeExisting()
        await expect(text).toHaveTextContaining('You have no active bookings.')
    })
    it('Book tickets onClick ', async () => {
        let text = await $("a[data-elid='book-tickets']");
        //await expect(internet.bookTickets).toBeExisting().click();
        await expect(text).toBeExisting()
        await expect(text).toHaveTextContaining('Book tickets')
        await $("a[data-elid='book-tickets']").click();
    })
    it('Buy Tickets Page Heding', async () => {
        let text = await $("//h1[contains(text(),'Buy tickets to anywhere in Great Britain')]");
        await expect(text).toBeExisting()
    })

    it('SELECT Origin station', async () => {
        await QTT.clickAndSelectFromStation();
    })

    it('SELECT Destination station', async () => {
        await QTT.clickAndSelecttToStation();
    })
    it('should click on adults and kids drop down menu', async () => {
        await QTT.adultsAndkids();
    })
    it('should click on adults and kids drop down menu', async () => {
        await QTT.addPlusButton();
    })
    it('should click on adults and kids drop down menu', async () => {
        await QTT.addPlusChildren();
    })
    it('should click Done button', async () => {
        await QTT.doneBtn();
    })

    it('should click search and buy button', async () => {
        await QTT.clickSearchAndBuy();
    })

    it('Should g to mixing-deck page ', async () => {    // mixing deck

        let text = await $(".booking-steps-label");
        await expect(text).toBeExisting();

    })
    it('Should go to mixing deck page', async () => {
        // await browser.scroll(mixingdeck.continueButton);  // mixing deck
        await mixingdeck.continue();
    })
    it('Should go to DilveryAndExtrasPage', async () =>   //DeliveryExtras
    {
        let text = await $('.page-title');
        await expect(text).toBeExisting();
    })
    // it('Should go to See more option', async () =>   //DeliveryExtras
    // {
    //     // await deiveryAndExtras.seeMore();

    // })

    it('should go to TVM radio button', async () =>     //TVM
    {
        await deiveryAndExtras.tvmMachine();
    })

    it('should go to DilveryAndExtrasPage', async () =>      //DeliveryExtras
    {
        await deiveryAndExtras.continuebtn2();
    })
    it('should go to review and Pay Page', async () =>      //reviewPayPage
    {
        let text = await $('.page-title');
        await expect(text).toBeExisting();
    })
    it('should go to pay now page', async () =>      // pay now page
    {
        await reviewPayPage.payNow();
    })

});
