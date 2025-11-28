# Web3Forms Setup - Very Easy!

## What is Web3Forms?

Web3Forms is a super simple email service that requires:

- ❌ No signup required
- ❌ No complex setup
- ✅ Just your email address
- ✅ Setup in 2 minutes

## Setup Steps

### Step 1: Get Access Key

1. Go to **https://web3forms.com**
2. Enter your email address: **contactihaseeb@gmail.com**
3. Click "Get Your Access Key" button
4. You'll be asked to create a form - fill in:
   - **Form Name**: `My Portfolio Contact Form` (or any name you like)
   - **Domain name**: `localhost` or `localhost:5174` (for local development - no domain needed!)
5. Click "Create Form"
6. Check your email for the access key
7. Copy the access key

### Step 2: Create .env File

Create a `.env` file in your project root (if it doesn't exist):

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

**Example:**

```env
VITE_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

### Step 3: Restart Server

```bash
npm run dev
```

### Step 4: Test

1. Click the "Contact Me" button
2. Fill out the form
3. Submit the form
4. Check your email (contactihaseeb@gmail.com)

## Features

✅ **Free** - Completely free to use  
✅ **No Signup Required** - No account creation needed  
✅ **Spam Protection** - Built-in spam protection  
✅ **Easy Setup** - Simple configuration  
✅ **Fast** - Quick response times

## Troubleshooting

**Form not submitting?**

- Is the access key correct in the `.env` file?
- Did you restart the server?
- Check browser console for errors (F12)

**Not receiving emails?**

- Check your spam folder
- Is the access key correct?
- Is the email address (contactihaseeb@gmail.com) correct?

## EmailJS vs Web3Forms

| Feature         | EmailJS   | Web3Forms |
| --------------- | --------- | --------- |
| Setup Time      | 10-15 min | 2 min     |
| Signup Required | ✅ Yes    | ❌ No     |
| Configuration   | Complex   | Simple    |
| Free Tier       | Limited   | Generous  |

**Web3Forms is much easier!** 🎉

## Quick Start

1. Visit https://web3forms.com
2. Enter: `contactihaseeb@gmail.com`
3. When asked for domain, enter: `localhost` (no domain needed for testing!)
4. Copy the access key from your email
5. Add to `.env`: `VITE_WEB3FORMS_ACCESS_KEY=your_key`
6. Restart: `npm run dev`
7. Done! ✅

## Important Notes

**Domain Name for Local Development:**

- Use `localhost` or `localhost:5174` (your Vite dev server port)
- You don't need a real domain for testing
- This works perfectly for local development
- When you deploy to production, you can update the domain later
