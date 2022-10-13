import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import Receta from "./components/Receta";

export default function App() {
  const InfoReceta = [{
    nombre: "Souflé de chocolate",
    image: {url: "https://www.recetasderechupete.com/wp-content/uploads/2017/03/Soufflee-de-chocolate.jpg"},
    ingredientes: [
      "100 g. de chocolate negro mínimo 70% (el que más os guste)",
      "25 g. de cacao en polvo",
      "60 g. de mantequilla + 10 g. más para los ramequines o minicocottes",
      "4 huevos enteros + 1 clara de huevo",
      "50 g. de azúcar",
      "Para decorar: Azúcar glass avainillado",
      "4 moldes individuales",
      "1 pellizco de sal para batir las claras"
    ],
    pasos: [
      "Elegimos el chocolate a utilizar, el que más os guste, pero el chocolate debe llevar al menos un 70% de cacao. Lo vamos a apoyar con el cacao en polvo, así conseguimos un mayor sabor a chocolate y no necesitaremos prepararlos con harina.",
      "Troceamos el chocolate, cuanto más fino quede mejor se fundirá. Partimos la mantequilla dejando un poquito para los moldes y calentamos todo en un tazón grande en el micro.",
      "Con 2 minutos a temperatura media llega, al minuto de la preparación, sacamos y removemos un poco con unas varillas manuales.",
      "Volvemos a darle un toque de temperatura y juntamos con las varillas hasta que obtengamos una crema homogénea y suave. No debemos  calentar el chocolate en el micro más de lo necesario, pues se nos puede quemar. Dejamos que se enfríe un poco.",
      "Separamos las claras de las yemas de huevo (estas últimas las reservamos para el siguiente paso).",
      "Vamos a montar las 5 claras de huevo, aunque no deben quedar demasiado firmes.",
      "Para ello, batimos las claras a punto de nieve, el truco para que monten sin problema es usar un bol sin ningún resto de grasa, tener  las claras a temperatura ambiente y echar el azúcar una vez se haya añadido el pellizco de sal. Reservamos.",
      "Vamos con la masa, juntamos las yemas de huevo y el cacao en polvo amargo. Mezclamos con las varillas y vertemos la crema de chocolate, juntamos bien hasta que tengamos los ingredientes bien mezclados.",
      "Añadimos el equivalente a una cuarta parte de las claras de huevo y removemos vivamente para esponjar la crema.",
      "Ponemos el horno a precalentar a 180º C .",
      "A continuación incorporamos el resto de las claras a punto de nieve. Con una espátula de silicona mezclamos con suavidad. Siempre con movimientos envolventes de abajo hacia arriba para evitar que se desmonten.",
      "Este paso hay que hacerlo de manera suave y sin prisa, sólo con paciencia quedará perfecta la crema.",
      "Fundimos la mantequilla que tenemos reservada para pintar con un pincel de silicona el interior de los moldes. Espolvoreamos con un poquito de azúcar glas para que se fije a la mantequilla. Te aconsejo que cada molde sea de una capacidad de 150 ml. a 200 ml, ya veis que quedan perfectos.",
      "Repartimos la preparación en los moldes y horneamos a 200 º C durante 10 minutos.",
      "La pasta tiene que subir un tercio de su volumen y el centro debe quedar cremoso. Si la pasta no sube es porque el horno no está lo bastante caliente o los moldes no están bien untados. Es importante no abrir la puerta del horno mientras horneamos nuestros soufflés, o no subirán.",
      "Servimos nada más salir del horno porque calentitos están de rechupete. Puedes decorar con un poco de azúcar glass por si te gusta más 'dulzón'."
    ]
  },
  {
    nombre: "Suflé de queso",
    image: {url: "https://www.recetasderechupete.com/wp-content/uploads/2014/08/souffle_queso.jpg"},
    ingredientes: [
      "5 huevos M",
      "30 g. de mantequilla",
      "30 g. de harina de trigo (o sin gluten para celiacos)",
      "250 ml. de leche entera",
      "150 g. de queso Emmental",
      "Sal y nuez moscada (al gusto de cada casa)"
    ],
    pasos: [
      "Separamos las claras de las yemas, ponemos cada cual en un cuenco limpio y seco, sin restos de grasa.",
      "Vamos a montar claras, es recomendable que usemos un robot de cocina o una batidora con varillas, si no os vais a dejar el brazo en el intento. En un bol grande, echamos las claras reservadas y las montamos junto a 1 pizca de sal. Cuando estén prácticamente listas, paramos y reservamos las claras en la nevera.",
      "En una sartén calentamos la mantequilla hasta que se derrita. Cuando la mantequilla esté caliente añadimos la harina y removemos sin parar hasta que se haya integrado con la grasa de la mantequilla.",
      "Añadimos la leche y batimos hasta que quede una crema espesa y sin grumos. Salamos y espolvoreamos la nuez moscada. Retiramos del fuego. Añadimos las yemas de huevo que tenemos reservadas y removemos bien hasta integrar con el resto de la salsa.",
      "Rallamos el queso y los incorporamos al a mezcla anterior. Volvemos a poner a fuego medio-bajo removiendo hasta que el queso se integre. Retiramos del fuego. Dejamos que se temple la salsa, en cuanto esté tibia mezclamos las claras a punto de nieve con el resto de la crema con movimientos envolventes, intentando que no pierda el aire.",
      "Untamos los moldes con mantequilla y vertemos la mezcla hasta, como máximo, 2/3 de su volumen. Tenemos que tener cuidado de no pasarnos llenando los moldes ya que crecerá bastante en el horno.",
      "Precalentamos el horno a 170º C y horneamos durante 25 minutos. Si vamos a utilizar un solo molde en lugar de moldes individuales, el tiempo de horneado aumentará hasta los 40 minutos."
    ]
  },
  {
    nombre: "Quesada pasiega casera",
    image: {url: "https://www.recetasderechupete.com/wp-content/uploads/2015/05/quesada_pasiega.jpg"},
    ingredientes: [
      "750 gr. queso fresco tipo burgos",
      "100 gr. mantequilla a temperatura ambiente",
      "3 huevos camperos (si son de casa mejor)",
      "120 gr. harina",
      "3 cdita. canela en polvo",
      "200 gr. azúcar",
      "Ralladura limón",
      "Una pizca de sal"
    ],
    pasos: [
      "En este caso hemos optado por hacer la quesada más sencilla empleando queso fresco. Pero si queréis probar la auténtica quesada tendría que ser con cuajada (es complicado conseguirla fuera de España). En un cuenco aplastamos con un tenedor el queso hasta convertirlo en una pasta granulosa.",
      "No es necesario que lo paséis por la batidora o similar. En la auténtica quesada se aprecian trocitos de queso sin triturar, por eso con aplastarlo bien con un cubierto será suficiente. Si queréis hacerlo de manera tradicional necesitáis leche fresca y cuajo.",
      "Hervimos unos 3 litros de leche y una vez llega a ebullición la separamos del fuego y esperamos que alcance los 60º C. Momento en el que le añadimos un sobre de cuajo en polvo, removiendo hasta que veamos que comienza a cortarse.",
      "Cuando veamos ya toda la leche separada del suero la colamos por una gasa de algodón y la dejamos reposar unas 2o horas. De ahí sacaremos el queso de cuajada que en esta receta hemos sustituido por queso fresco. Añadimos la ralladura de limón y la canela en polvo. Mezclamos bien y reservamos.",
      "En un bol batimos los huevos con el azúcar y la mantequilla en pomada, bien blandita y manejable. Incorporamos la mezcla de queso y removemos hasta que se integre con el resto de ingredientes. Agregamos la harina y la pizca de sal al bol y mezclamos bien.",
      "Untamos un molde con mantequilla por toda su superficie y vertemos la mezcla. No será necesario que empleemos un molde desmoldable. Ya que, una ver horneada la quesada podremos desmoldarla, si quisiéramos, con facilidad.",
      "Lo único que debemos de tener en cuenta es que la quesada pasiega más tradicional tiene un espesor de unos 3 cm. por lo que debemos recordarlo a la hora de elegir el molde. En cualquier caso, sea cual sea el espesor de la tarta, el resultado será igual de bueno. Espolvoreamos con canela.",
      "Horneamos, con el horno previamente caliente a 180º C, con calor por arriba y por abajo y sin ventilador, durante 40 minutos.",
      "Retiramos el molde del horno y lo colocamos sobre una rejilla hasta que se haya templado. En este momento nos será más fácil desmoldarla si queremos."
    ]
  },
  {
    nombre: "Bacalao al ajoarriero de Cuenca",
    image: {url: "https://www.recetasderechupete.com/wp-content/uploads/2014/04/bacalao_ajoarriero.jpg"},
    ingredientes: [
      "500 g. de bacalao salado o 600 g. de bacalao desalado",
      "300 ml. de aceite de aceite de oliva virgen extra",
      "½ k. de patatas para cocer (a ser posible gallegas, variedad Kennebeck)",
      "2 huevos cocidos enteros y 1 yema de huevo cocido",
      "3 cucharadas de pan rallado",
      "4 dientes de ajo pequeños",
      "Un poco de perejil fresco finamente picado (para decorar)"
    ],
    pasos: [
      "En esta receta podemos emplear las migas, recortes del bacalao o trozos de bacalao más gruesos, no deja de ser una receta de aprovechamiento. Dependiendo del tipo que sea llevará más o menos tiempo desalarlo.",
      "Para desalar el bacalao tiene que quedar cubierto de agua en abundancia.",
      "Los trozos grandes se desalarán durante 48 horas, con cambio de agua cada 6 horas aproximadamente. Las partes más finas se desalarán durante 36 horas, con cambio de agua cada 8 horas.",
      "Los restos y el bacalao desmigado suelen desalarse primero bajo el grifo de agua fría durante 10 minutos y luego dejarlos en remojo durante 3 horas con un cambio de agua tras 1 hora y media, con eso es suficiente.",
      "Mientras el pescado se esté desalando debe permanecer a una temperatura entre 6º y 8º C dentro del frigorífico, ya que a temperatura ambiente puede fermentar.",
      "Si os pasa os daréis cuenta enseguida, a mí ya me ha pasado alguna vez, el olor es… bueno, no hace falta que lo describa. Además dentro de la nevera evitamos variaciones de temperatura, que aceleran o retrasan el desalado.",
      "Pelamos las patatas (os aconsejo patata gallega tipo Kennebeck) y las troceamos en dados más o menos pequeños, cuanto más pequeños sean más rápido se cocerán. Ponemos una olla al fuego con agua suficiente para cubrir las patatas. Las cocemos durante 10-12 minutos a fuego medio y vamos pinchando con un tenedor para ver si están.",
      "Cuando queden unos 2 minutos para el final de la cocción de las patatas añadimos el bacalao y cuando vuelva a hervir, apagamos el fuego, tapamos y dejamos reposar durante cinco minutos.",
      "Retiramos todo del agua y colocamos las patatas en un plato hondo. Si hemos usado trozos de bacalao grandes los limpiamos y desmigamos con las manos, y lo reservamos en otro plato.",
      "El siguiente paso será cocer los huevos. Cubrimos con agua fría un cazo o cazuela pequeña y los cocemos 10 minutos a partir de la ebullición. No debemos cocerlos más tiempo ya que se forma un halo oscuro de color verdoso alrededor de la yema desagradable a la vista. Con estas indicaciones os tienen que quedar perfectos. Reservamos.",
      "Preparamos un puré con las patatas, las machacamos con un tenedor o una prensa de patatas, si hiciese falta añadimos un poco del caldo de la cocción para que sea más sencillo.",
      "Troceamos muy bien los tres huevos duros (excepto dos yemas de huevo que reservamos sin picar). Reservamos el huevo picado y las 2 yemas enteras.",
      "Picamos muy finamente el perejil fresco. Reservamos.",
      "Machacamos en un mortero los 4 dientes de ajo con el pan rallado, las yemas enteras de huevo cocido y un chorrito de aceite de oliva virgen extra. Debe quedar como una pasta densa y bastante homogénea, casi crema. Mezclamos esta pasta muy bien con el puré de patatas.",
      "Añadimos al puré de patata el aceite de oliva virgen extra poco a poco sin dejar de batir con unas varillas manuales moviendo todo el rato. Es la hora de echar la mitad del huevo (1 y medio) y las migas de bacalao. Volvemos a machacar con la prensa de patatas o un tenedor.",
      "Probamos por si hiciese falta añadir sal. Aunque normalmente no es necesario ya que el bacalao aporta la suya a pesar de que esté bien desalado. Dejamos reposar unos minutos, lo justo para tostar un poquito de pan, y ya estaría perfecto para servir. Adornamos con el huevo duro troceado restante y el perejil picado. Simplemente de rechupete."
    ]
  },
  {
    nombre: "Crema de Coliflor",
    image: {url: "https://www.recetasderechupete.com/wp-content/uploads/2022/02/Crema-de-coliflor-768x530.jpg"},
    ingredientes: [
      "1 coliflor grande",
      "1 cebolla grande",
      "600 ml caldo de verduras",
      "200 ml leche entera o bebida vegetal de almendras, soja, avena...",
      "Aceite de oliva virgen extra",
      "Pimienta negra molida y sal (al gusto de cada casa)"
    ],
    pasos: [
      "Preparamos la coliflor retirando las hojas y el tallo (que podemos guardar para otra receta). Separamos los floretes en piezas de un tamaño lo más similar posible. Los lavamos bien. Reservamos.",
      "Pelamos la cebolla y la cortamos por la mitad. Después laminamos cada mitad, es decir, la cortamos en juliana fina para que se poche más rápido. Aunque podemos picar o trocear la cebolla como más fácil nos resulte.",
      "Calentamos un fondo de aceite de oliva virgen extra en una cacerola y añadimos la cebolla. Pochamos a fuego suave durante unos cinco minutos o hasta que esté tierna y traslúcida.",
      "Agregamos los floretes de coliflor a la cacerola y rehogamos un par de minutos antes de incorporar la mitad del caldo de verduras y la leche. Guardamos la otra mitad de caldo para ajustar el punto de espesor al final de la elaboración, una vez triturada la verdura y convertida en crema.",
      "Cocemos el conjunto a fuego suave durante unos diez minutos o hasta que la coliflor esté tierna. Lo comprobamos pinchando con la punta de un cuchillo o con una brocheta.",
      "Cuando la coliflor esté bien cocida trituramos las verduras con una batidora de mano o con un robot de cocina. Salpimentamos al gusto y ajustamos el punto de espesor añadiendo más caldo de verduras y/o más leche, según consideremos necesario.",
      "Servimos la crema bien caliente, acompañada de una cucharadita de cebolla frita crujiente, unos tallos de cebollino picado, un chorrito de aceite de oliva virgen extra, unas semillas de sésamo o lo que más nos guste. Las opciones son múltiples y con cualquiera de ellas estará de rechupete."
    ]
  },
  {
    nombre: "Conejo guisado al ajillo",
    image: {url: "https://www.recetasderechupete.com/wp-content/uploads/2017/02/Conejo-guisado-al-ajillo.jpg"},
    ingredientes: [
      "1 conejo de 1,5 Kg ya troceado",
      "1 cabeza de ajo (8-10 dientes de ajo)",
      "200 ml. de vino blanco",
      "150 ml de aceite de oliva virgen extra",
      "Un ramillete de tomillo fresco (opcional)",
      "Sal y pimienta negra recién molida (al gusto de cada casa)",
      "Conejo para la guarnición: 4 patatas medianas"
    ],
    pasos: [
      "Comenzamos por aderezar el conejo con sal y pimienta, y lo dejamos reposando hasta que lo cocinemos. Pelamos los dientes de ajo, unos 8-10 suelen traer las cabezas. Para que suelten más sabor vamos a estallarlos ligeramente. Bastará con presionar sobre el diente de ajo con el cuchillo, hasta que oímos que se rompe. Reservamos. ",
      "En una cazuela ancha y plana, vertemos una lámina de  aceite de oliva virgen extra y calentamos a fuego medio. En cuanto coja temperatura, añadimos los ajos y bajamos a fuego bajo (nivel 4 de 10). Queremos que los ajos se vayan tostando poco a poco, soltando todo su sabor al aceite pero sin que se arrebaten o pasen de punto.",
      "Tenemos que controlarlos y que en ningún momento lleguen a quemarse. Tras 5-6 minutos podemos retirar los dientes de ajo, que reservamos para más adelante.",
      "Subimos ahora el fuego y en cuanto el aceite esté caliente comenzamos a freír el conejo vuelta y vuelta. Cocinamos hasta que vemos que están bien doraditos los trozos de carne. Vertemos ahora el vino y dejamos que cueza para que se vaya evaporando el alcohol. Pasados 5 minutos se habrá formado una salsa entre el aceite, el vino y los jugos que fue soltando el conejo.",
      "Incorporamos de nuevo los dientes de ajo que teníamos reservamos y opcionalmente podemos añadir alguna hierba fresca aromática. Yo le he añadido un pequeño ramillete de tomillo fresco, que le queda perfecto a los guisos de conejo.",
      "Tapamos y cocinamos a fuego medio durante 20 minutos. En ese tiempo la salsa se irá espesando y adquiriendo una textura ligeramente cremosa. A mitad de cocción podemos darle la vuelta a alguna pieza de carne que sobresalga de la salsa. Servimos calentito en la mesa y a disfrutar de este auténtico “platazo”."
    ]
  },
  {
    nombre: "Ceviche de corvina",
    image: {url: "https://www.recetasderechupete.com/wp-content/uploads/2020/07/Ceviche-de-corvina-768x530.jpg"},
    ingredientes: [
      "500 g. de corvina (en filetes ya limpios, vamos a emplear los lomos de la corvina)",
      "1 cebolla morada cortada en juliana fina",
      "1 boniato",
      "1 maíz choclo de (grano grande)",
      "6 limas",
      "2 cucharadas de cilantro fresco picado finamente",
      "Opcional: 1 cucharadita tipo postre de rocoto o ají amarillo picados finamente (sin pepitas)",
      "Sal y pimienta blanca recién molida (al gusto de cada casa)"
    ],
    pasos: [
      "Para este ceviche hemos usado una corvina fresca, que podéis encontrar fácilmente en la pescadería. Decidle a vuestro/a pescadero/a de confianza que lo limpie bien y que no quede con espinas. Aún así tendremos que repasarlo en casa.",
      "Repasamos la corvina en casa, quitamos las partes duras y pequeños trozos de piel sobrante que pudiera haber dejado el pescadero. Miramos si los lomos de la corvina llevan alguna pequeña espina y se la quitamos. Una vez limpios, los fileteamos con el cuchillo cortando tiras o en dados medianos, trozos de 1-1/2 cm. aproximadamente. Reservamos el pescado en una fuente grande.",
      "Comenzamos con la guarnición, lavamos bien el boniato y lo cocemos 20 minutos a fuego medio, desde que empiece a hervir el agua. Lo pinchamos para comprobar que está blando en su interior. Quitamos del agua y reservamos. En un cazo aparte, cocemos la mazorca de maíz choclo durante 10 minutos.",
      "Aunque debéis dejarlo en remojo con una buena medida de agua durante toda la noche. El maíz debe quedar tierno, podemos probarlo para ver como va en la cocción. Reservamos.",
      "Cortamos las limas por la mitad y las tenemos lista para exprimir. Con una de ellas frotamos el bol donde vamos a preparar el cebiche. Añadimos al bol o fuente la corvina, añadimos unos cubitos de hielo, para que el pescado esté lo más frío posible durante el máximo tiempo posible.",
      "Añadimos sal fina (al gusto), pimienta blanca recién molida y el rocoto finamente picado sin pepitas (si no lo encontráis podéis emplear chile o ají amarillo). Os recomiendo que le deis ese punto picante, es la gracia de nuestro ceviche.",
      "Exprimimos las limas sobre el bol donde tenemos nuestros ingredientes. Siempre con la mano evitando que caigan las pepitas y exprimiéndolas sólo hasta la mitad para que no se amargue. Siempre en cualquier elaboración con limón o limas debemos exprimir a mano y con suavidad para que el zumo no amargue, nada de exprimidores eléctricos o manuales.",
      "Removemos 1 minuto hasta que esté todo bien integrado. Cuando la corvina comienza a tomar color probar de sabor y rectificar de sal si es necesario.",
      "La corvina se irá cocinando con el cítrico, y comprobaremos que su carne va blanqueando soltando todo su jugo, la famosa leche de tigre. Cortamos el cilantro muy fino, suavemente para no machacarlo y añadimos. Quitamos los cubitos de hielo del bol.",
      "El último paso será cortar la cebolla morada en juliana fina. La dividimos por la mitad. Retiramos la capa exterior, colocamos la mitad sobre la tabla y hacemos los cortes delgados. Para que la cebolla no quede pocha sino más bien crocante, la añadimos directamente a nuestro cebiche en el último momento antes de servir. Dejamos reposar en la nevera durante 10 minutos hasta que el pescado esté bien blanco.",
      "Sólo nos queda servir nuestro cebiche en el plato que tenemos reservado bien frío en la nevera con una cerveza bien helada. Pelamos el boniato y cortamos unas rodajas gruesas. Desgranamos la mazorca de choclo. Colocamos un poco de la corvina marinada, cebolla roja por encima, y acompañamos del boniato y los granos de maíz.",
    ]
  },
  {
    nombre: "Rapápalos de Bacalao con entomatá",
    image: {url: "https://www.recetasderechupete.com/wp-content/uploads/2018/03/Rep%C3%A1palos-de-bacalao-con-entomat%C3%A1.jpg"},
    ingredientes: [
      "200 g. de migas de bacalao",
      "50 g. de miga de pan",
      "2 cebollas",
      "3 dientes de ajo",
      "3 huevos M",
      "8 tomates maduros",
      "1 pimiento verde italiano",
      "Pimentón de la Vera dulce",
      "Aceite de oliva virgen extra",
      "Sal (al gusto de cada casa)"
    ],
    pasos: [
      "Calentamos abundante aceite de oliva en una sartén o cazuela. Cuando esté caliente añadimos porciones de la mezcla de bacalao al aceite para freír. El tamaño de los repápalos será la cantidad que podamos coger con una cuchara sopera.",
      "Freímos los repápalos por ambas caras hasta que estén bien dorados. Y retiramos a una bandeja con papel absorbente para retirar el exceso de aceite. Reservamos.",
      "Para preparar la entomatá comenzamos escaldando los tomates en agua hirviendo durante unos minutos. Retiramos los tomates de la cazuela, los pelamos y reservamos.",
      "En una cazuela calentamos un chorrito de aceite de oliva y añadimos la cebolla, los dientes de ajo y el pimiento verde italiano troceados. Sofreímos la verdura hasta que esté blandita a fuego medio. Retiramos la cazuela del fuego y añadimos una cucharadita de pimentón dulce de la Vera.",
      "Removemos bien con un tenedor, volvemos a poner la cazuela al fuego y añadimos los tomates pelados troceados. Cocinamos las verduras unos 20 minutos a fuego medio bajo.",
      "Añadimos los repápalos fritos a la cazuela, cubrimos con 300 ml. del caldo de la cocción del bacalao. Seguimos cocinando todo durante 12 o 15 minutos.",
      "Comprobamos el punto de sal y rectificamos si es necesario. El agua del bacalao aportará al guiso buena parte de la sal necesaria para el plato. Por eso es aconsejable esperar al último momento, una vez integrada el agua del bacalao, para comprobar el punto de sal.",

    ]
  }
]
  return(
    <ScrollView>
      {InfoReceta.map((receta, index) => <Receta 
        img = {receta.image}
        nombre = {receta.nombre}
        ingredientes = {receta.ingredientes}
        pasos = {receta.pasos}
        key = {`recipe-${index}`} 
      />)}
      <StatusBar style="auto"/>
    </ScrollView>
  );
}