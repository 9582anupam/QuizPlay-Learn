import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String }, // Profile picture URL
    tokens: { type: Number, default: 0 }, // Reward points
    quizzesTaken: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }], // Reference to quizzes taken
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
