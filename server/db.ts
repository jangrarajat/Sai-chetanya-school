import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, adminUsers, settings, testimonials, faqs, homeSliderImages } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Admin Users
export async function getAdminByUsername(username: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(adminUsers).where(eq(adminUsers.username, username)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getAllAdmins() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(adminUsers).where(eq(adminUsers.isActive, true));
}

export async function updateAdminLastLogin(adminId: number) {
  const db = await getDb();
  if (!db) return;
  await db.update(adminUsers).set({ lastLogin: new Date() }).where(eq(adminUsers.id, adminId));
}

// Settings
export async function getSetting(key: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
  return result.length > 0 ? result[0].value : undefined;
}

export async function getAllSettings() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(settings);
}

export async function updateSetting(key: string, value: string) {
  const db = await getDb();
  if (!db) return;
  const existing = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
  if (existing.length > 0) {
    await db.update(settings).set({ value }).where(eq(settings.key, key));
  } else {
    await db.insert(settings).values({ key, value });
  }
}

// Testimonials
export async function getAllTestimonials() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(testimonials).where(eq(testimonials.isActive, true));
}

export async function createTestimonial(data: any) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.insert(testimonials).values(data);
  return result;
}

export async function updateTestimonial(id: number, data: any) {
  const db = await getDb();
  if (!db) return;
  await db.update(testimonials).set(data).where(eq(testimonials.id, id));
}

export async function deleteTestimonial(id: number) {
  const db = await getDb();
  if (!db) return;
  await db.update(testimonials).set({ isActive: false }).where(eq(testimonials.id, id));
}

// FAQs
export async function getAllFAQs() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(faqs).where(eq(faqs.isActive, true));
}

export async function createFAQ(data: any) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.insert(faqs).values(data);
  return result;
}

export async function updateFAQ(id: number, data: any) {
  const db = await getDb();
  if (!db) return;
  await db.update(faqs).set(data).where(eq(faqs.id, id));
}

export async function deleteFAQ(id: number) {
  const db = await getDb();
  if (!db) return;
  await db.update(faqs).set({ isActive: false }).where(eq(faqs.id, id));
}

// Home Slider Images
export async function getHomeSliderImages() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(homeSliderImages).where(eq(homeSliderImages.isActive, true));
}

export async function createHomeSliderImage(data: any) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.insert(homeSliderImages).values(data);
  return result;
}

export async function updateHomeSliderImage(id: number, data: any) {
  const db = await getDb();
  if (!db) return;
  await db.update(homeSliderImages).set(data).where(eq(homeSliderImages.id, id));
}

export async function deleteHomeSliderImage(id: number) {
  const db = await getDb();
  if (!db) return;
  await db.update(homeSliderImages).set({ isActive: false }).where(eq(homeSliderImages.id, id));
}

// Existing scholarship and other functions (keeping from previous implementation)
export async function createScholarshipRegistration(data: any) {
  const db = await getDb();
  if (!db) return null;
  const { scholarshipRegistrations } = await import("../drizzle/schema");
  const result = await db.insert(scholarshipRegistrations).values(data);
  return result;
}

export async function getScholarshipRegistrations() {
  const db = await getDb();
  if (!db) return [];
  const { scholarshipRegistrations } = await import("../drizzle/schema");
  return await db.select().from(scholarshipRegistrations);
}

export async function updateScholarshipRegistration(id: number, data: any) {
  const db = await getDb();
  if (!db) return;
  const { scholarshipRegistrations } = await import("../drizzle/schema");
  // Only update if data is not empty
  if (Object.keys(data).length > 0) {
    await db.update(scholarshipRegistrations).set(data).where(eq(scholarshipRegistrations.id, id));
  }
}

export async function getEnquiries() {
  const db = await getDb();
  if (!db) return [];
  const { enquiries } = await import("../drizzle/schema");
  return await db.select().from(enquiries);
}

export async function getContactForms() {
  const db = await getDb();
  if (!db) return [];
  const { contactForms } = await import("../drizzle/schema");
  return await db.select().from(contactForms);
}

export async function getAdmissionForms() {
  const db = await getDb();
  if (!db) return [];
  const { admissionForms } = await import("../drizzle/schema");
  return await db.select().from(admissionForms);
}

export async function getCourses() {
  const db = await getDb();
  if (!db) return [];
  const { courses } = await import("../drizzle/schema");
  return await db.select().from(courses);
}

export async function getBranches() {
  const db = await getDb();
  if (!db) return [];
  const { branches } = await import("../drizzle/schema");
  return await db.select().from(branches);
}

export async function getGalleryImages() {
  const db = await getDb();
  if (!db) return [];
  const { galleryImages } = await import("../drizzle/schema");
  return await db.select().from(galleryImages);
}


export async function createAdmissionForm(data: any) {
  const db = await getDb();
  if (!db) return null;
  const { admissionForms } = await import("../drizzle/schema");
  const result = await db.insert(admissionForms).values(data);
  return result;
}

export async function updateAdmissionFormStatus(id: number, status: string) {
  const db = await getDb();
  if (!db) return;
  const { admissionForms } = await import("../drizzle/schema");
  await db.update(admissionForms).set({ status: status as any }).where(eq(admissionForms.id, id));
}

export async function createContactForm(data: any) {
  const db = await getDb();
  if (!db) return null;
  const { contactForms } = await import("../drizzle/schema");
  const result = await db.insert(contactForms).values(data);
  return result;
}

export async function updateContactFormStatus(id: number, status: string) {
  const db = await getDb();
  if (!db) return;
  const { contactForms } = await import("../drizzle/schema");
  await db.update(contactForms).set({ status: status as any }).where(eq(contactForms.id, id));
}

export async function createCourse(data: any) {
  const db = await getDb();
  if (!db) return null;
  const { courses } = await import("../drizzle/schema");
  const result = await db.insert(courses).values(data);
  return result;
}

export async function updateCourse(id: number, data: any) {
  const db = await getDb();
  if (!db) return;
  const { courses } = await import("../drizzle/schema");
  await db.update(courses).set(data).where(eq(courses.id, id));
}

export async function deleteCourse(id: number) {
  const db = await getDb();
  if (!db) return;
  const { courses } = await import("../drizzle/schema");
  await db.delete(courses).where(eq(courses.id, id));
}

export async function createBranch(data: any) {
  const db = await getDb();
  if (!db) return null;
  const { branches } = await import("../drizzle/schema");
  const result = await db.insert(branches).values(data);
  return result;
}

export async function updateBranch(id: number, data: any) {
  const db = await getDb();
  if (!db) return;
  const { branches } = await import("../drizzle/schema");
  await db.update(branches).set(data).where(eq(branches.id, id));
}

export async function deleteBranch(id: number) {
  const db = await getDb();
  if (!db) return;
  const { branches } = await import("../drizzle/schema");
  await db.delete(branches).where(eq(branches.id, id));
}

export async function createGalleryImage(data: any) {
  const db = await getDb();
  if (!db) return null;
  const { galleryImages } = await import("../drizzle/schema");
  const result = await db.insert(galleryImages).values(data);
  return result;
}

export async function updateGalleryImage(id: number, data: any) {
  const db = await getDb();
  if (!db) return;
  const { galleryImages } = await import("../drizzle/schema");
  await db.update(galleryImages).set(data).where(eq(galleryImages.id, id));
}

export async function deleteGalleryImage(id: number) {
  const db = await getDb();
  if (!db) return;
  const { galleryImages } = await import("../drizzle/schema");
  await db.delete(galleryImages).where(eq(galleryImages.id, id));
}


export async function createEnquiry(data: any) {
  const db = await getDb();
  if (!db) return null;
  const { enquiries } = await import("../drizzle/schema");
  const result = await db.insert(enquiries).values(data);
  return result;
}

export async function getAllEnquiries() {
  const db = await getDb();
  if (!db) return [];
  const { enquiries } = await import("../drizzle/schema");
  return await db.select().from(enquiries);
}

export async function getScholarshipRegistration(id: number) {
  const db = await getDb();
  if (!db) return null;
  const { scholarshipRegistrations } = await import("../drizzle/schema");
  const result = await db.select().from(scholarshipRegistrations).where(eq(scholarshipRegistrations.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getAllScholarshipRegistrations() {
  const db = await getDb();
  if (!db) return [];
  const { scholarshipRegistrations } = await import("../drizzle/schema");
  return await db.select().from(scholarshipRegistrations);
}


export async function getAllResults() {
  const db = await getDb();
  if (!db) return [];
  const { results } = await import("../drizzle/schema");
  return await db.select().from(results);
}

export async function getResultsByCategory(category: string) {
  const db = await getDb();
  if (!db) return [];
  const { results } = await import("../drizzle/schema");
  return await db.select().from(results).where(eq(results.category, category as any));
}


export async function getAllBranches() {
  const db = await getDb();
  if (!db) return [];
  const { branches } = await import("../drizzle/schema");
  return await db.select().from(branches);
}

export async function getBranchBySlug(slug: string) {
  const db = await getDb();
  if (!db) return null;
  const { branches } = await import("../drizzle/schema");
  const result = await db.select().from(branches).where(eq(branches.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getAllCourses() {
  const db = await getDb();
  if (!db) return [];
  const { courses } = await import("../drizzle/schema");
  return await db.select().from(courses);
}

export async function getCourseBySlug(slug: string) {
  const db = await getDb();
  if (!db) return null;
  const { courses } = await import("../drizzle/schema");
  const result = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : null;
}


export async function getAllGalleryImages() {
  const db = await getDb();
  if (!db) return [];
  const { galleryImages } = await import("../drizzle/schema");
  return await db.select().from(galleryImages);
}

export async function getGalleryImagesByCategory(category: string) {
  const db = await getDb();
  if (!db) return [];
  const { galleryImages } = await import("../drizzle/schema");
  return await db.select().from(galleryImages).where(eq(galleryImages.category, category as any));
}


export async function getAllFaculty() {
  const db = await getDb();
  if (!db) return [];
  const { faculty } = await import("../drizzle/schema");
  return await db.select().from(faculty);
}

export async function getFacultyByCategory(category: string) {
  const db = await getDb();
  if (!db) return [];
  const { faculty } = await import("../drizzle/schema");
  return await db.select().from(faculty).where(eq(faculty.category, category as any));
}


export async function getCourseFees(courseId: number) {
  const db = await getDb();
  if (!db) return [];
  const { courseFees } = await import("../drizzle/schema");
  return await db.select().from(courseFees).where(eq(courseFees.courseId, courseId));
}

export async function getCoursesByCategory(category: string) {
  const db = await getDb();
  if (!db) return [];
  const { courses } = await import("../drizzle/schema");
  return await db.select().from(courses).where(eq(courses.category, category as any));
}

export async function deleteAdmissionForm(id: number) {
  const db = await getDb();
  if (!db) return;
  const { admissionForms } = await import("../drizzle/schema");
  await db.delete(admissionForms).where(eq(admissionForms.id, id));
}



export async function deleteEnquiry(id: number) {
  const db = await getDb();
  if (!db) throw new Error('Database not available');
  const { enquiries } = await import('../drizzle/schema');
  const { eq } = await import('drizzle-orm');
  return await db.delete(enquiries).where(eq(enquiries.id, id));
}

export async function deleteScholarship(id: number) {
  const db = await getDb();
  if (!db) throw new Error('Database not available');
  const { scholarshipRegistrations } = await import('../drizzle/schema');
  const { eq } = await import('drizzle-orm');
  return await db.delete(scholarshipRegistrations).where(eq(scholarshipRegistrations.id, id));
}
