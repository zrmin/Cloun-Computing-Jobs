;(function(){
    let lis=document.querySelectorAll('.news_hd li')
    let items=document.querySelectorAll('.item')
    for(let i=0;i<lis.length;i++){
        lis[i].setAttribute('index',i)
        lis[i].onclick=function(){
            for(let i=0;i<lis.length;i++){
                lis[i].className=''
                items[i].style.display='none'
            }
            this.className='news_hd current'
            items[this.getAttribute('index')].style.display='block'
        }
    }
})