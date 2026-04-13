# School Website - Complete Setup Instructions for Local Development

## Prerequisites
- **Node.js** (v18 or higher) - Download from https://nodejs.org/
- **Git** - Download from https://git-scm.com/
- **VS Code** - Download from https://code.visualstudio.com/
- **MySQL** or **MariaDB** - Download from https://www.mysql.com/ or https://mariadb.org/

---

## Step 1: Clone/Download the Project

### Option A: If you have Git
```bash
git clone <your-repo-url> school_website
cd school_website
```

### Option B: If you downloaded as ZIP
```bash
# Extract the ZIP file to your desired location
cd school_website
```

---

## Step 2: Install Dependencies

```bash
# Install Node packages using pnpm (recommended) or npm
pnpm install

# OR if you don't have pnpm installed:
npm install -g pnpm
pnpm install

# OR use npm directly:
npm install
```

---

## Step 3: Setup Environment Variables

Create a `.env.local` file in the root directory with the following content:

```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/school_website"

# OAuth & Authentication
JWT_SECRET="your-secret-key-here-min-32-chars-long"
VITE_APP_ID="your-app-id"
OAUTH_SERVER_URL="https://api.manus.im"
VITE_OAUTH_PORTAL_URL="https://portal.manus.im"

# Owner Information
OWNER_OPEN_ID="owner-id"
OWNER_NAME="School Admin"

# API Keys
BUILT_IN_FORGE_API_KEY="your-api-key"
BUILT_IN_FORGE_API_URL="https://api.manus.im"
VITE_FRONTEND_FORGE_API_KEY="your-frontend-key"
VITE_FRONTEND_FORGE_API_URL="https://api.manus.im"

# Analytics
VITE_ANALYTICS_ENDPOINT="https://analytics.manus.im"
VITE_ANALYTICS_WEBSITE_ID="your-website-id"
```

**Note:** For local development, you can use placeholder values. The important ones are:
- `DATABASE_URL` - Point to your local MySQL database
- `JWT_SECRET` - Any long random string (min 32 characters)

---

## Step 4: Setup Database

### Step 4A: Create MySQL Database

```bash
# Connect to MySQL
mysql -u root -p

# In MySQL console, run:
CREATE DATABASE school_website;
CREATE USER 'school_user'@'localhost' IDENTIFIED BY 'school_password';
GRANT ALL PRIVILEGES ON school_website.* TO 'school_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### Step 4B: Update DATABASE_URL in .env.local

```env
DATABASE_URL="mysql://school_user:school_password@localhost:3306/school_website"
```

### Step 4C: Run Database Migrations

```bash
# Generate and apply migrations
pnpm db:push
```

---

## Step 5: Open in VS Code

```bash
# Open the project in VS Code
code .
```

---

## Step 6: Run Development Server

### Option 1: Using Terminal in VS Code

```bash
# In VS Code terminal (Ctrl + `), run:
pnpm dev
```

### Option 2: Using Command Line

```bash
# From project root directory:
pnpm dev
```

The development server will start at: **http://localhost:3000**

---

## Step 7: Access the Website

1. **Open your browser** and go to: `http://localhost:3000`
2. **Admin Login**: Username: `admin` | Password: `admin@123`
3. **Admin Panel**: `http://localhost:3000/admin/dashboard`

---

## Common Commands

```bash
# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Start production server (after build)
pnpm start

# Format code
pnpm format

# Type check
pnpm check

# Database migration
pnpm db:push

# Generate database migration
pnpm drizzle-kit generate
```

---

## Troubleshooting

### Issue: "Cannot find module" errors
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
pnpm install
```

### Issue: Database connection error
**Solution:**
1. Check if MySQL is running
2. Verify DATABASE_URL in .env.local
3. Make sure database exists: `mysql -u root -p -e "SHOW DATABASES;"`

### Issue: Port 3000 already in use
**Solution:**
```bash
# Kill process on port 3000 (Linux/Mac)
lsof -ti:3000 | xargs kill -9

# Or use different port (Windows)
set PORT=3001 && pnpm dev
```

### Issue: pnpm command not found
**Solution:**
```bash
# Install pnpm globally
npm install -g pnpm

# Or use npm instead
npm run dev
```

### Issue: TypeScript errors
**Solution:**
```bash
# Check TypeScript
pnpm check

# If errors persist, rebuild
pnpm build
```

---

## Project Structure

```
school_website/
├── client/                 # Frontend React code
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── App.tsx        # Main app routing
│   │   └── index.css      # Global styles
│   └── public/            # Static files
├── server/                # Backend Express code
│   ├── routers.ts         # tRPC procedures
│   ├── db.ts              # Database queries
│   └── _core/             # Core server logic
├── drizzle/               # Database schema & migrations
│   └── schema.ts          # Database tables
├── .env.local             # Environment variables (create this)
├── package.json           # Dependencies
└── README.md              # Project documentation
```

---

## Development Workflow

1. **Edit files** in VS Code
2. **Save** (Ctrl+S) - Changes auto-reload in browser
3. **Check console** for errors (F12 in browser)
4. **Run tests** before committing: `pnpm test`

---

## Making Changes

### Add a new page:
1. Create file: `client/src/pages/NewPage.tsx`
2. Add route in `client/src/App.tsx`
3. Save and refresh browser

### Add a new API endpoint:
1. Add procedure in `server/routers.ts`
2. Call it from frontend using `trpc.feature.useMutation()`

### Update database schema:
1. Edit `drizzle/schema.ts`
2. Run: `pnpm drizzle-kit generate`
3. Run: `pnpm db:push`

---

## Admin Panel Features

**Login:** `admin` / `admin@123`

**Available Sections:**
- Dashboard - Statistics and analytics
- Admissions - View all admission forms
- Enquiries - View and reply to enquiries
- Contacts - View and reply to contact forms
- Scholarship - View scholarship registrations
- Gallery - Manage gallery images
- Courses - Add/edit courses
- Branches - Add/edit branches
- Settings - Configure school settings

---

## Useful VS Code Extensions

Install these for better development experience:

1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
3. **Prettier - Code formatter** - esbenp.prettier-vscode
4. **Thunder Client** - rangav.vscode-thunder-client (for API testing)
5. **MySQL** - formulahendry.vscode-mysql

---

## Need Help?

- Check the console for error messages (F12)
- Look at `.manus-logs/` directory for server logs
- Run `pnpm test` to check for issues
- Verify all environment variables are set correctly

---

## Next Steps

1. ✅ Setup complete
2. 📝 Customize content in admin panel
3. 🖼️ Upload real images to gallery
4. 👥 Add faculty members
5. 📚 Add courses and fees
6. 🚀 Deploy to production

---

**Happy Coding! 🎉**
