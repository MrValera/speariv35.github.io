
/*
 * Custom
 */
$(function() {

(function($){
    $.fn.fancybox = function(){


			var $link = this;
    		var $body = $('body');
    		var $modal;
    		var $overlay;
            var present = false;

    		function showModal(e) {
                e.preventDefault();

                if (!present) {
                $link = $(this); 
    			var href = $link.attr('href');

    			$modal = $('<div class="fancybox-modal"><img src="' + href + '"></div>');
    			$overlay = $('<div class="fancybox-overlay"></div>');

                e.stopPropagation();
				
				$body.append($overlay);
    			$body.append($modal);
    			$overlay.one('click', hideModal); 
                present = true;
            } 

    		}

    		function hideModal() {
    			$modal.hide();
    			$overlay.hide();
                present = false;
    		}


    		$link.on('click', showModal);

    	    return this;
    }
 
})(jQuery);

var jsonData=[
  {
    "guid": "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    "index": 0,
    "favoriteFruit": "banana",
    "latitude": 58.161524999999997,
    "company": "INDEXIA",
    "email": "moorehensley@indexia.com",
    "picture": "http://placehold.it/32x32",
    "registered": "2015-07-03T08:30:59 -03:00",
    "eyeColor": "blue",
    "phone": "+1 (848) 556-2344",
    "address": "268 Debevoise Street, Fidelis, North Carolina, 3606",
    "friends": [
      {
        "id": 0,
        "name": "Sharron Pace"
      }
    ],
    "isActive": false,
    "about": "Velit laborum aliquip voluptate incididunt dolore qui proident velit adipisicing. Pariatur sint fugiat aute eiusmod aute aliquip dolor culpa enim quis. Ea elit ad duis cillum et aliquip. Elit aliquip enim ut quis tempor. Veniam irure minim esse proident culpa Lorem duis veniam dolor anim quis laboris id laboris. Enim minim eiusmod labore do consectetur voluptate pariatur cillum fugiat dolore magna incididunt. Qui eiusmod Lorem qui irure consequat.\r\n",
    "balance": "$2,811.93",
    "name": "Moore Hensley",
    "skills": [
      "ea",
      "ipsum",
      "Lorem"
    ],
    "gender": "male",
    "age": 37,
    "greeting": "Hello, Moore Hensley! You have 5 unread messages.",
    "longitude": -10.931599,
    "_id": "56bdc339702f16daa316d2eb"
  },
  {
    "guid": "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    "index": 1,
    "favoriteFruit": "banana",
    "latitude": 14.810798999999999,
    "company": "TUBESYS",
    "email": "sharlenebush@tubesys.com",
    "picture": "http://placehold.it/32x32",
    "registered": "2014-03-22T11:03:44 -02:00",
    "eyeColor": "blue",
    "phone": "+1 (855) 582-2464",
    "address": "848 Hicks Street, Chestnut, Palau, 5667",
    "friends": [
      {
        "id": 0,
        "name": "Briana Decker"
      },
      {
        "id": 1,
        "name": "Sharron Pace"
      }
    ],
    "isActive": true,
    "about": "Consectetur velit officia eiusmod esse labore sint anim nostrud elit nulla dolore dolor. In aute ad incididunt pariatur cupidatat do deserunt irure. Exercitation cillum enim incididunt amet Lorem ut Lorem nulla.\r\n",
    "balance": "$3,821.77",
    "name": "Sharlene Bush",
    "skills": [
      "tempor",
      "mollit",
      "velit",
      "commodo",
      "veniam",
      "cupidatat",
      "laborum"
    ],
    "gender": "female",
    "age": 34,
    "greeting": "Hello, Sharlene Bush! You have 2 unread messages.",
    "longitude": 65.625151000000002,
    "_id": "56bdc33986e3357811d1a81e"
  },
  {
    "guid": "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    "index": 2,
    "favoriteFruit": "apple",
    "latitude": 73.588680999999994,
    "company": "XINWARE",
    "email": "rossvazquez@xinware.com",
    "picture": "http://placehold.it/32x32",
    "registered": "2014-06-14T03:11:08 -03:00",
    "eyeColor": "green",
    "phone": "+1 (814) 593-3825",
    "address": "680 Pooles Lane, Sattley, Maine, 3025",
    "friends": [
      {
        "id": 0,
        "name": "Marilyn Mcintosh"
      },
      {
        "id": 1,
        "name": "Padilla Garrison"
      },
      {
        "id": 2,
        "name": "Naomi Buckner"
      }
    ],
    "isActive": false,
    "about": "Ut dolor nostrud enim ullamco sit reprehenderit nisi commodo eiusmod amet esse ea. Lorem amet duis in culpa do laboris deserunt esse culpa irure est. Lorem tempor officia amet amet magna ea pariatur. Occaecat qui minim commodo quis excepteur eiusmod in minim deserunt occaecat dolor. Ipsum dolore elit pariatur exercitation anim.\r\n",
    "balance": "$3,793.59",
    "name": "Ross Vazquez",
    "skills": [
      "nulla",
      "anim",
      "proident",
      "ipsum",
      "ad",
      "consectetur",
      "elit"
    ],
    "gender": "male",
    "age": 24,
    "greeting": "Hello, Ross Vazquez! You have 9 unread messages.",
    "longitude": 139.45094800000001,
    "_id": "56bdc3397558ab111683cfd6"
  },
  {
    "guid": "249b6175-5c30-44c6-b154-f120923736f5",
    "index": 3,
    "favoriteFruit": "banana",
    "latitude": -76.562336000000002,
    "company": "OMATOM",
    "email": "elmahead@omatom.com",
    "picture": "http://placehold.it/32x32",
    "registered": "2014-01-15T06:51:52 -02:00",
    "eyeColor": "green",
    "phone": "+1 (909) 547-2687",
    "address": "956 Roebling Street, Fairforest, Virgin Islands, 2586",
    "friends": [
      {
        "id": 0,
        "name": "Goldie Gentry"
      },
      {
        "id": 1,
        "name": "Aisha Tran"
      }
    ],
    "isActive": true,
    "about": "Anim mollit tempor ullamco adipisicing ipsum labore incididunt occaecat aliquip sint et enim. Ad nulla labore commodo proident aute. Nisi elit aute labore magna fugiat aliqua. Voluptate cupidatat duis est laboris. Quis ut amet nulla sit esse commodo commodo fugiat dolor tempor enim velit. In pariatur ex labore ea tempor proident proident. Sint excepteur excepteur dolor tempor nostrud nisi proident cupidatat excepteur laborum incididunt culpa aliqua.\r\n",
    "balance": "$2,278.75",
    "name": "Elma Head",
    "skills": [
      "adipisicing",
      "irure",
      "sit",
      "quis",
      "velit"
    ],
    "gender": "female",
    "age": 21,
    "greeting": "Hello, Elma Head! You have 8 unread messages.",
    "longitude": -131.352147,
    "_id": "56bdc3395273667c0f89b902"
  },
  {
    "guid": "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    "index": 4,
    "favoriteFruit": "banana",
    "latitude": 19.039227,
    "company": "NURALI",
    "email": "careybarr@nurali.com",
    "picture": "http://placehold.it/32x32",
    "registered": "2015-04-03T01:25:56 -03:00",
    "eyeColor": "blue",
    "phone": "+1 (956) 512-2693",
    "address": "500 Harbor Court, Wilmington, District Of Columbia, 4946",
    "friends": [
      {
        "id": 0,
        "name": "Jordan Sampson"
      },
      {
        "id": 1,
        "name": "Eddie Strong"
      }
    ],
    "isActive": true,
    "about": "Deserunt anim esse duis labore enim ex ullamco. Commodo enim fugiat dolore qui aliquip. Est voluptate sit fugiat est. Duis eu exercitation amet cillum esse aliquip quis culpa mollit commodo anim.\r\n",
    "balance": "$3,951.17",
    "name": "Carey Barr",
    "skills": [
      "ex",
      "culpa",
      "nostrud",
      "et"
    ],
    "gender": "male",
    "age": 27,
    "greeting": "Hello, Carey Barr! You have 4 unread messages.",
    "longitude": -100.85060199999999,
    "_id": "56bdc3398f16bb4615b26c69"
  },
  {
    "guid": "150b00fb-dd82-427d-9faf-2879ea87c695",
    "index": 5,
    "favoriteFruit": "apple",
    "latitude": -33.762830999999998,
    "company": "FURNIGEER",
    "email": "blackburndotson@furnigeer.com",
    "picture": "http://placehold.it/32x32",
    "registered": "2014-12-19T02:55:31 -02:00",
    "eyeColor": "brown",
    "phone": "+1 (876) 411-2433",
    "address": "219 Bijou Avenue, Finzel, Wisconsin, 9092",
    "friends": [
      {
        "id": 0,
        "name": "Jacklyn Lucas"
      },
      {
        "id": 1,
        "name": "Linda Chapman"
      }
    ],
    "isActive": false,
    "about": "Qui consequat exercitation incididunt elit non est est ea amet. Ad veniam eiusmod nostrud esse occaecat nulla dolor velit deserunt. Aliquip ex minim amet id id ullamco fugiat. Non exercitation duis fugiat consectetur amet cupidatat veniam id sint enim Lorem amet sit aute. Voluptate minim dolor exercitation id incididunt ullamco proident sit. Velit ut id eu dolore laboris consectetur aute consequat tempor. Sunt aliquip proident officia magna veniam voluptate.\r\n",
    "balance": "$1,498.77",
    "name": "Blackburn Dotson",
    "skills": [
      "non",
      "do",
      "non",
      "amet",
      "ipsum"
    ],
    "gender": "male",
    "age": 38,
    "greeting": "Hello, Blackburn Dotson! You have 6 unread messages.",
    "longitude": 32.616394999999997,
    "_id": "56bdc33939066929c893b269"
  },
  {
    "guid": "e1bf46ab-7168-491e-925e-f01e21394812",
    "index": 6,
    "favoriteFruit": "strawberry",
    "latitude": 15.419051,
    "company": "KOG",
    "email": "shereeanthony@kog.com",
    "picture": "http://placehold.it/32x32",
    "registered": "2015-02-25T01:02:55 -02:00",
    "eyeColor": "brown",
    "phone": "+1 (979) 504-2554",
    "address": "702 Highland Avenue, Caberfae, Minnesota, 5570",
    "friends": [
      {
        "id": 0,
        "name": "Goldie Gentry"
      },
      {
        "id": 1,
        "name": "Briana Decker"
      }
    ],
    "isActive": true,
    "about": "Cillum fugiat officia exercitation nulla quis consequat eu irure ut magna irure. Mollit laborum nulla in laboris officia sit. Nisi cupidatat velit ad deserunt commodo minim minim ullamco adipisicing qui dolore adipisicing esse.\r\n",
    "balance": "$2,764.03",
    "name": "Sheree Anthony",
    "skills": [
      "Lorem",
      "veniam",
      "excepteur",
      "culpa"
    ],
    "gender": "female",
    "age": 39,
    "greeting": "Hello, Sheree Anthony! You have 5 unread messages.",
    "longitude": 37.385548,
    "_id": "56bdc3396fdbaec5ee4ca929"
  }
];




/*WOW INIT*/

new WOW().init();
           


// JCARAUSEL

  $('.jcarousel').jcarousel({
  	  wrap: 'circular'});

          $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
      target: '+=1'
  });


  $('.jcarousel-pagination')

  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })

  $('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
          return '<a></a>';
      }
  });

    $('.jcarousel').jcarouselAutoscroll({
      interval: 5000,
      target: '+=1',
      autostart: true
  });

