const Company = require('../../models/company')

const postCompany = (middlewareObject, year) => {
    const { req, res, next } = middlewareObject

    const newCompany = new Company(req.body, year)
    newCompany.save((err, resp) => {
        res.status(201).json({
            message: "Company added"
        })
    }, year)
}

const getCompanies = (middlewareObject, year) => {
    const { req, res, next } = middlewareObject
    Company.fetchAll((err, data) => {
        if(data){
            res.status(200).json(data.rows)
        } else {
            res.status(200).json([])
        }
    }, year)
}

exports.post_2019 = (req, res, next) => {
    postCompany({req, res, next}, 2019)
}

exports.get_2019 = (req, res, next) => {
    getCompanies({req, res, next}, 2019)
}

exports.post_2018 = (req, res, next) => {
    postCompany({req, res, next}, 2018)
}

exports.get_2018 = (req, res, next) => {
    getCompanies({req, res, next}, 2018)
}

exports.post_2017 = (req, res, next) => {
    postCompany({req, res, next}, 2017)
}

exports.get_2017 = (req, res, next) => {
    getCompanies({req, res, next}, 2017)
}

exports.post_2016 = (req, res, next) => {
    postCompany({req, res, next}, 2016)
}

exports.get_2016 = (req, res, next) => {
    getCompanies({req, res, next}, 2016)
}

exports.post_2015 = (req, res, next) => {
    postCompany({req, res, next}, 2015)
}

exports.get_2015 = (req, res, next) => {
    getCompanies({req, res, next}, 2015)
}
