"use strict";
const serenity_js_1 = require("serenity-js");
const actors_1 = require("../../spec/screenplay/actors");
module.exports = function () {
    this.World = function () {
        this.stage = serenity_js_1.serenity.callToStageFor(new actors_1.Actors());
    };
};
//# sourceMappingURL=world.js.map