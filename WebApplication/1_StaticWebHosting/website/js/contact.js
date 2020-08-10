function sendContactRequest(event){
    //var values = $(name-input).val();
    event.preventDefault();

    $.ajax({
        method: 'POST',
        url: _config.api.invokeUrl + '/contact',
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        data: JSON.stringify({
            ContactData: {
                name: "Marc",
                tel: "079 521 75 99",
                email: "marc33@gmx.ch",
                request: "Dies ist eine Kontaktanfrage"
            }
        }),
        contentType: 'application/json',
        success: void(0),
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            console.error('Error sending form: ', textStatus, ', Details: ', errorThrown);
            console.error('Response: ', jqXHR.responseText);
            alert('An error occured when sending the form:\n' + jqXHR.responseText);
        }
    });
}


$(function onDocReady() {

    $('#contact-form').click(sendContactRequest);
    
});