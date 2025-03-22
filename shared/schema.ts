import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const rsvps = pgTable("rsvps", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  attending: text("attending").notNull(),
  guests: integer("guests").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertRsvpSchema = createInsertSchema(rsvps)
  .pick({
    name: true,
    attending: true,
    guests: true,
  })
  .extend({
    attending: z.enum(["yes", "no", "maybe"], {
      required_error: "Please select an option",
    }),
    guests: z.number().min(1).max(5),
  });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertRsvp = z.infer<typeof insertRsvpSchema>;
export type Rsvp = typeof rsvps.$inferSelect;
