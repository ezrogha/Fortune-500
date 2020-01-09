const db = require('../utils/database');

module.exports = class Company {
    constructor(name, CEO, sector, industry, headquaters, website, employees, revenue) {
        this.name = name
        this.CEO = CEO
        this.sector = sector
        this.industry = industry
        this.headquaters = headquaters
        this.website = website
        this.employees = employees
        this.revenue = revenue
    }

    save() {
        return db.execute('INSERT INTO in_2019 (name, ceo, sector, industry, headquaters, website, employees, revenue) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [this.name, this.CEO, this.sector, this.industry, this.headquaters, this.website, this.employees, this.revenue])
    }

    static fetchAll() {
        return db.execute('SELECT * FROM in_2019')
    }
}