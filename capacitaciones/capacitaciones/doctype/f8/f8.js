// Copyright (c) 2019, ericklopez and contributors
// For license information, please see license.txt

frappe.ui.form.on('F8', {
	before_save: function(frm) {
		//alert('Mensaje');
	//	if (confirm('Confirma creación de capacitacion?')){
	//		alert('Se confirmo');
	//	} else {
	//		alert('Denegado');
	//	}
	//frappe.confirm(
    // 'Are you sure to leave this page?',
    // function(){
    //    window.close();
    // },
    // function(){
    //    show_alert('Thanks for continue here!')
    //}
	//)
	}
//	cur_frm.cscript.btn_send_capacitacion = function(doc, dt, dn){
	/* function body*/
//	alert('hola');
//	}
//frm.doc.btn_send_capacitacion = function(doc) {
//	alert('test');
//}	

});

frappe.ui.form.on("F8", "btn_send_capacitacion", function(frm) {
    // alert("click");
    var captacitacion_link  = frm.doc.lcapacitacion;
    //alert(captacitacion_link);
    if(typeof captacitacion_link === "undefined" || captacitacion_link == null){
    frappe.call({
            method:"capacitaciones.capacitaciones.doctype.f8.f8.callsp",
            args: {
             	f8name: cur_frm.doc.name,
          //soCust: cur_frm.doc.customer,
            }
        });
    cur_frm.reload_doc();
    msgprint("Creada una nueva Capacitación");
    //location.reload();
    }else {
        msgprint("Ya fue creada una Capacitación");
    }
    //location.reload();
});


//doc.read_only_textbox = “something”;
//refresh_field(“read_only_textbox”);
