class Equipment {

    basicAttackData: number;
    getRateData: number;
    consumeData: number;

    dirtyFlag: boolean = true;
    jewels: Jewel[] = [];

    public constructor(type: number) {

        this.basicAttackData = equipmentConfig[type].basicAttack;
        this.getRateData = equipmentConfig[type].getRate;
        this.consumeData = equipmentConfig[type].consume

    }

    @this.attackCache
    get attack(): number {
        return this.basicAttackData / this.getRateData * this.consumeData;
    }

    @this.fightPowerCache
    get fightPower(): number {

        var result = 0;

        for (var i = 0; i < this.jewels.length; i++) {

            result += this.jewels[i].fightPower;
        }
        return (this.attack + result * 0.3) * 10;
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