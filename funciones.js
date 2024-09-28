function doGet()
{
    const html=HtmlService.createTemplateFromFile('Caratula');
    const salida=html.evaluate();
    return salida;
}

function include(nombArch)
{
    return HtmlService.createHtmlOutputFromFile(nombArch).getContent();
}

function DataAlumnos()
{
    const dataAlumnos=bdikasleDatuak.filter(ilara=>ilara[13]!=="BAJA")
    return dataAlumnos
}

function cambiaPsswAlumno(alumnoSelec)
{
    var werror=[];
   //OBTIENE CORREO DEL ALUMNO
  var ikasleF=bdikasleDatuak.filter(ilara=>ilara[0]==alumnoSelec)
  if(ikasleF.length>0)
  {
    var userKey=ikasleF[0][1];
    console.log("ikasleF[0]"+ ikasleF[0][0]+" "+ikasleF[0][1])
    var newpass={password:"ceec1234",changePasswordAtNextLogin: true};
    try
    {
        AdminDirectory.Users.update(newpass,userKey);
        werror.push(0,userKey);
    }
    catch
    {
        werror.push(1,userKey);
    }
  } 
  return werror;
}