# StreamPlaywright
úkol stream cz

- jako další Test Case (TC6) jsem ověření pro zobrazené našeptávání a jeho funkčnost prokliknout se na "One man show"
- testy lze pustit jednotlivě podle nazvu soubor TC1,TC2 apod. npx playwright TCx
- u každého TC souboru je v kódu zakomentovaný trace pro debugovaní chyb - vytvoří se trace.zip
- nalezena chyba v TC4, kdy stránka nabízí tlačítko "načíst další videa", ale videa další nenabízí po kliknutí (spíše jen vizuální chyba)
- cookies se mi nepodařilo elegantněji vložit např. do playwright.config.js, aby mi stačilo v TC provolat jen odkaz a objekt
