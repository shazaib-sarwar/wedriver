class QTT {
  get fromStation() {
    return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[1]/div[1]");
  }

  get toStation() {
    return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[1]/div[1]");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get searchInputField() {
    return $(`//input[@id='regular-qtt-station-picker-origin-input']`)
  }

  get searchInputToField() {
    return $('//input[@id="regular-qtt-station-picker-destination-input"]')
  }

  // Open Date Input
  get departureDate(){
    return $('//*[@id="qtt"]/div/div/div[2]/div[1]/div/div[1]')
  }
  get dateInputField(){
    return $('//*[@id="calendar-september-card"]/div[3]/button[5]/span')
  }
  get returnDate(){
    return $('//*[@id="qtt"]/div/div/div[2]/div[2]/div/div[1]/div[1]')
  }
  get returnDateInputField(){
    return $('//*[@id="calendar-october-card"]/div[3]/button[7]/span')
  }
//
  get searchAndByButton() {
    return $('#search-qtt')
  }
  get adultsSelection()
  {
    return $("//*[@id='qtt']/div/div/div[3]/div/div[1]/ace-passenger-picker")
  }
  get addButton()
{  
return $("//*[@id='qtt']/div/div/div[3]/div/div[1]/ace-passenger-picker/div/div[2]/div[3]/div[1]/ace-numerical-stepper[1]/div/div/div[3]")
}
get addKids()
{
return $("//*[@id='qtt']/div/div/div[3]/div/div[1]/ace-passenger-picker/div/div[2]/div[3]/div[1]/ace-numerical-stepper[2]/div/div/div[3]/ace-button")
}
get doneButton()
{
return $ ("//*[@id='submit-passengers-with-railcard']/button")
}

// Getting Personal Details
  get personalDetails(){
    return $('//*[@id="ace-root"]/div/main/div/ace-account-navbar/div/div/nav/a[3]')
  }
  get editProfileButton(){
    return $('//*[@id="edit-profile"]/button')
  }
  get firstName(){
    return $('//*[@id="first-name"]')
  }
  get surName(){
    return $('//*[@id="last-name"]')
  }

  get dobDate(){
    return $('//*[@id="dob-day"]')
  }

  get dobMonth(){
    return $('//*[@id="dob-month"]')
  }
  get dobYear(){
    return $('//*[@id="dob-year"]')
  }

  get addAnotherNumber(){
    return $('//*[@id="edit-secondary-mob"]/button')
  }

  get secondaryNumber(){
    return $('//*[@id="phone-number-secondary"]')
  }

  get saveChanges(){
    return $('//*[@id="save-changes-profile"]/button')
  }

  get addAdress(){
    return $('//*[@id="add-address"]/button')
  }

  get addressName(){
    return $('//*[@id="address-name"]')
  }

  get city(){
    return $('//*[@id="address-city"]')
  }
   get postCode(){
    return $('//*[@id="address-postcode"]')
   }
   get addressLine1(){
    return $('//*[@id="address-line-first"]')
   }

   get saveAddressChanges(){
    return $('//*[@id="save-changes-address"]/button')
   }

  // Generate Random Address

  get stringGen() {
    let text = "";

    let charset = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 26; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
  }

  //////////////


  async clickonPersonalDetails(){
    await this.personalDetails.click()
    await browser.pause(3000)
    await this.editProfileButton.click()
    await browser.pause(3000)

    // Set First & Sur Namename
    const fname = await this.firstName.getValue();
    console.log('Printing First Name',fname)
    await this.firstName.setValue(`${fname}23`)
    await browser.pause(3000)
    const surname = await this.surName.getValue();
    await this.surName.setValue(`${surname}23`)
    console.log('Printing Sur Name', surname)
    await browser.pause(3000)

    // Set DOB
    await this.dobDate.setValue('03')
    await browser.pause(3000)
    await this.dobMonth.setValue('10')
    await browser.pause(3000)
    await this.dobYear.setValue('1993')

    // Click on Add Another Number
    await browser.pause(3000)
    await this.addAnotherNumber.click()

    await this.secondaryNumber.setValue(`${Math.floor(Math.random() * 1000000000)}`)
    await browser.pause(3000)
    await this.saveChanges.click()

    // Adding Address
    await browser.pause(3000)
    await this.addAdress.click();
    await browser.pause(3000)
    const address = this.stringGen.slice(6).toUpperCase()
    console.log("Address", address)
    await this.addressName.setValue(address)
    await browser.pause(3000)

    await this.city.setValue('Manchester')
    await browser.pause(3000)

    await this.postCode.setValue('5AWCD')
    await browser.pause(3000)

    await this.addressLine1.setValue('House 133 Street 2')

    await browser.pause(2000)
    await this.saveAddressChanges.click()
    await browser.pause(2000)


  }

  ////////////////////////////

  async clickAndSelectFromStation() {
    await this.fromStation.click();
    await this.searchInputField.setValue("Banbury");
    browser.keys("\ue007");
    await browser.pause(3000)
  }
  async clickAndSelecttToStation() {
    await this.toStation.click();
    await this.searchInputToField.setValue("Bicester Village");
    browser.keys("\ue007");
    await browser.pause(3000)

  }

  // Date Selection
  async clickAndSelectDate(){
    // Departure Date
    await this.departureDate.click()
    await this.dateInputField.click()
    // await browser.pause(3000)
    // Return Date
    await this.returnDate.click()
    await this.returnDateInputField.click()
    await browser.pause(3000)

  }
  async clickSearchAndBuy() {
    await this.searchAndByButton.click();
    await browser.pause(3000)
  }
  async adultsAndkids()
  {
    await this.adultsSelection.click();
    await browser.pause(3000)
  }
  async addPlusButton()
  {
    await this.addButton.click();
    await browser.pause(3000)
  }
  async addPlusChildren()
  {
    await this.addKids.click();
    await browser.pause(3000)
  }
  async doneBtn() {
    await this.doneButton.click();
    await browser.pause(3000)
  }

}
module.exports = new QTT();
