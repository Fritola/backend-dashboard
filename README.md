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

  Return all users <br>
  ### GET<br>
  https://vue-dashboard-api.herokuapp.com/user
    
  Return one user based on ID<br>
  ### GET<br>
  https://vue-dashboard-api.herokuapp.com/user/{id}
  
  Create user<br>
  ### POST<br>
  https://vue-dashboard-api.herokuapp.com/user <br>
    {
      "cpf": 123456, <br>
      "nome": "Name", <br>
      "email": "email@email.com", <br>
     "telefone": 12313213 <br>
    }
    
  Delete user based on ID <br>
  ### DELETE <br>
  https://vue-dashboard-api.herokuapp.com/user/{id} <br>
  
  Updated user based on ID <br>
  ### PUT <br>
  https://vue-dashboard-api.herokuapp.com/user/{id} <br>
  {
      "cpf": 123456, <br>
      "nome": "New name", <br>
      "email": "email2@email.com", <br>
     "telefone": 12313213
    }
  
