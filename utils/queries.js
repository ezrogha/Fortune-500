exports.CreateTableIfExists = (year) => {
    return `CREATE TABLE IF NOT EXISTS in_${year} (id serial PRIMARY KEY, name VARCHAR (100) NOT NULL, ceo VARCHAR (100) NOT NULL, sector VARCHAR (100) NOT NULL, industry VARCHAR (100) NOT NULL, hq VARCHAR (100) NOT NULL, website VARCHAR (100) NOT NULL, employees integer NOT NULL, revenue integer NOT NULL)`
}

exports.insertRow = (year) => {
    return `INSERT INTO in_${year} (name, ceo, sector, industry, hq, website, employees, revenue) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
}

exports.selectAllTable = (year) => {
    return `SELECT * FROM in_${year}`
}
