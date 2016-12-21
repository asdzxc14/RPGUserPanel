class Jewel {

    basicAttackData: number;
    getRateData: number;
    purityData: number;

    dirtyFlag: boolean = true;

    public constructor(type: number) {

        this.basicAttackData = jewelConfig[type].basicAttack;
        this.getRateData = jewelConfig[type].getRate;
        this.purityData = jewelConfig[type].purity;
    }

    @this.attackCache
    get attack(): number {

        return this.basicAttackData / this.purityData * 10;
    }

    @this.fightPowerCache
    get fightPower(): number {

        return this.attack * 0.8 + 100 / this.getRateData;
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