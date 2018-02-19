import $ from 'jquery';
import Errors from './Errors.js';

export function ajaxCall (settings, successFn, failureFn = null) {
  showLoadingAlert();
  $.ajax(Object.assign({
    headers: {
      "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
    },
    contentType: 'application/json',
    dataType: 'json',
  }, settings))
   .done((data) => {
     hideLoadingAlert();
     if (typeof data === 'undefined') {
       throw Errors.EmptyResponseError();
     }
     successFn(data);
   })
   .fail((xhr) => {
     hideLoadingAlert();
     let error = null;
     let message = null;
     let json = null;
     if (xhr.status === 0) {
       error = Errors.NetworkError();
     } else if(xhr.status === 400) {
       if (xhr.responseJSON) {
         json = xhr.responseJSON;
         if (json.error) {
           message = json.error;
         }
       }

       if (message) {
         error = Errors.BadRequestError(message);
       } else {
         error = Errors.BadRequestError(xhr.statusText);
       }
     }

     if (failureFn) {
       failureFn(error, json);
     }
   });
}

export const showErrorAlert = (message, timeout) => {
  $("#errorBox .alert").html(message);
  $('#errorBox').css("display", "block");

  if (typeof timeout !== 'undefined') {
    window.setTimeout(hideErrorAlert, timeout);
  }
};

export const hideErrorAlert = () => {
  $('#errorBox').css("display", "none");
};

export const showLoadingAlert = () => {
  $('#loadingBox').css("display", "block");
};

export const hideLoadingAlert = () => {
  $('#loadingBox').css("display", "none");
};
