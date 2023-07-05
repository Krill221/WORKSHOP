
const productsList = [
  { Id: 1, Name: 'Молоко пастеризованное 2л', Description: 'Хорошое вкусное' },
  { Id: 2, Name: 'Молоко ультрапастеризованное 2л', Description: 'Насыщенный вкус' },
  { Id: 3, Name: 'Молоко соевое 1л', Description: 'Кому-то нужно' },
  { Id: 4, Name: 'Молоко рисовое 2л', Description: 'ого' },
  { Id: 5, Name: 'Молоко овсяное 2л', Description: 'Хорош' },
  { Id: 6, Name: 'Молоко миндальное 2л', Description: 'Это как' },
  { Id: 7, Name: 'Молоко шоколадное 0,2л', Description: 'Хмм' },
  { Id: 8, Name: 'Молоко отборное 1л', Description: 'Хорошое послевкусие' },
  { Id: 9, Name: 'Молоко отборное но старое 1л', Description: 'Хорошое послевкусие' },
  { Id: 10, Name: 'Молоко топленое 2л', Description: 'Ух' },

  { Id: 11, Name: 'Масло пастеризованное 2л', Description: 'Хорошое вкусное' },
  { Id: 12, Name: 'Масло ультрапастеризованное 2л', Description: 'Насыщенный вкус' },
  { Id: 13, Name: 'Масло соевое 1л', Description: 'Кому-то нужно' },
  { Id: 14, Name: 'Масло рисовое 2л', Description: 'ого' },
  { Id: 15, Name: 'Масло овсяное 2л', Description: 'Хорош' },
  { Id: 16, Name: 'Масло миндальное 2л', Description: 'Это как' },
  { Id: 17, Name: 'Масло шоколадное 0,2л', Description: 'Хмм' },
  { Id: 18, Name: 'Масло отборное 1л', Description: 'Хорошое послевкусие' },
  { Id: 19, Name: 'Масло отборное но старое 1л', Description: 'Хорошое послевкусие' },
  { Id: 20, Name: 'Масло топленое 2л', Description: 'Ух' },
]

function addProductsToElastic() {
  var elasticUrl = 'http://localhost:9200';
  productsList.forEach(product => {
    let response = fetch(elasticUrl + '/store/products/' + product.Id, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    });
    let result = response.then(rs => {
      console.log(rs.json());
    })
  })
}
addProductsToElastic();