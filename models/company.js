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

    save(cb) {
        db.query('CREATE TABLE IF NOT EXISTS in_2019 (id serial PRIMARY KEY, ceo VARCHAR (100) NOT NULL, sector VARCHAR (100) NOT NULL, industry VARCHAR (100) NOT NULL, hq VARCHAR (100) NOT NULL, website VARCHAR (100) NOT NULL, employees integer NOT NULL, revenue integer NOT NULL)', (err, data) => {
            
        })
        
        return db.query('INSERT INTO in_2019 (name, ceo, sector, industry, hq, website, employees, revenue) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [this.name, this.CEO, this.sector, this.industry, this.headquaters, this.website, this.employees, this.revenue], cb)
    }

    static fetchAll(cb) {
        return db.query('SELECT * FROM inn_2019', cb)
    }
}