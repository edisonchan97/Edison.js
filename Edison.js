/*
操作cookie
1.key
2.value
3.expires
4.domain
5.path
*/
const Cookie = {};
Cookie.cookie = function(){
      return document.cookie;
}();
Cookie.setCookie = function(c_name,value,expiredays){
      var exdate=new Date()
      exdate.setDate(exdate.getDate()+expiredays)
      document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}
