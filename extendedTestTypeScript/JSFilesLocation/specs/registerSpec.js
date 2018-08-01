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
const globalActivities_1 = require("../pages/globalActivities");
const registerPage_1 = require("../pages/registerPage");
let globalActivities = new globalActivities_1.GlobalActivities();
let registerPage = new registerPage_1.RegisterPage();
describe('Register the user information', () => __awaiter(this, void 0, void 0, function* () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        globalActivities.navigateToThePage("http://sahitest.com/demo/training/register.htm");
    }));
    it('Send all the user information', () => __awaiter(this, void 0, void 0, function* () {
        registerPage.setUsername("mfernanda");
        registerPage.setPassword("abcd1234*");
        registerPage.setPassword2("abcd1234*");
        registerPage.chooseGender("female");
        registerPage.setAddress("street 10a #40");
        registerPage.setBillingAddress("Av 52 street");
        registerPage.selectState("Kerala");
        registerPage.markTermsAndCondition();
        registerPage.sendFormRegister();
        expect(yield registerPage.getMessageAlert()).toEqual('Registered Successfully');
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvcmVnaXN0ZXJTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnRUFBNkQ7QUFDN0Qsd0RBQXFEO0FBRXJELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQzlDLElBQUksWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBRXRDLFFBQVEsQ0FBQywrQkFBK0IsRUFBRSxHQUFRLEVBQUU7SUFFaEQsU0FBUyxDQUFFLEdBQVEsRUFBRTtRQUNqQixnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0lBQ3pGLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0JBQStCLEVBQUUsR0FBUSxFQUFFO1FBQzFDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxZQUFZLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxNQUFNLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=