#### JSON

`json`在 vite 中可以被直接导入，同时也支持具名导入

```js
// 导入整个Json对象
import json form './example.json'

// 具名导入，有利于构建时的treeshaking
import {filed} from './example.json'
```
