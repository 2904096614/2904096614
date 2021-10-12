// module.exports = {
//     //第一种方法，只能添加一个，会和本地已存在的路径冲突
//     devServer: {
//     proxy: 'http://localhost:4000'
//   },
//   //第二种方法
//   devServer: {
//     proxy: {
//       	'/api1': { // 匹配所有以 '/api1'开头的请求路径
//         	target: 'http://localhost:5000',// 代理目标的基础路径
//         	changeOrigin: true,
//         	pathRewrite: {'^/api1': ''} //正则替换标识路径
//       	},
//       	'/api2': { // 匹配所有以 '/api2'开头的请求路径
//         	target: 'http://localhost:5001',// 代理目标的基础路径
//         	changeOrigin: true,
//         	pathRewrite: {'^/api2': ''}
//       	}
//     }
// }

// changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
// changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080

// }