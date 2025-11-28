# EmailJS Setup Instructions

## Steps to Configure EmailJS for Contact Form

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (contactihaseeb@gmail.com)
5. Copy the **Service ID** (you'll need this later)

### 3. Create an Email Template
1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template structure:

**Template Name:** Contact Form Template

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

### 4. Get Your Public Key
1. Go to **Account** → **General** in your EmailJS dashboard
2. Copy your **Public Key** (also called API Key)

### 5. Configure Environment Variables
1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials
4. **Important:** Add `.env` to your `.gitignore` file to keep your credentials secure

### 6. Restart Your Development Server
After adding the environment variables, restart your Vite development server:
```bash
npm run dev
```

### 7. Test the Form
1. Click the "Contact Me" button in the Contact section
2. Fill out the form
3. Submit and check your email (contactihaseeb@gmail.com)

## Troubleshooting

- **Form not sending emails:** Check that all environment variables are set correctly
- **EmailJS errors:** Check the browser console for detailed error messages
- **Template variables not working:** Make sure the template variable names match exactly ({{from_name}}, {{from_email}}, {{message}})

## Security Note
Never commit your `.env` file to version control. The `.env` file should already be in `.gitignore`, but double-check to ensure your credentials remain private.

