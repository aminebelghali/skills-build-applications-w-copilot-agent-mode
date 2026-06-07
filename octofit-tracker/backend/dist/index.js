"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit-tracker';
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
async function startServer() {
    try {
        await mongoose_1.default.connect(mongoUri);
        console.log(`Connected to MongoDB at ${mongoUri}`);
    }
    catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
    app.listen(port, () => {
        console.log(`OctoFit backend running on http://localhost:${port}`);
    });
}
void startServer();
//# sourceMappingURL=index.js.map