import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
const app = express();
const JWT_SECRET = process.env.JWT_SECRET || "mantra_secret";

app.use(cors());
app.use(express.json());

app.post("/contact", async (req: Request, res: Response) => {
  const { firstName, lastName, address, mobile, email, other, enquiryType } =
    req.body;

  try {
    const contact = await prisma.contact.create({
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
  } catch (error) {
    console.error("Contact save error:", error);
    res.status(500).json({ error: "Unable to save contact info" });
  }
});

app.get("/contact", async (req: Request, res: Response) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
    res.status(500).json({ error: "Unable to fetch contacts" });
  }
});
app.delete("/contact/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.contact.delete({ where: { id } });
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    console.error("Failed to delete contact:", error);
    res.status(500).json({ error: "Unable to delete contact" });
  }
});
//@ts-ignore
app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const admin = await prisma.admin.findFirst({
      where: { username },
    });

    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin.id }, JWT_SECRET, { expiresIn: "1d" });
    return res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

app.listen(8080, () => {
  console.log("listing port at 8080");
});
