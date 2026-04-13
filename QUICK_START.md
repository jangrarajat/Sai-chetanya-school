# Quick Start Commands - Copy & Paste

## Windows Users

### Step 1: Install Dependencies
```bash
npm install -g pnpm
pnpm install
```

### Step 2: Setup Database
```bash
# Create .env.local file with:
# DATABASE_URL="mysql://school_user:school_password@localhost:3306/school_website"
# JWT_SECRET="your-secret-key-here-min-32-chars-long"

pnpm db:push
```

### Step 3: Run Development Server
```bash
pnpm dev
```

Then open: **http://localhost:3000**

Admin Login: `admin` / `admin@123`

---

## Mac/Linux Users

### Step 1: Install Dependencies
```bash
npm install -g pnpm
pnpm install
```

### Step 2: Setup Database
```bash
# Create .env.local file with database URL
pnpm db:push
```

### Step 3: Run Development Server
```bash
pnpm dev
```

Then open: **http://localhost:3000**

---

## All Important Commands

```bash
# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Start production server
pnpm start

# Format code
pnpm format

# Type check
pnpm check

# Database migration
pnpm db:push

# Generate migration
pnpm drizzle-kit generate
```

---

## Environment Variables Template

Create `.env.local` file in root directory:

```env
DATABASE_URL="mysql://school_user:school_password@localhost:3306/school_website"
JWT_SECRET="your-secret-key-here-min-32-chars-long-at-least-32"
VITE_APP_ID="app-id"
OAUTH_SERVER_URL="https://api.manus.im"
VITE_OAUTH_PORTAL_URL="https://portal.manus.im"
OWNER_OPEN_ID="owner-id"
OWNER_NAME="School Admin"
BUILT_IN_FORGE_API_KEY="api-key"
BUILT_IN_FORGE_API_URL="https://api.manus.im"
VITE_FRONTEND_FORGE_API_KEY="frontend-key"
VITE_FRONTEND_FORGE_API_URL="https://api.manus.im"
VITE_ANALYTICS_ENDPOINT="https://analytics.manus.im"
VITE_ANALYTICS_WEBSITE_ID="website-id"
```

---

## MySQL Setup (One Time)

```bash
# Connect to MySQL
mysql -u root -p

# Run these commands:
CREATE DATABASE school_website;
CREATE USER 'school_user'@'localhost' IDENTIFIED BY 'school_password';
GRANT ALL PRIVILEGES ON school_website.* TO 'school_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

## Access Points

- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin/dashboard
- **Admin Login**: `admin` / `admin@123`

---

## If Something Goes Wrong

```bash
# Clear cache and reinstall
rm -rf node_modules
pnpm install

# Reset database
pnpm db:push

# Check for errors
pnpm test
pnpm check
```

---

**That's it! You're ready to go! 🚀**
