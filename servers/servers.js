// 博客内容
var blogItem = function (text) {
  if (text) {
    var obj = JSON.parse(text)
    this.title = obj.title
    this.content = obj.content
    this.createTime = obj.createTime
    this.author = obj.author
  }
}

// stringify挂载在原型链
blogItem.prototype = {
  toString: function () {
    return JSON.stringify(this)
  }
}
// 去掉字符串两端空白
String.prototype.trim=function(){
　return this.replace(/(^\s*)|(\s*$)/g, "");
}
// 储存方法
var Blog = function () {
  // FIXME: data是什么意思
  LocalContractStorage.defineMapProperty(this, "data", {
    parse: function (text) {
      return new blogItem(text);
    },
    stringify: function (o) {
      return o.toString();
    }
  })
}

Blog.prototype = {
  init: function () {
      // todo
  },
  // FIXME: save在index.html调用没有传参数，这些参数怎么来？
  save: function (key, value) {

      key = key.trim();
      value = value.trim();
      if (key === "" || value === ""){
          throw new Error("empty key / value");
      }
      if (value.length > 64 || key.length > 64){
          throw new Error("key / value exceed limit length")
      }
      console.log (from)
      var from = Blockchain.transaction.from;
      var blogItem = this.data.get(key);
      if (blogItem){
          throw new Error("value has been occupied");
      }

      blogItem = new blogItem();
      blogItem.author = from;
      blogItem.key = key;
      blogItem.value = value;

      this.data.put(key, dictItem);
  },

  get: function (key) {
      key = key.trim();
      if ( key === "" ) {
          throw new Error("empty key")
      }
      return this.data.get(key);
  }
};
module.exports = Blog;
