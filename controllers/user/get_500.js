const Company = require('../../models/company')

exports.post_500 = (req, res, next) => {
    const { name, ceo, sector, industry, hq, website, employees, revenue } = req.body

    const newCompany = new Company(name, ceo, sector, industry, hq, website, employees, revenue)
    newCompany.save((err, resp) => {
        console.log('POST ERROR-----', err)
        console.log('POST POST-----', err)
        res.status(201).json({
            message: "Company added"
        })
    })
}

exports.get_500 = async (req, res, next) => {
    await Company.fetchAll((err, data) => {
        console.log('GET DATA-----', data)
        console.log('GET ERROR-----', data)
        if(data.rows){
            res.status(200).json(data.rows)
        } else {
            res.status(200).json([])
        }
    })
}
