# Download Project & Run Locally - Complete Guide

## What You Need to Download

Your complete school website project is ready! Here's everything you need:

### Files to Download:
- All source code files (client, server, drizzle)
- Configuration files (package.json, tsconfig.json, vite.config.ts)
- Environment template (.env.example)
- Database schema (drizzle/schema.ts)

---

## Complete Setup Steps (Copy & Paste)

### 1️⃣ Download Project Files

Download the project ZIP from the Manus dashboard and extract it to your desired location.

```bash
# Extract and navigate to project
cd school_website
```

---

### 2️⃣ Install Node.js (If not installed)

Download from: https://nodejs.org/ (LTS version recommended)

Verify installation:
```bash
node --version
npm --version
```

---

### 3️⃣ Install Project Dependencies

```bash
# Install pnpm globally (recommended)
npm install -g pnpm

# Install all project dependencies
pnpm install
```

**If pnpm doesn't work, use npm:**
```bash
npm install
```

---

### 4️⃣ Setup MySQL Database

#### Windows:
1. Download MySQL from: https://dev.mysql.com/downloads/mysql/
2. Install and start MySQL Service
3. Open Command Prompt and run:

```bash
mysql -u root -p
```

Enter your MySQL password, then run:

```sql
CREATE DATABASE school_website;
CREATE USER 'school_user'@'localhost' IDENTIFIED BY 'school_password';
GRANT ALL PRIVILEGES ON school_website.* TO 'school_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### Mac:
```bash
# Install MySQL via Homebrew
brew install mysql
brew services start mysql

# Connect to MySQL
mysql -u root

# Run the commands above
```

#### Linux:
```bash
# Install MySQL
sudo apt-get install mysql-server

# Start MySQL
sudo service mysql start

# Connect and run commands above
mysql -u root -p
```

---

### 5️⃣ Create Environment File

Create a new file named `.env.local` in the project root directory with this content:

```env
# Database
DATABASE_URL="mysql://school_user:school_password@localhost:3306/school_website"

# Authentication
JWT_SECRET="your-super-secret-key-that-is-at-least-32-characters-long-12345"
VITE_APP_ID="school-app"
OAUTH_SERVER_URL="https://api.manus.im"
VITE_OAUTH_PORTAL_URL="https://portal.manus.im"

# Owner
OWNER_OPEN_ID="owner-123"
OWNER_NAME="School Admin"

# API Keys (use placeholder values for local development)
BUILT_IN_FORGE_API_KEY="placeholder-key"
BUILT_IN_FORGE_API_URL="https://api.manus.im"
VITE_FRONTEND_FORGE_API_KEY="placeholder-key"
VITE_FRONTEND_FORGE_API_URL="https://api.manus.im"

# Analytics
VITE_ANALYTICS_ENDPOINT="https://analytics.manus.im"
VITE_ANALYTICS_WEBSITE_ID="website-123"
```

---

### 6️⃣ Setup Database Tables

Run this command to create all database tables:

```bash
pnpm db:push
```

---

### 7️⃣ Start Development Server

```bash
pnpm dev
```

You should see output like:
```
Server running on http://localhost:3000/
```

---

### 8️⃣ Open in Browser

1. Open your web browser
2. Go to: **http://localhost:3000**
3. You should see the school website home page!

---

## Admin Panel Access

**URL:** http://localhost:3000/admin/dashboard

**Login Credentials:**
- Username: `admin`
- Password: `admin@123`

---

## Open in VS Code

```bash
# Open the project folder in VS Code
code .
```

Or:
1. Open VS Code
2. File → Open Folder
3. Select the `school_website` folder

---

## Make Changes & See Live Updates

1. Edit any file in `client/src/` or `server/`
2. Save the file (Ctrl+S)
3. The browser automatically refreshes with your changes
4. Check browser console (F12) for any errors

---

## Common Issues & Solutions

### ❌ "pnpm: command not found"
**Solution:**
```bash
npm install -g pnpm
# Then try again: pnpm install
```

### ❌ "Cannot connect to database"
**Solution:**
1. Make sure MySQL is running
2. Check DATABASE_URL in .env.local
3. Verify database exists:
```bash
mysql -u root -p -e "SHOW DATABASES;"
```

### ❌ "Port 3000 already in use"
**Solution:**
```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### ❌ "Module not found" errors
**Solution:**
```bash
rm -rf node_modules
pnpm install
```

### ❌ TypeScript errors
**Solution:**
```bash
pnpm check
pnpm build
```

---

## Useful Commands

```bash
# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Start production build
pnpm start

# Format code
pnpm format

# Type check
pnpm check

# Database migration
pnpm db:push

# Generate migration from schema changes
pnpm drizzle-kit generate
```

---

## Project Structure

```
school_website/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── pages/                  # Page components (Home, About, etc.)
│   │   ├── components/             # Reusable UI components
│   │   ├── App.tsx                 # Main routing
│   │   ├── main.tsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── public/                     # Static files
│   └── index.html                  # HTML template
├── server/                          # Backend Express server
│   ├── routers.ts                  # tRPC API endpoints
│   ├── db.ts                       # Database queries
│   ├── _core/                      # Core server logic
│   └── index.ts                    # Server entry point
├── drizzle/                         # Database schema & migrations
│   ├── schema.ts                   # Database tables definition
│   └── migrations/                 # Generated SQL migrations
├── storage/                         # S3 storage helpers
├── shared/                          # Shared constants & types
├── .env.local                       # Environment variables (create this)
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── vite.config.ts                   # Vite config
└── README.md                        # Documentation
```

---

## File Editing Tips

### Edit Home Page
- File: `client/src/pages/Home.tsx`
- Add sections, change text, modify colors

### Edit Navigation
- File: `client/src/components/MainNavBar.tsx`
- Add/remove menu items

### Edit Courses
- File: `client/src/pages/CourseNavodaya.tsx` (and others)
- Update course details, fees, etc.

### Edit Styles
- File: `client/src/index.css`
- Change colors, fonts, spacing

### Edit Database Schema
- File: `drizzle/schema.ts`
- Add new tables or columns
- Run: `pnpm drizzle-kit generate && pnpm db:push`

---

## Deployment Ready

Once you're happy with your changes:

1. Run tests: `pnpm test`
2. Build: `pnpm build`
3. Deploy to production (Manus, Vercel, Railway, etc.)

---

## Support & Help

- **Check logs**: Look in `.manus-logs/` directory
- **Run tests**: `pnpm test` to verify everything works
- **Browser console**: F12 to see frontend errors
- **Terminal output**: Check for server errors when running `pnpm dev`

---

## You're All Set! 🎉

Your complete professional school website is ready to run locally. Make changes, test everything, and deploy when ready!

**Happy Coding!** 💻✨
