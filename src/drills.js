// require('dotenv').config()
// const knex = require('knex')

// const knexInstance = knex({
//     client: 'pg',
//     connection: process.env.DB_URL
// })
  
// //  question 1
  
// //   function searchByItemName(searchTerm) {
// //   knexInstance
// //     .select('*')
// //     .from('shopping_list')
// //     .where('name', 'ILIKE', `%${searchTerm}%`)
// //     .then(result => { 
// //       console.log('SEARCH TERM' , { searchTerm })
// //       console.log(result)
// //     })
// // }

// // searchByItemName('fish')

// //question 2 

// // function paginateItems(page) {
// //     const limit = 6
// //     const offset = limit * (page - 1)
// //     knexInstance
// //       .select('*')
// //       .from('shopping_list')
// //       .limit(limit)
// //       .offset(offset)
// //       .then(result => {
// //         console.log('PAGINATE ITEMS', { page })
// //         console.log(result)
// //       })
// //   }
  
// //   paginateItems(3)

// //question 3

// // function productAddedDaysAgo(daysAgo) {
// //     knexInstance
// //       .select('product_id', 'name', 'price', 'date_added', 'checked', 'category')
// //       .from('shopping_list')
// //       .where(
// //           'date_added',
// //             '>',
// //             knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
// //         )
// //       .then(result => {
// //         console.log('PRODUCTS ADDED DAYS AGO')
// //         console.log(result)
// //       })
// // }
  
// //     productAddedDaysAgo(35)


// //   question 4

// function costPerCategory() {
//     knexInstance
//       .select('category')
//       .from('shopping_list')
//       .groupBy('category')
//       .sum('price AS total')
//       .then(result => {
//         console.log('COST PER CATEGORY')
//         console.log(result)
//       })
// }
  
//   costPerCategory()

