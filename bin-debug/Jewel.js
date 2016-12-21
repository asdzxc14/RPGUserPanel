var JewelProperty = (function (_super) {
    __extends(JewelProperty, _super);
    function JewelProperty(id, attack, getRate, purity) {
        _super.call(this);
        this.configId = "";
        this.basicAttack = 0;
        this.getRate = 0;
        this.purity = 0;
        this.configId = id;
        this.basicAttack = attack;
        this.getRate = getRate;
        this.purity = purity;
    }
    var d = __define,c=JewelProperty,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.basicAttack / this.purity * 10;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.attack * 0.8 + 100 / this.getRate;
        }
    );
    return JewelProperty;
}(Property));
egret.registerClass(JewelProperty,'JewelProperty');
var Jewel = (function () {
    function Jewel(type) {
        this.property = new JewelProperty(jewelConfig[type].id, jewelConfig[type].basicAttack, jewelConfig[type].getRate, jewelConfig[type].purity);
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.property.basicAttack;
        }
    );
    d(p, "getRate"
        ,function () {
            return this.property.getRate;
        }
    );
    d(p, "purity"
        ,function () {
            return this.property.purity;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.property.fightPower;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map