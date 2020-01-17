String.prototype.format = function() {
  var a = this;
  for (var k in arguments) {
    a = a.replace(new RegExp("\\{" + k + "\\}", "g"), arguments[k]);
  }
  return a;
};
$(document).ready(function() {
  $("#boton").click(function() {
    if (
      $("#nombre").val() == "" ||
      $("#apellido").val() == "" ||
      $("#dia").val() == "" ||
      $("#mes").val() == "sinValor" ||
      $("#ano").val() == "" ||
      $("#numeroDeIntegrantes").val() == "" ||
      $("#actividad").val() == "sinValor"
    ) {
      window.alert("Hacen falta datos para enviar la reserva.");
    } else {
      var nombreLine =
        "Nombre: " + $("#nombre").val() + " " + $("#apellido").val();
      var fechaLine =
        "Fecha: " +
        $("#dia").val() +
        "/" +
        $("#mes").val() +
        "/" +
        $("#ano").val();
      var numIntLine =
        "Numero de Integrantes: " + $("#numeroDeIntegrantes").val();
      var actLine = "Actividad: " + $("#actividad").val();
      Email.send({
        Host: "smtp.gmail.com",
        Username: "lizardcampsceif@gmail.com",
        Password: "lizardCAMPS123",
        To: "juansuarez@glm.edu.co, manuelaarroyave@glm.edu.co",
        From: "lizardcampsceif@gmail.com",
        Subject: "Reserva Lizard Camps",
        Body: "{0}<br/>{1}<br/>{2}<br/>{3}".format(
          nombreLine,
          fechaLine,
          numIntLine,
          actLine
        )
      }).then(function() {
        window.alert("Ha sido enviada tu reserva");
        $("#nombre").val("");
        $("#apellido").val("");
        $("#dia").val("");
        $("#mes").val("sinValor");
        $("#ano").val("");
        $("#numeroDeIntegrantes").val("");
        $("#actividad").val("sinValor");
      });
    }
  });
});
$;