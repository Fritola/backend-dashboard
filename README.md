Backend from: https://github.com/Fritola/dashboard-frontend

## Project setup
```
yarn install
```

### Compiles and start nodemon
```
yarn dev
```

Project using Node+express and MongoDB

## Endpoints

  Return all users
  GET
  https://vue-dashboard-api.herokuapp.com/user
    
  Return one user based on ID
  GET
  https://vue-dashboard-api.herokuapp.com/user/{id}
  
  Create user
  POST
  https://vue-dashboard-api.herokuapp.com/user
    {
      "cpf": 123456,
      "nome": "Name",
      "email": "email@email.com",
     "telefone": 12313213
    }
    
  Delete user based on ID
  DELETE
  https://vue-dashboard-api.herokuapp.com/user/{id}
  
  Updated user based on ID
  PUT
  {
      "cpf": 123456,
      "nome": "New name",
      "email": "email2@email.com",
     "telefone": 12313213
    }
  https://vue-dashboard-api.herokuapp.com/user/{id}
  
