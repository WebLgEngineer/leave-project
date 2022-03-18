var member = [
    '請選擇',
    'EnPeiLo【羅恩培】',
    'MisuSu【蘇亭郡】',
    'MichelleHsieh【謝婷蓁】',
    'AllenLee【李東昇】',
    'JungKang【康家榮】',
    'MarkHu【胡訓身】',
    'ArthurYu【游超能】',
    'MattWu【吳維珉】',
    'IanLau【劉昱揚】',
    'KaiShengLiu【劉鎧升】',
    'LewisLin【林紀霖】',
    'StephenChang【張世賢】',
    'XavierKuo【郭嘉元】',
    'TerryLKTsai【蔡立功】'
];
var reason = [
    '請選擇',
    '身體不適',
    '個人事務處理',
    '路上塞車',
    '私事待辦',
    '休假',
    '醫院回診',
    '內部訓練'
];




$(document).ready(function () {
    $('#reasonInput').hide();
    $('#end').hide();
    
    $('#user').html(arrayMath(member));
    $('#reasonSelect').html(arrayMath(reason));

});

function copyEvent(id) {
    $.copy($("#result").clone());
}

function arrayMath(array) {
    let str = '';
    array.forEach( item => {
        let temp = ''
        if(item === '請選擇'){
            temp = `<option value="${item}" selected disabled>${item}</option>`;
        }else{
            temp = `<option value="${item}">${item}</option>`;
        }
        
        str += temp;
    });
    return str;
}


$(".radio-js").click(function () {
    if ($(this).val() === '1') {
        $('#reasonSelect').show();
        $('#reasonInput').hide();
    } else {
        $('#reasonSelect').hide();
        $('#reasonInput').show();
    }
});

$(".checkbox-js").click(function () {
    if($(this).attr('checked')){
        $(this).removeAttr("checked");
        $('#end').show();
    }else{
        $('#end').hide();
        $(this).attr('checked','checked');
    }
    
    
});


$('#go').click(function () {
    const reasonRadio = $('input[name="inlineRadioOptions"]:checked').val();
    let reason = '';
    if (reasonRadio === '1') {
        reason = $('#reasonSelect').val();
    }else{
        reason = $('#reasonInput').val();
    }

    const mainStr = `請假通知：${$('#user').val()}`

    let resultStr = '';

    if($(".checkbox-js").attr('checked')){
        resultStr = `◆ 請假人員：${$('#user').val()}
◆ 請假時間：${$('#startDate').val()} ${$('#startTime').val()} ~ ${$('#endTime').val()}
◆ 請假事由：${reason}`;
    }else{
        console.log(123);
        resultStr = `◆ 請假人員：${$('#user').val()}
◆ 請假時間：${$('#startDate').val()} ${$('#startTime').val()} ~ ${$('#endDate').val()} ${$('#endTime').val()}
◆ 請假事由：${reason}`;
    }

    console.log(resultStr);
    $('#result').val(resultStr);
    $('#main').val(mainStr);

});

$('#mainCopy').click(function(){
    const copyText = document.getElementById("main");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
});

$('#resultCopy').click(function(){
    const copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
});
