import { DataTable, Given } from '@badeball/cypress-cucumber-preprocessor';
import { HomePagePO } from '../pages/homePage.po';
import { PackageDetailPO } from '../pages/packageDetail.po';

const homePage = new HomePagePO('.esims-main-container');
const packageDetail = new PackageDetailPO();



Given(/^the user is at Airalo's homepage$/, ()=>{
    cy.visit('/',{retryOnStatusCodeFailure: false})
    cy.clearCookies();
    homePage.remove10milDialog();
    homePage.acceptCookies().then(()=>{
        homePage.rejectNotifications();
    })
    homePage.rootUnit.should('exist');
});

Given(/^the user types '(.+)' in the search field$/, (country: string)=>{
    homePage.search(country);
});

Given(/^the user selects '(.+)' option as destination$/, (country: string)=>{
    homePage.selectCountry(country);
});

Given(/^the available Local eSIMs are shown for '(.+)'$/, (country: string)=>{
    homePage.storeTitle.should('contain',country);
});

Given(/^the user clicks 'Buy Now' button for the fist eSIM package$/, ()=>{
    homePage.buyNow()
});

Given(/^a popup appers with the following package details:$/, (table: DataTable)=>{
    const opts = table.rows();
    packageDetail.title.then((title)=>{
        expect(title.trim()).eq(table.raw()[0][1].trim());
    })
    // packageDetail.title.should('have.text',table.raw()[0][1])
    packageDetail.getSimDetailInfo().each(($elem, $indx)=>{
        expect(($elem.text().split('\n').join('').split(' ').join(''))).equals((opts[$indx][0]+opts[$indx][1]).split(' ').join(''))
    })
});
