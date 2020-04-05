# survive.click

> **An artificial pandemic of happniess**



In order to create a system that can track a pandemic
on a global scale and in _real time_.

I suggest that we combine all the public platforms in the world into on single
massive database capable of holding a living data set.

> Combine all the computers in the world into one big computer?! But that's impossible!

I can't tell you if it's sane or not but I can _show_ you that it is
entierly possible:

Using modern computer science - cryptographically [Secure Ledgers](https://pfrazee.hashbase.io/blog/secure-ledgers-dont-require-proof-of-work) to be specific.

I have created a viral mini game that treats any and all platforms as it's own personal database - demonstrating completely decentralized metrics storage without user registrations.

The software has no server of it's own and lives
entierly on freely available resources.

Yes it is a "cloud virus", but it's a friendly happy virus that I hope will spread.


 <img src="./screen2.png" width="300" alt="Picture of the game"/>

## <a name="Play"></a>  How to play

The rules are simple

```
Once a day or once a week hide an mood pebble
somewhere in public to let us know you're still playing.
```
For now, that's it!


We're currently working on the expansion that will include
flashy graphs and diagrams and also maps support!

## Architecture Design notes

This game is a tiny cyber organism that does everything it can
to surivive.

Every time the user shares it's link the game has a chance to recruit
new players.

To make this a little bit more fun than chain-letters
every time the game is replicated, it's state mutates...

Letting each player add their own individual value to the shared link,
in turn making _all shared links uniquely valuable_.

The game was designed with the following paramters:

- No installation
- No registrations
- No database
- No API's/backends
- No tracking / analytics
- No direct network connections
- Maximal replication
- Minimal resource requirements
- Should run anywhere (even in places without internet)

If you're thinking blockchain, then yes you're not too far off,
it uses the same basic building block that blockchains and accounting systems use
a secure feed/ledger.

I have designed and implemented a microscopic cryptographically _secure feed_
that fits inside of an **URL**

Say hello to [PicoFeed](https://github.com/telamon/picofeed) (Cyber Virus RNA 🤯)

A tiny chain of blocks that infects social
platforms and uses their databases to store and propagate the game's
own data.

What makes me really excited is that it can be used on any platform or communication
channel that supports the act of sharing a simple URL.

Don't worry it's mostly harmless to the platform, as the picochains weight
below 1kilobyte.

That's about 0.5% or 200 times smaller than your avreage selfie. :)

The entire program is contained in 1 single file which
makes the game very easy to share on a limited or even without a network.

You can download the webpage to an usb-memory and the game will still
operate as intended without a server.

The game it self is only 180kilobytes in size, this is mostly because i'm
short on time ;) compressed it's 56k.

There is alot of more research embedded in this micro-project,
the decentralized electronic voting system (**caugh** Experimental Toy voting system) is contained in the [Cryptology](https://github.com/telamon/cryptology) repository

Enjoy!

P.S.
I almost forgot, here are the keys you need to collect votes,
To create an open incentive for the collection
and anonymization of the data is my next step in this project.
```
v0iD24gtg/ofoxLAWts1+upEqXmtCe+ZYnKuEnsFpio
eiXBv+DUz6HEN06RpUXZntYezvy6cc+/6ceJH8mM7k8
```

 <img src="./screen1.png" width="300" alt="Early prototype"/>



```ad
 _____                      _   _           _
|  __ \   Help Wanted!     | | | |         | |
| |  | | ___  ___ ___ _ __ | |_| |     __ _| |__  ___   ___  ___
| |  | |/ _ \/ __/ _ \ '_ \| __| |    / _` | '_ \/ __| / __|/ _ \
| |__| |  __/ (_|  __/ | | | |_| |___| (_| | |_) \__ \_\__ \  __/
|_____/ \___|\___\___|_| |_|\__|______\__,_|_.__/|___(_)___/\___|

If you're reading this it means that the docs are missing or in a bad state.

My research is producing public code at a higher rate than documentation,
thus you have my sincere apologies.

If you have any questions, PLEASE OPEN AN ISSUE -
I'll do my best to gingerly provide an answer.

I publish all of my work as Libre software and will continue to do so,
please drop me a penny at Patreon: https://www.patreon.com/decentlabs
and help fund experiments like these.
```

## <a name="Develop"></a> Develop

```bash
yarn start
```

## <a name="Deploy"></a> Deploy

```bash
yarn build
git commit -am "changes"
git push
```

## <a name="contribute"></a> Contributing

Ideas and contributions to the project are welcome. But you must follow the [guidelines](https://github.com/telamon/survive.click/blob/master/CONTRIBUTING.md).

## License

GNU AGPLv3 © Tony Ivanov
