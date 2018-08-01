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
class RegisterPage {
    constructor() {
        this.usernameTextInput = protractor_1.element(protractor_1.by.name("username"));
        this.passwordTextInput = protractor_1.element(protractor_1.by.name('password'));
        this.password2TextInput = protractor_1.element(protractor_1.by.name('password2'));
        this.maleRadioButton = protractor_1.element(protractor_1.by.css('body > center > div > form > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > input[type="radio"]:nth-child(1)'));
        this.femaleRadioButton = protractor_1.element(protractor_1.by.css('body > center > div > form > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > input[type="radio"]:nth-child(2)'));
        this.addressTextInput = protractor_1.element(protractor_1.by.name('address'));
        this.billingAddressTextInput = protractor_1.element(protractor_1.by.name('billaddress'));
        this.stateSelectInput = protractor_1.$('[name="state"]');
        this.termsAndConditionsCheckBox = protractor_1.element(protractor_1.by.name('agree'));
        this.registerButton = protractor_1.element(protractor_1.by.css("body > center > div > form > input[type='button']:nth-child(5)"));
    }
    setUsername(value) {
        this.usernameTextInput.sendKeys(value);
    }
    setPassword(value) {
        this.passwordTextInput.sendKeys(value);
    }
    setPassword2(value) {
        this.password2TextInput.sendKeys(value);
    }
    chooseGender(value) {
        if (value == "male") {
            this.maleRadioButton.click();
        }
        else {
            this.femaleRadioButton.click();
        }
    }
    setAddress(value) {
        this.addressTextInput.sendKeys(value);
    }
    setBillingAddress(value) {
        this.billingAddressTextInput.sendKeys(value);
    }
    selectState(value) {
        this.stateSelectInput.element(protractor_1.by.cssContainingText('option', value)).click();
    }
    markTermsAndCondition() {
        this.termsAndConditionsCheckBox.click();
    }
    sendFormRegister() {
        this.registerButton.click();
    }
    getMessageAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().alert().getText();
        });
    }
}
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvcmVnaXN0ZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0U7QUFDcEUsZ0VBQTZEO0FBRTdELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLE1BQWEsWUFBWTtJQUF6QjtRQUVJLHNCQUFpQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNoRSxzQkFBaUIsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsdUJBQWtCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLG9CQUFlLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5SEFBeUgsQ0FBQyxDQUFDLENBQUM7UUFDNUssc0JBQWlCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5SEFBeUgsQ0FBQyxDQUFDLENBQUM7UUFDOUsscUJBQWdCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzlELDRCQUF1QixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN6RSxxQkFBZ0IsR0FBa0IsY0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEQsK0JBQTBCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLG1CQUFjLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDLENBQUM7SUE4Q3RILENBQUM7SUE1Q1UsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEM7YUFBTTtZQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFTSxVQUFVLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLFdBQVcsQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pGLENBQUM7SUFFTSxxQkFBcUI7UUFDeEIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFTSxnQkFBZ0I7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRVksZUFBZTs7WUFDeEIsT0FBTyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEQsQ0FBQztLQUFBO0NBRUo7QUF6REQsb0NBeURDIn0=