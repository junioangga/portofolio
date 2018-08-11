$( document ).ready(function() {
  $('.dud').click(function(e) {
      e.preventDefault();
  });
  $('.languageeng').click(function(){
      $('.english').css("display","inline-block");
      $('.japanese').css("display","none");
  });
  $('.languagejap').click(function(){
      $('.english').css("display","none");
      $('.japanese').css("display","inline-block");
  });
  $('.popuppop').click(function(){
    $('body').css("overflow","hidden");
    $('#portpopup').css("left","0");
  });
  $('.backtosite').click(function(){
    $('body').css("overflow","auto");
    $('#portpopup').css("left","-2000px");
    $('.popupitem').css("display","none");
  });
  $('.kayacbutton').click(function(){
      $('.kayacdisplay').css("display","block");
  });
  $('.futureadybutton').click(function(){
      $('.futureadydisplay').css("display","block");
  });
  $('.anabutton').click(function(){
      $('.anadisplay').css("display","block");
  });
  $('.dinersbutton').click(function(){
      $('.dinersdisplay').css("display","block");
  });
  $('.mitsuibutton').click(function(){
      $('.mitsuidisplay').css("display","block");
  });
  $('.ragnarokbutton').click(function(){
      $('.ragnarokdisplay').css("display","block");
  });
  $('.toraybutton').click(function(){
      $('.toraydisplay').css("display","block");
  });
  $('.epsonbutton').click(function(){
      $('.epsondisplay').css("display","block");
  });
});

new Vue({
  el:'#portfolio',
  data:{
    show :true,
    portos:[
      {
        titleeng: 'Special project for Kayac',
        titlejp: 'Kayacに特別なプロジェクト',
        image: 'kayac.jpg',
        button: 'kayacbutton',
        wow: 'fadeInLeft'
      },
      {
        titleeng: 'Futuready website development' ,
        titlejp: 'Futureadyウェブサイトの開発',
        image: 'futuready.jpg',
        button: 'futureadybutton',
        wow: 'fadeInLeft'
      },
      {
        titleeng: 'All Nippon Airlines website development' ,
        titlejp: 'All Nippon Airlinesウェブサイトの開発',
        image: 'ana.jpg',
        button: 'anabutton',
        wow: 'fadeInLeft'
      },
      {
        titleeng: 'Diners club international weekly magazine' ,
        titlejp: 'Diners club international週間雑誌',
        image: 'diners.jpg',
        button: 'dinersbutton',
        wow: 'fadeInLeft'
      },
      {
        titleeng: 'Mitsui trust bank weekly mail' ,
        titlejp: 'Mitsui trust bank週間メール',
        image: 'mitsui.jpg',
        button: 'mitsuibutton',
        wow: 'fadeInRight'
      },
      {
        titleeng: 'Ragnarok online promotion project' ,
        titlejp: 'ラグナロックオンラインの発売ページ',
        image: 'ragnarok.jpg',
        button: 'ragnarokbutton',
        wow: 'fadeInRight'
      },
      {
        titleeng: 'Toray life Quality assurance' ,
        titlejp: 'Toray lifeウェブサイト上開発',
        image: 'toray.jpg',
        button: 'toraybutton',
        wow: 'fadeInRight'
      },
      {
        titleeng: 'Epson pages creation project' ,
        titlejp: 'Epsonウェブサイト上開発',
        image: 'epson.jpg',
        button: 'epsonbutton',
        wow: 'fadeInRight'
      }
    ]
  }
})

