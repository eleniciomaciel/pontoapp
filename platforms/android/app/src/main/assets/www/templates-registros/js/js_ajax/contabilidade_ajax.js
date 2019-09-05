 /**dados da contabilidade */
 $('#view_cont_insc').mask("00.000.000-0", {placeholder: "00.000.000-0"});
$('#view_cont_celu').mask("(00) 9.0000-0000", {placeholder: "(00) 9.0000-0000"});
$('#view_cont_cnpj').mask("00.000.000/0001-00", {placeholder: "00.000.000/0001-00"});
/**visualização dos dados da contabilidade */
$(document).on('click', '.view_contabil', function(){  
   let user_id = $(this).attr("id");  
   //alert(user_id);
   $.ajax({  
       url:'contabilidade/vew_dados_contador/' + user_id,  
       method:"GET",  
       data:{user_id:user_id},  
       dataType:"json",  
       success:function(data)  
       {  
               $('.bd-edit_contabil-modal-lg').modal('show');  
               $('#view_cont_razao').val(data.contabil_razao_cont);  
               $('#view_cont_cnpj').val(data.contabil_cnpj_cont);

               $('#view_cont_nome').val(data.contabil_nome_cont);  
               $('#view_cont_insc').val(data.contabil_insc_cont);
               $('#view_cont_ende').val(data.contabil_ende_cont);

               $('#view_cont_comp').val(data.contabil_comp_cont);  
               $('#view_cont_cida').val(data.contabil_cida_cont);
               $('#view_cont_esta').val(data.contabil_esta_cont);

               $('#view_cont_emai').val(data.contabil_emai_cont);  
               $('#view_cont_fixo').val(data.contabil_fixo_cont);
               $('#view_cont_celu').val(data.contabil_celu_cont);

               $('#view_cont_cont').val(data.contabil_cont_cont);  
               $('#view_cont_regi').val(data.contabil_regi_cont);
               $('#view_cont_id').val(data.contabil_id_cont);

               $('#user_id').val(user_id);  
       }  
   })  
}); 
 /**Faz al alterações */
$(document).on('submit', '#altera_dados_contabil', function(event){  
    event.preventDefault(); 
    var str = $("form").serialize();
    let id = $("input[name='view_cont_id']").val();

    swal({
    title: "Deseja alterar?",
    text: "Essa ação será de forma permanente ao você confirmar!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {

            $.ajax({
            url:'contabilidade/update_contabil/' + id,
            type:'POST',
            dataType: "json",
            data: str,
            success: function(data) {
                if($.isEmptyObject(data.error)){
                    $(".print-error-msg_up_contabil").css('display','none');
                    swal( data.success, {
                        icon: "success",
                        });
                    //$('#add_form_horas')[0].reset();
                }else{
                    $(".print-error-msg_up_contabil").css('display','block');
                    $(".print-error-msg_up_contabil").html(data.error);
                }
            }
        });
        
    } else {
        swal("Você desistiu de alterar!");
    }
    });
}); 