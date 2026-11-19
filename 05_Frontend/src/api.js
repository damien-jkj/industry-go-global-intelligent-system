import axios from 'axios'
// Proposed endpoints: confirm JSON contracts with the backend before enabling.
export const api=axios.create({baseURL:import.meta.env.VITE_API_BASE_URL || '/api',timeout:20000})
export const screenCompliance=payload=>api.post('/compliance/screen',payload)
export const askQuestion=payload=>api.post('/qa',payload)
