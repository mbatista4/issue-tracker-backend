"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createTickets_1 = require("../controllers/createTickets");
exports.default = (router) => {
    router.post("/createTicket", createTickets_1.regTicket);
};
//# sourceMappingURL=register.js.map