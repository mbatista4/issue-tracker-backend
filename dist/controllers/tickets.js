"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTicket = exports.getSingleTicket = exports.deleteTicket = exports.getAllTickets = void 0;
const tickets_1 = require("../db/tickets");
const getAllTickets = async (req, res) => {
    try {
        const tickets = await (0, tickets_1.getTickets)();
        return res.status(200).json(tickets);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
};
exports.getAllTickets = getAllTickets;
const deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTicket = await (0, tickets_1.deleteTicketById)(id);
        return res.json(deletedTicket);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
};
exports.deleteTicket = deleteTicket;
const getSingleTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const foundTicket = await (0, tickets_1.getTicketById)(id);
        return res.json(foundTicket);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
};
exports.getSingleTicket = getSingleTicket;
const updateTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const { isResolved } = req.body;
        if (!isResolved) {
            return res.sendStatus(400);
        }
        console.log(id);
        const ticket = await (0, tickets_1.getTicketById)(id);
        ticket.isResolved = isResolved;
        await ticket.save();
        return res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
};
exports.updateTicket = updateTicket;
//# sourceMappingURL=tickets.js.map