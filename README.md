This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Netlify

This project is configured for deployment on Netlify. Follow these steps:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set the build command to: `npm run build`
4. Set the publish directory to: `out`
5. Add your environment variables in Netlify dashboard:
   - `RESEND_API_KEY`: Your Resend API key for email functionality

The project uses Netlify Functions for the email API to avoid build issues with server-side code.

The project will automatically build and deploy when you push changes to your main branch.

## Environment Variables

Create a `.env.local` file in the root directory with:

```
RESEND_API_KEY=your_resend_api_key_here
```

## Build Issues

If you encounter build issues, make sure:
- Node.js version is 18 or higher
- All dependencies are properly installed
- Environment variables are set correctly
