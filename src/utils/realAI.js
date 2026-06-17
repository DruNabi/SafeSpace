/**
 * Real AI integration using OpenAI API
 * Make sure to set VITE_OPENAI_API_KEY in your .env.local file
 */

export async function generateAIResponseReal(rant) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY
  
  console.log('🔑 API Key check:', apiKey ? 'LOADED ✓' : 'MISSING ✗')
  console.log('🔑 API Key starts with:', apiKey?.substring(0, 20))
  
  if (!apiKey) {
    console.error('❌ NO API KEY FOUND - Check .env.local!')
    return "Please set your OpenAI API key in .env.local to use the real AI feature. For now, here's a supportive message: Your feelings matter, and it's okay to feel what you're feeling right now. 💜"
  }

  try {
    console.log('📤 Sending request to OpenAI...')
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are SafeSpace, a compassionate and empathetic mental wellness companion. Your role is to:
1. Acknowledge the person's feelings with genuine empathy and warmth
2. Validate their emotions without judgment
3. Remind them they're not alone
4. Offer gentle, supportive words
5. Suggest they might want to try a coping tool if appropriate

Keep your response concise (2-3 sentences), warm, and genuinely caring. Use a supportive tone that feels like talking to a caring friend. Never minimize their feelings.`
          },
          {
            role: 'user',
            content: rant
          }
        ],
        temperature: 0.7,
        max_tokens: 150,
      }),
    })

    console.log('📥 Response status:', response.status)

    if (!response.ok) {
      const error = await response.json()
      console.error('❌ OpenAI API ERROR:', response.status, error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      return `Error: ${error.error?.message || 'API request failed'}. Your feelings are still valid though. 💜`
    }

    const data = await response.json()
    console.log('✅ Success! Got AI response')
    return data.choices[0].message.content
  } catch (error) {
    console.error('❌ NETWORK ERROR:', error)
    return "I'm having trouble connecting to the AI service right now. But please know: Your feelings matter, and expressing them is a sign of strength. 💜"
  }
}

// Fallback mock function if API key isn't set
export { generateAIResponse } from './mockAI'
