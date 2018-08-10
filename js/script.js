(function (window) {
var names = ["Gyan", "John", "Jet", "Jackson", "Parnav", "Vijay", "Abhishek", "Ashok", "Ajay", "Jimmy"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);