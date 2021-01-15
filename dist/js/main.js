$('nav').on('click','.nav-menu',function(e){
    let caller = $(this).data('menu');
    if(caller === 'menu'){
        if(!$('.'+caller).hasClass('expanded')){
            $('.'+caller).addClass('expanded');
        }
        else{
            $('.'+caller).removeClass('expanded');
        }
    }
});