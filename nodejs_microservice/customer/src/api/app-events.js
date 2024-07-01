const CustomerService = require("../services/customer-service");

module.exports = (app) => {
    
    const service = new CustomerService();
    app.use('/app-events',async (req,res,next) => {

        const { payload } = req.body;
        // console.log("babasankalp");

        //handle subscribe events
        service.SubscribeEvents(payload);

        console.log("============= Shopping ================");
        // console.log(payload);
        res.json(payload);
        // res.json()
        // res.json("sanklap");
    });

}
