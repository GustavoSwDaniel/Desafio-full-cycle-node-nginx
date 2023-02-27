# Desafio-full-cycle-node-nginx

Desafio proposto no curso Full Cycle de docker.

O desafio consiste em apresentar uma mensagem na tela utilizando nginx com node.js.

Quando uma chamada for feita a aplicação, esta deverá salvar um registro no bando de dados (MySQL). Em seguida, a página deverá apresentar a mensagem Full Cycle Rocks!, logo abaixo uma lista com os registros do banco.

O Desfaio devera ser feito node mas será acessada pelo nginx através de um proxy reverso

---

### Para rodar a aplicação utilize o docker-compose.

```
docker-compose up -d 
```

---

### Para acessar, digite o seguinte endereço no navegador:

[http://localhost:8080/](http://localhost:8080/)
