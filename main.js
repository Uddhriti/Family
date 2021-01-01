var Name=["Uttam Kumar Bhui", "Rita Bhui","Anuran Bhui","Uddhriti Bhui"];
var i=0;
var images=["Papa.jpg","Mamma.jpg","Dada.jpg","Me.jpg"];

function changeimage(){
  document.getElementById("FirstPerson"). src=images[i];
  document.getElementById("FirstName"). innerHTML=Name[i];
  i++;
  if (i==4)
{
  i=0
}


}        