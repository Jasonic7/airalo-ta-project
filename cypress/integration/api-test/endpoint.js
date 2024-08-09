describe("Test Endpoints", ()=>{
    let oauth2Token ='';
    const apiEnv = Cypress.env('apiUrl')

    before(()=>{
        cy.request({
            method: 'POST',
            url:apiEnv+'token',
            headers:{
                Accept: 'application/json',
            },
            form: true,
            body: {
                client_id:'974d515d41f86868eccd2d22aae8d10e',
                client_secret:'tILYEqQRq5PnZ5nccQZ1IiVugUWhZN2UveJZ9rVa',
                grant_type: 'client_credentials'
            }
        }).then((rsp)=>{
            expect(rsp.status).eq(200);
            expect(rsp.body).to.have.property("data");
            expect(rsp.body.data).to.have.property("access_token")
            oauth2Token = rsp.body.data.token_type + ' ' + rsp.body.data.access_token;
        })
        
    })

    it("POST submit order", ()=>{
        cy.request({
            method: 'POST',
            url:apiEnv+'orders',
            headers:{
                Accept: 'application/json',
                Autorization: oauth2Token
            },
            form: true,
            body: {
                quantity: 6,
                package_id:'merhaba-7days-1gb',
                type:'sim'
            }
        }).then((rsp)=>{
            expect(rsp.status).eq(200);
        }
        )
    });
    it("GET a list of eSIMs", ()=>{
        cy.request({
            method: 'GET',
            url:apiEnv+'sims?include=order,order.status,order.user',
            headers:{
                Accept: 'application/json',
                Autorization: oauth2Token
            },
            form: true
        }).then((rsp)=>{
            expect(rsp.status).eq(200);
        }
        )
    });
})