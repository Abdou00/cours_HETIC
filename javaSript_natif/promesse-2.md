Les promesses sont aujourd’hui utilisées par la plupart des API modernes. Il est donc important de comprendre comment elles fonctionnent et de savoir les utiliser pour optimiser son code.
Les avantages des promesses par rapport à l’utilisation de simples fonctions de rappel pour gérer des opérations asynchrones vont être notamment la possibilité de chainer les opérations asynchrones, la garantie que les opérations vont se dérouler dans l’ordre voulu et une gestion des erreurs simplifiées tout en évitant le « callback hell ».

Une promesse en JavaScript est un objet qui représente l’état d’une opération asynchrone. Une opération asynchrone peut être dans l’un des états suivants :

Opération en cours (non terminée) ;
Opération terminée avec succès (promesse résolue) ;
Opération terminée ou plus exactement stoppée après un échec (promesse rejetée).
En JavaScript, nous allons pouvoir créer nos propres promesses ou manipuler des promesses déjà consommées créées par des API.

L’idée est la suivante : nous allons définir une fonction dont le rôle est d’effectuer une opération asynchrone et cette fonction va, lors de son exécution, créer et renvoyer un objet Promesse.

En pratique, la majorité des opérations asynchrones qu’on va vouloir réaliser en JavaScript vont déjà être pré-codées et fournies par des API. Ainsi, nous allons rarement créer nos propres promesses mais plutôt utiliser les promesses renvoyées par les fonctions de ces API.

Lorsque nos fonctions asynchrones s’exécutent, elles renvoient une promesse. Cette promesse va partager les informations liées à l’opération qui vient de s’exécuter et on va pouvoir l’utiliser pour définir quoi faire en fonction du résultat qu’elle contient (en cas de succès de l’opération ou en cas d’échec).

Les promesses permettent ainsi de représenter et de manipuler un résultat un évènement futur et nous permettent donc de définir à l’avance quoi faire lorsqu’une opération asynchrone est terminée, que celle-ci ait été terminée avec succès ou qu’on ait rencontré un cas d’échec.

Pour le dire autrement, vous pouvez considérer qu’une valeur classique est définie et disponible dans le présent tandis qu’une valeur « promise » est une valeur qui peut déjà exister ou qui existera dans le futur. Les calculs basés sur les promesses agissent sur ces valeurs encapsulées et sont exécutés de manière asynchrone à mesure que les valeurs deviennent disponibles.

Au final, on fait une « promesse » au navigateur ou au programme exécutant notre code : on l’informe qu’on n’a pas encore le résultat de telle opération car celle-ci ne s’est pas déroulée mais que dès que l’opération sera terminée, son résultat sera disponible dans la promesse et qu’il devra alors exécuter tel ou tel code selon le résultat contenu dans cette promesse.

Le code à exécuter après la consommation d’une promesse va être passé sous la forme de fonction de rappel qu’on va attacher à la promesse en question.

Dans la plupart des cas, nous n’aurons pas à créer de nouvel objet en utilisant le constructeur Promise mais simplement à manipuler des objets déjà créés. En effet, les promesses vont être particulièrement utilisées par des API JavaScript réalisant des opérations asynchrones.

Ainsi, dans quasiment toutes les API modernes, lorsqu’une fonction réalise une opération asynchrone elle renvoie un objet promesse en résultat qu’on va pouvoir utiliser.

Imaginons par exemple une application de chat vidéo / audio Web. Pour pouvoir chatter, il faut avant tout que les utilisateurs donnent l’accès à leur micro et à leur Webcam à l’application et également qu’ils définissent quel micro et quelle caméra ils souhaitent utiliser dans le cas où ils en aient plusieurs.

Ici, sans code asynchrone et sans promesses, toute la fenêtre du navigateur va être bloquée pour l’utilisateur tant que celui-ci n’a pas explicitement accordé l’accès à sa caméra et à son micro et tant qu’il n’a pas défini quelle caméra et micro utiliser.

Une application comme celle-ci aurait donc tout intérêt à utiliser les promesses pour éviter de bloquer le navigateur. L’application renverrait donc plutôt une promesse qui serait résolue dès que l’utilisateur donne l’accès et choisit sa caméra et son micro.

/**
 * Exercice - Promesses
Créer une fonction combineImages avec un seul paramètre: un tableau d’URL
Cette fonction doit charger chaque URL du tableau afin d’effectuer le chargement asynchrone des images (avec new Image(), puis onload)
**/


