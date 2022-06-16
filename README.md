# StreamPlaywright
úkol stream cz

- testy lze pustit jednotlivě podle nazvu soubor TC1,TC2 apod. npx playwright TCx
- u každého TC souboru je v kódu zakomentovaný trace pro debugovaní chyb - vytvoří se trace.zip
- nalezena chyba v TC4, kdy stránka nabízí tlačítko "načíst další videa", ale videa další nenabízí po kliknutí (spíše jen vizuální chyba)
- cookies se mi nepodařilo elegantněji vložit např. do playwright.config.js, aby mi stačilo v TC provolat jen odkaz a objekt
