"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTicketById = exports.deleteTicketById = exports.createTicket = exports.getTicketById = exports.getTicketsByDev = exports.getTickets = exports.TicketModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TicketSchema = new mongoose_1.default.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    devAssigned: { type: String, require: true },
    priority: { type: Number, require: true },
    isResolved: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, require: true, default: Date.now() },
});
exports.TicketModel = mongoose_1.default.model('Ticket', TicketSchema);
const getTickets = () => exports.TicketModel.find();
exports.getTickets = getTickets;
const getTicketsByDev = (email) => exports.TicketModel.findOne({ email });
exports.getTicketsByDev = getTicketsByDev;
const getTicketById = (id) => exports.TicketModel.findById({ _id: id });
exports.getTicketById = getTicketById;
const createTicket = (values) => new exports.TicketModel(values)
    .save().then((ticket) => ticket.toObject());
exports.createTicket = createTicket;
const deleteTicketById = (id) => exports.TicketModel.findOneAndDelete({ _id: id });
exports.deleteTicketById = deleteTicketById;
const updateTicketById = (id, values) => exports.TicketModel.findByIdAndUpdate({ id, values });
exports.updateTicketById = updateTicketById;
//# sourceMappingURL=tickets.js.map