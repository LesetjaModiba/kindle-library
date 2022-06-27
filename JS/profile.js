const ppic_div=document.querySelector('.profile-pic-div');
const img= document.querySelector('#img-user');
const file= document.getElementById('file');
const uploadBtn= document.querySelector('#upload-btn');

//adding Picture to profile
document.getElementById('img-user').src = sessionStorage.getItem('img');
document.getElementById('name').innerHTML=sessionStorage.getItem('user_name');

file.addEventListener('change', function()
{
    const selectedFile=this.files[0];
    if(selectedFile)
    {
        const reader= new FileReader();
        reader.addEventListener('load', function()
        {
            
            sessionStorage.setItem('img-user',reader.result);
            img.setAttribute('src',sessionStorage.getItem('img-user'));
        });
        reader.readAsDataURL(selectedFile);
    }
    
});
document.getElementById('img-user').src = sessionStorage.getItem('img-user');

//Menu icon
function isChecked()
{
    document.querySelector(".menu-items").style.display="block";
}
function notChecked()
{
    document.querySelector(".menu-items").style.display="none";
}

//Books you have read
let arrBooks=["Harry Potter And The Sorcerers stone","TA Nehisi Goates The Water Dancer","Robert Dreyfus The Life of Father and Son"];
document.getElementById('bookName1').innerHTML=arrBooks[0];
document.getElementById('bookName2').innerHTML=arrBooks[1];
document.getElementById('bookName3').innerHTML=arrBooks[2];

let arrComment=["193 page   .  Chapter 13    .      Last read","New purchase     .      Yet to read","New purchase     .      Yet to read"]
document.getElementById('comment1').innerHTML=arrComment[0];
document.getElementById('comment2').innerHTML=arrComment[1];
document.getElementById('comment3').innerHTML=arrComment[2];

let arrBookImg=["./assets/books/harryp.jfif","./assets/books/ta-nehisi.jfif","./assets/books/robert.jfif"];
document.getElementById('bookImg1').src = arrBookImg[0];
document.getElementById('bookImg2').src = arrBookImg[1];
document.getElementById('bookImg3').src = arrBookImg[2];

//New Release
let arrLowbookName=["The Glass Hotel","The book of Longings","Darling Rose Gold","My dark Vanessa","Weather"];
document.getElementById('no1').innerHTML=arrLowbookName[0];
document.getElementById('no2').innerHTML=arrLowbookName[1];
document.getElementById('no3').innerHTML=arrLowbookName[2];
document.getElementById('no4').innerHTML=arrLowbookName[3];
document.getElementById('no5').innerHTML=arrLowbookName[4];

let arrAuthors=["Emily St. John","Sue Monk","Stephanie Wrobel","My dark Vanessa","Jenny offill"];
document.querySelector(".author1").innerHTML= arrAuthors[0];
document.querySelector(".author2").innerHTML= arrAuthors[1];
document.querySelector(".author3").innerHTML= arrAuthors[2];
document.querySelector(".author4").innerHTML= arrAuthors[3];
document.querySelector(".author5").innerHTML= arrAuthors[4];

let arrBookimgLow=
["./assets/books/the-glass-hotel.jfif", "./assets/books/the-book-of-longings.jfif","./assets/books/darling-rose-gold.jfif","./assets/books/my-dark-vanessa.jfif","./assets/books/weather.jfif"];
document.getElementById('bookLow1').src = arrBookimgLow[0];
document.getElementById('bookLow2').src = arrBookimgLow[1];
document.getElementById('bookLow3').src = arrBookimgLow[2];
document.getElementById('bookLow4').src = arrBookimgLow[3];
document.getElementById('bookLow5').src = arrBookimgLow[4];

let arrBookType=["Mystery","Fiction","Thriller","Mystery","Mystery"];
document.getElementById('book-type1').innerHTML=arrBookType[0];
document.getElementById('book-type2').innerHTML=arrBookType[1];
document.getElementById('book-type3').innerHTML=arrBookType[2];
document.getElementById('book-type4').innerHTML=arrBookType[3];
document.getElementById('book-type5').innerHTML=arrBookType[4];
//Famous Authors
let arrFamAuthors=["./assets/books/Authors/rowling.jfif","./assets/books/Authors/stephan.jfif","./assets/books/Authors/dnaielle.jfif"];
document.getElementById('author-1-pic').src = arrFamAuthors[0];
document.getElementById('author-2-pic').src = arrFamAuthors[1];
document.getElementById('author-3-pic').src = arrFamAuthors[2];

let authorNames=["J.K Rowling 10 books","Stephan King 61 Novels","Danielle Street 179 books"];
document.getElementById('author-1-name').innerHTML=authorNames[0];
document.getElementById('author-2-name').innerHTML=authorNames[1];
document.getElementById('author-3-name').innerHTML=authorNames[2];

