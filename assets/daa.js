

$(document).ready(function() {

  $(".blog-item").removeAttr("aria-hidden");
    $("a.drawer__logo").attr("aria-label","drawer logo");
  $("a.footer-content__logo__image").attr("aria-label","Jadeyoga logo, homepage");
$("h1.logo").attr("sr-only","Jade Yoga logo, nature’s best yoga mat, homepage");

  $("#shopify-section-header > header > div.wrapper.is-moved-by-drawer > h1").attr("aria-label","Jade Yoga logo, nature’s best yoga mat, homepage");
  $("iframe[src='https://www.youtube.com/embed/JIjmbMlzp9I']").removeAttr("frameborder");
  
    $("iframe[src='https://www.youtube.com/embed/JIjmbMlzp9I']").attr("title","Knut | Get up, stand up!");
  $("iframe[src='https://www.youtube.com/embed/JIjmbMlzp9I']").css("border: 0px");  
  $("iframe[src='https://docs.google.com/forms/d/e/1FAIpQLSdAjSvPIY-M8mtWEonU_bZ73lCMiLuDKNrgKFrMA6oG_r4ltw/viewform?embedded=true']").removeAttr("frameborder");
  $("iframe[src='https://docs.google.com/forms/d/e/1FAIpQLSdAjSvPIY-M8mtWEonU_bZ73lCMiLuDKNrgKFrMA6oG_r4ltw/viewform?embedded=true']").removeAttr("marginwidth");
    $("iframe[src='https://docs.google.com/forms/d/e/1FAIpQLSdAjSvPIY-M8mtWEonU_bZ73lCMiLuDKNrgKFrMA6oG_r4ltw/viewform?embedded=true']").removeAttr("marginheight");
   
  $("iframe[src='https://docs.google.com/forms/d/e/1FAIpQLSdAjSvPIY-M8mtWEonU_bZ73lCMiLuDKNrgKFrMA6oG_r4ltw/viewform?embedded=true']").css("border: 0px");
  $("iframe[src='https://docs.google.com/forms/d/e/1FAIpQLSdAjSvPIY-M8mtWEonU_bZ73lCMiLuDKNrgKFrMA6oG_r4ltw/viewform?embedded=true']").attr("title","google forms");
  
$("a[href='https://www.si.com/edge/2017/06/29/best-yoga-mats-2017']").attr("aria-label","sports illustrated company logo,redirects to external sports illustrated company website");
$("a[href='https://www.nytimes.com/wirecutter/reviews/best-yoga-mat']").attr("aria-label","new york times company logo,redirects to external new yrok times website");
$("a[href='https://www.nbcnews.com/shopping/wellness/jade-yoga-harmony-mat-n1258806']").attr("aria-label","nbc news company logo,redirects to external nbc company website");
   $("a[href='https://www.self.com/gallery/best-of-wellness-march-2020']").attr("aria-label","self company logo,redirects to external self company website");
 $("a[href='https://www.hgtv.com/lifestyle/health-and-wellness/jade-harmony-yoga-mat-review']").attr("aria-label","hgtv company logo,redirects to external hgtv company website");
$("a[href='https://www.businessinsider.com/guides/jade-yoga-grass-mat-review']").attr("aria-label","business insider company logo,redirects to external business insider website");
$("a[href='https://www.shape.com/fitness/gear/jade-harmony-eco-friendly-yoga-mat?fbclid=IwAR1A7VHRtnQj2HMiDGmovliBMNM6FtcrI8liw1GLdrRYlkSoTp_LrkI7uYo']").attr("aria-label","shape company logo,redirects to shape company logo");
$(".video__iframe").attr("aria-label","video regarding how to clean your mat");
  $("a[href='https://youtu.be/6ZklMBhCW20']").attr("aria-label","watch now, video on how to clean your mat, link to external website YouTube");
  $("a[href='/pages/faq']").attr("aria-label","FREE GROUND SHIPPING ON RETAIL ORDERS OVER $64.95 and  link goes to the FAQ page");

  $("a[href='/blogs/news/2020-holiday-gift-guide']").attr("aria-label","2020 Holiday Gift Guide: Gifts for Yoga Lovers Jade yoga holiday gift guide image");
 $("a[href='/blogs/news/2020-holiday-giving']").attr("aria-label","2020 Holiday Giving by JadeYoga support center for child advocates image");
 $("a[href='/blogs/news/three-steps-to-making-your-studio-carbon-neutral']").attr("aria-label","Three Steps to Making Your Studio Carbon Neutral ,Be the change make your studio carbon neutral");


  //images alt tags for search images

 

  $("a[href='/products/recycled-cotton-yoga-blanket']").parent().parent().attr("aria-label","yoga blanket");
 $("a[href='/products/plant-based-mat-wash-8-ounces']").parent().parent().attr("aria-label","mat wash");
 $("a[href='/products/jadeyoga-starter-kit']").parent().parent().attr("aria-label","starter kit");
   $("a[href='/products/voyager-mat']").parent().parent().attr("aria-label","voyager mat");

  $("#CartDrawer > div.drawer__header > div").attr("tabindex","0");
  $("#CartDrawer > div.drawer__header > button").attr("tabindex","0");
  $(".featured-image__content-inner>h2").attr("tabindex",0);
  $(".featured-image__content-inner>h3").attr("tabindex",0);
  $(".list-collections__item__btn-wrapper>span").attr("tabindex","0");

  try{
    document.querySelectorAll("a[href='/cart']")[1].addEventListener('click', function(e) {
    $("#CartDrawer > div.drawer__header > div").focus();
      console.log( $("#CartDrawer>div.drawer__header>div"));
      console.log("cart focus");
});
  }
  catch(err)
  {
    
  }

  
 //$("a[href='/products/recycled-cotton-yoga-blanket']").attr("aria-label","yoga blanket, link menu item one of five");
 $("a[href='/products/plant-based-mat-wash-8-ounces']").attr("aria-label","mat wash, link menu item one of three");
 $("a[href='/products/jadeyoga-starter-kit']").attr("aria-label","starter kit, link menu item one of eight");
  $("#shopify-section-footer > footer > div.footer-content.wrapper > div.footer-blocks.footer-blocks--3 > div:nth-child(2) > div > ul > li:nth-child(2) > a").attr("aria-label","F-A-Q link");
$("div.mobile-menu").attr("tabindex","-1");
$("div.drawer__title").attr("tabindex","-1");
$("ul.mobile-nav").attr("tabindex","-1");
$("ul.mobile-nav--bottom").attr("tabindex","-1");

  $("#NavDrawer>div>div>a").attr("tabindex","-1");

$("ul.mobile-nav>li.mobile-nav__item>a").attr("tabindex","-1");

$("li.mobile-nav__item>a").attr("tabindex","-1");
$("li.mobile-nav__item>button").attr("tabindex","-1");
  $("drawer__header>button").attr("tabindex","-1");

  $("#NavDrawer > div > button").attr("tabindex","-1");

  $("div.navdrawer__header").attr("tabindex","-1");
  $("button.drawer__close-button>span").attr("tabindex","-1");

  
  $("button.drawer__close-button").click(function(){
  console.log("The paragraph was clicked.");
    $("#AccessibleNav > li.nav__item.nav__item--default.nav__item--icons > ul > li:nth-child(3) > a").focus();
});

  document.querySelector("#FeaturedImage--16280254022ec4053f > div.featured-image__content.featured-image__content--center-center > div > h3").setAttribute("sr-only"," 2,444,585 Trees Planted & Counting! Thanks to your support, we've planted more than 2 million trees through our partnership with Trees For The Future.  For every single product we sell, we plant a tree so you can feel good about your purchase from JadeYoga.");
  try{
    document.querySelectorAll(".megamenu__links--level-3")[1].setAttribute("sr-only","yoga blanket");
  }
  catch(err)
  {
    console.log(err);
  }
 
  
   function GenerateAriaLabelForPopup()
    {
     if($("a[href='https://youtu.be/6ZklMBhCW20']").length)
     {
    console.log("Element found"); 
      $("a[href='https://youtu.be/6ZklMBhCW20']").attr("aria-label","watch now, video on how to clean your mat, link to external website YouTube");
       console.log( $("a[href='https://youtu.be/6ZklMBhCW20']").attr("aria-label"))
        $("#shopify-section-header > header > div.wrapper.is-moved-by-drawer > h1").attr("aria-label","Jade Yoga logo, nature’s best yoga mat, homepage");
  
       clearInterval(Intervaltime);
       console.log("element fixed and aria label added");
     }
      
     }
    try{
    Intervaltime =setInterval(GenerateAriaLabelForPopup, 4000);
 
      
    }
    catch(err)
    {
    }


    function GenerateAriaLabelForImages()
    {
     if($("div.omega__autocomplete").parent().is(":visible"))
     {
    console.log("Element found"); 
     $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade2022Calendarfulllowres-pages-1.jpg?v=1652797402']").attr("alt","jade yoga calender");
   $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Mat-Wash-32oz.jpg?v=1653926025']").attr("alt","Best natural mat cleaner");
   $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Mats-Cork-Blocks.jpg?v=1653904074']").attr("alt","yoga blocks");
 $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/YSPGD.jpg?v=1664980318']").attr("alt","Grateful Dead yoga strap");
 $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/CYBLGDwithwraplabel.jpg?v=1664979743']").attr("alt","Grateful Dead Cork Yoga Block");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade_Starter_Kit_-_Holiday.jpg?v=1664817288']").attr("alt","Yoga starter kit for beginners");
  $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Recycled-Sari-Mat-Bag.jpg?v=1654079502']").attr("alt","Recycled sari yoga mat ");

 $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Organic-Cotton-Mysore-Yoga-Rug-Cover.jpg?v=1653925404']").attr("alt","organic cotton mysore yoga rug");
 $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Recycled-Cotton-Blanket-All-Folded-White.jpg?v=1653979996']").attr("alt","recycled cotton yoga blanket");
 $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Cotton-Yoga-Strap-All.jpg?v=1654097455']").attr("alt","Yoga Strap with Thick Durable Cotton & Extra Safe Adjustable");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Recycled-Cotton-Blanket-All-Folded-White.jpg?v=1653979996']").attr("alt","Yoga and Meditation Blanket – Recycled cotton blanket");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Cotton-Yoga-Strap-All.jpg?v=1654097455']").attr("alt","Yoga Strap with Thick Durable Cotton & Extra Safe Adjustable");

$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Dharba-Grass-Yoga-Meditation-Mat-Cover.jpg?v=1652799161']").attr("alt","Meditation Mats – Handwoven Dharba Grass Mats");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/9159.jpg?v=1654079681']").attr("alt","recycled sari yoga rug");


       $("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Jade-Yoga-Recycled-Sari-Mat-Bag.jpg?v=1654079502']").attr("alt","recycled sari mat bag");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/crowbear.jpg?v=1664981051']").attr("alt","grateful dead yogi bears");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/products/Hand_Towel_Olive.jpg?v=1653318689']").attr("alt","non slip and quick drying yoga hand towel");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/collections/yoga-towels_100x.jpg?v=1654684731']").attr("alt","yoga Towels – Microfiber Towels for Yoga Beginners and Experts");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/collections/3686_8456595f-3ebe-4abd-addd-cc8bcf526b97_100x.jpg?v=1654686399']").attr("alt","yoga Rugs – Eco Friendly with no chemicals");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/collections/SK2_4348_2_small_d121798c-fd9e-453b-8ef9-7a9e8c2a0f75_100x.jpg?v=1654755472']").attr("alt","Mat Wash – Plant Made with anti-oxidants");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/collections/6825_-_collection_100x.jpg?v=1654755073']").attr("alt","Straps for All yoga practices");
