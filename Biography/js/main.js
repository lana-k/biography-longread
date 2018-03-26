$(document).ready(function(){
    console.log("123");
    var controller = new ScrollMagic.Controller();
            
            var scene = new ScrollMagic.Scene({
                triggerElement:".part1",
                triggerHook: 0.0
                
            })
            .setClassToggle(".chapter1", "sticky");
            
            var scene2 = new ScrollMagic.Scene({
                triggerElement:".part2",
                triggerHook: 0.0
                
            })
            .setClassToggle(".chapter2", "sticky");
            
             var scene3 = new ScrollMagic.Scene({
                triggerElement:".part3",
                triggerHook: 0.0
                
            })
            .setClassToggle(".chapter3", "sticky");
            
             var scene4 = new ScrollMagic.Scene({
                triggerElement:".part4",
                triggerHook: 0.0
                
            })
            .setClassToggle(".chapter4", "sticky");
            
             var scene5 = new ScrollMagic.Scene({
                triggerElement:".part5",
                triggerHook: 0.0
                
            })
            .setClassToggle(".chapter5", "sticky");
            
             var scene6 = new ScrollMagic.Scene({
                triggerElement:".part6",
                triggerHook: 0.0
                
            })
            .setClassToggle(".chapter6", "sticky");
            
            controller.addScene(scene);
            controller.addScene(scene2);
            controller.addScene(scene3);
            controller.addScene(scene4);
            controller.addScene(scene5);
            controller.addScene(scene6);
});