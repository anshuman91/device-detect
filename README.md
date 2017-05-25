# device-detect  - Light weight and easy to integrate

This library will let you know that which in which device you working on and you can target desktop, mobile, tablet specifically.

Include this file in your file's head tag
```
<script type="text/javascript" src="https://cdn.rawgit.com/anshuman91/device-detect/79b9374101da2f48d00724cd6dab5b109449274d/device-detect.min.js"></script>
```
# Usage
```
    // Call constructure
    var DD = new DeviceDetect();
    var isMobile = DD.isMobile;
    var isDesktop = DD.isDesktop;
    var isTablet = DD.isTablet;

    // TO check device type and name
    console.log(isMobile.any());
    console.log(isDesktop.any());
    console.log(isTablet.any());

    // Target mobile specific device
    console.log(isMobile.Android());
    console.log(isMobile.BlackBerry());
    console.log(isMobile.Opera());
    console.log(isMobile.Windows());


    // Target mobile tablet device
    console.log(isTablet.iPad());
    console.log(isTablet.Android());


    // Target browser name
    console.log(isDesktop.Opera());
    console.log(isDesktop.Firefox());
    console.log(isDesktop.Safari());
    console.log(isDesktop.IE());
    console.log(isDesktop.Edge());
    console.log(isDesktop.Chrome());
    console.log(isDesktop.Blink());```
