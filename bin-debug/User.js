var User = (function () {
    function User() {
        this.heros = [];
    }
    var d = __define,c=User,p=c.prototype;
    p.addHero = function (hero) {
        this.heros.push(hero);
    };
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
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map