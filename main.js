var name_of_characters=["Diluc","Kaeya","Hu Tao"];

var photo=["https://64.media.tumblr.com/586177fe380ef75f259393de46e97678/f3043e07fe8e5209-ae/s540x810/d32ae78e54fb590e925da3b1ae6514d8fcf76270.png"
,"https://pbs.twimg.com/media/Ejd18a4WsAACW8N.jpg","https://i.pinimg.com/736x/6b/7c/0b/6b7c0bafb24587a87fd49c56b501f2cf.jpg"];





var i = 0;

function update(){

i++;

var number_of_fam_members_in_array = 2;

if(i > number_of_fam_members_in_array )
{
    i = 0;
}

var updated_image = photo[i];
var updated_name = name_of_characters[i];

document.getElementById("images").src=updated_image;
document.getElementById("names").innerHTML=updated_name;

}