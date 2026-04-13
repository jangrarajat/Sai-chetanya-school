import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, longtext } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Courses table
 */
export const courses = mysqlTable("courses", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: longtext("description"),
  shortDescription: text("shortDescription"),
  category: mysqlEnum("category", ["navodaya", "sainik", "military", "sports", "regular"]).notNull(),
  duration: varchar("duration", { length: 100 }),
  ageGroup: varchar("ageGroup", { length: 100 }),
  admissionDetails: longtext("admissionDetails"),
  facilities: longtext("facilities"),
  image: varchar("image", { length: 500 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Course = typeof courses.$inferSelect;
export type InsertCourse = typeof courses.$inferInsert;

/**
 * Course fee structure
 */
export const courseFees = mysqlTable("courseFees", {
  id: int("id").autoincrement().primaryKey(),
  courseId: int("courseId").notNull(),
  feeType: varchar("feeType", { length: 100 }).notNull(), // e.g., "Admission", "Monthly", "Annual"
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type CourseFee = typeof courseFees.$inferSelect;
export type InsertCourseFee = typeof courseFees.$inferInsert;

/**
 * Faculty members
 */
export const faculty = mysqlTable("faculty", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  designation: varchar("designation", { length: 255 }).notNull(),
  category: mysqlEnum("category", ["school", "hostel", "coaching"]).notNull(),
  qualification: varchar("qualification", { length: 255 }),
  experience: varchar("experience", { length: 100 }),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }),
  image: varchar("image", { length: 500 }),
  bio: longtext("bio"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Faculty = typeof faculty.$inferSelect;
export type InsertFaculty = typeof faculty.$inferInsert;

/**
 * Gallery images
 */
export const galleryImages = mysqlTable("galleryImages", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  category: mysqlEnum("category", ["campus", "classroom", "hostel", "sports", "faculty"]).notNull(),
  imageUrl: varchar("imageUrl", { length: 500 }).notNull(),
  description: text("description"),
  order: int("order").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type GalleryImage = typeof galleryImages.$inferSelect;
export type InsertGalleryImage = typeof galleryImages.$inferInsert;

/**
 * Scholarship registrations
 */
export const scholarshipRegistrations = mysqlTable("scholarshipRegistrations", {
  id: int("id").autoincrement().primaryKey(),
  studentName: varchar("studentName", { length: 255 }).notNull(),
  fatherName: varchar("fatherName", { length: 255 }).notNull(),
  motherName: varchar("motherName", { length: 255 }).notNull(),
  dateOfBirth: varchar("dateOfBirth", { length: 20 }).notNull(),
  class: varchar("class", { length: 50 }).notNull(),
  previousSchool: varchar("previousSchool", { length: 255 }).notNull(),
  address: longtext("address").notNull(),
  mobileNumber: varchar("mobileNumber", { length: 20 }).notNull(),
  photoUrl: longtext("photoUrl"),
  admitCardUrl: varchar("admitCardUrl", { length: 500 }),
  admitCardNumber: varchar("admitCardNumber", { length: 100 }).unique(),
  status: mysqlEnum("status", ["registered", "admitted", "rejected"]).default("registered").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ScholarshipRegistration = typeof scholarshipRegistrations.$inferSelect;
export type InsertScholarshipRegistration = typeof scholarshipRegistrations.$inferInsert;

/**
 * Enquiry submissions
 */
export const enquiries = mysqlTable("enquiries", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: longtext("message").notNull(),
  status: mysqlEnum("status", ["new", "read", "resolved"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Enquiry = typeof enquiries.$inferSelect;
export type InsertEnquiry = typeof enquiries.$inferInsert;

/**
 * Branches
 */
export const branches = mysqlTable("branches", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  address: longtext("address").notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  description: longtext("description"),
  image: varchar("image", { length: 500 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Branch = typeof branches.$inferSelect;
export type InsertBranch = typeof branches.$inferInsert;

/**
 * Contact form submissions
 */
export const contactForms = mysqlTable("contactForms", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: longtext("message").notNull(),
  status: mysqlEnum("status", ["new", "read", "resolved"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContactForm = typeof contactForms.$inferSelect;
export type InsertContactForm = typeof contactForms.$inferInsert;

/**
 * Admission forms
 */
export const admissionForms = mysqlTable("admissionForms", {
  id: int("id").autoincrement().primaryKey(),
  studentName: varchar("studentName", { length: 255 }).notNull(),
  fatherName: varchar("fatherName", { length: 255 }).notNull(),
  motherName: varchar("motherName", { length: 255 }).notNull(),
  dateOfBirth: varchar("dateOfBirth", { length: 20 }).notNull(),
  gender: varchar("gender", { length: 20 }).notNull(),
  class: varchar("class", { length: 50 }).notNull(),
  previousSchool: varchar("previousSchool", { length: 255 }).notNull(),
  address: longtext("address").notNull(),
  mobileNumber: varchar("mobileNumber", { length: 20 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  photoUrl: longtext("photoUrl"),
  fatherOccupation: varchar("fatherOccupation", { length: 255 }),
  motherOccupation: varchar("motherOccupation", { length: 255 }),
  annualIncome: varchar("annualIncome", { length: 100 }),
  status: mysqlEnum("status", ["pending", "approved", "rejected"]).default("pending").notNull(),
  admissionNumber: varchar("admissionNumber", { length: 100 }).unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AdmissionForm = typeof admissionForms.$inferSelect;
export type InsertAdmissionForm = typeof admissionForms.$inferInsert;

/**
 * Results
 */
export const results = mysqlTable("results", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  category: mysqlEnum("category", ["navodaya", "military", "sainik", "class5", "class8", "class10"]).notNull(),
  year: int("year").notNull(),
  passPercentage: decimal("passPercentage", { precision: 5, scale: 2 }),
  totalStudents: int("totalStudents"),
  toppers: longtext("toppers"),
  resultUrl: varchar("resultUrl", { length: 500 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Result = typeof results.$inferSelect;
export type InsertResult = typeof results.$inferInsert;


/**
 * Admin Users (separate from regular users)
 */
export const adminUsers = mysqlTable("adminUsers", {
  id: int("id").autoincrement().primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  role: mysqlEnum("role", ["superadmin", "admin"]).default("admin").notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  lastLogin: timestamp("lastLogin"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertAdminUser = typeof adminUsers.$inferInsert;

/**
 * Settings (for navbar timing, school info, etc.)
 */
export const settings = mysqlTable("settings", {
  id: int("id").autoincrement().primaryKey(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  value: longtext("value").notNull(),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Setting = typeof settings.$inferSelect;
export type InsertSetting = typeof settings.$inferInsert;

/**
 * Home Slider Images
 */
export const homeSliderImages = mysqlTable("homeSliderImages", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  imageUrl: varchar("imageUrl", { length: 500 }).notNull(),
  order: int("order").notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type HomeSliderImage = typeof homeSliderImages.$inferSelect;
export type InsertHomeSliderImage = typeof homeSliderImages.$inferInsert;

/**
 * Testimonials
 */
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  studentName: varchar("studentName", { length: 255 }).notNull(),
  studentClass: varchar("studentClass", { length: 50 }).notNull(),
  testimonialText: longtext("testimonialText").notNull(),
  rating: int("rating").notNull(), // 1-5 stars
  photoUrl: varchar("photoUrl", { length: 500 }),
  isActive: boolean("isActive").default(true).notNull(),
  order: int("order").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

/**
 * FAQ
 */
export const faqs = mysqlTable("faqs", {
  id: int("id").autoincrement().primaryKey(),
  question: varchar("question", { length: 500 }).notNull(),
  answer: longtext("answer").notNull(),
  category: varchar("category", { length: 100 }),
  order: int("order").notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type FAQ = typeof faqs.$inferSelect;
export type InsertFAQ = typeof faqs.$inferInsert;
