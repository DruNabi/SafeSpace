# SafeSpace AI Setup Guide

## 🤖 Using Real AI (OpenAI)

SafeSpace now supports real AI responses using OpenAI's GPT models! This makes the Rant Room experience much more dynamic and personalized.

### Step 1: Get an OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com)
2. Sign up or log in to your account
3. Navigate to **API Keys** in the left sidebar
4. Click **Create new secret key**
5. Copy the generated key (keep it safe!)

### Step 2: Configure Your Environment

1. Open `.env.local` in the project root
2. Paste your API key:
   ```
   VITE_OPENAI_API_KEY=sk_test_your_actual_key_here
   ```
3. Save the file

### Step 3: Restart the Dev Server

```bash
npm run dev
```

### Step 4: Test It Out

1. Go to the **Rant Room** page
2. Write a rant and click **Release & Get Support**
3. Watch as the AI generates a real, empathetic response! ✨

## 🔧 Configuration Options

You can customize the AI model in `.env.local`:

```
# Use a different model (default is gpt-3.5-turbo)
VITE_OPENAI_MODEL=gpt-4
```

### Available Models:
- `gpt-3.5-turbo` - Fast and efficient (recommended for cost)
- `gpt-4` - More advanced (higher cost but better quality)
- `gpt-4-turbo` - Latest version with extended context

## 💰 Pricing

- **gpt-3.5-turbo**: ~$0.0005 per 1000 tokens (very cheap)
- **gpt-4**: ~$0.03 per 1000 tokens
- **gpt-4-turbo**: ~$0.01 per 1000 tokens

Each rant typically uses 100-200 tokens, so costs are minimal.

## 🔐 Security Tips

- **Never** commit `.env.local` to git (it's in `.gitignore`)
- Regenerate your API key if you accidentally expose it
- Keep your API key in `.env.local` and `.env.local` out of version control
- Set usage limits in your OpenAI account dashboard

## ⚠️ No API Key Set?

If you don't have an API key configured, the app will:
1. Fall back to the mock AI responses
2. Show a helpful message asking you to set up the API key
3. Still work perfectly fine with supportive fallback messages

## 🔄 Fallback Behavior

If the OpenAI API is temporarily unavailable or there's an error:
- You'll get a warm, supportive fallback message
- Your rant will still be saved
- The app continues working seamlessly

## 📝 Notes

- The AI is configured to be empathetic and supportive
- Responses are limited to 150 tokens to keep them concise
- Temperature is set to 0.7 for a balance of consistency and warmth
- All API calls are made directly from your browser (no data stored on SafeSpace servers)

## 🆘 Troubleshooting

**Q: I get "Invalid API Key" error**
A: Double-check your key is correct in `.env.local` and restart the dev server

**Q: The AI takes a long time to respond**
A: OpenAI API can be slow during peak times. Try again in a moment.

**Q: I don't want to use real AI**
A: Simply remove or comment out the API key in `.env.local` and it will use mock responses.

---

For more info on OpenAI: https://platform.openai.com/docs