/*FANCYBOX INIT*/

      $('a.fancybox').fancybox({
  });


/* ACCORDION  */

var allPanels = $('.banners__accordion  .accordion__content').hide();
    
  $('.accordion__block').click(function() {
   

     if ($(this).hasClass('accordion__block--active')) {
      $(this).next().slideUp(300);
       $(this).children('.opener').html('+');
        $(this).removeClass( 'accordion__block--active' );
        

    } else {

    allPanels.not($(this).next()).slideUp(300);
    $('.accordion__block').children('.opener').html('+');
    $('.accordion__block').removeClass( 'accordion__block--active' );
    $(this).children('.opener').html('-');
    $(this).addClass( 'accordion__block--active' );
    $(this).next().slideDown(300);
    return false;
  }
  });

/*LODASH*/


// uniqueSkills

  var uniqueSkills = [];
    uniqueSkills = _.map(jsonData, 'skills');
    uniqueSkills = _.flattenDeep(uniqueSkills);
    uniqueSkills = _.sortBy(_.map(_.uniq(uniqueSkills), _.toLower));

    console.log('--------------------------uniqueSkills------------------------------');
    console.log(uniqueSkills);


// MaxFriends
 
  var mapFriends = _.map(jsonData, function(e) {

    return { "name": e.name, "friends": e.friends}

  });

  var MaxFriendsSort = _.map(_.sortBy(mapFriends, 'friends.length'), 'name');

    console.log('--------------------------maxFriends------------------------------');
    console.log(MaxFriendsSort);

