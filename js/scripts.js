
$(document).ready(function(){$('.sub-nav').on('click',function(){$('.side-nav').toggleClass('isClosed');$('.page-wrapper').toggleClass('isOpen');});$('.closing').on('click',function(){$('.side-nav').toggleClass('isClosed');$('.page-wrapper').toggleClass('isOpen');});$(document).keyup(function(e){if(e.keyCode===27){$('.page-wrapper').removeClass('isOpen');}});$("#about-me-tabs").tabs({active:1,collapsible:true,});});

$(document).ready(function(){$(".sub-nav").on("click",function(){$(".side-nav").toggleClass("isClosed"),$(".page-wrapper").toggleClass("isOpen")}),$(".closing").on("click",function(){$(".side-nav").toggleClass("isClosed"),$(".page-wrapper").toggleClass("isOpen")}),$(document).keyup(function(e){27===e.keyCode&&$(".page-wrapper").removeClass("isOpen")}),$("#about-me-tabs").tabs({collapsible:!0,active:!1})});

$(".expand").click(function(){$expand=$(this);$content=$expand.(".about-me-collapse");$content.slideToggle(500,function(){$expand.text(function(){return $content.is(":visible")?"Hide Explanation":"Show Explanation";});});});

$(document).ready(function(){$('.sub-nav').on('click',function(){$('.page-wrapper').toggleClass('isOpen');});$('.closing').on('click',function(){$('.page-wrapper').toggleClass('isOpen');});});