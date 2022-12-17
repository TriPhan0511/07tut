import { useState } from 'react'
import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'One half pound bag',
    },
    {
      id: 2,
      checked: false,
      item: 'Item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item 3',
    },
  ])
  const [newItem, setNewItem] = useState('')

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
    console.log('submitted')
  }

  return (
    <div className='App'>
      <Header title='Grocery List' />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Content
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items?.length ?? 0} />
    </div>
  )
}

export default App

// import { useState } from 'react'
// import AddItem from './AddItem'
// import Content from './Content'
// import Footer from './Footer'
// import Header from './Header'

// function App() {
//   const data = JSON.parse(localStorage.getItem('shoppinglist')) ?? []
//   const [items, setItems] = useState(data)

//   const handleCheck = (id) => {
//     const listItems = items.map((item) =>
//       item.id === id ? { ...item, checked: !item.checked } : item
//     )
//     setItems(listItems)
//     localStorage.setItem('shoppinglist', JSON.stringify(listItems))
//   }

//   const handleDelete = (id) => {
//     const listItems = items.filter((item) => item.id !== id)
//     setItems(listItems)
//     localStorage.setItem('shoppinglist', JSON.stringify(listItems))
//   }

//   const addShoppingItem = (item) => {
//     const listItems = [...items, item]
//     setItems(listItems)
//     localStorage.setItem('shoppinglist', JSON.stringify(listItems))
//   }

//   return (
//     <div className='App'>
//       <Header title='Grocery List' />
//       <AddItem addShoppingItem={addShoppingItem} />
//       <Content
//         items={items}
//         setItems={setItems}
//         handleCheck={handleCheck}
//         handleDelete={handleDelete}
//       />
//       <Footer length={items?.length ?? 0} />
//     </div>
//   )
// }

// export default App
