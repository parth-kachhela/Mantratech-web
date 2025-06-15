import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/contact", async (req, res) => {
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

    res.status(201).json({ message: "Contact saved", contact });
  } catch (error) {
    console.error("Contact save error:", error);
    res.status(500).json({ error: "Unable to save contact info" });
  }
});

export default router;
