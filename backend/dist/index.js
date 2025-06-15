"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ContectRoute_1 = __importDefault(require("./Routes/ContectRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({
        Message: "hye i am route",
    });
});
app.use("/api", ContectRoute_1.default);
app.listen(8080, () => {
    console.log("listing port at 8080");
});
