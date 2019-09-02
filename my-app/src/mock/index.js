var Mock = require("mockjs");

Mock.mock("/douCon","get",require("./json/douCon.json"))
Mock.mock("/dianYing","get",require("./json/dianYing.json"))
Mock.mock("/faxianDY","get",require("./json/faxianDY.json"))