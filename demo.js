// const { default: Web3 } = require("web3")

const { number } = require("assert-plus");
const { default: BigNumber } = require("bignumber.js");
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

// var abi = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_number",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setNumber",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getNumber",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
//0xd5c96C0076b15f92c53a45563b0616433721FB1A
// var address = '0xd5c96C0076b15f92c53a45563b0616433721FB1A';
// var contract = new web3.eth.Contract(abi,address)

// function callback() {
//   console.log("callback run")
// }

// function callback2() {
//   console.log("callback2 run")
// }


//创建批量请求对象
// var batch = new web3.BatchRequest()
//获取用户的账户信息
// batch.add(web3.eth.getBalance.request("0xDc4DD795Bc3198f2F86CAa2024F8f5f662a79653","latest",callback));

//获取账户
// batch.add(web3.eth.getBalance.request("0xDc4DD795Bc3198f2F86CAa2024F8f5f662a79653","latest",function(error, result){
//   console.log(error)
//   console.log(result)
// }));


//对合约操作
// batch.add(contract.methods.getNumber().call.request({from:'0xDc4DD795Bc3198f2F86CAa2024F8f5f662a79653'},callback2))

// batch.add(contract.methods.getNumber().call.request({from:'0xDc4DD795Bc3198f2F86CAa2024F8f5f662a79653'},function(error,result){
//   console.log(error)
//   console.log(result)

// }))
// batch.execute()

// var a = 12313213213213213123132132132
// console.log(a)

//对大值数据，为避免数据精度丢失，使用BigNumber

// var balance = new BigNumber("87945123548794132156749812313")
// console.log(balance)

// console.log(balance.toString())//显示为科学计数法

// console.log(balance.toString(2))//按照二进制显示
// console.log(balance.toString(10))//按照十进制显示
// console.log(balance.toString(16))//按照十六进制显示

//若为浮点数/小数，则最多只能保留20位
// console.log(new BigNumber("87945123548794132156749812313.012345678901234567899").toString(10))

//检查参数是否是BigNumber数
// console.log(web3.utils.isBigNumber(balance))

// console.log(web3.utils.isBigNumber(10))

//将给定的以wei为单位的值转换为其他单位的数值
//wei是最小的以太单位，应当总是使用wei进行计算，仅在需要显示时进行转换

//方法
// web3.utils.fromWei(number,[unit])
//number(需要转换的数字，一般是字符串代表的数字)
// console.log(web3.utils.fromWei('1','ether'))
// console.log(web3.utils.fromWei('1','finney'))
// console.log(web3.utils.fromWei('1','szabo'))
// console.log(web3.utils.fromWei('1','shannon'))

//将给定的以太金额转换为以wei为单位的数值
//web3.utils.toWei(number,[,unit])
// console.log(web3.utils.toWei('1','ether'))
// console.log(web3.utils.toWei('1','finney'))
// console.log(web3.utils.toWei('1','szabo'))
// console.log(web3.utils.toWei('1','shannon'))

//将任意给定值转换为16进制字符串。数值字符串将解释为数值，文本字符串将解释为utf-8字符串
//web3.utils.toHex(mixed)

// console.log(web3.utils.toHex('234'))
// console.log(web3.utils.toHex(234))
// console.log(web3.utils.toHex(new BigNumber('234')))

// console.log(web3.utils.toHex("张三"))
// console.log(web3.utils.toHex('abcdef'))


//将给定的16进制字符串转化为数值字符串
//web3.utils.hexToNumberString(hex)
// console.log(web3.utils.hexToNumberString('0xea'))//转换为字符串类型
// console.log(web3.utils.hexToNumber('0xea'))//转换为数值类型

//将数字转换为16进制
//web3.utils.numberToHex(number)

//返回指定16进制值的utf-8字符串表示
//web3.utils.hexToUtf8(hex)

//返回指定16进制值的ASCII字符串表示
//web3.utils.hexToAscii(hex)

//返回指定UTF-8字符串的16进制表示
//web3.utils.utf8ToHex(string)

//返回指定ASCII字符串的16进制表示
//web3.utils.asciiToHex(string)

//返回指定16进制字符串的字节数组表示
//web3.utils.hexToBytes(hex)

//返回由字节数组转的16进制数值
//web3.utils.bytesToHex(byteArray)