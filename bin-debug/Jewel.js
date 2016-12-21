var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Jewel = (function () {
    function Jewel(type) {
        var _this = this;
        this.dirtyFlag = true;
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_1 = desc.get;
                desc.get = function () {
                    return getter_1.apply(this);
                };
                return desc;
            }
        };
        this.fightPowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_2 = desc.get;
                desc.get = function () {
                    return getter_2.apply(this);
                };
                return desc;
            }
        };
        this.basicAttackData = jewelConfig[type].basicAttack;
        this.getRateData = jewelConfig[type].getRate;
        this.purityData = jewelConfig[type].purity;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.basicAttackData / this.purityData * 10;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.attack * 0.8 + 100 / this.getRateData;
        }
    );
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightPowerCache
    ], p, "fightPower", null);
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map