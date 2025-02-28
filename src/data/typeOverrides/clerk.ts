import { UserRole } from "@/drizzle/schema";

export {};

declare global {
  interface CustomJwtSessionClaims {
    role: UserRole;
    dbId: string;
  }
  interface UserPublicMetadata {
    role: UserRole;
    dbId: string;
  }
}
