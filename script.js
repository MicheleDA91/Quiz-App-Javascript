const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const scoreboardContainer = document.getElementById('scoreboard')
const pointersButtons = document.getElementById('pointers')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer')
const answerButton = document.getElementById('answer-btn')

startButton.addEventListener('click', startGame)
answerButton.addEventListener('click', showAnswer)
nextButton.addEventListener('click', startGame)

let shuffledQuestions, questionIndex
let btnright = document.getElementById('right')
let btnwrong = document.getElementById('wrong')
let btnskip = document.getElementById('skip')

btnright.addEventListener('click', () => {
    corrette.value = parseInt(corrette.value) + 1;
    totali.value = parseInt(totali.value) +1; 
})

btnwrong.addEventListener('click', () => {
    errate.value = parseInt(errate.value) + 1;
    totali.value = parseInt(totali.value) +1; 
})

btnskip.addEventListener('click', () => {
    skippate.value = parseInt(skippate.value) + 1;
    totali.value = parseInt(totali.value) +1; 
})


function startGame() {
   questionContainer.classList.remove('hide')
   pointersButtons.classList.remove('hide')
   nextButton.classList.remove('hide')
   startButton.classList.add('hide')
   scoreboardContainer.classList.remove('hide')
   shuffledQuestions = questions.sort(() => Math.random() - .5)
   questionIndex = 0;
   setNextQuestion()
}

