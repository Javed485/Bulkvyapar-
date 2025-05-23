jQuery( document ).ready( function() {

    // contact form
    var contactname1 = jQuery('#name-contact-1');
    var contactemail = jQuery('#email-contact, input#email-contact');
    var contactmessage = jQuery('#message-contact');
    var contactsent1 = jQuery('#send-contact-1');
    //form failed succes var
    var successent = jQuery( "#mail_success" );
    var failedsent = jQuery( "#mail_failed" );
    // contact form
    jQuery(function() {
    contactsent1.on('click', function(e) {
    e.preventDefault();
    var e = contactname1.val(),
    a = contactemail.val(),
    s = contactmessage.val(),
    r = !1;
    if (0 == a.length || "-1" == a.indexOf("@") || "-1" == a.indexOf(".")) {
    var r = !0;
    contactemail.css({
    "border-bottom": "1px solid #dd4425"
    });
    } else contactemail.css({
    "border-bottom": "1px solid rgba(0,0,0,.1)"
    });
    if (0 == e.length) {
    var r = !0;
    contactname1.css({
    "border-bottom": "1px solid #dd4425"
    });
    } else contactname1.css({
    "border-bottom": "1px solid rgba(0,0,0,.1)"
    });
    if (0 == s.length) {
    var r = !0;
    contactmessage.css({
    "border-bottom": "1px solid #dd4425"
    });
    } else contactmessage.css({
    "border-bottom": "1px solid rgba(0,0,0,.1)"
    });
    return 0 == r && (contactsent1.attr({
    disabled: "true",
    value: "Sending..."
    }), $.ajax({
    type: "POST",
    url: "send.php",
    data: "name=" + e + "&email=" + a + "&subject=You Got Email&message=" + s,
    success: function(e) {
    "success" == e ? (successent.fadeIn(500)) : (failedsent.html(e).fadeIn(500), contactsent1.removeAttr("disabled").attr("value", "send").remove())
    }
    })), !1
    })
    });

        
			
 } );