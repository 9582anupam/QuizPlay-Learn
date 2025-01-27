import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Associated user
    earnedTokens: { type: Number, required: true },
    redeemedTokens: { type: Number, default: 0 }, // Track redeemed tokens
    rewardHistory: [
        {
            rewardName: { type: String },
            redeemedOn: { type: Date, default: Date.now },
        }
    ], // History of redeemed rewards
}, { timestamps: true });

export default mongoose.models.Token || mongoose.model('Token', TokenSchema);
