# Contact Form Setup Guide

## SendGrid Setup Steps

### 1. Create SendGrid Account
1. Go to [SendGrid.com](https://sendgrid.com) and create a free account
2. Complete email verification

### 2. Create API Key
1. Go to Settings → API Keys
2. Click "Create API Key"
3. Choose "Restricted Access"
4. Give it a name like "Portfolio Contact Form"
5. Under "Mail Send", select "Full Access"
6. Click "Create & View"
7. **Copy the API key immediately** (you won't see it again)

### 3. Verify Sender Email
1. Go to Settings → Sender Authentication
2. Click "Verify a Single Sender"
3. Fill out the form with your email (eliovaldivieso1975@gmail.com)
4. Check your email and click the verification link

### 4. Environment Variables

#### Local Development (.env.local):
```
SENDGRID_API_KEY=your_copied_api_key_here
SENDER_EMAIL=eliovaldivieso1975@gmail.com
RECIPIENT_EMAIL=eliovaldivieso1975@gmail.com
FRONTEND_URL=http://localhost:5173
```

#### Vercel Deployment:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable:
   - `SENDGRID_API_KEY`: Your API key
   - `SENDER_EMAIL`: eliovaldivieso1975@gmail.com  
   - `RECIPIENT_EMAIL`: eliovaldivieso1975@gmail.com
   - `FRONTEND_URL`: https://yoursite.vercel.app

### 5. Installation
```bash
npm install @sendgrid/mail
```

### 6. Test the Setup
1. Start your dev server: `npm run dev`
2. Fill out and submit the contact form
3. Check your email for the message

## File Structure
```
api/
  contact.js          # Serverless function for handling contact form
src/components/
  Contact.tsx         # Updated with API integration
vercel.json           # Vercel configuration
.env.local            # Local environment variables (keep secure!)
```

## Deployment
The contact form will automatically work when deployed to Vercel as long as the environment variables are set up correctly.