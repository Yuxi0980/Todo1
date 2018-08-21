"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_1 = require("./expect");
exports.equals = (expected) => (actual) => expect_1.expect(actual).to.eventually.equal(expected);
//# sourceMappingURL=assertions.js.map