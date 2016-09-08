var CustomizeTwitterWidget = function(data) {
    // ie hack, http://stackoverflow.com/a/10183573/329700
    if(!(window.console && console.log)) {
      console = {
        log: function(){},
        debug: function(){},
        info: function(){},
        warn: function(){},
        error: function(){}
      };
    }

    var notNumeric = function(n) {
        return isNaN(parseFloat(n)) && isFinite(n);
    };

    var createCssElement = function(doc, url) {
        var link = doc.createElement("link");
        link.href = url;
        link.rel = "stylesheet";
        link.type = "text/css";
        return link;
    };

    var embedCss = function(doc, url) {
        var link = createCssElement(doc, url);
        var head = doc.getElementsByTagName("head")[0];
        head.appendChild(link);
    };

    var createStyleElement = function(doc, styleString) {
        var style = doc.createElement("style");
        style.setAttribute('type', 'text/css');
        style.textContent = styleString;
        //TODO: I don't think IE8 supports .textContent so might need to fallback to...
        //style.styleSheet.cssText = styleString; IE8?
        return style;
    };

    var embedStyle = function(doc, styleString) {
        var style = createStyleElement(doc, styleString);
        var head = doc.getElementsByTagName("head")[0];
        head.appendChild(style);
    };

    var contains = function(haystack, needle) {
        return haystack.indexOf(needle) >= 0;
    };

    var isTwitterFrame = function(frame) {
        return frame.frameElement.id.indexOf('twitter-widget') >= 0;
    }

    /**
     * The main event loop - calls itself if we haven't found all of the frames
     * yet.
     */
    var evaluate = function(framesWithStyles, widgetCount, timeoutLength) {
        for (var i = 0; i < frames.length; i++) {
            try {
                if (isTwitterFrame(frames[i]) &&
                    !contains(framesWithStyles, frames[i].name)
                ) {
                    if (data.internalStyle) {
                        embedStyle(frames[i].document, data.internalStyle);
                    } else {
                        embedCss(frames[i].document, data.url);
                    }
                    framesWithStyles.push(i);
                }
            } catch(e) {
                console.log("caught an error");
                console.log(e);
            }
        }

        if (framesWithStyles.length < widgetCount) {
            setTimeout(function() {
                evaluate(framesWithStyles);
            }, timeoutLength);
        }
    }

    if (data.url === undefined && !data.internalStyle) {
        console.log("need to specify a link to your CSS file or set inlineStyle. quitting");
        return;
    }
    var widgetCount;
    if (data.widget_count === undefined || notNumeric(data.widget_count)) {
        widgetCount = 1;
    } else {
        widgetCount = data.widget_count;
    }
    var timeoutLength;
    if (data.timeout_length === undefined || notNumeric(data.timeout_length)) {
        timeoutLength = 300;
    } else {
        timeoutLength = data.timeout_length;
    }

    setTimeout(function() {
        evaluate([], widgetCount, timeoutLength);
    }, timeoutLength);
}
