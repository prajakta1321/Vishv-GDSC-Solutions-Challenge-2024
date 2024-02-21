from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pickle
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
#import requests
from django.conf import settings
from django.contrib.auth import authenticate, login
from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.http import HttpResponse

def health_check(request):
    return HttpResponse("OK")

@csrf_exempt
def choose_pickle(year, month, day, category):
    if category.lower() == 'india':
        return 'modelINDIA.pkl'
    elif category.lower() == 'bangladesh':
        return 'modelDHAKA.pkl'
    elif category.lower() == 'indonesia':
        return 'modelINDONESIA.pkl'
    elif category.lower() == 'united kingdom':
        return 'modelLONDON.pkl'

@csrf_exempt
def my_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            year = int(data.get('YEAR'))
            month = int(data.get('MONTH'))
            day = int(data.get('DAY'))
            category = data.get('CATEGORY', 'default') 
            pickle_file = choose_pickle(year, month, day, category)
            with open(f'ml_app/{pickle_file}', 'rb') as file:
                my_model  = pickle.load(file)
                predict = my_model.predict([[year , month , day]])
                prediction_list = predict.tolist()

            
            return JsonResponse({'status': 'success', 'data': prediction_list})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST requests are accepted.'})
@csrf_exempt
def google_auth(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        token = data.get('token')

        if not token:
            return JsonResponse({'error': 'Token is missing'}, status=400)

        try:
            idinfo = id_token.verify_oauth2_token(token, google_requests.Request(), "redacted")

            if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError('Wrong issuer.')

            userid = idinfo['sub']
            email = idinfo.get('email')
            if not email:
                return JsonResponse({'error': 'Email not provided in user info'}, status=400)
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                user = User.objects.create_user(username=email, email=email)
            
            login(request, user)

            return JsonResponse({'user': idinfo}, status=200)

        except ValueError as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)