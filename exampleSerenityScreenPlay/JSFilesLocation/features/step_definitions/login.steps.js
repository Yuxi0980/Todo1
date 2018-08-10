"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const SendFormLogin_1 = require("../../spec/screenplay/tasks/login/SendFormLogin");
const IsTheMessegeErrorVisible_1 = require("../../spec/screenplay/questions/login/IsTheMessegeErrorVisible");
const IsTheBooksPageDisplayed_1 = require("../../spec/screenplay/questions/login/IsTheBooksPageDisplayed");
const fs = require("fs");
const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));
module.exports = function Login() {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.Given(/^(.*) wants to login on website$/, function (actor) {
            return this.stage.theActorCalled(actor).attemptsTo(screenplay_protractor_1.Open.browserOn(links.login));
        });
        yield this.When(/^he send form login with (.*) information$/, function (parameter) {
            switch (parameter) {
                case 'none':
                    return this.stage.theActorInTheSpotlight().attemptsTo(SendFormLogin_1.SendFormLogin.withNoneInformation(parameter));
                    break;
                case 'wrong':
                    return this.stage.theActorInTheSpotlight().attemptsTo(SendFormLogin_1.SendFormLogin.withWrongInformation(parameter));
                    break;
                case 'right':
                    return this.stage.theActorInTheSpotlight().attemptsTo(SendFormLogin_1.SendFormLogin.withRightInformation(parameter));
                    break;
                default:
                    break;
            }
        });
        yield this.Then(/^he should see a message indicating "([^"]*)"$/, function (message) {
            return this.stage.theActorInTheSpotlight().attemptsTo(IsTheMessegeErrorVisible_1.IsTheMessageErrorVisible.reads(message));
        });
        yield this.Then(/^he should see "([^"]*)"$/, function (title) {
            return this.stage.theActorInTheSpotlight().attemptsTo(IsTheBooksPageDisplayed_1.IsTheBooksPageDisplayed.see(title));
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9mZWF0dXJlcy9zdGVwX2RlZmluaXRpb25zL2xvZ2luLnN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlGQUE2RDtBQUM3RCxtRkFBZ0Y7QUFDaEYsNkdBQTBHO0FBQzFHLDJHQUF3RztBQUN4Ryx5QkFBeUI7QUFFekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFdkUsaUJBQVMsU0FBZSxLQUFLOztRQUV6QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsVUFBVSxLQUFhO1lBQ3hFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUM5Qyw0QkFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxVQUFVLFNBQWlCO1lBQ3JGLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssTUFBTTtvQkFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxVQUFVLENBQ2pELDZCQUFhLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQy9DLENBQUM7b0JBQ0YsTUFBTTtnQkFDVixLQUFLLE9BQU87b0JBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLENBQUMsVUFBVSxDQUNqRCw2QkFBYSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUNoRCxDQUFDO29CQUNGLE1BQU07Z0JBQ1YsS0FBSyxPQUFPO29CQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLFVBQVUsQ0FDakQsNkJBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FDaEQsQ0FBQztvQkFDRixNQUFNO2dCQUNWO29CQUNJLE1BQU07YUFDYjtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxFQUFFLFVBQVUsT0FBZTtZQUN2RixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxVQUFVLENBQ2pELG1EQUF3QixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FDMUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLFVBQVUsS0FBYTtZQUNoRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxVQUFVLENBQ2pELGlEQUF1QixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDckMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUFBLENBQUMifQ==