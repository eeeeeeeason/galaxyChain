"use strict";
// 博客内容
var blogItem = function (title, content, author) {
  if (title) {
    this.title = title
    this.content = content
    var createTime = new Date().getDate()
    this.createTime = createTime
    this.author = author
  } else {
    throw new Error("blog title empty key")
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
  save: function (title, content) {
      title = title.trim();
      content = content.trim();
      if (title === "" || content === ""){
          throw new Error("empty key / value");
      }
      if (content.length > 64 || title.length > 64){
          throw new Error("key / value exceed limit length")
      }
      console.log (from)
      var from = Blockchain.transaction.from;
      var blogItemval = this.data.get(title);
      // if (blogItemval){
      //     throw new Error("content has been occupied");
      // }
      var blogItemchild = new blogItem(title, content, from);
      this.data.put(title, blogItemchild);
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
