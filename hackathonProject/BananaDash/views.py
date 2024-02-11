from django.shortcuts import render
from django.http import HttpResponse
from requests_html import HTMLSession
import requests






def home(request):
    api_key = 'a588dff4066a4843903350b4de7c01b6'
    news_stories = fetch_news(api_key)
    print('test')
    return render(request, 'BananaDash/index.html')
# Create your views here.


def fetch_news(api_key):
    url = f"https://newsapi.org/v2/everything?q=banana&apiKey={api_key}"
    response = requests.get(url)
    if response.status_code == 200:
        print(response.json())
        return response.json()['articles']
    else:
        return []