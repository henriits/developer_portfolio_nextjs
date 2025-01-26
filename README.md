# Developer Portfolio Next.js

A dynamic developer portfolio built with Next.js 13+, featuring a hidden admin dashboard for content management. This full-stack application allows developers to showcase their work while maintaining full control over their content through secure CRUD operations using Server Actions.

## Key Features

- Public Portfolio

    - Responsive design
    - Hero section
    - Social media integration (LinkedIn, GitHub, Instagram)
    - About section
    - Work experience timeline
    - Tech stack section
    - Dynamic project showcase with GitHub and live demo links
    - Contact form
    - Footer with social links

- Protected Admin Dashboard (/admin)
    - Secure authentication with NextAuth.js
    - Full CRUD operations using Server Actions for:
        - Projects management
        - Experience/Work history
        - About section content
    - Real-time content updates with auto-revalidation
    - Protected routes with session validation

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Prisma (ORM)
- PostgreSQL
- NextAuth.js
- Tailwind CSS
- NextUI Components
- Framer Motion
- React Icons
- React Hook Form
- Zod Validation
- Neon Database (PostgreSQL)
- Resend (email sending)
- React-Email (email styling)
- Vitest (Unit testing)
- Playwright (E2E)

## Feature Details

### Public Portfolio Sections

- **Hero Section**: Introduction section
- **About Section**: Dynamic content management
- **Experience Section**: Work history with company, title, and date ranges
- **Projects Section**: Showcase projects with:
    - Title and description
    - GitHub repository links
    - Live demo links
    - Technology tags
    - Project images
- **Tech Stack Section**: Display technical skills
- **Contact Form**: Get in touch section ( send email )
- **Footer**: Social media integration

### Admin Dashboard Features

1. **Projects Management**

    - Create new projects
    - Update existing projects
    - Delete projects
    - Add project images
    - Manage technology tags
    - Set GitHub and live demo links

2. **Experience Management**

    - Add new work experiences
    - Update existing experiences
    - Delete experiences
    - Manage company details
    - Set job titles and locations
    - Define date ranges

3. **About Section Management**
    - Create/Update about content
    - Rich text content management
    - Delete functionality

### Server Actions

This portfolio uses Next.js Server Actions for all CRUD operations instead of API routes:

1. **Project Actions**

    ```typescript
    'use server'
    - addProject(previousState: any, formData: FormData)
    - updateProject(id: string, formData: FormData)
    - deleteProject(id: string)
    - getProjects()
    ```

2. **Experience Actions**

    ```typescript
    'use server'
    - addExperience(previousState: any, formData: FormData)
    - updateExperience(id: string, formData: FormData)
    - deleteExperience(id: string)
    ```

3. **About Actions**
    ```typescript
    'use server'
    - addAbout(previousState: any, formData: FormData)
    - updateAbout(id: string, formData: FormData)
    - deleteAbout(id: string)
    ```

Benefits of Server Actions:

- Built-in CSRF protection
- Direct database operations
- No API routes needed
- Progressive enhancement
- Better type safety
- Reduced client-server code duplication

### Database Schema

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Project {
  id           String   @id @default(cuid())
  title        String
  slug         String   @unique
  description  String
  githubLink   String?
  liveLink     String?
  imageUrl     String?
  technologies String[]
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@index(slug)
}

model About {
  id      String @id @default(cuid())
  content String
}

model Experience {
  id          String   @id @default(cuid())
  title       String
  company     String
  location    String? // remote, onsite, or hybrid
  startDate   String?
  endDate     String?
  description String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL (or any other database supported by Prisma)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/henriits/developer_portfolio_nextjs.git
    cd developer_portfolio_nextjs
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Variables

Create a `.env` file with the following:

```env
# Required Environment Variables
DATABASE_URL="postgresql://user:password@host:port/database"
NEXTAUTH_SECRET="your-secure-secret-key"
NEXTAUTH_URL="http://localhost:3000"
ADMIN_USERNAME="your-admin-username"
ADMIN_PASSWORD="your-admin-password"

RESEND_API_KEY="api key here"  https://resend.com/

# Logo
NEXT_PUBLIC_LOGO_FIRSTNAME_LETTER="one letter for logo"
NEXT_PUBLIC_LOGO_LASTNAME="full-last-name"
NEXT_PUBLIC_WORDS="React.js Developer, TypeScript Developer , Web Developer, FrontEnd Developer, Software Engineer" // example
NEXT_PUBLIC_EMAIL="the email you want messages to be sent"
NEXT_PUBLIC_LOCATION="your current location country"  // "City, Country"

# Social Media Links
NEXT_PUBLIC_LINKEDIN_URL="your-linkedin-url"
NEXT_PUBLIC_GITHUB_URL="your-github-url"
NEXT_PUBLIC_INSTAGRAM_URL="your-instagram-url"

# Base URL
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### Setting Up Prisma

1. Initialize Prisma:

    ```bash
    npx prisma init
    ```

    This will create a `prisma` directory with a `schema.prisma` file.

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Admin Dashboard Access

1. Navigate to `/admin/login`
2. Use your configured admin credentials
3. Access the admin dashboard at `/admin`

### Admin Features

- **Projects Management**

    - Create, edit, and delete projects
    - Upload project image with URL
    - Manage project technologies and links

- **Experience Management**

    - Add/edit work history
    - Manage job descriptions and technologies

- **About Section**

    - Update personal information
    - Edit bio and professional summary

- **Security**
    - Protected routes
    - Secure authentication
    - Session management

## Deployment

To deploy the project, you can use platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

## Security Considerations

- All admin routes are protected
- API routes validate authentication
- Form inputs are validated using Zod
- Security headers are implemented
- Rate limiting on API routes
- CSRF protection enabled

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
