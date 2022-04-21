# react-platform-js

## Install

```bash
yarn add react-platform-js # or npm install react-platform-js
```

## Usage

### method
```javascript
import Platform from 'react-platform-js'

Platform.OS // OS name, Mac OS
Platform.OSVersion // OS version, 10.11
Platform.Browser // Browser name, Chrome
Platform.BrowserVersion // Browser Version
Platform.Engine // browser engine name
// and ...
Platform.CPU
Platform.DeviceType
Platform.DeviceModel
Platform.DeviceVendor
Platform.UA

```

### component

```javascript
import React, {Component} from 'react'
import Platform from 'react-platform-js'

class App extends Component {
  render() {
    return (
      <Platform rules={{OS: 'Mac OS'}}>
        Only Mac OS computer will see this text.
      </Platform>
    )
  }
}

class App2 extends Component {
  render() {
    return (
      <Platform rules={{OS: 'Mac OS'}}>
        {props => {
          return (
            <div>
              OS: {props.OS},
              OSVersion: {props.OSVersion},
              Browser: {props.Browser},
              BrowserVersion: {props.BrowserVersion},
              DeviceType: {props.DeviceType},
              DeviceModel: {props.DeviceModel},
              DeviceVendor: {props.DeviceVendor},
              Engine: {props.Engine},
              EngineVersion: {props.EngineVersion},
              CPU: {props.CPU},
              UA: {props.UA},
            </div>
          )
        }}
      </Platform>
    )
  }
}

```

## License

MIT