$("img[src='https://cdn.shopify.com/s/files/1/0763/3069/collections/2506_100x.jpg?v=1654755331']").attr("alt","yoga blosters");







       
       
     //  clearInterval(Intervaltime2);
    
       console.log("element fixed and aria label added to images");
     }
      
     }
    try{
    Intervaltime2 =setInterval(GenerateAriaLabelForImages, 1000);
 
      
    }
    catch(err)
    {
    }
  
  

  $("#ListCollections--collection-list > div > div > div > div:nth-child(1) > a").attr("aria-label","Yoga Mats – EcoFriendly and Chemical Free");
  $("#ListCollections--collection-list > div > div > div > div:nth-child(2) > a").attr("aria-label","Yoga props");
  $("#ListCollections--collection-list > div > div > div > div:nth-child(3) > a").attr("aria-label","Yoga accessories");
  $("#ListCollections--collection-list > div > div > div > div:nth-child(4) > a").attr("aria-label","Jade Gear");
 
 //$("#shopify-section-announcement-bar > div > div.top-bar.wrapper > div > div > div > div > a").attr("tabindex","1");
                 



 $("h1.logo").attr("aria-label","Jade Yoga logo, nature’s best yoga mat, homepage");
  
    console.log( "ready!" );

});

!function(){function e(){var e=((new Date).getTime(),document.createElement("script"));e.type="text/javascript",e.async=!0,e.setAttribute("embed-id","5d22f0f6-deb0-450d-b0f1-abee5617b621"),e.src="https://embed.adabundle.com/embed-scripts/5d22f0f6-deb0-450d-b0f1-abee5617b621";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}var t=window;t.attachEvent?t.attachEvent("onload",e):t.addEventListener("load",e,!1)}();