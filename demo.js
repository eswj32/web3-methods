// const { default: Web3 } = require("web3")

let Web3 = require("web3");
// console.log(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

//查看Web3模块
// console.log(Web3.modules);

// 查看Web3版本
// console.log(Web3.version);

//查看web3连接的节点信息
/*
(为什么1和2输出效果一致):then方法里的参数只能是函数{console.log}是一个函数。
但是没有给log传递参数，为什么能够打印出数据。这里原来，Promise库本身会给它带参调用。
stackoverflow解释：只有在 promise 成功解决（需要一个函数调用）后才会执行 console.log，并将 promise 的结果隐式传递给 console.log 函数。
*/
//1
// web3.eth.getNodeInfo().then(console.log);
//2
// web3.eth.getNodeInfo().then((res) => {
//   console.log(res);
// });

//查看当前所连接节点的网络监听状态
// web3.eth.net.isListening().then(console.log);
// web3.shh.net.isListening().then(console.log);
// web3.bzz.net.isListening().then(console.log);

//返回当前网络的id
// web3.eth.net.getId().then(console.log)
// web3.shh.net.getId().then(console.log)

//返回节点的以太坊协议版本
// web3.eth.getProtocolVersion().then(console.log);

//返回当前节点上已经连接的其他节点数量
// web3.eth.net.getPeerCount().then(console.log);


//web3.providers 查询当前有效的通信服务提供器
// console.log(web3.providers)

//查看web3当前正在使用的通信服务提供器，如果没有的话返回null
// console.log(web3.currentProvider)

//查看浏览器环境设置的web3 provider，返回浏览器设置的原生服务提供器，否则返回null
// console.log(web3.givenProvider)

//修改指定模块的底层通讯服务提供器
// web3.setProvider("HTTP://192.168.42.100:7545")
// console.log(web3.currentProvider)


//web3批处理请求

