from django.views.generic.edit import FormView
from .forms import ContactForm


class IndexView(FormView):
    """This class is for calling the index page"""
    template_name = 'index.html'
    form_class = ContactForm
    success_url = '/'

    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        form.save()
        return super().form_valid(form)
