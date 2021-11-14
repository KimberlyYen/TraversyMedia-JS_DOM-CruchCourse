// Part I //
// How to grab //
// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document)
// console.log(document.domain)
// console.log(document)
// console.log(document.URL)
// console.log(document.title)
// document.title = 'FUCK YOURSELF'
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent = 'hello world'
// console.log(document.forms)
// console.log(document.getElementById('header-title'))
// let headerTitle = document.getElementById('header-title')
// console.log(headerTitle)
// let header = document.getElementById('main-header')
// // headerTitle.textContent = 'FUCK YOU'
// // headerTitle.innerHTML = '<li> FUCK YOURSELF</li>'
// console.log(headerTitle.textContent) 
// console.log(headerTitle.innerText) 
// // headerTitle.innerHTML = `<h3> AAVVVVVVCCCA </h3>`
// // headerTitle.style.borderBottom = 'solid 1px black'


// GET ELEMENTBYCLASSNAME //
// let items = document.getElementsByClassName('list-group-item')
// console.log(items[1])
// items[1].textContent = 'Hello2'
// items[1].style.fontWeight = 'bold'
// // items[1].style.backgroundColor = 'brown'
// // items.style.backgroundColor = 'green'
// for(let i = 0 ; i < items.length ; i++) {
//     items[i].style.backgroundColor = 'green'
// }


// GET ELEMENTBYTAG NAME //
// let li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent = 'Hello2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'brown'
// // li.style.backgroundColor = 'green'
// for(let i = 0 ; i < li.length ; i++) {
//     li[i].style.backgroundColor = 'green'
// }


// QUERYSELECTOR //
// let header = $('')  //JQuery
// let header = document.querySelector('#main-header')
// // console.log(header)
// header.style.borderBottom = 'solid 3px black'
// let input = document.querySelector('input')
// input.value = 'Hello Word'
// let submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"
// let item = document.querySelector('.list-group-item')
// item.style.color = 'red'
// let lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'
// let secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'orange'


// QURY SELECTORALL //
// let title = document.querySelectorAll('.title')
// console.log(title)
// title[1].style.color = 'red'
// let listGroupItem = document.querySelectorAll('.list-group-item')
// console.log(listGroupItem)
// for (let i = 0 ; i < listGroupItem.length ;i++){
//     listGroupItem[i].style.backgroundColor = 'green'
// }
// let odd = document.querySelectorAll('.list-group-item:nth-child(odd)')
// let even = document.querySelectorAll('.list-group-item:nth-child(even)')
// for (let i = 0 ; i < odd.length ;i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }


// Part II //
// TRAVERSING THE DOM //
// let itemList = document.querySelector('#items')
// //PARVENT NODE
// console.log(itemList.parentNode)
// // itemList.parentNode.style.backgroundColor = '#f4f4f4'
// // console.log(itemList.parentNode.parentNode.parentNode)

// // parentElement
// console.log(itemList.parentElement)
// // itemList.parentElement.style.backgroundColor = '#f4f4f4'
// // console.log(itemList.parentElement.parentElement.parentElement)

// // childrenNodes
// console.log(itemList.children) //完整的組成格式
// // console.log(itemList.children[1]) //選擇第二個li item
// // itemList.children[1].style.backgroundColor = "hotpink" // 變更顏色

// // //First Child useless 因為預設值通常會先選到第一個
// console.log(itemList.firstChild)
// // // First Element Child
// // console.log(itemList.firstElementChild)
// // itemList.firstElementChild.textContent = 'Please Do not Yell to me'

// // //last Child useless 因為預設值通常會先選到第一個
// console.log(itemList.lastChild)
// // // last Element Child
// // console.log(itemList.lastElementChild)
// // itemList.lastElementChild.textContent = 'It is a really bad effective to me'

// // // Next Sibling
// console.log(itemList.nextSibling)
// // // Next Element sibling
// // console.log(itemList.nextElementSibling)

// // previous Sibling
// console.log(itemList.previousSibling)
// // previous Element Sibling
// // console.log(itemList.previousElementSibling)
// // itemList.previousElementSibling.style.color = 'green'

// // By Vidio //
// // Create Element 
// // Create a div
// let newDiv = document.createElement('div') //創建div 標籤
// // Add Class
// newDiv.className = "hello" //用JavaScript，寫入Class名稱
// // Add Id
// newDiv.id = "#hello1" //用JavaScript，寫入 Id 名稱
// //Add attr
// newDiv.setAttribute("title" , "Hello Div")
// newDiv.setAttribute("value" , "account")
// // Create Text Node
// let newDivText = document.createTextNode
// ('Hello World ! this is from JavaScript')

// //Add text to div
// newDiv.appendChild(newDivText)

// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')

// console.log(newDiv)

// Final Step //
// container.insertBefore( newDiv , h1 )


