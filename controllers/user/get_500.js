const Company = require('../../models/company')

exports.get_500 = (req, res, next) => {
    Company.fetchAll((err, data) => {
        res.status(200).json(data.rows)
    })
}
