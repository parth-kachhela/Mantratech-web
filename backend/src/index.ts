import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = express();
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
app.delete("/contact/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.contact.delete({ where: { id } });
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    console.error("Failed to delete contact:", error);
    res.status(500).json({ error: "Unable to delete contact" });
  }
});
app.listen(8080, () => {
  console.log("listing port at 8080");
});
