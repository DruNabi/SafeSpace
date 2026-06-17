// Quick test script to verify OpenAI API key
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const apiKey = process.env.VITE_OPENAI_API_KEY

console.log('API Key loaded:', apiKey ? 'YES ✓' : 'NO ✗')
console.log('API Key starts with:', apiKey?.substring(0, 20) + '...')
console.log('API Key length:', apiKey?.length)

if (apiKey) {
  // Test the API call
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: 'Hello'
        }
      ],
      max_tokens: 10,
    }),
  })
    .then(res => {
      console.log('Response status:', res.status)
      return res.json()
    })
    .then(data => {
      console.log('API Response:', JSON.stringify(data, null, 2))
    })
    .catch(err => {
      console.error('Error:', err.message)
    })
} else {
  console.error('NO API KEY FOUND!')
}
