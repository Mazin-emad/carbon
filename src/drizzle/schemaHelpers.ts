import { uuid, timestamp } from "drizzle-orm/pg-core";

export const id = uuid().defaultRandom().primaryKey();
export const createdAt = timestamp({ withTimezone: true })
  .defaultNow()
  .notNull();
export const updatedAt = timestamp({ withTimezone: true })
  .defaultNow()
  .notNull()
  .$onUpdate(() => new Date());
