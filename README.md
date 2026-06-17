# SafeSpace 🌸

A calm, supportive mental wellness web application designed to help you manage emotions, express feelings, discover healthy coping strategies, and track your wellness journey.

## ✨ Features

### 🏠 **Home** - Mood Check-In
- Start your day by selecting your current mood with emoji-based sentiment selection
- Includes 5 mood options: Great, Good, Neutral, Sad, and Frustrated
- Quick overview of all app features

### 💭 **Rant Room** - Safe Expression Space
- **Private venting space** for anonymous emotional expression
- **Real AI-powered acknowledgment** - Get personalized, empathetic responses using OpenAI GPT
- **AI or Mock Mode** - Works with or without an API key (fallback to supportive messages)
- **Echo Wall toggle** - Optionally share your feelings with others (anonymously) to help them feel less alone
- Warm, non-judgmental responses from SafeSpace

### 📔 **My Rants** - Personal Rant History
- View all your personal rants with timestamps
- See which rants were shared to the Echo Wall
- Delete rants you no longer want to keep
- Track your emotional journey and progress

### 🌊 **Echo Wall** - Community Support
- Browse anonymously shared rants from the community
- React with support (💗 Love, 💪 Strength, ✨ Hope)
- See reaction counts to know people care
- Help others feel less alone by sharing your own struggles

### 🛠️ **Coping Toolkit** - Wellness Techniques
- **12+ evidence-based coping tools** organized by category:
  - Breathing techniques (Box Breathing, 4-7-8 Breathing)
  - Mindfulness & Meditation
  - Body Awareness & Grounding
  - Creative & Self-Care activities
  - Sensory tools
- **Search functionality** to find tools quickly
- **Category filtering** to explore techniques by type
- Duration estimates for each technique

### 🌱 **Progress Garden** - Visual Wellness Journey
- **Real-time statistics**:
  - Total check-ins tracked
  - Current streak counter
  - Tools learned count
  - Flowers grown counter
- **Animated SVG flower garden** that grows with your wellness progress
- Interactive plant flower button to visualize your growth

## 🎨 Design

- **Floral Background** - Subtle animated flowers floating gently
- **Purple & Burgundy Palette** - Calm, supportive color scheme
- **Minimal & Clean** - Focus on content, not distractions
- **Responsive Design** - Works beautifully on all devices

## 🚀 Tech Stack

- **Frontend**: React 18+
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 with custom purple & burgundy theme
- **Routing**: React Router v6
- **AI**: OpenAI GPT (optional integration)
- **Storage**: Browser localStorage
- **Language**: Modern ES6+ JavaScript (JSX)

## 📁 Project Structure

```
SafeSpace/
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Navigation.jsx          # Main navigation bar
│   │   ├── pages/
│   │   │   ├── Home.jsx                # Mood check-in page
│   │   │   ├── RantRoom.jsx            # Venting space with AI response
│   │   │   ├── CopingToolkit.jsx       # Searchable coping tools list
│   │   │   └── ProgressGarden.jsx      # Stats and flower garden
│   │   └── ui/
│   │       └── FlowerGarden.jsx        # SVG animated flower garden
│   ├── hooks/                          # Custom React hooks
│   ├── utils/
│   │   ├── mockData.js                 # Coping tools database
│   │   └── mockAI.js                   # AI response generator
│   ├── styles/
│   │   └── index.css                   # Global styles and animations
│   ├── App.jsx                         # Main app with routing
│   └── main.jsx                        # React entry point
├── public/                             # Static assets
├── index.html                          # HTML template
├── package.json                        # Dependencies and scripts
├── vite.config.js                      # Vite configuration
├── tailwind.config.js                  # Tailwind customization
├── postcss.config.js                   # PostCSS configuration
└── README.md                           # This file
```

## 🎨 Design Principles

