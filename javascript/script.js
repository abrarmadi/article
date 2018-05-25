
function display(){

  $( ".content" ).css( "display", "none" );
  $( ".logos" ).css( "display", "none" );
  $( ".logo" ).css( "display", "none" );
  $( ".back" ).css( "display", "flex" );
  $( ".side-menu-content" ).css( "display", "block" );
  $( ".side-menu" ).css( "margin-left", "0" );
}
$(document).ready(function(){
  $('.side-logos').click(function(){
    var logos_id = $(this).attr('id');


    if(($('.logos').css("flex-direction")) == "column")
    {  $("html").animate({marginRight: "1000px"},70,function(){
       $( "html" ).css( "margin-right", ".5px" );
      display();})

    }

    switch (logos_id){
      case 'figures':

      $( ".details" ).css( "display", "none" );
      $( ".references" ).css( "display", "none" );
      $( ".related" ).css( "display", "none" );
      $( ".figures" ).css( "display", "block" );
        $( ".side-menu-content" ).css( "display", "block" );
      if(($('.logos').css("flex-direction")) == "column")
      {
        $( ".main-content" ).css( "text-align", "center" );
        $( ".side-menu" ).css( "height", "180vh" );
        $( ".side-menu-content" ).css( "height", "180vh" );
      }


      break;
      case 'references':
      if(($('.logos').css("flex-direction")) == "column")
      {
          $( ".main-content" ).css( "justify-content", "flex-start" );
      }

      $( ".details" ).css( "display", "none" );
      $( ".references" ).css( "display", "block" );
      $( ".related" ).css( "display", "none" );
      $( ".figures" ).css( "display", "none" );
      if(($('.logos').css("flex-direction")) == "column")
      {
        $( ".side-menu" ).css( "height", "85vh" );
        $( ".side-menu-content" ).css( "height", "85vh" );
      }

      break;
      case 'related':

      if(($('.logos').css("flex-direction")) == "column")
      {
          $( ".main-content" ).css( "justify-content", "flex-start" );
      }
      $( ".details" ).css( "display", "none" );
      $( ".references" ).css( "display", "none" );
      $( ".related" ).css( "display", "block" );
      $( ".figures" ).css( "display", "none" );
      if(($('.logos').css("flex-direction")) == "column")
      {
        $( ".side-menu" ).css( "height", "95vh" );
        $( ".side-menu-content" ).css( "height", "95vh" );
      }

      break;
      case 'details':
      if(($('.logos').css("flex-direction")) == "column")
      {
          $( ".main-content" ).css( "justify-content", "flex-start" );
      }
      $( ".details" ).css( "display", "block" );
      $( ".references" ).css( "display", "none" );
      $( ".related" ).css( "display", "none" );
      $( ".figures" ).css( "display", "none" );
        if(($('.logos').css("flex-direction")) == "column"){
        $( ".side-menu" ).css( "height", "85vh" );
        $( ".side-menu-content" ).css( "height", "85vh" );
      }
      break;
    }

  })

  $('.back').click(function(){
     $("html").animate({marginLeft: "1000px"},70,function(){

        $( "html" ).css( "margin-left", ".5px" );

         $( ".content" ).css( "display", "block" );
         $( ".logos" ).css( "display", "flex" );
         $( ".logo" ).css( "display", "inline-block" );
         $( ".back" ).css( "display", "none" );
         $( ".side-menu-content" ).css( "display", "none" );
         $( ".side-menu" ).css( "height", "8rem" );
         $( ".side-menu" ).css( "margin-left", "-70px" );
         $( ".main-content" ).css( "justify-content", "center" );
         $( ".main-content" ).css( "text-align", "left" );

     });

})
})
