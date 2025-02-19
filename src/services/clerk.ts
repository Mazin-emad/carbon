import { UserRole } from "@/drizzle/schema";
import { clerkClient } from "@clerk/nextjs/server";

const client = await clerkClient();

export function syncClerkUserMetadata(user: {
  id: string;
  clerkUserId: string;
  role: UserRole;
}) {
  return client.users.updateUserMetadata(user.clerkUserId, {
    publicMetadata: {
      role: user.role,
      dbId: user.id,
    },
  });
}
