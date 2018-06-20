// facebook API can either be initiated with jQuery or Require JS.
// all code written from here will be under the jQuery framework. 


/*
The Facebook SDK for JavaScript doesn't have any standalone files that need to be downloaded or installed, instead you simply need to include a short piece of regular JavaScript in your HTML that will asynchronously load the SDK into your pages. The async load means that it does not block loading other elements of your page.

The following snippet of code will give the basic version of the SDK where the options are set to their most common defaults. You should insert it directly after the opening <body> tag on each page you want to load it:
*/ 

// console.log("fb.js");
// // Initialize fb
// // FB.init(params);
// window.fbAsyncInit = function() {
//     FB.init({
//       appId            : "244913019595852",
//       autoLogAppEvents : true,
//       xfbml            : true,
//       version          : 'v3.0'
//     });
//     //Share dialog to write stories
//     FB.ui({
//       method: 'share',
//       href: 'https://developers.facebook.com/docs/'
//     }, function(response){});
//   };
//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));


// FB.ui({
//     method: 'share_open_graph',
//     action_type: 'og.likes',
//     action_properties: JSON.stringify({
//       object:'https://developers.facebook.com/docs/javascript/examples',
//     })
//   }, function(response){
//     // Debug response (optional)
//     console.log(response);
//   });
//   console.log(FB);
//   console.log(response);






















































/* Implementation
Method 1 - html + javascript/jQuery

<html>
<head>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
  <link rel="stylesheet" href="style.css" />
  <title>jQuery Example</title>
  <script>
    $(document).ready(function() {
      // Execute some code here
    });
  </script>
</head>
/* 


Method 2 - stricly javscript + jQuery. 
/*
$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '{your-app-id}',
      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });
});
*/ 