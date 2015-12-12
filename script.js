function Visibility(){
  var img = document.getElementById("mainPIpic");
  if(img.className != "hidden")
    img.className = "hidden";
}
window.onload = function()
    {
        document.getElementById("mainPIpic").addEventListener( 'click' , Visibility );
    }
