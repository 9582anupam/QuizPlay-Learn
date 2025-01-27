import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true }, // Associated quiz
    questionText: { type: String, required: true },
    options: [{ 
        text: { type: String, required: true },
        isCorrect: { type: Boolean, default: false },
    }], // Multiple-choice options
}, { timestamps: true });

export default mongoose.models.Question || mongoose.model('Question', QuestionSchema);