new Vue({
  el:'#portpopup',
  data:{
    show :true,
    popups:[
      {
        titleeng: 'Special project for Kayac',
        titlejp: 'Kayacに特別なプロジェクト',
        narationeng: 'A replicate of Kayac website. Make specifically for Kayac interview 2018. As I do not have many vue portfolio yet, I am willing to demonstrate my skill through this mini project! Made using bootstrap, Vue.js, and jQuery. Made as efficient as I can. This website can also displayed on smartphone resolution.',
        narationjp: 'この小型なプロジェクトは２０１８年のKayac面談のためにやりました。自分でKayacのメインサイトを作成しました。Vueのポートフォリオを現在持っていないため私のスキルを発揮するためにこのプロジェクトをやりました！BootstrapとVue.jsとjQueryで作りました。このページはできる限り効率に作成しました。スマホ画面対応も可能です！',
        background: 'kayac-popup.jpg',
        backgroundsp: 'kayac-sp.jpg',
        link: 'https://junioangga.github.io/kayac/',
        display: 'kayacdisplay'
      },
      {
        titleeng: 'Futuready website development',
        titlejp: 'Futureadyウェブサイトの開発',
        narationeng: 'In cranium, my team is responsible of futuready corporation website development. We make pages for users and costumer service supports. HTML aspect used the most are bootstrap and codeigniter.',
        narationjp: 'クラウム株式会社で私はFutureadyウェブサイトのを開発しています。お客様さんとカスタマーサービスのためにいろいろなページを作成しました。FutureadyのサイトでBootstrapとCode igniterを一番多くて使っています。',
        background: 'futuready-popup.jpg',
        backgroundsp: 'futuready-sp.jpg',
        link: 'https://futuready.com/',
        display: 'futureadydisplay'
      },
      {
        titleeng: 'All Nippon Airlines website development',
        titlejp: 'All Nippon Airlinesウェブサイトの開発',
        narationeng: 'I handled ANA projects that revolved around making pages, checking pages done, and translating languages for Indonesian localization.',
        narationjp: 'ANAのプロジェクトにページをつくりまして、作ったページのチェックをしてインドネシア語ページに翻訳しました。',
        background: 'ana-popup.jpg',
        backgroundsp: 'ana-sp.jpg',
        link: 'https://www.ana.co.jp/id/id/',
        display: 'anadisplay'
      },
      {
        titleeng: 'Diners club international weekly magazine',
        titlejp: 'Diners club international週間雑誌',
        narationeng: 'Involved in the making of Diners club international weekly magazine that only accessible by premium members. In the project, I acted as coder that created pages and final checker.',
        narationjp: 'Diners club international週間雑誌はプレミアムメンバーだけの特別な雑誌です。このプロジェクトに私はページを作成してファイナルチェックをやりました。',
        background: 'diners-popup.jpg',
        backgroundsp: 'diners-sp.jpg',
        link: 'https://www.diners.co.jp/ja/index.html',
        display: 'dinersdisplay'
      },
      {
        titleeng: 'Mitsui trust bank weekly mail',
        titlejp: 'Mitsui trust bank週間メール',
        narationeng: 'Mitsui trust bank had HTML project mail that we have to submit weekly. Those HTML mails then directly distributed to customers.',
        narationjp: 'Mitsui trust bankのHTMLメールプログラムが多用しました。週刊で私たちが作ったHTMLメールはお客さんに直接に配布します。',
        background: 'mitsui-popup.jpg',
        backgroundsp: 'mitsui-sp.jpg',
        link: 'https://www.smtb.jp/',
        display: 'mitsuidisplay'
      },
      {
        titleeng: 'Ragnarok online promotion project',
        titlejp: 'ラグナロックオンラインの発売ページ',
        narationeng: 'Personal project that I made to show my interest in making website for games, something I did not have the chance till now. In this project I designed a one page website to promote a ragnarok mobile game.',
        narationjp: '自分が作りましたプロジェクト。ゲームの世界が好きだから、このプロジェクっトを自発しました。ラグナロックオンラインを宣伝ために１ページを作成しました。',
        background: 'ragnarok-popup.jpg',
        backgroundsp: 'ragnarok-sp.jpg',
        link: 'https://junioangga.github.io/MyRagnarok/',
        display: 'ragnarokdisplay'
      },
      {
        titleeng: 'Toray life Quality assurance',
        titlejp: 'Toray lifeウェブサイト上開発',
        narationeng: 'A project from toray company. I acted as a quality assurance in this project.',
        narationjp: 'Toray株式会社のプロジェクト。作成されたページをQAとしてファイナルチェックをしました。',
        background: 'toray-popup.jpg',
        backgroundsp: 'toray-sp.jpg',
        link: 'https://www.toray.com/technology/toray/life/',
        display: 'toraydisplay'
      },
      {
        titleeng: 'Epson pages creation project',
        titlejp: 'Epsonウェブサイト上開発',
        narationeng: 'A project from Epson company. We tasked to make pages with large number for limited time.',
        narationjp: 'Epson株式会社のプロジェクト。短い開発期限で多いページを作成しました。',
        background: 'epson-popup.jpg',
        backgroundsp: 'epson-sp.jpg',
        link: 'https://www.epson.jp/',
        display: 'epsondisplay'
      }
    ]
  }
})



new Vue({
  el:'#wrapper',
  data:{
    english:true,
    japanese:false
  }
})


//Wow Animation with animate css 
var wow = new WOW(
  {
    boxClass:     'kurs',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);
wow.init();

function main() {

(function () {
   'use strict';
   $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	


  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();
