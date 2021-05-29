var canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;

player_obj = " ";
block_obj = " ";

function playerUpdate()
{
  fabric.Image.fromURL ("https://static.wikia.nocookie.net/deathbattlefanon/images/f/fc/Gumball.png/revision/latest?cb=20200810181050", function (Img)
  {
    player_obj = Img;
    player_obj.ScaleToWidth(150);
    player_obj.ScaleToHeight(140);
    player_obj.set({top: player_y, left: player_x});
    canvas.add(player_obj);
  });
}

function newImage(get_image)
{
  fabric.Image.fromURL ( get_image, function (Img)
  {
    block_obj = Img;
    block_obj.ScaleToWidth(block_width);
    block_obj.ScaleToHeight(block_height);
    block_obj.set({top: player_y, left: player_x});
    canvas.add(block_obj);
  });
}

