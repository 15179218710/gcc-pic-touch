function add(n1, n2) {
  return n1+n2
}

function sub(n1, n2) {
  return n1-n2
}

// 以下两种语法是一样的
// exports.add = add
// exports.sub = sub

// module.exports = {
//   add,
//   sub
// }

module.exports = function() {
  return {
    add,
    sub
  }
}
