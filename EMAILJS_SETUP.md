# EmailJS Setup Guide

Your contact form is now fully integrated with EmailJS! Follow these steps to get it working:

## Step 1: Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email

## Step 2: Get Your Credentials

### Find Service ID

1. In EmailJS dashboard, go to **Admin → Email Services**
2. Create or select an existing email service (Gmail, Outlook, etc.)
3. Your **Service ID** will be visible (format: `service_xxxxx`)

### Find Template ID

1. Go to **Email Templates**
2. Create a new template or use an existing one
3. Set template variables:
   - `{{from_name}}` - Visitor's name
   - `{{from_email}}` - Visitor's email
   - `{{message}}` - Visitor's message
   - `{{to_email}}` - Your email address
4. Your **Template ID** will be visible (format: `template_xxxxx`)

### Find Public Key

1. Go to **Account → API Keys**
2. Copy your **Public Key** (format: `xxxxxxxxxxxxxxxxxxxxxxxx`)

## Step 3: Add Environment Variables

### Option A: Local Development (.env.local)

Create a `.env.local` file in the `frontend/` directory:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Then restart your development server:

```bash
npm start
```

### Option B: Vercel Production

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add three variables:
   - Name: `REACT_APP_EMAILJS_SERVICE_ID` → Value: `service_xxxxx`
   - Name: `REACT_APP_EMAILJS_TEMPLATE_ID` → Value: `template_xxxxx`
   - Name: `REACT_APP_EMAILJS_PUBLIC_KEY` → Value: `xxxxxxxxxxxxx`
4. Click "Save"
5. Redeploy your site (Settings → Deployments → Redeploy)

## Step 4: Test the Form

### Local Testing

1. Run `npm start` in the frontend directory
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox (and spam folder)

### Production Testing

1. Deploy to Vercel
2. Visit your live site
3. Test the contact form

## Example EmailJS Template

Here's a sample template structure:

**Subject:**

```
New Portfolio Contact from {{from_name}}
```

**Body:**

```
Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Reply to: {{from_email}}
```

## Troubleshooting

**Form not sending?**

- Verify all 3 environment variables are set correctly
- Check browser console (F12) for error messages
- Make sure your email service is active in EmailJS

**Not receiving emails?**

- Check spam/junk folder
- Verify template is set up correctly with the right variables
- Test from EmailJS dashboard first

**Getting "Configuration Error"?**

- Environment variables are missing or incorrectly named
- Make sure they start with `REACT_APP_` (required for Create React App)
- Restart dev server after adding to `.env.local`

## Security Notes

✅ **Safe:** Public key is visible in frontend code (designed that way by EmailJS)
❌ **Never:** Share your Service ID or Template ID publicly (kept server-side)
❌ **Never:** Commit `.env.local` to version control (it's in `.gitignore`)

## Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Community](https://github.com/emailjs-com/emailjs-sdk)
