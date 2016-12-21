var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Equipment = (function () {
    function Equipment(type) {
        var _this = this;
        this.dirtyFlag = true;
        this.jewels = [];
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
        this.basicAttackData = equipmentConfig[type].basicAttack;
        this.getRateData = equipmentConfig[type].getRate;
        this.consumeData = equipmentConfig[type].consume;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.basicAttackData / this.getRateData * this.consumeData;
        }
    );
    d(p, "fightPower"
        ,function () {
            var result = 0;
            for (var i = 0; i < this.jewels.length; i++) {
                result += this.jewels[i].fightPower;
            }
            return (this.attack + result * 0.3) * 10;
        }
    );
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightPowerCache
    ], p, "fightPower", null);
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map