!function(o){Berserk.behaviors.tiles_angle_init={attach:function(i,s){992<=(window.innerWidth||o(window).width())&&o(i).parent().find(".brk-sc-tiles-angle:not(.rendered)").addClass("rendered").each(function(){var i=o(this),s=".brk-sc-tiles-angle__loading",t=".brk-sc-tiles-angle__top",n=".brk-sc-tiles-angle__bottom",e=i.find(t),a=i.find(n);e.hover(function(){o(this).siblings(n).addClass("no-active"),o(this).siblings(s).addClass("top-active")},function(){o(this).siblings(n).removeClass("no-active"),o(this).siblings(s).removeClass("top-active")}),a.hover(function(){o(this).siblings(t).addClass("no-active"),o(this).siblings(s).addClass("bottom-active")},function(){o(this).siblings(t).removeClass("no-active"),o(this).siblings(s).removeClass("bottom-active")})})}}}(jQuery);