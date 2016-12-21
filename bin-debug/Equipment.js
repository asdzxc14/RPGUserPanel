var EquipmentProperty = (function (_super) {
    __extends(EquipmentProperty, _super);
    function EquipmentProperty(id, name, basicAttack, getRate, consume) {
        _super.call(this);
        this.configId = "";
        this.name = "";
        this.basicAttack = 0;
        this.getRate = 0;
        this.consume = 0;
        this.jewels = [];
        this.configId = id;
        this.name = name;
        this.basicAttack = basicAttack;
        this.getRate = getRate;
        this.consume = consume;
    }
    var d = __define,c=EquipmentProperty,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.basicAttack / this.getRate * this.consume;
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
    return EquipmentProperty;
}(Property));
egret.registerClass(EquipmentProperty,'EquipmentProperty');
var Equipment = (function () {
    function Equipment(type) {
        this.gems = [];
        this.jewels = [];
        this.property = new EquipmentProperty(equipmentConfig[type].id, equipmentConfig[type].name, equipmentConfig[type].basicAttack, equipmentConfig[type].getRate, equipmentConfig[type].consume);
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.property.attack;
        }
    );
    d(p, "getRate"
        ,function () {
            return this.property.getRate;
        }
    );
    d(p, "consume"
        ,function () {
            return this.property.consume;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.property.fightPower;
        }
    );
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map