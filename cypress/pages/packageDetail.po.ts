export class PackageDetailPO {


    private get rootUnit(){
		return cy.get('.package-detail');
	}

    get title(){
        return this.rootUnit.find('.sim-detail-operator').invoke('text')
    }

    public getSimDetailInfo(){
        return this.rootUnit.find('.sim-detail-info li')
    }

    
}