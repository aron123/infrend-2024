# Informatikai rendszerek építése (2023/24. II. félév)

- [**Beadandó információk**](assignments.md)

- [Tanszéki weboldal](https://oktatas.iit.uni-miskolc.hu/doku.php?id=tanszek:oktatas:informatikai_rendszerek_epitese:informatikai_rendszerek_epitese)

## 1. hét
Követelmények ismertetése, szoftverek telepítése, ismerkedés az Angular keretrendszerrel.
- [Szoftverkövetelmények](sw_requirements.md)
- [Getting started with Angular](https://angular.io/start)
- [StackBlitz sample project](https://angular.io/generated/live-examples/getting-started-v0/stackblitz.html)

## 2. hét
Angular alkalmazások felépítése, sztring interpoláció és strukturális direktívák (`*ngIf`, `*ngFor`). Bootstrap alapok, grid rendszer.

- [Adatok](https://github.com/aron123/infrend-2024/blob/main/_data/applicants.ts)
- Projekt: [HR nyilvántartó rendszer](https://github.com/aron123/infrend-2024/tree/main/hr-application)

Dokumentációk, egyéb anyagok:
- [Bootstrap](https://getbootstrap.com/docs)
- [Emmet abbreviations](https://docs.emmet.io/abbreviations/syntax/) (+[Emmet in VSCode](https://code.visualstudio.com/docs/editor/emmet))

## 3. hét
Angular alkalmazás komponensekre bontása, komponensek közötti kommunikáció. Kódgenerálás (`ng generate`) és adatkötés eszközei (`@Input` és `@Output` dekorátorok, `EventEmitter` osztály).

- [Feladatok több komponens használatára](component-interaction.md)
- Projekt: [Szemantikus verziószámozás](https://github.com/aron123/infrend-2024/tree/main/semver)

Dokumentációk, egyéb anyagok:
- [Angular Components Overview](https://angular.io/guide/component-overview)
- [Sharing data between child and parent components](https://angular.io/guide/inputs-outputs)
- [Semantic Versioning 2.0.0](https://semver.org/)

## 4. hét
Az Angular router használata, guard-ok. Dependency injection, service osztályok.

- [Adatmodell](https://github.com/aron123/infrend-2024/blob/main/_data/chat-gpt.models.ts)

- Projekt: [AI Chat alkalmazás](https://github.com/aron123/infrend-2024/tree/main/ai-chat)

Dokumentáció:
- [Routing in SPAs](https://web.archive.org/web/20220715185902/https://dev.to/marcomonsanto/routing-in-spas-173i)
- [Common routing tasks in Angular](https://angular.io/guide/router)

## 5. hét
HTTP kérések kezelése Angular-ban.

- [HTTP protokoll](http.md)

- Projekt: [AI Chat alkalmazás](https://github.com/aron123/infrend-2024/tree/main/ai-chat) folytatása
    - [Görgetés script](scrolling.md)

Dokumentáció:
- [OpenAI Developer Platform](https://platform.openai.com/)

## 6. hét
Szerveroldali technológiák alapjai. HTTP szerver készítése Express.js segítségével. Adatbáziskezelés TypeORM-el.

- [Express.js alapok](express.md)
    - Projekt: [Greetings API](https://github.com/aron123/infrend-2024/tree/main/express-intro)
    
- [TypeORM alapok](typeorm.md)

Dokumentációk:
- [Express.js](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)

## 7-12. hét
A megismert technológiák gyakorlása, webalkalmazás fejlesztés.

- [Adatbázis](https://raw.githubusercontent.com/aron123/infrend-2024/main/_data/users.sql)
- [Feladatkiírás](https://edu.iit.uni-miskolc.hu/tanszek:oktatas:informatikai_rendszerek_epitese:feleves_feladat#banki_szamlavezetes)
- Projekt:
    - [Banki számlavezetés (szerda 18:00)](https://github.com/aron123/infrend-2024/tree/main/banking-app-sz18)


Hasznos anyagok:
- [Data Transfer Object tervezési minta](https://en.wikipedia.org/wiki/Data_transfer_object)
- [Angular - Proxying to a backend server](https://angular.io/guide/build#proxying-to-a-backend-server)

## Elérhetőség
Kiss Áron, tanszéki mérnök<br>
ME-GÉIK Informatikai Intézet

E-mail: kiss.aron@uni-miskolc.hu
