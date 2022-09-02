class reviewPayPage
{
    get reviewAndpayPage()   //reviewPayPage
    {
      return $('.page-title')
    }
    get payNowBtn() {
      return $('.btn.btn-commercial.btn-primary')
    }
    async payNow() {     //reviewPayPage
        await this.payNowBtn.click();
        await browser.pause(3000)
    }

}
module.exports = new reviewPayPage();