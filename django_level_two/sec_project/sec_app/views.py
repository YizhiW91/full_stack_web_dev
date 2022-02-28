from django.shortcuts import render
from sec_app.models import Topic, Webpage, AccessRecord


# Create your views here.
def index(request):
    webpg_list = AccessRecord.objects.order_by('date')
    date_dict = {'acc_rec': webpg_list}

    my_dict = {"inserts": "My Insert"}
    return render(request, 'sec_app/index.html', context=date_dict)
