const Company = require('../../models/company')

exports.get_500 = async (req, res, next) => {
    await Company.fetchAll((err, data) => {
        console.log(data)
        res.status(200)
    })
}
