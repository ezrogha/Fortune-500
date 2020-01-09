const Company = require('../../models/company')

exports.get_500 = (req, res, next) => {
    Company.fetchAll()
        .then(([rows, fieldData]) => {
            res.status(200).json(rows)
        })
        .catch(err => {
            console.log(err)
        })
    
}
