const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

console.log(`The ${reader.name} ${reader.lastName}'s favorite book calls ${reader.favoriteBooks[0].title}.`)


reader.favoriteBooks.push({
title:'Harry Potter e o Prisioneiro de Azkaban',
author:'JK Rowling',
publisher:'Rocco',
})
console.log(reader.favoriteBooks)

console.log(`${reader.name} has ${reader.favoriteBooks.length} favorites books.`)