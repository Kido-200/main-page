$(function (){
  //1.轮播图
  $(window).on('resize',function (){
    //1.获取窗口宽度
    let clientW = $(window).width()
    //2.设置临界点
    let isShowBigImage = clientW >= 900
    //1.3获取所有item
    let $allItems = $('#lk_carousel .carousel-inner .carousel-item')
    //4.遍历
    $allItems.each((index,item)=>{
      //4.1取出图片的路径
      let src = isShowBigImage ? $(item).data('lg-img') : $(item).data('sm-img')
      let imgUrl = `url(${src})`
      //4.2设置背景
      $(item).css({
        backgroundImage:imgUrl
      })
      //4.3 创建img标签
      if(!isShowBigImage){
        let imgEle = `<img src="${src}" alt="..."/>`
        $(item).empty().append(imgEle)
      }else{
        $(item).empty()
      }
    })
  })

  //3.添加轮播图滑动 手机端肯定要实现
  let startX = 0 ,endX = 0
  let carouselInner = $('#lk_carousel .carousel-inner')[0]
  let carousel = $('#lk_carousel')

  //移动端的用touchstart
  carouselInner.addEventListener('mousedown', e => {
    startX = e.clientX
  })

  carouselInner.addEventListener('mouseup', e => {
    endX = e.clientX
    if(startX - endX < 0){
      carousel.carousel('prev')
    }else if (endX - startX < 0){
      carousel.carousel('next')
    }
  })

  carouselInner.addEventListener('touchstart', e => {
    startX = e.clientX
  })

  carouselInner.addEventListener('touchend', e => {
    endX = e.clientX
    if(startX - endX < 0){
      carousel.carousel('prev')
    }else if (endX - startX < 0){
      carousel.carousel('next')
    }
  })


  //4.超出内容处理
  $(window).on('resize',()=>{
    let $ul = $('#lk_product .nav')
    let $allLis = $('.nav-item',$ul)
    let totalW = 0//所有li的宽度
    $allLis.each((index,item)=>{
      totalW += $(item).width()
    })
    //获取父标签的宽度
    let parentW = $ul.parent().width()
    if(totalW > parentW){
      $ul.css({
        width:totalW + 'px'
      })
    }else{
      $ul.css({
        width:'100%'
      })
    }
  })


  $(window).trigger('resize')




  //2.工具的提示
  $('[data-toggle="tooltip"]').tooltip();
})