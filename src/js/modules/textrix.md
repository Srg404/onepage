## Textrix.js

### A lightweight JavaScript library for add a Matrix effect on your texts

---

For a better result, apply a line-height with your css and use a monospace font but isn't mandatory.

init textrix.js and configure the effect:

**index.html**

```html
<script src="mitrax.js"></script>
```

**app.js**

```javascript
/* textrix.init(@dom-selector, @options, @callback (optional)); */
textrix.init("textrix", "{}", function () {
  console.log("callback - textrix-js animation is finished");
});
```

**By default mitraxJS use only this characters :**

```javascript
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
```

### `Options`

| key                   | type    | example                                                               |
| --------------------- | ------- | --------------------------------------------------------------------- |
| `textrix.autoStart`   | bolean  | true (default)                                                        |
| `textrix.extraChar`   | string  | "µ$#"                                                                 |
| `textrix.maxDuration` | number  | 2 (second)                                                            |
| `textrix.speed`       | value   | 'slow', 'normal' (default) ,high'                                     |
| `textrix.infini`      | boolean | false (default)                                                       |
| `textrix.newCharList` | string  | "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZéèàùç" (default) |

### `Actions`

`textrix.stop()` (stop animation)

`textrix.start()` (launch annimation from start)

**example :**

```html
<style>
  .mitrax > span {
    display: inline-block;
  }
</style>

<p class="myText">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ille ridens:
  Video, inquit, quid agas; Hoc enim constituto in philosophia constituta sunt
  omnia. Nihil illinc huc pervenit. Satis est ad hoc responsum. Nihilo magis.
  Duo Reges: constructio interrete.
</p>
<button class="play">Play</button>
<script>
  const myEffect = new textrix(".myText", "{
      autoStart : false,
      extraChar : '░▒▓▀█▄■',
      maxDuration: 2
      }", function () {
          console.log("animation is finished");
  });

  document.querySelector('.play').event('click', () => { myEffect.start() })
</script>
```
