---
layout: default
title: getbeaconbeststatedetail
nav_order: 5
parent: Blockchain
has_children: false
---

### getbeaconbeststatedetail
---
### Parameters
---
### Example

Request body:
```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "getbeaconbeststatedetail",
    "params": []
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "BestBlockHash": "e18bf600815dc4b4b4a5935139fa6096c50ea0c87a3e4084155c13a4d536899c",
        "PreviousBestBlockHash": "1c2fe250766db5094f2d05beb1920e3b34c1eee61a888a8f1e3b551fe5278268",
        "BestShardHash": {
            "0": "ba4fcb1262dfac45557d0539d3864990710c7f297394be31d221027af5c97724",
            "1": "d813fca4cf4c6024487e092fb91a3d3a32df7ac67b8c02a2b0661cf9138a8983",
            "2": "fcacef9bd40548a385d72299273fc1b7ca5282819b478746f2c04902e78647fc",
            "3": "abb46b631e20b2ab7dda7342805f5d13d86646dc88b280d049525ab85e038316",
            "4": "0616792e12e1266570eb706a0bb4cadf0957d2bce132b8782974fde54e58d7c3",
            "5": "e5b91dba5dd9c6d920ccc82e9b60dd04cabd89a07f65961ca22334de535c01a2",
            "6": "e1d1c50e867996a49607d8296e4f5a7be02ad9e55650e1f6337145ce70deb8eb",
            "7": "630bf57ca9d4e165358a63475db53f98d0a4c19e293199b462551a7f1a126579"
        },
        "BestShardHeight": {
            "0": 1440070,
            "1": 1421315,
            "2": 1440323,
            "3": 1441645,
            "4": 1441330,
            "5": 1443045,
            "6": 1441526,
            "7": 1441665
        },
        "Epoch": 14412,
        "BeaconHeight": 1441126,
        "BeaconProposerIndex": 0,
        "BeaconCommittee": [
            {
                "IncPubKey": "1WBVehvXnEvoYQz4DdD33vcWE35orkgB3N1eDLCGKnc7KBbHGV",
                "MiningPubKey": {
                    "bls": "1EsVVFuKECRruZY8173i8dZGn9b4DutoJ6jradDVz6BFYi9R8hiGbuZkjDYHvnv9PhYVkdNER3BGseDxZnWm8eafM6ibjNcjndPVVSxmGFKEdBsziM83Kpei2d37esmVrhJGfsHWUxkgbKtwV3B8NsR38F1WSdLEmoC9MEMgY9WncAEM2JtEv",
                    "dsa": "162mgGn7haH6f46oxiQ3fT1h9ALKjYwgzNniTgi66V1akMyzdZF"
                }
            },
            {
                "IncPubKey": "1a9jQQFtunBB2zJ86w31kR7DSFE7XuraVjUYXQdAKFY15q5Du7",
                "MiningPubKey": {
                    "bls": "13SLSZG9Z4L5mTiECp2o8a2RepdtR3rB9MdLryz7sbvbbZmeUcFbQpSDvAoUno4bhzYZ2Gr8cBPnBmpDNbiUswmVx7Qk41rQvaQqjMVoA1DHvxcHtEdMstMBd86TqM3AzjMVTC3ca8gRpn31uu8ttju6Ktmx21xkSQjD1aZU8bjdFaKbyCx2V",
                    "dsa": "186SLDYbXW26Ww8cgTzxf6KFKwdamc8xZHmcnemSxGWNNCgWnBX"
                }
            },
            {
                "IncPubKey": "1i2qrYwZzgNrjvFpmDmCVG72Vnaye4FPzLYPk5cpjgy8QCo4oa",
                "MiningPubKey": {
                    "bls": "1R1wxijXGrRTPSzPP6n5QWnucje5GZ2mhmddKFBjrTy9gTS2ctq3MxUbQ2qD98WGhXJ791d4vBvxCMp66oUrpJrDKVT5wwfcir4JNXt4dzscfCFat64TUhfq5Uku53XnNmPrB9jXEd57d8XPQEBU4JVNHVPrRkp2C4QnkCJDHVevyKbHZFqhH",
                    "dsa": "15WvEt4sCaDUMNsnBDF9EvWcJ5JLGM4FKFeuA26xBL9Z1uDVDMA"
                }
            },
            {
                "IncPubKey": "1SdRA4PQj8x62SCJD1XP8QzH2pV1dcU4CGFdUkBTnXdaaNiRxX",
                "MiningPubKey": {
                    "bls": "1WBQsmhXioVt78F4XEpTZTTtSSEL9c8RJNJMntF8mYDZkic7Jn1qEpNmHKeRC8t3BB34ZjsBrDEUhCZ9PspKLh2VRM95MQf5PpstcxEAkEYANVSfXBoTCT5JF7RMVYHFVhTDeiRp259CJPpRLjwE2HrHFBLjF3du4EtAieyuQgkZ8ARaPJu1G",
                    "dsa": "17Jh5XHfSeBVhdTSDUwLEU9Lji2LPv1917AqXW6e3J1Rn3LXGhc"
                }
            }
        ],
        "BeaconPendingValidator": [],
        "CandidateShardWaitingForCurrentRandom": [],
        "CandidateBeaconWaitingForCurrentRandom": [],
        "CandidateShardWaitingForNextRandom": [],
        "CandidateBeaconWaitingForNextRandom": [],
        "RewardReceiver": {},
        "ShardCommittee": {
            "0": [
                {
                    "IncPubKey": "12bGNd9ofTJSbZYB2BXtaAQpsRV4a3KJ3xP5kLQmoxYBMaqhtXw",
                    "MiningPubKey": {
                        "bls": "1NBXb2zU5M1EVH5L4Y14zrtVAjfn6XCfoK1pma7wnQFSmQoGV4rQi6Yr73QeyLH5wCuBumPZSNaM7xB7TSLoQfX1ZkypS39dGbwzciMGbknFhArMzWaBUEgo2yJDvjvS2fov9v5mnoEoZsAk8yge2iLfxV8J9ZnibWzSCCsd2sJYuqA5G7tBD",
                        "dsa": "172wA7JRm6i9PMoK38KiiuLqz1pdQBVXifaiEcaa39ch2epYMbD"
                    }
                },
                {
                    "IncPubKey": "1jTb2CjHbu6dZbuPrumUvtfMkE2qkk39F3M3cnAmsm1kvTYhEY",
                    "MiningPubKey": {
                        "bls": "1PTKWKzSaTaSsJ5SPF5NrUn2f1aBmhJF3mPVkdFWU97ZkSe8qRtrnQJWQ4DuvNwvrdEXhWxxZmEscnbf9ZFdKLSVUB5Ps6UmXd1ta7m4HcKPuEg3P8whX9Fd7j4YKPsDP1LMnEcZseAhWdAS92yWVcUKmDPVNaSLfAxQWanLESJTfzVAMAYbA",
                        "dsa": "16repCYwZ6rSYYmHnyycjsUrqZgoJWCZ1tm2WPpwAxwoFiA4jzE"
                    }
                },
                {
                    "IncPubKey": "1AfSyPovFkLVqVqarTudLJf5mTfYiPywRaC2aABNEWdYnXsCru",
                    "MiningPubKey": {
                        "bls": "18y444d4zRwh5EiFfh5PLgY6bNReT1S8kJkfmCw3vvCCeavNaDydkMkDSmZTagfefsUS5KP17mVaja2dsqhPPqrFpG77QzjgeYM4ZfsGSYJRKA4NQPkUmjdw6TXDow95Eryey9VM24vPaeS3kDiAwk1kztFziNr9txtYytfQb3DLRknjJAi1t",
                        "dsa": "17tAnFFHKVHz9tNfcqZ67LVZjiMVPhVEyz7tmXhgVsJ9rQMYiAA"
                    }
                },
                {
                    "IncPubKey": "12WJoJ9XHV1sSqx6pGibcNHaL5R8ZvazxWrKdnVmb19YvzG2HhK",
                    "MiningPubKey": {
                        "bls": "1JT7kZiQ1Zk1Fi3c2udA8PbTXmcgRK1CmoaxmJq485zLxrmWSdLdaESp5b4RPXDKDCvNm6gGv9yqmiEuTJC6WLidDvhgDsvUa4fRqTrAH87pLdwMSWtDsrMjHsbK1g5iGC7dZZksBVYCqhraGPsNx1J9hKvwtF3bNHHKATPeJYX2hovNgxbcr",
                        "dsa": "17A8vduMiK5mNMX9neg4SZYT2G4EUdiHUNeofkUeSVjha2vxjKF"
                    }
                }
            ],
            "1": [
                {
                    "IncPubKey": "1PD653LB5QrJTwgEH7CJvWgV8Ybj6oZpM9SpjJjhNrPSArPrwq",
                    "MiningPubKey": {
                        "bls": "1HYwzziZ5fZehMx22YMVu9T4PF5GDaYEWR78KGDd5xcGGqanLJxSmEWW8VM7t7ufxwn4dCRGYbrHMPjo7tAN4iUNsbF58rpwVxHqFVFLVbhL21MhzYqLMGfYv8TCkJLrRCQk62qEAJRRZs6e1wV9eQoti1Q5rwY7dMCDtxn2352nK6YZYDTR7",
                        "dsa": "16YCXqTgGAqP8QWnP3usPFbaVYy9VdoJKYq6N7cRYmYgQFdiegz"
                    }
                },
                {
                    "IncPubKey": "12mo8C8ELPufpQZbiB9aKaemRLZbXp4BejQ7Ahmv8xVw7W4tvqw",
                    "MiningPubKey": {
                        "bls": "1XLpkP2iVUMyrqwnRpsZ4egCoF8FrwtRHW2jSore4oCdJLnq8QkYB5bUmDrr1bdzU3NHxtFgEkgtvKAc8m4rXvZ1xHrk7iQQ7RZw7g9mA8p66ssiEXevimpiiSC1ofcLQ7ma3Ld1Q3kVJKg5pKxKoMfctyoN2jL8v8sah8HmmbMtdjd4Y2dPh",
                        "dsa": "162cVdx9iN7a7ckLY9MqcjcEEcLf1o9eSf6G8XCXUzpfGaK87DR"
                    }
                },
                {
                    "IncPubKey": "1QaCJBinG7rWCFACrwzexzB3L2cHj9qRLjPEmY9XGUwnJJS8R2",
                    "MiningPubKey": {
                        "bls": "1SkCNZoaM2mMqynjB3hjhgX6weiLrQgshF4jKybnLjKA8qMSkeYfAo4ZFR8sjQ9vTRu6ztmqKGY2kj7JCQfrRm86KFmc9BGzhwQr37jizNqgn9eF1BoJNz6t74GgqT8oCsKWauJfkqvT38utEjUooaWkagQ1EUMGATmaDfDwTx4nhhDNS34mG",
                        "dsa": "16LqHr6ZwsfZEEkeEtQMhMNhjULD11k7Y34KsoFUkwj9E2KE7Uf"
                    }
                },
                {
                    "IncPubKey": "1224qPnfZFMuDpVNi4cnwpcoFXrcSBumyrEfPNp12WqzhQeXn7n",
                    "MiningPubKey": {
                        "bls": "13svmYReejr4ZWG3ssymUcnCkbyLTBfx92onMn9BrdKXivjTPzdJapJFZwWhJSFfaY1DaCiXLd9aj98MPjgEMMjn4EDU2B84Ja2UFRzXRo57fweGRL27BrCCJjQsdab2GooLnozGZGU1F82uwowkeoj2ro4nf2pKHhT9gkAjTemdCWMutSHQv",
                        "dsa": "14y6VW1WoWmHbJKhtrtGpidvCQEu2bRi9H4r9BCLiWfPngkXcSs"
                    }
                }
            ],
            "2": [
                {
                    "IncPubKey": "1YSoef4pw1XEXbmTWc3RV4eXA7KCMxG3pKeYVZVDwEcNtkPEg4",
                    "MiningPubKey": {
                        "bls": "1QfisW6Jb79VjRo8i4voTsrzuC1EF2so5mur57DpGuZjjuQeEdooEwv5KLuVjTiVJ7LaMtMhTeT4JJBd2Ftg6wqgvQcRKYwdQWsmczqiG3USHyNTMDu9AtMtFhJTYxqFQD71puLhbVBW1vGftRahP71idhwEN49rMFVW1CsPvuyAkpFJHgdXS",
                        "dsa": "17QcHgDYitTeUBoTpRzL2rHhLHxJGgJdSsZeFYwKeac2kbBSwPm"
                    }
                },
                {
                    "IncPubKey": "1dGzoN7kALDsEom67SRs8Gi8Gz6UQfvcCco9ZK8oaGeTr5bt1e",
                    "MiningPubKey": {
                        "bls": "1HwbtKSscTsNRFi2gF6CjbfWnxy3aSvRvRw14s2qfo7Bg7BibjD5ooScsvLzJCFPnXL4Y1hYb7gwLU2VkL7S8gv22VqBL8fp3CsjF7JDzRjkEgqrHNatBxKL7TFCQ6ha1NHH6cde3wT4PWs9bhskMEzz4HE9zEbto53SuKtZxDRjYvRNRJJaA",
                        "dsa": "15f77mLxNPxCd2nmgssKf4AzLARAHbg4JRWqpwMRMreFsrVgTot"
                    }
                },
                {
                    "IncPubKey": "14Kk5jMF3AR7R9emV3TBRMo9erfmTc8bf8pem9PZsmUsYs9WsU",
                    "MiningPubKey": {
                        "bls": "1BnRdxmBE9phjPcyquJU3hom8zacfDLQNxns73QybASDhJgL1FQ2gxu2cvMP37SbtjbpCmcps8eWvRDNhDX4JSp87Szq358vkKy2PmLWbVb5t9a1nRXLEPgXQvqZtMG1Fxu9vJcnKRkwKGGP4ngoCPjrNfoqD3mRqUdRbCUNhHgyT5FoySb8E",
                        "dsa": "17DEqcP4XnTueQfP1ZRAbcjCSHbJ51uRzDcCVn7HXCb9GMf2PoH"
                    }
                },
                {
                    "IncPubKey": "1XMJdguP6kCPTGLEfWFbTd9VnoCJQ8Vz3AAcDQSzZKgNM2esYv",
                    "MiningPubKey": {
                        "bls": "14omSYhE9eVLb5d42NR6YBYnQTMFVhDQiREJ1PssALU4TfC8SL1SpmAbxkGPhvK8tzN91bf5FLzzMNrfEwqJy12ABcbwSKU8Ze1Fp1tdFMPmxWNx8oJgcKi3cuvDHz8EryBjuQPJHpNzdUhuL2FHeB256GJ68qoz2TpG96L9heT925AXWLn9j",
                        "dsa": "18KsGESVu2b2Vy9Gitcfywaan5wEEa7gekYzngU6Hoj8foyPEpD"
                    }
                }
            ],
            "3": [
                {
                    "IncPubKey": "12q2LpUB1Atcyf5NuUWdHdVHgwGs59rRR2xTn1PP8fvMfG539fY",
                    "MiningPubKey": {
                        "bls": "16Yo8cnnxS6zXuVNWJCccZZCr6TZirc5iw68vkrHNDEQNA3446EQtcpXV3eLyHu7vmSCMSiyUxn8kqLLBfDz2VLuhHde15biU1hLi64RQykiWizFAKdtwqP3mTA2QQTFnGnPtdYhCstkxSbDyRdahyMExXa83ihJDWMmMsK2eyStFqVrsPPDT",
                        "dsa": "17gxdwRHQf5hFNSRJZuHK3pL3mXw4sjMSSqbrhddUdnEknV4Q1P"
                    }
                },
                {
                    "IncPubKey": "1bqUA19CKhZNG6xsYv6DQ4DdPjF1CvA7CFvQ4gEt6mXmqi5JVR",
                    "MiningPubKey": {
                        "bls": "1BKRK7gpkoSi1FGwig5XxkLHjzfeYeRo5NKqirLuPcr2MHvxaGXB5s3gQ6ha9ybJ23rB4LUy7e9nwfMfq717RF9r7SFFZHHUhwTTY8aahpJ5XwsBCeQ8uxt6rfr9SQ88N3KvCZsH7VLZWJaQ3eq3RoZCRtrp3Tg3Uuaw2GR6D9i9aVu5YgQmP",
                        "dsa": "17qcNfWhniM7D7ADpSsHv379NG9tUsC4BGgbtcaL6V2QxvDVDiy"
                    }
                },
                {
                    "IncPubKey": "1iyghzz2vXJzGjnh5BX7uBMCg3q8e5HNtBs8tHQ8dR296WETBv",
                    "MiningPubKey": {
                        "bls": "12keVezN2W5JttynK8sfkCgEQ7N9y4oCofyzMaBuXykZbDdRUek7Dg228fwQhA2uBKpZ6GufHuxXJf8A1fHTdWNWZMrUbSrRRbGeGZMucsngMuJpt8Tv8oZsdbPdWB3A3LmZy61KdQcWFxvo4mVQxyNVg7C7imymiKt8CPXg53uedb3a7QvVw",
                        "dsa": "18DoTaWas4Labsv6Rkb9c8cbUEJp5pUrDdbu9i2ngCJzEQ8DnV3"
                    }
                },
                {
                    "IncPubKey": "12e2kE8ChqBeSNfTbU5h3nhPzzaWkE6RKRmpF7DK34cMgNQGm8",
                    "MiningPubKey": {
                        "bls": "19Fpetqk4s3u17wfHyC31PvX9fJxYx19sBq72NMZXi6VpWozozNnL1pwfjRTK5nZH2ZvQeYsPs9gLLVS5yGtNTzoy18jyeTTEk87rgdZRL8x1yC9FKY6X5CV9zBJ2R5fYoxpw7ukQqPf1cD9sGPgH8T94KfmY1JUsD38kVB2WSPD6H8Cndo1B",
                        "dsa": "15hw23Ec2reTxdbR56siJp4BRAPZ1bF8hjEAy4Nm1b11Nxmf8w9"
                    }
                },
                {
                    "IncPubKey": "1KV7Kr7b8ECB7qXfihFzChkBa1Hptf27vKupZ7yxsRMPG8bqzH",
                    "MiningPubKey": {
                        "bls": "19nDjLiTiE6cHBV7Duc5LnwXV6w8bhBGu8hvuNWvFqEfSJdZfaCRKpYRchGzZ1uYVMAYvavJJk7HvC2cM7VJanBtoiiWksFJc9md55MM4DnPQAevQbjuiiNDY6yGWos7YgwYYEchdrjrGL37oYxDpN6VVDpyhdRnpuzU9iFyuNYwbD1z2TQYs",
                        "dsa": "16jpwRpyLGoz1EdgKhHYgMhbVLFh9GQAQw5XzufDwQLAbf2wBef"
                    }
                }
            ],
            "4": [
                {
                    "IncPubKey": "1wPjV3ocufFtyXJFTNYoh9xZc3bpdVqZVRYz2w6vMkm4dwQXSz",
                    "MiningPubKey": {
                        "bls": "1JqyRuRnMRoyYxkE3vJhLvCePvAmgf8KaABVE3Qz2JiT2QPGU8fDDFpxGvZbvxeBDMxvJYuTLiFPE3C1LaLA5WJWn9if6CiTzCS8BnSUx3gSmSBY9WZbUp6qSHrLb8rioogUVHocNQjwXaztBZ73d7k5e2eAxQUSFiqp5Jr1crXPspuMhfs2z",
                        "dsa": "17G1uXy8kHBUJqDqwjLpWUeFzJxq9vN4GPpf3yUj4KieBnhhxyC"
                    }
                },
                {
                    "IncPubKey": "1J9NreMty1r1DWL27fvHG9SWEREtmr6Lv3oPZKqpTgCw3mg9bg",
                    "MiningPubKey": {
                        "bls": "1WVeXshijaXnGNYAQcNXXEgBbkiXMbcgNQnWbGp2qKknmZMneeZkN1z4LBtpVM26LVuVomz9xYojRwFeeu2LqTGSNy5wMH1BDbDynVpoRvurM7QJe7PsUqxrZ6usZnAaiCZmR5LnDguh3k9j9JaoDaDVcqiYsoeDvz9zG4dqzKDy4GVBB9VbL",
                        "dsa": "177nZ2rdPWgPS7f1GezhPKvWdZuicrmc1aDgVmmk1nnEcniPRHA"
                    }
                },
                {
                    "IncPubKey": "1CHsaNjuXJeyhJzL5CFKEsrHja4huphBmx1SGBj5QsTSNjEaNw",
                    "MiningPubKey": {
                        "bls": "1JpyvJbkXBfP8AnPfV1FTYa9x2JZBQnUyFbLfRyvKdnd9LPWvMR6obVKSSeW5BNRPuUx39GkivaYmHH1HeubjcPfwc3tx4XM9s9dZUtNhhDqfTfx41VKEyPaXbhK7dxnQCNiAnLL2vg1mRtcHrSvYXYFtyvVdCeWTRnu43cgJxvw7nAevXTxk",
                        "dsa": "18cMKAaiazij2F3ZcHA1qdqZ4r1K1tGHwWJaSCY1nJaY7juuQvM"
                    }
                },
                {
                    "IncPubKey": "12A3EKUvvPiP692ZYk46DFLGd6V1YQnAEuM3QcYSXBaGzj2YkFb",
                    "MiningPubKey": {
                        "bls": "1Hn6eMQaxoS59m3TQUUdJyHQDe8k1djL5zvKaW59Ayibe6fkgsJ4kwmdrRa5WvpZQbDZLzS2h146j5GhQAckBV5NFqfEePzzX6AqQtm4CMKSWtJYizrYdHTx2KXhAFFoYWz1VamByDQfGYHzyWYeYcr96N45RcTGaj5E82icX4NfdLY6qLTdZ",
                        "dsa": "17odg6jYEdGFYF7aq452M2kbScFSBbcpjZFezR22yQLT82RWzo5"
                    }
                },
                {
                    "IncPubKey": "1eej8x3nSfcmknBrR3jkbv97h7GHrJ7sCNLNUoxHqem4fPMe9V",
                    "MiningPubKey": {
                        "bls": "1TgJD9emZHRxga1AMFjvt3dck6g8Rtc3623RhkAgshpfTgK3YbaL6cK8J82qMcUDogEw1ATLADMvnTjDtZTMy9BPLMV5kvNbeNkNtFAPp8nzDGsGH6uGYsUEPntGTW4qnBchQgP3Cb9wra7JZexb9AQWJEwKNgjpN6dypnRmhMJqRGiRHzcts",
                        "dsa": "15pyVVQszWhhFVuTxDA7yoXJbVpfuPvnReUuyy8gFiyWRFQsFxu"
                    }
                }
            ],
            "5": [
                {
                    "IncPubKey": "1xYH8NXWZ9e2y1juNEERZ7BcBQVR3jGbYvKQEkdthsRDrkr4r5",
                    "MiningPubKey": {
                        "bls": "1DfZMcusqwJyXqkh5nWbqGfGJjDZ6ch2iDQCR9CES31UUTodWKdsZpLarTF6RyTy2byxoPV3TopPzCA7V1zbALevqXzc5KqLdZpBBgGzQ9fHfpywum9p6MViu47CxJmFCR7KBBdyF45dstBcCWQNshcd7S1unuWB1sz8LbUQmUjCxxZyc5mCU",
                        "dsa": "15TzqHXqJkpue2Qmb85oVpnM8CAES9eHHLap6F9RWtyoiFAHTDd"
                    }
                },
                {
                    "IncPubKey": "1L4kggex5JBLYs8JoDoVvDqRFD775YwHHoqMTX4HsTkJ2EWZwK",
                    "MiningPubKey": {
                        "bls": "1B9kUCYkApettZykgshYMbXnujnWGP6TFS1aicik755eimvfAB7xZMDsaaEGy6oL2NJeXR8H4m1UMUS4yAma1jqY52jfAqF14BzZFMANtRHweWdd2SiNbwXHVkoZhfzrQ4TV2eXahRwVf9ubLzXaB5qaUUFLD1x8CjinMLMQLYtbP2P5oGTaH",
                        "dsa": "16cKA6Ei6hXovKktyd8C73vK1QfZjzLajxGEqnh4c5JtVH67AHR"
                    }
                },
                {
                    "IncPubKey": "1wxbWjhk9GUW4KQToCW8m3foynYiSTwRWnFGUKmAX7f4GKn6GZ",
                    "MiningPubKey": {
                        "bls": "18N5e8Wvpaz1giVnYWZ4xwi4WdRDoEta5ZAca1f9UkVfhRcjQboL2ZczeRBsR7yRCLNigH7QeCFZdpyo4c9bRzg7GgiZ2wFqSNbdFD5Ay5U2N592MrX4p7eT4Y2LSsbhheLjE4JqnDSPVkkzCEjtJyoghNqxe3hTzorYWz9MsYvugPjy6uxs2",
                        "dsa": "15UF4Ncu2L8GWcL2tn6ddvuLZ6XPSKSQz9WcsHjZs9xccCsGczh"
                    }
                },
                {
                    "IncPubKey": "12rGhQVvmBAJLg3hMJREZhiW9bokFva7Y7TEtruQZP2ovkVPmA9",
                    "MiningPubKey": {
                        "bls": "15QjMLYh7Bjzr8a1wJgiPqsQ938AJMpD6JHjehcfKynnUytZohuX2j8rKnmXCzF72NgpTuePEqy4NciYUgktsw3XSdJF4sAJWZfwhN7ckoqVTDZEx62Ssbscv3Z4QdQ7dfQXLdFnwfSCpcmej2Nji1CdiXMwtUWJGubC8jE9hdpKMKUMtFjSA",
                        "dsa": "16e99qCtHppmoqDnfLeCx8gKX47BJEW5Xpikyg74AJayrcM7iaE"
                    }
                }
            ],
            "6": [
                {
                    "IncPubKey": "12QEtqSbKqKiY15MNTW47neXvgq78rV3iDdRu8dBNMGKa8ZfZDd",
                    "MiningPubKey": {
                        "bls": "1SmYypHB5DHYeRBK3WAPkc6hxMbpSQ1omZ1xMCZFk7VfrT46FeuCK4dpHEemyp14m6TvyQZKLpTHbjg6eNKM3fGuKAiiMHkYKkgEXXmvFdxR1RSxFiiMmFJekpUQGGbEeQydBuE8VdjeG6tY4XYbWgVDKXBDZ6j4bM9C5wsH3XiAhPRjudJry",
                        "dsa": "16hRMqtgawqpb16dZbAWKzMnpYbmRpPhQJiuKweScDnq1oeJtyT"
                    }
                },
                {
                    "IncPubKey": "12VnMsG6bUMMTBNSo347HCAgsAaWkHxhVZyBmEg78v8cW5Car94",
                    "MiningPubKey": {
                        "bls": "1G4hzR7ZybPiKT8BeqsmwkrsmhVcTjaRFKoYJ6LBEwNZrQkpXYVzsfCP5wgxYtA3jmHxAS8H679dT2YQNR2AF61oJDqQXmYMqdfp3CbPzjKoyGx3PieZmM9JXUsiFmQz9QEvq8xuJxSXKND4LoGpew2SA7DsdW1p292tovLmaorqUMmmiQoJH",
                        "dsa": "157pQioR3X6xem5GRkCUNWrZYMJ6SbbietN3PyAdoa2G16etxZU"
                    }
                },
                {
                    "IncPubKey": "127iKWptHFYx12V1cZFsuhCoX9rTXMqoteyhdKoTrKrbuapjnNp",
                    "MiningPubKey": {
                        "bls": "1WyAd1nurxGWz4moWXKxhu7Ldb5bCBK9S9xTN4e3cFdHaoPATsxnJT2UyWsDeAaJ73zhgwfyRfbyprTDbeLSSs8j6uw9muaprjd6rXKEpU64WBXuLAwXa44Wp9TNBBKwtbuQUYcASYpPuW9AcBGYTuZY66Hr1oPQTy8ECbgEQfkEY6nd1DomJ",
                        "dsa": "15X3rHdKGxRQWxX4e8RUb96ZRmKkrDUmjBMweBW5v4gVZ5sag73"
                    }
                },
                {
                    "IncPubKey": "12U5WJNVmeQxFaeXxfKnwHXvzVw4k2VeKTCh77RVg8XE4k9wJ4r",
                    "MiningPubKey": {
                        "bls": "1FbG2VycDpzHDh9qqPoDb5piJmu9rb9cnt9rwmYMJNNnmFrU8nbf1vQ7VS26jr3fCmjcvs4KZxo61veRSVnY1MvsALVzJgETf9fwNQRS6KsWeWQG38MisiXuog2CKhU5x1EvWNWijsqN86yviHxaBUgebYSwodKSyrXZwBEcdo3i4tbzSu2Rt",
                        "dsa": "15fESiotPvqjdpEc3b2wt8VPAcQt5NGkkR6MZ1uhmHEpbP2SK5e"
                    }
                },
                {
                    "IncPubKey": "12QoRbc9rCKotenQKTKkEG4ur9wwHLUvJS96vi321yDF5FnzDEw",
                    "MiningPubKey": {
                        "bls": "1X8TRan7LUKsmaczrhxa9GQ4Vuv8zHFTryCRsc62VPhfYmk11uJFDDsfCdWk6x9cRZznEucbGBfNxGecJSYXkwr43dnHipMxf5nkCK3MkY8qZCKiqE9H1Hn62j6YMPswPjFA2zsCPXn3pjnMJx5Lm2hJ1fErDoTFXmVzSsXu59vpWoCpjWvNN",
                        "dsa": "17wCAbtwxJEAywSuCSCzQeTgGNAErtQtEJ5UejQsg8LWDEUBt9U"
                    }
                }
            ],
            "7": [
                {
                    "IncPubKey": "1WVNkLUVXAhccxfBH9WVHVE1WbHueBJJCoXyzrfdnUtSjqFwiW",
                    "MiningPubKey": {
                        "bls": "1GR7i3RpJdt215TqcDxdDznFTiZz7YBpCLCGAbSt2ZKXV9d2JQBoR1hVrNtYiHmFSmfLvQUfBxu4JYPLK4aBZ3sDh9JahRBFc3Xbr1dvDVkX9SjqgTtTUAG4aPzhKrJJpYsDVZsRqn1GkenJk6BHt6r4XDwcQTJbQ76hPH2nfZupSsTmDZD1W",
                        "dsa": "17dsHFiosE2WpNcjcQy6DMAicsAxEY6LoDcdkzNht9gpAbV9pNK"
                    }
                },
                {
                    "IncPubKey": "1xi6oAKhJSTYKwecZb1fZdWgBCJgjZVPjLkT7fhkcDcSQxynjd",
                    "MiningPubKey": {
                        "bls": "14ox5ukU3WHqVZaou9RqTkd3MBpY7xZSuKUUZFXDoocDQqqdHQLfAYg889WSbDxv1TFpgjPDGxE3YAi7yE96DmU7PrxyhJfbmnRa7k8KUqAYYJb6wbUAhFfHjFu2JxAA7pNZwmgwsSkDq2uEdu6C1R25Ln6h1PKKQr4zMwAy6BRZBKzNCSZ87",
                        "dsa": "17MVwYsxTNceLyrgj1s9wKRdGwx19BpnPFKd6CG5uaBPjdMM6qZ"
                    }
                },
                {
                    "IncPubKey": "12HDTSmADFhocqTRrfZVmLrDbuTY7wtbpW6ns5CUzV3ictMnS6Y",
                    "MiningPubKey": {
                        "bls": "184kEofFf8QThkhA1Coimzdu8BqX6Amj6GeH15wFwcWKa1zsDJA2UKRSxPMzDagzY7jGt66ofX1e7JJk5RRzan3XPDgeEvJkwg5ssEwryZBWEFh9DXvstinEfHqQ2FBjdxgwUZdYx8gNjJo4Lp73yo8USPZ3f4RCrY8NkUAtz3ope6VCEqu92",
                        "dsa": "15zMvgXfeoiLPGB6gWsRybVhMGHfNKrdPsqCwup162r6dr6vDZZ"
                    }
                },
                {
                    "IncPubKey": "12LoCmjteyF1AFDmLxr4QHrxYz1fVuFgUiAdoNKaeAfNyywqxAg",
                    "MiningPubKey": {
                        "bls": "1Y52NYbn6wEJ7DYqxFt1dtUeEYsfFZBnmENtVurHeTBr7G4a7uALEnZZ4DTi9YDLjYbyXo8UNGWVe5p8Rv9zGeprP1rKLyiefEzKQsh5T1AWJZoSTpe7W9rhM42PresSogLjxjkACiQjyZRHbZmgAgixNdt5CBJxSFTpN94eK8tjWkLBJMEBk",
                        "dsa": "167fZq1eJLAXAgbZvPps7b3cUGS7EgSVCTiFBkdvERDMhU8Qfba"
                    }
                },
                {
                    "IncPubKey": "1BwH1jG6Ei23L54RtFdr63d88Ua4UkD1wMmAN9aPRBcMUJCD7i",
                    "MiningPubKey": {
                        "bls": "19wt87wszjT1bmox2xDUzDUPcxNbabnbw45Zx9wt7sQt2h1yCaHoyXtXRZq3f2sZRDgBoRCd4qbpYeFThDuSWYVp615bGsA2A7PPi9byuXCpJX6NbbmeGeT7wiun8CEfZ9MCEUGhEe73MtzVtpaFDwsYBh7CstytXdA4vs4FGabQf63BRFSPC",
                        "dsa": "16Ebkvp8Tovh5i2xhG8v6YN3zouzw7LrxcZxU3huVXx47C1Sae2"
                    }
                },
                {
                    "IncPubKey": "12w4VEeUh8QsFE7JEeQ2QQXpeHUGnHco3JsUoSkU5okPeyUqcdW",
                    "MiningPubKey": {
                        "bls": "13NVQDXoaUAWmBGKFVRzDVK3uBjPThmNC77bT8dKUdxGJs8EPSoiDPmQ3rwDYEh3XugMHTS4mNeFXykkVWT9UC9NkrS7kqYVGA5sW82wQFvWjfeMxvh51FLWVLpwyVmV4xHEhg8WeK5egyhAzUBbLdSXJjcMJtk8HN7YqVJjfEgpRUAXKQYCi",
                        "dsa": "17VtjfKY9m4mpgAZ8NhWtqJeuJzMdVPvpxdSzaTH9tTDbq6bfLT"
                    }
                }
            ]
        },
        "ShardPendingValidator": {
            "0": [],
            "1": [],
            "2": [],
            "3": [],
            "4": [],
            "5": [],
            "6": [],
            "7": []
        },
        "AutoStaking": [
            {
                "IncPubKey": "1SdRA4PQj8x62SCJD1XP8QzH2pV1dcU4CGFdUkBTnXdaaNiRxX",
                "MiningPubKey": {
                    "bls": "1WBQsmhXioVt78F4XEpTZTTtSSEL9c8RJNJMntF8mYDZkic7Jn1qEpNmHKeRC8t3BB34ZjsBrDEUhCZ9PspKLh2VRM95MQf5PpstcxEAkEYANVSfXBoTCT5JF7RMVYHFVhTDeiRp259CJPpRLjwE2HrHFBLjF3du4EtAieyuQgkZ8ARaPJu1G",
                    "dsa": "17Jh5XHfSeBVhdTSDUwLEU9Lji2LPv1917AqXW6e3J1Rn3LXGhc"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12mo8C8ELPufpQZbiB9aKaemRLZbXp4BejQ7Ahmv8xVw7W4tvqw",
                "MiningPubKey": {
                    "bls": "1XLpkP2iVUMyrqwnRpsZ4egCoF8FrwtRHW2jSore4oCdJLnq8QkYB5bUmDrr1bdzU3NHxtFgEkgtvKAc8m4rXvZ1xHrk7iQQ7RZw7g9mA8p66ssiEXevimpiiSC1ofcLQ7ma3Ld1Q3kVJKg5pKxKoMfctyoN2jL8v8sah8HmmbMtdjd4Y2dPh",
                    "dsa": "162cVdx9iN7a7ckLY9MqcjcEEcLf1o9eSf6G8XCXUzpfGaK87DR"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "14Kk5jMF3AR7R9emV3TBRMo9erfmTc8bf8pem9PZsmUsYs9WsU",
                "MiningPubKey": {
                    "bls": "1BnRdxmBE9phjPcyquJU3hom8zacfDLQNxns73QybASDhJgL1FQ2gxu2cvMP37SbtjbpCmcps8eWvRDNhDX4JSp87Szq358vkKy2PmLWbVb5t9a1nRXLEPgXQvqZtMG1Fxu9vJcnKRkwKGGP4ngoCPjrNfoqD3mRqUdRbCUNhHgyT5FoySb8E",
                    "dsa": "17DEqcP4XnTueQfP1ZRAbcjCSHbJ51uRzDcCVn7HXCb9GMf2PoH"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1dGzoN7kALDsEom67SRs8Gi8Gz6UQfvcCco9ZK8oaGeTr5bt1e",
                "MiningPubKey": {
                    "bls": "1HwbtKSscTsNRFi2gF6CjbfWnxy3aSvRvRw14s2qfo7Bg7BibjD5ooScsvLzJCFPnXL4Y1hYb7gwLU2VkL7S8gv22VqBL8fp3CsjF7JDzRjkEgqrHNatBxKL7TFCQ6ha1NHH6cde3wT4PWs9bhskMEzz4HE9zEbto53SuKtZxDRjYvRNRJJaA",
                    "dsa": "15f77mLxNPxCd2nmgssKf4AzLARAHbg4JRWqpwMRMreFsrVgTot"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12QoRbc9rCKotenQKTKkEG4ur9wwHLUvJS96vi321yDF5FnzDEw",
                "MiningPubKey": {
                    "bls": "1X8TRan7LUKsmaczrhxa9GQ4Vuv8zHFTryCRsc62VPhfYmk11uJFDDsfCdWk6x9cRZznEucbGBfNxGecJSYXkwr43dnHipMxf5nkCK3MkY8qZCKiqE9H1Hn62j6YMPswPjFA2zsCPXn3pjnMJx5Lm2hJ1fErDoTFXmVzSsXu59vpWoCpjWvNN",
                    "dsa": "17wCAbtwxJEAywSuCSCzQeTgGNAErtQtEJ5UejQsg8LWDEUBt9U"
                },
                "IsAutoStake": true
            },
            {
                "IncPubKey": "1AfSyPovFkLVqVqarTudLJf5mTfYiPywRaC2aABNEWdYnXsCru",
                "MiningPubKey": {
                    "bls": "18y444d4zRwh5EiFfh5PLgY6bNReT1S8kJkfmCw3vvCCeavNaDydkMkDSmZTagfefsUS5KP17mVaja2dsqhPPqrFpG77QzjgeYM4ZfsGSYJRKA4NQPkUmjdw6TXDow95Eryey9VM24vPaeS3kDiAwk1kztFziNr9txtYytfQb3DLRknjJAi1t",
                    "dsa": "17tAnFFHKVHz9tNfcqZ67LVZjiMVPhVEyz7tmXhgVsJ9rQMYiAA"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1YSoef4pw1XEXbmTWc3RV4eXA7KCMxG3pKeYVZVDwEcNtkPEg4",
                "MiningPubKey": {
                    "bls": "1QfisW6Jb79VjRo8i4voTsrzuC1EF2so5mur57DpGuZjjuQeEdooEwv5KLuVjTiVJ7LaMtMhTeT4JJBd2Ftg6wqgvQcRKYwdQWsmczqiG3USHyNTMDu9AtMtFhJTYxqFQD71puLhbVBW1vGftRahP71idhwEN49rMFVW1CsPvuyAkpFJHgdXS",
                    "dsa": "17QcHgDYitTeUBoTpRzL2rHhLHxJGgJdSsZeFYwKeac2kbBSwPm"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1KV7Kr7b8ECB7qXfihFzChkBa1Hptf27vKupZ7yxsRMPG8bqzH",
                "MiningPubKey": {
                    "bls": "19nDjLiTiE6cHBV7Duc5LnwXV6w8bhBGu8hvuNWvFqEfSJdZfaCRKpYRchGzZ1uYVMAYvavJJk7HvC2cM7VJanBtoiiWksFJc9md55MM4DnPQAevQbjuiiNDY6yGWos7YgwYYEchdrjrGL37oYxDpN6VVDpyhdRnpuzU9iFyuNYwbD1z2TQYs",
                    "dsa": "16jpwRpyLGoz1EdgKhHYgMhbVLFh9GQAQw5XzufDwQLAbf2wBef"
                },
                "IsAutoStake": true
            },
            {
                "IncPubKey": "12q2LpUB1Atcyf5NuUWdHdVHgwGs59rRR2xTn1PP8fvMfG539fY",
                "MiningPubKey": {
                    "bls": "16Yo8cnnxS6zXuVNWJCccZZCr6TZirc5iw68vkrHNDEQNA3446EQtcpXV3eLyHu7vmSCMSiyUxn8kqLLBfDz2VLuhHde15biU1hLi64RQykiWizFAKdtwqP3mTA2QQTFnGnPtdYhCstkxSbDyRdahyMExXa83ihJDWMmMsK2eyStFqVrsPPDT",
                    "dsa": "17gxdwRHQf5hFNSRJZuHK3pL3mXw4sjMSSqbrhddUdnEknV4Q1P"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12A3EKUvvPiP692ZYk46DFLGd6V1YQnAEuM3QcYSXBaGzj2YkFb",
                "MiningPubKey": {
                    "bls": "1Hn6eMQaxoS59m3TQUUdJyHQDe8k1djL5zvKaW59Ayibe6fkgsJ4kwmdrRa5WvpZQbDZLzS2h146j5GhQAckBV5NFqfEePzzX6AqQtm4CMKSWtJYizrYdHTx2KXhAFFoYWz1VamByDQfGYHzyWYeYcr96N45RcTGaj5E82icX4NfdLY6qLTdZ",
                    "dsa": "17odg6jYEdGFYF7aq452M2kbScFSBbcpjZFezR22yQLT82RWzo5"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1CHsaNjuXJeyhJzL5CFKEsrHja4huphBmx1SGBj5QsTSNjEaNw",
                "MiningPubKey": {
                    "bls": "1JpyvJbkXBfP8AnPfV1FTYa9x2JZBQnUyFbLfRyvKdnd9LPWvMR6obVKSSeW5BNRPuUx39GkivaYmHH1HeubjcPfwc3tx4XM9s9dZUtNhhDqfTfx41VKEyPaXbhK7dxnQCNiAnLL2vg1mRtcHrSvYXYFtyvVdCeWTRnu43cgJxvw7nAevXTxk",
                    "dsa": "18cMKAaiazij2F3ZcHA1qdqZ4r1K1tGHwWJaSCY1nJaY7juuQvM"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12rGhQVvmBAJLg3hMJREZhiW9bokFva7Y7TEtruQZP2ovkVPmA9",
                "MiningPubKey": {
                    "bls": "15QjMLYh7Bjzr8a1wJgiPqsQ938AJMpD6JHjehcfKynnUytZohuX2j8rKnmXCzF72NgpTuePEqy4NciYUgktsw3XSdJF4sAJWZfwhN7ckoqVTDZEx62Ssbscv3Z4QdQ7dfQXLdFnwfSCpcmej2Nji1CdiXMwtUWJGubC8jE9hdpKMKUMtFjSA",
                    "dsa": "16e99qCtHppmoqDnfLeCx8gKX47BJEW5Xpikyg74AJayrcM7iaE"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12LoCmjteyF1AFDmLxr4QHrxYz1fVuFgUiAdoNKaeAfNyywqxAg",
                "MiningPubKey": {
                    "bls": "1Y52NYbn6wEJ7DYqxFt1dtUeEYsfFZBnmENtVurHeTBr7G4a7uALEnZZ4DTi9YDLjYbyXo8UNGWVe5p8Rv9zGeprP1rKLyiefEzKQsh5T1AWJZoSTpe7W9rhM42PresSogLjxjkACiQjyZRHbZmgAgixNdt5CBJxSFTpN94eK8tjWkLBJMEBk",
                    "dsa": "167fZq1eJLAXAgbZvPps7b3cUGS7EgSVCTiFBkdvERDMhU8Qfba"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12HDTSmADFhocqTRrfZVmLrDbuTY7wtbpW6ns5CUzV3ictMnS6Y",
                "MiningPubKey": {
                    "bls": "184kEofFf8QThkhA1Coimzdu8BqX6Amj6GeH15wFwcWKa1zsDJA2UKRSxPMzDagzY7jGt66ofX1e7JJk5RRzan3XPDgeEvJkwg5ssEwryZBWEFh9DXvstinEfHqQ2FBjdxgwUZdYx8gNjJo4Lp73yo8USPZ3f4RCrY8NkUAtz3ope6VCEqu92",
                    "dsa": "15zMvgXfeoiLPGB6gWsRybVhMGHfNKrdPsqCwup162r6dr6vDZZ"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12bGNd9ofTJSbZYB2BXtaAQpsRV4a3KJ3xP5kLQmoxYBMaqhtXw",
                "MiningPubKey": {
                    "bls": "1NBXb2zU5M1EVH5L4Y14zrtVAjfn6XCfoK1pma7wnQFSmQoGV4rQi6Yr73QeyLH5wCuBumPZSNaM7xB7TSLoQfX1ZkypS39dGbwzciMGbknFhArMzWaBUEgo2yJDvjvS2fov9v5mnoEoZsAk8yge2iLfxV8J9ZnibWzSCCsd2sJYuqA5G7tBD",
                    "dsa": "172wA7JRm6i9PMoK38KiiuLqz1pdQBVXifaiEcaa39ch2epYMbD"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1wPjV3ocufFtyXJFTNYoh9xZc3bpdVqZVRYz2w6vMkm4dwQXSz",
                "MiningPubKey": {
                    "bls": "1JqyRuRnMRoyYxkE3vJhLvCePvAmgf8KaABVE3Qz2JiT2QPGU8fDDFpxGvZbvxeBDMxvJYuTLiFPE3C1LaLA5WJWn9if6CiTzCS8BnSUx3gSmSBY9WZbUp6qSHrLb8rioogUVHocNQjwXaztBZ73d7k5e2eAxQUSFiqp5Jr1crXPspuMhfs2z",
                    "dsa": "17G1uXy8kHBUJqDqwjLpWUeFzJxq9vN4GPpf3yUj4KieBnhhxyC"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1wxbWjhk9GUW4KQToCW8m3foynYiSTwRWnFGUKmAX7f4GKn6GZ",
                "MiningPubKey": {
                    "bls": "18N5e8Wvpaz1giVnYWZ4xwi4WdRDoEta5ZAca1f9UkVfhRcjQboL2ZczeRBsR7yRCLNigH7QeCFZdpyo4c9bRzg7GgiZ2wFqSNbdFD5Ay5U2N592MrX4p7eT4Y2LSsbhheLjE4JqnDSPVkkzCEjtJyoghNqxe3hTzorYWz9MsYvugPjy6uxs2",
                    "dsa": "15UF4Ncu2L8GWcL2tn6ddvuLZ6XPSKSQz9WcsHjZs9xccCsGczh"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "127iKWptHFYx12V1cZFsuhCoX9rTXMqoteyhdKoTrKrbuapjnNp",
                "MiningPubKey": {
                    "bls": "1WyAd1nurxGWz4moWXKxhu7Ldb5bCBK9S9xTN4e3cFdHaoPATsxnJT2UyWsDeAaJ73zhgwfyRfbyprTDbeLSSs8j6uw9muaprjd6rXKEpU64WBXuLAwXa44Wp9TNBBKwtbuQUYcASYpPuW9AcBGYTuZY66Hr1oPQTy8ECbgEQfkEY6nd1DomJ",
                    "dsa": "15X3rHdKGxRQWxX4e8RUb96ZRmKkrDUmjBMweBW5v4gVZ5sag73"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1a9jQQFtunBB2zJ86w31kR7DSFE7XuraVjUYXQdAKFY15q5Du7",
                "MiningPubKey": {
                    "bls": "13SLSZG9Z4L5mTiECp2o8a2RepdtR3rB9MdLryz7sbvbbZmeUcFbQpSDvAoUno4bhzYZ2Gr8cBPnBmpDNbiUswmVx7Qk41rQvaQqjMVoA1DHvxcHtEdMstMBd86TqM3AzjMVTC3ca8gRpn31uu8ttju6Ktmx21xkSQjD1aZU8bjdFaKbyCx2V",
                    "dsa": "186SLDYbXW26Ww8cgTzxf6KFKwdamc8xZHmcnemSxGWNNCgWnBX"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1WBVehvXnEvoYQz4DdD33vcWE35orkgB3N1eDLCGKnc7KBbHGV",
                "MiningPubKey": {
                    "bls": "1EsVVFuKECRruZY8173i8dZGn9b4DutoJ6jradDVz6BFYi9R8hiGbuZkjDYHvnv9PhYVkdNER3BGseDxZnWm8eafM6ibjNcjndPVVSxmGFKEdBsziM83Kpei2d37esmVrhJGfsHWUxkgbKtwV3B8NsR38F1WSdLEmoC9MEMgY9WncAEM2JtEv",
                    "dsa": "162mgGn7haH6f46oxiQ3fT1h9ALKjYwgzNniTgi66V1akMyzdZF"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1jTb2CjHbu6dZbuPrumUvtfMkE2qkk39F3M3cnAmsm1kvTYhEY",
                "MiningPubKey": {
                    "bls": "1PTKWKzSaTaSsJ5SPF5NrUn2f1aBmhJF3mPVkdFWU97ZkSe8qRtrnQJWQ4DuvNwvrdEXhWxxZmEscnbf9ZFdKLSVUB5Ps6UmXd1ta7m4HcKPuEg3P8whX9Fd7j4YKPsDP1LMnEcZseAhWdAS92yWVcUKmDPVNaSLfAxQWanLESJTfzVAMAYbA",
                    "dsa": "16repCYwZ6rSYYmHnyycjsUrqZgoJWCZ1tm2WPpwAxwoFiA4jzE"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1224qPnfZFMuDpVNi4cnwpcoFXrcSBumyrEfPNp12WqzhQeXn7n",
                "MiningPubKey": {
                    "bls": "13svmYReejr4ZWG3ssymUcnCkbyLTBfx92onMn9BrdKXivjTPzdJapJFZwWhJSFfaY1DaCiXLd9aj98MPjgEMMjn4EDU2B84Ja2UFRzXRo57fweGRL27BrCCJjQsdab2GooLnozGZGU1F82uwowkeoj2ro4nf2pKHhT9gkAjTemdCWMutSHQv",
                    "dsa": "14y6VW1WoWmHbJKhtrtGpidvCQEu2bRi9H4r9BCLiWfPngkXcSs"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1bqUA19CKhZNG6xsYv6DQ4DdPjF1CvA7CFvQ4gEt6mXmqi5JVR",
                "MiningPubKey": {
                    "bls": "1BKRK7gpkoSi1FGwig5XxkLHjzfeYeRo5NKqirLuPcr2MHvxaGXB5s3gQ6ha9ybJ23rB4LUy7e9nwfMfq717RF9r7SFFZHHUhwTTY8aahpJ5XwsBCeQ8uxt6rfr9SQ88N3KvCZsH7VLZWJaQ3eq3RoZCRtrp3Tg3Uuaw2GR6D9i9aVu5YgQmP",
                    "dsa": "17qcNfWhniM7D7ADpSsHv379NG9tUsC4BGgbtcaL6V2QxvDVDiy"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1BwH1jG6Ei23L54RtFdr63d88Ua4UkD1wMmAN9aPRBcMUJCD7i",
                "MiningPubKey": {
                    "bls": "19wt87wszjT1bmox2xDUzDUPcxNbabnbw45Zx9wt7sQt2h1yCaHoyXtXRZq3f2sZRDgBoRCd4qbpYeFThDuSWYVp615bGsA2A7PPi9byuXCpJX6NbbmeGeT7wiun8CEfZ9MCEUGhEe73MtzVtpaFDwsYBh7CstytXdA4vs4FGabQf63BRFSPC",
                    "dsa": "16Ebkvp8Tovh5i2xhG8v6YN3zouzw7LrxcZxU3huVXx47C1Sae2"
                },
                "IsAutoStake": true
            },
            {
                "IncPubKey": "1PD653LB5QrJTwgEH7CJvWgV8Ybj6oZpM9SpjJjhNrPSArPrwq",
                "MiningPubKey": {
                    "bls": "1HYwzziZ5fZehMx22YMVu9T4PF5GDaYEWR78KGDd5xcGGqanLJxSmEWW8VM7t7ufxwn4dCRGYbrHMPjo7tAN4iUNsbF58rpwVxHqFVFLVbhL21MhzYqLMGfYv8TCkJLrRCQk62qEAJRRZs6e1wV9eQoti1Q5rwY7dMCDtxn2352nK6YZYDTR7",
                    "dsa": "16YCXqTgGAqP8QWnP3usPFbaVYy9VdoJKYq6N7cRYmYgQFdiegz"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1xi6oAKhJSTYKwecZb1fZdWgBCJgjZVPjLkT7fhkcDcSQxynjd",
                "MiningPubKey": {
                    "bls": "14ox5ukU3WHqVZaou9RqTkd3MBpY7xZSuKUUZFXDoocDQqqdHQLfAYg889WSbDxv1TFpgjPDGxE3YAi7yE96DmU7PrxyhJfbmnRa7k8KUqAYYJb6wbUAhFfHjFu2JxAA7pNZwmgwsSkDq2uEdu6C1R25Ln6h1PKKQr4zMwAy6BRZBKzNCSZ87",
                    "dsa": "17MVwYsxTNceLyrgj1s9wKRdGwx19BpnPFKd6CG5uaBPjdMM6qZ"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12WJoJ9XHV1sSqx6pGibcNHaL5R8ZvazxWrKdnVmb19YvzG2HhK",
                "MiningPubKey": {
                    "bls": "1JT7kZiQ1Zk1Fi3c2udA8PbTXmcgRK1CmoaxmJq485zLxrmWSdLdaESp5b4RPXDKDCvNm6gGv9yqmiEuTJC6WLidDvhgDsvUa4fRqTrAH87pLdwMSWtDsrMjHsbK1g5iGC7dZZksBVYCqhraGPsNx1J9hKvwtF3bNHHKATPeJYX2hovNgxbcr",
                    "dsa": "17A8vduMiK5mNMX9neg4SZYT2G4EUdiHUNeofkUeSVjha2vxjKF"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1QaCJBinG7rWCFACrwzexzB3L2cHj9qRLjPEmY9XGUwnJJS8R2",
                "MiningPubKey": {
                    "bls": "1SkCNZoaM2mMqynjB3hjhgX6weiLrQgshF4jKybnLjKA8qMSkeYfAo4ZFR8sjQ9vTRu6ztmqKGY2kj7JCQfrRm86KFmc9BGzhwQr37jizNqgn9eF1BoJNz6t74GgqT8oCsKWauJfkqvT38utEjUooaWkagQ1EUMGATmaDfDwTx4nhhDNS34mG",
                    "dsa": "16LqHr6ZwsfZEEkeEtQMhMNhjULD11k7Y34KsoFUkwj9E2KE7Uf"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12VnMsG6bUMMTBNSo347HCAgsAaWkHxhVZyBmEg78v8cW5Car94",
                "MiningPubKey": {
                    "bls": "1G4hzR7ZybPiKT8BeqsmwkrsmhVcTjaRFKoYJ6LBEwNZrQkpXYVzsfCP5wgxYtA3jmHxAS8H679dT2YQNR2AF61oJDqQXmYMqdfp3CbPzjKoyGx3PieZmM9JXUsiFmQz9QEvq8xuJxSXKND4LoGpew2SA7DsdW1p292tovLmaorqUMmmiQoJH",
                    "dsa": "157pQioR3X6xem5GRkCUNWrZYMJ6SbbietN3PyAdoa2G16etxZU"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12w4VEeUh8QsFE7JEeQ2QQXpeHUGnHco3JsUoSkU5okPeyUqcdW",
                "MiningPubKey": {
                    "bls": "13NVQDXoaUAWmBGKFVRzDVK3uBjPThmNC77bT8dKUdxGJs8EPSoiDPmQ3rwDYEh3XugMHTS4mNeFXykkVWT9UC9NkrS7kqYVGA5sW82wQFvWjfeMxvh51FLWVLpwyVmV4xHEhg8WeK5egyhAzUBbLdSXJjcMJtk8HN7YqVJjfEgpRUAXKQYCi",
                    "dsa": "17VtjfKY9m4mpgAZ8NhWtqJeuJzMdVPvpxdSzaTH9tTDbq6bfLT"
                },
                "IsAutoStake": true
            },
            {
                "IncPubKey": "1WVNkLUVXAhccxfBH9WVHVE1WbHueBJJCoXyzrfdnUtSjqFwiW",
                "MiningPubKey": {
                    "bls": "1GR7i3RpJdt215TqcDxdDznFTiZz7YBpCLCGAbSt2ZKXV9d2JQBoR1hVrNtYiHmFSmfLvQUfBxu4JYPLK4aBZ3sDh9JahRBFc3Xbr1dvDVkX9SjqgTtTUAG4aPzhKrJJpYsDVZsRqn1GkenJk6BHt6r4XDwcQTJbQ76hPH2nfZupSsTmDZD1W",
                    "dsa": "17dsHFiosE2WpNcjcQy6DMAicsAxEY6LoDcdkzNht9gpAbV9pNK"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1XMJdguP6kCPTGLEfWFbTd9VnoCJQ8Vz3AAcDQSzZKgNM2esYv",
                "MiningPubKey": {
                    "bls": "14omSYhE9eVLb5d42NR6YBYnQTMFVhDQiREJ1PssALU4TfC8SL1SpmAbxkGPhvK8tzN91bf5FLzzMNrfEwqJy12ABcbwSKU8Ze1Fp1tdFMPmxWNx8oJgcKi3cuvDHz8EryBjuQPJHpNzdUhuL2FHeB256GJ68qoz2TpG96L9heT925AXWLn9j",
                    "dsa": "18KsGESVu2b2Vy9Gitcfywaan5wEEa7gekYzngU6Hoj8foyPEpD"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12e2kE8ChqBeSNfTbU5h3nhPzzaWkE6RKRmpF7DK34cMgNQGm8",
                "MiningPubKey": {
                    "bls": "19Fpetqk4s3u17wfHyC31PvX9fJxYx19sBq72NMZXi6VpWozozNnL1pwfjRTK5nZH2ZvQeYsPs9gLLVS5yGtNTzoy18jyeTTEk87rgdZRL8x1yC9FKY6X5CV9zBJ2R5fYoxpw7ukQqPf1cD9sGPgH8T94KfmY1JUsD38kVB2WSPD6H8Cndo1B",
                    "dsa": "15hw23Ec2reTxdbR56siJp4BRAPZ1bF8hjEAy4Nm1b11Nxmf8w9"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1iyghzz2vXJzGjnh5BX7uBMCg3q8e5HNtBs8tHQ8dR296WETBv",
                "MiningPubKey": {
                    "bls": "12keVezN2W5JttynK8sfkCgEQ7N9y4oCofyzMaBuXykZbDdRUek7Dg228fwQhA2uBKpZ6GufHuxXJf8A1fHTdWNWZMrUbSrRRbGeGZMucsngMuJpt8Tv8oZsdbPdWB3A3LmZy61KdQcWFxvo4mVQxyNVg7C7imymiKt8CPXg53uedb3a7QvVw",
                    "dsa": "18DoTaWas4Labsv6Rkb9c8cbUEJp5pUrDdbu9i2ngCJzEQ8DnV3"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1eej8x3nSfcmknBrR3jkbv97h7GHrJ7sCNLNUoxHqem4fPMe9V",
                "MiningPubKey": {
                    "bls": "1TgJD9emZHRxga1AMFjvt3dck6g8Rtc3623RhkAgshpfTgK3YbaL6cK8J82qMcUDogEw1ATLADMvnTjDtZTMy9BPLMV5kvNbeNkNtFAPp8nzDGsGH6uGYsUEPntGTW4qnBchQgP3Cb9wra7JZexb9AQWJEwKNgjpN6dypnRmhMJqRGiRHzcts",
                    "dsa": "15pyVVQszWhhFVuTxDA7yoXJbVpfuPvnReUuyy8gFiyWRFQsFxu"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1J9NreMty1r1DWL27fvHG9SWEREtmr6Lv3oPZKqpTgCw3mg9bg",
                "MiningPubKey": {
                    "bls": "1WVeXshijaXnGNYAQcNXXEgBbkiXMbcgNQnWbGp2qKknmZMneeZkN1z4LBtpVM26LVuVomz9xYojRwFeeu2LqTGSNy5wMH1BDbDynVpoRvurM7QJe7PsUqxrZ6usZnAaiCZmR5LnDguh3k9j9JaoDaDVcqiYsoeDvz9zG4dqzKDy4GVBB9VbL",
                    "dsa": "177nZ2rdPWgPS7f1GezhPKvWdZuicrmc1aDgVmmk1nnEcniPRHA"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1L4kggex5JBLYs8JoDoVvDqRFD775YwHHoqMTX4HsTkJ2EWZwK",
                "MiningPubKey": {
                    "bls": "1B9kUCYkApettZykgshYMbXnujnWGP6TFS1aicik755eimvfAB7xZMDsaaEGy6oL2NJeXR8H4m1UMUS4yAma1jqY52jfAqF14BzZFMANtRHweWdd2SiNbwXHVkoZhfzrQ4TV2eXahRwVf9ubLzXaB5qaUUFLD1x8CjinMLMQLYtbP2P5oGTaH",
                    "dsa": "16cKA6Ei6hXovKktyd8C73vK1QfZjzLajxGEqnh4c5JtVH67AHR"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12QEtqSbKqKiY15MNTW47neXvgq78rV3iDdRu8dBNMGKa8ZfZDd",
                "MiningPubKey": {
                    "bls": "1SmYypHB5DHYeRBK3WAPkc6hxMbpSQ1omZ1xMCZFk7VfrT46FeuCK4dpHEemyp14m6TvyQZKLpTHbjg6eNKM3fGuKAiiMHkYKkgEXXmvFdxR1RSxFiiMmFJekpUQGGbEeQydBuE8VdjeG6tY4XYbWgVDKXBDZ6j4bM9C5wsH3XiAhPRjudJry",
                    "dsa": "16hRMqtgawqpb16dZbAWKzMnpYbmRpPhQJiuKweScDnq1oeJtyT"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1i2qrYwZzgNrjvFpmDmCVG72Vnaye4FPzLYPk5cpjgy8QCo4oa",
                "MiningPubKey": {
                    "bls": "1R1wxijXGrRTPSzPP6n5QWnucje5GZ2mhmddKFBjrTy9gTS2ctq3MxUbQ2qD98WGhXJ791d4vBvxCMp66oUrpJrDKVT5wwfcir4JNXt4dzscfCFat64TUhfq5Uku53XnNmPrB9jXEd57d8XPQEBU4JVNHVPrRkp2C4QnkCJDHVevyKbHZFqhH",
                    "dsa": "15WvEt4sCaDUMNsnBDF9EvWcJ5JLGM4FKFeuA26xBL9Z1uDVDMA"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "1xYH8NXWZ9e2y1juNEERZ7BcBQVR3jGbYvKQEkdthsRDrkr4r5",
                "MiningPubKey": {
                    "bls": "1DfZMcusqwJyXqkh5nWbqGfGJjDZ6ch2iDQCR9CES31UUTodWKdsZpLarTF6RyTy2byxoPV3TopPzCA7V1zbALevqXzc5KqLdZpBBgGzQ9fHfpywum9p6MViu47CxJmFCR7KBBdyF45dstBcCWQNshcd7S1unuWB1sz8LbUQmUjCxxZyc5mCU",
                    "dsa": "15TzqHXqJkpue2Qmb85oVpnM8CAES9eHHLap6F9RWtyoiFAHTDd"
                },
                "IsAutoStake": false
            },
            {
                "IncPubKey": "12U5WJNVmeQxFaeXxfKnwHXvzVw4k2VeKTCh77RVg8XE4k9wJ4r",
                "MiningPubKey": {
                    "bls": "1FbG2VycDpzHDh9qqPoDb5piJmu9rb9cnt9rwmYMJNNnmFrU8nbf1vQ7VS26jr3fCmjcvs4KZxo61veRSVnY1MvsALVzJgETf9fwNQRS6KsWeWQG38MisiXuog2CKhU5x1EvWNWijsqN86yviHxaBUgebYSwodKSyrXZwBEcdo3i4tbzSu2Rt",
                    "dsa": "15fESiotPvqjdpEc3b2wt8VPAcQt5NGkkR6MZ1uhmHEpbP2SK5e"
                },
                "IsAutoStake": false
            }
        ],
        "CurrentRandomNumber": 3056064225872470758,
        "CurrentRandomTimeStamp": 1611569427,
        "IsGetRandomNumber": false,
        "MaxBeaconCommitteeSize": 4,
        "MinBeaconCommitteeSize": 4,
        "MaxShardCommitteeSize": 32,
        "MinShardCommitteeSize": 4,
        "ActiveShards": 8,
        "LastCrossShardState": {
            "0": {
                "1": 1432638,
                "2": 1438124,
                "3": 1438545,
                "4": 1439251,
                "5": 1439733,
                "6": 1438956,
                "7": 1433573
            },
            "1": {
                "0": 1419204,
                "2": 1370782,
                "3": 1302012,
                "4": 1332659,
                "5": 1369027,
                "6": 1359645,
                "7": 1414612
            },
            "2": {
                "0": 1438408,
                "1": 1387991,
                "3": 1433627,
                "4": 1397112,
                "5": 1398783,
                "6": 1438996,
                "7": 1398804
            },
            "3": {
                "0": 1440139,
                "1": 1397144,
                "2": 1405054,
                "4": 1404688,
                "5": 1398021,
                "6": 1336842,
                "7": 1404782
            },
            "4": {
                "0": 1440543,
                "1": 1321877,
                "2": 1276146,
                "3": 1276244,
                "5": 1276146,
                "6": 1425264,
                "7": 1432152
            },
            "5": {
                "0": 1401530,
                "1": 1399472,
                "2": 1338055,
                "3": 1277982,
                "4": 1277885,
                "6": 1416493,
                "7": 1431831
            },
            "6": {
                "0": 1432333,
                "1": 1418271,
                "2": 1415468,
                "3": 1336744,
                "4": 1344200,
                "5": 1414943,
                "7": 1400483
            },
            "7": {
                "0": 1434975,
                "1": 1430493,
                "2": 1322448,
                "3": 1322448,
                "4": 1322448,
                "5": 1322448,
                "6": 1322448
            }
        },
        "ShardHandle": null
    },
    "Error": null,
    "Params": [],
    "Method": "getbeaconbeststatedetail",
    "Jsonrpc": "1.0"
}
```
Response Description:
