class EquipmentProperty extends Property {

    public configId: string = "";
    public name: string = "";
    public basicAttack: number = 0;
    public getRate: number = 0;
    public consume: number = 0;
    public jewels: Jewel[] = [];

    public constructor(id: string, name: string, basicAttack: number, getRate: number, consume: number) {
        super();
        this.configId = id;
        this.name = name;
        this.basicAttack = basicAttack;
        this.getRate = getRate;
        this.consume = consume;
    }

    get attack(): number {
        return this.basicAttack / this.getRate * this.consume;
    }

    get fightPower(): number {
        var result = 0;
        for (var i = 0; i < this.jewels.length; i++) {
            result += this.jewels[i].fightPower;
        }
        return (this.attack + result * 0.3) * 10;
    }
}


class Equipment {

    public property: EquipmentProperty;
    public gems: Jewel[] = [];
    jewels: Jewel[] = [];

    public constructor(type: number) {
        this.property = new EquipmentProperty(equipmentConfig[type].id, equipmentConfig[type].name, equipmentConfig[type].basicAttack, equipmentConfig[type].getRate, equipmentConfig[type].consume);
    }

    get attack(): number {
        return this.property.attack;
    }

    get getRate(): number {
        return this.property.getRate;
    }

    get consume(): number {
        return this.property.consume;
    }
    get fightPower(): number {
        return this.property.fightPower;
    }
}