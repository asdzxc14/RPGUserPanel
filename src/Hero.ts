class Hero {

    level = 1;

    basicAttackData: number;
    strengthData: number;
    agilityData: number;
    intelligenceData: number;

    isInTeam: boolean = false;
    dirtyFlag: boolean = true;

    equipments: Equipment[] = [];

    public constructor(type: number) {

        this.basicAttackData = heroConfig[type].basicAttack;
        this.strengthData = heroConfig[type].strength;
        this.agilityData = heroConfig[type].agility;
        this.intelligenceData = heroConfig[type].intelligence;
    }

    public setInTeam(status: boolean) {

        this.isInTeam = status;
        this.dirtyFlag = true;
    }

    @this.maxHpCache
    get maxHp(): number {
        return this.level * this.intelligenceData * 100;
    }

    @this.attackCache
    get attack(): number {
        return (this.basicAttackData * this.strengthData * this.agilityData * 0.6 + this.maxHp * 0.4) * Math.pow(1.1, this.level);
    }

    @this.fightPowerCache
    get fightPower(): number {

        var result = 0;

        for (var i = 0; i < this.equipments.length; i++) {

            result += this.equipments[i].fightPower;
        }
        return (this.attack + result * 0.3) * 2;
    }

    maxHpCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

        if (!this.dirtyFlag) {
            const getter = desc.get;
            desc.get = function () {
                return getter.apply(this);
            }
            return desc;
        }
    }

    attackCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

        if (!this.dirtyFlag) {
            const getter = desc.get;
            desc.get = function () {
                return getter.apply(this);
            }
            return desc;
        }
    }

    fightPowerCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

        if (!this.dirtyFlag) {
            const getter = desc.get;
            desc.get = function () {
                return getter.apply(this);
            }
            return desc;
        }
    }
}