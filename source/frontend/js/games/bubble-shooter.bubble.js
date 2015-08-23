$(document).ready(function () {

  var BubbleShoot = window.BubbleShoot = window.BubbleShoot || {};

  function create (row, column, type) {

    var bubble = {};

    if(type === undefined){
      type = Math.floor(Math.random() * 4);
    }

    var sprite = $(document.createElement("div"));
    sprite.addClass("bubble");
    sprite.addClass("bubble_" + type);

    function getSprite() {
      return sprite;
    }

    function position () {
      return sprite.position();
    }

    function animate() {
      return sprite.animate.apply(sprite, arguments);
    }

    function getType() {
      return type;
    }

    function getRow() {
      return row;
    }

    function getColumn() {
      return column;
    }

    function getCoordinates(){
      var coordinates = {
        left: getColumn() * BubbleShoot.UI.BUBBLE_DIAMETER/2  + BubbleShoot.UI.BUBBLE_DIAMETER/2,
        top:  getRow()    * BubbleShoot.UI.ROW_HEIGHT     + BubbleShoot.UI.BUBBLE_DIAMETER/2
      };
      return coordinates;
    }

    function destroy() {
      console.log('bubble destroy');
      sprite.remove();
      sprite = null;
    }


    bubble.getSprite      = getSprite;
    bubble.position       = position;
    bubble.animate        = animate;
    bubble.getType        = getType;
    bubble.getRow         = getRow;
    bubble.getColumn      = getColumn;
    bubble.getCoordinates = getCoordinates;
    bubble.destroy        = destroy;

    return bubble;
  }

  BubbleShoot.Bubble        = {};
  BubbleShoot.Bubble.create = create;

});