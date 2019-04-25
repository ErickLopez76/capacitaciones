// Copyright (c) 2019, ericklopez and contributors
// For license information, please see license.txt

frappe.ui.form.on('Procesos_Formativos', {
	refresh: function(frm) {




 // calculate_total_work_plan: function(){
 	// $(frm.fields_dict['show_data'].wrapper).html(frm.doc.name + ' <br> <a href="https://www.w3schools.com">Visit W3Schools</a>  hola');
         // var total = 0;
         var row_length = frm.doc.jornadas.length || 0;
         var hmen = '<strong>CODIGO' + '&nbsp;' + 'FECHAS </strong><br>';
         // alert(row_length);
         $.each(frm.doc.jornadas, function(i, row) {
         	hmen += row.lprocesos + '&nbsp;' + row.fecha + '<br>';
         });
         // $.each(frm.doc.Asistena || [], function(i, row) {
         //     total += row.work_completed/row_length;
         // });
         // cur_frm.set_value("total_work_plan", total)
   		$(frm.fields_dict['show_asistencias'].wrapper).html(hmen);
    // }

	}
});
frappe.ui.form.on("Procesos_Formativos", "add_asistencia", function(frm) { 
   alert("click");
         //frappe.set_route("List", "Asistencia",frm.doc.name);
         // var tn = frappe.model.make_new_doc_and_get_name("Asistencia");
         var tn = frappe.model.get_new_doc("Asistencia");
         //document.set_value("codigo_asistencia", "hola");
         // locals["Asistencia"][tn].name = tn.gen_name;
         //locals["Asistencia"][tn].codigo_sistencia = "aaaa";
         //tn.name = "bbbbb";
         tn.codigo_sistencia = "aaa";
         tn.hini = '08:00';
         tn.hfin = '12:00';
         frappe.set_route("Form", "Asistencia", tn.name);
         // locals["Asistencia"][tn].codigo_sistencia = "aaaa";
         // tn.refresh;
         
//    let docs = [{"codigo_asistencia":"test1","doctype":"Asistencia"}];
// const funcs = docs.map((doc) => {
//   frappe.call({
//     method: "frappe.client.insert",
//     args: {
//       doc: doc // doc object
//     },
//     callback: function(r) {
//       //callback script
//     }
//   });  
// });

// Promise.all(funcs).then(()=> {
//   console.log("Done");
// });
});