"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const JWT_SECRET = process.env.JWT_SECRET || "mantra_secret";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, address, mobile, email, other, enquiryType } = req.body;
    try {
        const contact = yield prisma.contact.create({
            data: {
                firstName,
                lastName,
                address,
                mobile,
                email,
                other,
                enquiryType,
            },
        });
        res.status(200).json({ message: "Contact saved", contact });
    }
    catch (error) {
        console.error("Contact save error:", error);
        res.status(500).json({ error: "Unable to save contact info" });
    }
}));
app.get("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield prisma.contact.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.status(200).json(contacts);
    }
    catch (error) {
        console.error("Failed to fetch contacts:", error);
        res.status(500).json({ error: "Unable to fetch contacts" });
    }
}));
app.delete("/contact/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.contact.delete({ where: { id } });
        res.status(200).json({ message: "Contact deleted" });
    }
    catch (error) {
        console.error("Failed to delete contact:", error);
        res.status(500).json({ error: "Unable to delete contact" });
    }
}));
//@ts-ignore
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const admin = yield prisma.admin.findFirst({
            where: { username },
        });
        if (!admin)
            return res.status(401).json({ message: "Invalid credentials" });
        if (admin.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ id: admin.id }, JWT_SECRET, { expiresIn: "1d" });
        return res.json({ token });
    }
    catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Server error" });
    }
}));
app.listen(8080, () => {
    console.log("listing port at 8080");
});
