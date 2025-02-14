---
id: spot-dex-exchange
---

# Spot/DEX Exchange CoinGecko Integration

This page contains the documentation on how to integrate with **Incognito Spot/DEX Exchange** data through API calls.

### Integrations
* The response Content-Type for api should be `application/json`
* No authentication is required
* Endpoints are protected by Cloudflare
* Public API host is: `https://api-explorer.incognito.org`

## 1. Get Pairs Data
The /pairs endpoint provides a summary on cryptoasset trading pairs available on the exchange.
* Endpoint: `https://api-explorer.incognito.org/api/v1/public/coin-gecko/pairs`
* Method: `GET`

### Response Body Descriptions
A json object with data will be returned on success API call. With following property
* `message`: response message
* `pairs`: array of pairs data object
* * `ticker_id`: ticker id
* * `base_id`: base token id
* * `base`: base token symbol (in pDEX)
* * `target_id`: token symbol (in pDEX)
* * `target`: target token symbol (in pDEX)
* * `pool_id`: pDEX pool id

### Sample Request
```bash
## Get Coin Gecko Pairs
curl "https://api-explorer.incognito.org/api/v1/public/coin-gecko/pairs"
```

### Sample Response
```json
{
  "pairs": [
    {
      "ticker_id": "pDAF_PRV",
      "base_id": "495f59f74371dd86e75a56ba6f457357557a8954b51f90ad4e123694c962e94a",
      "base": "pDAF",
      "target_id": "0000000000000000000000000000000000000000000000000000000000000004",
      "target": "PRV",
      "pool_id": "0000000000000000000000000000000000000000000000000000000000000004-495f59f74371dd86e75a56ba6f457357557a8954b51f90ad4e123694c962e94a-1516fc5dec2655f701a5cbf7163d736334592dec9fd853419d80bc41ea48e2fd"
    },
    {
      "ticker_id": "pETH_pUSDT",
      "base_id": "3ee31eba6376fc16cadb52c8765f20b6ebff92c0b1c5ab5fc78c8c25703bb19e",
      "base": "pETH",
      "target_id": "076a4423fa20922526bd50b0d7b0dc1c593ce16e15ba141ede5fb5a28aa3f229",
      "target": "pUSDT",
      "pool_id": "076a4423fa20922526bd50b0d7b0dc1c593ce16e15ba141ede5fb5a28aa3f229-3ee31eba6376fc16cadb52c8765f20b6ebff92c0b1c5ab5fc78c8c25703bb19e-d3976e67fbefe50eb3f4ec9f2266b734a49f3c97effa825117db84ac08f60b6d"
    }
  ],
  "message": "OK"
}
```
________________

## 2. Get Tickers Data
The /tickers endpoint provides 24-hour pricing and volume information on each market pair available on an exchange.
* Endpoint: `https://api-explorer.incognito.org/api/v1/public/coin-gecko/tickers`
* Method: `GET`

### Response Body Descriptions
A json object with data will be returned on success API call. With following property
* `message`: response message
* `tickers`: array of pairs data object
  * `ticker_id`: `STRING` ticker id
  * `base_id`: `STRING` base token id
  * `base_currency`: `STRING` base token symbol (in pDEX)
  * `target_id`: `STRING` token symbol (in pDEX)
  * `target_currency`: `STRING` target token symbol (in pDEX)
  * `pool_id`: `STRING` pDEX pool id
  * `last_price`: `NUMBER` last pair price
  * `base_volume`: `NUMBER` base token trading volume in 24H
  * `target_volume`: `NUMBER` target token trading voume in 24H

### Sample Request
```bash
## Get Coin Gecko Tickers
curl "https://api-explorer.incognito.org/api/v1/public/coin-gecko/tickers"
```

### Sample Response
```json
{
  "tickers": [
    {
      "ticker_id": "pDAF_PRV",
      "base_id": "495f59f74371dd86e75a56ba6f457357557a8954b51f90ad4e123694c962e94a",
      "base_currency": "pDAF",
      "target_id": "0000000000000000000000000000000000000000000000000000000000000004",
      "target_currency": "PRV",
      "pool_id": "0000000000000000000000000000000000000000000000000000000000000004-495f59f74371dd86e75a56ba6f457357557a8954b51f90ad4e123694c962e94a-1516fc5dec2655f701a5cbf7163d736334592dec9fd853419d80bc41ea48e2fd",
      "last_price": 0.0018607001900856567,
      "base_volume": 24942,
      "target_volume": 0
    }
  ],
  "message": "OK"
}
```

____________


## 3. Get Order Books
The /orderbook/ticker_id endpoint is to provide order book information with at least depth = 100 (50 each side) returned for a given market pair/ticker.
* Endpoint: `https://api-explorer.incognito.org/api/v1/public/coin-gecko/orderbook`
* Method: `GET`
* Request Query:
  * `ticker_id`: ticker id

### Response Body Descriptions
A json object with data will be returned on success API call. With following property
* `message`: response message
* `ticker_id`: A pair such as "BTC_ETH", with delimiter between different cryptoassets
* `timestamp`: Unix timestamp in milliseconds for when the last updated time occurred
* `bids`: An array containing 2 elements. The offer price and quantity for each bid order
* `asks`: An array containing 2 elements. The ask price and quantity for each ask order

### Sample Request
```bash
## Get Coin Gecko OrderBook
curl "https://api-explorer.incognito.org/api/v1/public/coin-gecko/orderbook?ticker_id=pBTC_PRV"
```

### Sample Response
```json
{
  "bids": [
    [
      22100,
      0.0019515830000000002
    ],
    [
      21781.15,
      1
    ],
    [
      531,
      1.8000000000000002e-8
    ],
    [
      70,
      0.000001285
    ],
    [
      6,
      0.000002499
    ],
    [
      5,
      0.0000020000000000000003
    ],
    [
      0.0001,
      0.00014000000000000001
    ],
    [
      0.0001,
      0.0001
    ],
    [
      0.00002,
      0.5
    ],
    [
      1e-8,
      1
    ],
    [
      1e-8,
      1
    ],
    [
      0.0064,
      1
    ],
    [
      54795.2599550301,
      0.000013787
    ],
    [
      55558.6867,
      0.0005
    ],
    [
      55558.6867,
      0.0005
    ],
    [
      55609.389198,
      0.0005
    ],
    [
      58951.06,
      0.00011200000000000001
    ],
    [
      58951.06,
      0.000077
    ],
    [
      59064.66999947693,
      0.001663261
    ],
    [
      67033.019998407,
      0.000313875
    ],
    [
      67090.65999715759,
      0.000098508
    ]
  ],
  "asks": [
    [
      999999.75,
      4e-9
    ],
    [
      88000,
      0.00015000000000000001
    ],
    [
      85000,
      0.00015000000000000001
    ],
    [
      80000,
      0.00015000000000000001
    ],
    [
      78500,
      0.00030000000000000003
    ],
    [
      75000,
      0.00015000000000000001
    ],
    [
      73000,
      0.00015000000000000001
    ],
    [
      63068.70058091286,
      0.000030125
    ],
    [
      63736.12697081516,
      0.00002981
    ]
  ],
  "message": "OK",
  "ticker_id": "pBTC_PRV",
  "timestamp": 1668769564
}
```
