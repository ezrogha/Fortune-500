RESTful API for the Fortune 500 companies

**Endpoints and Functionality:**

| Endpoint                                      | Functionality                                       |
| ---------                                     |---------------                                      |
| GET https://fortune-500.herokuapp.com/{year}  | Fetch the fortune 500 of a particular year          |

**Responses**

- `200 OK` on success

```json
[{
    "id": "<company Id>",
    "name": "<company Name>",
    "ceo": "<compnay CEO>",
    "sector": "<sector>",
    "industry": "<Industry type>",
    "hq": "<company Headquaters>",
    "website": "<company Website>",
    "employees": "<number of employees>",
    "revenue": "<revenue>"
}]
```

## Deployment
- [Heroku](https://fortune-500.herokuapp.com/)

## Technologies
- [NodeJs](https://nodejs.org/en/)
- [Postgresql](https://www.postgresql.org/)
