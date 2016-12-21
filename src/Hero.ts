class HeroProperty extends Property {
    configId: string = "";
    name: string = "";
    basicAttack: number = 0;
    strength: number = 0;
    agility: number = 0;
    intelligence: number = 0;
    level = 1;

    equipments: Equipment[] = [];

    public constructor(id: string, name: string, basicAttack: number, strength: number, agility: number, intelligence: number) {
        super();
        this.configId = id;
        this.name = name;
        this.basicAttack = basicAttack;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }

    public levelup(): void {
        this.level++;
    }


    get attack(): number {
        return (this.basicAttack * this.strength * this.agility) * Math.pow(1.1, this.level);
    }

    get fightPower(): number {

        var result = 0;

        for (var i = 0; i < this.equipments.length; i++) {

            result += this.equipments[i].fightPower;
        }
        return (this.attack + result * 0.3) * 2;
    }
}

class Hero {

    public property: HeroProperty;
    public isInTeam: boolean = false;

    public equipments: Equipment[] = [];

    public constructor(type: number) {
        this.property = new HeroProperty(heroConfig[type].id, heroConfig[type].name, heroConfig[type].basicAttack, heroConfig[type].strength, heroConfig[type].agility, heroConfig[type].intelligence);
    }

    public setInTeam(status: boolean) {
        this.isInTeam = status;
    }

    public equip(equipment: Equipment): void {
        this.equipments.push(equipment);
    }

    get maxHp(): number {
        return this.property.level * this.property.intelligence * 100;
    }

    get attack(): number {
        return this.property.basicAttack;
    }

    get fightPower(): number {
        return this.property.fightPower;
    }
}