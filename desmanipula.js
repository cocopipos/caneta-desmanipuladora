
function getReplacements(url) {
  var replacements = {
    "http://g1.globo.com/sao-paulo/noticia/2016/09/tem-depredacao-em-ato-e-querem-passar-que-pm-e-culpada-diz-alckmin.html":
      {
        "Alckmin": "Cagão",
        "Batata": "Tomate"
      }
  }
  return replacements[url];
}

var replacements = getReplacements("http://g1.globo.com/sao-paulo/noticia/2016/09/tem-depredacao-em-ato-e-querem-passar-que-pm-e-culpada-diz-alckmin.html");

Object.keys(replacements).forEach(function(key) {
  document.body.innerHTML =
  document.body.innerHTML.replace(new RegExp("(" + key + ")", "g"), '<strike>$1</strike><span style="color:red;">' + replacements[key] + '</span>');
});
