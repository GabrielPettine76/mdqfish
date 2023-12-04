const menutoggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.nav');
  menutoggle.onclick=function(){
    menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
  }

