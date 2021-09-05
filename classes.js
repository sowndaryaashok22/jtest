class Invitation {
    constructor(bNmae, gName)
    {
        this.brideName = bNmae;
        this.groomName = gName;
    }

    showGreeting(){
        console.log(`${this.brideName} weds ${this.groomName}`);
    }

   

}

let myInvitation = new Invitation('sow', 'ash');
let lavInvitation = new Invitation('lava', '??')

console.log(myInvitation);
console.log(myInvitation.showGreeting());
console.log(lavInvitation.showGreeting());

