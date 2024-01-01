
console.log("The file main_js.js was succesfully included");


// It is fired as the DOM is fully loaded and ready to be manipulated by the script. Earliest point in page load, where script can safely access element in the dom
//It fires before all images, css, frames etc
//The jQuery ready function triggers when the DOM is ready, meaning the HTML structure is loaded and can be manipulated with JavaScript. This happens before external resources like images are fully loaded.
$(document).ready(function() {
    //alert('1. DOM Loaded and ready');   //Always before window.load

    //Is OK when a static page is present
    //if ($('#buttonlogogreen').length > 0) {         // Is this component present
        $('#buttonlogogreen').click(function() {    // Add an action listerner
            //console.log("The green button was clicked");

            //if ($('#logo').length > 0) {
                $('#logo').css({"border-color": "green", "border-width":"3px", "border-style":"solid"});
            //}
        });

    //}

    //This check is very important when dynamic pages are generated
    if ($('#buttonlogoyellow').length > 0) { 
        $('#buttonlogoyellow').click(function() { 
            //console.log("The yellow was clicked");
            
            if ($('#logo').length > 0) {
                $('#logo').css({"border-color": "yellow", "border-width":"3px", "border-style":"solid"});
            }
        });

    } 

    // The previous 2 code snippet is not in use
        
    if ($('#button-extract-info').length > 0) {       //Component present
        $('#button-extract-info').click(function() {    //What to do after clicking
            //console.log("Form button clicked");

            /*  ------------   Last name  ------------   */
            /*  ------------   Input type 'text'  ------------   */
            //JQuery way
            const lastNameEntered = $('#lastname').val();                           //1
            const lastNameValueAlt1 = $('input[name="form-lastname"]').val();       //2
            //console.log("LASTNAME=" + lastNameEntered);                           
            //Vanilla JS
            //document.getElementById('lastname').value                             //1
            //document.querySelector('input[name="form-lastname"]').value           //2
            

            
            /*  ------------   Gender  ------------   */
            /*  ------------   Input type 'radio button'  ------------   */

            //JQuery way
            const pickedGender = $('input[name="gender"]:checked').val();           //1     ["male" or "female"] values only, defined in html file
            //console.log("You picked=" + pickedGender);
            //Vanilla JS
            //document.querySelector('input[name="gender"]:checked').value;         //1     ["male" or "female"] values only, defined in html file     



            /*  ------------   Phone number  ------------   */
            /*  ------------   Input type 'tel'   ------------   */
            //JQuery way
            const phoneNumber = $('#phonenumber-customer').val();                   //1
            const phoneNumberAlt = $('input[name="phonetocustomer"]').val();        //2
            //console.log("Phone numer=" + phoneNumber);            
            //Vanilla JS
            //document.getElementById('phonenumber-customer').value                 //1
            //document.querySelector('input[name="phonetocustomer"]').value         //2



            /*  ------------   Email  ------------   */
            /*  ------------   Input type 'email'   ------------   */
            //JQuery way
            const emailCustomer = $('#input-email').val();                      //1
            const emailCustomerAlt = $('input[name="form-email"]').val();       //2
            //console.log("email=" + emailCustomer);            
            //document.getElementById('input-email').value                      //1
            //document.querySelector('input[name="form-email"]').value          //2



            /*  ------------   Borndate  ------------   */
            /*  ------------   Input type 'date'   ------------   */
            //JQuery way
            const birthDate = $('#borndate').val();                              //1
            const birthDateAlt = $('input[name="start-life-date"]').val();       //2
            //console.log("borndate=" + birthDate);
            //Vanilla JS
            //document.getElementById('borndate').value                          //1
            //document.querySelector('input[name="start-life-date"]').value      //2


            
            /*  ------------   Car owner  ------------   */
            /*  ------------   Input type 'checkbox'   ------------   */
            const isOwnerOfCar = $('#isownerofcar').prop('checked');            //1     [true (aka checked) or false] values only, defined in html file
            const isOwnerOfCarAlt = $('#isownerofcar').is(':checked');          //2     [true (aka checked) or false] values only, defined in html file
            //const isOwnerOfCarValue = $('input[name="proudcarowner"]').val();        Caution,  selects all input elements with the name "proudcarowner" and attempts to retrieve the value of the first matched
            //console.log("ownerCar=" + isOwnerOfCar);            
            //Vanilla JS
            //document.getElementById('isownerofcar').checked;                  //1
            //document.querySelector('#isownerofcar:checked') !== null;         //2
        
        

             /*  ------------   Favorite Color  ------------   */
            /*  ------------   Input type 'color'   ------------   */
            //JQuery way
            const favoriteColorCustomerHex = $('#favcolor').val();                              //1
            const favoriteColorCustomerHexAlt = $('input[name="customer-color"]').val();        //2
            //console.log("favoriteColorCustomerHex=" + favoriteColorCustomerHex);            
            //Vanilla JS
            //document.getElementById('favcolor').value;                                        //1
            //document.querySelector('input[name="customer-color"]').value                      //2


             /*  ------------   Meeting Time  ------------   */
            /*  ------------   Input type 'time'   ------------   */
            //JQuery way
            const meetingTimeCustomer = $('#timeformeeting').val();                                 //1
            const meetingTimeCustomerAlt = $('input[name="form-time-meeting"]').prop('value');      //2
            console.log("meetingTimeCustomer=" + meetingTimeCustomer);                   
            //Vanilla JS
            //document.getElementById('timeformeeting').value;                                      //1
            //document.querySelector('input[name="form-time-meeting"]').value;                      //2
            //Extra
            //const timeParts = meetingTimeCustomer.split(':');          //e.i   08:20
            const hours = meetingTimeCustomer.split(':')[0];            //2 digit format, 08
            const minutes = meetingTimeCustomer.split(':')[1];          //2 digit format, 20

            
            
            /*  ------------   Datetime Local type  ------------   */
            /*  ------------   Input type 'datetime-local'   ------------   */
            //JQuery way
            const meetingDateTimeLocal = $('#meeting-time').val();                                          //1
            const meetingDateTimeLocalAlt2 = $('input[name="meeting-datetime-local"]').prop('value');       //2
            const meetingDateTimeLocalAlt3 = $('input[name="meeting-datetime-local"]').val();               //3
            console.log("meetingTimeCustomer=" + meetingDateTimeLocal);                   
            //Vanilla JS
            //document.getElementById('meeting-time').value;                                                //1
            //document.querySelector('input[name="meeting-datetime-local"]').value                          //2
            //document.querySelector('input[name="meeting-datetime-local"]').value;                         //3
            
            
        });
    }
});

//Depracted, 
//The onload event triggers after the entire page, including external resources, is loaded. It ensures that all elements on the page are available and rendered.
// $(window).on('load', function () {
//     alert("2. Window loaded");
// });

