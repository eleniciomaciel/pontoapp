$('#fun_tele').mask("(00) 9.0000-0000", {placeholder: "(00) 9.0000-0000"});
$('#fun_cpf').mask("000.000.000-00", {placeholder: "000.000.000-00"});
$('#fun_pis').mask('000.00000.00-00',{placeholder: "000.000.000-00"});
$('#search_text').mask('000.00000.00-00',{placeholder: "000.000.000-00"});

/**Levanta modal adiciona funcionário com id da empresa via ajax */
$(document).on('click', '.view_add_fun_com_empresa', function(){  
    var user_id = $(this).attr("id");  
    $.ajax({  
        url:'funcionarios/levanta_dados_modal/' + user_id,  
        method:"POST",  
        data:{user_id:user_id},  
        dataType:"json",  
        success:function(data)  
        {  
              $('.bd-add_funcionario-modal-lg').modal('show');  
              $('#empresa_id').val(data.id_da_empresa); 
        },
        error: function (xht, er) {
          alert('Error na conecxão: ' + xht.status + ' - ' + xhr.statusText + ' Tipo de error-> ' + er);
        }  
    });  
}); 

  
