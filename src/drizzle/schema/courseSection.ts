import { pgEnum, uuid, pgTable, text, integer } from "drizzle-orm/pg-core";
import { CourseTable } from "./course";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";

export const CourseSectionStatuses = ["private", "public"] as const;
export type CourseSectionStatus = (typeof CourseSectionStatuses)[number];
export const courseSectionStatusEnum = pgEnum(
  "course_section_status",
  CourseSectionStatuses
);

export const CourseSectionTable = pgTable("course_sections", {
  id,
  name: text().notNull(),
  order: integer().notNull(),
  courseId: uuid()
    .notNull()
    .references(() => CourseTable.id, { onDelete: "cascade" }),
  status: courseSectionStatusEnum().notNull().default("private"),
  createdAt,
  updatedAt,
});

export const courseSectionRelations = relations(
  CourseSectionTable,
  ({ one }) => ({
    course: one(CourseTable, {
      fields: [CourseSectionTable.courseId],
      references: [CourseTable.id],
    }),
  })
);
