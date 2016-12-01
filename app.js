let books=[
{author:'Thomas Pynchon',title:'Bleeding Edge'},
{author:'haruki Murakami',title:'1Q84'},
{author:'John D MacDonald',title:'Nightmare in Pink'},
{author:'Ncholas Zakas', title:'Understanding Ecmascript 6'}

]
let users=[];

function authSearch(){
	let aName= document.getElementById('authorSearch').value
	let name =books.filter((x)=>x.author==(aName))
	try{
		document.getElementById('result').innerHTML="yes we have at least one book by"+name[0].author
	}
catch(err){
	document.getElementById('result').innerHTML='sorry no books by'+ aName
}
}
function addBook(book){
books.push({author:document.getElementById('author').value,title:document.getElementById("addbook").value});
document.getElementbyId("author").value="";
document.getElementById("addbook").value="";

}

function showAllBooks(){
	// let listItem=document.createElement('li')
	// listItem.appendChild(textnode)
	// document.getElementByid('allTheBooks').appendChild(listItem)

for(let i=0;i<books.length;i++){
	let listitem=document.createElement('li')
	//let textnode=document.createtextNode(`${books[i].title} by ${books[i].author} in ${books[i].genre`)
	//listitem.appendChild(textnode)
	document.getElementById('allTheBooks').appendChild(Listitem)
}
}

function adduser(){
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	if (name.value==''){
		alert('Enter name');
		return;
	}
	else if(email.value==''){
		alert('Enter email');
		return;
	}
	else{
		users.push({name:name.value,email:email.value});
		alert('User added');
	}
}

