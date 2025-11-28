# DevFolio - Personal Portfolio

A modern and responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Modern Design**: Elegant and responsive interface
- **Dark/Light Mode**: Support for dark and light themes
- **Smooth Animations**: Fluid transitions and animations
- **Complete Sections**:
  - Home - Introduction and greeting
  - About - About me
  - Work - Projects and portfolio
  - Skills - Abilities and competencies
  - Contact - Contact information
- **Performance Optimized**: Built with Next.js 15 and Turbopack
- **TypeScript**: Type-safe for safer development
- **Analytics**: Integrated with Vercel Analytics

## Technologies Used

- **Framework**: Next.js 15.3.1
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.1.4
- **TypeScript**: For type safety
- **UI Components**: Radix UI, Lucide React Icons
- **Theme Management**: next-themes
- **Animations**: tw-animate-css
- **Analytics**: Vercel Analytics

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd devfolio

# Install dependencies
npm install
```

## Usage

### Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

```bash
npm run build
```

### Start Production

```bash
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
devfolio/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable components
│   ├── features/         # Feature-based modules
│   │   ├── about/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── home/
│   │   ├── skills/
│   │   └── work/
│   ├── context/          # React Context providers
│   ├── constants/        # Constants and configurations
│   ├── lib/              # Utilities and helpers
│   └── types/            # TypeScript type definitions
├── public/               # Static files
└── package.json
```

## Customization

### Update Personal Information

1. **About Section**: Edit `src/features/about/constants/text.ts`
2. **Skills**: Update `src/features/skills/constants/skills-data.ts`
3. **Work/Projects**: Modify `src/features/work/constants/work-data.ts`
4. **Navigation**: Edit `src/constants/navigation.ts`

### Change Profile Image

Replace the image in `src/assets/user_image.jpeg` or update the path in the `ProfileImage` component.

### CV/Resume

Replace the PDF file in `public/Ursu-Anastasia-CV.pdf` with your own CV.

## Deployment

### Vercel (Recommended)

The easiest way to deploy the application is through [Vercel Platform](https://vercel.com/new):

1. Push the code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

The application can be deployed on any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## License

Private - All rights reserved

## Author

Anastasia Ursu

---

Built with Next.js and React
