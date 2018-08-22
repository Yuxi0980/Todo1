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
const networks_1 = require("../pages/networks");
let networks = new networks_1.Networks();
describe('Login on the website', () => __awaiter(this, void 0, void 0, function* () {
    it('Send form with none information', () => __awaiter(this, void 0, void 0, function* () {
        yield networks.trainTheNetwork();
        //await networks.predict(36, 15);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvblNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9wcmVkaWN0aW9uU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQTZDO0FBRTdDLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBRTlCLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFRLEVBQUU7SUFFdkMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEdBQVEsRUFBRTtRQUM1QyxNQUFNLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNqQyxpQ0FBaUM7SUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==