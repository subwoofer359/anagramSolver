function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (result) {pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-xs-12\"\u003ELongest word is " + (pug_escape(null == (pug_interp = result.longestWordSize) ? "" : pug_interp)) + " letters long\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E";
for (var i = result.longestWordSize; i >= 0; i -= 1)
{
if (result.words[i]) {
// iterate result.words[i]
var pug_obj0 = result.words[i];
if ('number' == typeof pug_obj0.length) {

  for (var pug_index0 = 0, pug_length0 = pug_obj0.length; pug_index0 < pug_length0; pug_index0++) {
    var word = pug_obj0[pug_index0];

pug_html = pug_html + "\u003Cdiv class=\"col-xs-4 col-md-1\"\u003E" + (pug_escape(null == (pug_interp = word) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var pug_index0 in pug_obj0) {
    pug_length0++;
    var word = pug_obj0[pug_index0];

pug_html = pug_html + "\u003Cdiv class=\"col-xs-4 col-md-1\"\u003E" + (pug_escape(null == (pug_interp = word) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
  }

}

}
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"result" in locals_for_with?locals_for_with.result:typeof result!=="undefined"?result:undefined));;return pug_html;}