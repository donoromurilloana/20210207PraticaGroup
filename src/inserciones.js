db.empleados.drop()
db.empleados.insertMany([
    {
        id_:1, codEmpleado:100,
        nombre:"Antonio Pérez Sancho",
        sueldo:{ sueldodiario:40, diasTrabajados:36},
        fechaInicio: new Date("2020-10-15")
    },

    {id_:2, codEmpleado:101, nombre:"Mónica Mendoza Rojas", sueldo:{ sueldodiario:37, diasTrabajados:40},fechaInicio: new Date("2020-09-08")},
    {id_:3, codEmpleado:102, nombre:"Alberto Durán López", sueldo:{ sueldodiario:25, diasTrabajados:20},fechaInicio: new Date("2020-12-28")},
    {id_:4, codEmpleado:100, nombre:"Antonio Pérez Sancho", sueldo:{ sueldodiario:34, diasTrabajados:28},fechaInicio: new Date("2019-12-01")},
    {id_:5, codEmpleado:101, nombre:"Mónica Mendoza Rojas", sueldo:{ sueldodiario:35, diasTrabajados:34},fechaInicio: new Date("2018-09-17")},
    {id_:6, codEmpleado:102, nombre:"Alberto Durán López", sueldo:{ sueldodiario:42, diasTrabajados:35},fechaInicio: new Date("2019-10-13")},
    {id_:7, codEmpleado:106, nombre:"María Rivas Chavez", sueldo:{ sueldodiario:50, diasTrabajados:27},fechaInicio: new Date("2020-11-04")},
    {id_:8, codEmpleado:101, nombre:"Mónica Mendoza Rojas", sueldo:{ sueldodiario:35, diasTrabajados:42},fechaInicio: new Date("2019-11-13")},
    {id_:9, codEmpleado:100, nombre:"Antonio Pérez Sancho", sueldo:{ sueldodiario:47, diasTrabajados:38},fechaInicio: new Date("2019-01-25")},
    {id_:10, codEmpleado:106, nombre:"María Rivas Chavez", sueldo:{ sueldodiario:38, diasTrabajados:23},fechaInicio: new Date("2019-09-18")},
])
