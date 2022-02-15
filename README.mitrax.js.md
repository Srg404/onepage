## Mitrax.js

### A lightweight JavaScript library for add a Matrix effect on your texts

---

For a better result use a monospace font but isn't mandatory.

init mitrax.js and configure the effect:

**index.html**

```html
<script src="mitrax.js"></script>
```

**app.js**

```javascript
/* mitraxJS.init(@dom-id, @options, @callback (optional)); */
mitraxJS.init("mitrax", "{}", function () {
  console.log("callback - mitrax-js animation is finished");
});
```

**By default mitraxJS use only this characters :**

```javascript
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZéèàùç";
```

### `Options`

| key                  | type   | example                                                               |
| -------------------- | ------ | --------------------------------------------------------------------- |
| `mitrax.autoStart`   | bolean | true (default)                                                        |
| `mitrax.extraChar`   | string | "µ$#"                                                                 |
| `mitrax.maxDuration` | number | 2 (second)                                                            |
| `mitrax.newCharList` | string | "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZéèàùç" (default) |

### `Actions`

`mitraxJS.stop()` (stop animation)

`mitraxJS.start()` (launch annimation from start)

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
  const myEffect = new mitraxJS(".myText", "{
      autoStart : false,
      extraChar : '░▒▓▀█▄■',
      maxDuration: 2
      }", function () {
          console.log("animation is finished");
  });

  document.querySelector('.play').event('click', () => { myEffect.start() })
</script>
```

/_ Note pour moi _/

- Ajouter des span sur chaque lettre pour fixer la width (permet d'utiliser n'importe quelle typo)

- ajouter la class mitrax sur l'element

- ajouter une css pour appliquer inline-block sur tout les span enfant direct de la class .mitrax

- a init verifier si tous les charactéres du texte ce trouve bien dans la charlist utilisée
