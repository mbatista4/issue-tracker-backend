"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = __importDefault(require("./register"));
const tickets_1 = __importDefault(require("./tickets"));
const router = (0, express_1.Router)();
exports.default = () => {
    (0, register_1.default)(router);
    (0, tickets_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map