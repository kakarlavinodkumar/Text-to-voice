var O = {};
O.includeRoutes = function (router,mid_name){
    const admin_route = require("../routes/api/admin/index.route").includeRoutes(router,"admin");
}

module.exports = O; 