jQuery(document).ready(function(){



  $(".rippleone").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.10
  });
  
  $(".words").typed({
    strings:["first sentence."],
    typespeed:0,
  })
  
});

