let intro = document.getElementById('intro');
intro.textContent = 'Troy Williams. Aspiring Web Developer. Experienced Sales Executive.';

let skills = document.getElementById('skills');
skills.textContent = `Making things look pretty and writing quality code. Proficient with JavaScript, HTML, Bootstrap, and CSS. Intermediate AngularJS, Wordpress, and React Frameworks.
Experience with REST apis, Express, MongoDB and SQL.`;

let state = document.getElementById('state');
state.textContent = 'A double threat with a sales and account management background with early stage startup experience and the skills to build web applications.'

let invite = document.getElementById('invite');
invite.textContent = 'Want to chat? I know a few good coffee shops!';

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('ul').delegate('li', 'click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$(window).scroll(function() {
    var position = $(this).scrollTop();

    $('.section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');

        if (position >= target) {
            $('#nav > div > ul > li > a[href=#' + id + ']').addClass('active');
        }
    });
});