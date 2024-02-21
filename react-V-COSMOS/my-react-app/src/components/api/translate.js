import axios from 'axios';
export const translateText = async (text, targetLang = 'en') => {
  if (targetLang === 'en') {
    return text;
  }
  try {
    const response = await axios.post('https://coral-smoke-411614.uc.r.appspot.com/translate/', { text, lang: targetLang });
    return response.data.translated_text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
};
