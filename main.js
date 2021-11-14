let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

// FORM SUBMIT EVENT
form.addEventListener( "submit" , addItem )
// DELETE EVENT
itemList.addEventListener("click", removeItem)
// Filter event
filter.addEventListener("keyup", filterItems )

// ADD ITEM
function addItem(e){
    e.preventDefault();

    // GET INPUT VALUE
    let newItem = document.getElementById('item').value

    // CREATE NEW LI ELEMENT
    let li = document.createElement('li')
    // ADD CLASS
    li.className = 'list-group-item'
    // ADD TEXT NODE WITH INPUT VALUE (IT'S GONNA BE THE VARRIABLE NEW ITEM, THAT WHATEVER CAME FROM THE FROM THAT' GONNA BE THE TEXT, WE COULD HAVE PUT THIS IN ITS OWN VARIABLE THIS [DOCUMENT DOT CREATE], BUT IT WOULD JUST BE ANOTHER EXTRA LINE OF CODE.)
    li.appendChild( document.createTextNode(newItem))

    // CREATE DEL BUTTON ELEMENT
    let deleteBtn = document.createElement('button')

    // ADD CLASS
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    // ADD TEXT NODE WITH INPUT VALUE
    deleteBtn.appendChild( document.createTextNode('x'))

    // APPEND BUTTIN TO LI
    li.appendChild( deleteBtn)

    // APPEND LI TO LIST
    itemList.appendChild(li)
}

// REMOVE ITEM
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

// FILTER ITEMS
function filterItems(e){
    // CONVERT TEXT TO LOWERCASE
    let text = e.target.value.toLowerCase()
    // GET lis
    let items = itemList.getElementsByTagName('li')
    // CONVERT TO AN ARRAY
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) !== -1 ){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
