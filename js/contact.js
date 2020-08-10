const URL = 'https://script.google.com/macros/s/AKfycbwr9WYC24flV86wClt5H5Qc_gG-3RTKO5_WlGfQ/exec';


const sendMessage = function (e) {
    const name = $('#name').val();
    const email = $('#mail').val();
    const message = $('#message').val();
    const messageData = {
        name: name,
        email: email,
        message: message
    }
    if(name && email){
        $.post(URL,messageData,success)
    } else{
        alert('Por favor ingresa la información solicitada');
    }
    
}

$("#submit_contact").click(sendMessage);

const success = function (data) {
    const name = $('#name').val();
    alert(`Gracias ${name}, pronto un asesor te contectará`);
    $('#name').val('');
    $('#mail').val('');
    $('#message').val('');
};