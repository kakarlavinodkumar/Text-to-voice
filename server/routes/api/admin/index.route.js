var O = {};
O.includeRoutes = function (router,mid_name){
    const student_routes = require("./student.route");

    router.use("/students",student_routes);
}

module.exports =O;