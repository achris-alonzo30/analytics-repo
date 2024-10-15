# Integrating Google Analytics & Microsoft Clarity in Your React Application

The analytics tools have been pre-configured in the application, and all you need to do is add the IDs from **Google Analytics** and **Microsoft Clarity** to the environment variables. Follow these steps to get everything up and running!

## Step 1: Get Your Analytics IDs

### Google Analytics
1. Visit [Google Analytics](https://analytics.google.com/analytics/).
2. Sign in to your account (or create one if you don't have one).
3. Once signed in, create or select the property you want to track.
4. In the property settings, find the **Tracking ID** (it usually looks like `UA-XXXXXXXXX-X` or a GA4 ID).

### Microsoft Clarity
1. Visit [Microsoft Clarity](https://clarity.microsoft.com).
2. Sign in or create an account if you don’t have one.
3. Create or select your project to track.
4. Find the **Project ID** under the project settings.

## Step 2: Update the Environment Variables

1. In your project directory, find the file named `.env.example`.
2. Rename the file to `.env`.

### Example `.env` file:
```bash
GA_ID=YOUR_GOOGLE_ANALYTICS_ID
MC_ID=YOUR_MICROSOFT_CLARITY_ID
