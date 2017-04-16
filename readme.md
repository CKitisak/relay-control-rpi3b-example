# Relay - RPI3 and NodeJS

Relay control on Raspberry PI 3 model B with NodeJS


### Installing other dependencies 

_Optional for Raspbain lite version_

```
    sudo apt-get install wiringpi
```


### Installing nodejs

```
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y build-essential
```


### Installing packages

```
	npm install raspi-io
	npm install johnny-five
```


_NOTE:_ 

* __restart__ is required when finished installing `raspi-io` at the first time

* __sudo__ is required when running `raspi-io`


### Running this example

__example 1: control a relay__
plug your relay on pin number `11` or `GPIO17` then run the command below

```
   node relay.js
```

you will see the relay will turn on for 3 seconds and you can also running command `relay.on()` and `relay.off` for manually turn relay on and off

__example 2: control a set of relays__
in this case, I used 6 relays on pins `11, 12, 13, 15, 16 and 18` or `GPIO17, 18, 22, 23, 24, 27` after plugged all of relays.

```
    node relays.js
```

the result of the command is turn on all relays for 2 seconds and then off for 2 seconds in loop.
When you stop it, all relays will turn off.