- **Calm & Minimal** - Clean interface with ample whitespace
- **Purple-Toned** - Soothing purple accent colors (#a855f7, #9333ea, #7e22ce)
- **Warm & Supportive** - Encouraging language and approachable tone
- **Accessibility-First** - Semantic HTML, proper contrast ratios, keyboard navigation
- **Mobile-Responsive** - Optimized for all screen sizes

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm 7+

### Setup Steps

1. **Clone or download the project**
   ```bash
   cd "d:\release whatever it needs to release"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   
   Output goes to the `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🤖 AI Setup (Optional)

SafeSpace now supports **real AI responses** powered by OpenAI! Here's how to enable it:

### Quick Setup

1. Get an OpenAI API key from [platform.openai.com](https://platform.openai.com)
2. Copy `.env.example` to `.env.local`
3. Add your API key to `.env.local`:
   ```
   VITE_OPENAI_API_KEY=sk_test_your_key_here
   ```
4. Restart the dev server and enjoy real AI responses!

### Without API Key?

The app works perfectly fine without an API key:
- Falls back to supportive, pre-written responses
- No setup needed, just run `npm run dev`
- Add AI later whenever you're ready

**📖 For detailed setup instructions, see [AI_SETUP.md](AI_SETUP.md)**

## 🎯 Usage

### Home Page
1. Select your current mood using the emoji buttons
2. Explore the app features from the overview cards
3. Navigate to other sections using the top navigation bar

### Rant Room
1. Click into the text area and freely express your feelings
2. Click "Release & Get Support" to submit your rant
3. Receive an AI-generated supportive response
4. Optionally check the "Share to Echo Wall" box to help others
5. Submit another rant or navigate elsewhere

### Coping Toolkit
1. Browse all tools or use the search bar to find specific techniques
2. Filter by category (Breathing, Mindfulness, Activity, etc.)
3. Each tool shows:
   - Emoji icon for quick identification
   - Brief description
   - Category label
   - Time estimate

### Progress Garden
1. View your wellness statistics at the top
2. See your flowers grow in the animated garden
3. Click "Plant a Flower" to add to your garden
4. Watch your wellness journey bloom visually

## 🛠️ Development

### Available Scripts

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Key Files to Modify

- **Add new coping tools**: Edit `src/utils/mockData.js` and add to the `copingTools` array
- **Customize theme colors**: Modify `tailwind.config.js` theme colors
- **Add new pages**: Create component in `src/components/pages/` and add route in `App.jsx`
- **Update AI responses**: Modify `src/utils/mockAI.js` to change response logic

### Global Styles

All global styles and animations are in `src/styles/index.css`:
- Smooth animations (fadeIn, pulse-soft)
- Custom scrollbar styling
- Font imports and setup

## 🎨 Color Scheme

The app uses a soothing purple palette:
- **Purple 600**: `#9333ea` - Primary accent
- **Purple 700**: `#7e22ce` - Darker accent
- **Purple 50-200**: Light backgrounds
- **Gray tones**: Text and neutral elements

## 🚀 Future Enhancements

Potential features to add:
- User authentication and mood history
- Backend API integration for data persistence
- More advanced AI responses using a real LLM API
- Sound/music integration for coping tools
- Daily wellness reminders and notifications
- Community features and support groups
- Progress charts and wellness trends
- Integration with meditation apps

## 📝 Notes

- All data is currently stored in mock files (mockData.js, mockAI.js)
- The AI responses are simulated - a real API could replace `generateAIResponse()`
- The Echo Wall is currently client-side only - a backend would enable real sharing
- Garden flowers reset on page reload - consider localStorage or a database for persistence

## 📄 License

This project is open source and available under the MIT License.

## 💜 Support & Wellness Resources

If you're struggling with mental health:
- **Crisis Text Line**: Text HOME to 741741
- **National Suicide Prevention Lifeline**: 988 (US)
- **International Association for Suicide Prevention**: https://www.iasp.info/resources/Crisis_Centres/

Remember: You're not alone. SafeSpace is here to support your wellness journey. 🌸

---

**Created with 💜 for mental wellness**
