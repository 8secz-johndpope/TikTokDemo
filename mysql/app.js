

// mysql 搜狐镜像  http://mirrors.sohu.com/mysql/


(async function(){
	const mysql = require('mysql2/promise');
	
	// 链接数据库
	const connection = await mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'123',
		database:'node',
	})
	
	//query
	
	let arr = await connection.query('select * from todolist ');
	
	console.log(arr);
})();