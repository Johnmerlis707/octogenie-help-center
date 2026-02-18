# Email Setup Instructions

## Quick Setup for Feedback Emails

The feedback system uses **Resend** to send emails to `john@octogenie.com`. Follow these steps to enable email sending:

### Step 1: Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Navigate to **API Keys** section
4. Create a new API key
5. Copy the API key (starts with `re_`)

### Step 2: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (same directory as `package.json`)
2. Add the following:

```env
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=help-center@octogenie.com
RESEND_REPLY_TO_EMAIL=john@octogenie.com
```

**Important:** 
- Replace `re_your_actual_api_key_here` with your actual Resend API key
- The `RESEND_FROM_EMAIL` must be a verified domain in Resend, OR use `onboarding@resend.dev` for testing
- Make sure `.env.local` is in your `.gitignore` (it should be by default)

### Step 3: Verify Domain (Optional but Recommended)

For production, verify your domain in Resend:
1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., `octogenie.com`)
3. Add the DNS records provided by Resend
4. Once verified, you can use emails like `help-center@octogenie.com`

### Step 4: Restart Your Development Server

After adding the `.env.local` file:
```bash
npm run dev
```

### Testing

1. Submit feedback through the Help Center
2. Check the server console for email sending status
3. Check `john@octogenie.com` inbox for the feedback email

### Troubleshooting

**Email not sending?**
- Check that `RESEND_API_KEY` is set correctly in `.env.local`
- Restart your dev server after adding environment variables
- Check server console logs for error messages
- Verify your Resend account is active

**Using default Resend domain?**
- For testing, you can use `onboarding@resend.dev` as the from email
- This works immediately without domain verification
- For production, verify your own domain

### Alternative Email Services

If you prefer a different email service, you can modify `app/api/feedback/route.ts` to use:
- **SendGrid**: `npm install @sendgrid/mail`
- **Nodemailer**: `npm install nodemailer`
- **AWS SES**: Use AWS SDK

The current implementation uses Resend for simplicity and Next.js compatibility.
