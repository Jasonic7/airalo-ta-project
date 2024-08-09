export class HomePagePO {

    constructor(protected locator: string) {
	}

    public get rootUnit(){
		return cy.get(this.locator);
	}

    public search(text: string){
        this.rootUnit.find('.search-container').find('input')
        .then(elem=> {
            cy.wrap(elem).click();
            cy.wrap(elem).type(text)
        })
    }

    public selectCountry(text:string) {
        this.rootUnit.find('.countries-list').contains('.country-name',text).click();
    }

    get storeTitle(){
        return this.storeList.find('h2')
    }

    public buyNow(){
        this.storeList.find('.sim-item-link').first().find('.sim-item-bottom-button>button').click()
    }

    public remove10milDialog(){
        cy.get('.modal-dialog .airalo-icon-close-round-filled').click();
    }

    public acceptCookies(){
        return cy.get('.ot-sdk-container').find('button[id="onetrust-accept-btn-handler"]').click();
    }

    public rejectNotifications(){
        return cy.get('button[id="wzrk-confirm"]').click();
    }
    

    private get storeList() {
        return this.rootUnit.find('.store-list')
    }
}