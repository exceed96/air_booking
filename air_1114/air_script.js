    $('.start_button').click(function(){
        $('.start_modal, .overlay').addClass('active')
    })
    $('.dest_button').click(function(){
        $('.dest_modal, .overlay').addClass('active')
    })
    $('.pers_button').click(function(){
        $('.pers_modal, .overlay').addClass('active')
    })
    $('.overlay').click(function(){
        $('.start_modal, .overlay, .dest_modal, .pers_modal').removeClass('active')
    })

    function click_way(type){
        if (type === 'roundtrip'){
            document.getElementById("iner_roundtrip").style.backgroundColor="#8cb4dc";
            document.getElementById("iner_roundtrip").style.color="white";
            document.getElementById("iner_oneway").style.backgroundColor="#e5f3fc";
            document.getElementById("iner_oneway").style.color="black";
        }
        if (type === 'oneway'){
            document.getElementById("iner_oneway").style.backgroundColor="#8cb4dc";
            document.getElementById("iner_oneway").style.color="white";
            document.getElementById("iner_roundtrip").style.backgroundColor="#e5f3fc";
            document.getElementById("iner_roundtrip").style.color="black";
        }
    }
    function count_adult(type){
        const adult_number = document.getElementById('adult_result');
        let number = adult_number.innerText;
        if(type ==='adult_plus'){
            number = parseInt(number) + 1;
            if (number > 9) number = 9;
        }
        else if(type === 'adult_minus'){
            number = parseInt(number) - 1;
            if (number < 0) number = 0;
        }
        adult_number.innerText = number;
    }

    function count_child(type){
        const resultElement = document.getElementById('child_result');
        let number = resultElement.innerText;
        if(type ==='child_plus'){
            number = parseInt(number) + 1;
            if (number > 9) number = 9;
        }
        else if(type === 'child_minus'){
            number = parseInt(number) - 1;
            if (number < 0) number = 0;
        }
        resultElement.innerText = number;
    }

    function count_infant(type){
        const resultElement = document.getElementById('infant_result');
        let number = resultElement.innerText;
        if(type ==='infant_plus'){
            number = parseInt(number) + 1;
            if (number > 9) number = 9;
        }
        else if(type === 'infant_minus'){
            number = parseInt(number) - 1;
            if (number < 0) number = 0;
        }
        resultElement.innerText = number;
    }
    $(function() {
      $('input[name="daterange"]').daterangepicker({
          "opens" : "left",
          "locale": {
              "format" : "YYYY/MM/DD",
              "separator" : " ~ ",
              "applyLabel" : "확인",
              "cancelLabel" : "취소",
              "daysOfWeek" : ["월", "화", "수", "목", "금", "토", "일"],
              "monthNames" : ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
              "firstDay" : 1
          }
      }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });
    });