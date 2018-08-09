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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3BlYy9zY3JlZW5wbGF5L2FjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3QztBQUN4QyxpRkFBa0Y7QUFFbEYsd0VBQXdFO0FBQ3hFLHlFQUF5RTtBQUN6RSwrREFBK0Q7QUFFL0QsTUFBYSxNQUFNO0lBQ2YsS0FBSyxDQUFDLElBQVk7UUFDZCxPQUFPLDZCQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQ0FBWSxDQUFDLEtBQUssQ0FBQyx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztDQUNKO0FBSkQsd0JBSUMifQ==