"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tickets_1 = require("../controllers/tickets");
exports.default = (router) => {
    router.get('/getTickets', tickets_1.getAllTickets);
    router.get('/tickets/:id', tickets_1.getSingleTicket);
    router.delete('/deleteTicket/:id', tickets_1.deleteTicket);
    router.patch('/tickets/:id', tickets_1.updateTicket);
};
//# sourceMappingURL=tickets.js.map