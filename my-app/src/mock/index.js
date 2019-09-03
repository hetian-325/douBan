var Mock = require("mockjs");

Mock.mock("/dianYing","get",require("./json/dianYing.json"))
Mock.mock("/faxianDY","get",require("./json/faxianDY.json"))
Mock.mock("/fenLei","get",require("./json/fenLei.json"))
Mock.mock("/shouYe","get",require("./json/shouYe.json"))
Mock.mock("/tuShu","get",require("./json/tuShu.json"))