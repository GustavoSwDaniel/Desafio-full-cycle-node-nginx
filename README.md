# Desafio-full-cycle-node-nginx

Desafio proposto no curso Full Cycle curso de de docker.

O desafio é criar um aplicação nodejs e realizar o acesso via proxy reverso utilizando o nginx

Quando uma chamada for feita a aplicação, esta deverá salvar um registro no bando de dados (MySQL). Em seguida, a página deverá apresentar a mensagem Full Cycle Rocks!, em abaixo da mensagem uma lista com os registros do banco.

O Desfaio devera ser feito node mas será acessada pelo nginx através de um proxy reverso

---

### Para rodar a aplicação utilize o docker-compose.

```
docker-compose up -d 
```

---

### Para acessar, digite o seguinte endereço no navegador:

[http://localhost:8080/](http://localhost:8080/)
