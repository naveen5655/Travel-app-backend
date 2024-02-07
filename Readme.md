APIS:

1. hotels
2. categories


Run: npm run dev
Database related we will right in Model

import API calls need to add at the end:

1. register (post): localhost:3500/api/auth/register

{
    "username":"admin",
    "number":1234567890,
    "email":"admin@gmail.com",
    "password":"5655"

}

2. login post: ```localhost:3500/api/auth/login```

{
    "number":5655,
    "password":"5655"
}

- get all hotels: ```http://localhost:3500/api/hotels```

4. get all hotel category: ```http://localhost:3500/api/category```

5. get all based on category: ```http://localhost:3500/api/hotels?category=Tiny Homes```


- post whitlist: ```localhost:3500/api/wishlist```

```
  {
    "hotelId":"65ba5b955117669d5b87fafd"
}
```

Delete hotel: ```localhost:3500/api/wishlist/65c2e278fecb489679b0859c```  hotelid should take from mongoodb
- 


--------------------------------------------------------------------------------------->