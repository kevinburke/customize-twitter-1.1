Add custom CSS to the Twitter 1.1 Embed Widget. [View a demo][demo]

[demo]: https://kevinburke.github.io/customize-twitter-1.1/

## Usage

Embed a Twitter Widget

```html
<a class="twitter-timeline"
    data-chrome="noheader noborders transparent nofooter"
    data-link-color="#8e1d08"
    data-dnt="true"
    data-widget-id="your-widget-id"
    href="https://twitter.com/ekrubnivek"></a>

```

Embed the Twitter Javascript, preferably in the footer

```html
<script>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
    js.src="//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);}
}(document,"script","twitter-wjs");
</script>
```

Embed the Customize-Twitter JS.

```html
<script src="customize-twitter-1.1.min.js" type="text/javascript"></script>
```

Finally, initialize the widget. This function will continue to call itself
until the Twitter iframe appears, no need for detecting the iframe load on your
end.

```html
<script>
var options = {
    "url": "/my-styles.css"
};
CustomizeTwitterWidget(options);
</script>
```

### Options

Pass these as key/value pairs to the `CustomizeTwitterWidget` function as you
see fit.

- **url**: A link to the custom CSS you want to inject into Twitter's iframe.
- **widget_count**: In case you have multiple Twitter widgets on a page, use
this to ensure the custom CSS gets embedded in all of them. (Default: 1)
- **timeout_length**: Specify a custom timeout length, in milliseconds.
(Default: 300)

### Tested Browsers

This plugin works for the stable versions of the following browsers:

- Chrome
- Firefox
- Opera
- Safari

As well as:

- Internet Explorer 10

Other browsers have not been tested yet. If you have feedback, please, send it!


