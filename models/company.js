const db = require('../utils/database');
const { CreateTableIfExists, insertRow, selectAllTable } = require('../utils/queries')

module.exports = class Company {
    constructor({ name, ceo, sector, industry, hq, website, employees, revenue}, year) {
        this.name = name
        this.ceo = ceo
        this.sector = sector
        this.industry = industry
        this.headquaters = hq
        this.website = website
        this.employees = employees
        this.revenue = revenue
        this.year = year
    }

    save(cb, year) {
        const insertData = [this.name, this.ceo, this.sector, this.industry, this.headquaters, this.website, this.employees, this.revenue]

        db.query(CreateTableIfExists(year), () => {})
        return db.query(insertRow(year), insertData, cb)
    }

    static fetchAll(cb, year) {
        return db.query(selectAllTable(year), cb)
    }
}