---
id: axialunar-endpoints
title: AXIALunar Endpoints
sidebar_label: AXIALunar Endpoints
---

When interacting with the [AXIALunar network](https://axialunar.network) via [AXIASolar-JS Apps](https://axiasolar.js.org/apps) or other UIs and programmatic methods, you'd ideally be running your own node ([text guide](maintain-sync), [video guide](https://www.youtube.com/watch?v=31DdfcxbAVs)). Granted, that's not something everyone wants to do, so convenience trumps ideals in most cases. To facilitate this convenience, AXIALunar has several public endpoints you can use for your apps.

## Parity Archive Node

[Parity](https://parity.io), the company that develops the AXIASolar Rust client, maintains an archive node at endpoint `wss://axialunar-rpc.axiasolar.io/`.

To connect to the Parity node, use the endpoint in your JavaScript apps like so:

```javascript
const{ ApiPromise, WsProvider } = require('@axiasolar/api')

(async () => {
    const provider = new WsProvider('wss://axialunar-rpc.axiasolar.io/')
    const api = await ApiPromise.create({ provider })
    // ...
```

or in AXIASolar-JS Apps by clicking the top-left corner of the screen and selecting the appropriate option:

<img src="/img/endpoints/axialunar_endpoint_parity.png" width=40% />

## Web3 Foundation Archive Node

The Web3 Foundation maintains an archive node at endpoint `wss://cc3-5.axialunar.network/`.

To connect to this node, use the endpoint in your JavaScript apps like so:

```javascript
const{ ApiPromise, WsProvider } = require('@axiasolar/api')

(async () => {
    const provider = new WsProvider('wss://cc3-5.axialunar.network/')
    const api = await ApiPromise.create({ provider })
    // ...
```

Connect to it in AXIASolar Apps UI by clicking the top-left corner of the screen and selecting the appropriate option:

<img src="/img/endpoints/axialunar_endpoint_web3.png" width=40% />
