import coreapi
import json

from django.shortcuts import render
from django.views.generic import TemplateView


class AllFlatsView(TemplateView):
    def get(self, request, **kwargs):

        client = coreapi.Client()
        schema = client.get('http://localhost:8000/simulator/schema')
        data = json.dumps(client.action(schema, ['simulator', 'flats', 'list'])['results'])
        context = {'data': data}

        return render(request, 'flats.html', context)


class SingleFlatView(TemplateView):
    def get(self, request, **kwargs):

        client = coreapi.Client()
        schema = client.get('http://localhost:8000/simulator/schema')
        data = json.dumps(client.action(schema, ['simulator', 'flats', 'read'], params={'id': kwargs.get('pk')}))
        context = {'data': data}

        return render(request, 'single-flat.html', context)
