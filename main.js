canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
image_width = 30;
image_height = 30;
player_object = "";
image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        image_object = Img
        image_object.scaleToWidth(image_width);
        image_object.scaleToHeight(image_height);
        image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=="80"){
        console.log("p and shift is pressed together");
        image_width = image_width + 10;
        image_height = image_height + 10;
        document.getElementById("current_width").innerHTML = image_width;
        document.getElementById("current_height").innerHTML = image_height;
    }
    if(e.shiftKey==true && keyPressed=="77"){
        console.log("m and shift is pressed together");
        image_width = image_width - 10;
        image_height = image_height - 10;
        document.getElementById("current_width").innerHTML = image_width;
        document.getElementById("current_height").innerHTML = image_height;
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
    if(keyPressed=="70"){
        console.log("f");
        new_image("ironman_face.png");
    }
    if(keyPressed=="66"){
        console.log("b");
        new_image("spiderman_body.png");
    }
    if(keyPressed=="76"){
        console.log("l");
        new_image("hulk_legs.png");
    }
    if(keyPressed=="82"){
        console.log("r");
        new_image("thor_right_hand.png");
    }
    if(keyPressed=="72"){
        console.log("h");
        new_image("captain_america_left_hand.png");
    }
}
function up(){
    if(player_y>=10){
        player_y = player_y - image_height;
        console.log("when up is pressed x = " + player_x + " y = " + player_y + " image height = " + image_height + "  image width = " + image_width);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=450){
        player_y = player_y + image_height;
        console.log("when down is pressed x = " + player_x + " y = " + player_y + " image height = " + image_height + " image width = " + image_width);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x = player_x - image_width;
        console.log("when left is pressed x = " + player_x + " y = " + player_y + " image height = " + image_height + " image width = " + image_width);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x = player_x + image_width;
        console.log("when right is pressed x = " + player_x + " y = " + player_y + " image height = " + image_height + " \image width = " + image_width);
        canvas.remove(player_object);
        player_update();
    }
}