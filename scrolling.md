# Görgetés az oldal aljára

Az oldalon belüli görgetés egy nem szép, de kétségkívül rövid módja.

```ts
scrollToBottom() {
    setTimeout(() => window.scrollTo(0, document.querySelector('.message-box')!.scrollHeight), 200);
}
```