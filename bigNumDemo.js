g.clear();

require("https://github.com/abhinavgolwalkar/banglejs-fonts/blob/master/num40x58.js").add(Graphics);

g.setNum40x58();

g.setColor(1,0,1);
let num = 1;
function tt(){
  g.clear();
  g.drawString(num,(g.getWidth()/2)-20,(g.getHeight()/2)-29);
  num++;
}
setInterval(tt,1000);




