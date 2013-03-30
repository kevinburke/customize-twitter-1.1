Add custom CSS to the Twitter 1.1 Widget

## Usage

Embed a Twitter Widget

```html
<a class="twitter-timeline" data-chrome="noheader noborders transparent nofooter" data-link-color="#8e1d08" data-dnt="true" href="https://twitter.com/ekrubnivek" data-widget-id="318106551330148352"></a>
```

Embed the Twitter Javascript, preferably in the footer, as it'll block
otherwise

```html
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
```

Afterwards, embed this custom JS

```html
<script src="customize-twitter-1.1.js" type="text/javascript"></script>
<script>
CustomizeTwitterWidget({
    "url": "/my-styles.css"
});
</script>
```

