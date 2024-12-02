$('document').ready(function() {


    

    //Console log:

    $.get('https://jsonplaceholder.typicode.com/posts', {text: 'text'} , function (result) {

        result.forEach(element => {
            $('.btns').append(`<button class="clickable" style='width: 160px; margin-bottom: 10px;' id='btn_${element.id}'>Click Alert (btn_${element.id})</button><br/>`);
        });

        $("button.clickable").click(function() { 
            console.log("Button Clicked:", this); 
            $('.log').text(this.id);
        });

    });

   
});