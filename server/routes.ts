import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // RSVP endpoint
  app.post("/api/rsvp", async (req, res) => {
    try {
      const validatedData = insertRsvpSchema.parse(req.body);
      
      const newRsvp = await storage.createRsvp(validatedData);
      return res.status(201).json(newRsvp);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all RSVPs endpoint
  app.get("/api/rsvps", async (req, res) => {
    try {
      const rsvps = await storage.getAllRsvps();
      return res.status(200).json(rsvps);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
