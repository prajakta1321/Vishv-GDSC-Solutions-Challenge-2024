from django.http import JsonResponse
from googletrans import Translator, LANGUAGES
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
import json
import logging

logger = logging.getLogger(__name__)
@csrf_exempt  
def translate_text(request):
    if request.method == "POST":
        try:
            print(request.body)
            data = json.loads(request.body)  
            text_to_translate = data.get('text', '')
            dest_language = data.get('lang', 'en')
            translator = Translator()
            translation = translator.translate(text_to_translate, dest=dest_language)
            
            response_data = {
                "original_text": text_to_translate,
                "translated_text": translation.text,
                "dest_language": LANGUAGES.get(dest_language, 'English')
            }
            
            return JsonResponse(response_data)
        except Exception as e:
            logger.error(f"Error in translate_text: {str(e)}")
            return HttpResponse(status=400, content="Invalid request")

    else:
        return HttpResponse(status=405, content="Method not allowed")
