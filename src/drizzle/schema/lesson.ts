import { pgTable, text, pgEnum, uuid, integer } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { CourseSectionTable } from "./courseSection";

export const LessonStatuses = ["private", "public", "preview"] as const;
export type LessonStatus = (typeof LessonStatuses)[number];
export const lessonStatusEnum = pgEnum("lesson_status", LessonStatuses);

export const LessonTable = pgTable("lessons", {
  id,
  name: text().notNull(),
  description: text(),
  order: integer().notNull(),
  youtubeVideoId: text().notNull(),
  courseSectionId: uuid()
    .notNull()
    .references(() => CourseSectionTable.id, { onDelete: "cascade" }),
  status: lessonStatusEnum().notNull().default("private"),
  createdAt,
  updatedAt,
});

export const lessonRelations = relations(LessonTable, ({ one }) => ({
  courseSection: one(CourseSectionTable, {
    fields: [LessonTable.courseSectionId],
    references: [CourseSectionTable.id],
  }),
}));
