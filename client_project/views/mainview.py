import coreapi
import json

from django.shortcuts import render
from django.views.generic import TemplateView


class IndexView(TemplateView):
    def get(self, request, **kwargs):
        context = {'data': {}}
        return render(request, 'index.html', context)


class DataPageView(TemplateView):
    def get(self, request, **kwargs):

        client = coreapi.Client()
        schema = client.get('http://localhost:8000/simulator/schema')
        data = json.dumps(client.action(schema, ['simulator', 'flats', 'list'])['results'])
        context = {'data': data}

        return render(request, 'flats.html', context)