// AllFriendUnique


  var friends = _.map(jsonData, function(e) {

  return {"name": _.map(e.friends, "name")}
  
  });

  var allFriendUnique = _.uniq(_.sortBy(_.flattenDeep(_.map(friends, 'name'))));

    console.log('--------------------------allFriendUnique------------------------------');
    console.log(allFriendUnique);

   });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKlxyXG4gKiBDdXN0b21cclxuICovXHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4oZnVuY3Rpb24oJCl7XHJcbiAgICAkLmZuLmZhbmN5Ym94ID0gZnVuY3Rpb24oKXtcclxuXHJcblxyXG5cdFx0XHR2YXIgJGxpbmsgPSB0aGlzO1xyXG4gICAgXHRcdHZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgIFx0XHR2YXIgJG1vZGFsO1xyXG4gICAgXHRcdHZhciAkb3ZlcmxheTtcclxuICAgICAgICAgICAgdmFyIHByZXNlbnQgPSBmYWxzZTtcclxuXHJcbiAgICBcdFx0ZnVuY3Rpb24gc2hvd01vZGFsKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXByZXNlbnQpIHtcclxuICAgICAgICAgICAgICAgICRsaW5rID0gJCh0aGlzKTsgXHJcbiAgICBcdFx0XHR2YXIgaHJlZiA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICBcdFx0XHQkbW9kYWwgPSAkKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtbW9kYWxcIj48aW1nIHNyYz1cIicgKyBocmVmICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgXHRcdFx0JG92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtb3ZlcmxheVwiPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JGJvZHkuYXBwZW5kKCRvdmVybGF5KTtcclxuICAgIFx0XHRcdCRib2R5LmFwcGVuZCgkbW9kYWwpO1xyXG4gICAgXHRcdFx0JG92ZXJsYXkub25lKCdjbGljaycsIGhpZGVNb2RhbCk7IFxyXG4gICAgICAgICAgICAgICAgcHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgXHRcdH1cclxuXHJcbiAgICBcdFx0ZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xyXG4gICAgXHRcdFx0JG1vZGFsLmhpZGUoKTtcclxuICAgIFx0XHRcdCRvdmVybGF5LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHByZXNlbnQgPSBmYWxzZTtcclxuICAgIFx0XHR9XHJcblxyXG5cclxuICAgIFx0XHQkbGluay5vbignY2xpY2snLCBzaG93TW9kYWwpO1xyXG5cclxuICAgIFx0ICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gXHJcbn0pKGpRdWVyeSk7XHJcblxyXG52YXIganNvbkRhdGE9W1xyXG4gIHtcclxuICAgIFwiZ3VpZFwiOiBcIjcwMWIyOWMzLWIzNWQtNGNmMS1hNWY2LThiMTJiMjlhNTA4MVwiLFxyXG4gICAgXCJpbmRleFwiOiAwLFxyXG4gICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IDU4LjE2MTUyNDk5OTk5OTk5NyxcclxuICAgIFwiY29tcGFueVwiOiBcIklOREVYSUFcIixcclxuICAgIFwiZW1haWxcIjogXCJtb29yZWhlbnNsZXlAaW5kZXhpYS5jb21cIixcclxuICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDctMDNUMDg6MzA6NTkgLTAzOjAwXCIsXHJcbiAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgXCJwaG9uZVwiOiBcIisxICg4NDgpIDU1Ni0yMzQ0XCIsXHJcbiAgICBcImFkZHJlc3NcIjogXCIyNjggRGViZXZvaXNlIFN0cmVldCwgRmlkZWxpcywgTm9ydGggQ2Fyb2xpbmEsIDM2MDZcIixcclxuICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU2hhcnJvbiBQYWNlXCJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICBcImFib3V0XCI6IFwiVmVsaXQgbGFib3J1bSBhbGlxdWlwIHZvbHVwdGF0ZSBpbmNpZGlkdW50IGRvbG9yZSBxdWkgcHJvaWRlbnQgdmVsaXQgYWRpcGlzaWNpbmcuIFBhcmlhdHVyIHNpbnQgZnVnaWF0IGF1dGUgZWl1c21vZCBhdXRlIGFsaXF1aXAgZG9sb3IgY3VscGEgZW5pbSBxdWlzLiBFYSBlbGl0IGFkIGR1aXMgY2lsbHVtIGV0IGFsaXF1aXAuIEVsaXQgYWxpcXVpcCBlbmltIHV0IHF1aXMgdGVtcG9yLiBWZW5pYW0gaXJ1cmUgbWluaW0gZXNzZSBwcm9pZGVudCBjdWxwYSBMb3JlbSBkdWlzIHZlbmlhbSBkb2xvciBhbmltIHF1aXMgbGFib3JpcyBpZCBsYWJvcmlzLiBFbmltIG1pbmltIGVpdXNtb2QgbGFib3JlIGRvIGNvbnNlY3RldHVyIHZvbHVwdGF0ZSBwYXJpYXR1ciBjaWxsdW0gZnVnaWF0IGRvbG9yZSBtYWduYSBpbmNpZGlkdW50LiBRdWkgZWl1c21vZCBMb3JlbSBxdWkgaXJ1cmUgY29uc2VxdWF0LlxcclxcblwiLFxyXG4gICAgXCJiYWxhbmNlXCI6IFwiJDIsODExLjkzXCIsXHJcbiAgICBcIm5hbWVcIjogXCJNb29yZSBIZW5zbGV5XCIsXHJcbiAgICBcInNraWxsc1wiOiBbXHJcbiAgICAgIFwiZWFcIixcclxuICAgICAgXCJpcHN1bVwiLFxyXG4gICAgICBcIkxvcmVtXCJcclxuICAgIF0sXHJcbiAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgIFwiYWdlXCI6IDM3LFxyXG4gICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBNb29yZSBIZW5zbGV5ISBZb3UgaGF2ZSA1IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgIFwibG9uZ2l0dWRlXCI6IC0xMC45MzE1OTksXHJcbiAgICBcIl9pZFwiOiBcIjU2YmRjMzM5NzAyZjE2ZGFhMzE2ZDJlYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImd1aWRcIjogXCI3YTNjYmQxOC01N2ExLTQ1MzQtOGUxMi0xY2FhZDkyMWJkYTFcIixcclxuICAgIFwiaW5kZXhcIjogMSxcclxuICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiLFxyXG4gICAgXCJsYXRpdHVkZVwiOiAxNC44MTA3OTg5OTk5OTk5OTksXHJcbiAgICBcImNvbXBhbnlcIjogXCJUVUJFU1lTXCIsXHJcbiAgICBcImVtYWlsXCI6IFwic2hhcmxlbmVidXNoQHR1YmVzeXMuY29tXCIsXHJcbiAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTAzLTIyVDExOjAzOjQ0IC0wMjowMFwiLFxyXG4gICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgIFwicGhvbmVcIjogXCIrMSAoODU1KSA1ODItMjQ2NFwiLFxyXG4gICAgXCJhZGRyZXNzXCI6IFwiODQ4IEhpY2tzIFN0cmVldCwgQ2hlc3RudXQsIFBhbGF1LCA1NjY3XCIsXHJcbiAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkJyaWFuYSBEZWNrZXJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNoYXJyb24gUGFjZVwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICBcImFib3V0XCI6IFwiQ29uc2VjdGV0dXIgdmVsaXQgb2ZmaWNpYSBlaXVzbW9kIGVzc2UgbGFib3JlIHNpbnQgYW5pbSBub3N0cnVkIGVsaXQgbnVsbGEgZG9sb3JlIGRvbG9yLiBJbiBhdXRlIGFkIGluY2lkaWR1bnQgcGFyaWF0dXIgY3VwaWRhdGF0IGRvIGRlc2VydW50IGlydXJlLiBFeGVyY2l0YXRpb24gY2lsbHVtIGVuaW0gaW5jaWRpZHVudCBhbWV0IExvcmVtIHV0IExvcmVtIG51bGxhLlxcclxcblwiLFxyXG4gICAgXCJiYWxhbmNlXCI6IFwiJDMsODIxLjc3XCIsXHJcbiAgICBcIm5hbWVcIjogXCJTaGFybGVuZSBCdXNoXCIsXHJcbiAgICBcInNraWxsc1wiOiBbXHJcbiAgICAgIFwidGVtcG9yXCIsXHJcbiAgICAgIFwibW9sbGl0XCIsXHJcbiAgICAgIFwidmVsaXRcIixcclxuICAgICAgXCJjb21tb2RvXCIsXHJcbiAgICAgIFwidmVuaWFtXCIsXHJcbiAgICAgIFwiY3VwaWRhdGF0XCIsXHJcbiAgICAgIFwibGFib3J1bVwiXHJcbiAgICBdLFxyXG4gICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgIFwiYWdlXCI6IDM0LFxyXG4gICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBTaGFybGVuZSBCdXNoISBZb3UgaGF2ZSAyIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgIFwibG9uZ2l0dWRlXCI6IDY1LjYyNTE1MTAwMDAwMDAwMixcclxuICAgIFwiX2lkXCI6IFwiNTZiZGMzMzk4NmUzMzU3ODExZDFhODFlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZ3VpZFwiOiBcIjg4YmViMmYzLWU0YzItNDlmMy1hMGEwLWVjZjk1N2E5NWFmM1wiLFxyXG4gICAgXCJpbmRleFwiOiAyLFxyXG4gICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIixcclxuICAgIFwibGF0aXR1ZGVcIjogNzMuNTg4NjgwOTk5OTk5OTk0LFxyXG4gICAgXCJjb21wYW55XCI6IFwiWElOV0FSRVwiLFxyXG4gICAgXCJlbWFpbFwiOiBcInJvc3N2YXpxdWV6QHhpbndhcmUuY29tXCIsXHJcbiAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA2LTE0VDAzOjExOjA4IC0wMzowMFwiLFxyXG4gICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICBcInBob25lXCI6IFwiKzEgKDgxNCkgNTkzLTM4MjVcIixcclxuICAgIFwiYWRkcmVzc1wiOiBcIjY4MCBQb29sZXMgTGFuZSwgU2F0dGxleSwgTWFpbmUsIDMwMjVcIixcclxuICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWFyaWx5biBNY2ludG9zaFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUGFkaWxsYSBHYXJyaXNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmFvbWkgQnVja25lclwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgXCJhYm91dFwiOiBcIlV0IGRvbG9yIG5vc3RydWQgZW5pbSB1bGxhbWNvIHNpdCByZXByZWhlbmRlcml0IG5pc2kgY29tbW9kbyBlaXVzbW9kIGFtZXQgZXNzZSBlYS4gTG9yZW0gYW1ldCBkdWlzIGluIGN1bHBhIGRvIGxhYm9yaXMgZGVzZXJ1bnQgZXNzZSBjdWxwYSBpcnVyZSBlc3QuIExvcmVtIHRlbXBvciBvZmZpY2lhIGFtZXQgYW1ldCBtYWduYSBlYSBwYXJpYXR1ci4gT2NjYWVjYXQgcXVpIG1pbmltIGNvbW1vZG8gcXVpcyBleGNlcHRldXIgZWl1c21vZCBpbiBtaW5pbSBkZXNlcnVudCBvY2NhZWNhdCBkb2xvci4gSXBzdW0gZG9sb3JlIGVsaXQgcGFyaWF0dXIgZXhlcmNpdGF0aW9uIGFuaW0uXFxyXFxuXCIsXHJcbiAgICBcImJhbGFuY2VcIjogXCIkMyw3OTMuNTlcIixcclxuICAgIFwibmFtZVwiOiBcIlJvc3MgVmF6cXVlelwiLFxyXG4gICAgXCJza2lsbHNcIjogW1xyXG4gICAgICBcIm51bGxhXCIsXHJcbiAgICAgIFwiYW5pbVwiLFxyXG4gICAgICBcInByb2lkZW50XCIsXHJcbiAgICAgIFwiaXBzdW1cIixcclxuICAgICAgXCJhZFwiLFxyXG4gICAgICBcImNvbnNlY3RldHVyXCIsXHJcbiAgICAgIFwiZWxpdFwiXHJcbiAgICBdLFxyXG4gICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICBcImFnZVwiOiAyNCxcclxuICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgUm9zcyBWYXpxdWV6ISBZb3UgaGF2ZSA5IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgIFwibG9uZ2l0dWRlXCI6IDEzOS40NTA5NDgwMDAwMDAwMSxcclxuICAgIFwiX2lkXCI6IFwiNTZiZGMzMzk3NTU4YWIxMTE2ODNjZmQ2XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZ3VpZFwiOiBcIjI0OWI2MTc1LTVjMzAtNDRjNi1iMTU0LWYxMjA5MjM3MzZmNVwiLFxyXG4gICAgXCJpbmRleFwiOiAzLFxyXG4gICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IC03Ni41NjIzMzYwMDAwMDAwMDIsXHJcbiAgICBcImNvbXBhbnlcIjogXCJPTUFUT01cIixcclxuICAgIFwiZW1haWxcIjogXCJlbG1haGVhZEBvbWF0b20uY29tXCIsXHJcbiAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTAxLTE1VDA2OjUxOjUyIC0wMjowMFwiLFxyXG4gICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICBcInBob25lXCI6IFwiKzEgKDkwOSkgNTQ3LTI2ODdcIixcclxuICAgIFwiYWRkcmVzc1wiOiBcIjk1NiBSb2VibGluZyBTdHJlZXQsIEZhaXJmb3Jlc3QsIFZpcmdpbiBJc2xhbmRzLCAyNTg2XCIsXHJcbiAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkdvbGRpZSBHZW50cnlcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkFpc2hhIFRyYW5cIlxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgXCJhYm91dFwiOiBcIkFuaW0gbW9sbGl0IHRlbXBvciB1bGxhbWNvIGFkaXBpc2ljaW5nIGlwc3VtIGxhYm9yZSBpbmNpZGlkdW50IG9jY2FlY2F0IGFsaXF1aXAgc2ludCBldCBlbmltLiBBZCBudWxsYSBsYWJvcmUgY29tbW9kbyBwcm9pZGVudCBhdXRlLiBOaXNpIGVsaXQgYXV0ZSBsYWJvcmUgbWFnbmEgZnVnaWF0IGFsaXF1YS4gVm9sdXB0YXRlIGN1cGlkYXRhdCBkdWlzIGVzdCBsYWJvcmlzLiBRdWlzIHV0IGFtZXQgbnVsbGEgc2l0IGVzc2UgY29tbW9kbyBjb21tb2RvIGZ1Z2lhdCBkb2xvciB0ZW1wb3IgZW5pbSB2ZWxpdC4gSW4gcGFyaWF0dXIgZXggbGFib3JlIGVhIHRlbXBvciBwcm9pZGVudCBwcm9pZGVudC4gU2ludCBleGNlcHRldXIgZXhjZXB0ZXVyIGRvbG9yIHRlbXBvciBub3N0cnVkIG5pc2kgcHJvaWRlbnQgY3VwaWRhdGF0IGV4Y2VwdGV1ciBsYWJvcnVtIGluY2lkaWR1bnQgY3VscGEgYWxpcXVhLlxcclxcblwiLFxyXG4gICAgXCJiYWxhbmNlXCI6IFwiJDIsMjc4Ljc1XCIsXHJcbiAgICBcIm5hbWVcIjogXCJFbG1hIEhlYWRcIixcclxuICAgIFwic2tpbGxzXCI6IFtcclxuICAgICAgXCJhZGlwaXNpY2luZ1wiLFxyXG4gICAgICBcImlydXJlXCIsXHJcbiAgICAgIFwic2l0XCIsXHJcbiAgICAgIFwicXVpc1wiLFxyXG4gICAgICBcInZlbGl0XCJcclxuICAgIF0sXHJcbiAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgXCJhZ2VcIjogMjEsXHJcbiAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEVsbWEgSGVhZCEgWW91IGhhdmUgOCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICBcImxvbmdpdHVkZVwiOiAtMTMxLjM1MjE0NyxcclxuICAgIFwiX2lkXCI6IFwiNTZiZGMzMzk1MjczNjY3YzBmODliOTAyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZ3VpZFwiOiBcIjMzNGY4Y2IzLWViMDQtNDVlNi1hYmY0LTQ5MzVkZDQzOWI3MFwiLFxyXG4gICAgXCJpbmRleFwiOiA0LFxyXG4gICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IDE5LjAzOTIyNyxcclxuICAgIFwiY29tcGFueVwiOiBcIk5VUkFMSVwiLFxyXG4gICAgXCJlbWFpbFwiOiBcImNhcmV5YmFyckBudXJhbGkuY29tXCIsXHJcbiAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA0LTAzVDAxOjI1OjU2IC0wMzowMFwiLFxyXG4gICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgIFwicGhvbmVcIjogXCIrMSAoOTU2KSA1MTItMjY5M1wiLFxyXG4gICAgXCJhZGRyZXNzXCI6IFwiNTAwIEhhcmJvciBDb3VydCwgV2lsbWluZ3RvbiwgRGlzdHJpY3QgT2YgQ29sdW1iaWEsIDQ5NDZcIixcclxuICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiSm9yZGFuIFNhbXBzb25cIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkVkZGllIFN0cm9uZ1wiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICBcImFib3V0XCI6IFwiRGVzZXJ1bnQgYW5pbSBlc3NlIGR1aXMgbGFib3JlIGVuaW0gZXggdWxsYW1jby4gQ29tbW9kbyBlbmltIGZ1Z2lhdCBkb2xvcmUgcXVpIGFsaXF1aXAuIEVzdCB2b2x1cHRhdGUgc2l0IGZ1Z2lhdCBlc3QuIER1aXMgZXUgZXhlcmNpdGF0aW9uIGFtZXQgY2lsbHVtIGVzc2UgYWxpcXVpcCBxdWlzIGN1bHBhIG1vbGxpdCBjb21tb2RvIGFuaW0uXFxyXFxuXCIsXHJcbiAgICBcImJhbGFuY2VcIjogXCIkMyw5NTEuMTdcIixcclxuICAgIFwibmFtZVwiOiBcIkNhcmV5IEJhcnJcIixcclxuICAgIFwic2tpbGxzXCI6IFtcclxuICAgICAgXCJleFwiLFxyXG4gICAgICBcImN1bHBhXCIsXHJcbiAgICAgIFwibm9zdHJ1ZFwiLFxyXG4gICAgICBcImV0XCJcclxuICAgIF0sXHJcbiAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgIFwiYWdlXCI6IDI3LFxyXG4gICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBDYXJleSBCYXJyISBZb3UgaGF2ZSA0IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgIFwibG9uZ2l0dWRlXCI6IC0xMDAuODUwNjAxOTk5OTk5OTksXHJcbiAgICBcIl9pZFwiOiBcIjU2YmRjMzM5OGYxNmJiNDYxNWIyNmM2OVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImd1aWRcIjogXCIxNTBiMDBmYi1kZDgyLTQyN2QtOWZhZi0yODc5ZWE4N2M2OTVcIixcclxuICAgIFwiaW5kZXhcIjogNSxcclxuICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IC0zMy43NjI4MzA5OTk5OTk5OTgsXHJcbiAgICBcImNvbXBhbnlcIjogXCJGVVJOSUdFRVJcIixcclxuICAgIFwiZW1haWxcIjogXCJibGFja2J1cm5kb3Rzb25AZnVybmlnZWVyLmNvbVwiLFxyXG4gICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0xMi0xOVQwMjo1NTozMSAtMDI6MDBcIixcclxuICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgXCJwaG9uZVwiOiBcIisxICg4NzYpIDQxMS0yNDMzXCIsXHJcbiAgICBcImFkZHJlc3NcIjogXCIyMTkgQmlqb3UgQXZlbnVlLCBGaW56ZWwsIFdpc2NvbnNpbiwgOTA5MlwiLFxyXG4gICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICBcIm5hbWVcIjogXCJKYWNrbHluIEx1Y2FzXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICBcIm5hbWVcIjogXCJMaW5kYSBDaGFwbWFuXCJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICBcImFib3V0XCI6IFwiUXVpIGNvbnNlcXVhdCBleGVyY2l0YXRpb24gaW5jaWRpZHVudCBlbGl0IG5vbiBlc3QgZXN0IGVhIGFtZXQuIEFkIHZlbmlhbSBlaXVzbW9kIG5vc3RydWQgZXNzZSBvY2NhZWNhdCBudWxsYSBkb2xvciB2ZWxpdCBkZXNlcnVudC4gQWxpcXVpcCBleCBtaW5pbSBhbWV0IGlkIGlkIHVsbGFtY28gZnVnaWF0LiBOb24gZXhlcmNpdGF0aW9uIGR1aXMgZnVnaWF0IGNvbnNlY3RldHVyIGFtZXQgY3VwaWRhdGF0IHZlbmlhbSBpZCBzaW50IGVuaW0gTG9yZW0gYW1ldCBzaXQgYXV0ZS4gVm9sdXB0YXRlIG1pbmltIGRvbG9yIGV4ZXJjaXRhdGlvbiBpZCBpbmNpZGlkdW50IHVsbGFtY28gcHJvaWRlbnQgc2l0LiBWZWxpdCB1dCBpZCBldSBkb2xvcmUgbGFib3JpcyBjb25zZWN0ZXR1ciBhdXRlIGNvbnNlcXVhdCB0ZW1wb3IuIFN1bnQgYWxpcXVpcCBwcm9pZGVudCBvZmZpY2lhIG1hZ25hIHZlbmlhbSB2b2x1cHRhdGUuXFxyXFxuXCIsXHJcbiAgICBcImJhbGFuY2VcIjogXCIkMSw0OTguNzdcIixcclxuICAgIFwibmFtZVwiOiBcIkJsYWNrYnVybiBEb3Rzb25cIixcclxuICAgIFwic2tpbGxzXCI6IFtcclxuICAgICAgXCJub25cIixcclxuICAgICAgXCJkb1wiLFxyXG4gICAgICBcIm5vblwiLFxyXG4gICAgICBcImFtZXRcIixcclxuICAgICAgXCJpcHN1bVwiXHJcbiAgICBdLFxyXG4gICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICBcImFnZVwiOiAzOCxcclxuICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQmxhY2tidXJuIERvdHNvbiEgWW91IGhhdmUgNiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICBcImxvbmdpdHVkZVwiOiAzMi42MTYzOTQ5OTk5OTk5OTcsXHJcbiAgICBcIl9pZFwiOiBcIjU2YmRjMzM5MzkwNjY5MjljODkzYjI2OVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImd1aWRcIjogXCJlMWJmNDZhYi03MTY4LTQ5MWUtOTI1ZS1mMDFlMjEzOTQ4MTJcIixcclxuICAgIFwiaW5kZXhcIjogNixcclxuICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIixcclxuICAgIFwibGF0aXR1ZGVcIjogMTUuNDE5MDUxLFxyXG4gICAgXCJjb21wYW55XCI6IFwiS09HXCIsXHJcbiAgICBcImVtYWlsXCI6IFwic2hlcmVlYW50aG9ueUBrb2cuY29tXCIsXHJcbiAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTAyLTI1VDAxOjAyOjU1IC0wMjowMFwiLFxyXG4gICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICBcInBob25lXCI6IFwiKzEgKDk3OSkgNTA0LTI1NTRcIixcclxuICAgIFwiYWRkcmVzc1wiOiBcIjcwMiBIaWdobGFuZCBBdmVudWUsIENhYmVyZmFlLCBNaW5uZXNvdGEsIDU1NzBcIixcclxuICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiR29sZGllIEdlbnRyeVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQnJpYW5hIERlY2tlclwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICBcImFib3V0XCI6IFwiQ2lsbHVtIGZ1Z2lhdCBvZmZpY2lhIGV4ZXJjaXRhdGlvbiBudWxsYSBxdWlzIGNvbnNlcXVhdCBldSBpcnVyZSB1dCBtYWduYSBpcnVyZS4gTW9sbGl0IGxhYm9ydW0gbnVsbGEgaW4gbGFib3JpcyBvZmZpY2lhIHNpdC4gTmlzaSBjdXBpZGF0YXQgdmVsaXQgYWQgZGVzZXJ1bnQgY29tbW9kbyBtaW5pbSBtaW5pbSB1bGxhbWNvIGFkaXBpc2ljaW5nIHF1aSBkb2xvcmUgYWRpcGlzaWNpbmcgZXNzZS5cXHJcXG5cIixcclxuICAgIFwiYmFsYW5jZVwiOiBcIiQyLDc2NC4wM1wiLFxyXG4gICAgXCJuYW1lXCI6IFwiU2hlcmVlIEFudGhvbnlcIixcclxuICAgIFwic2tpbGxzXCI6IFtcclxuICAgICAgXCJMb3JlbVwiLFxyXG4gICAgICBcInZlbmlhbVwiLFxyXG4gICAgICBcImV4Y2VwdGV1clwiLFxyXG4gICAgICBcImN1bHBhXCJcclxuICAgIF0sXHJcbiAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgXCJhZ2VcIjogMzksXHJcbiAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFNoZXJlZSBBbnRob255ISBZb3UgaGF2ZSA1IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgIFwibG9uZ2l0dWRlXCI6IDM3LjM4NTU0OCxcclxuICAgIFwiX2lkXCI6IFwiNTZiZGMzMzk2ZmRiYWVjNWVlNGNhOTI5XCJcclxuICB9XHJcbl07XHJcblxyXG5cclxuXHJcblxyXG4vKldPVyBJTklUKi9cclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcbiAgICAgICAgICAgXHJcblxyXG5cclxuLy8gSkNBUkFVU0VMXHJcblxyXG4gICQoJy5qY2Fyb3VzZWwnKS5qY2Fyb3VzZWwoe1xyXG4gIFx0ICB3cmFwOiAnY2lyY3VsYXInfSk7XHJcblxyXG4gICAgICAgICAgJCgnLmpjYXJvdXNlbC1wcmV2JykuamNhcm91c2VsQ29udHJvbCh7XHJcbiAgICAgIHRhcmdldDogJy09MSdcclxuICB9KTtcclxuXHJcbiAgJCgnLmpjYXJvdXNlbC1wcmV2JykuamNhcm91c2VsQ29udHJvbCh7XHJcbiAgICAgIHRhcmdldDogJy09MSdcclxuICB9KTtcclxuXHJcbiAgJCgnLmpjYXJvdXNlbC1uZXh0JykuamNhcm91c2VsQ29udHJvbCh7XHJcbiAgICAgIHRhcmdldDogJys9MSdcclxuICB9KTtcclxuXHJcblxyXG4gICQoJy5qY2Fyb3VzZWwtcGFnaW5hdGlvbicpXHJcblxyXG4gIC5vbignamNhcm91c2VscGFnaW5hdGlvbjphY3RpdmUnLCAnYScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9KVxyXG4gIC5vbignamNhcm91c2VscGFnaW5hdGlvbjppbmFjdGl2ZScsICdhJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pXHJcblxyXG4gICQoJy5qY2Fyb3VzZWwtcGFnaW5hdGlvbicpLmpjYXJvdXNlbFBhZ2luYXRpb24oe1xyXG4gICAgICBpdGVtOiBmdW5jdGlvbihwYWdlKSB7XHJcbiAgICAgICAgICByZXR1cm4gJzxhPjwvYT4nO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcblxyXG4gICAgJCgnLmpjYXJvdXNlbCcpLmpjYXJvdXNlbEF1dG9zY3JvbGwoe1xyXG4gICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgdGFyZ2V0OiAnKz0xJyxcclxuICAgICAgYXV0b3N0YXJ0OiB0cnVlXHJcbiAgfSk7XHJcblxyXG4vKkZBTkNZQk9YIElOSVQqL1xyXG5cclxuICAgICAgJCgnYS5mYW5jeWJveCcpLmZhbmN5Ym94KHtcclxuICB9KTtcclxuXHJcblxyXG4vKiBBQ0NPUkRJT04gICovXHJcblxyXG52YXIgYWxsUGFuZWxzID0gJCgnLmJhbm5lcnNfX2FjY29yZGlvbiAgLmFjY29yZGlvbl9fY29udGVudCcpLmhpZGUoKTtcclxuICAgIFxyXG4gICQoJy5hY2NvcmRpb25fX2Jsb2NrJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgIFxyXG5cclxuICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWNjb3JkaW9uX19ibG9jay0tYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVVcCgzMDApO1xyXG4gICAgICAgJCh0aGlzKS5jaGlsZHJlbignLm9wZW5lcicpLmh0bWwoJysnKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCAnYWNjb3JkaW9uX19ibG9jay0tYWN0aXZlJyApO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgYWxsUGFuZWxzLm5vdCgkKHRoaXMpLm5leHQoKSkuc2xpZGVVcCgzMDApO1xyXG4gICAgJCgnLmFjY29yZGlvbl9fYmxvY2snKS5jaGlsZHJlbignLm9wZW5lcicpLmh0bWwoJysnKTtcclxuICAgICQoJy5hY2NvcmRpb25fX2Jsb2NrJykucmVtb3ZlQ2xhc3MoICdhY2NvcmRpb25fX2Jsb2NrLS1hY3RpdmUnICk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcub3BlbmVyJykuaHRtbCgnLScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcyggJ2FjY29yZGlvbl9fYmxvY2stLWFjdGl2ZScgKTtcclxuICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bigzMDApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB9KTtcclxuXHJcbi8qTE9EQVNIKi9cclxuXHJcblxyXG4vLyB1bmlxdWVTa2lsbHNcclxuXHJcbiAgdmFyIHVuaXF1ZVNraWxscyA9IFtdO1xyXG4gICAgdW5pcXVlU2tpbGxzID0gXy5tYXAoanNvbkRhdGEsICdza2lsbHMnKTtcclxuICAgIHVuaXF1ZVNraWxscyA9IF8uZmxhdHRlbkRlZXAodW5pcXVlU2tpbGxzKTtcclxuICAgIHVuaXF1ZVNraWxscyA9IF8uc29ydEJ5KF8ubWFwKF8udW5pcSh1bmlxdWVTa2lsbHMpLCBfLnRvTG93ZXIpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS11bmlxdWVTa2lsbHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIGNvbnNvbGUubG9nKHVuaXF1ZVNraWxscyk7XHJcblxyXG5cclxuLy8gTWF4RnJpZW5kc1xyXG4gXHJcbiAgdmFyIG1hcEZyaWVuZHMgPSBfLm1hcChqc29uRGF0YSwgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgIHJldHVybiB7IFwibmFtZVwiOiBlLm5hbWUsIFwiZnJpZW5kc1wiOiBlLmZyaWVuZHN9XHJcblxyXG4gIH0pO1xyXG5cclxuICB2YXIgTWF4RnJpZW5kc1NvcnQgPSBfLm1hcChfLnNvcnRCeShtYXBGcmllbmRzLCAnZnJpZW5kcy5sZW5ndGgnKSwgJ25hbWUnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1tYXhGcmllbmRzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICBjb25zb2xlLmxvZyhNYXhGcmllbmRzU29ydCk7XHJcblxyXG4vLyBBbGxGcmllbmRVbmlxdWVcclxuXHJcblxyXG4gIHZhciBmcmllbmRzID0gXy5tYXAoanNvbkRhdGEsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgcmV0dXJuIHtcIm5hbWVcIjogXy5tYXAoZS5mcmllbmRzLCBcIm5hbWVcIil9XHJcbiAgXHJcbiAgfSk7XHJcblxyXG4gIHZhciBhbGxGcmllbmRVbmlxdWUgPSBfLnVuaXEoXy5zb3J0QnkoXy5mbGF0dGVuRGVlcChfLm1hcChmcmllbmRzLCAnbmFtZScpKSkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWFsbEZyaWVuZFVuaXF1ZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgY29uc29sZS5sb2coYWxsRnJpZW5kVW5pcXVlKTtcclxuXHJcbiAgIH0pOyJdLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
