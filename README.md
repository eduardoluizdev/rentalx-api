# Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.
- Dever ser possível listar todas as categorias.

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O Carro deve ser cadastrado, por padrão, com disponibilidade.
- O Usuário pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
- Deve ser possível listar todos os carros di sponíveis.
- Dever ser possível listar todos os carros disponíveis pelo nome da categoria.
- Dever ser possível listar todos os carros disponíveis pelo nome da marca.
- Dever ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
- O usuário não precisa estar logado no sistema.

# Cadastro de Especificação do carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Dever ser possível listar todos os carros.

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastar uma especificação já existente para o mesmo carro.
- O Usuário pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.


**RNF**
- Utilizar o multer para upload dos arquivos.

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O Usuário pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
- Deve ser possível cadastrar um aluguel.

**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel cada ja exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel cada ja exista um aberto para o mesmo carro.