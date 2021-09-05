class Home {

    constructor (address, price)
    {
        this.homeAddresss = address;
        this.homePrice = price;
    }
    payPropertyTax(){
        console.log("paying property tax");
    }
}

module.exports.Home = Home;