# Angular
Repositódio dedicado ao curso **"Angular: O Guia Definitivo das Principais Funcionalidades"**

<br>

## Comandos para Criar e Gerenciar Projetos Angular

Abaixo estão alguns comandos úteis para criar e gerenciar projetos Angular, incluindo a flag ```--standalone```:

### Criar um novo projeto Angular com a flag ```--standalone```
```
npx ng new meu-projeto --standalone
```

### Criar um componente standalone dentro do projeto

```
npx ng generate component meu-componente --standalone
```

### Criar um novo serviço
```
npx ng generate service meu-servico
```

### Criar um novo módulo
```
npx ng generate module meu-modulo
```

### Criar uma nova diretiva
```
npx ng generate directive minha-diretiva
```

### Criar um novo pipe
```
npx ng generate pipe meu-pipe
```

### Rodar o servidor de desenvolvimento (compila e serve a aplicação)
```
npx ng serve
```

### Construir o projeto para produção
```
npx ng build --prod
```

### Rodar os testes unitários (com Karma)
```
npx ng test
```

### Rodar os testes end-to-end (com Protractor)
```
npx ng e2e
```

### Instalar dependências do projeto (declaradas no ```package.json```)
```
npm install
```

### Atualizar o Angular CLI para a versão mais recente
```
npx ng update @angular/cli @angular/core
```

### Verificar a versão do Angular CLI local
```
npx ng version
```

### Adicionar um pacote ao projeto, por exemplo, o Angular Material
```
npx ng add @angular/material
```

### Criar um novo componente e adicionar um selector específico
```
npx ng generate component meu-componente --selector=app-meu-componente
```

### Criar um novo componente e associá-lo a um módulo específico
```
npx ng generate component meu-componente --module=card
```