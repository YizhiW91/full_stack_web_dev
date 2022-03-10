from django.shortcuts import render
from django.views.generic import View, TemplateView, ListView, DetailView, CreateView, \
UpdateView, DeleteView
from django.http import HttpResponse
from .models import School, Student
from django.urls import reverse_lazy


class CBView(View):
    def get(self, request):
        return HttpResponse("class based response")

class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['injectme'] = 'BASIC INJECTION!'
        return context

class SchoolListView(ListView):
    # return a list of School in the name of school_list by default
    context_object_name = 'schools'
    model = School


class SchoolDetailView(DetailView):
    # return a list of School in the name of school by default
    context_object_name = 'school_detail'
    model = School
    template_name = 'myapp/school_detail.html'


class SchoolCreateView(CreateView):
    # return a list of School in the name of school by default
    model = School
    fields = ['name', 'location', 'principal']

class SchoolUpdateView(UpdateView):
    # return a list of School in the name of school by default
    model = School
    fields = ['name', 'location', 'principal']

class SchoolDeleteView(DeleteView):
    # return a list of School in the name of school by default
    model = School
    success_url = reverse_lazy('myapp:list')