// ----- Prectice ----- //
// //1 create a tag
// let newh1 = document.createElement('h1')
// //2 create text
// let newh1Text = document.createTextNode('Hope I can Success')
// //3 put text => tag
// newh1.appendChild(newh1Text)
// console.log(newh1)
// //--------------
// //1 append at AddItem Before
// let container = document.querySelector('.container #main')
// let h2 = document.querySelector('.container #main h2')
// //2 大的範圍  . 方式（插前面）（插的內容， 插的確切位置
// container.insertBefore( newh1 , h2)
// //3 變色
// container.insertBefore( newh1 , h2).style.color = 'orange'







// Part III //
// //Add text to div
// newDiv.appendChild(newDivText)

// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')

// console.log(newDiv)
// container.insertBefore( newDiv , h1 )


// function buttonClick(){
//     alert('FUCK YOURSELFFFFFFF')
// }




//  ---   EVENT click  --- //
// 不好的方式，讓HTML盡可能單純，不添加JS事件
// onclick="XXX"

// // 用監聽事件是較好的作法
// // 完整寫法方法Ａ
// let button = document.getElementById('button').addEventListener("click" , function(){
//     console.log('This is from event listener')
// })

// 方法Ｂ
// let button = document.getElementById('button').addEventListener("click" , buttonClick)
//也可以將function另外撰寫，並且只給function Name
// function buttonClick(e){
//     // document.getElementById('header-title').textContent = 'Add EventListner can work'
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
//     // console.log(e)

// //     console.log(e.target)
// //     console.log(e.target.id)
// //     console.log(e.target.className)
// //     console.log(e.target.classList)

// // let output = document.getElementById('output')
// // console.log(output)
// // // output.innerHTML = '<h3> Tired </h3>'
// // output.innerHTML = '<h3>' + e.target.className + '</h3>'

// // console.log(e.type)

// // console.log(e.clientX) 客戶端瀏覽器(Browser or Window)
// // console.log(e.clientY)

// // console.log(e.offsetX) 物件本身(Actual element itself)
// // console.log(e.offsetY)

// // console.log(e.altKey)
// // console.log(e.ctrlKey)
// // console.log(e.shiftKey)
// }


//  ---   EVENT Run  --- //
// let button = document.getElementById('button')
// let box = document.getElementById('box')

// // button.addEventListener("click" , runEvent)
// // button.addEventListener("dblclick" , runEvent)
// // button.addEventListener("mousedown" , runEvent) //as soon as I click down it runs,that mouse goes down
// // button.addEventListener("mouseup" , runEvent) //When the mouse release

// // // The Different is !!
// // // mouse "enter" only for the element itself
// // // but the "over big" will be for any inner element
// // box.addEventListener("mouseenter",runEvent) // Enter small "itself"
// // box.addEventListener("mouseleave",runEvent)

// // box.addEventListener("mouseover",runEvent) // Over Big "All"
// // box.addEventListener("mouseout",runEvent) // both

// // rgb(0 , 0 , 0)

// // mouse control background Color //
// // box.addEventListener("mousemove",runEvent)
// let inputText = document.querySelector('input[type="text"]')
// let form = document.querySelector('form')
// let select = document.querySelector('select') 
// // console.log(select) // 測一下看有沒有抓到

// // inputText.addEventListener( "keydown" , runEvent)  //鍵盤，案件落下事件
// // inputText.addEventListener( "keyup" , runEvent)  //鍵盤，案件落下事件
// // inputText.addEventListener( "keypress" , runEvent)  //keypress只會針對可以輸出文字符號的按鍵有效，也就是說ESC、方向鍵、倒退鍵......等等。這類沒有辦法輸出文字的鍵無法觸發該事件。

// // inputText.addEventListener( "focus" , runEvent) // in
// // inputText.addEventListener( "blur" , runEvent)  // out

// // inputText.addEventListener( "cut" , runEvent) // cut
// // inputText.addEventListener( "paste" , runEvent)  // paste

// // inputText.addEventListener( "input" , runEvent)  // Any Input (cut , paste)

// // select.addEventListener( "change" , runEvent)  // 抓選單有改變的事件
// // select.addEventListener( "input" , runEvent)  // 抓選單有Input

// form.addEventListener( "submit" , runEvent) // 預設會自動跳頁，要加上「e.preventDefault();」才會停住跳頁

// function runEvent(e){
//     e.preventDefault();
    
//     console.log('EVENT TYPE : ' +  e.type)

//     // console.log(e.target .value)
//     // document.getElementById('output').innerHTML = '<h3>'+e.target .value+'</h3>'
    
//     // 跟著滑鼠跑，顯示目前跑到什麼位置
//     // output.innerHTML = 
//     // '<h3> MouseX :  ' + e.offsetX +
//     // '</h3><h3>MouseY: ' + e.offsetY

//     // 跟著滑鼠跑，改變背景顏色
//     // document.body.style.backgroundColor = "rgb( " +e.offsetX+ " , " +e.offsetY+ ", 40)"
// } 

// Part IV //
// PLEASE GO TO MAIN.JS TO SEE WHAT WILL WE DO