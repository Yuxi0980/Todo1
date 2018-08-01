"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const GlobalActivities_1 = require("../pages/GlobalActivities");
let globalActivities = new GlobalActivities_1.GlobalActivities();
class LoginPage {
    constructor() {
        this.usernameTextInput = protractor_1.element(protractor_1.by.name("user"));
        this.passwordTextInput = protractor_1.element(protractor_1.by.name('password'));
        this.loginButton = protractor_1.element(protractor_1.by.css("body > center > div > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input"));
        this.messageError = protractor_1.element(protractor_1.by.id("errorMessage"));
    }
    setUsername(value) {
        this.usernameTextInput.sendKeys(value);
    }
    setPassword(value) {
        this.passwordTextInput.sendKeys(value);
    }
    sendFormLogin() {
        this.loginButton.click();
    }
    clearFormLogin() {
        this.usernameTextInput.clear();
        this.passwordTextInput.clear();
    }
    getMessageError() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messageError.getText();
        });
    }
    rightLogin() {
        this.setUsername("test");
        this.setPassword("secret");
        this.sendFormLogin();
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvbG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFDeEQsZ0VBQTZEO0FBRTdELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLE1BQWEsU0FBUztJQUF0QjtRQUVJLHNCQUFpQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxzQkFBaUIsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsZ0JBQVcsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdGQUF3RixDQUFDLENBQUMsQ0FBQztRQUN2SSxpQkFBWSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQTZCakUsQ0FBQztJQTNCVSxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxhQUFhO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLGNBQWM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRVksZUFBZTs7WUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBRU0sVUFBVTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUVKO0FBbENELDhCQWtDQyJ9