const loginfo = (date) => (type) => (message) => `${date}-${type}-${message}`;

const todayInfo = loginfo("2023-02-02")("error");

const errorInfo = todayInfo("cuowu");

console.log(errorInfo);
