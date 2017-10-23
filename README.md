# opiece-utils

some common methods

## Scripts

```js
npm install

// test
npm run test
```

## Usage

```js
// import xyz from opiece-utils/lib/xyz

// list2tree
import list2tree from 'opiece-utils/lib/list2tree'

// request
import request from 'opiece-utils/lib/request'
```

## example

```js
import request from 'opiece-utils/lib/request'

request(`${url}`, {
  body: {
    ...
  },
  interceptors: {
    request: [interceptor, ...],
    response: [interceptor, ...]
  }
}).then(data => {
  console.log(data)
}).catch(err => {
  console.error(err)
})
```

## LICENSE

[MIT](https://github.com/OPiece/utils/blob/master/LICENSE)
