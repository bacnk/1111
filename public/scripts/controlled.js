
$(".toggle-btn").click(function(){
    var firebaseRef = firebase.database().ref().child("Led1Status");
    if(Led1Status == "1"){
        firebaseRef.set("0");
        Led1Status = "0";
    } else {
        firebaseRef.set("1");
        Led1Status = "1";
    }
})