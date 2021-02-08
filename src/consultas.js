db.empleados.aggregate([
    {
        $match: {
            $expr: {$gte:[{$year: "$fechaInicio"},2019]},
        } 
    },
    {
        $group: {
            _id:{
               año:{$year:"$fechaInicio"},
               mes:{$month:"$fechaInicio"},
            },
            sueldoTotal:{$sum:{$multiply:["$sueldo.sueldodiario","$sueldo.diasTrabajados"]}}
        }
    },
    {
        $project: {
           _id:0,
           año:"$_id.año",
           mes:"$_id.mes",
           Total:"$sueldoTotal",

        }
    },
    {
        $sort:{
            año:1,
            mes:1,
        }
    },
    {
        $match:{
            Total:{$gt: 1000}
        }
    }

])

