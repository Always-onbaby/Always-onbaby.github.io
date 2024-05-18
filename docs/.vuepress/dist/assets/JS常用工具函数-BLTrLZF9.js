const n=`## Javascript 常用工具函数总结

### 将时间转化易读的时间格式

\`\`\`Javascript
const zeroMat = num => (num < 10 ? \`0\${num}\` : num);


/**
 * 转化当前时间戳为n天前,刚刚 等形容词
 * @param {*} timestamp 传入时间，时间戳 ,'2024-01-26','2024/01/26'
 */
const timestampFormat = timestamp => {
  const curTimestamp = Math.floor(new Date().getTime() / 1000);
  const timestampDiff = curTimestamp - Math.floor(new Date(timestamp).getTime() / 1000);
  const curDate = new Date(curTimestamp * 1000);
  const tmDate = new Date(timestamp);

  const Y = tmDate.getFullYear();
  const m = tmDate.getMonth() + 1;
  const d = tmDate.getDate();
  const H = tmDate.getHours();
  const i = tmDate.getMinutes();

  if (timestampDiff < 60) {
    return "刚刚";
  }

  if (timestampDiff < 3600) {
    return \`\${Math.floor(timestampDiff / 60)}分钟前\`;
  }

  if ((curDate.getFullYear() === Y) && (curDate.getMonth() + 1 === m) && (curDate.getDate() === d)) {
    return \`今天 \${zeroMat(H)}:\${zeroMat(i)}\`;
  }

  const newDate = new Date((curTimestamp - 86400) * 1000);

  if ((newDate.getFullYear() === Y) && (newDate.getMonth() + 1 === m) && (newDate.getDate() === d)) {
    return \`昨天 \${zeroMat(H)}:\${zeroMat(i)}\`;
  }

  if (curDate.getFullYear() === Y) {
    return \`\${zeroMat(m)}.\${zeroMat(d)} \${zeroMat(H)}:\${zeroMat(i)}\`;
  }

  return \`\${Y}.\${zeroMat(m)}.\${zeroMat(d)} \${zeroMat(H)}:\${zeroMat(i)}\`;
};

\`\`\`

### 货币格式化

\`\`\`Javascript
/**
 * 格式化货币
 * @param {*} num 金额数组 123456
 * @param {*} n 保留小数位 默认2
 */
const formatCurrency = (num, n = 2) => {
  if (typeof num !== 'number') {
    throw new Error('Invalid input type. Expected a number.');
  }
  n = (n > 0 && n < 20) ? n : 2;
  num = parseFloat(num.toFixed(n));
  const l = num.toFixed(n).split(".")[0].split("").reverse();
  const r = num.toFixed(n).split(".")[1];

  const formattedNum = l.reduce((acc, curr, index) => {
    return curr + ((index + 1) % 3 === 0 && index + 1 !== l.length ? "," : "") + acc;
  }, "");

  return \`￥\${formattedNum}.\${r}\`;
};

\`\`\`

### 获取浏览器 cookie 值

\`\`\`javascript
const cookie = (name) => \`; \${document.cookie}\`.split(\`; \${name}=\`).pop().split(";").shift();
\`\`\`

### 将 RGB 转化为 16 进制

\`\`\`javascript
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
\`\`\`

### 复制到接切板

\`\`\`javascript
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
\`\`\`

### 字符首字母大写

\`\`\`javascript
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
\`\`\`

### 生成随机的 16 进制

\`\`\`javascript
const randomHex = () =>
  \`#\${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}\`;
\`\`\`

### 数组去重

\`\`\`javascript
const removeDuplicates = (arr) => [...new Set(arr)];
\`\`\`
`;export{n as default};
