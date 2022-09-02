

class deiveryAndExtras {
  get deiveryAndExtras()    // deliveryExtras
  {
    return $('.page-title')
  }
  get contBtn()          // deliveryExtras
  {
    return $('.btn.btn-commercial.btn-primary')
  }
  get seeMoreOption() {

    return $('//*[@id="ace-root"]/div/main/div/ace-seats-and-extras/div/div/div/ace-delivery-form/div/div/div/ace-delivery-options/div[2]/ace-button/button')
  }

  get tvm() {
    return $("//div[@aria-label='Collect at Ticket Vending Machine (free)']/*[1]")
  }


  // async seeMore()   // deliveryExtras
  // {
  //   // if($x('//*[@id="ace-root"]/div/main/div/ace-seats-and-extras/div/div/div/ace-delivery-form/div/div/div/ace-delivery-options/div[2]/ace-button/button')){
  //     console.log('In X Path');
  //   await this.seeMoreOption.click();
  //   await browser.pause(3000)
  // // }
  // }
  
  async tvmMachine()   // deliveryExtras
  {
    
    console.log('In TVM Path');
    await this.tvm.scrollIntoView()
    
    const a = await browser.execute((el) => {
      el.click()
    }, await this.tvm);
   
    await browser.pause(3000)
  }
  async continuebtn2()   // deliveryExtras
  {
    await this.contBtn.click();
    await browser.pause(3000)
  }

}
module.exports = new deiveryAndExtras();