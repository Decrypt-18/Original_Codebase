---
layout: default
title: getblockchaininfo
nav_order: 9
parent: Blockchain
has_children: false
---

### getblockchaininfo
---
### Parameters
---
### Example

Request body:
```javascript
// Method getblockchaininfo
// type POST 
// Body request 

{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "getblockchaininfo",
    "params": []
}  
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "ChainName": "testnet",
        "BestBlocks": {
            "-1": {
                "Height": 1440953,
                "Hash": "00e6ba277c27cedb0535e09094a0edef4fd38fce3da0b4dda3f7caacebd90873",
                "TotalTxs": 0,
                "BlockProducer": "121VhftSAygpEJZ6i9jGkEKLMQTKTiiHzeUfeuhpQCcLZtys8FazpWwytpHebkAwgCxvqgUUF13fcSMtp5dgV1YkbRMj3z42TW2EebzAaiGg2DkGPodcXDm4nu1GAbvAkfHEyfQ8nX3RNpQxHzpBCg5mvtr6CTQbjVRFnhUg78D6oBkkeHFkNDUT383FVkDmttu6VxSKq7WARLGuuF44BR5WDKRM58MJ9uK7kQ6WsX1ZSiiFakyANp7epjhzdP4oGyKtEvtVmwqs1XiCMDHMWNqAdLgsE1LRMsxkRykMCmpxuVaq9iAWCsR6iDEdWmZ3PZEzEVBQ57doj8eqbbZuwdukPhE1Mqmk4EmptZWP3kpxUCq5S4cSe9B5JVnVsrnb8hhHKDz3Md1qS8ZaT1gEyYDWAVPKLKiMpRsLmhF2kFmVnHJK",
                "ValidationData": "{\"ProducerBLSSig\":\"ot3NGElOM5YtdFfottcef/BhELndzmXazcdAx1tiT+8nwiii07Xbq4xawmCBT95T0Kwaopult/goMQYkvD0SbgA=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3],\"AggSig\":\"B5Uvv9lQ14rGmlr2hZUgqb2gns0eSR2yxsvJ5jZgxEk=\",\"BridgeSig\":[\"\",\"\",\"\",\"\"]}",
                "Epoch": 14410,
                "Time": 1611568457,
                "RemainingBlockEpoch": 47,
                "EpochBlock": 100
            },
            "0": {
                "Height": 1439898,
                "Hash": "b7cfff85b97aa09015329cbf366143f255f3acdcd27f4922393142d972547bf8",
                "TotalTxs": 36262,
                "BlockProducer": "121VhftSAygpEJZ6i9jGk4diwdFxA6whUVx3P9GmT35Lw6txpbDmeVgSJ4qUwSHPAep8FedvNrZfGB1eoXZXnCwwHVQs7htn7XigUSowaRJyXVf9n42Bbg2HGgrAYakAYQF7m3UKjqNHcZBvur9Dpma85aw2kgrxm8p6kcWeBaXUQuLYqv2vasVXkjLvVfAE8F8qJQ4ab2AthR2WW2M6Jucr7rUmMNF5JjnM9HPBWkKXXjjGToPSD7GsVQsgfz2U65HG97x1YwrWAeRGRCWVxVr6pruAhvauxe8Y92UkZhPLqqMwZFoWcfEijW8U8pC4byqUzuBH41XJhAs7YnU2hnHeoKKmhAtAnVogT76yFtCdneQP2F7aZfP3axvbw4RD8bDmzJ2N2cHinSRB46Ac1dYA94ATuGWYfLWYnbtned3C2z9z",
                "ValidationData": "{\"ProducerBLSSig\":\"Z8C5a0xyh1Kb4vWYt9Q8SKPrh5TpIS5VdZBOfzjJ81xnPLWiomQ5XWhEJ4Qesm2eVnhgzdzTue2tXZP3e3yy4QA=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3],\"AggSig\":\"I9IL8qrkY4Ndb1PEaHhYF2MN9/Wt0hs/jDJdCDtuZAg=\",\"BridgeSig\":[\"\",\"\",\"\",\"\"]}",
                "Epoch": 0,
                "Time": 1611568445,
                "RemainingBlockEpoch": 0,
                "EpochBlock": 0
            },
            "1": {
                "Height": 1421143,
                "Hash": "0aa42a6551066299eccdc672425b1ff996e90e5ac25862f78fa52d5196d30f0c",
                "TotalTxs": 24265,
                "BlockProducer": "121VhftSAygpEJZ6i9jGkD9YHfpsQrF8sjrknXGoftj9D5qnE3GGnA22m8gZZCPz4JMHCiSWRBwJ5Zw5MLEaKJKfcZ6aB8KH9eBeQVwco4QwBh4SaxcpYGKPwXJ8pWstFnJkwGDp74pMjcD8V62EPiBzQKrA4c91YhfzURBFmwhSc9QUUjAwfyfqeXYhthpzELVrYrYvAqPVrDDFWUpBpALzKuNfXUCLco5BxEzNtAmFWXZMoU7rojdFntMkc9iNeHVDKkdgpjVDf9by1ndL7kWm7PWL7D2X2JaJkZipxohJqbqhcYLZpVuucgaZSHu1W3tTU6upXDXFCAAdVGvpQCweZR9NyCGe3ookuN2uMkq8UTQdYekxG8jy8fWM9bi8Xf8y66qWdKT9D7izttjdZE8mwn5B5XrckWEgpLwCcDqpqBcM",
                "ValidationData": "{\"ProducerBLSSig\":\"7GMFaoi0yaUUlxMQ61B+vm1f406RnGTJMYlDZPnJJexMH4M5nlTxQddH4bmnaHvYpfiYz+jdboV2I5GdX2UWcAE=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3],\"AggSig\":\"BaxKmGRNiTX7Fv2hdROp0J95uvpG2jM/oLnynqIvRnE=\",\"BridgeSig\":[\"\",\"\",\"\",\"\"]}",
                "Epoch": 0,
                "Time": 1611568447,
                "RemainingBlockEpoch": 0,
                "EpochBlock": 0
            },
            "2": {
                "Height": 1440150,
                "Hash": "f51037c3a31f7290c5d3a053b9348d6696117d1ff9529c23f7697fc0bde81516",
                "TotalTxs": 23821,
                "BlockProducer": "121VhftSAygpEJZ6i9jGkEYYA3Zi9EQ1KS71q8Ujnu4GJX7ZN4w2j6nGsxoKX9Ly1WTsGJAN2atyzQqDkaTZVF9X4QLUshKgezZnGDNYirwFRjfjRb27V9QAK1APDiRkGRgFQg8hHzGJCYR7uxtfGrcasE2kPD5Anqep8aHzNBDucs5jSXEc9aPrp3ZLpisZHiaiXsQoTrcL9Tsc8U4NSQEiNfafK7peZf3SUh6jNNXRnpCXg4HZzZaP1Rg3iMR12ne1iGqbFaEHE8QeFBywhuj1MCPVJo26QdHj2LgUsDUB7VxdLxp6CnwwHb8bXw73miqGVEZjseyxn4TUd8vrDSYrj3kCc5GQvJCfdyP5S8fazGxGpuMGG7wZgGX4axMuDocAgMDoQabfdP8p18FXF6QXQ5GSH9bbq8VZEVJ6XYbTdkSA",
                "ValidationData": "{\"ProducerBLSSig\":\"pSvNfl8n/fyWHpptu+JJbdGFHKTHBfszyutWlaUox7sBYT1nMJE9otOqewu+7Vnji2sHJ6ZI3Mu+GWucwy118gA=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3],\"AggSig\":\"Kx6vsOIBODL1ICfdA/BQO8pluN6eCc5NkMZg0YmI0p4=\",\"BridgeSig\":[\"\",\"\",\"\",\"\"]}",
                "Epoch": 0,
                "Time": 1611568443,
                "RemainingBlockEpoch": 0,
                "EpochBlock": 0
            },
            "3": {
                "Height": 1441473,
                "Hash": "8c5d1b14483dacb474cdfdb9f997e200951161e4adebc40185dcdded168f938e",
                "TotalTxs": 23204,
                "BlockProducer": "121VhftSAygpEJZ6i9jGk6xmZQzAAaGHc4QKMcN4FCE4phKehicPyRdYkeAzrkLRLtdfh9aewpS7JYsC78XGiiPzchDp4kXV6CwEwnGj74oNVJ4FHvej3r2h75ecktE7YQbk5EKc7aD6Kek9g8xS3EjTbgMffeGgQWSi5pfPnv3eyqFV7aRmLs1cmBzWGcRiSo1x89n9QFv1AUbjaXUtjfdayxHgxVbCDNYSnm1V9fPpJPgS1iVmVQhyJR8rHVJR2xU2pkkyvXi2tfQTaGRpWDyXUnDBKEmRbwAz3Aigz36x1gsWat5xe4s4DNUD7qM9dnMnL3Woq5eu7qstfUZR5QRNikdPQRTDKvF5J2gMEriH642EM1jqm4parQfAD4Bx556irKYhphNLwexW6KprsjykGb3yySiJYgJamK8RWJ6ZBzXB",
                "ValidationData": "{\"ProducerBLSSig\":\"10xLs3xh2kVuQ38N27y4qHBRNiAZfS+VAWfGDAz4erlf7lcIRZGaQ6NnpDYbW/guCmmCG1QwH2P9+TpO8CVm7wA=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3,4],\"AggSig\":\"CIn/FuG5/De3/dllRwtanuj8XWd1CmT0OflGRPcGWTk=\",\"BridgeSig\":[\"\",\"\",\"\",\"\",\"\"]}",
                "Epoch": 0,
                "Time": 1611568447,
                "RemainingBlockEpoch": 0,
                "EpochBlock": 0
            },
            "4": {
                "Height": 1441158,
                "Hash": "81c314fe007904011fc219f5b11971d18cdefed241c64c92b11f43a93b53a478",
                "TotalTxs": 22326,
                "BlockProducer": "121VhftSAygpEJZ6i9jGkL7HbJ9vNLWKZTXCG9ioPj5NB2QupvJk9gcL7EsaTjRfjAuZxjaPqjPVzphV1iihwzsWhmeXqo1f7Pj6rkStRxPN74rvecwBDCRFjUFEeqjzFQGj8eTVJhx2GjNsotM64vkGDd819DkvARbatiURdHtXX4SBunnTqaUXB8WkrrhNCyUHA7p5nTaorpNkyNiR8vcTY4WywKW51NHZkFdS4K14RoELsuWvmhtH5irgpfRR5VZeubn8UbsZhSGEMLTQYKUcoNt7ERBd63r6Ddjw6rMKP4usAZgEikoHVQLM8oRtHnYukGPHbjcAuTKS3iYVjdmuBxswqYS8c6VQLh6Km6jjWLMk9y3g6JxdGwTthXVqPB2wEnwc6mqC3HcdJd2bpvL1vEtJvovaMwDbAiLT3sG9dBgr",
                "ValidationData": "{\"ProducerBLSSig\":\"oZvzPMxtppVn0DjIBR2YEEDUoFvS0KPhk+d2LSyaeH1tnEU+HkN10E4eGYj6LN7u7PvKUJ8nr9toiK6DX7edlwE=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3],\"AggSig\":\"p5TAKT5L5RLXHtqE+0imumFLSjOMVRgnB73QB1zHYRA=\",\"BridgeSig\":[\"\",\"\",\"\",\"\"]}",
                "Epoch": 0,
                "Time": 1611568453,
                "RemainingBlockEpoch": 0,
                "EpochBlock": 0
            },
            "5": {
                "Height": 1442873,
                "Hash": "0127efc822079104994d03ea288962e8c3fff7984b01a85a3294fb5e671bd47b",
                "TotalTxs": 27299,
                "BlockProducer": "121VhftSAygpEJZ6i9jGkLTjEZNu7mLzsgUoMRuKHjKzmDdzJeJ5z88DfmkFERDNx9CrhYMtBmW9tv8mZVnGYcnrqx7iS4w6LwBUbeQYTxicNkmKUH1cTs7WC2pbtCqcVcccnffWJqcFDzLNKDWvcF9y5RtgWxA1H8gJe471vizfHfMnDYeV6aXP65jPz2E6NPzUrNNqmzyYGoVJpSPitA6tf7RDtQjjJxvXLKk1xfzmPUEoeA9QYJMiTfb9CQTqht9Y8wg9JY5bUBiAe2Fx272tuE2jXYLZs6iPLfC6RkxVwSJNvNvaYA2Fbv7tPNUR5zGKUsGevJ5qJAtFzrMT4RxikKqqWWhUJMhPyrZGwQuDbpm9TAMX9gU1q4oPmMf95QAZaqi9q1aKSaPgPnsVZvSgWXaeVWt5rcNy54WWgxY1p3si",
                "ValidationData": "{\"ProducerBLSSig\":\"3Vyg2sJmUt+OoLLzD/6f8lZyKeqluDmfADEAZThitIE9xH0omOd8N2xW8EVFNVMnM5Xc9J3ZUf1kJyxg2rIQGgA=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,2,3],\"AggSig\":\"pKE2Xsp7PGsrzXv8xaD9juVNyK2IYFEhIQGWtRPiQfU=\",\"BridgeSig\":[\"\",\"\",\"\"]}",
                "Epoch": 0,
                "Time": 1611568453,
                "RemainingBlockEpoch": 0,
                "EpochBlock": 0
            },
            "6": {
                "Height": 1441354,
                "Hash": "fe784f40cb8cc911e62a04812c5abfc07ab01ae6a008e8e1a06d8444750e05cf",
                "TotalTxs": 66084,
                "BlockProducer": "121VhftSAygpEJZ6i9jGkQpJWrjngURVWvgqy2t7zPo9jtFiUoLK74Nb9UZa3cpMq33mvf5b5mdaaN8vH6xHbLYkjHo4EjY2kvnrkk8AE7SXr5JnDhfAUAiou45RGzZFCcX9UNEctrJQeuWWicmuiwp8FBE43GVm9Ah1mMAataoBTcKcCMbcfCZrwvHJkVMXfAX3nKNLBEKtAnAfX2ShURVy13U3ER7bBNnBn2FsTrWqYRskHQU5ePfunSv4VohBCqCeFSoxS47qda3V9AhvPCu6GH5zDpv7bCgw1uZ8F6fZ6jz68xqkEq4oVzDQsSvezvpUxai7d4Kc2qwv36Y3fzTvHpQrj19MrwGQPYGLhrMMGqVv5gfgGtnvehapCCjU3aBAin5keKR8KVdvzJ93jqJck4CADHCDbDWbhANsPCR7fDm8",
                "ValidationData": "{\"ProducerBLSSig\":\"26W5e1byl8apx9PGi1oghcSf2CNbfRzcbCqgIRUxoTxzr4Z7GoRxZriIvL1ZOenMCWZNMiWrnDtEUhk4Iw2hvgE=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3],\"AggSig\":\"FFToCqaBGLd1Mvq3SVBVoL0K4y//xT3T3UiaidoMPiA=\",\"BridgeSig\":[\"\",\"\",\"\",\"\"]}",
                "Epoch": 0,
                "Time": 1611568453,
                "RemainingBlockEpoch": 0,
                "EpochBlock": 0
            },
            "7": {
                "Height": 1441493,
                "Hash": "4fcf8bfc5e94a23c23c03b67ceb74ced28f639bb4177be724d0f308f39a4abb7",
                "TotalTxs": 22421,
                "BlockProducer": "121VhftSAygpEJZ6i9jGkEL4rE7x26sAsaYhQZggboHgHniDczMFkyvPnFqysakcWejU74MuHjrt5x6vKRGdSoq7PMauhpMECXUVzP26HBHzDgb8owYhfvNTTP6GgLUceavu8DgE7NuvSvQwUEMnPJfAj7CmGD1hbnTwJTTod3or4bGxqfn8DNfzaE2Krc2vvmAbaGQpq6xHr3a5eNZ2MYoRZbiwxabN9N4ng9WupPpmW492a1ewv7rdF5yuahskULwqKwLSPUvF6oG5BAtM3rfMUUSmNkXuB3P97sJqnsJgpt8YhNEhApH9x6cHHN2VTrKYEYn1SxAQ4EVvAqU39peTdS2ekoXEffzdVT8Gr8F47xfLDzXLnGj1imszsfCA6AnkpsRhjp4L9hFFFdDwJd13VygV9uQ331k8YiBy5Gh3ptmx",
                "ValidationData": "{\"ProducerBLSSig\":\"i29f+Ynegm4v4QcKWIiISgSywg2i9EYlTDawW46B1CMd8Bfe2AVKQht0t7yNCU7P6RHAMfKnB3Jyp/RUE533GAA=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3,4,5],\"AggSig\":\"I3z4ZZy/r3M1Zqosg1gg0nI9CxRcrHa2YUbpOWWrwlc=\",\"BridgeSig\":[\"\",\"\",\"\",\"\",\"\",\"\"]}",
                "Epoch": 0,
                "Time": 1611568453,
                "RemainingBlockEpoch": 0,
                "EpochBlock": 0
            }
        },
        "ActiveShards": 8
    },
    "Error": null,
    "Params": [],
    "Method": "getblockchaininfo",
    "Jsonrpc": "1.0"
}
```
Response Description:

