import { COOKIE_NAME } from "../shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { storagePut } from "./storage";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Courses
  courses: router({
    getAll: publicProcedure.query(async () => {
      return await db.getAllCourses();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const course = await db.getCourseBySlug(input.slug);
        if (!course) throw new TRPCError({ code: "NOT_FOUND" });
        const fees = await db.getCourseFees(course.id);
        return { ...course, fees };
      }),
    getByCategory: publicProcedure
      .input(z.object({ category: z.string() }))
      .query(async ({ input }) => {
        return await db.getCoursesByCategory(input.category);
      }),
  }),

  // Faculty
  faculty: router({
    getAll: publicProcedure.query(async () => {
      return await db.getAllFaculty();
    }),
    getByCategory: publicProcedure
      .input(z.object({ category: z.string() }))
      .query(async ({ input }) => {
        return await db.getFacultyByCategory(input.category);
      }),
  }),

  // Gallery
  gallery: router({
    getAll: publicProcedure.query(async () => {
      return await db.getAllGalleryImages();
    }),
    getByCategory: publicProcedure
      .input(z.object({ category: z.string() }))
      .query(async ({ input }) => {
        return await db.getGalleryImagesByCategory(input.category);
      }),
  }),

  // Branches
  branches: router({
    getAll: publicProcedure.query(async () => {
      return await db.getAllBranches();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const branch = await db.getBranchBySlug(input.slug);
        if (!branch) throw new TRPCError({ code: "NOT_FOUND" });
        return branch;
      }),
  }),

  // Results
  results: router({
    getAll: publicProcedure.query(async () => {
      return await db.getAllResults();
    }),
    getByCategory: publicProcedure
      .input(z.object({ category: z.string() }))
      .query(async ({ input }) => {
        return await db.getResultsByCategory(input.category);
      }),
  }),

  // Scholarship
  scholarship: router({
    register: publicProcedure
      .input(z.object({
        studentName: z.string(),
        fatherName: z.string(),
        motherName: z.string(),
        dateOfBirth: z.string(),
        class: z.string(),
        previousSchool: z.string(),
        address: z.string(),
        mobileNumber: z.string(),
        photoUrl: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          const result = await db.createScholarshipRegistration(input);
          const admitCardNumber = `ADMIT-${Date.now()}`;
          return {
            success: true,
            admitCardNumber,
          };
        } catch (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to register for scholarship",
          });
        }
      }),

    getRegistration: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const registration = await db.getScholarshipRegistration(input.id);
        if (!registration) throw new TRPCError({ code: "NOT_FOUND" });
        return registration;
      }),

    // Admin only
    getAllRegistrations: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getAllScholarshipRegistrations();
      }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["registered", "admitted", "rejected"]),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        await db.updateScholarshipRegistration(input.id, { status: input.status });
        return { success: true };
      }),
  }),

  // Enquiries
  enquiry: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        subject: z.string(),
        message: z.string(),
      }))
      .mutation(async ({ input }) => {
        try {
          await db.createEnquiry(input);
          return { success: true };
        } catch (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to submit enquiry",
          });
        }
      }),

    // Admin only
    getAll: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getAllEnquiries();
      }),
  }),

  // Admission
  admission: router({
    create: publicProcedure
      .input(z.object({
        studentName: z.string(),
        fatherName: z.string(),
        motherName: z.string(),
        dateOfBirth: z.string(),
        gender: z.string(),
        class: z.string(),
        previousSchool: z.string(),
        address: z.string(),
        mobileNumber: z.string(),
        email: z.string(),
        fatherOccupation: z.string().optional(),
        motherOccupation: z.string().optional(),
        annualIncome: z.string().optional(),
        photoUrl: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await db.createAdmissionForm(input);
          const admissionNumber = `ADM-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
          return {
            success: true,
            admissionNumber,
          };
        } catch (error) {
          console.error('[Admission Form Error]', error);
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Failed to submit admission form: ${errorMessage}`,
          });
        }
      }),

    getAll: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getAdmissionForms();
      }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["pending", "approved", "rejected"]),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        await db.updateAdmissionFormStatus(input.id, input.status);
        return { success: true };
      }),
  }),

  // Contact Forms
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        subject: z.string(),
        message: z.string(),
      }))
      .mutation(async ({ input }) => {
        try {
          await db.createContactForm(input);
          return { success: true };
        } catch (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to submit contact form",
          });
        }
      }),

    getAll: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getContactForms();
      }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "read", "resolved"]),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        await db.updateContactFormStatus(input.id, input.status);
        return { success: true };
      }),
  }),

  // File upload
  upload: router({
    photo: publicProcedure
      .input(z.object({
        fileName: z.string(),
        fileData: z.string(), // base64 encoded
      }))
      .mutation(async ({ input }) => {
        try {
          const buffer = Buffer.from(input.fileData, "base64");
          const fileKey = `scholarship-photos/${Date.now()}-${Math.random().toString(36).substr(2, 9)}.jpg`;
          
          const { url } = await storagePut(fileKey, buffer, "image/jpeg");
          return { url };
        } catch (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to upload photo",
          });
        }
      }),
  }),

  // Admin Panel
  admin: router({
    getAdmissions: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getAdmissionForms();
      }),

    getEnquiries: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getAllEnquiries();
      }),

    getContacts: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getContactForms();
      }),

    getScholarships: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getAllScholarshipRegistrations();
      }),

    getGalleryImages: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getAllGalleryImages();
      }),

    getCourses: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getAllCourses();
      }),

    getBranches: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.getAllBranches();
      }),

    deleteAdmission: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.deleteAdmissionForm(input.id);
      }),

    updateAdmissionStatus: protectedProcedure
      .input(z.object({ id: z.number(), status: z.string() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.updateAdmissionFormStatus(input.id, input.status);
      }),

    createCourse: protectedProcedure
      .input(z.object({ name: z.string(), category: z.string(), duration: z.string(), shortDescription: z.string() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.createCourse(input);
      }),

    deleteCourse: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.deleteCourse(input.id);
      }),

    createGalleryImage: protectedProcedure
      .input(z.object({ title: z.string(), description: z.string(), category: z.string(), imageUrl: z.string() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.createGalleryImage(input);
      }),

    deleteGalleryImage: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.deleteGalleryImage(input.id);
      }),

    createBranch: protectedProcedure
      .input(z.object({ name: z.string(), address: z.string(), phone: z.string(), email: z.string() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.createBranch(input);
      }),

    deleteBranch: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return await db.deleteBranch(input.id);
      }),

    deleteEnquiry: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN' });
        }
        return await db.deleteEnquiry(input.id);
      }),

    deleteScholarship: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN' });
        }
        return await db.deleteScholarship(input.id);
      }),
  }),
});

export type AppRouter = typeof appRouter;
