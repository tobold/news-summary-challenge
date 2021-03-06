(function(exports){
  "use strict";

  function StoryView(story) {
    this._story = story;
  }

  StoryView.prototype = {
    toHtml: function() {
      var backButton = "<a class='button' href=#story/all>BACK</a><br>";
      var imageHtml = "<img class='thumbnail' src='" + this._story.url() + "'></br>";
      var titleHtml = "<h2>" + this._story.title() + "</h2></br>";
      var textHtml = "<p>" + this._story.text() + "</p></br>";
      var html = backButton + "<div id='story'>" + imageHtml + titleHtml + textHtml + "</div>";
      return html;
    }
  };

  exports.StoryView = StoryView;
})(this);
