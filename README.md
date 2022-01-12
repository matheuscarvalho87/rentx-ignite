# Cadastro de carros
**Requisitos funcionais**
Deve ser póssível cadastrar um novo carro.
Deve ser possível listar todas as categorias.
**Requisitos não funcionais**


**Regras de negócio**
Não deve ser possivel cadastrar um carro com uma placa ja existente.
O carro deve ser cadastrado com disponibilidade por padrão.
O usuário responsável pelo cadastro deve ser ser um usuário administrador.


# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema para listar os carros.

# Cadastro de especificação no carro

**RF**
Deve ser possível cadastrar uma nova especificação no carro.
Deve ser possível listar todas as especificações.
Deve ser possivel listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação no carro caso o mesmo não exista.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar uma nova imagem no carro.
Deve ser possivel listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de carros

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24horas.
Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro.
