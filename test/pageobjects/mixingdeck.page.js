class mixingdeck
{
    get selectTickets()    //mixing deck
    {
      return $('.booking-steps-label')
    }
    get continueButton()   //mixing deck
    {
      // return $('.btn.btn-commercial.btn-primary')
      return $("button[type='submit']")
    }

    async continue()     // mixing deck
    {
      // await browser.scroll(this.continueButton)
      await this.continueButton.waitUntil(async () => {
        return (await this.continueButton.getText()) === "Continue"
      })
      await this.continueButton.click();
      await browser.pause(5000)
    }

}
module.exports = new mixingdeck();