
minify:
	uglifyjs --compress --mangle --reserved CustomizeTwitterWidget customize-twitter-1.1.js > customize-twitter-1.1.min.js

copy:
	cp -rfv customize-twitter-1.1.min.js ~/code/mobile-first/js/vendor/
