class JewelProperty extends Property {

    public configId: string = "";
    public basicAttack: number = 0;
    public getRate: number = 0;
    public purity: number = 0;


    public constructor(id: string, attack: number, getRate: number, purity: number) {
        super();
        this.configId = id;
        this.basicAttack = attack;
        this.getRate = getRate;
        this.purity = purity;
    }

    get attack(): number {

        return this.basicAttack / this.purity * 10;
    }

    get fightPower(): number {

        return this.attack * 0.8 + 100 / this.getRate;
    }
}

class Jewel {

    public property: JewelProperty;

    public constructor(type: number) {

        this.property = new JewelProperty(jewelConfig[type].id, jewelConfig[type].basicAttack, jewelConfig[type].getRate, jewelConfig[type].purity);

    }

    get attack(): number {
        return this.property.basicAttack;
    }

    get getRate(): number {
        return this.property.getRate;
    }

    get purity(): number {
        return this.property.purity;
    }

    get fightPower(): number {
        return this.property.fightPower;
    }
}