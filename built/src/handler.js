"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const app_1 = require("../app");
const serverless_http_1 = __importDefault(require("serverless-http"));
const run = serverless_http_1.default(app_1.app);
exports.run = run;
//# sourceMappingURL=handler.js.map