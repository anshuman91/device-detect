/*
* Author: Anshuman Mishra
* Version: 1.0
* Type: Full Version
* Created Date: 2016-Sep-22
* Call DeviceDetect
* Returns: Object Array
*/

(function() {
    DeviceDetect = (typeof DeviceDetect === "undefined") ? {} : DeviceDetect;

    DeviceDetect = function(){
        _this_device = this;
        // property for targetting only mobile devices.
        this.isMobile = { 
            // public method for targetting only Android device.
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            // public method for targetting only BlackBerry device.
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            // public method for targetting only IOS mobile device.
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPod/i);
            },
            // public method for targetting only IOS Opera mini device.
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            // public method for targetting only Windows mobile device.
            Windows: function() {
                return (navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/WPDesktop/i));
            },
            // public method for targetting any mobile device.
            any: function() {
                return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            }
        },
        // property for targetting only tablet devices.
        this.isTablet = {
            // public method for targetting only iPad device.
            iPad: function() {
                return navigator.userAgent.match(/iPad/i);
            },
            // public method for targetting only android tabs device.
            Android: function() {
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                if(width >= 481 && width <= 961)
                    return ["Android-Tablet"];
                else
                    return null;
            },
            // public method for targetting any tab devices.
            any: function() {
                return (this.Android() || this.iPad());
            }
        },
        // property for targetting only desktop devices.
        this.isDesktop = {
            // public method for targetting only Opera browser.
            Opera: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)
                    return ["Opera"];
                else
                    return null;
            },
            // public method for targetting only Firefox browser.
            Firefox: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(typeof InstallTrigger !== 'undefined')
                    return ["Firefox"];
                else
                    return null;
            },
            // public method for targetting only Safari browser.
            Safari: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0)
                    return ["Safari"];
                else
                    return null;
            },
            // public method for targetting only IE browser.
            IE: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(/*@cc_on!@*/false || !!document.documentMode)
                    return ["IE"];
                else
                    return null;
            },
            // public method for targetting only Edge browser.
            Edge: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(!this.IE() && !!window.StyleMedia)
                    return ["Edge"];
                else
                    return null;
            },
            // public method for targetting only Chrome browser.
            Chrome: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if(!!window.chrome && !!window.chrome.webstore)
                    return ["Chrome"];
                else
                    return null;
            },
            // public method for targetting only Blink browser.
            Blink: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                if((this.Chrome || this.Opera) && !!window.CSS)
                    return ["Blink"];
                else
                    return null;
            },
            // public method for targetting any browsers.
            any: function(){
                if(_this_device.isMobile.any())
                    return null;
                else if(_this_device.isTablet.any())
                    return null;

                return (this.Opera() || this.Firefox() || this.Safari() || this.IE() || this.Edge() || this.Chrome() || this.Blink());
            }
        }
    };
})();
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49271358-4', 'auto');
ga('send', 'pageview');
ga('send', {
  hitType: 'plugin-used',
  eventCategory: 'domain',
  eventAction: 'Page Refresh',
  eventLabel: top.window.document.domain
})
ga('send', {
  hitType: 'plugin-used',
  eventCategory: 'page-url',
  eventAction: 'Page Load',
  eventLabel: top.window.location.href
})
