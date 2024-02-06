APIS:

1. hotels
2. categories



import API calls need to add at the end:

register (post): localhost:3500/api/auth/register

{
    "username":"admin",
    "number":1234567890,
    "email":"admin@gmail.com",
    "password":"5655"

}

login post: localhost:3500/api/auth/register

{
    "number":5655,
    "password":"5655"
}

- get all hotels: ```http://localhost:3500/api/hotels```


- 