function setNextQuestion() {
   showQuestion(shuffledQuestions[questionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
answerElement.innerText = question.answer
answerElement.classList.add('hide')
}

function showAnswer() {
    answerElement.classList.remove('hide')
}




const questions = [
    {
      question: 'Architettura MV-VM?',
      answer:"L’MV-VM è un pattern architetturale che significa Model View – ViewModel. Lo troviamo in Angular suddiviso in questa maniera:\n Model – rappresentato dai componenti DTO e SERVICE.\n View – rappresentata dal componente HTML (e il CSS associato).\n ViewModel – rappresentato dal componente TypeScript che cura la logica del nostro programma."
           
},
{
    question: 'Differenza Spring Boot e Spring?',
    answer:"Spring è un framework, che di solito si usa con Hibernate (piattaforma che gestiste la persistenza dei dati appoggiandosi ad un framework) con cui puoi gestire un DB tramite Java. Uso Hibernate perché ho dei vantaggi dovuti al fatto che non ho necessità di query e posso fare findByCampo(nomeCampo) (funzione di SpringData) e mi restituisce la tupla.\nSpring Boot non è un framework, è un progetto collaterale nato dal progetto principale Spring con lo scopo di creare applicazioni stand-alone con configurazioni minime."
         
}, 
{
    question: 'Perchè hai usato Bootstrap?',
    answer:"Bootstrap è un toolkit per la creazione di interfacce grafiche. Per funzionare ha bisogno di:\n• JQuery: una libreria javascript\n• Popper.js: un’altra libreria  \n • Un file css che contiene tutte le classi utilizzabili nei tag html.\n I vantaggi di Bootstrap sono:\n • se usato crea automaticamente siti responsive, quindi che si adattano a tutti gli schermi dei più svariati dispositivi.\n• Introduce un layout a griglia composto da 12 colonne che si attiva scrivendo la seguente struttura HTML. Nella figura sottostante il numero di colonne da occupare per ogni div è specificato nell’attributo class (col-sm-4: indica 4 colonne. Il numero totale deve fare sempre 12. In questo caso 4x3=12) "
         
}, 
{
    question: 'Perchè hai usato angular?',
    answer:"Angular è un framework open source per lo sviluppo di applicazioni web.Vantaggi di Angular:\n • Viene usato per la creazione di Single-Page Applications (un’applicazione web o un sito web che può essere usato o consultato su una singola pagina web con l’obiettivo di fornire una esperienza utente più fluida e simile alle applicazioni desktop dei sistemi operativi tradizionali).\n • ogni applicazione è eseguita all’interno del browser e non viene mai ricaricata poiché ogni modifica dell’interfaccia grafica avviene a livello DOM (Document Object Model). Così facendo si evita la spedizione dell’intera pagina da server a browser, inviando così solo i componenti che si modificano.\n • Utilizzando toolkit come Angular Material o Bootstrap è possibile realizzare siti responsive, ossia il design del sito web si adatta in funzione alle dimensioni del dispositivo utilizzato.\n • carica i dati asincronicamente: l’interfaccia grafica non resta in attesa dei dati, ma viene prima costruita e poi caricata con dati."
         
}, 
{
    question: 'Differenza tra classe astratta e interfaccia?',
    answer:"Una classe astratta è una classe che non può essere instanziata e che serve solo per essere derivata, definendo al suo interno metodi e proprietà tutti o in parte anch'essi astratti. Una classe astratta che implementa solo ed esclusivamente metodi e proprietà astratte viene detta classe astratta pura. \nLe interfacce sono molto simili alle classi astratte, in quanto anch'essa definisce metodi e proprietà astratte. Nelle interfacce non troveremo l'implementazione di alcun metodo o proprietà, come per le classi astratte pure, si dice che le interfacce stipulino un contratto con la classe derivata che le implementa."
         
}, 
{
    question: 'Cos è JHipster?',
    answer:"JHipster è un tool di scaffolding (generatore di codice) per il back-end (monolitiche e microservizi) e frontend (gateway). Di default il gateway gira sulla porta 8080, mentre i microservizi di default girano sulla porta 8081 che è necessario modificare nel caso siano eseguiti più microservizi contemporaneamente sulla stessa macchina. E’ possibile aggiungere entità a JHipster in 2 modi:\n• importando un file .jdl creabile con JDL Studio con il seguente comando jhipster import-jdl nomedelfile.jdl\n• eseguendo il comando jhipster entity [nomeentità]"
         
}, 
{
    question: 'Cos è il Pattern MVC?',
    answer:"MVC è un pattern di Java (Model-View-Controller):\n  1. Il Model è il livello che gestisce la persistenza dei dati\n  2. La View visualizza i dati contenuti nel model e interagisce con l’utente.\n 3. Il Controller riceve i comandi dall’utente (dalla View) e modifica lo stato degli altri due componenti.  La view comunica con il Controller, il Controller con il Model attraverso i Service (che non usa le classi del Model ma i DTO), e il Model con il DAO che attinge o aggiunge al dB. I DTO sono una mappatura del model, contengono i campi del Model che mi servono e vengono usati dal controller che non può interagire con le classi del model per motivi di sicurezza. Sopra il Service usiamo i DTO e sotto i DAO, il passaggio da DTO a DAO e da DAO a DTO avviene attraverso i converter (I service interagiscono con model e sono gli unici a chiamare i converter). "
         
},
{
    question:'Cos è un singleton?',
    answer:'E’ un pattern che evita l’istanziazione multipla, quindi ha il vantaggio di far risparmiare molta memoria ed utilizzare una sola istanza di un oggetto. Viene implementato con un metodo statico getIstance() che verifica se è presente o meno un’istanza dell’oggetto: se presente la restituisce, altrimenti ne crea una nuova. Nel caso di una applicazione con più thread (multithreaded) deve essere applicata la keyword synchronized al metodo statico getInstance() per renderlo thread-safe, evitando così l’accesso multiplo. Con la keyword synchronized l’accesso da parte di più thread è garantito che sia sempre sequenziale.'
},
{
    question:'Inversion of control e Dependency Injection',
    answer:'Inversion of control è un pattern dove un componente di livello applicativo riceve il controllo da un componente appartenente ad una libreria riusabile. Tutto ciò differisce dalla programmazione procedurale classica poiché in quel caso il controllo viene passato alla procedura di libreria utilizzata.Vantaggi:\n• Rende le componenti software il più indipendenti possibili poiché posso modificarne una parte senza dover modificare le altre.\n• Le dipendenze possono essere iniettate dall’esterno.\nLa Dependency Injection è una delle tecniche con le quali si può attuare l’Inversion of Control. In pratica un programmatore può iniettare le dipendenze cioè richiamare l’istanza di un oggetto precedentemente creato, evitando quindi l’inizializzazione.'
},
{
    question:'Polimorfismo (overload-override)',
    answer:'@overload quando puoi costruire due metodi con lo stesso nome che possono avere return o parametri espliciti diversi (dati passati in un metodo). Come con un costruttore.\n@override operazione di sovrascrittura dei metodi per Interfaccia devi sovrascrivere i metodi che sono dichiarati nell’interfaccia.'
},
{
    question:'JavaScript',
    answer:'JavaScript è un linguaggio di scripting orientato agli oggetti e agli eventi, comunemente utilizzato nella programmazione Web lato client per la creazione, in siti web e applicazioni web, di effetti dinamici interattivi tramite funzioni di script invocate da eventi innescati a loro volta in vari modi dall utente sulla pagina web in uso (mouse, tastiera, caricamento della pagina ecc...).Tali funzioni di script, utilizzati dunque nella logica di presentazione, possono essere opportunamente inserite in file HTML, in pagine JSP o in appositi file separati con estensione .js poi richiamati nella logica di business.In JavaScript lato client, il codice viene eseguito direttamente sul client (browser) e non sul server. Il vantaggio di questo approccio è che, anche con la presenza di script particolarmente complessi, il web server non viene sovraccaricato a causa delle richieste dei client. Di contro, nel caso di script che presentino un codice sorgente particolarmente grande, il tempo per lo scaricamento può diventare abbastanza lungo.'
},
{
    question:'Differenza tra Prepared Statement e Statement',
    answer:'In JDBC Statement è un interfaccia. Utilizzando l oggetto Statement possiamo inviare la nostra query SQL al database. Al momento della creazione di un oggetto Statement, non è necessario fornire alcuna query. L oggetto istruzione può funzionare solo per query statiche.\nPrepared Statement è un interfaccia disponibile nel pacchetto java.mysql. Estende l interfaccia dell istruzione.Vantaggi della dichiarazione preparata:\nPuò essere utilizzato per eseguire query SQL dinamiche e parametrizzate.\nPrepared Statement è più veloce dell interfaccia Statement . Perché in Statement Query verrà compilato ed eseguito ogni volta, mentre in caso di Prepared Statement Query non verrà compilato ogni volta che appena eseguito.\n Può essere utilizzato per query sia statiche che dinamiche.\nIn caso di Prepared Statement nessuna possibilità di attacco SQL Injection. È una specie di problema nella programmazione del database.'
},
{
    question:'Apache Maven',
    answer:'Apache Maven (build tool) è uno strumento di gestione di progetti software basati su Java e build automation. Maven usa un costrutto conosciuto come Project Object Model (POM): un file XML che descrive le dipendenze fra il progetto e le varie versioni di librerie necessarie nonché le dipendenze fra di esse. Per libreria/dipendenza si intente un file JAR contenente classi utilizzate in un progetto.Vantaggi di Maven:\n• Download automatico delle librerie dipendenti in una cartella locale .m2, nei sistemi Windows localizzata in C:\Utenti\NomeUtente\.m2\n• Separazione delle librerie dal progetto principale\n• Facilità di spostamento di un progetto da un ambiente all’altro poiché non è necessario portarsi dietro tutte le librerie poiché verranno automaticamente scaricate da Maven con le giuste versioni. '
}, 
{
    question:'Quali sono i file di configurazione di Angular?',
    answer:'I principali file di configurazione di Angular sono:\n • app-module: è il file dove sono definiti sia i componenti che i service. Tali componenti verranno inizializzati all’avvio dell’application e poi verranno iniettati col meccanismo della Dependency Injection così come avviene con Spring \n• app-routing: è un file che contiene le coppie “path – componente” necessarie a visualizzare i componenti \n• package.json: tale file viene letto quando si avvia il comando npm install e contiene tutte le dipendenze del progetto. Se si aggiunge una dipendenza al progetto Angular con il comando npm install [nomedipendenza] questo file verrà automaticamente aggiornato \n • angular.json: contiene le configurazioni principali dell’applicazione. E’ possibile specificare in tale file eventuali file .css e .js che si vuole inglobare nell’output finale dell’applicazione'
}, 
{
    question:'Vantaggi di spring',
    answer:' • Modularità. La struttura modulare del framework, che ad oggi si compone di oltre venti sottoprogetti, ne costituisce un altro punto di forza. In fase di progettazione potremo scegliere quali sono le funzionalità richieste dalla nostra applicazione e includere solamente i package necessari.\n • Flessibilità. Spring lascia ampia libertà allo sviluppatore riguardo al percorso da seguire per arrivare al risultato desiderato. I vincoli da rispettare sono veramente pochi. Spring ci consegna i mattoncini, sta a noi incastrarli nel modo che riteniamo più opportuno. \n• Testabilità. Aspetto spesso sottovalutato. Il cuore di Spring implementa un’architettura di tipo IoC (Inversion of Control), che permette di eliminare dal nostro codice dipendenze dirette tra le classi. Ne consegue un’elevata testabilità dei singoli componenti dell’applicazione.'
},
{
    question:'Cos’ è un Observable?',
    answer:'è un modello di progettazione software in cui un oggetto , chiamato soggetto , mantiene un elenco dei suoi dipendenti, chiamati osservatori , e li notifica automaticamente di eventuali cambiamenti di stato, di solito chiamando uno dei loro metodi .'
},
{
    question:'Vantaggi e svantaggi di React.js',
    answer:'Uno dei punti deboli di AngularJS è sicuramente la sua complessità. Di contro, con React Native lo sviluppo di nuovi componenti è relativamente semplice. Inoltre, l’intero ciclo di sviluppo risulta molto più rapido. Di fatto React Native è un’applicazione nativa, che interpreta la business logic scritta in JavaScript. Quindi non è necessario ricompilare l’intera applicazione ad ogni modifica del codice. Ma anche il Virtual DOM aiuta a risparmiare tempo, in quanto permette di calcolare qual è il minor numero di operazioni da effettuare per modificare il Dom. \nDal punto di vista delle performance, poi, React Native ha almeno un pregio rispetto ad AngularJS: si avvantaggia del fatto di non delegare alla WebView il rendering dell’interfaccia utente'
},
{
    question:'Cos ‘è Git?',
    answer:'Git è un controllo di versione. Considera i propri dati più come una serie di istantanee (snapshot) di un mini filesystem. Serve sostanzialmente per tenere traccia di tutte le modifiche relative ad un progetto attraverso i “commit”. Nel momento in cui fai un cambiamento lo salvi attraverso “add .”, tieni traccia del tuo cambiamento attraverso il “commit” e lo butti nel tuo branch attraverso la funzione “push”.Poiché hai l intera storia del progetto sul tuo disco locale, molte operazioni sembrano quasi istantanee. La prima cosa da ricordare sempre di Git se vuoi affrontare al meglio il processo di apprendimento è che i tuoi file in Git possono essere in tre stati: committed (committati), modified(modificati) e staged (in stage). Committato significa che il file è al sicuro nel database locale. Modificato significa che il file è stato modificato, ma non è ancora stato committato nel database. In stage significa che hai contrassegnato un file, modificato nella versione corrente, perché venga inserito nello snapshot alla prossima commit. La directory di Git è dove Git salva i metadati e il database degli oggetti del tuo progetto. Questa è la parte più importante di Git, ed è ciò che viene copiato quando si clona un repository da un altro computer. Git add . serve per iniziare a tracciare un nuovo file. Se adesso fai git commit lo stato del file dopo “add .” sarà nella cronologia degli stati di git. Continous integration : tutti I membri si allineano con l’ambiente condiviso (GIT) Continous delivery: creiamo tanto prototipi in maniera che il cliente possa seguire lo state dell’arte. '
},
{
    question:'Cos è Hibernate?',
    answer:'è an object-relational mapping tool che gestisce la persistenza dei dati sul DB attraverso la rappresentazione e il mantenimento sul db relazionale di un sistema di oggetti Java.\n I vantaggi di utilizzarlo sono:\n • Offre la possibilità di gestire la persistenza in Java senza preoccuparsi del tipo di DB sottostante: basta cambiare una stringa di configurazione ed è possibile cambiare il tipo di DB.\n • Offre il linguaggio HQL (Hibernate Query Language) che estende il linguaggio JPQL (Java Persistence API Language).\n Gli svantaggi stanno nel fatto di non poter utilizzare stored procedure o functions altrimenti di perde la portabilità.\nE’ possibile effettuare una query in diversi modi:\n • Query native scritte nel linguaggio del RDBMS -> non portabili \n• Query in HQL (Hibernate Query Language) -> portabili\n• Query dinamiche, dette anche criteria query -> portabili '
},
{
    question: 'Servizi REST',
    answer:'Realizzano l’architettura client-server per scambiare dati usando il protocollo http. Infatti i metodi di trasmissione in un REST controller Spring sono GET, POST, PUT E DELETE.\n L’annotazione @Requestmapping si prende sia il valore (ossia la parte di percorso per raggiungere la funzione) che il metodo (method = RequestMethod.POST) che gli passi. Per passare i parametri utilizzo l’annotazione @RequestParam. L’annotazione @CrossOrigin è un’annotazione di sicurezza che ci permette di comunicare con più domini (porte localhost).\n JSON è un formato utilizzato per lo scambio di dati nei servizi REST. Per le persone è facile da leggere e scrivere, mentre per le macchine risulta facile da generare e analizzarne la sintassi.'
},
{
    question:'Vantaggi e Svantaggi dei microservizi',
    answer:'I vantaggi dei microservizi sono:\n• Se un microservizio cede, non cade tutto il sistema.\n • L’implementazione di un microservizio non è legata a nessun linguaggio di programmazione specifico: si può utilizzare qualsiasi linguaggio di programmazione che sia in grado di creare servizi REST.\nSvantaggi dei microservizi:\nSe i microservizi non sono debolmente accoppiati, quindi ho che un microservizio chiama spesso un altro microservizio, all’aumentare del numero di richieste avrò un degrado notevole di prestazioni.   '
},
{
    question:'Modificatori final e static',
    answer:'Esistono 2 tipi di modificatori:\n• static: può essere applicato a classi, metodi o variabili. o Se applicato ad una classe: non è necessario istanziarla per utilizzare metodi e attributi al suo interno. Non ha costruttore, né return. o Se applicato a variabili posso accedervi direttamente con la sintassi nomeclasse.nomevabile senza istanziare l’oggetto o Se applicato a metodi significa che i metodi sono accessibili sempre senza istanziare la classe che li contiene. Ad esempio per chiamare un metodo statico scrivo nomeclasse.nomemetodo()\n• final: può essere applicata a classi, metodi, o variabili.  o se applicato a classe allora la classe non può essere estesa o Se applicata a variabili è utile quando si vuole che una variabile memorizzi sempre lo stesso valore o Se applicato a metodi questi non possono essere estesi'
}


]