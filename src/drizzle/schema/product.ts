import { relations } from "drizzle-orm";
import { pgTable, text, integer } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schemaHelpers";
import { CourseProductTable } from "./courseProduct";

export const productStatuses = ["private", "public"] as const;
export type productStatus = (typeof productStatuses)[number];

export const ProductTable = pgTable("products", {
  id,
  name: text().notNull(),
  imageUrl: text().notNull(),
  description: text(),
  status: text().$type<productStatus>(),
  priceInUSD: integer().notNull(),
  createdAt,
});

export const productRelations = relations(ProductTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
}));
