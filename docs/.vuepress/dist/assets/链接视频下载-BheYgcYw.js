const n=`在开发中我们常用\`<a>\`链接下载数据，但在下载视频时会遇到无法下载转而打开新页面播放的\`BUG\`\r
\r
\`\`\`javascript\r
/**\r
 * 根据链接下载视频\r
 * @param {string} filePath 文件地址\r
 * @param {string} fileName 文件名\r
 */\r
export function videoDownload(filePath: string, fileName: string) {\r
  const a = document.createElement("a");\r
  document.body.append(a);\r
  a.style.display = "none";\r
\r
  /**指示回复的内容该以何种形式展示(是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。) */ \r
  a.href = \`\${filePath}&response-content-disposition=\${encodeURIComponent(\`attachment; filename=\${fileName}\`)}\`\r
  // a.href =filePath +"&response-content-disposition=" + encodeURIComponent('attachment; filename="' + fileName + '"');\r
  a.download = fileName;\r
  a.click();\r
\r
  /**多文件时remove放在setTimeout里面 */\r
  setTimeout(() => {\r
    document.body.removeChild(a);\r
  }, 300);\r
}\r
\`\`\`\r
`;export{n as default};
