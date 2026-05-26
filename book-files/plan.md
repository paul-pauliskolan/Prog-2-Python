## Plan: P2 Python som webbplats

Bygg om kursen från `p2-python-kurs` till en webbplats med kapitel som nav-nivå och varje lektion som egen sida, med `chapters` som bas. Rekommenderad riktning är att återanvända den nuvarande chapter-siten som ram, flytta över kursinnehåll strukturerat, använda `p2-python-kod` som kodreferens för de faktiska lektionsexemplen, byta begreppet "Lektioner" till kapitel i gränssnittet, döpa lärarbedömda uppgifter till "Övningsuppgifter", och standardisera en självrättande quiz per lektion med kapitel 1 som mall.

**Steg**

1. Kartlägg kurskällan i `p2-python-kurs/` och mappa varje `.docx`/kursobjekt till webbstruktur. Identifiera vilka filer som representerar kapitel, lektioner, övningsuppgifter och eventuella quizidéer. Detta steg måste vara klart innan innehåll kan flyttas.
2. Bestäm webbmodell utifrån den befintliga basen i `chapters/`: behåll kapitel som toppnivå, gör varje lektion till en egen HTML-sida, och använd chapter 1 som formell referens för quiz- och layoutmönster. Parallellt ska nuvarande navigation och metadata ses över så att kapitelrubriker, lektioner och övningsuppgifter får rätt benämningar.
3. Uppdatera innehållsmodellen så att kursen kan renderas konsekvent på webben. Det innebär att skapa eller utöka kapitelförteckning/metadata, samla lektionstexter i den struktur som webbplatsen behöver, och definiera hur självrättande quiz ska representeras per lektion. Om det saknas en gemensam renderer eller JS-lager i nuvarande webbbas ska den planeras som en nödvändig del av lösningen.
4. Implementera den nya webbstrukturen i den befintliga siten. Det omfattar startsida, kapitelnavigation, en sida per lektion, kapitelöversikter, övningsuppgift-sidor eller sektioner där det passar, samt quiz-komponenter som följer chapter 1-principen för självrättning och återkoppling.
5. Anpassa terminologi och UI-texter konsekvent. Byt ut "Lektioner" mot kapitel där det är navigations- eller strukturtermer, men behåll lektion som individuell sidnivå. Byt alla lärarbedömda uppgifter till "Övningsuppgifter" i rubriker, menyer, metadata och eventuella länkar.
6. Förbättra innehållet enligt "the science of learning" där det passar utan att förändra kursens mål. Prioritera tydliga lärandemål, kortare informationsblock, återkallelsefrågor, quiz med direkt återkoppling, worked examples, och progression från enkel till komplex. Använd dessa principer främst där de stärker förståelse och repetition, inte som kosmetiska ändringar.
7. Verifiera att webbplatsen fungerar som en sammanhängande kurs. Kontrollera att alla kapitel- och lektionslänkar fungerar, att quiz kan rättas lokalt, att benämningar är konsekventa, och att inga döda länkar eller saknade resurser finns kvar.

**Relevant files**

- `/Users/paul/Prog 2 Python/p2-python-kurs/` - källmaterialet som ska mappas till den nya webbkursen.
- `/Users/paul/Prog 2 Python/index.html` - startsida och kapitelnav som sannolikt behöver anpassas.
- `/Users/paul/Prog 2 Python/data/chapters.json` - metadata för kapitel och sannolik plats för utökad struktur.
- `/Users/paul/Prog 2 Python/chapters/chapter-template.html` - mall för kapitalsidor och framtida dynamisk rendering.
- `/Users/paul/Prog 2 Python/chapters/chapter-1.html` - referens för quizprincipen som ska kopieras till övriga lektioner.
- `/Users/paul/Prog 2 Python/chapters/chapter-2.html` - kompletterande mönster för hur innehållet redan beskrivs pedagogiskt.
- `/Users/paul/Prog 2 Python/chapters/chapter-3.html` - kompletterande exempel för uppgifts-/projektinnehåll.
- `/Users/paul/Prog 2 Python/css/style.css` - layout- och quizstilar som sannolikt återanvänds.
- `/Users/paul/Prog 2 Python/sitemap.xml` - behöver stämmas av när den nya sidstrukturen är fastställd.

**Verification**

1. Kontrollera att varje planerad kapitel- och lektionssida har en tydlig destination och att inga kursobjekt från `p2-python-kurs/` faller mellan stolarna.
2. Verifiera chapter 1-mönstret för quiz mot resten av lektionerna så att varje quiz kan självrättas med samma komponent- eller markup-kontrakt.
3. Kör en länk- och strukturkontroll när implementation finns: startsida, kapitelsidor, lektionssidor, övningsuppgifter och quizflöden ska öppnas utan fel.
4. Validera att rubriker, menytexter och metadata använder den nya terminologin konsekvent.

**Decisions**

- Kapitel ska vara den överordnade navigationsnivån, och lektioner ska vara egna sidor under den strukturen.
- Lärarbedömda uppgifter ska byta namn till Övningsuppgifter överallt där användaren möter dem.
- Chapter 1 ska vara referensimplementeringen för självrättande quiz i resten av kursen.
- Utgångspunkten är att återanvända nuvarande webb-basen i `chapters/` i stället för att bygga ett helt nytt site-skal.
- Förbättringar enligt learning science ska vara pragmatiska och stödja inlärning, inte skapa extra komplexitet utan nytta.

**Further Considerations**

1. Vill du att den nya siten ska förbli helt statisk HTML per sida, eller ska vi planera för en gemensam datadriven renderer som genererar kapitlen från metadata?
2. Ska quiz endast självrättas lokalt i webbläsaren, eller ska det även finnas sparad progression/resultat mellan sidor?
3. Finns det delar i `p2-python-kurs/` som ska prioriteras först, till exempel vissa kapitel eller uppgifter, så att planen kan fasas in stegvis?
