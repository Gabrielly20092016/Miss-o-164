
// Importa a função normalizeTitle
const {normalizeTitle} = require ( '../../src/validation');


//Agrupa um bloco  de testes relacionados para manter a organazição 
describe ('Validação de tarefas',  () => {

test('Remove espaços do inicio e do fim do título', ()  =>{
    expect(normalizeTitle ('   Teste Unitário   ')).toBe('Teste Unitário');

});

test('retorna uma string vazia se o título for um número' ,() =>{
    expect(normalizeTitle( 12415844 )).toBe('');

});

test('retorna uma string vazia se o título for uma entrada nula', () =>{
    expect(normalizeTitle( null )).toBe('');
});

test('retorna uma string vazia se o título for uma entrada indefinido', () =>{
    expect(normalizeTitle( undefined )).toBe('');
});

});



//28/10/26

//Casos de testes para a função validateTaskInput

// Testa se o sistema gera um erro quando o título tem mais de 120 caracteres
test('Limitar o título a 120 caracteres', () => {
  const title = 'a'.repeat(121);

  expect(() => validateTaskInput({ title }))
    .toThrow('O título deve ter no máximo 120 caracteres.');
0});

// Testa se o sistema gera um erro quando o título está vazio
test('Se o título estiver vazio', () => {
  expect(() => validateTaskInput({ title: '' }))
    .toThrow('O título da tarefa é obrigatório.');

});

// Testa se os espaços em branco do início e do final são removidos 
test('Remover espaços do título', () => {
  expect(normalizeTitle('  estudar amanhã  '))
    .toBe('estudar amanhã');
});