var router = require('express').Router();

var serviceMarker = require('../collections/serviceType');
var serviceM = require('../collections/service');
// any url will start with /roles // lw 3`irna l enum 
router.get("/:serviceId", function (request, respone) {
    serviceMarker.find({ "ServiceNo": request.params.serviceId }).exec().then(serMarker => {
        return serviceM.find({ "serviceType": serMarker._id }).exec();
    }).then(_result => respone.json(_result)).catch(err => console.log(err));
});

module.exports = router; 
