$(".submit").on("click", function(){
    var newReservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNumber: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_email').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };

 $.post("/api/reserve", newReservation)
.then(function(data) {
  console.log("reserations.html", data);
  alert("Adding reservations...");
});
});