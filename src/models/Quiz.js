import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to creator
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }], // Reference to questions
    tags: [String], // Categories or tags
    duration: { type: Number, required: true }, // Duration in minutes
}, { timestamps: true });

export default mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);
