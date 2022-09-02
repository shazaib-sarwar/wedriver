
const Page = require('./page');

class internet{

    get pageheader() {
        return $(`//h2[contains(text(),'Bookings')]`)
    }
    get subheading() {
        return $('div.col.col-8') 
    }
    get search() {
        return $('button.btn.btn-link')
        //return $("p[aceannounce]")
    }
        get bookTickets()
        {
        return  $("a[data-elid='book-tickets']")
        }
        
        get buyTicketsPageHeading()
        {
        return $ ("//h1[contains(text(),'Buy tickets to anywhere in Great Britain')]")
         }

        // get from()
        // {
           
        //     return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[1]/div[1]")
        // }
        // get frmStation()
        // {
        //     return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[2]")
        // }
       
        // get pickfrom()
        // {
        //     return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[1]/ace-station-picker[1]/div[1]/div[2]")
        // }
        // get toStation()
        // {
        //     return $("//body/ace-root[@id='ace-root']/div[1]/main[1]/div[1]/ace-homepage[1]/div[1]/div[1]/div[1]/ace-qtt-toggle[1]/div[1]/div[2]/div[1]/ace-qtt[1]/form[1]/div[1]/ace-qtt-station-pickers[1]/div[1]/div[1]/div[1]/div[2]/ace-station-picker[1]/div[1]/div[2]")
        // }
        // get searchandButBtn()
        // {
        //     return $("//button[contains(text(),'Search and Buy')]")
        // }
       
      /*  async searchbutbtn (username, password) {
            await this.from.setValue(username);
            await this.pickfrom.setValue(password);
            await this.searchandButBtn.click();
        }
*/
    open(path) {
        return super.open(path);
    }
}
module.exports = new internet()