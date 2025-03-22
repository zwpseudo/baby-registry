import { users, type User, type InsertUser, rsvps, type Rsvp, type InsertRsvp } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // RSVP methods
  createRsvp(rsvp: InsertRsvp): Promise<Rsvp>;
  getAllRsvps(): Promise<Rsvp[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private rsvpStore: Map<number, Rsvp>;
  currentUserId: number;
  currentRsvpId: number;

  constructor() {
    this.users = new Map();
    this.rsvpStore = new Map();
    this.currentUserId = 1;
    this.currentRsvpId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRsvp(insertRsvp: InsertRsvp): Promise<Rsvp> {
    const id = this.currentRsvpId++;
    const rsvp: Rsvp = { 
      ...insertRsvp, 
      id,
      createdAt: new Date().toISOString() 
    };
    this.rsvpStore.set(id, rsvp);
    return rsvp;
  }

  async getAllRsvps(): Promise<Rsvp[]> {
    return Array.from(this.rsvpStore.values());
  }
}

export const storage = new MemStorage();
