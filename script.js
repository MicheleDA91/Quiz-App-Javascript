const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const pointersButtons = document.getElementById('pointers')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer')
const answerButton = document.getElementById('answer-btn')

startButton.addEventListener('click', startGame)
answerButton.addEventListener('click', showAnswer)

let shuffledQuestions, questionIndex

function startGame() {
   questionContainer.classList.remove('hide')
   pointersButtons.classList.remove('hide')
   nextButton.classList.remove('hide')
   startButton.classList.add('hide')
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
} 

]