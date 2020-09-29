
$(document).ready(function(){
// search box citysuggestion
  $("#search-box").keyup(function(){
    $("#checkboxes").hide();
    $.ajax({
    type: "POST",
    url: "includes/search_suggestion.php",
    data:'keyword='+$(this).val(),
    beforeSend: function(){
      $("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
    },
    success: function(data){
      $("#suggesstion-box").show();
      $("#suggesstion-box").html(data);
      $("#search-box").css("background","#FFF");
    }
    });
  });
});

function selectCity(val) {
$("#search-box").val(val);
$("#suggesstion-box").hide();
}

//expand propperty_ type
var expanded = false;
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");

  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

var expanded1 = false;

function showCheckboxes2() {
  var checkboxes2 = document.getElementById("checkboxes2");
  if (!expanded1) {
    checkboxes2.style.display = "block";
    expanded1 = true;
  } else {
    checkboxes2.style.display = "none";
    expanded1 = false;
  }
}
/*for residential*/
var outer1 = document.getElementById("one1");
var inners1 = document.querySelectorAll("input.resi_check");
outer1.addEventListener("click",resident);
function resident(e)
{
  if(e.target.checked) {
    for(i = 0; i < inners1.length; i++) {
      inners1[i].checked = true;
    }
  }
    else {
      for(var i = 0; i < inners1.length; i++) {
      inners1[i].checked = false;
    }
    }
  }


for(var i=0;i<inners1.length;i++)
{
  inners1[i].addEventListener("click",change1);
}
function change1(e){
  

  if(e.target.checked){
    
    outer1.checked = true;
  }
  else{
    var inner1_checked = document.querySelectorAll("input.resi_check:checked");
    if(inner1_checked.length === 0) {
    outer1.checked = false;
    }
  }
}
/*for commercial*/

var outer2 = document.getElementById("two2");
var inners2 = document.querySelectorAll("input.com_check");
outer2.addEventListener("click",commercial);
function commercial(e)
{
  if(e.target.checked) {
    for(i = 0; i < inners2.length; i++) {
      inners2[i].checked = true;
    }
  }
    else {
      for(var i = 0; i < inners2.length; i++) {
      inners2[i].checked = false;
    }
    }
  }


for(var i=0;i<inners2.length;i++)
{
  inners2[i].addEventListener("click",change2);
}
function change2(e){
  

  if(e.target.checked){
    
    outer2.checked = true;
  }
  else{
    var inner2_checked = document.querySelectorAll("input.com_check:checked");
    if(inner2_checked.length === 0) {
    outer2.checked = false;
    }
  }
}

//project is selected in search box the property type is changed to select project dropdown
  $(document).ready(function(){
    if($(".q").val()=='Project'){
      $("#property_select").hide();
       $("#checkboxes").hide();

    } 
 $("#buyrentdrpdwn").change(function(){
    if($("#buyrentdrpdwn").val() == 'Project'){
       $("#project_select").show();
      $("#property_select").hide();
       $("#checkboxes").hide();
      $('[type=checkbox]').prop('checked', false); 
    }  else{
       $("#project_select").hide();
      $("#property_select").show();
      $('[type=checkbox]').prop('checked', true);
    }
      if($("#buyrentdrpdwn").val() == 'Rent' || $("#buyrentdrpdwn").val() == 'Rent'){
       $("#property_select").show();
      $("#project_select").hide();
       $("#checkboxes").hide();
      
    } 

});
  });
