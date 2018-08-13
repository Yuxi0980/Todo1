"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
// note: it's important to use `protractor.browser` not simply `browser`
//       a bug in Protractor makes the latter fail upon a browser restart
//       see: https://github.com/angular/protractor/issues/2001
class Actors {
    actor(name) {
        return screenplay_protractor_1.Actor.named(name).whoCan(screenplay_protractor_1.BrowseTheWeb.using(protractor_1.protractor.browser));
    }
}
exports.Actors = Actors;
//# sourceMappingURL=actors.js.map