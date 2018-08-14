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
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const LoginPage_1 = require("../../user_interface/LoginPage");
const fs = require("fs");
const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
exports.NavigateTo = ({
    registerLink: () => __awaiter(this, void 0, void 0, function* () {
        return screenplay_protractor_1.Task.where(`#actor navigate to register page`, yield screenplay_protractor_1.Click.on(LoginPage_1.LoginPage.registerLink));
    }),
});
//# sourceMappingURL=NavigateTo.js.map