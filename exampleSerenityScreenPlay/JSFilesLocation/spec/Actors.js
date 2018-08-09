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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlYy9hY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0M7QUFDeEMsaUZBQWtGO0FBRWxGLHdFQUF3RTtBQUN4RSx5RUFBeUU7QUFDekUsK0RBQStEO0FBRS9ELE1BQWEsTUFBTTtJQUNmLEtBQUssQ0FBQyxJQUFZO1FBQ2QsT0FBTyw2QkFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsb0NBQVksQ0FBQyxLQUFLLENBQUMsdUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FDSjtBQUpELHdCQUlDIn0=