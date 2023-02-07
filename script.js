$('.page-scroll').on('click', function(e){

    // Ambil isi href yang di click dan ambil attribute href
    let tujuan = $(this).attr('href');

    // // tangkap elemen yang bersangkutan yang diclick (section yang punya id yang diclick)
    let elemenTujuan = $(tujuan);  

    // console.log(elemenTujuan.offset().top) // jarak dari elemen yang diclick ke atas(top)

    //pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 400  //scrollTop (jarak antara posisi body dari atas)
    });
    // e.preventDefault();
   
});

// title
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    if(wScroll > $('.title-container').offset().top - 200){
        $('.title-container div').addClass('showTTop')
    }
})

// About
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    if(wScroll > $('.about').offset().top - 200){
        $('.about p').addClass('showPLeft')
        $('.about div').addClass('showPLeft')
        $('.about div').addClass('showPRight')
    }
})

// skill
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    if(wScroll > $('.skill').offset().top - 200){
        $('.skill div').addClass('showSLeft')
    }
});

// contact
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    if(wScroll > $('.contact').offset().top - 200){
        $('.contact div').addClass('showSLeft')
    }
});


// Paralax
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    $('.jumbotron-container img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron-container h2').css({
        'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
    });

    $('.jumbotron-container p').css({
        'transform' : 'translate(0px, '+ wScroll/1 +'%)'
    });

    $('.jumbotron-container button').css({
        'transform' : 'translate(0px, '+ wScroll/1 +'%)'
    });

    // if(wScroll > $('.port').offset().top - 350){
    //     $('.port img').each(function(i){ // i adalah index dari tiap elemen
    //         setTimeout(function(){
    //             $('.port img').eq(i).addClass('showThumbnail') // eq berfungsi untuk
    //         }, 200 * (i+1))
    //     });
    // };
});


// $('.kolom').each(function(i){
//     $('.kolom').on('click', function(){
//         $('.kolom').eq(i).addClass('zoomThumbnail')
//     });
// });

// persentase bar
const processing = document.querySelectorAll('.processing-bar');

setTimeout(() => {
    processing.forEach(el => {
        el.style.opacity = 1;
        el.style.width = el.getAttribute('data-bar') + '%';
    })
}, 500);

// contact
function submitData(event){
    event.preventDefault();
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let message = document.getElementById("input-message").value;
    
    if(name == ""){
        return alert("Name input fields must be not empty");
    } else if(email == "rafialfian770@gmail.com"){
        return alert("Email input fields must be not empty");
    } else if(phone == ""){
        return alert("Phone input fields must be not empty");
    } else if(message == ""){
        return alert("Message input fields must be not empty");
    }
    
    let a = document.createElement("a");
    a.href = `mailto:${email}?&body= Hello my name is ${name}, ${message}. Please contact my phone number at ${phone}`;
    a.target = "_blank";
    a.click();

    let submitDataObject = {
        name, email, phone, message,
    }

}


