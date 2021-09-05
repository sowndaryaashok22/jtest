import { Home } from "./home";


class SingleFamilyHome extends Home {
    constructor(address, price, isSolarInstalled){
        super(address, price);
        this.isSolarInstalled = isSolarInstalled;
    }
    moweLawn(){
        console.log("mowing lawn");
    }
}

module.exports.SingleFamilyHome = SingleFamilyHome;