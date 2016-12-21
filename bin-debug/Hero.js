var HeroProperty = (function (_super) {
    __extends(HeroProperty, _super);
    function HeroProperty(id, name, basicAttack, strength, agility, intelligence) {
        _super.call(this);
        this.configId = "";
        this.name = "";
        this.basicAttack = 0;
        this.strength = 0;
        this.agility = 0;
        this.intelligence = 0;
        this.level = 1;
        this.equipments = [];
        this.configId = id;
        this.name = name;
        this.basicAttack = basicAttack;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }
    var d = __define,c=HeroProperty,p=c.prototype;
    p.levelup = function () {
        this.level++;
    };
    d(p, "attack"
        ,function () {
            return (this.basicAttack * this.strength * this.agility) * Math.pow(1.1, this.level);
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
    return HeroProperty;
}(Property));
egret.registerClass(HeroProperty,'HeroProperty');
var Hero = (function () {
    function Hero(type) {
        this.isInTeam = false;
        this.equipments = [];
        this.property = new HeroProperty(heroConfig[type].id, heroConfig[type].name, heroConfig[type].basicAttack, heroConfig[type].strength, heroConfig[type].agility, heroConfig[type].intelligence);
    }
    var d = __define,c=Hero,p=c.prototype;
    p.setInTeam = function (status) {
        this.isInTeam = status;
    };
    p.equip = function (equipment) {
        this.equipments.push(equipment);
    };
    d(p, "maxHp"
        ,function () {
            return this.property.level * this.property.intelligence * 100;
        }
    );
    d(p, "attack"
        ,function () {
            return this.property.basicAttack;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.property.fightPower;
        }
    );
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map