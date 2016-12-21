class User {

    heros: Hero[] = [];

    dirtyFlag: boolean = true;

    @this.getHerosInTeamCache
    getHeroInTeam(): Hero[] {

        var heroInTeam: Hero[] = [];

        for (var i = 0; i < this.heros.length; i++) {
            if (this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);
            }
        }
        return heroInTeam;
    }

    @this.fightPowerCache
    get fightPower(): number {

        var result = 0;
        var heros: Hero[] = this.getHeroInTeam();

        for (var i = 0; i < heros.length; i++) {

            result += heros[i].fightPower;
        }
        return result;
    }

    getHerosInTeamCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

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