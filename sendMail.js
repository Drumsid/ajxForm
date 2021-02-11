$('#sendMail').on('click', function () {
    var name1 = $('#name1').val().trim();
    var name2 = $('#name2').val().trim();

    if (name1 == "") {
        $('#errMes').text('Field 1 is empty!');
        return false;
    }
    if (name2 == "") {
        $('#errMes').text('Field 2 is empty!');
        return false;
    }

    $('#errMes').text("");

    $.ajax({
        url: 'mail.php',
        type: 'POST',
        cache: false,
        data: {'name1': name1, 'name2': name2},
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail').prop('disabled', true);
        },
        success: function(data) {
            alert(data);
            $('#sendMail').prop('disabled', false);
            $('#ajxForm')[0].reset();
        }
    });
});