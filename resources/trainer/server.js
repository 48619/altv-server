import { onClient as e, emitClient as a, Vehicle as l, logError as t, Player as s } from "alt-server";
new (class {
  constructor() {
    this.callbacks = {};
  }
  init() {
    e("network:requestCallback", (e, l, t, s) => {
      a(e, "network:sendCallback", l, this.callbacks[t](e, s));
    }),
      (this.callbacks["vehicle:create"] = (e, a) => {
        try {
          let t = new l(a[0], e.pos.x, e.pos.y, e.pos.z, e.rot.x, e.rot.y, e.rot.z);
          return (t.modKit = 1), (t.dirtLevel = 0), (t.engineOn = !0), (t.numberPlateText = "trainer"), t;
        } catch (e) {
          return void t(e);
        }
      }),
      (this.callbacks["vehicle:setMod"] = (e, a) => {
        try {
          let e = a[0];
          (e.modKit = 1), e.setMod(a[1], a[2]);
        } catch (e) {
          t(e);
        }
      }),
      (this.callbacks["vehicle:setWheels"] = (e, a) => {
        try {
          let e = a[0];
          (e.modKit = 1), e.setWheels(a[1], a[2]), a[3] && e.setRearWheels(a[2]);
        } catch (e) {
          t(e);
        }
      }),
      (this.callbacks["vehicle:delete"] = (e, a) => {
        a[0].destroy();
      }),
      (this.callbacks["vehicle:repair"] = (e, a) => {
        let l = a[0];
        l.bodyAdditionalHealth = l.bodyHealth = l.engineHealth = l.petrolTankHealth = 1e3;
      }),
      (this.callbacks["vehicle:driftModeOFF"] = (e, a) => {
        a[0].driftModeEnabled = 0;
      }),
      (this.callbacks["vehicle:driftModeON"] = (e, a) => {
        a[0].driftModeEnabled = 1;
      }),
      (this.callbacks["vehicle:clean"] = (e, a) => {
        a[0].dirtLevel = 0;
      }),
      (this.callbacks["vehicle:setColor"] = (e, a) => {
        let l = a[0];
        switch (a[1]) {
          case 0:
            l.primaryColor = a[2];
            break;
          case 1:
            l.secondaryColor = a[2];
            break;
          case 2:
            l.pearlColor = a[2];
            break;
          case 3:
            l.wheelColor = a[2];
            break;
          default:
            throw new Error();
        }
      }),
      (this.callbacks["player:respawn"] = (e, a) => {
        e.spawn(e.pos.x, e.pos.y, e.pos.z, 0);
      }),
      (this.callbacks["player:heal"] = (e, a) => {
        (e.health = e.maxHealth), (e.armour = e.maxArmour);
      }),
      (this.callbacks["player:setModel"] = (e, a) => {
        e.model = a[0];
      }),
      (this.callbacks["player:giveWeapon"] = (e, a) => {
        e.giveWeapon(a[0], a[1], a[2]);
      }),
      (this.callbacks["player:removeWeapon"] = (e, a) => {
        e.removeWeapon(a[0]);
      }),
      (this.callbacks["player:removeAllWeapons"] = (e, a) => {
        e.removeAllWeapons();
      }),
      (this.callbacks["player:addWeaponComponent"] = (e, a) => {
        e.addWeaponComponent(a[0], a[1]);
      }),
      (this.callbacks["player:removeWeaponComponent"] = (e, a) => {
        e.removeWeaponComponent(a[0], a[1]);
      }),
      (this.callbacks["game:teleportPlayerToEntity"] = (e, l) => {
        a(l[0], "player:teleportToEntity", l[1]);
      }),
      (this.callbacks["game:getPlayerIdentifiers"] = (e, a) => {
        let l = a[0];
        return [l.hwidHash, l.hwidExHash, l.socialID];
      }),
      (this.callbacks["game:setTime"] = (e, a) => {
        s.all.forEach((e) => e.setDateTime(0, 0, 0, a[0], a[1], a[2]));
      }),
      (this.callbacks["game:setWeather"] = (e, a) => {
        s.all.forEach((e) => e.setWeather(a[0]));
      }),
      (this.callbacks["game:setCloudHat"] = (e, l) => {
        a(null, "world:setCloudHat", l[0]);
      }),
      (this.callbacks["game:setCloudHatOpacity"] = (e, l) => {
        a(null, "world:setCloudHatOpacity", l[0]);
      }),
      (this.callbacks["game:setArtificialLightsState"] = (e, l) => {
        a(null, "world:setArtificialLightsState", l[0]);
      });
  }
})().init();
//# sourceMappingURL=server.js.map
