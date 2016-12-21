var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var User = (function () {
    function User() {
        var _this = this;
        this.heros = [];
        this.dirtyFlag = true;
        this.getHerosInTeamCache = function (target, propertyName, desc) {
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
    }
    var d = __define,c=User,p=c.prototype;
    p.getHeroInTeam = function () {
        var heroInTeam = [];
        for (var i = 0; i < this.heros.length; i++) {
            if (this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);
            }
        }
        return heroInTeam;
    };
    d(p, "fightPower"
        ,function () {
            var result = 0;
            var heros = this.getHeroInTeam();
            for (var i = 0; i < heros.length; i++) {
                result += heros[i].fightPower;
            }
            return result;
        }
    );
    __decorate([
        this.getHerosInTeamCache
    ], p, "getHeroInTeam", null);
    __decorate([
        this.fightPowerCache
    ], p, "fightPower", null);
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map