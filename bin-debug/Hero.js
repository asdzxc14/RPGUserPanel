var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Hero = (function () {
    function Hero(type) {
        var _this = this;
        this.level = 1;
        this.isInTeam = false;
        this.dirtyFlag = true;
        this.equipments = [];
        this.maxHpCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_1 = desc.get;
                desc.get = function () {
                    return getter_1.apply(this);
                };
                return desc;
            }
        };
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_2 = desc.get;
                desc.get = function () {
                    return getter_2.apply(this);
                };
                return desc;
            }
        };
        this.fightPowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_3 = desc.get;
                desc.get = function () {
                    return getter_3.apply(this);
                };
                return desc;
            }
        };
        this.basicAttackData = heroConfig[type].basicAttack;
        this.strengthData = heroConfig[type].strength;
        this.agilityData = heroConfig[type].agility;
        this.intelligenceData = heroConfig[type].intelligence;
    }
    var d = __define,c=Hero,p=c.prototype;
    p.setInTeam = function (status) {
        this.isInTeam = status;
        this.dirtyFlag = true;
    };
    d(p, "maxHp"
        ,function () {
            return this.level * this.intelligenceData * 100;
        }
    );
    d(p, "attack"
        ,function () {
            return (this.basicAttackData * this.strengthData * this.agilityData * 0.6 + this.maxHp * 0.4) * Math.pow(1.1, this.level);
        }
    );
    d(p, "fightPower"
        ,function () {
            var result = 0;
            for (var i = 0; i < this.equipments.length; i++) {
                result += this.equipments[i].fightPower;
            }
            return (this.attack + result * 0.3) * 2;
        }
    );
    __decorate([
        this.maxHpCache
    ], p, "maxHp", null);
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightPowerCache
    ], p, "fightPower", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map