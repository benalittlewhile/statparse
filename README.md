![image](https://user-images.githubusercontent.com/5431371/115607439-9bfb2680-a2aa-11eb-90e3-e2bd07765b28.png)


# statparse

I got really bored/tired of rolling all the stat blocks I need for Out of the Abyss, so I made this tool to roll mobs of stats for me at once.

## installation
You can either run `node statparse.js` from inside the repo folder, or run `install.sh` to make statparse available globally. The latter may require sudo depending on your environment. After installation statparse is then available anywhere by running `statparse "inputstring"`.

## syntax

to run:

`statparse "inputstring"`

inputstring is a string of the form 

`Nof(XdY+Z, AdB+C, K)`

Where N is the number of sets you'd like to make of the given rolls, X is the number of die for a given roll, Y is the number of sides for a given roll, and Z is a modifier on the roll. In this case A, B, and C are the same for another roll, and you can have as many as you like separated by commas. K is a static value that will be included in the output. Any whitespace surrounding a given roll string will be ignored, so if it's easier for you to read it that way then go for it.

Example for a single roll of 2d8+3:

`statparse "2d8+3"`

Example for 2 rolls of 1d4+2:

`statparse "2of(1d4+2)"`

Example for 4 rolls of 1d20+4 and 1d8+2:

`statparse "4of(1d20+4, 1d8+2)"`

Statparse also allows you to add static values to the output if you need to (for example, the ac of a monster). In this case you can just subsituted the given roll string for a number like so:

`statparse "6of(1d20+3, 14, 1d8+2)"`
