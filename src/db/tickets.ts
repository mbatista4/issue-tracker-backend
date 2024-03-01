import mongoose, { Model } from 'mongoose';

const TicketSchema = new mongoose.Schema({
    title: { type: String, require: true},
    description: { type: String, require: true},
    devAssigned: { type: String, require: true},
    priority: { type: Number, require: true},
    isResolved: {type: Boolean, require: true, default: false},
    createdAt: { type: Date, require: true, default: Date.now()},
});

export const TicketModel = mongoose.model('Ticket',TicketSchema);

export const getTickets = () => TicketModel.find();
export const getTicketsByDev = (email: String) => TicketModel.findOne({email});
export const getTicketById = (id: String) => TicketModel.findById({_id :id});
export const createTicket = (values: Record<string,any>) => new TicketModel(values)
    .save().then((ticket) => ticket.toObject());
export const deleteTicketById = (id: string) => TicketModel.findOneAndDelete({_id:id});
export const updateTicketById = (id: string, values: Record<string,any>) => TicketModel.findByIdAndUpdate({id, values});