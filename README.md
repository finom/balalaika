Balalaika.js
=========
## The tiny DOM library
Balalaika provides you tiny replacement for huge DOM libraries such as jQuery and Zepto. It contains few methods which should be sufficient for vanilla.js developers.

### Where I can use it?
First of all you can use it as common library on the web page. Just paste this code to the ``head`` tag:
```html
<script>
$=(function(n,e,k,h,p,m,l,b,d,g,f,c){c=function(a,b){return new c.i(a,b)};c.i=function(a,d){k.push.apply(this,a?a.nodeType||a==n?[a]:""+a===a?/</.test(a)?((b=e.createElement(d||"div")).innerHTML=a,b.children):(d&&c(d)[0]||e).querySelectorAll(a):/f/.test(typeof a)?/c/.test(e.readyState)?a():c(e).on("DOMContentLoaded",a):a:k)};c.i[f="prototype"]=(c.extend=function(a){g=arguments;for(b=1;b<g.length;b++)if(f=g[b])for(d in f)a[d]=f[d];return a})(c.fn=c[f]=k,{on:function(a,d){a=a.split(h);this.map(function(c){(h[b=
a[0]+(c.b$=c.b$||++p)]=h[b]||[]).push([d,a[1]]);c["add"+m](a[0],d)});return this},off:function(a,c){a=a.split(h);f="remove"+m;this.map(function(e){if(b=(g=h[a[0]+e.b$])&&g.length)for(;d=g[--b];)c&&c!=d[0]||a[1]&&a[1]!=d[1]||(e[f](a[0],d[0]),g.splice(b,1));else!a[1]&&e[f](a[0],c)});return this},is:function(a){b=this[0];d=!!b&&(b.matches||b["webkit"+l]||b["moz"+l]||b["ms"+l]);return!!d&&d.call(b,a)}});return c})(window,document,[],/\.(.+)/,0,"EventListener","MatchesSelector");
</script>
```

Then use it anywhere on this web page:
```html
<script>
  $(function() {
    $('.my-selector').on('click', function() {
      alert('I need my balalaika');
    });
  });
</script>
```

The second kind of use is inside one script as local variable:
```js
(function($) {
  $(function() {
    $('.my-selector').on('click', function() {
      alert('I need my balalaika');
    });
  });
})((function(n,e,k,h,p,m,l,b,d,g,f,c){c=function(a,b){return new c.i(a,b)};c.i=function(a,d){k.push.apply(this,a?a.nodeType||a==n?[a]:""+a===a?/</.test(a)?((b=e.createElement(d||"div")).innerHTML=a,b.children):(d&&c(d)[0]||e).querySelectorAll(a):/f/.test(typeof a)?/c/.test(e.readyState)?a():c(e).on("DOMContentLoaded",a):a:k)};c.i[f="prototype"]=(c.extend=function(a){g=arguments;for(b=1;b<g.length;b++)if(f=g[b])for(d in f)a[d]=f[d];return a})(c.fn=c[f]=k,{on:function(a,d){a=a.split(h);this.map(function(c){(h[b=
a[0]+(c.b$=c.b$||++p)]=h[b]||[]).push([d,a[1]]);c["add"+m](a[0],d)});return this},off:function(a,c){a=a.split(h);f="remove"+m;this.map(function(e){if(b=(g=h[a[0]+e.b$])&&g.length)for(;d=g[--b];)c&&c!=d[0]||a[1]&&a[1]!=d[1]||(e[f](a[0],d[0]),g.splice(b,1));else!a[1]&&e[f](a[0],c)});return this},is:function(a){b=this[0];d=!!b&&(b.matches||b["webkit"+l]||b["moz"+l]||b["ms"+l]);return!!d&&d.call(b,a)}});return c})(window,document,[],/\.(.+)/,0,"EventListener","MatchesSelector"));
```

### Which methods are provided?
Balalaika extends ``Array.prototype``. It means Balalaika can use any method of native array.
```js
$('.my-selector').forEach(function(el) {
    console.log(el);
});
```

<ul>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" target="_blank">concat</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">join</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" target="_blank">pop</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">push</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">reverse</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">shift</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank">slice</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">sort</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">splice</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString"  target="_blank">toString</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" target="_blank">unshift</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" target="_blank">every</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">filter</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank">forEach</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" target="_blank">lastIndexOf</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">map</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank">some</a></li>
		</ul>
