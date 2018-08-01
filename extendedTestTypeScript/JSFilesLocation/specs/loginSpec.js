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
const loginPage_1 = require("../pages/loginPage");
let globalActivities = new globalActivities_1.GlobalActivities();
let loginPage = new loginPage_1.LoginPage();
describe('Login on the website', () => __awaiter(this, void 0, void 0, function* () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        globalActivities.navigateToThePage("http://sahitest.com/demo/training/");
    }));
    it('Send form with none information', () => __awaiter(this, void 0, void 0, function* () {
        loginPage.sendFormLogin();
        expect(yield loginPage.getMessageError()).toEqual('Invalid username or password');
    }));
    it('Enter wrong username and password', () => __awaiter(this, void 0, void 0, function* () {
        loginPage.setUsername("test1");
        loginPage.setPassword("secret1");
        loginPage.sendFormLogin();
        expect(yield loginPage.getMessageError()).toEqual('Invalid username or password');
    }));
    it('Enter right username and password', () => __awaiter(this, void 0, void 0, function* () {
        loginPage.clearFormLogin();
        loginPage.setUsername("test");
        loginPage.setPassword("secret");
        loginPage.sendFormLogin();
        expect(yield globalActivities.getTitlePage()).toEqual('Books');
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5TcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvbG9naW5TcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnRUFBNkQ7QUFDN0Qsa0RBQStDO0FBRS9DLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQzlDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBRWhDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFRLEVBQUU7SUFFdkMsU0FBUyxDQUFFLEdBQVEsRUFBRTtRQUNqQixnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUUsR0FBUSxFQUFFO1FBQzVDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN0RixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQVEsRUFBRTtRQUM5QyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ3RGLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUNBQW1DLEVBQUUsR0FBUSxFQUFFO1FBQzlDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=