import {useState, useEffect} from 'react';

import{
  Container, Heading, Box, VStack, FormControl, 
  FormLabel, Input, Button, Text, Divider, Flex, Badge
} from '@chakra-ui/react';

function App(){
  //livros= lista vazia de livros, setLivros = funcao para adicionar livros
  const [livros, setLivros] = useState([]);

  const [novoTitulo, setNovoTitulo] = useState('');
  const [novoAutor, setNovoAutor] = useState('');

  //equivalente ao initialize do java
  useEffect(()=>{
    //fetch eh o que vai comunicar com o backend
    fetch('http://localhost:3000/livros')
      .then(resposta => resposta.json()) //faz a resposta do back ser concertida pra json
      .then(dados => setLivros(dados)) //guarda os livros na variavel livros criada ali em cima
      .catch(erro=> console.error("Deu ruim na hora de buscar: ", erro));
  },[]);

  //Post livro
  const lidarComEnvio = (evento) => {
    //quando apertar em enviar a pagina nao vai acrregar gracas a essa linha aqui:
    evento.preventDefault();

    const pacote = {
      titulo: novoTitulo,
      autor: novoAutor
    };

    fetch('http://localhost:3000/livros', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'  //tamo mandando um json
      },
      body: JSON.stringify(pacote)
    })
      .then(resposta => resposta.json()) //faz a resposta do back ser concertida pra json
      .then(livroSalvo=> {
        setLivros([...livros, livroSalvo]) //guarda os livros na variavel livros criada ali em cima
        setNovoAutor(''); //limpa o campo do autor
        setNovoTitulo(''); //limpa o campo do livro
      })
      .catch(erro=> console.error("Deu ruim na hora de salvar: ", erro));
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading textAlign="center" color="teal.500">
          Playlists Literárias
        </Heading>

        <Box p={6} borderWidth="1px" borderRadius='lg' boxShadow="md" bg="white">
          <Heading size="md" mb={4}> 
            Cadastrar Novo Livro:
          </Heading>

          <form onSubmit={lidarComEnvio}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel> Titulo do livro: </FormLabel>
                <Input
                  placeholder="Ex: O Hobbit"
                  value={novoTitulo}
                  onChange={(e)=> setNovoTitulo(e.target.value)}
                  focusBorderColor="teal.400"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel> Autor do livro: </FormLabel>
                <Input
                  placeholder="Ex: J.R.R. Tolkien"
                  value={novoAutor}
                  onChange={(e)=> setNovoAutor(e.target.value)}
                  focusBorderColor="teal.400"
                />
              </FormControl>

              <Button type="submit" colorScheme="teal" width="full" mt={2}>
                Salvar Livro
              </Button>
            </VStack>
          </form>
        </Box>

        <Divider/>

        <Box>
          <Heading size="md" mb={4}>
            Livros já cadastrados
          </Heading>

          {livros.length === 0 ? (
            <Text color="gray.500">
              Nenhum livro encontrado...
            </Text>
          ):(
            <VStack spacing={3} align="stretch">
              {livros.map(livro => (
                <Flex key={livro.id} p={4} borderWidth={"1px"} borderRadius="md" align="center" justify="space-between" _hover={{ bg: "gary.50"}}>
                  <Box>
                    <Text fontWeight="bold" fontSize="lg">{livro.titulo}</Text>
                    <Text fontSize="sm" color="gray.600">por {livro.autor}</Text>
                  </Box>
                  <Badge colorScheme="purple"> Livro #{livro.id}</Badge>
                </Flex>
              ))}
            </VStack>
          )}
        </Box>

      </VStack>

    </Container>
  );

}

export default App;