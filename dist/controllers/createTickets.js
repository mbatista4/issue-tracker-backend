"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regTicket = void 0;
const tickets_1 = require("../db/tickets");
const regTicket = async (req, res) => {
    try {
        const { title, description, devAssigned, priority } = req.body;
        if (!title || !description || !devAssigned || !priority) {
            return res.sendStatus(400);
        }
        const ticket = await (0, tickets_1.createTicket)({
            title,
            description,
            devAssigned,
            priority
        });
        return res.status(200).json(ticket).end();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
exports.regTicket = regTicket;
//# sourceMappingURL=createTickets.js.map