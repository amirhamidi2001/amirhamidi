from django.views.generic.edit import FormView
from django.shortcuts import render
from .forms import ContactForm


class IndexView(FormView):
    """
    This class is for calling the index page
    """

    template_name = "website/index.html"
    form_class = ContactForm
    success_url = "/"

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)


def custom_404(request, exception):
    """
    This code defines a custom view for handling 404 errors in a Django web application.
    """

    return render(request, "website/404.html", status=404)
