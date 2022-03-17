
$(document).ready(function () {
    $('#reasonInput').hide();
    $(".radio-js").click(function () {
        if($(this).val() === '1'){
            $('#reasonSelect').show();
            $('#reasonInput').hide();
        }else{
            $('#reasonSelect').hide();
            $('#reasonInput').show();
        }
    });

    $('#go').click(function() {
        const str = `◆ 請假人員：MisuSu【蘇亭郡】
◆ 請假時間：${$('#startDate').val()} ${$('#startTime').val()} - ${$('#endDate').val()} ${$('#endTime').val()}
◆ 請假事由：個人事務處理`;
        $('#result').text(str);
    });
});	

function copyEvent(id)
{
    $.copy($("#result").clone());
}
