// Dados das perguntas por categoria
const questionsData = {
    futebol: [
        {"id":1,"categoria":"Futebol","dificuldade":"facil","pergunta":"Quem é conhecido como 'Rei do Futebol'?","opcoes":["Pelé","Ronaldo","Zico","Romário","Neymar"],"correta":"Pelé"},
        {"id":2,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual clube brasileiro conquistou a Libertadores pela primeira vez em 1976?","opcoes":["Cruzeiro","Flamengo","Santos","Palmeiras","Grêmio"],"correta":"Cruzeiro"},
        {"id":3,"categoria":"Futebol","dificuldade":"medio","pergunta":"Quem foi o artilheiro da Copa do Mundo de 2006?","opcoes":["Miroslav Klose","Ronaldo","Zidane","Rivaldo","Henry"],"correta":"Miroslav Klose"},
        {"id":4,"categoria":"Futebol","dificuldade":"medio","pergunta":"Quantas Copas do Mundo o Brasil ganhou até 2022?","opcoes":["5","4","6","3","7"],"correta":"5"},
        {"id":5,"categoria":"Futebol","dificuldade":"medio","pergunta":"Em que ano o Flamengo conquistou seu primeiro mundial de clubes?","opcoes":["1981","1980","1982","1979","1983"],"correta":"1981"},
        {"id":6,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual seleção eliminou o Brasil na Copa do Mundo de 1990?","opcoes":["Argentina","Alemanha","Itália","Uruguai","Inglaterra"],"correta":"Argentina"},
        {"id":7,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Quem marcou o gol do título da Copa de 1958 contra a Suécia?","opcoes":["Pelé","Garrincha","Vavá","Didi","Nilton Santos"],"correta":"Pelé"},
        {"id":8,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual clube brasileiro tem mais títulos do Campeonato Brasileiro?","opcoes":["Palmeiras","Flamengo","São Paulo","Santos","Corinthians"],"correta":"Palmeiras"},
        {"id":9,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual jogador brasileiro ganhou a Bola de Ouro da FIFA em 2004?","opcoes":["Ronaldinho Gaúcho","Ronaldo","Kaká","Roberto Carlos","Neymar"],"correta":"Ronaldinho Gaúcho"},
        {"id":10,"categoria":"Futebol","dificuldade":"facil","pergunta":"Em que time Neymar começou a carreira profissional?","opcoes":["Santos","Barcelona","PSG","Flamengo","Corinthians"],"correta":"Santos"},
        {"id":11,"categoria":"Futebol","dificuldade":"facil","pergunta":"Qual seleção venceu a Copa do Mundo de 2018?","opcoes":["França","Croácia","Alemanha","Brasil","Argentina"],"correta":"França"},
        {"id":12,"categoria":"Futebol","dificuldade":"facil","pergunta":"Qual clube brasileiro é conhecido como 'Timão'?","opcoes":["Corinthians","Flamengo","Palmeiras","São Paulo","Vasco"],"correta":"Corinthians"},
        {"id":13,"categoria":"Futebol","dificuldade":"facil","pergunta":"Quem foi o artilheiro da Copa de 2002?","opcoes":["Ronaldo","Rivaldo","Ronaldinho","Klose","Henry"],"correta":"Ronaldo"},
        {"id":14,"categoria":"Futebol","dificuldade":"facil","pergunta":"Em qual país nasceu Lionel Messi?","opcoes":["Argentina","Brasil","Espanha","Uruguai","Chile"],"correta":"Argentina"},
        {"id":15,"categoria":"Futebol","dificuldade":"medio","pergunta":"Quem era o técnico do Brasil na conquista da Copa de 2002?","opcoes":["Luiz Felipe Scolari","Carlos Alberto Parreira","Zagallo","Tite","Luxemburgo"],"correta":"Luiz Felipe Scolari"},
        {"id":16,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual seleção sediou a Copa do Mundo de 2010?","opcoes":["África do Sul","Alemanha","Japão","Brasil","Rússia"],"correta":"África do Sul"},
        {"id":17,"categoria":"Futebol","dificuldade":"medio","pergunta":"Em qual ano o Brasil conquistou sua primeira Copa do Mundo?","opcoes":["1958","1962","1950","1970","1982"],"correta":"1958"},
        {"id":18,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual jogador ficou famoso pelo gol de mão na Copa de 1986?","opcoes":["Diego Maradona","Pelé","Platini","Rummenigge","Zico"],"correta":"Diego Maradona"},
        {"id":19,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual clube brasileiro revelou Ronaldinho Gaúcho?","opcoes":["Grêmio","Flamengo","Atlético Mineiro","Internacional","Cruzeiro"],"correta":"Grêmio"},
        {"id":20,"categoria":"Futebol","dificuldade":"medio","pergunta":"Quantos títulos mundiais da FIFA o Corinthians conquistou até 2022?","opcoes":["2","1","3","0","4"],"correta":"2"},
        {"id":21,"categoria":"Futebol","dificuldade":"medio","pergunta":"Quem marcou o gol do título do Brasil na Copa de 2002?","opcoes":["Ronaldo","Rivaldo","Ronaldinho","Kaká","Cafu"],"correta":"Ronaldo"},
        {"id":22,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual foi o país sede da primeira Copa do Mundo, em 1930?","opcoes":["Uruguai","Brasil","Itália","Argentina","Alemanha"],"correta":"Uruguai"},
        {"id":23,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual clube brasileiro é conhecido como 'Peixe'?","opcoes":["Santos","Fluminense","Botafogo","Atlético Mineiro","Bahia"],"correta":"Santos"},
        {"id":24,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Quem foi o capitão do Brasil na conquista da Copa de 1994?","opcoes":["Dunga","Romário","Bebeto","Cafu","Aldair"],"correta":"Dunga"},
        {"id":25,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual jogador brasileiro marcou o milésimo gol da carreira em 1969?","opcoes":["Pelé","Zico","Tostão","Rivelino","Romário"],"correta":"Pelé"},
        {"id":26,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual seleção foi campeã da Eurocopa de 2004?","opcoes":["Grécia","Portugal","Espanha","Itália","França"],"correta":"Grécia"},
        {"id":27,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Em que ano o São Paulo conquistou seu primeiro título mundial de clubes?","opcoes":["1992","1993","1986","1994","2005"],"correta":"1992"},
        {"id":28,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual técnico comandava o Brasil na Copa de 1998?","opcoes":["Zagallo","Felipão","Parreira","Luxemburgo","Leão"],"correta":"Zagallo"},
        {"id":29,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual jogador brasileiro foi apelidado de 'Animal' nos anos 90?","opcoes":["Edmundo","Romário","Rivaldo","Viola","Amoroso"],"correta":"Edmundo"},
        {"id":30,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual foi a final da Libertadores de 1995?","opcoes":["Grêmio x Atlético Nacional","Santos x Peñarol","São Paulo x River Plate","Cruzeiro x Sporting Cristal","Palmeiras x Deportivo Cali"],"correta":"Grêmio x Atlético Nacional"},
        {"id":31,"categoria":"Futebol","dificuldade":"facil","pergunta":"Qual seleção é conhecida como 'La Roja'?","opcoes":["Espanha","Chile","México","Portugal","Itália"],"correta":"Espanha"},
        {"id":32,"categoria":"Futebol","dificuldade":"facil","pergunta":"Qual clube tem o apelido de 'Verdão'?","opcoes":["Palmeiras","Fluminense","Coritiba","Juventude","Portuguesa"],"correta":"Palmeiras"},
        {"id":33,"categoria":"Futebol","dificuldade":"facil","pergunta":"Quem foi o artilheiro da Copa do Mundo de 2014?","opcoes":["Neymar","Müller","James Rodríguez","Messi","Robben"],"correta":"James Rodríguez"},
        {"id":34,"categoria":"Futebol","dificuldade":"facil","pergunta":"Qual clube brasileiro é apelidado de 'Raposa'?","opcoes":["Cruzeiro","Bahia","Grêmio","Atlético Mineiro","Botafogo"],"correta":"Cruzeiro"},
        {"id":35,"categoria":"Futebol","dificuldade":"medio","pergunta":"Quem marcou o gol do título da Copa de 1970?","opcoes":["Pelé","Carlos Alberto","Gérson","Jairzinho","Tostão"],"correta":"Carlos Alberto"},
        {"id":36,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual seleção venceu a Eurocopa de 2016?","opcoes":["Portugal","França","Alemanha","Espanha","Itália"],"correta":"Portugal"},
        {"id":37,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual clube revelou o atacante Adriano Imperador?","opcoes":["Flamengo","Corinthians","São Paulo","Internacional","Vasco"],"correta":"Flamengo"},
        {"id":38,"categoria":"Futebol","dificuldade":"medio","pergunta":"Quem marcou o gol que eliminou o Brasil na Copa de 1986 contra a França?","opcoes":["Platini","Amoros","Fernandez","Giresse","Stopyra"],"correta":"Fernandez"},
        {"id":39,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual clube argentino tem mais títulos da Copa Libertadores?","opcoes":["Boca Juniors","River Plate","Independiente","Racing","Estudiantes"],"correta":"Independiente"},
        {"id":40,"categoria":"Futebol","dificuldade":"medio","pergunta":"Quem foi eleito melhor jogador da Copa do Mundo de 1994?","opcoes":["Romário","Bebeto","Dunga","Baggio","Stoichkov"],"correta":"Romário"},
        {"id":41,"categoria":"Futebol","dificuldade":"medio","pergunta":"Qual país foi sede da Copa América de 2019?","opcoes":["Chile","Argentina","Brasil","Peru","Colômbia"],"correta":"Brasil"},
        {"id":42,"categoria":"Futebol","dificuldade":"medio","pergunta":"Quem marcou o primeiro gol da Copa de 2002?","opcoes":["Papa Bouba Diop","Ronaldo","Klose","Henry","Inamoto"],"correta":"Papa Bouba Diop"},
        {"id":43,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Quem era o técnico da seleção uruguaia campeã de 1950 no Brasil?","opcoes":["Obdulio Varela","Juan López","Ondino Viera","José Nasazzi","Roque Máspoli"],"correta":"Juan López"},
        {"id":44,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual jogador brasileiro marcou três gols na final da Copa América de 1949?","opcoes":["Zizinho","Ademir","Jair","Chico","Baltazar"],"correta":"Ademir"},
        {"id":45,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Em que ano o Vasco conquistou sua primeira Libertadores?","opcoes":["1998","1997","2000","2001","1999"],"correta":"1998"},
        {"id":46,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Quem foi o artilheiro da Copa do Mundo de 1970?","opcoes":["Pelé","Müller","Jairzinho","Tostão","Cubillas"],"correta":"Müller"},
        {"id":47,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual jogador português é conhecido como 'Pantera Negra'?","opcoes":["Cristiano Ronaldo","Pauleta","Figo","Eusébio","Nené"],"correta":"Eusébio"},
        {"id":48,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Quem marcou o primeiro gol da história da Copa do Mundo em 1930?","opcoes":["Lucien Laurent","Scarone","Stábile","Meazza","Nassazi"],"correta":"Lucien Laurent"},
        {"id":49,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Qual foi a final da Libertadores de 1983?","opcoes":["Grêmio x Peñarol","Flamengo x Cobreloa","Independiente x Grêmio","Peñarol x Nacional","Santos x Boca Juniors"],"correta":"Grêmio x Peñarol"},
        {"id":50,"categoria":"Futebol","dificuldade":"dificil","pergunta":"Quem foi o capitão da seleção argentina no título mundial de 1978?","opcoes":["Passarella","Kempes","Ardiles","Fillol","Gallego"],"correta":"Passarella"}
    ],
    historia: [
        {"id": 1,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Em que ano ocorreu a Proclamação da República no Brasil?","opcoes":["1889","1822","1888","1891","1870"],"correta":"1889"},
        {"id": 2,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Quem foi o primeiro imperador do Brasil?","opcoes":["Dom Pedro I","Dom Pedro II","José Bonifácio","Floriano Peixoto","Deodoro da Fonseca"],"correta":"Dom Pedro I"},
        {"id": 3,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem foi o primeiro presidente do Brasil após a Proclamação da República?","opcoes":["Deodoro da Fonseca","Floriano Peixoto","Prudente de Morais","Campos Sales","Washington Luís"],"correta":"Deodoro da Fonseca"},
        {"id": 4,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Em que ano começou a Guerra do Paraguai?","opcoes":["1864","1870","1865","1860","1868"],"correta":"1864"},
        {"id": 5,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem ficou conhecido como Marechal de Ferro?","opcoes":["Floriano Peixoto","Deodoro da Fonseca","Getúlio Vargas","Prudente de Morais","Campos Sales"],"correta":"Floriano Peixoto"},
        {"id": 6,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Qual tratado definiu as fronteiras entre Brasil e França na região do Amapá?","opcoes":["Arbitragem de Genebra","Tratado de Petrópolis","Tratado de Tordesilhas","Tratado de Madri","Tratado de Santo Ildefonso"],"correta":"Arbitragem de Genebra"},
        {"id": 7,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Em que ano foi fundado o Estado do Mato Grosso?","opcoes":["1748","1800","1700","1750","1720"],"correta":"1748"},
        {"id": 8,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Quem foi o presidente durante a Revolta da Armada?","opcoes":["Floriano Peixoto","Deodoro da Fonseca","Washington Luís","Getúlio Vargas","Juscelino Kubitschek"],"correta":"Floriano Peixoto"},
        {"id": 9,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"O que foi a Inconfidência Mineira?","opcoes":["Conspiração contra o domínio português","Movimento de independência do Brasil","Guerra civil no Rio de Janeiro","Revolução Farroupilha","Golpe militar de 1964"],"correta":"Conspiração contra o domínio português"},
        {"id": 10,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Quem foi Tiradentes?","opcoes":["Líder da Inconfidência Mineira","Imperador do Brasil","Presidente do Brasil","Explorador do Amazonas","General do Exército"],"correta":"Líder da Inconfidência Mineira"},
        {"id":11,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Quem proclamou a independência do Brasil em 1822?","opcoes":["Dom Pedro I","Dom Pedro II","José Bonifácio","Marechal Deodoro","Tiradentes"],"correta":"Dom Pedro I"},
        {"id":12,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Em que ano foi assinada a Lei Áurea, que aboliu a escravidão no Brasil?","opcoes":["1888","1889","1822","1870","1891"],"correta":"1888"},
        {"id":13,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Quem foi o líder da Coluna Prestes?","opcoes":["Luís Carlos Prestes","Getúlio Vargas","Floriano Peixoto","Juscelino Kubitschek","Deodoro da Fonseca"],"correta":"Luís Carlos Prestes"},
        {"id":14,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Qual cidade foi a primeira capital do Brasil?","opcoes":["Salvador","Rio de Janeiro","Brasília","Olinda","Recife"],"correta":"Salvador"},
        {"id":15,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem era o presidente do Brasil no início da Segunda Guerra Mundial?","opcoes":["Getúlio Vargas","Eurico Gaspar Dutra","Washington Luís","Floriano Peixoto","Juscelino Kubitschek"],"correta":"Getúlio Vargas"},
        {"id":16,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Qual presidente ficou famoso pelo Plano de Metas?","opcoes":["Juscelino Kubitschek","Getúlio Vargas","Fernando Henrique Cardoso","Itamar Franco","Tancredo Neves"],"correta":"Juscelino Kubitschek"},
        {"id":17,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem liderou a Confederação do Equador em 1824?","opcoes":["Frei Caneca","Dom Pedro I","José Bonifácio","Tiradentes","Cipriano Barata"],"correta":"Frei Caneca"},
        {"id":18,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Qual movimento popular ocorreu em Canudos no fim do século XIX?","opcoes":["Guerra de Canudos","Revolução Farroupilha","Cabanagem","Balaiada","Revolta da Armada"],"correta":"Guerra de Canudos"},
        {"id":19,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem era presidente quando Brasília foi inaugurada em 1960?","opcoes":["Juscelino Kubitschek","João Goulart","Getúlio Vargas","Café Filho","Costa e Silva"],"correta":"Juscelino Kubitschek"},
        {"id":20,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Em que ano ocorreu a Intentona Comunista no Brasil?","opcoes":["1935","1930","1922","1945","1964"],"correta":"1935"},
        {"id":21,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Qual foi o último presidente do regime militar brasileiro?","opcoes":["João Figueiredo","Geisel","Costa e Silva","Médici","Castelo Branco"],"correta":"João Figueiredo"},
        {"id":22,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem foi o líder da Revolução Farroupilha?","opcoes":["Bento Gonçalves","Giuseppe Garibaldi","Caxias","Duarte da Ponte Ribeiro","Silveira Martins"],"correta":"Bento Gonçalves"},
        {"id":23,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Qual tratado de 1750 redefiniu fronteiras entre Portugal e Espanha na América do Sul?","opcoes":["Tratado de Madri","Tratado de Tordesilhas","Tratado de Santo Ildefonso","Tratado de Petrópolis","Tratado de Utrecht"],"correta":"Tratado de Madri"},
        {"id":24,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Quem governava Portugal durante a vinda da família real para o Brasil em 1808?","opcoes":["Dom João VI","Maria I","Pedro III","Carlos IV","Dom Miguel"],"correta":"Dom João VI"},
        {"id":25,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Quem foi o presidente do Brasil durante a Revolução Constitucionalista de 1932?","opcoes":["Getúlio Vargas","Washington Luís","Juscelino Kubitschek","Epitácio Pessoa","Floriano Peixoto"],"correta":"Getúlio Vargas"},
        {"id":26,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Qual movimento separatista ocorreu em Pernambuco em 1817?","opcoes":["Revolução Pernambucana","Confederação do Equador","Balaiada","Cabanagem","Sabinada"],"correta":"Revolução Pernambucana"},
        {"id":27,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Quem foi o primeiro governador-geral do Brasil em 1549?","opcoes":["Tomé de Souza","Mem de Sá","Duarte da Costa","Martim Afonso de Sousa","Gaspar de Lemos"],"correta":"Tomé de Souza"},
        {"id":28,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Qual revolta popular ocorreu no Maranhão entre 1838 e 1841?","opcoes":["Balaiada","Cabanagem","Sabinada","Revolução Praieira","Farroupilha"],"correta":"Balaiada"},
        {"id":29,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Quem assinou o Tratado de Petrópolis em 1903 pelo Brasil?","opcoes":["Barão do Rio Branco","Rui Barbosa","Floriano Peixoto","Dom Pedro II","Oswaldo Aranha"],"correta":"Barão do Rio Branco"},
        {"id":30,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Quem foi o ministro da Fazenda responsável pelo Plano Real em 1994?","opcoes":["Fernando Henrique Cardoso","Pedro Malan","Dilson Funaro","José Sarney","Celso Furtado"],"correta":"Fernando Henrique Cardoso"},
        {"id":31,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Quem assinou a Lei Áurea em 1888?","opcoes":["Princesa Isabel","Dom Pedro II","José Bonifácio","Floriano Peixoto","Marechal Deodoro"],"correta":"Princesa Isabel"},
        {"id":32,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Quem foi o primeiro presidente civil do Brasil?","opcoes":["Prudente de Morais","Deodoro da Fonseca","Floriano Peixoto","Campos Sales","Washington Luís"],"correta":"Prudente de Morais"},
        {"id":33,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Qual foi a primeira capital do Brasil?","opcoes":["Salvador","Rio de Janeiro","Olinda","Brasília","Recife"],"correta":"Salvador"},
        {"id":34,"categoria":"História do Brasil","dificuldade":"facil","pergunta":"Quem proclamou a República em 1889?","opcoes":["Marechal Deodoro da Fonseca","Floriano Peixoto","Benjamin Constant","Campos Sales","Dom Pedro II"],"correta":"Marechal Deodoro da Fonseca"},
        {"id":35,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Qual movimento social ocorreu no Maranhão entre 1838 e 1841?","opcoes":["Balaiada","Cabanagem","Farroupilha","Revolução Praieira","Sabinada"],"correta":"Balaiada"},
        {"id":36,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem foi o presidente deposto pela Revolução de 1930?","opcoes":["Washington Luís","Arthur Bernardes","Júlio Prestes","Getúlio Vargas","Epitácio Pessoa"],"correta":"Washington Luís"},
        {"id":37,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem liderou o movimento da Coluna Prestes?","opcoes":["Luís Carlos Prestes","Getúlio Vargas","João Goulart","Juscelino Kubitschek","Carlos Lacerda"],"correta":"Luís Carlos Prestes"},
        {"id":38,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Qual tratado garantiu a anexação do Acre ao Brasil?","opcoes":["Tratado de Petrópolis","Tratado de Madri","Tratado de Tordesilhas","Tratado de Santo Ildefonso","Tratado de Badajoz"],"correta":"Tratado de Petrópolis"},
        {"id":39,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem governava o Brasil quando a capital foi transferida para Brasília em 1960?","opcoes":["Juscelino Kubitschek","João Goulart","Getúlio Vargas","Costa e Silva","Tancredo Neves"],"correta":"Juscelino Kubitschek"},
        {"id":40,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem foi o primeiro presidente eleito por voto direto após a ditadura militar?","opcoes":["Fernando Collor","Tancredo Neves","José Sarney","Itamar Franco","Juscelino Kubitschek"],"correta":"Fernando Collor"},
        {"id":41,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Qual movimento ocorreu em Pernambuco em 1817?","opcoes":["Revolução Pernambucana","Confederação do Equador","Cabanagem","Farroupilha","Sabinada"],"correta":"Revolução Pernambucana"},
        {"id":42,"categoria":"História do Brasil","dificuldade":"medio","pergunta":"Quem foi o ministro da Fazenda responsável pelo Plano Real em 1994?","opcoes":["Fernando Henrique Cardoso","Pedro Malan","Dilson Funaro","Rui Barbosa","José Sarney"],"correta":"Fernando Henrique Cardoso"},
        {"id":43,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Quem foi o primeiro governador-geral do Brasil em 1549?","opcoes":["Tomé de Souza","Mem de Sá","Duarte da Costa","Gaspar de Lemos","Martim Afonso"],"correta":"Tomé de Souza"},
        {"id":44,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Qual revolta popular ocorreu no Pará entre 1835 e 1840?","opcoes":["Cabanagem","Balaiada","Sabinada","Farroupilha","Praieira"],"correta":"Cabanagem"},
        {"id":45,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Qual tratado de 1777 definiu fronteiras entre Brasil e Espanha no sul?","opcoes":["Tratado de Santo Ildefonso","Tratado de Madri","Tratado de Utrecht","Tratado de Petrópolis","Tratado de Badajoz"],"correta":"Tratado de Santo Ildefonso"},
        {"id":46,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Quem liderou a Revolta da Chibata em 1910?","opcoes":["João Cândido","Luís Carlos Prestes","Floriano Peixoto","Benjamin Constant","José do Patrocínio"],"correta":"João Cândido"},
        {"id":47,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Quem foi o último presidente do período militar no Brasil?","opcoes":["João Figueiredo","Geisel","Costa e Silva","Médici","Castelo Branco"],"correta":"João Figueiredo"},
        {"id":48,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Qual foi a principal causa da Revolta dos Malês em 1835?","opcoes":["Insatisfação dos escravizados muçulmanos","Fome","Aumento de impostos","Questões religiosas católicas","Política centralizadora"],"correta":"Insatisfação dos escravizados muçulmanos"},
        {"id":49,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Qual presidente brasileiro instituiu o AI-5 em 1968?","opcoes":["Costa e Silva","Médici","Geisel","Castelo Branco","João Figueiredo"],"correta":"Costa e Silva"},
        {"id":50,"categoria":"História do Brasil","dificuldade":"dificil","pergunta":"Qual foi o principal líder de Canudos no sertão da Bahia?","opcoes":["Antônio Conselheiro","Padre Cícero","Zumbi","Bento Gonçalves","João Cândido"],"correta":"Antônio Conselheiro"}
    ]      
};

// Vetor de multiplicadores fixo
const MULTIPLIERS = [0.10, 0.20, 0.30, 0.40, 0.60, 1.00, 1.40, 2.00, 3.00, 6.00];

// Estado do quiz
let currentQuiz = {
    selectedQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    correctAnswers: 0,
    wrongAnswers: 0,
    selectedCategory: null,
    selectedCredits: 1,  // Créditos selecionados pelo usuário
    accumulatedScore: 0,  // Pontuação acumulada
    currentMultiplierIndex: 0,  // Índice atual do multiplicador
    maxErrors: 3,
    currentErrors: 0
};

// Elementos DOM
const screens = {
    start: document.getElementById('start-screen'),
    credits: document.getElementById('credits-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    review: document.getElementById('review-screen')
};

// Função para selecionar perguntas aleatoriamente
function selectRandomQuestions(category) {
    const categoryQuestions = questionsData[category];
    const easyQuestions = categoryQuestions.filter(q => q.dificuldade === 'facil');
    const mediumQuestions = categoryQuestions.filter(q => q.dificuldade === 'medio');
    const hardQuestions = categoryQuestions.filter(q => q.dificuldade === 'dificil');

    // Embaralhar arrays
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    
    // Selecionar 4 fáceis, 3 médias e 3 difíceis
    const selectedEasy = shuffle([...easyQuestions]).slice(0, 4);
    const selectedMedium = shuffle([...mediumQuestions]).slice(0, 3);
    const selectedHard = shuffle([...hardQuestions]).slice(0, 3);

    // Combinar mantendo ordem: 4 fáceis primeiro, depois embaralhar o resto
    const remainingQuestions = [...selectedMedium, ...selectedHard];
    const shuffledRemaining = shuffle(remainingQuestions);
    
    return [...selectedEasy, ...shuffledRemaining];
}

// Função para mostrar uma tela específica
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Função para iniciar o quiz (vai para seleção de créditos)
function startQuiz(category) {
    currentQuiz = {
        selectedQuestions: selectRandomQuestions(category),
        currentQuestionIndex: 0,
        userAnswers: [],
        correctAnswers: 0,
        wrongAnswers: 0,
        selectedCategory: category,
        selectedCredits: 1,  // Valor padrão
        accumulatedScore: 0,  // Começa com 0
        currentMultiplierIndex: 0,  // Começa no primeiro multiplicador
        maxErrors: 3,
        currentErrors: 0
    };
    
    showScreen('credits');
}

// Função para iniciar o quiz após seleção de créditos
function startQuizWithCredits(credits) {
    currentQuiz.selectedCredits = credits;
    
    // Atualizar o display de pontos com os créditos selecionados
    document.getElementById('points-display').textContent = `Valor da Rodada: ${credits}`;
    
    showScreen('quiz');
    displayQuestion();
}

// Função para exibir a pergunta atual
function displayQuestion() {
    const question = currentQuiz.selectedQuestions[currentQuiz.currentQuestionIndex];
    const questionNumber = currentQuiz.currentQuestionIndex + 1;
    
    // Atualizar contadores
    const currentMultiplier = MULTIPLIERS[currentQuiz.currentMultiplierIndex];
    document.getElementById('question-counter').textContent = `Pergunta ${questionNumber} de 10`;
    document.getElementById('score-display').textContent = `Acumulado: ${currentQuiz.accumulatedScore.toFixed(2)}`;
    // Atualizar multiplicador junto com a nova questão
    document.getElementById('multiplier-display').textContent = `Multiplicador: ${currentMultiplier.toFixed(2)}x`;
    
    // Atualizar erros restantes
    const errorsRemaining = currentQuiz.maxErrors - currentQuiz.currentErrors;
    document.getElementById('errors-remaining').textContent = `Erros restantes: ${errorsRemaining}`;
    
    // Atualizar barra de progresso
    const progressFill = document.getElementById('progress-fill');
    progressFill.style.width = `${(questionNumber - 1) * 10}%`;
    
    // Atualizar pergunta
    // document.getElementById('difficulty-badge').textContent = 
    //     question.dificuldade.charAt(0).toUpperCase() + question.dificuldade.slice(1);
    // document.getElementById('difficulty-badge').className = 
    //     `difficulty-badge ${question.dificuldade}`;
    document.getElementById('question-text').textContent = question.pergunta;
    
    // Atualizar opções
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Randomizar as opções de resposta
    const shuffledOptions = [...question.opcoes].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.className = 'option-btn';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(option, optionElement));
        optionsContainer.appendChild(optionElement);
    });
    
    // Adicionar indicador de carregamento sobreposto (se não existir)
    let loadingOverlay = document.getElementById('loading-overlay');
    if (!loadingOverlay) {
        loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'loading-overlay';
        loadingOverlay.className = 'loading-overlay hidden';
        loadingOverlay.innerHTML = `
            <div class="spinner-overlay"></div>
            <p>Carregando...</p>
        `;
        optionsContainer.appendChild(loadingOverlay);
    }
}

// Função para selecionar uma opção
function selectOption(selectedOption, buttonElement) {
    // Prevenir múltiplas execuções
    if (buttonElement.disabled) {
        return;
    }
    
    const question = currentQuiz.selectedQuestions[currentQuiz.currentQuestionIndex];
    const isCorrect = selectedOption === question.correta;
    
    // Desabilitar todos os botões imediatamente para evitar múltiplas seleções
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    // Armazenar resposta do usuário
    currentQuiz.userAnswers.push({
        question: question,
        userAnswer: selectedOption,
        isCorrect: isCorrect
    });
    
    // Atualizar contadores e pontuação
    if (isCorrect) {
        currentQuiz.correctAnswers++;
        // Calcular pontos: créditos selecionados * multiplicador atual
        const currentMultiplier = MULTIPLIERS[currentQuiz.currentMultiplierIndex];
        const pointsEarned = currentQuiz.selectedCredits * currentMultiplier;
        currentQuiz.accumulatedScore += pointsEarned;
        
        // Avançar para o próximo multiplicador
        if (currentQuiz.currentMultiplierIndex < MULTIPLIERS.length - 1) {
            currentQuiz.currentMultiplierIndex++;
        }
    } else {
        currentQuiz.wrongAnswers++;
        currentQuiz.currentErrors++;
        
        // Dividir acumulado por 2 (arredondando para 2 casas decimais)
        currentQuiz.accumulatedScore = Math.round(currentQuiz.accumulatedScore / 2 * 100) / 100;
        
        // Reiniciar ponteiro do vetor para o início
        currentQuiz.currentMultiplierIndex = 0;
    }
    
    // Atualizar apenas o acumulado (multiplicador será atualizado na próxima pergunta)
    document.getElementById('score-display').textContent = `Acumulado: ${currentQuiz.accumulatedScore.toFixed(2)}`;
    
    // Atualizar erros restantes
    const errorsRemaining = currentQuiz.maxErrors - currentQuiz.currentErrors;
    document.getElementById('errors-remaining').textContent = `Erros restantes: ${errorsRemaining}`;
    
    // Destacar a resposta correta e a selecionada
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        if (btn.textContent === question.correta) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedOption && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // Verificar se atingiu o máximo de erros
    if (currentQuiz.currentErrors >= currentQuiz.maxErrors) {
        // Encerrar rodada automaticamente
        console.log('Máximo de erros atingido. Encerrando quiz...');
        console.log('Erros atuais:', currentQuiz.currentErrors);
        console.log('Máximo de erros:', currentQuiz.maxErrors);
        showLoadingIndicator();
        setTimeout(() => {
            console.log('Timeout executado, escondendo loading...');
            hideLoadingIndicator();
            console.log('Chamando endQuizWithPenalty...');
            endQuizWithPenalty();
        }, 1000);
    } else {
        // Mostrar indicador de carregamento
        showLoadingIndicator();
        
        // Avançar automaticamente após 1 segundo
        setTimeout(() => {
            hideLoadingIndicator();
            nextQuestion();
        }, 1000);
    }
}

// Função para ir para a próxima pergunta
function nextQuestion() {
    currentQuiz.currentQuestionIndex++;
    
    if (currentQuiz.currentQuestionIndex < currentQuiz.selectedQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Função para mostrar resultados
function showResults() {
    console.log('showResults() executada');
    console.log('currentQuestionIndex:', currentQuiz.currentQuestionIndex);
    const totalQuestions = currentQuiz.currentQuestionIndex;
    const correctAnswers = currentQuiz.correctAnswers;
    const wrongAnswers = currentQuiz.wrongAnswers;
    const accumulatedScore = currentQuiz.accumulatedScore;
    
    // Calcular pontuação final
    let finalScore = accumulatedScore;
    if (currentQuiz.currentErrors >= currentQuiz.maxErrors) {
        // Se encerrou por 3 erros, pontuação é metade do acumulado
        finalScore = Math.round(accumulatedScore / 2 * 100) / 100;
    }
    
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    
    // Atualizar elementos da tela de resultados
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent = wrongAnswers;
    document.getElementById('accumulated-display').textContent = accumulatedScore.toFixed(2);
    
    // Mensagem baseada na pontuação final
    let message = '';
    if (finalScore >= 50) {
        message = '🏆 Excelente! Você é um verdadeiro especialista!';
    } else if (finalScore >= 30) {
        message = '👍 Bom trabalho! Você tem um bom conhecimento!';
    } else if (finalScore >= 10) {
        message = '📚 Não foi mal! Continue estudando para melhorar!';
    } else {
        message = '💪 Não desista! Pratique mais e você vai melhorar!';
    }
    
    // Adicionar mensagem especial se encerrou por 3 erros
    if (currentQuiz.currentErrors >= currentQuiz.maxErrors) {
        message += ' (Rodada encerrada por atingir 3 erros)';
    }
    
    document.getElementById('score-message').textContent = message;
    
    console.log('Chamando showScreen("results")...');
    showScreen('results');
    console.log('showScreen("results") executada');
}

// Função para encerrar quiz com penalidade (3 erros)
function endQuizWithPenalty() {
    // Garantir que o índice da pergunta seja ajustado para mostrar resultados
    currentQuiz.currentQuestionIndex = currentQuiz.selectedQuestions.length;
    console.log('Chamando showResults() após 3 erros...');
    showResults();
}

// Função para mostrar indicador de carregamento
function showLoadingIndicator() {
    let loadingOverlay = document.getElementById('loading-overlay');
    if (!loadingOverlay) {
        // Criar o loading overlay se não existir
        const optionsContainer = document.getElementById('options-container');
        if (optionsContainer) {
            loadingOverlay = document.createElement('div');
            loadingOverlay.id = 'loading-overlay';
            loadingOverlay.className = 'loading-overlay';
            loadingOverlay.innerHTML = `
                <div class="spinner-overlay"></div>
                <p>Carregando...</p>
            `;
            optionsContainer.appendChild(loadingOverlay);
        }
    } else {
        loadingOverlay.classList.remove('hidden');
    }
}

// Função para esconder indicador de carregamento
function hideLoadingIndicator() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
    }
}

// Função para reiniciar o quiz
function restartQuiz() {
    showScreen('start');
}

// Função para mostrar revisão das respostas
function showReview() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    currentQuiz.userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'wrong'}`;
        
        reviewItem.innerHTML = `
            <div class="review-question">
                <span class="question-number">${index + 1}.</span>
                <span class="question-text">${answer.question.pergunta}</span>
                <span class="difficulty-badge ${answer.question.dificuldade}">${answer.question.dificuldade}</span>
            </div>
            <div class="review-answers">
                <div class="user-answer ${answer.isCorrect ? 'correct' : 'wrong'}">
                    <strong>Sua resposta:</strong> ${answer.userAnswer}
                </div>
                ${!answer.isCorrect ? `<div class="correct-answer"><strong>Resposta correta:</strong> ${answer.question.correta}</div>` : ''}
            </div>
        `;
        
        reviewList.appendChild(reviewItem);
    });
    
    showScreen('review');
}

// Event listeners
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
document.getElementById('review-btn').addEventListener('click', showReview);
document.getElementById('back-to-results').addEventListener('click', () => showScreen('results'));

// Event listeners para seleção de categoria
document.addEventListener('DOMContentLoaded', () => {
    showScreen('start');
    
    // Adicionar event listeners para as categorias
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            startQuiz(category);
        });
    });
    
    // Event listener para voltar da tela de créditos para categoria
    document.getElementById('back-to-category').addEventListener('click', () => {
        showScreen('start');
    });
    
    // Event listeners para seleção de créditos
    document.querySelectorAll('.credit-card').forEach(card => {
        card.addEventListener('click', () => {
            const credits = parseInt(card.dataset.credits);
            startQuizWithCredits(credits);
        });
    });
});
