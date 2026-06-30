export interface Spell {
  name: string;
  level: number;
  classes: string[];
  school: string;
  castingTime: string;
  range: string;
  duration: string;
  description: string;
}

export const SPELLS_DATABASE: Spell[] = [
  {
    "name": "Esguicho de Ácido",
    "level": 0,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você lança uma bolha de ácido. Escolha uma criatura dentro do alcance, ou escolha duas criaturas dentro do alcance que estejam a até 1,5 metro uma da outra. A deve ter sucesso em um Teste de resistência de alvo ou sofrer 1d6 dano de ácido.\n\nO dano deste feitiço aumenta em 1d6 quando você atinge o 5º nível (2d6), 11º nível (3d6) e 17º nível (4d6)."
  },
  {
    "name": "Alarme",
    "level": 1,
    "classes": [
      "Patrulheiro",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "8 horas",
    "description": "Você define um alarme contra invasões indesejadas. Escolha uma porta, uma janela ou uma área dentro do alcance que não seja maior que um cubo de 6 metros. Até o final da magia, um alarme alerta você sempre que uma criatura pequena ou maior toca ou entra na área protegida. Quando você conjura uma magia, você pode designar criaturas que não dispararão o alarme. Você também escolhe se o alarme é mental ou sonoro.\n\nUm alarme mental alerta você com um ping em sua mente se você estiver a 1,5 milha da área protegida. Este ping acorda você se você estiver dormindo.\n\nUm alarme sonoro produz o som de uma campainha por 10 segundos a até 18 metros."
  },
  {
    "name": "Amizade com Animais",
    "level": 1,
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "24 horas",
    "description": "Este feitiço permite que você convença um besta de que você não tem intenção de fazer mal. Escolha um melhor que você possa ver dentro do alcance. Ele deve ver e ouvir você. Se a Inteligência da besta for 4 ou superior, o feitiço falha. Caso contrário, o besta deverá ter sucesso em um Teste de resistência de Sabedoria ou ser feitiçado por você durante a duração do feitiço. Se você ou um de seus companheiros prejudicar o alvo, a magia termina."
  },
  {
    "name": "Perdição",
    "level": 1,
    "classes": [
      "Bardo",
      "Clérigo"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Até três criaturas de sua escolha que você possa ver dentro do alcance devem fazer Teste de resistência de Carismas. Sempre que um alvo que falha neste teste de resistência faz uma jogada de ataque ou um teste de resistência antes da magia terminar, o alvo deve rolar um d4 e subtrair o número rolado da jogada de ataque ou teste de resistência."
  },
  {
    "name": "Proteção contra Lâminas",
    "level": 0,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "1 rodada",
    "description": "Você estende a mão e traça um sigilo de proteção no ar. Até o final do seu próximo turno, você tem resistência contra concussão, perfuração e dano cortante causado por ataques com arma."
  },
  {
    "name": "Abençoar",
    "level": 1,
    "classes": [
      "Clérigo",
      "Paladino"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você abençoa até três criaturas de sua escolha dentro do alcance. Sempre que um alvo faz uma jogada de ataque ou um teste de resistência antes da magia terminar, o alvo pode rolar um d4 e adicionar o número obtido à jogada de ataque ou teste de resistência."
  },
  {
    "name": "Mãos Ardentes",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (15-foot cone)",
    "duration": "Instantâneo",
    "description": "Enquanto você segura as mãos com os polegares se tocando e os dedos abertos, uma fina camada de chamas brota das pontas dos dedos estendidas. Cada criatura num cone de 4,5 metros deverá fazer um Teste de resistência de Destreza. Uma criatura sofre 3d6 de dano de fogo em um teste de resistência falho, ou metade do dano em caso de sucesso.\n\nO fogo acende quaisquer objetos inflamáveis ​​na área que não estejam sendo usados ​​ou carregados."
  },
  {
    "name": "Enfeitiçar Pessoa",
    "level": 1,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "1 hora",
    "description": "Você tenta encantar um humanoide que você possa ver dentro do alcance. Ele deve fazer um Teste de resistência de Sabedoria, e o faz com vantagem se você ou seus companheiros estiverem lutando contra ele. Se ele falhar no teste de resistência, ele será feitiçado por você até o final da magia ou até que você ou seus companheiros façam algo prejudicial a ele. A criatura enfeitiçado considera você um conhecido amigável. Quando a magia termina, a criatura sabe que foi feitiçada por você."
  },
  {
    "name": "Toque Gélido",
    "level": 0,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "1 rodada",
    "description": "Você cria uma mão esquelética e fantasmagórica no espaço de uma criatura dentro do alcance. Faça um ataque de magia à distância contra a criatura para atacá-la com o frio da sepultura. Sem sucesso, o alvo sofre 1d8 de dano necrótico e não pode recuperar pontos de vida até o início do seu próximo turno. Até então, a mão agarra-se ao alvo.\n\nSe você tiver sucesso em um alvo morto-vivo, ele também terá manobras de ataque contra você até o final do seu próximo turno.\n\nO dano deste feitiço aumenta em 1d8 quando você atinge o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8)."
  },
  {
    "name": "Chromatic Orb",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Instantâneo",
    "description": "Você atira uma esfera de energia de 10 centímetros de diâmetro em uma criatura que você pode ver dentro do alcance. Você escolhe ácido, frio, fogo, raio, veneno ou trovão para o tipo de orbe que você cria, e então faz um ataque de magia à distância contra o alvo. Se o ataque for bem-sucedido, a criatura sofre 3d8 do tipo que você escolheu."
  },
  {
    "name": "Aspersão de Cores",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "Self (15-foot cone)",
    "duration": "1 rodada",
    "description": "Uma deslumbrante variedade de luzes coloridas e piscantes brota de sua mão. Role 6d10; o total é quantos pontos de vida de criaturas esse feitiço pode efetuar. Criaturas em um cone de 4,5 metros originárias de você são afetadas em ordem crescente de seus pontos de vida atuais (ignorando criaturas inconscientes e criaturas que não podem ver).\n\nComeçando pela criatura que possui os pontos de vida atuais mais baixos, cada criatura afetada por este feitiço fica cega até a magia terminar. Subtraia os pontos de vida de cada criatura do total antes de passar para a criatura com os próximos pontos de vida mais baixos. Os pontos de vida de uma criatura devem ser iguais ou menores que o total restante para que essa criatura seja afetada."
  },
  {
    "name": "Comando",
    "level": 1,
    "classes": [
      "Clérigo",
      "Paladino"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "1 rodada",
    "description": "Você fala um comando de uma palavra para uma criatura que você pode ver dentro do alcance. O alvo deve ter sucesso em um Teste de resistência de Sabedoria ou seguir o comando no próximo turno. O feitiço não tem efeito se o alvo for morto-vivo, se não entender sua língua ou se seu comando for diretamente prejudicial a ele. \n\n Seguem alguns comandos típicos e seus efeitos. Você pode emitir um comando diferente do descrito aqui. Se você fizer isso, o Mestre determinará como o alvo se comportará. Se o alvo não conseguir seguir seu comando, a magia termina. \n\nAproximação: O alvo se move em sua direção pelo caminho mais curto e direto, encerrando seu turno caso se mova até 1,5 metro de você. \n\nDrop: O alvo deixa cair tudo o que estiver segurando e então termina seu turno. \n\nFugir: O alvo passa seu turno se afastando de você pelos meios mais rápidos disponíveis. \n\nGrovel: O alvo cai caído e então encerra seu turno. \n\nHalt: O alvo não se move e não realiza ações. Uma criatura voadora permanece no ar, desde que seja capaz de fazê-lo. Se precisar se mover para permanecer no ar, ele voará a distância mínima necessária para permanecer no ar."
  },
  {
    "name": "Compelled Duel",
    "level": 1,
    "classes": [
      "Paladino"
    ],
    "school": "Encantamento",
    "castingTime": "1 bonus ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você tenta obrigar uma criatura a um duelo. Uma criatura que você possa ver dentro do alcance deve fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, a criatura é atraída até você, compelida por sua exigência divina. Durante todo o período, ele tem manobra de ataque contra criaturas que não sejam você, e deve fazer um Teste de resistência de Sabedoria cada vez que tentar se mover para um espaço que esteja a mais de 9 metros de distância de você; se obtiver sucesso neste teste de resistência, o feitiço não restringe o movimento do alvo naquele turno.\n\nA magia termina se você atacar qualquer outra criatura, se você lançar um feitiço que atinja uma criatura hostil que não seja o alvo, se uma criatura amiga a você danificar o alvo ou lançar um feitiço prejudicial sobre ele, ou se você terminar seu turno a mais de 9 metros de distância do alvo."
  },
  {
    "name": "Compreender Idiomas",
    "level": 1,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "1 hora",
    "description": "Durante esse tempo, você entende o significado literal de qualquer idioma falado que ouve. Você também entende qualquer linguagem escrita que vê, mas deve tocar a superfície em que as palavras estão escritas. Demora cerca de 1 minuto para ler uma página de texto.\n\nEsta magia não decodifica mensagens secretas em um texto ou glifo, como um sigilo arcano, que não faça parte de uma linguagem escrita."
  },
  {
    "name": "Criar ou Destruir Água",
    "level": 1,
    "classes": [
      "Clérigo",
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Você cria ou destrói água.\n\nCriar Água: Você cria até 10 galões de água limpa dentro do alcance em um recipiente aberto. Alternativamente, a água cai em forma de chuva em um cubo de 9 metros dentro do alcance, extinguindo as chamas expostas na área.\n\nDestruir Água: Você destrói até 10 galões de água em um recipiente aberto dentro do alcance. Alternativamente, você destrói a névoa em um cubo de 9 metros dentro do alcance."
  },
  {
    "name": "Curar Ferimentos",
    "level": 1,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Uma criatura que você toca recupera um número de pontos de vida igual a 1d8 + seu modificador de atributo de conjuração. Este feitiço não tem efeito sobre mortos-vivos ou constructoos."
  },
  {
    "name": "Luzes Dançantes",
    "level": 0,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você cria até quatro luzes do tamanho de tochas dentro do alcance, fazendo-as aparecer como tochas, lanternas ou orbes brilhantes que pairam no ar durante todo o tempo. Você também pode combinar as quatro luzes em uma forma vagamente humanóide brilhante de tamanho médio. Seja qual for a forma que você escolher, cada luz emite luz fraca em um raio de 3 metros. Como ação bônus no seu turno, você pode mover as luzes até 18 metros para um novo local dentro do alcance. Uma luz deve estar a até 6 metros de outra luz criada por esta magia, e uma luz apaga se exceder o alcance da magia."
  },
  {
    "name": "Detectar o Bem e o Mal",
    "level": 1,
    "classes": [
      "Clérigo",
      "Paladino"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Ao longo do tempo, você saberá se há uma aberração, celestial, elemental, feérico, inimigo ou mortos-vivos a até 9 metros de você, bem como onde a criatura está localizada. Da mesma forma, você sabe se existe um lugar ou objeto a até 9 metros de você que foi consagrado ou profanado magicamente.\n\nA magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de pedra, 2,5 centímetros de metal comum, uma folha fina de chumbo ou 90 centímetros de madeira ou terra."
  },
  {
    "name": "Detectar Magia",
    "level": 1,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Durante todo o tempo, você sente a presença de magia a até 9 metros de você. Se você sentir magia desta forma, você pode usar sua ação para ver uma aura fraca em qualquer criatura ou objeto visível na área que contenha magia, e você aprenderá sua escola de magia, se houver.\n\nA magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de pedra, 2,5 centímetros de metal comum, uma folha fina de chumbo ou 90 centímetros de madeira ou terra."
  },
  {
    "name": "Detectar Veneno e Doenças",
    "level": 1,
    "classes": [
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Durante esse período, você poderá sentir a presença e localização de venenos, criaturas venenosas e doenças a até 9 metros de você. Você também identifica o tipo de veneno, criatura venenosa ou doença em cada caso.\n\nA magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros de pedra, 2,5 centímetros de metal comum, uma folha fina de chumbo ou 90 centímetros de madeira ou terra."
  },
  {
    "name": "Disfarçar a Si Mesmo",
    "level": 1,
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "1 hora",
    "description": "Você faz com que você mesmo - incluindo suas roupas, armaduras, armas e outros pertences - pareça diferente até o fim da magia ou até que você use sua ação para desfalha-la. Que você pode ser 30 centímetros mais baixo ou mais alto e pode parecer magro, gordo ou intermediário. Você não pode mudar seu tipo de corpo, então deve adotar uma forma que tenha a mesma disposição básica dos membros. Caso contrário, a extensão da ilusão depende de você.\n\nAs mudanças provocadas por este feitiço não resistem à inspeção física. Por exemplo, se você usar este feitiço para adicionar um chapéu à sua roupa, os objetos passarão pelo chapéu e qualquer pessoa que o tocar não sentirá nada ou sentirá sua cabeça e seu cabelo. Se você usar esse feitiço para parecer mais magro do que é, a mão de alguém que estender a mão para tocá-lo irá esbarrar em você enquanto aparentemente ainda está no ar.\n\nPara discernir que você está disfarçado, uma criatura pode usar sua ação para inspecionar sua aparência e deve ter sucesso em um teste de Inteligência (Investigação) contra seu CD de resistência de magia."
  },
  {
    "name": "Favor Divino",
    "level": 1,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Sua oração capacita você com brilho divino. Até o fim da magia, seus ataques com arma causam 1d4 de dano radiante extra."
  },
  {
    "name": "Sussurros Dissonantes",
    "level": 1,
    "classes": [
      "Bardo"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você sussurra uma melodia discordante que apenas uma criatura de sua escolha dentro do alcance pode ouvir, destruindo-a com uma dor terrível. O alvo deve fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, ele sofre 3d6 de dano psíquico e deve usar imediatamente seus resultados, se disponíveis, para se mover o mais longe que sua velocidade permitir para longe de você. A criatura não se move para áreas obviamente perigosas, como uma fogueira ou um poço. Em um teste de resistência bem-sucedido, o alvo leva metade do dano e não precisa se afastar. Uma criatura ensurdecida é automaticamente bem-sucedida no salvamento."
  },
  {
    "name": "Arte Druídica",
    "level": 0,
    "classes": [
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Sussurrando para os espíritos da natureza, Você cria um dos seguintes efeitos dentro do alcance: Você cria um efeito sensorial minúsculo e inofensivo que prevê como estará o tempo em seu local nas próximas 24 horas. O efeito pode se manifestar como um orbe dourado para céu claro, uma nuvem para chuva, flocos de neve caindo para neve e assim por diante. Este efeito persiste por 1 rodada. Você instantaneamente faz uma flor desabrochar, uma vagem se abrir ou um botão de folha florescer. Você cria um efeito sensorial instantâneo e inofensivo, como folhas caindo, uma rajada de vento, o som de um pequeno animal ou a ordem fraca de um gambá. O efeito deve caber em um cubo de 1,5 metro. Você acende ou apaga instantaneamente uma vela, uma tocha ou uma pequena fogueira."
  },
  {
    "name": "Rajada Mística",
    "level": 0,
    "classes": [
      "Bruxo"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Um raio de energia crepitante avança em direção a uma criatura dentro do alcance. Faça um ataque de magia à distância contra o alvo. Sem sucesso, o alvo leva 1d10 dano de força. \n\n A magia cria mais de um feixe quando você atinge nível superior: dois feixes no 5º nível, três feixes no 11º nível e quatro feixes no 17º nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Faça uma jogada de ataque separada para cada trave."
  },
  {
    "name": "Ensnaring Strike",
    "level": 1,
    "classes": [
      "Patrulheiro"
    ],
    "school": "Conjuração",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na próxima vez que você acertar uma criatura com um ataque de arma antes que a magia termine, uma massa contorcida de vinhas espinhosas aparece no ponto de impacto, e o alvo deve ter sucesso em um Teste de resistência de Força ou será imobilizado pelas vinhas mágicas até o fim da magia. Uma criatura grande ou maior tem vantagem neste teste de resistência. Se o alvo conseguir salvar, as vinhas murcham.\n\nEnquanto estiver imobilizado por este feitiço, o alvo sofre 1d6 dano perfurante no início de cada um de seus turnos. Uma criatura imobilizada pelas vinhas ou que possa tocar uma criatura pode usar sua ação para fazer um teste de Força contra seu CD de resistência de magia. Com sucesso, o alvo é libertado."
  },
  {
    "name": "Emaranhar",
    "level": 1,
    "classes": [
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Ervas daninhas e trepadeiras brotam da grodada em um quadrado de 6 metros começando em um ponto dentro do alcance. Durante o período, essas plantaas transformam a grodada da região em terreno difícil.\n\nUma criatura na área quando você conjura uma magia deve ter sucesso em um Teste de resistência de Força ou ser imobilizada pelas plantas emaranhadas até o fim da magia. Uma criatura imobilizada pelas plantas pode usar sua ação para fazer um teste de Força contra seu CD de resistência de magia. Com um sucesso, ele se liberta.\n\nQuando a magia termina, as plantaas conjuradas murcham."
  },
  {
    "name": "Fogo Feérico",
    "level": 1,
    "classes": [
      "Bardo",
      "Druida"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Cada objeto em um cubo de 6 metros dentro do alcance é contornado em luz azul, verde ou violeta (sua escolha). Qualquer criatura na área quando o feitiço é lançado também é delineada em luz se falhar no Teste de resistência de Destreza. Durante todo o período, objetos e criaturas afetadas emitem luz fraca em um raio de 3 metros.\n\nQualquer ataque de ataque contra uma criatura ou objeto afetado tem vantagem se o atacante puder vê-lo, e a criatura ou objeto afetado não pode se beneficiar por ser invisível."
  },
  {
    "name": "Retirada Apressada",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Este feitiço permite que você se mova em um ritmo incrível. Quando você conjura essa magia, e então como uma ação bônus em cada um dos seus turnos até o final da magia, você pode realizar a ação Dash."
  },
  {
    "name": "Falsa Vida",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "1 hora",
    "description": "Reforçando-se com um fac-símile necromântico de vida, você ganha 1d4 + 4 pontos de vida temporários pela duração."
  },
  {
    "name": "Queda de Pena",
    "level": 1,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 reação, which you take when you or a creature within 60 feet of you falls",
    "range": "18 metros",
    "duration": "1 minuto",
    "description": "Escolha até cinco criaturas em queda dentro do alcance. A taxa de descida de uma criatura em queda diminui para 18 metros por rodada até a magia terminar. Se a criatura pousar antes que a magia termine, ela não sofrerá nenhum dano de queda e poderá cair de pé, e a magia terminará para aquela criatura."
  },
  {
    "name": "Encontrar Familiar",
    "level": 1,
    "classes": [
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 hour",
    "range": "3 metros",
    "duration": "Instantâneo",
    "description": "Você ganha o serviço de um familiar, um espírito que assume uma forma animal à sua escolha: morcego, gato, caranguejo, sapo (sapo), falcão, lagarto, polvo, coruja, cobra venenosa, peixe (quipper), rato, corvo, cavalo-marinho, aranha ou doninha. Aparecendo em um espaço desocupado dentro do alcance, o familiar possui as estatísticas da forma escolhida, embora seja um celestial, feérico ou inimigo (sua escolha) em vez de um besta. \n\n Seu familiar age independentemente de você, mas sempre obedece aos seus comandos. Em combate, ele lança sua própria iniciativa e age por seu próprio turno. Um familiar não pode atacar, mas pode realizar outras ações normalmente.\n\nQuando o familiar cai para 0 pontos de vida, ele desaparece, não deixando para trás nenhuma forma física. Ele reaparece depois que você lança este feitiço novamente.\n\nEnquanto seu familiar estiver a até 30 metros de você, você poderá se comunicar com ele telepaticamente. Além disso, como uma ação, você pode ver através dos olhos do seu familiar e ouvir o que ele ouve até o início do seu próximo turno, ganhando os benefícios de quaisquer sentidos especiais que o familiar possua. Durante esse período, você fica surdo e cego em relação aos seus próprios sentidos.\n\nComo ação, você pode disfalhar temporariamente seu familiar. Ele desaparece em uma dimensão de bolso onde aguarda sua convocação. Alternativamente, você pode disfalha-lo para sempre. Como ação enquanto ele estiver temporariamente desfalcado, você pode fazer com que ele reapareça em qualquer espaço desocupado a até 9 metros de você.\n\nVocê não pode ter mais de um familiar ao mesmo tempo. Se você conjurar esta magia enquanto já possui um familiar, você fará com que ele adote uma nova forma. Escolha uma das formas da lista acima. Seu familiar se transforma na criatura escolhida.\n\nFinalmente, quando você conjura uma magia com alcance de toque, seu familiar pode lançar a magia como se a tivesse lançado. Seu familiar deve estar a até 30 metros de você e deve usar sua ocorrência para lançar a magia quando você a lançar. Se a magia exigir uma jogada de ataque, você usa seu modificador de ação para o teste."
  },
  {
    "name": "Raio de Fogo",
    "level": 0,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Você atira um cisco de fogo em uma criatura ou objeto dentro do alcance. Faça um ataque de magia à distância contra o alvo. Sem sucesso, o alvo leva 1d10 de dano de fogo. Um objeto inflamável obtido por este feitiço acende se não estiver sendo usado ou carregado.\n\nO dano desta magia aumenta em 1d10 quando você atinge o 5º nível (2d10), 11º nível (3d10) e 17º nível (4d10)."
  },
  {
    "name": "Nuvem de Névoa",
    "level": 1,
    "classes": [
      "Druida",
      "Patrulheiro",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você cria uma esfera de neblina com raio de 6 metros centrada em um ponto dentro do alcance. A esfera se espalha pelos cantos arodada e sua área fica fortemente obscurecida. Dura enquanto durar ou até que um vento de velocidade moderada ou maior (pelo menos 10 milhas por hora) o disperse."
  },
  {
    "name": "Amigos",
    "level": 0,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Enquanto durar, você terá vantagem em todos os testes de Carisma direcionados a uma criatura de sua escolha que não seja hostil a você. Quando a magia termina, a criatura percebe que você usou magia para influenciar seu humor e se torna hostil com você. Uma criatura caída na violência pode atacar você. Outra criatura pode buscar retribuição de outras maneiras (a critério do Mestre), dependendo da natureza de sua interação com ela."
  },
  {
    "name": "Boa Baga",
    "level": 1,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Até dez frutas aparecem em sua mão e são infundidas com magia durante todo o tempo. Uma criatura pode usar sua ação para comer uma baga. Comer uma fruta restaura 1 ponto de vida, e a fruta fornece alimento suficiente para sustentar uma criatura por um dia.\n\nAs bagas perdem sua potência se não forem consumidas dentro de 24 horas após o lançamento deste feitiço."
  },
  {
    "name": "Graxa",
    "level": 1,
    "classes": [
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "1 minuto",
    "description": "A graxa escorregadia cobre a grodada em um quadrado de 3 metros centrado em um ponto dentro do alcance e a transforma em terreno difícil durante todo o tempo.\n\nQuando a gordura aparecer, cada criatura que estiver em sua área deverá passar por um Teste de resistência de Destreza ou cairá. Uma criatura que entre na área ou termine seu turno ali também deverá ter sucesso em um Teste de resistência de Destreza ou cair."
  },
  {
    "name": "Orientação",
    "level": 0,
    "classes": [
      "Clérigo",
      "Druida"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 minute",
    "description": "Você toca uma criatura voluntária. Uma vez antes da magia terminar, o alvo pode rolar um d4 e adicionar o número obtido a um teste de habilidade de sua escolha. Ele pode lançar o dado antes ou depois de fazer o teste de habilidade. O feitiço então termina."
  },
  {
    "name": "Raio Guiado",
    "level": 1,
    "classes": [
      "Clérigo"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "1 rodada",
    "description": "Um flash de luz atinge uma criatura de sua escolha dentro do alcance. Faça um ataque de magia à distância contra o alvo. Sem sucesso, o alvo leva 4d6 de dano radiante, e a próxima jogada de ataque feita contra esse alvo antes do final do seu próximo turno tem vantagem, graças à mística luz fraca que brilhava no alvo até então."
  },
  {
    "name": "Hail of Thorns",
    "level": 1,
    "classes": [
      "Patrulheiro"
    ],
    "school": "Conjuração",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na próxima vez que você atacar uma criatura com um ataque à distância com arma antes que a magia termine, este feitiço criará uma chuva de espinhos que brotará de sua arma de longo alcance ou munição. Além dos efeitos normais do ataque, o alvo do ataque e cada criatura a até 1,5 metro dele devem fazer um Teste de resistência de Destreza. Uma criatura sofre 1d10 de dano perfurante em um teste de resistência falho, ou metade do dano se for bem sucedido."
  },
  {
    "name": "Palavra de Cura",
    "level": 1,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Uma criatura de sua escolha que você possa ver dentro do alcance recupera pontos de vida iguais a 1d4 + seu modificador de atributo de conjuração. Este feitiço não tem efeito sobre mortos-vivos ou constructoos."
  },
  {
    "name": "Represália Infernal",
    "level": 1,
    "classes": [
      "Bruxo"
    ],
    "school": "Evocação",
    "castingTime": "1 reação, which you take in response to being damaged by a creature within 60 feet of you that you can see.",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você aponta o dedo e a criatura que o feriu é momentaneamente cercada por chamas infernais. A criatura deve fazer um Teste de resistência de Destreza. São necessários 2d10 dano de fogo em um teste de resistência falho, ou metade do dano em um teste bem sucedido."
  },
  {
    "name": "Hex",
    "level": 1,
    "classes": [
      "Bruxo"
    ],
    "school": "Encantamento",
    "castingTime": "1 bonus ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você amaldiçoa uma criatura que você pode ver dentro do alcance. Até o fim da magia, você causa 1d6 de dano necrótico extra ao alvo sempre que o acerta com um ataque. Escolha também uma habilidade ao conjurar uma magia. O alvo tem desvantagens no teste de habilidades feito com a habilidade escolhida.\n\nSe o alvo cair para 0 pontos de vida antes que esta magia termine, você poderá usar uma ação bônus em um turno subsequente para amaldiçoar uma nova criatura.\n\nUma maldição de remoção lançada no alvo encerra este feitiço mais cedo."
  },
  {
    "name": "Heroísmo",
    "level": 1,
    "classes": [
      "Bardo",
      "Paladino"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma criatura voluntária que você toca é imbuída de bravura. Até o final da magia, a criatura fica imune a ser amedrontada e ganha pontos de vida temporários iguais ao seu modificador de atributo de conjuração no início de cada um de seus turnos. Quando a magia termina, o alvo perde quaisquer pontos de vida temporários restantes desta magia."
  },
  {
    "name": "Marca do Caçador",
    "level": 1,
    "classes": [
      "Patrulheiro"
    ],
    "school": "Adivinhação",
    "castingTime": "1 bonus ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você escolhe uma criatura que pode ver dentro do alcance e a marca misticamente como sua presa. Até o fim da magia, você causa 1d6 de dano extra ao alvo sempre que acertá-lo com um ataque com arma, e você tem vantagem em qualquer teste de Sabedoria (Percepção) ou Sabedoria (Sobrevivência) que fizer para encontrá-lo. Se o alvo cair para 0 pontos de vida antes desta magia terminar, você poderá usar uma ação bônus em um turno subsequente para marcar uma nova criatura."
  },
  {
    "name": "Identificar",
    "level": 1,
    "classes": [
      "Bardo",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 minute",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você escolhe um objeto que deve tocar durante o lançamento do feitiço. Se for um item mágico ou algum outro objeto imbuído de magia, você aprende suas propriedades e como usá-las, se requer sintonização para ser usado e quantas cargas ele possui, se houver. Você aprende se algum feitiço está afetando o item e quais são. Se o item foi criado por uma magia, você aprende qual magia o criou.\n\nSe, em vez disso, você tocar uma criatura durante a conjuração, você aprenderá quais magias, se houver, a estão afetando no momento."
  },
  {
    "name": "Escrita Ilusória",
    "level": 1,
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 minute",
    "range": "Toque",
    "duration": "10 dias",
    "description": "Você escreve em pergaminho, papel ou algum outro material de escrita adequado e imbui-o de uma ilusão poderosa que dura enquanto durar.\n\nPara você e quaisquer criaturas que você designar quando você conjura uma magia, a escrita parece normal, escrita à sua mão e transmite qualquer significado que você pretendia quando escreveu o texto. Para todos os outros, a escrita parece ter sido escrita em uma escrita desconhecida ou mágica que é ininteligível. Alternativamente, você pode fazer com que a escrita pareça ser uma mensagem totalmente diferente, escrita em uma caligrafia e idioma diferentes, embora o idioma deva ser um que você conheça.\n\nCaso o feitiço seja dissipado, o roteiro original e a ilusão desaparecem.\n\nUma criatura com visão verdadeira pode ler a mensagem oculta."
  },
  {
    "name": "Infligir Ferimentos",
    "level": 1,
    "classes": [
      "Clérigo"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Faça um ataque de magia corpo a corpo contra uma criatura que você possa alcançar. Sem sucesso, o alvo leva 3d10 de dano necrótico."
  },
  {
    "name": "Saltar",
    "level": 1,
    "classes": [
      "Druida",
      "Patrulheiro",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 minuto",
    "description": "Você toca uma criatura. A distância do salto da criatura é triplicada até o final da magia."
  },
  {
    "name": "Luz",
    "level": 0,
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Você toca um objeto que não seja maior que 3 metros em qualquer dimensão. Até a magia terminar, o objeto emite luz brilhante em um raio de 6 metros e luz fraca por mais 6 metros adicionais. A luz pode ser colorida como você quiser. Cobrir completamente o objeto com algo opaco bloqueia a luz. A magia termina se você lançá-la novamente ou desfalha-la como uma ação.\n\nSe você atingir um objeto segurado ou usado por uma criatura hostil, essa criatura deverá ter sucesso em um Teste de resistência de Destreza para evitar o feitiço."
  },
  {
    "name": "Passo Longo",
    "level": 1,
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Você toca uma criatura. A velocidade do alvo aumenta em 3 metros até a magia terminar."
  },
  {
    "name": "Armadura de Mago",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "8 horas",
    "description": "Você toca uma criatura voluntária que não está usando armadura, e uma força mágica protetora a substitui até o fim da magia. A CA base do alvo passa a ser 13 + seu Modificador de Destreza. A magia termina se o alvo vestir uma armadura ou se você falhar o feitiço como uma ação."
  },
  {
    "name": "Mão Mágica",
    "level": 0,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "1 minuto",
    "description": "Uma mão espectral e flutuante aparece em um ponto escolhido dentro do alcance. A mão dura pela duração ou até você desfalha-la como uma ação. A mão desaparece se estiver a mais de 9 metros de distância de você ou se você lançar este feitiço novamente.\n\nVocê pode usar sua ação para controlar a mão. Você pode usar a mão para manipular um objeto, abrir uma porta ou recipiente destrancado, guardar ou recuperar um item de um recipiente aberto ou despejar o conteúdo de um frasco. Você pode mover a mão até 9 metros cada vez que usá-la.\n\nA mão não pode atacar, ativar itens mágicos ou carregar mais de 4,5 quilos."
  },
  {
    "name": "Míssil Mágico",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Você cria três dardos brilhantes de força mágica. Cada dardo tem uma criatura de sua escolha que você pode ver dentro do alcance. Um dardo causa 1d4 + 1 dano de força ao seu alvo. Todos os dardos atacam simultaneamente e você pode direcioná-los para o sucesso de uma criatura ou de várias."
  },
  {
    "name": "Remendar",
    "level": 0,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 minute",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Este feitiço repara uma única quebra ou rasgo em um objeto que você toca, como uma chave quebrada, uma capa rasgada ou um odre de vinho vazando. Contanto que a ruptura ou rasgo não ultrapasse 30 centímetros em qualquer dimensão, você a conserta, sem deixar vestígios do dano anterior.\n\nEste feitiço pode reparar fisicamente um item ou constructo mágico, mas o feitiço não pode restaurar a magia de tal objeto."
  },
  {
    "name": "Mensagem",
    "level": 0,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "1 rodada",
    "description": "Você aponta o dedo para uma criatura dentro do alcance e sussurra uma mensagem. O alvo (e apenas o alvo) ouve a mensagem e pode responder num sussurro que só você consegue ouvir.\n\nVocê pode lançar este feitiço através de objetos sólidos se estiver familiarizado com o alvo e souber que ele está além da barreira. Silêncio mágico, 30 centímetros de pedra, 2,5 centímetros de metal comum, uma folha fina de chumbo ou 90 centímetros de madeira bloqueiam a magia. O feitiço não precisa seguir uma linha reta e pode percorrer livremente cantos arodada ou através de aberturas."
  },
  {
    "name": "Ilusão Menor",
    "level": 0,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "1 minuto",
    "description": "Você cria um som ou uma imagem de um objeto dentro do alcance que dura toda a duração. A ilusão também termina se você desfalha-la como uma ação ou conjurar esse feitiço novamente.\n\nSe Você cria um som, seu volume pode variar de um sussurro a um grito. Pode ser a sua voz, a voz de outra pessoa, o rugido de um leão, a batida de um tambor ou qualquer outro som que você escolher. O som continua inabalável durante toda a duração, ou você pode emitir sons discretos em momentos diferentes antes que a magia termine.\n\nSe Você criar a imagem de um objeto – como uma cadeira, pegadas enlameadas ou um pequeno baú – ele não deve ser maior que um cubo de 1,5 metro. A imagem não pode criar som, luz, cheiro ou qualquer outro efeito sensorial. A interação física com a imagem revela que ela é uma ilusão, pois coisas podem passar por ela.\n\nSe uma criatura usar sua ação para examinar o som ou imagem, a criatura pode determinar que se trata de uma ilusão com um teste bem-sucedido de Inteligência (Investigação) contra seu CD de resistência de magia. Se uma criatura discerne a ilusão pelo que ela é, a ilusão se torna fraca para a criatura."
  },
  {
    "name": "Borrifo de Veneno",
    "level": 0,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "3 metros",
    "duration": "Instantâneo",
    "description": "Você estende sua mão em direção a uma criatura que você pode ver dentro do alcance e projeta uma nuvem de gás nocivo da palma da mão. A criatura deve ter sucesso em um Teste de resistência de Constituição ou sofrerá 1d12 dano de veneno.\n\nO dano deste feitiço aumenta em 1d12 quando você atinge o 5º nível (2d12), 11º nível (3d12) e 17º nível (4d12)."
  },
  {
    "name": "Prestidigitação",
    "level": 0,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "3 metros",
    "duration": "Até 1 hora",
    "description": "Este feitiço é um pequeno truque mágico que os conjuradores novatos usam para praticar. Você cria um dos seguintes efeitos mágicos dentro do alcance: Você cria um efeito sensorial instantâneo e inofensivo, como uma chuva de faíscas, uma rajada de vento, notas musicais fracas ou um odor estranho. Você acende ou apaga instantaneamente uma vela, uma tocha ou uma pequena fogueira. um símbolo aparece em um objeto ou superfície por 1 hora.Você cria uma bugiganga não mágica ou uma imagem ilusória que pode caber na sua mão e que dura até o final do seu próximo turno.Se você lançar este feitiço várias vezes, você pode ter até três de seus efeitos não instantâneos ativos por vez, e você pode disfalha tal efeito como uma ação."
  },
  {
    "name": "Produzir Chamas",
    "level": 0,
    "classes": [
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "10 minutos",
    "description": "Uma chama bruxuleante aparece em sua mão. A chama permanece lá durante todo o tempo e não prejudica você nem seu equipamento. A chama emite luz brilhante em um raio de 3 metros e luz fraca por mais 3 metros adicionais. A magia termina se você desfalha-la como uma ação ou se você a lança novamente.\n\nVocê também pode atacar com a chama, embora isso encerre o feitiço. Quando você conjura essa magia, ou como uma ação em um turno posterior, você pode lançar a chama em uma criatura a até 9 metros de você. Faça um ataque de magia à distância. Sem sucesso, o alvo leva 1d8 de dano de fogo.\n\nO dano deste feitiço aumenta em 1d8 quando você atinge o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8)."
  },
  {
    "name": "Proteção contra o Bem e o Mal",
    "level": 1,
    "classes": [
      "Clérigo",
      "Paladino",
      "Bruxo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 10 minutes",
    "description": "Até o fim da magia, uma criatura voluntária que você toca fica protegida contra certos tipos de criaturas: aberrações, celestiais, elementais, feéricos, inimigos e mortos-vivos.\n\nA proteção concede vários benefícios. Criaturas desse tipo têm manobras de ataque contra o alvo. O alvo também não pode ser enfeitiçado, amedrontado, ou possuído por eles. Se o alvo já estiver enfeitiçado, amedrontado ou possuído por tal criatura, o alvo terá vantagem em qualquer novo teste de resistência contra o efeito relevante."
  },
  {
    "name": "Purificar Comida e Água",
    "level": 1,
    "classes": [
      "Clérigo",
      "Druida",
      "Paladino"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "3 metros",
    "duration": "Instantâneo",
    "description": "All nonmagical food and drink within a 1,5 metro radius sphere centered on a point of your choice dentro do alcance is purified and rendered free of poison and disease."
  },
  {
    "name": "Raio de Gelo",
    "level": 0,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Um feixe frígido de luz azulada atinge uma criatura dentro do alcance. Faça um ataque de magia à distância contra o alvo. Sem sucesso, ele leva 1d8 dano de frio e sua velocidade é reduzida em 3 metros até o início do seu próximo turno.\n\nO dano da magia aumenta em 1d8 quando você atinge o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8)."
  },
  {
    "name": "Raio de Doença",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Um raio de energia esverdeada e repugnante ataca uma criatura dentro do alcance. Faça um ataque de magia à distância contra o alvo. Sem sucesso, o alvo sofre 2d8 de dano de veneno e deve fazer um Teste de resistência de Constituição. Em um teste de resistência falho, também é envenenado até o final do seu próximo turno."
  },
  {
    "name": "Remover Maldição",
    "level": 3,
    "classes": [
      "Clérigo",
      "Paladino",
      "Bruxo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Ao seu toque, todas as maldições que afetam uma criatura ou objeto terminam. Se o objeto for um item mágico amaldiçoado, sua maldição permanece, mas o feitiço quebra a sintonia de seu dono com o objeto para que ele possa ser removido ou descartado."
  },
  {
    "name": "Resistência",
    "level": 0,
    "classes": [
      "Clérigo",
      "Druida"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 minute",
    "description": "Você toca uma criatura voluntária. Uma vez antes da magia terminar, o alvo pode rolar um d4 e adicionar o número obtido a um teste de resistência de sua escolha. Pode-se rolar a matriz antes ou depois de fazer o teste de resistência. O feitiço então termina."
  },
  {
    "name": "Chama Sagrada",
    "level": 0,
    "classes": [
      "Clérigo"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "O brilho semelhante a uma chama desce sobre uma criatura que você pode ver dentro do alcance. O jogador deve ter sucesso em um Teste de Resistência de Destreza ou sofrer 1d8 dano radiante. O alvo não ganha nenhum benefício com a cobertura desse teste de resistência.\n\nO dano da magia aumenta em 1d8 quando você atinge o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8)."
  },
  {
    "name": "Santuário",
    "level": 1,
    "classes": [
      "Clérigo"
    ],
    "school": "Abjuração",
    "castingTime": "1 bonus ação",
    "range": "9 metros",
    "duration": "1 minuto",
    "description": "Você protege uma criatura dentro do alcance contra ataques. Até o final da magia, qualquer criatura que atingir a criatura protegida com um ataque ou feitiço prejudicial deve primeiro fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, a criatura deve escolher um novo alvo ou perderá o ataque ou feitiço. Esta magia não protege a criatura protegida de efeitos de área, como a explosão de uma bola de fogo.\n\nSe a criatura protegida fizer um ataque ou lançar uma magia que afete uma criatura inimiga, esta magia termina."
  },
  {
    "name": "Escudo da Fé",
    "level": 1,
    "classes": [
      "Clérigo",
      "Paladino"
    ],
    "school": "Abjuração",
    "castingTime": "1 bonus ação",
    "range": "18 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Um campo cintilante aparece e envolve uma criatura de sua escolha dentro do alcance, concedendo-lhe um bônus de +2 na CA durante a duração."
  },
  {
    "name": "Searing Smite",
    "level": 1,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na próxima vez que você acertar uma criatura com um ataque corpo a corpo com arma durante a duração do feitiço, sua arma brilha com intensidade wsucessoe-hot, e o ataque causa 1d6 de dano de fogo extra ao alvo e faz com que o alvo se incendeie em chamas. No início de cada um de seus turnos até a magia terminar, o alvo deve fazer um Teste de resistência de Constituição. Em um teste de resistência falho, são necessários 1d6 de dano de fogo. Em um teste de resistência bem sucedido, a magia termina. Se o alvo ou uma criatura a até 1,5 metro dele usar uma ação para apagar as chamas, ou se algum outro efeito apagar as chamas (como o alvo ser submerso na água), a magia termina."
  },
  {
    "name": "Escudo",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 reação, which you take when you are hit by an attack or targeted by the magic missile spell",
    "range": "Si mesmo",
    "duration": "1 rodada",
    "description": "Uma barreira invisível de força mágica aparece e protege você. Até o início do seu próximo turno, você tem um bônus de +5 na CA, inclusive contra o ataque desencadeador, e não sofre dano de falha mágica."
  },
  {
    "name": "Shillelagh",
    "level": 0,
    "classes": [
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 bonus ação",
    "range": "Toque",
    "duration": "1 minuto",
    "description": "A madeira de um porrete ou bastão que você está segurando está imbuída do poder da natureza. Durante a duração, você pode usar seu atributo de conjuração em vez de Força para as jogadas de ataque e dano de ataques corpo a corpo usando aquela arma, e o dado de dano da arma se torna um d8. A arma também se torna mágica, se ainda não o for. A magia termina se você lançá-la novamente ou se você largar a arma."
  },
  {
    "name": "Toque Chocante",
    "level": 0,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Um raio brota de sua mão para causar um choque em uma criatura que você tenta tocar. Faça um ataque de magia corpo a corpo contra o alvo. Você tem vantagem na jogada de ataque se o alvo estiver usando uma armadura de metal. Sem sucesso, o alvo sofre 1d8 de dano de raio e não pode sofrer ocorrências até o início do próximo turno.\n\nO dano da magia aumenta em 1d8 quando você atinge o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8)."
  },
  {
    "name": "Imagem Silenciosa",
    "level": 1,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você cria a imagem de um objeto, uma criatura, ou algum outro fenômeno visível que não seja maior que um cubo de 4,5 metros. A imagem aparece em um ponto dentro do alcance e perdura por toda a duração. A imagem é puramente visual; não é acompanhado por som, cheiro ou outros efeitos sensoriais.\n\nVocê pode usar sua ação para fazer com que a imagem se mova para qualquer local dentro do alcance. À medida que a imagem muda de local, você pode alterar sua aparência para que seus movimentos pareçam naturais para a imagem. Por exemplo, se você criar a imagem de uma criatura e movê-la, poderá alterar a imagem para que ela pareça estar andando.\n\nA interação física com a imagem revela que ela é uma ilusão, pois coisas podem passar por ela. Uma criatura que use sua ação para examinar a imagem pode determinar que se trata de uma ilusão com um teste bem-sucedido de Inteligência (Investigação) contra seu CD de resistência de magia. Se uma criatura discernir a ilusão pelo que ela é, a criatura poderá ver através da imagem."
  },
  {
    "name": "Sono",
    "level": 1,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "1 minuto",
    "description": "Este feitiço coloca as criaturas em um sono mágico. Role 5d8; o total é quantos pontos de vida de criaturas esse feitiço pode afetar. Criaturas dentro de um raio de 6 metros de um ponto que você escolher dentro do alcance são afetadas em ordem crescente de seus pontos de vida atuais (ignorando criaturas inconscientes).\n\nComeçando com a criatura que tem os pontos de vida atuais mais baixos, cada criatura afetada por este feitiço cai inconsciente até o fim da magia, o adormecido sofre dano ou alguém usa uma ação para sacudir ou dar um tapa no adormecido para acordá-lo. Subtraia os pontos de vida de cada criatura do total antes de passar para a criatura com os próximos pontos de vida mais baixos. Os pontos de vida de uma criatura devem ser iguais ou menores que o total restante para que essa criatura seja afetada.\n\nMortos-vivos e criaturas imunes a serem enfeitiçados não são afetados por este feitiço."
  },
  {
    "name": "Salvar os Moribundos",
    "level": 0,
    "classes": [
      "Clérigo"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você toca uma criatura viva que possui 0 pontos de vida. A criatura torna-se estável. Este feitiço não tem efeito sobre mortos-vivos ou constructoos."
  },
  {
    "name": "Falar com Animais",
    "level": 1,
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "10 minutos",
    "description": "Você ganha a habilidade de compreender e se comunicar verbalmente com os bestas durante o período. O conhecimento e a consciência de muitos bestas são limitados por sua inteligência, mas, no mínimo, os bestas podem fornecer informações sobre locais e monstros próximos, incluindo tudo o que eles podem perceber ou ter percebido no dia anterior. Você pode persuadir um besta a fazer um pequeno favor para você, a critério do Mestre."
  },
  {
    "name": "Taumaturgia",
    "level": 0,
    "classes": [
      "Clérigo"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Até 1 minuto",
    "description": "Você manifesta uma pequena maravilha, um sinal de poder sobrenatural, dentro do alcance. Você cria um dos seguintes efeitos mágicos dentro do alcance: Sua voz ressoa até três vezes mais alto que o normal por 1 minuto. Você faz com que as chamas pisquem, brilhem, diminuam ou mudem de cor por 1 minuto. porta ou janela destrancada para abrir ou fechar. Você altera a aparência de seus olhos por 1 minuto. Se você lançar este feitiço várias vezes, você pode ter até três de seus efeitos de 1 minuto ativos por vez, e você pode disfalhar tal efeito como uma ação."
  },
  {
    "name": "Thorn Whip",
    "level": 0,
    "classes": [
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Você cria um longo chicote em forma de videira coberto de espinhos que ataca ao seu comando uma criatura ao alcance. Faça um ataque de magia corpo a corpo contra o alvo. Se o ataque for bem-sucedido, a criatura sofre 1d6 de dano perfurante, e se a criatura for Grande ou menor, você puxa a criatura até 3 metros para mais perto de você.\n\nO dano deste feitiço aumenta em 1d6 quando você atinge o 5º nível (2d6), 11º nível (3d6) e 17º nível (4d6)."
  },
  {
    "name": "Thunderous Smite",
    "level": 1,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na primeira vez que você tiver sucesso com um ataque corpo a corpo com arma durante a duração deste feitiço, sua arma soa com um trovão que é audível a até 90 metros de você, e o ataque causa 2d6 de dano sônico extra ao alvo. Além disso, se o alvo for uma criatura, ele deverá ter sucesso em um Teste de resistência de Força ou será empurrado a 3 metros de distância de você e derrubado."
  },
  {
    "name": "Onda Trovejante",
    "level": 1,
    "classes": [
      "Bardo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (15-foot cube)",
    "duration": "Instantâneo",
    "description": "Uma onda de força estrondosa sai de você. Cada criatura num cubo de 4,5 metros proveniente de você deverá fazer um Teste de resistência de Constituição. Em um teste de resistência falho, uma criatura sofre 2d8 de dano sônico e é empurrada 3 metros para longe de você. Em um teste de resistência bem-sucedido, a criatura leva metade do dano e não é empurrada. Além disso, objetos desprotegidos que estão completamente dentro da área de efeito são automaticamente empurrados a 3 metros de distância de você pelo efeito do feitiço, e o feitiço emite um estrondo estrondoso audível a até 90 metros."
  },
  {
    "name": "Golpe Certeiro",
    "level": 0,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 round",
    "description": "Você estende a mão e aponta o dedo para um alvo ao alcance. Sua magia lhe concede uma breve visão das defesas do alvo. No seu próximo turno, você ganha vantagem na sua primeira jogada de ataque contra o alvo, desde que este feitiço não tenha terminado."
  },
  {
    "name": "Servo Invisível",
    "level": 1,
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "1 hora",
    "description": "Este feitiço cria uma força invisível, estúpida e disforme que executa tarefas simples sob seu comando até o fim da magia. O servo surge em um espaço desocupado na grodada dentro do alcance. Possui AC 10, 1 ponto de vida e Força 2, e não pode atacar. Se cair para 0 pontos de vida, a magia termina.\n\nUma vez em cada um dos seus turnos, como bônus de ação, você pode comandar mentalmente o servo para se mover até 4,5 metros e interagir com um objeto. O servo pode realizar tarefas simples que um servo humano poderia realizar, como buscar coisas, limpar, remendar, dobrar roupas, acender fogueiras, servir comida e servir vinho. Depois de dar o comando, o servo executa a tarefa da melhor maneira possível até concluí-la e, em seguida, aguarda seu próximo comando.\n\nSe você ordenar que o servo execute uma tarefa que o afaste mais de 18 metros de você, a magia termina."
  },
  {
    "name": "Zombaria Viciosa",
    "level": 0,
    "classes": [
      "Bardo"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você libera uma série de insultos misturados com encantamentos sutis em uma criatura que você pode ver dentro do alcance. Se o alvo puder ouvi-lo (embora não precise entendê-lo), ele deverá ter sucesso em um Teste de resistência de Sabedoria ou sofrer 1d4 de dano psíquico e ter desvantagem na próxima jogada de ataque que fizer antes do final de seu próximo turno.\n\nO dano deste feitiço aumenta em 1d4 quando você atinge o 5º nível (2d4), 11º nível (3d4) e 17º nível (4d4)."
  },
  {
    "name": "Raio da Bruxa",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Um feixe de energia azul crepitante é lançado em direção a uma criatura dentro do alcance, formando um arco sustentado de relâmpago entre você e o alvo. Faça um ataque de magia à distância contra essa criatura. Sem sucesso, o alvo leva 1d12 dano de raio, e em cada um de seus turnos durante o período, você pode usar sua ação para causar 1d12 dano de raio ao alvo automaticamente. A magia termina se você usar sua ação para fazer qualquer outra coisa. A magia também termina se o alvo estiver fora do alcance da magia ou se tiver cobertura total de você."
  },
  {
    "name": "Wrathful Smite",
    "level": 1,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na próxima vez que você tiver sucesso com um ataque corpo a corpo com arma durante a duração deste feitiço, seu ataque causará 1d6 de dano psíquico extra. Além disso, se o alvo for uma criatura, ele deverá fazer um Teste de resistência de Sabedoria ou ser amedrontado por você até o fim da magia. Como uma ação, a criatura pode fazer um teste de Sabedoria contra seu CD de resistência de magia para fortalecer sua determinação e encerrar este feitiço."
  },
  {
    "name": "Auxílio",
    "level": 2,
    "classes": [
      "Clérigo",
      "Paladino"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "8 horas",
    "description": "Seu feitiço fortalece seus aliados com resistência e determinação. Escolha até três criaturas dentro do alcance. O ponto de vida máximo e os pontos de vida atuais de cada alvo aumentam em 5 durante a duração."
  },
  {
    "name": "Mensageiro Animal",
    "level": 2,
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "24 horas",
    "description": "Por meio deste feitiço, você usa um animal para entregar uma mensagem. Escolha um animal minúsculo que você possa ver dentro do alcance, como um esquilo, um gaio azul ou um morcego. Você especifica um local que deve ter visitado e um destinatário que corresponda a uma descrição geral, como “um homem ou mulher vestido com o uniforme da guarda da cidade” ou “um anão ruivo usando um chapéu pontudo”. Você também fala uma mensagem de até vinte e cinco palavras. O alvo besta viaja durante a duração da magia em direção ao local especificado, cobrindo cerca de 80 quilômetros por 24 horas para um mensageiro voador, ou 40 quilômetros para outros animais.\n\nQuando o mensageiro chega, ele entrega sua mensagem à criatura que você descreveu, replicando o som da sua voz. O mensageiro fala apenas com uma criatura que corresponda à descrição que você deu. Se o mensageiro não chegar ao seu destino antes do término da magia, a mensagem será perdida e o besta retornará para onde você lançou o feitiço."
  },
  {
    "name": "Cegueira/Surdez",
    "level": 2,
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "1 minuto",
    "description": "Você pode cegar ou ensurdecer um inimigo. Escolha uma criatura que você possa ver dentro do alcance para fazer um Teste de resistência de Constituição. Se falhar, o alvo fica cego ou ensurdecido (sua escolha) durante a duração. Ao final de cada um de seus turnos, o alvo pode fazer um Teste de resistência de Constituição. Com um sucesso, a magia termina."
  },
  {
    "name": "Augúrio",
    "level": 2,
    "classes": [
      "Clérigo"
    ],
    "school": "Adivinhação",
    "castingTime": "1 minute",
    "range": "Si mesmo",
    "duration": "Instantâneo",
    "description": "Ao lançar varas incrustadas com pedras preciosas, rolar ossos de dragão, dispor cartas ornamentadas ou empregar alguma outra ferramenta de adivinhação, você recebe um presságio de uma entidade de outro mundo sobre os resultados de um curso específico de ação que você planeja realizar nos próximos 30 minutos. O Mestre escolhe entre os seguintes presságios possíveis: Bem, para bons resultados Ai, para resultados ruins Bem e ai*, para resultados bons e ruins Nada, para resultados que não são especialmente bons ou ruins A magia não leva em consideração quaisquer circunstâncias possíveis que possam alterar o resultado, como o lançamento de magias adicionais ou a perda ou ganho de um companheiro.\n\nSe você conjurar uma magia duas ou mais vezes antes de completar seu próximo descanso longo, há uma chance cumulativa de 25% para cada lançamento após o primeiro de você obter uma leitura aleatória. O Mestre faz esse teste em segredo."
  },
  {
    "name": "Acalmar Emoções",
    "level": 2,
    "classes": [
      "Bardo",
      "Clérigo"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você tenta suprimir emoções fortes em um grupo de pessoas. Cada humanóide em uma esfera de 6 metros de raio centrada em um ponto que você escolher dentro do alcance deve fazer um Teste de resistência de Carisma; uma criatura pode optar por falhar neste teste de resistência se desejar. Se uma criatura falhar no teste de resistência, escolha um dos dois efeitos a seguir. Você pode suprimir qualquer efeito fazendo com que um alvo fique enfeitiçado ou amedrontado. Quando esta magia termina, qualquer efeito suprimido é retomado, desde que sua duração não tenha expirado nesse meio tempo.\n\nAlternativamente, você pode tornar um alvo indiferente sobre criaturas de sua escolha às quais ele é hostil. Essa indiferença termina se o alvo for atacado ou ferido por um feitiço ou se presenciar algum de seus amigos sendo ferido. Quando a magia termina, a criatura torna-se hostil novamente, a menos que o Mestre determine o contrário."
  },
  {
    "name": "Paralisar Pessoa",
    "level": 2,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Escolha um humanoide que você possa ver dentro do alcance. O deve ser aprovado em Teste de resistência de Sabedoria ou ficar paralisado durante o período. Ao final de cada um de seus turnos, o alvo pode fazer outro Teste de resistência de Sabedoria. Com um sucesso, a magia termina no alvo."
  },
  {
    "name": "Restauração Menor",
    "level": 2,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você toca uma criatura e pode acabar com uma doença ou condição que a aflige. A condição pode ser cega, ensurdecida, paralisada ou envenenada."
  },
  {
    "name": "Oração de Cura",
    "level": 2,
    "classes": [
      "Clérigo"
    ],
    "school": "Evocação",
    "castingTime": "10 minutes",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Até seis criaturas de sua escolha que você possa ver dentro do alcance, cada uma recupera pontos de vida iguais a 2d8 + seu modificador de atributo de conjuração. Este feitiço não tem efeito sobre mortos-vivos ou constructoos."
  },
  {
    "name": "Silêncio",
    "level": 2,
    "classes": [
      "Bardo",
      "Clérigo",
      "Patrulheiro"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Durante a duração, nenhum som pode ser criado dentro ou passar através de uma esfera de 6 metros de raio centrada em um ponto escolhido dentro do alcance. Qualquer criatura ou objeto inteiramente dentro da esfera é imune ao dano sônico, e as criaturas ficam ensurdecidas enquanto estiverem inteiramente dentro dela."
  },
  {
    "name": "Arma Espiritual",
    "level": 2,
    "classes": [
      "Clérigo"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "18 metros",
    "duration": "1 minuto",
    "description": "Você cria uma arma espectral flutuante dentro do alcance que dura enquanto você lançar este feitiço novamente. Quando você conjura uma magia, você pode fazer um ataque de magia corpo a corpo contra uma criatura a até 1,5 metro da arma. Sem sucesso, o alvo leva dano de força igual a 1d8 + seu modificador de atributo de conjuração.\n\nComo ação bônus no seu turno, você pode mover a arma até 20 pés e repetir o ataque contra uma criatura a até 1,5 metro dela. A arma pode assumir a forma que você escolher. Clérigos de divindades que estão associados a uma arma específica (como St. Cuthbert é conhecido por sua maça e Thor por seu martelo) fazem com que o efeito deste feitiço se assemelhe a essa arma."
  },
  {
    "name": "Vínculo de Proteção",
    "level": 2,
    "classes": [
      "Clérigo"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Este feitiço protege uma criatura voluntária que você toca e cria uma conexão mística entre você e o alvo até a magia terminar. Enquanto o alvo estiver a até 18 metros de você, ele ganha +1 de bônus na CA e testes de resistência, além de ter resistência a todos os danos. Além disso, cada vez que sofre dano, você sofre a mesma quantidade de dano.\n\nA magia termina se você cair para 0 pontos de vida ou se você e o alvo ficarem separados por mais de 18 metros. Também termina se o feitiço for lançado novamente em qualquer uma das criaturas conectadas. Você também pode disfalhar o feitiço como uma ação."
  },
  {
    "name": "Animar os Mortos",
    "level": 3,
    "classes": [
      "Clérigo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 minute",
    "range": "3 metros",
    "duration": "Instantâneo",
    "description": "Este feitiço cria um servo morto-vivos. Escolha uma pilha de ossos ou um cadáver de um humanóide Médio ou Pequeno dentro do alcance. Seu feitiço imbui o alvo com uma imitação asquerosa da vida, elevando-o a uma criatura morto-vivo. O alvo se torna um esqueleto se você escolher ossos ou um zumbi se você escolher um cadáver (o Mestre tem as estatísticas de jogo da criatura).\n\nEm cada um de seus turnos, você pode usar uma ação bônus para comandar mentalmente qualquer criatura que você criou com este feitiço se a criatura estiver a até 18 metros de você (se você controlar múltiplas criaturas, você pode comandar uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura realizará e para onde ela se moverá durante seu próximo turno, ou pode emitir um comando geral, como guardar uma câmara ou corredor específico. Se você não der nenhum comando, a criatura apenas se defenderá contra criaturas hostis. Uma vez dada uma ordem, a criatura continua a segui-la até que sua tarefa seja concluída.\n\nA criatura fica sob seu controle por 24 horas, após as quais ela deixa de obedecer a qualquer comando que você tenha dado. Para manter o controle da criatura por mais 24 horas, você deve lançar este feitiço na criatura novamente antes que o período atual de 24 horas termine. Este uso da magia reafirma seu controle sobre até quatro criaturas que você animou com esta magia, em vez de animar uma nova."
  },
  {
    "name": "Olho Arcano",
    "level": 4,
    "classes": [
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você cria um olho invisível e mágico dentro do alcance que paira durante todo o tempo.\n\nVocê recebe mentalmente informações visuais do olho, que tem visão normal e visão no escuro de até 9 metros. O olho pode olhar em todas as direções.\n\nComo ação, você pode mover o olho até 9 metros em qualquer direção. Não há limite para o quão longe de você o olho pode se mover, mas ele não pode entrar em outro plano de existência. Uma barreira sólida bloqueia o movimento do olho, mas o olho pode passar por uma abertura de até 2,5 cm de diâmetro."
  },
  {
    "name": "Aura de Vida",
    "level": 4,
    "classes": [
      "Paladino"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Self (30-foot radius)",
    "duration": "Concentração, up to 10 minutes",
    "description": "A energia que preserva a vida irradia de você em uma aura com raio de 9 metros. Até a magia terminar, a aura se move com você, centrada em você. Cada criatura não hostil na aura (incluindo você) tem resistência ao dano necrótico e seu ponto de vida máximo não pode ser reduzido. Além disso, uma criatura viva e não hostil recupera 1 ponto de vida quando inicia seu turno na aura com 0 pontos de vida."
  },
  {
    "name": "Aura de Pureza",
    "level": 4,
    "classes": [
      "Paladino"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Self (30-foot radius)",
    "duration": "Concentração, up to 10 minutes",
    "description": "A energia purificadora irradia de você em uma aura com raio de 9 metros. Até a magia terminar, a aura se move com você, centrada em você. Cada criatura não hostil na aura (incluindo você) não pode ficar doente, tem resistência a dano de veneno e tem vantagem em testes de resistência contra efeitos que causam qualquer uma das seguintes condições: cego, enfeitiçado, ensurdecido, amedrontado, paralisado, envenenado e atordoado."
  },
  {
    "name": "Aura Of Vitality",
    "level": 3,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (30-foot radius)",
    "duration": "Concentração, up to 1 minute",
    "description": "A energia curativa irradia de você em uma aura com raio de 9 metros. Até a magia terminar, a aura se move com você, centrada em você. Você pode usar uma ação bônus para fazer com que uma criatura na aura (incluindo você) recupere 2d6 pontos de vida."
  },
  {
    "name": "Banimento",
    "level": 4,
    "classes": [
      "Clérigo",
      "Paladino",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você tenta enviar uma criatura que você possa ver dentro do alcance para outro plano de existência. O alvo deve ter sucesso em um Teste de resistência de Carisma ou será banido.\n\nSe o alvo for nativo do plano de existência em que você está, você banirá o alvo para um semiplano inofensivo. Enquanto estiver lá, o alvo fica incapacitado. O alvo permanece lá até a magia terminar, momento em que o alvo reaparece no espaço que deixou ou no espaço desocupado mais próximo, se esse espaço estiver ocupado.\n\nSe o alvo for nativo de um plano de existência diferente daquele em que você está, o alvo é banido com um leve estalo, retornando ao seu plano natal. Se a magia terminar antes de decorrido 1 minuto, o alvo reaparece no espaço que deixou ou no espaço desocupado mais próximo, se esse espaço estiver ocupado. Caso contrário, o alvo não retorna."
  },
  {
    "name": "Balizador da Esperança",
    "level": 3,
    "classes": [
      "Clérigo"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Este feitiço confere esperança e vitalidade. Escolha qualquer número de criaturas dentro do alcance. Durante a duração, cada alvo tem vantagem em Teste de resistência de Sabedorias e testes de resistência de morte, e recupera o número máximo de pontos de vida possíveis de qualquer cura."
  },
  {
    "name": "Praga",
    "level": 4,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "A energia necromântica lava uma criatura de sua escolha que você possa ver dentro do alcance, drenando a umidade e a vitalidade dela. O alvo deverá fazer um Teste de resistência de Constituição. O alvo leva 8d8 dano necrótico em um teste de resistência falho, ou metade do dano em um teste bem-sucedido. O feitiço não tem efeito sobre mortos-vivos ou constructoos.\n\nSe você atingir uma planta criatura ou uma planta mágica, ela faz o teste de resistência com desvantagem, e o feitiço causa dano máximo a ela.\n\nSe você atingir uma planta não-mágica que não seja uma criatura, como uma árvore ou um arbusto, ela não fará um teste de resistência; simplesmente murcha e morre."
  },
  {
    "name": "Impor Maldição",
    "level": 3,
    "classes": [
      "Bardo",
      "Clérigo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 minute",
    "description": "Você toca uma criatura, e essa criatura deve ter sucesso em um Teste de resistência de Sabedoria ou será amaldiçoada durante a duração da magia. Quando você conjura essa magia, escolha a natureza da maldição entre as seguintes opções:\n\n* Escolha uma pontuação de habilidade. Enquanto amaldiçoado, o alvo tem manobras em testes de habilidades e testes de resistência feitos com esse valor de habilidade.\n* Enquanto amaldiçoado, o alvo tem manobras de ataque contra você.\n* Enquanto amaldiçoado, o alvo deverá fazer um Teste de resistência de Sabedoria no início de cada um de seus turnos. Se falhar, desperdiça sua ação naquele turno sem fazer nada.\n* Enquanto o alvo estiver amaldiçoado, seus ataques e feitiços causam 1d8 de dano necrótico extra ao alvo.\n\nUma magia de remoção de maldição encerra esse efeito. A critério do Mestre, você pode escolher um efeito de maldição alternativo, mas não deve ser mais poderoso do que os descritos acima. O Mestre tem a palavra final sobre o efeito de tal maldição."
  },
  {
    "name": "Blinding Smite",
    "level": 3,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na próxima vez que você acertar uma criatura com um ataque corpo a corpo com arma durante a duração desta magia, sua arma brilhará com uma luz brilhante e o ataque causará 3d8 de dano radiante extra ao alvo. Além disso, o alvo deve ser aprovado em Teste de resistência de Constituição ou ser cego até a magia terminar.\n\nUma criatura cega por este feitiço faz outro Teste de resistência de Constituição ao final de cada um de seus turnos. Em um teste de resistência bem sucedido, não é mais cego."
  },
  {
    "name": "Piscar",
    "level": 3,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "1 minuto",
    "description": "Role um d20 no final de cada um de seus turnos enquanto durar o feitiço. Com um resultado 11 ou superior, você desaparece do seu plano de existência atual e aparece no Plano Etéreo (o feitiço falha e a conjuração é desperdiçada se você já estiver naquele plano). No início do seu próximo turno, e quando a magia terminar se você estiver no Plano Etéreo, você retorna para um espaço desocupado de sua escolha que você pode ver a até 3 metros do espaço de onde você desapareceu. Se nenhum espaço desocupado estiver disponível dentro desse intervalo, você aparece no espaço desocupado mais próximo (escolhido aleatoriamente se mais de um espaço estiver igualmente próximo). Você pode disfalhar esse feitiço como uma ação.\n\nEnquanto estiver no Plano Etéreo, você poderá ver e ouvir o plano de onde você veio, que é moldado em tons de cinza, e você não consegue ver nada lá a mais de 18 metros de distância. Você só pode afetar e ser afetado por outras criaturas do Plano Etéreo. Criaturas que não estão lá não podem perceber você ou interagir com você, a menos que tenham a capacidade de fazê-lo."
  },
  {
    "name": "Invocar Relâmpago",
    "level": 3,
    "classes": [
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Uma nuvem de tempestade aparece na forma de um cilindro com 3 metros de altura e 18 metros de raio, centrado em um ponto que você pode ver 100 pés diretamente acima de você. A magia falha se você não conseguir ver um ponto no ar onde a nuvem de tempestade possa aparecer (por exemplo, se você estiver em uma sala que não possa acomodar a nuvem).\n\nQuando você conjurar uma magia, escolha um ponto que você possa ver dentro do alcance. Um raio desce da nuvem até aquele ponto. Cada criatura a até 1,5 metro desse ponto deve fazer um Teste de resistência de Destreza. Uma criatura sofre 3d10 dano de raio em um teste de resistência falho, ou metade do dano em caso de sucesso. Em cada um de seus turnos até o final da magia, você pode usar sua ação para invocar relâmpagos desta forma novamente, visando o mesmo ponto ou um ponto diferente.\n\nSe você estiver ao ar livre em condições de tempestade Quando você conjura essa magia, o feitiço lhe dá controle sobre a tempestade existente em vez de criar uma nova. Sob tais condições, o dano do feitiço aumenta em 1d10."
  },
  {
    "name": "Clarividência",
    "level": 3,
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "10 minutes",
    "range": "1 mile",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você cria um sensor invisível dentro do alcance em um local familiar para você (um lugar que você visitou ou viu antes) ou em um local óbvio que não é familiar para você (como atrás de uma porta, em um canto ou em um bosque). O sensor permanece no lugar durante todo o período e não pode ser atacado ou interagir de outra forma.\n\nQuando você conjura uma magia, você escolhe ver ou ouvir. Você pode usar o sentido escolhido através do sensor como se estivesse em seu espaço. Conforme sua ação, você pode alternar entre ver e ouvir.\n\nUma criatura que pode ver o sensor (como uma criatura que se beneficia da invisibilidade (nível 2) ou da visão verdadeira vê um orbe luminoso e intangível do tamanho do seu punho."
  },
  {
    "name": "Nuvem de Adagas",
    "level": 2,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você preenche o ar com adagas giratórias em um cubo de 1,5 metro de cada lado, centrado em um ponto que você escolher dentro do alcance. Uma criatura sofre 4d4 de dano cortante quando entra na área da magia pela primeira vez em um turno ou inicia seu turno lá."
  },
  {
    "name": "Compulsão",
    "level": 4,
    "classes": [
      "Bardo"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Criaturas de sua escolha que você possa ver dentro do alcance e que possam ouvir você deve fazer um Teste de resistência de Sabedoria. Um alvo automaticamente obtém sucesso neste teste de resistência se não puder ser feitiçado. Em um teste de resistência falho, um alvo é afetado por este feitiço. Até o fim da magia, você pode usar um bônus de ação em cada um de seus turnos para designar uma direção que seja horizontal para você. Cada alvo afetado deve usar o máximo de movimento possível para se mover naquela direção no próximo turno. Pode ser necessária qualquer ação antes de se mover. Depois de se mover dessa forma, ele pode fazer outro salvamento de Sabedoria para tentar encerrar o efeito.\n\nUm alvo não é obrigado a se mover em direção a um perigo obviamente mortal, como um incêndio ou um poço, mas provocará um ataque de oportunidades para se mover na direção designada."
  },
  {
    "name": "Convocar Animais",
    "level": 3,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você convoca espíritos feéricos que assumem a forma de bestas e aparecem em espaços desocupados que você pode ver dentro do alcance. Escolha uma das seguintes opções para o que aparece:Uma besta com classificação de desafio 2 ou inferior\nDois bestas de nível de desafio 1 ou inferior\nQuatro bestas de classificação de desafio 1/2 ou inferior\nOito bestas com classificação de desafio 1/4 ou inferior Cada besta também é considerado feérico e desaparece quando cai para 0 pontos de vida ou quando a magia termina.\n\nAs criaturas convocadas são amigáveis ​​com você e seus companheiros. Role a iniciativa para as criaturas convocadas como um grupo, que tem seus próprios turnos. Eles obedecem a quaisquer comandos verbais que você emite a eles (nenhuma ação exigida por você). Se você não der nenhum comando a eles, eles se defenderão de criaturas hostis, mas por outro lado não tomarão nenhuma atitude.\n\nO Mestre possui as estatísticas das criaturas."
  },
  {
    "name": "Convocar Barragem",
    "level": 3,
    "classes": [
      "Patrulheiro"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "Self (60-foot cone)",
    "duration": "Instantâneo",
    "description": "Você joga uma arma não-mágica ou dispara uma munição não-mágica no ar para criar um cone de armas idênticas que disparam para frente e depois desaparecem. Cada criatura em um cone de 18 metros deverá passar em um Teste de resistência de Destreza. Uma criatura sofre 3d8 de dano em um teste de resistência falho, ou metade do dano em caso de sucesso. O tipo de dano é o mesmo da arma ou munição usada como componente."
  },
  {
    "name": "Contramagia",
    "level": 3,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 reação, which you take when you see a creature within 60 feet of you casting a spell.",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você tenta interromper uma criatura no processo de lançar um feitiço. Se a criatura estiver lançando uma magia de 3º nível ou inferior, sua magia falha e não tem efeito. Caso esteja conjurando um feitiço de 4º nível ou superior, faça um teste de habilidade utilizando seu atributo de conjuração. A CD é igual a 10 + o nível da magia. Se obtiver sucesso, o feitiço da criatura falha e não tem efeito."
  },
  {
    "name": "Criar Comida e Água",
    "level": 3,
    "classes": [
      "Clérigo",
      "Paladino"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Você cria 45 quilos de comida e 30 galões de água na grodada ou em recipientes dentro do alcance, o suficiente para sustentar até quinze humanóides ou cinco corcéis por 24 horas. A comida é insípida, mas nutritiva, e estraga se não for consumida após 24 horas. A água é limpa e não estraga."
  },
  {
    "name": "Manto do Cruzado",
    "level": 3,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "O poder sagrado irradia de você em uma aura com raio de 9 metros, despertando ousadia em criaturas amigáveis. Até a magia terminar, a aura se move com você, centrada em você. Enquanto estiver na aura, cada criatura não hostil na aura (incluindo você) causa 1d4 de dano radiante extra quando obtém sucesso com um ataque com arma."
  },
  {
    "name": "Luz do Dia",
    "level": 3,
    "classes": [
      "Clérigo",
      "Druida",
      "Patrulheiro",
      "Feiticeiro"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "1 hora",
    "description": "Uma esfera de luz com raio de 18 metros se espalha a partir de um ponto que você escolher dentro do alcance. A esfera tem luz brilhante e emite luz fraca por mais 18 metros.\n\nSe você escolheu um ponto em um objeto que está segurando ou que não está sendo usado ou carregado, a luz brilha no objeto e se move com ele. Cobrir completamente o objeto afetado com um objeto opaco, como uma tigela ou um elmo, bloqueia a luz.\n\nSe alguma área desta magia se sobrepuser a uma área de escuridão criada por uma magia de 3º nível ou inferior, a magia que criou a escuridão será dissipada."
  },
  {
    "name": "Dissipar Magia",
    "level": 3,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Paladino",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Escolha uma criatura, objeto ou efeito mágico dentro do alcance. Qualquer magia de 3º nível ou inferior no alvo termina. Para cada feitiço de 4º nível ou superior no alvo, faça um teste de habilidade utilizando seu atributo de conjuração. A CD é igual a 10 + o nível da magia. Com um teste bem-sucedido, a magia termina."
  },
  {
    "name": "Arma Elemental",
    "level": 3,
    "classes": [
      "Paladino"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Uma arma não mágica que você toca se torna uma arma mágica. Escolha um dos seguintes tipos de dano: ácido, frio, fogo, raio ou trovão. Durante a duração, a arma tem um bônus de +1 para ataque de ataques e causa 1d4 de dano extra do tipo escolhido quando é bem-sucedida."
  },
  {
    "name": "Medo",
    "level": 3,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "Self (30-foot cone)",
    "duration": "Concentração, up to 1 minute",
    "description": "Você projeta uma imagem fantasmagórica dos piores medos de uma criatura. Cada criatura em um cone de 9 metros deve ter sucesso em um Teste de resistência de Sabedoria ou largar o que estiver segurando e ficar amedrontado durante o período.\n\nEnquanto amedrontado por este feitiço, uma criatura deve pegar a ação Dash e se afastar de você pela rota mais segura disponível em cada um de seus turnos, a menos que não haja para onde se mover. Se a criatura terminar seu turno em um local onde não tenha linha de visão para você, a criatura poderá fazer um Teste de resistência de Sabedoria. Em um teste de resistência bem-sucedido, a magia termina para aquela criatura."
  },
  {
    "name": "Fingir a Morte",
    "level": 3,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Você toca uma criatura voluntária e a coloca em um estado cataléptico que é indistinguível da morte.\n\nDurante a duração do feitiço, ou até que você use uma ação para tocar o alvo e disfalha o feitiço, o alvo parece morto para toda inspeção externa e para os feitiços usados ​​para determinar o status do alvo. O alvo é cego e incapacitado, e sua velocidade cai para 0. O alvo tem resistência a todos os danos exceto dano psíquico. Se o alvo estiver doente ou envenenado quando você conjurar uma magia, ou ficar doente ou envenenado enquanto estiver sob o efeito da magia, a doença e o veneno não terão efeito até o fim da magia."
  },
  {
    "name": "Bola de Fogo",
    "level": 3,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "Uma faixa brilhante brilha do seu dedo indicador até um ponto que você escolhe dentro do alcance e então floresce com um rugido baixo em uma explosão de chamas. Cada criatura em uma esfera de 6 metros de raio centrada nesse ponto deve fazer um Teste de resistência de Destreza. Um alvo leva 8d6 de dano de fogo em um teste de resistência falho, ou metade do dano se for bem-sucedido.\n\nO fogo se espalha pelos cantos da arodada. Ele acende objetos inflamáveis ​​na área que não estão sendo usados ​​ou carregados."
  },
  {
    "name": "Voar",
    "level": 3,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você toca uma criatura voluntária. O alvo ganha uma velocidade de vôo de 18 metros durante toda a duração. Quando a magia termina, o alvo cai se ainda estiver no ar, a menos que consiga impedir a queda."
  },
  {
    "name": "Forma Gasosa",
    "level": 3,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Você transforma uma criatura voluntária que você toca, junto com tudo que ela está vestindo e carregando, em uma nuvem nebulosa enquanto durar. A magia termina se a criatura cair para 0 pontos de vida. Uma criatura incorpórea não é afetada.\n\nEnquanto estiver nesta forma, o único método de movimento do alvo é uma velocidade voadora de 3 metros. O alvo pode entrar e ocupar o espaço de outra criatura. O alvo possui resistência a danos não mágicos e possui vantagem em Força, Destreza e Teste de resistência de Constituições. O alvo pode passar por pequenos buracos, aberturas estreitas e até meras rachaduras, embora trate os líquidos como se fossem superfícies sólidas. O alvo não pode cair e permanece pairando no ar mesmo quando atordoado ou incapacitado.\n\nEnquanto estiver na forma de uma nuvem nebulosa, o alvo não pode falar ou manipular objetos, e quaisquer objetos que ele estava carregando ou segurando não podem ser derrubados, usados ​​ou interagir de outra forma. O alvo não pode atacar ou lançar feitiços."
  },
  {
    "name": "Aceleração",
    "level": 3,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Escolha uma criatura voluntária que você possa ver dentro do alcance. Até a magia terminar, a velocidade do alvo é duplicada, ele ganha +2 de bônus na CA, tem vantagem em Teste de resistência de Destrezas e ganha uma ação adicional em cada um de seus turnos. Essa ação pode ser usada apenas para executar a ação Ataque (apenas um ataque com arma), Correr, Desengajar, Esconder-se ou Usar um Objeto.\n\nQuando a magia termina, o alvo não pode se mover ou realizar ações até depois do próximo turno, enquanto uma onda de letargia o atinge."
  },
  {
    "name": "Padrão Hipnótico",
    "level": 3,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você cria um padrão retorcido de cores que serpenteia pelo ar dentro de um cubo de 9 metros dentro do alcance. O padrão aparece por um momento e desaparece. Cada criatura da área que vir o padrão deverá fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, a criatura torna-se enfeitada durante todo o tempo. Enquanto enfeitada por este feitiço, a criatura fica incapacitada e tem velocidade 0.\n\nA magia termina para uma criatura afetada se ela sofrer algum dano ou se alguém usar uma ação para tirar a criatura de seu estupor."
  },
  {
    "name": "Flecha de Relâmpago",
    "level": 3,
    "classes": [
      "Patrulheiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na próxima vez que você fizer um ataque com arma à distância durante a duração da magia, a munição da arma, ou a própria arma, se for uma arma de arremesso, se transforma em um raio. Faça o jogo de ataque normalmente. A arma sofre 4d8 dano de alvo raio No sucesso, ou metade do dano em uma falha, em vez do dano normal da arma.\n\nSeja com sucesso ou falha, cada criatura a até 3 metros do alvo deve fazer um Teste de resistência de Destreza. Cada uma dessas criaturas sofre 2d8 dano de raio em um teste de resistência falho, ou metade do dano em caso de sucesso.\n\nA munição ou arma retorna então à sua forma normal."
  },
  {
    "name": "Círculo Mágico",
    "level": 3,
    "classes": [
      "Clérigo",
      "Paladino",
      "Bruxo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 minute",
    "range": "3 metros",
    "duration": "1 hora",
    "description": "Você cria um cilindro de energia mágica com raio de 3 metros e 6 metros de altura centrado em um ponto da grodada que você pode ver dentro do alcance. Runas brilhantes aparecem onde quer que o cilindro cruze o chão ou outra superfície.\n\n* A criatura não pode entrar voluntariamente no cilindro por meios não mágicos. Se a criatura tentar usar teletransporte ou viagem interplanar para fazê-lo, ela deverá primeiro ter sucesso em um Teste de resistência de Carisma.\n\n* A criatura tem manobra de ataque contra alvos dentro do cilindro.\n\n*Alvos dentro do cilindro não podem ser enfeitiçados, amedrontados ou possuídos pela criatura.\n\nQuando você conjura essa magia, você pode optar por fazer com que sua magia opere na direção inversa, evitando que uma criatura do tipo especificado saia do cilindro e protegendo alvos fora dele."
  },
  {
    "name": "Imagem Maior",
    "level": 3,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você cria a imagem de um objeto, uma criatura ou algum outro fenômeno visível que não seja maior que um cubo de 6 metros. A imagem aparece em um local que você pode ver dentro do alcance e dura enquanto durar. Parece completamente real, incluindo sons, cheiros e temperatura apropriados à coisa retratada. Você não pode criar calor ou frio suficiente para causar dano, um som alto o suficiente para causar dano sônico ou ensurdecer uma criatura, ou um cheiro que possa adoecer uma criatura (como o fedor de um troglodita).\n\nContanto que você esteja dentro do alcance da ilusão, você pode usar sua ação para fazer com que a imagem se mova para qualquer outro local dentro do alcance. À medida que a imagem muda de local, você pode alterar sua aparência para que seus movimentos pareçam naturais para a imagem. Por exemplo, se você criar uma imagem de uma criatura e movê-la, poderá alterar a imagem para que ela pareça estar andando. Da mesma forma, você pode fazer com que a ilusão emita sons diferentes em momentos diferentes, até mesmo fazendo com que ela continue uma conversa, por exemplo.\n\nA interação física com a imagem revela que ela é uma ilusão, pois coisas podem passar por ela. Uma criatura que use sua ação para examinar a imagem pode determinar que se trata de uma ilusão com um teste bem-sucedido de Inteligência (Investigação) contra seu CD de resistência de magia. Se uma criatura discernir a ilusão pelo que ela é, a criatura poderá ver através da imagem, e suas outras qualidades sensoriais tornar-se-ão fracas para a criatura."
  },
  {
    "name": "Palavra de Cura em Massa",
    "level": 3,
    "classes": [
      "Clérigo"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Conforme você pronuncia palavras de restauração, até seis criaturas de sua escolha que você possa ver dentro do alcance recuperam pontos de vida iguais a 1d4 + seu modificador de atributo de conjuração. Este feitiço não tem efeito sobre mortos-vivos ou constructoos."
  },
  {
    "name": "Alterar a Si Mesmo",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 hour",
    "description": "Você assume uma forma diferente. Ao conjurar uma magia, escolha uma das seguintes opções, cujos efeitos duram enquanto durar a magia. Enquanto o feitiço durar, você pode encerrar uma opção como uma ação para obter os benefícios de outra diferente. \n\nAdaptação Aquática:\n Você adapta seu corpo a um ambiente aquático, criando guelras e teias entre os dedos. Você pode respirar debaixo d'água e ganhar uma velocidade de natação igual à sua velocidade de caminhada. \nAlterar aparência:\n Você transforma sua aparência. Você decide sua aparência, incluindo altura, peso, características faciais, som da sua voz, comprimento do cabelo, coloração e características distintivas, se houver. Você pode aparecer como membro de outra raça, embora nenhuma de suas estatísticas mude. Você também não pode aparecer como uma criatura de tamanho diferente do seu, e sua forma básica permanece a mesma; se você for bípede, não poderá usar esse feitiço para se tornar quadrúpede, por exemplo. A qualquer momento durante a duração do feitiço, você pode usar sua ação para mudar sua aparência dessa forma novamente. \nArmas Naturais:\nVocê cria garras, presas, espinhos, chifres ou uma arma natural diferente de sua escolha. Seus ataques desarmados causam 1d6 concussão, perfurante ou dano cortante, conforme apropriado para a arma natural que você escolheu, e você é proficiente com seus ataques desarmados. Finalmente, a arma natural é mágica e você tem um bônus de +1 nas jogadas de ataque e dano que fizer usando-a."
  },
  {
    "name": "Fechadura Arcana",
    "level": 2,
    "classes": [
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Até ser dissipada",
    "description": "Você toca uma porta, janela, portão, baú ou outra entrada fechada e ela fica trancada enquanto durar. Você e as criaturas que você designa Quando você conjura essa magia podem abrir o objeto normalmente. Você também pode definir uma senha que, quando falada a até 1,5 metro do objeto, suprime esse feitiço por 1 minuto. Caso contrário, fica intransponível até que seja quebrado ou o feitiço seja dissipado ou suprimido. Lançar golpe no objeto suprime o bloqueio arcano por 10 minutos.\n\nEnquanto afetado por este feitiço, o objeto é mais difícil de quebrar ou abrir à força; a CD para quebrá-lo ou arrombar qualquer fechadura aumenta em 10."
  },
  {
    "name": "Pele de Casca",
    "level": 2,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Você toca uma criatura voluntária. Até a magia terminar, a pele do alvo tem uma aparência áspera, semelhante a uma casca de árvore, e a CA do alvo não pode ser inferior a 16, independentemente do tipo de armadura que ele esteja vestindo."
  },
  {
    "name": "Indetectável",
    "level": 3,
    "classes": [
      "Bardo",
      "Clérigo",
      "Patrulheiro"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "8 horas",
    "description": "Enquanto isso, você esconde um alvo que você toca da magia de adivinhação. O alvo pode ser uma criatura voluntária ou um local ou objeto não maior que 3 metros em qualquer dimensão. O alvo não pode ser alvo de nenhuma magia de adivinhação ou percebido através de sensores mágicos de vidência."
  },
  {
    "name": "Fundir-se com a Pedra",
    "level": 3,
    "classes": [
      "Clérigo",
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "8 horas",
    "description": "Você pisa em um objeto ou superfície de pedra grande o suficiente para conter totalmente seu corpo, fundindo-se e todo o equipamento que você carrega com a pedra durante o período. Usando seu movimento, você pisa na pedra em um ponto que pode tocar. Nada de sua presença permanece visível ou detectável por sentidos não-mágicos.\n\nEnquanto estiver fundido com a pedra, você não pode ver o que ocorre fora dela, e quaisquer testes de Sabedoria (Percepção) que você fizer para ouvir sons fora dela serão feitos com desvantagem. Você permanece consciente da passagem do tempo e pode lançar feitiços sobre si mesmo enquanto está fundido na pedra. Você pode usar seu movimento para deixar a pedra por onde você entrou, o que encerra o feitiço. Caso contrário, você não poderá se mover.\n\nPequenos danos físicos à pedra não prejudicam você, mas sua destruição parcial ou uma mudança em sua forma (na medida em que você não cabe mais dentro dela) expulsa você e causa 6d6 de dano de concussão a você. A destruição completa da pedra (ou transmutação em uma substância diferente) expulsa você e causa 50 de dano de concussão a você. Se expulso, você cai caído em um espaço desocupado mais próximo de onde entrou pela primeira vez."
  },
  {
    "name": "Phantom Steed",
    "level": 3,
    "classes": [
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 minute",
    "range": "9 metros",
    "duration": "1 hora",
    "description": "Uma grande criatura semelhante a um cavalo, quase real, aparece na grodada em um espaço desocupado de sua escolha dentro do alcance. Você decide a aparência da criatura, mas ela está equipada com sela, freio e freio. Qualquer equipamento criado pelo feitiço desaparece em uma nuvem de fumaça se for carregado a mais de 3 metros de distância do corcel.\n\nEnquanto isso, você ou uma criatura de sua escolha podem montar no corcel. A criatura usa as estatísticas de um cavalo de montaria, exceto que tem uma velocidade de 30 metros e pode viajar 16 quilômetros em uma hora, ou 21 quilômetros em ritmo acelerado. Quando a magia termina, o corcel desaparece gradualmente, dando ao cavaleiro 1 minuto para desmontar. A magia termina se você usar uma ação para desfalha-la ou se o corcel sofrer algum dano."
  },
  {
    "name": "Crescimento Vegetal",
    "level": 3,
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação or 8 hours",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "Este feitiço canaliza vitalidade para plantaas dentro de uma área específica. Existem dois usos possíveis para o feitiço, garantindo benefícios imediatos ou de longo prazo.\n\nSe você conjurar esse feitiço usando 1 ação, escolha um ponto dentro do alcance. Todas as plantaas normais em um raio de 30 metros centrado nesse ponto tornam-se espessas e cobertas de vegetação. Uma criatura se movendo pela área deve gastar 1,2 metro de movimento para cada 30 centímetros que se mover.\n\nVocê pode excluir uma ou mais áreas de qualquer tamanho dentro da área da magia de serem afetadas.\n\nSe você lançar este feitiço durante 8 horas, você enriquecerá a terra. Todas as plantaas num raio de oitocentos metros centrado em um ponto dentro do alcance ficam enriquecidas por 1 ano. As plantaas produzem o dobro da quantidade normal de alimento quando colhidas."
  },
  {
    "name": "Proteção da Energia",
    "level": 3,
    "classes": [
      "Clérigo",
      "Druida",
      "Patrulheiro",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 minute",
    "description": "Enquanto durar, a criatura voluntária que você toca tem resistência a um tipo de dano de sua escolha: ácido, frio, fogo, raio ou trovão."
  },
  {
    "name": "Revivificar",
    "level": 3,
    "classes": [
      "Clérigo",
      "Paladino"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você toca uma criatura que morreu no último minuto. Essa criatura volta à vida com 1 ponto de vida. Este feitiço não pode trazer de volta à vida uma criatura que morreu de velhice, nem pode restaurar qualquer parte do corpo defeituosa."
  },
  {
    "name": "Mensagem",
    "level": 3,
    "classes": [
      "Bardo",
      "Clérigo",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Unlimited",
    "duration": "1 rodada",
    "description": "Você envia uma mensagem curta de vinte e cinco palavras ou menos para uma criatura com a qual você está familiarizado. A criatura ouve a mensagem em sua mente, reconhece você como o remetente, se o conhece, e pode responder da mesma maneira imediatamente. A magia permite que criaturas com valores de Inteligência de pelo menos 1 entendam o significado de sua mensagem.\n\nVocê pode enviar a mensagem a qualquer distância e até mesmo para outros planos de existência, mas se o alvo estiver em um plano diferente do seu, há 5% de chance de a mensagem não chegar."
  },
  {
    "name": "Tempestade de Granizo",
    "level": 3,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Até o fim da magia, chuva congelante e granizo caem em um cilindro de 6 metros de altura com um raio de 12 metros centrado em um ponto que você escolher dentro do alcance. A área está fortemente obscurecida e as chamas expostas na área são apagadas.\n\nA grodada da região é coberta por gelo escorregadio, tornando o terreno difícil. Quando uma criatura entra na área da magia pela primeira vez em um turno ou inicia seu turno lá, ela deve realizar um Teste de resistência de Destreza. Em um teste de resistência falho, ele cai caído.\n\nSe uma criatura estiver se concentrando na área da magia, a criatura deverá realizar um Teste de resistência de Constituição com sucesso contra seu CD de resistência de magia ou perderá concentração."
  },
  {
    "name": "Lentidão",
    "level": 3,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você altera o tempo arodada até seis criaturas de sua escolha em um cubo de 12 metros dentro do alcance. Cada um deve ter sucesso em um teste de resistência de alvo de Sabedoria ou ser afetado por este feitiço enquanto durar.\n\nA velocidade de um alvo afetado é reduzida à metade, ele sofre -2 de penalidade na CA e no Teste de resistência de Destrezas e não pode usar ocorrências. Por sua vez, pode utilizar uma ação ou uma ação bônus, e não ambas. Independentemente das habilidades ou itens mágicos da criatura, ela não pode realizar mais de um ataque corpo a corpo ou à distância durante seu turno.\n\nSe a criatura tentar lançar um feitiço com tempo de lançamento de 1 ação, jogue um d20. Com 11 ou superior, o feitiço não entra em vigor até o próximo turno da criatura, e a criatura deve usar sua ação naquele turno para completar o feitiço. Se não puder, o feitiço será desperdiçado.\n\nUma criatura afetada por este feitiço faz outro Teste de resistência de Sabedoria no final do seu turno. Em um teste de resistência bem-sucedido, o efeito acaba por isso."
  },
  {
    "name": "Falar com os Mortos",
    "level": 3,
    "classes": [
      "Bardo",
      "Clérigo"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "3 metros",
    "duration": "10 minutos",
    "description": "Você concede a aparência de vida e inteligência a um cadáver de sua escolha dentro do alcance, permitindo que ele responda às perguntas que você fizer. O cadáver ainda deve ter boca e não pode ser morto-vivo. A magia falha se o cadáver foi alvo desta magia nos últimos 10 dias.\n\nAté a magia terminar, você pode fazer até cinco perguntas ao cadáver. O cadáver sabe apenas o que conheceu em vida, incluindo as línguas que conheceu. As respostas geralmente são breves, enigmáticas ou repetitivas, e o cadáver não é obrigado a oferecer uma resposta verdadeira se você for hostil a ele ou se ele o reconhecer como inimigo. Este feitiço não devolve a alma da criatura ao seu corpo, apenas ao seu espírito animador. Assim, o cadáver não consegue aprender novas informações, não compreende nada do que aconteceu desde que morreu e não pode especular sobre acontecimentos futuros."
  },
  {
    "name": "Falar com Plantas",
    "level": 3,
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Self (30-foot radius",
    "duration": "10 minutos",
    "description": "Você imbui plantaas a até 9 metros de você com senciência e animação limitadas, dando-lhes a capacidade de se comunicar com você e seguir seus comandos simples. Você pode questionar plantaas sobre eventos ocorridos na área da magia no dia anterior, obtendo informações sobre criaturas que passaram, clima e outras circunstâncias.\n\nVocê também pode transformar terrenos difíceis causados ​​pelo crescimento de plantas (como matagais e vegetação rasteira) em terrenos comuns que perduram por toda a duração. Ou você pode transformar um terreno comum onde há plantaas em um terreno difícil que dura o tempo todo, fazendo com que vinhas e galhos atrapalhem os perseguidores, por exemplo.\n\nPlantaas pode realizar outras tarefas em seu nome, a critério do Mestre. O feitiço não permite que as plantaas se desenraízem e se movam, mas elas podem mover livremente galhos, gavinhas e caules.\n\nSe uma planta criatura estiver na área, você poderá se comunicar com ela como se compartilhasse uma linguagem comum, mas não ganha nenhuma habilidade mágica para influenciá-la.\n\nEste feitiço pode fazer com que as plantas criadas pelo feitiço emaranhar liberem uma criatura imobilizada."
  },
  {
    "name": "Guardiões Espirituais",
    "level": 3,
    "classes": [
      "Clérigo"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "Self (15-foot radius)",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você invoca espíritos para protegê-lo. Eles voam arodada a uma distância de 4,5 metros durante a duração. Se você for bom ou neutro, sua forma espectral parecerá angelical ou feérico (sua escolha). Se você é mau, eles parecem inimigos.\n\nQuando você conjura essa magia, você pode designar qualquer número de criaturas que você possa ver para não serem afetadas por ela. A velocidade de uma criatura afetada é reduzida pela metade na área, e quando a criatura entra na área pela primeira vez em um turno ou inicia seu turno lá, ela deve fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, a criatura sofre 3d8 de dano radiante (se você for bom ou neutro) ou 3d8 de dano necrótico (se você for mau). Em um teste de resistência bem-sucedido, a criatura leva metade do dano."
  },
  {
    "name": "Nuvem Fedorenta",
    "level": 3,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você cria uma esfera de gás amarelo e nauseante com 6 metros de raio, centrada em um ponto dentro do alcance. A nuvem se espalha pelos cantos arodada e sua área fica fortemente obscurecida. A nuvem permanece no ar durante todo o tempo.\n\nCada criatura que estiver completamente dentro da nuvem no início do seu turno deve fazer um Teste de resistência de Constituição contra veneno. Em um teste de resistência falho, a criatura passa sua ação vomitando e cambaleando. Criaturas que não precisam respirar ou que são imunes ao veneno são automaticamente bem-sucedidas neste teste de resistência.\n\nUm vento moderado (pelo menos 10 milhas por hora) dispersa a nuvem após 4 rodadas. Um vento forte (pelo menos 20 milhas por hora) dispersa-o após 1 rodada."
  },
  {
    "name": "Confusão",
    "level": 4,
    "classes": [
      "Bardo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Este feitiço ataca e distorce a mente das criaturas, gerando delírios e provocando ação descontrolada. Cada criatura em uma esfera de raio de 3 metros centrada em um ponto que você escolher dentro do alcance deve ter sucesso em um Teste de resistência de Sabedoria quando você conjura essa magia ou é afetado por ela.\n\nUm alvo afetado não pode aceitar ocorrências e deve rolar um d10 no início de cada um de seus turnos para determinar seu comportamento naquele turno.\n    d10 Comportamento 1 A criatura usa todo o seu movimento para se mover em uma direção aleatória. Para determinar a direção, jogue um d8 e atribua uma direção a cada face do dado. A criatura não realiza ação neste turno.    2-6 A criatura não se move nem realiza ações neste turno.    7-8 A criatura usa sua ação para realizar um ataque corpo a corpo contra uma criatura determinada aleatoriamente ao seu alcance. Se não houver nenhuma criatura ao seu alcance, a criatura não faz nada neste turno.    9-10 A criatura pode agir e se mover normalmente.    \nAo final de cada um de seus turnos, um alvo afetado pode fazer um Teste de resistência de Sabedoria. Se tiver sucesso, este efeito termina para aquele alvo"
  },
  {
    "name": "Convocar Elementais Menores",
    "level": 4,
    "classes": [
      "Druida",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 minute",
    "range": "27 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você convoca elementais que aparecem em espaços desocupados que você pode ver dentro do alcance. Você escolhe uma das seguintes opções para o que aparece: Um elemental de nível de desafio 2 ou inferior Dois elementais de nível de desafio 1 ou inferior Quatro elementais de nível de desafio 1/2 ou inferior Oito elementais de nível de desafio 1/4 ou inferior. Um elemental invocado por este feitiço desaparece quando chega a 0 pontos de vida ou quando a magia termina. \n\n As criaturas convocadas são amigáveis ​​com você e seus companheiros. Role a iniciativa para as criaturas convocadas como um grupo, que tem seus próprios turnos. Eles obedecem a quaisquer comandos verbais que você emite a eles (nenhuma ação exigida por você). Se você não der nenhum comando a eles, eles se defenderão de criaturas hostis, mas por outro lado não tomarão nenhuma atitude. \n\n O GM possui as estatísticas das criaturas."
  },
  {
    "name": "Controlar Água",
    "level": 4,
    "classes": [
      "Clérigo",
      "Druida",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "90 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Até o fim da magia, você controla qualquer água independente dentro de uma área que você escolher, que seja um cubo de até 30 metros de lado. Você pode escolher qualquer um dos seguintes efeitos Quando você conjura essa magia. Como ação no seu turno, você pode repetir o mesmo efeito ou escolher um diferente. \n\nInundação: Você faz com que o nível de todas as águas paradas na área suba até 6 metros. Se a área incluir uma costa, a água da inundação transborda para terra seca. \n\n Se você escolher uma área em um grande corpo de água, em vez disso, você criará uma onda de 6 metros de altura que viaja de um lado a outro da área e depois cai. Quaisquer veículos enormes ou menores no caminho da onda são carregados com ela para o outro lado. Qualquer veículo enorme ou menor atingido pela onda tem 25% de chance de virar. \n\n O nível da água permanece elevado até a magia terminar ou você escolher um efeito diferente. Se este efeito produzir uma onda, a onda se repetirá no início do seu próximo turno enquanto durar o efeito da inundação. \n\nParte Água: Você faz com que a água da área se separe e crie uma trincheira. A trincheira se estende pela área do feitiço e a água separada forma uma parede em ambos os lados. A trincheira permanece até a magia terminar ou você escolhe um efeito diferente. A água então enche lentamente a vala ao longo da próxima rodada até que o nível normal da água seja restaurado. \n\nFluxo de redirecionamento: Você faz com que a água corrente na área se mova na direção que você escolher, mesmo que a água tenha que fluir sobre obstáculos, subir paredes ou em outras direções improváveis. A água na área se move conforme você a direciona, mas uma vez que ela se move além da área da magia, ela retoma seu fluxo com base nas condições do terreno. A água continua a se mover na direção que você escolheu até a magia terminar ou você escolher um efeito diferente. \n\nRedemoinho: Este efeito requer um corpo de água com pelo menos 15 metros quadrados e 21,5 metros de profundidade. Você faz com que um redemoinho se forme no centro da área. O redemoinho forma um vórtice com 1,5 metro de largura na base, até 50 pés de largura no topo e 21,5 metros de altura. Qualquer criatura ou objeto na água e dentro de 21,5 metros do vórtice é puxado 3 metros em sua direção. Uma criatura pode nadar para longe do vórtice fazendo um teste de Força (Atletismo) contra seu CD de resistência de magia. \n\n Quando uma criatura entra no vórtice pela primeira vez em um turno ou inicia seu turno ali, ela deve fazer um Teste de resistência de Força. Em um teste de resistência falho, a criatura sofre 2d8 de dano de concussão e é pega no vórtice até o fim da magia. Em um teste de resistência bem-sucedido, a criatura sofre metade do dano e não fica presa no vórtice. Uma criatura pega no vórtice pode usar sua ação para tentar nadar para longe do vórtice como descrito acima, mas tem desvantagem no teste de Força (Atletismo) para fazer isso. \n\n Na primeira vez em cada turno que um objeto entra no vórtice, o objeto sofre 2d8 dano de concussão; esse dano ocorre a cada rodada que permanece no vórtice."
  },
  {
    "name": "Convocar Seres Florestais",
    "level": 4,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você convoca criaturas feéricas que aparecem em espaços desocupados que você pode ver dentro do alcance. Escolha uma das seguintes opções para o que aparece: Uma criatura feérico de nível de desafio 2 ou inferior Duas criaturas feéricos de nível de desafio 1 ou inferior Quatro criaturas feéricos de nível de desafio 1/2 ou inferior Oito criaturas feéricos de nível de desafio 1/4 ou inferior Uma criatura invocada desaparece quando cai para 0 pontos de vida ou quando a magia termina. \n\n As criaturas convocadas são amigáveis ​​com você e seus companheiros. Role a iniciativa para as criaturas convocadas como um grupo, que tem seus próprios turnos. Eles obedecem a quaisquer comandos verbais que você emite a eles (nenhuma ação exigida por você). Se você não der nenhum comando a eles, eles se defenderão de criaturas hostis, mas por outro lado não tomarão nenhuma atitude. \n\n O GM possui as estatísticas das criaturas."
  },
  {
    "name": "Proteção Mortal",
    "level": 4,
    "classes": [
      "Clérigo",
      "Paladino"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "8 horas",
    "description": "Você toca uma criatura e concede a ela certa proteção contra a morte.\n\nNa primeira vez que o alvo cairia para 0 pontos de vida como resultado de receber dano, o alvo cairia para 1 ponto de vida e a magia terminaria.\n\nSe o feitiço ainda estiver em vigor quando o alvo for submetido a um efeito que o mataria instantaneamente sem causar dano, esse efeito será negado contra o alvo e a magia terminará."
  },
  {
    "name": "Línguas",
    "level": 3,
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Este feitiço concede à criatura que você toca a habilidade de compreender qualquer idioma falado que ouvir. Além disso, quando o alvo fala, qualquer criatura que conheça pelo menos uma língua e possa ouvir o alvo entende o que ele diz."
  },
  {
    "name": "Beast Sense",
    "level": 2,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Você toca um besta disposto. Durante a duração da magia, você pode usar sua ação para ver através dos olhos do besta e ouvir o que ele ouve, e continuar fazendo isso até usar sua ação para retornar aos seus sentidos normais.\n\nAo perceber através dos sentidos da besta, você ganha os benefícios de quaisquer sentidos especiais possuídos por aquela criatura, embora você seja cego e ensurdecido aos seus próprios arredores."
  },
  {
    "name": "Borrar",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Seu corpo fica embaçado, mudando e oscilando para todos que podem vê-lo. Enquanto isso, qualquer criatura terá oportunidade de agir de ataques contra você. Um atacante é imune a este efeito se não depender da visão, como no caso da visão às cegas, ou se puder ver através de ilusões, como no caso da visão verdadeira."
  },
  {
    "name": "Branding Smite",
    "level": 2,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na próxima vez que você acertar uma criatura com um ataque com arma antes que a magia termine, a arma brilhará com brilho astral enquanto você ataca. O ataque causa 2d6 de dano radiante extra ao alvo, que se torna visível se for invisível, e o alvo emite luz fraca em um raio de 1,5 metro e não pode se tornar invisível até o fim da magia."
  },
  {
    "name": "Cordon Of Arrows",
    "level": 2,
    "classes": [
      "Patrulheiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "2 metros",
    "duration": "8 horas",
    "description": "Você planta quatro peças de munição não-mágica — flechas ou virotes de besta — na grodada dentro do alcance e lança magia sobre elas para proteger uma área. Até a magia terminar, sempre que uma criatura que não seja você chega a até 9 metros de munição pela primeira vez em um turno ou termina seu turno ali, um pedaço de munição voa para atingi-la. A criatura deve ter sucesso em um Teste de Resistência de Destreza ou sofrerá 1d6 dano perfurante. A munição é então destruída. A magia termina quando não resta mais munição.\n\nQuando você conjura essa magia, você pode designar quaisquer criaturas que escolher, e a magia as ignora."
  },
  {
    "name": "Coroa da Loucura",
    "level": 2,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Um humanoide de sua escolha que você possa ver dentro do alcance deve ser bem sucedido em um Teste de resistência de Sabedoria ou ser enfeitiçado por você durante esse período. \n\n Enquanto o alvo é assim enfeitiçado, uma coroa retorcida de ferro denteado aparece em sua cabeça, e uma loucura brilha em seus olhos. \n\n O alvo enfeitiçado deve usar sua ação antes de passar em cada um de seus turnos para realizar um ataque corpo a corpo contra uma criatura diferente de si mesmo que você escolher mentalmente. O alvo pode agir normalmente no seu turno se você não escolher nenhuma criatura ou se nenhuma estiver ao seu alcance. \n\n Nos turnos subsequentes, você deve usar sua ação para manter o controle sobre o alvo, ou a magia termina. Além disso, o alvo pode fazer um Teste de resistência de Sabedoria ao final de cada um de seus turnos. Com um sucesso, a magia termina."
  },
  {
    "name": "Escuridão",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "A escuridão mágica se espalha a partir de um ponto que você escolher dentro do alcance para preencher uma esfera de 4,5 metros de raio durante toda a duração. A escuridão espalha cantos arodada. Uma criatura com visão no escuro não pode ver através desta escuridão, e a luz não-mágica não pode iluminá-la. Se o ponto escolhido estiver em um objeto que você está segurando ou que não esteja sendo usado ou carregado, a escuridão emanará do objeto e se moverá com ele. Cobrir completamente a fonte da escuridão com um objeto opaco, como uma tigela ou um elmo, bloqueia a escuridão. Se alguma área desta magia se sobrepõe a uma área de luz criada por uma magia de 2º nível ou inferior, a magia que criou a luz é dissipada."
  },
  {
    "name": "Visão no Escuro",
    "level": 2,
    "classes": [
      "Druida",
      "Patrulheiro",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "8 horas",
    "description": "Você toca uma criatura voluntária para conceder-lhe a habilidade de ver no escuro. Durante todo o período, essa criatura tem visão no escuro em um alcance de 18 metros."
  },
  {
    "name": "Detectar Pensamentos",
    "level": 2,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Enquanto isso, você pode ler os pensamentos de certas criaturas. Quando você conjura uma magia e como sua ação em cada turno até a magia terminar, você pode focar sua mente em qualquer criatura que você possa ver a até 9 metros de você. Se a criatura que você escolher tiver Inteligência 3 ou inferior ou não falar nenhum idioma, a criatura não será afetada.\n\nVocê inicialmente aprende os pensamentos superficiais da criatura – o que está mais em sua mente naquele momento. Como ação, você pode desviar sua atenção para os pensamentos de outra criatura ou tentar investigar mais profundamente a mente da mesma criatura. Se você investigar mais fundo, o alvo deverá fazer um Teste de resistência de Sabedoria. Se falhar, você obterá insights sobre seu raciocínio (se houver), seu estado emocional e algo que paira em sua mente (como algo que o preocupa, ama ou odeia). Se tiver sucesso, a magia termina. De qualquer forma, o alvo sabe que você está investigando sua mente e, a menos que você mude sua atenção para os pensamentos de outra criatura, a criatura pode usar sua ação no seu turno para fazer um teste de Inteligência contestado pelo seu teste de Inteligência; se tiver sucesso, a magia termina.\n\nPerguntas dirigidas verbalmente ao alvo criatura moldam naturalmente o curso de seus pensamentos, portanto este feitiço é particularmente eficaz como parte de um interrogatório. Você também pode usar esta magia para detectar a presença de criaturas pensantes que você não pode ver. Quando você conjura uma magia ou como sua ação durante a duração, você pode procurar pensamentos a até 9 metros de você. A magia pode penetrar barreiras, mas 60 centímetros de rocha, 5 centímetros de qualquer metal que não seja chumbo ou uma fina folha de chumbo bloqueiam você. Você não pode detectar uma criatura com Inteligência 3 ou inferior ou que não fale nenhum idioma.\n\nDepois de detectar a presença de uma criatura dessa forma, você poderá ler seus pensamentos pelo resto da duração conforme descrito acima, mesmo que não possa vê-la, mas ela ainda deve estar dentro do alcance."
  },
  {
    "name": "Formas Animais",
    "level": 8,
    "classes": [
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 24 hours",
    "description": "Sua magia transforma outros em bestas. Escolha qualquer número de criaturas voluntárias que você possa ver dentro do alcance. Você transforma cada alvo na forma de um besta Grande ou menor com uma taxa de desafio de 4 ou menos.  Nos turnos subsequentes, você pode usar sua ação para transformar as criaturas afetadas em novas formas.\n\nA transformação dura a duração de cada alvo, ou até que o alvo caia para 0 pontos de vida ou morra.  Você pode escolher um formulário diferente para cada alvo. As estatísticas de jogo de um alvo são substituídas pelas estatísticas do besta escolhido, embora o alvo mantenha seu alinhamento e pontuações de Inteligência, Sabedoria e Carisma. O alvo assume os pontos de vida da sua nova forma, e quando volta à sua forma normal, volta ao número de pontos de vida que tinha antes de se transformar. Se reverter como resultado de cair para 0 pontos de vida, qualquer dano excessivo será transferido para sua forma normal. Contanto que o dano excessivo não reduza a forma normal da criatura a 0 pontos de vida, ela não será derrubada inconsciente. A criatura é limitada nas ações que pode realizar pela natureza de sua nova forma e não pode falar ou lançar feitiços.\n\nO equipamento do alvo se funde à nova forma. O alvo não pode ativar, empunhar ou de outra forma se beneficiar de qualquer um de seus equipamentos."
  },
  {
    "name": "Campo Antimágico",
    "level": 8,
    "classes": [
      "Clérigo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Self (10-foot-radius sphere)",
    "duration": "Concentração, up to 1 hour",
    "description": "Uma esfera invisível de 3 metros de raio antimagia surrodadas você. Esta área está divorciada da energia mágica que permeia o multiverso. Dentro da esfera, os feitiços não podem ser lançados, as criaturas invocadas desaparecem e até os itens mágicos tornam-se mundanos. Até a magia terminar, a esfera se move com você, centrada em você. \n\n Feitiços e outros efeitos mágicos, exceto aqueles criados por um artefato ou divindade, são suprimidos na esfera e não podem se projetar nela. Um espaço gasto para conjurar uma magia suprimida é consumido. Enquanto um efeito é suprimido, ele não funciona, mas o tempo que ele passa suprimido conta em relação à sua duração. \n\nEfeitos Alvo: Feitiços e outros efeitos mágicos, como falha mágica e encantar pessoa, que atingem uma criatura ou um objeto na esfera não têm efeito sobre esse alvo. \n\nÁreas de Magia: A área de outra magia ou efeito mágico, como bola de fogo, não pode se estender para dentro da esfera. Se a esfera se sobrepõe a uma área de magia, a parte da área coberta pela esfera é suprimida. Por exemplo, as chamas criadas por uma parede de fogo são suprimidas dentro da esfera, criando uma lacuna na parede se a sobreposição for grande o suficiente. \n\nFeitiços: Qualquer magia ativa ou outro efeito mágico em uma criatura ou objeto na esfera é suprimido enquanto a criatura ou objeto estiver nela. \n\nItens Mágicos: As propriedades e poderes dos itens mágicos são suprimidos na esfera. Por exemplo, uma espada longa +1 na esfera funciona como uma espada longa não mágica. \n\n As propriedades e poderes de uma arma mágica são suprimidos se ela for usada contra um alvo na esfera ou empunhada por um atacante na esfera. Se uma arma mágica ou uma munição mágica sair completamente da esfera (por exemplo, se você disparar uma flecha mágica ou lançar uma lança mágica em um alvo fora da esfera), a magia do item deixa de ser suprimida assim que ele sai. \n\nViagem Mágica: O teletransporte e a viagem plana não funcionam na esfera, seja a esfera o destino ou o ponto de partida para tal viagem mágica. Um portal para outro local, mundo ou plano de existência, bem como uma abertura para um espaço extradimensional como aquele criado pela magia truque da corda, fecha temporariamente enquanto estiver na esfera. \n\nCriaturas e Objetos: Uma criatura ou objeto invocado ou criado por magia desaparece temporariamente da existência na esfera. Tal criatura reaparece instantaneamente assim que o espaço que a criatura ocupava não estiver mais dentro da esfera. \n\nDissipar Magia: Feitiços e efeitos mágicos como dissipar magia não têm efeito na esfera. Da mesma forma, as esferas criadas por diferentes feitiços de campo antimágico não se anulam."
  },
  {
    "name": "Antipatia/Simpatia",
    "level": 8,
    "classes": [
      "Druida",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 hour",
    "range": "18 metros",
    "duration": "10 dias",
    "description": "Este feitiço atrai ou repele criaturas à sua escolha. Você almeja algo dentro do alcance, seja um objeto ou criatura enorme ou menor ou uma área que não seja maior que um cubo de 60 metros. Em seguida, especifique um tipo de criatura inteligente, como dragões vermelhos, goblins ou vampiros. Você investe no alvo uma aura que atrai ou repele as criaturas especificadas durante o período. Escolha antipatia ou simpatia como efeito da aura.\n\nSe o alvo danificar ou de outra forma prejudicar uma criatura afetada, a criatura afetada pode fazer um Teste de resistência de Sabedoria para encerrar o efeito, conforme descrito abaixo.\n\nUma criatura que consiga resistir contra esse efeito fica imune a ele por 1 minuto, após o qual poderá ser afetada novamente."
  },
  {
    "name": "Projeção Astral",
    "level": 9,
    "classes": [
      "Clérigo",
      "Bruxo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 hour",
    "range": "3 metros",
    "duration": "Especial",
    "description": "Você e até oito criaturas voluntárias dentro do alcance projetam seus corpos astrais no Plano Astral (o feitiço falha e o lançamento é desperdiçado se você já estiver naquele plano). O corpo material que você deixa para trás é inconsciente e está em estado de animação suspensa; não precisa de comida nem de ar e não envelhece.\n\nSeu corpo astral se assemelha à sua forma mortal em quase todos os aspectos, replicando as estatísticas e posses do jogo. A principal diferença é a adição de um cordão prateado que se estende entre as omoplatas e segue atrás de você, tornando-se invisível após 30 centímetros. Este cordão é a sua ligação ao seu corpo material. Contanto que a corda permaneça intacta, você poderá encontrar o caminho de casa. Se o cordão for cortado – algo que só pode acontecer quando um efeito afirma especificamente que isso acontece – sua alma e seu corpo serão separados, matando você instantaneamente.\n\nSua forma astral pode viajar livremente pelo Plano Astral e passar por portais que levam a qualquer outro plano. Se você entrar em um novo plano ou retornar ao plano em que estava quando lançou este feitiço, seu corpo e seus pertences serão transportados ao longo do cordão prateado, permitindo que você entre novamente em seu corpo ao entrar no novo plano. Sua forma astral é uma encarnação separada. Quaisquer danos ou outros efeitos que se apliquem a ele não terão efeito em seu corpo físico, nem persistirão quando você retornar a ele.\n\nA magia termina para você e seus companheiros quando você usa sua ação para disfalha-la. Quando a magia termina, a criatura afetada retorna ao seu corpo físico e desperta.\n\nO feitiço também pode terminar mais cedo para você ou um de seus companheiros. Um feitiço _dissipar magia_ bem-sucedido usado contra um corpo astral ou físico encerra o feitiço para aquela criatura. Se o corpo original de uma criatura ou sua forma astral cair para 0 pontos de vida, a magia termina para aquela criatura. Se a magia terminar e o cordão prateado estiver intacto, o cordão puxa a forma astral da criatura de volta ao seu corpo, encerrando seu estado de animação suspensa.\n\nSe você retornar ao seu corpo prematuramente, seus companheiros permanecerão em suas formas astrais e deverão encontrar seu próprio caminho de volta aos seus corpos, geralmente caindo para 0 pontos de vida."
  },
  {
    "name": "Clonar",
    "level": 8,
    "classes": [
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 hour",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Este feitiço cria uma duplicata inerte de uma criatura viva como uma salvaguarda contra a morte. Este clone se forma dentro de um recipiente lacrado e atinge seu tamanho máximo e maturidade após 120 dias; você também pode optar por fazer com que o clone seja uma versão mais jovem da mesma criatura. Permanece inerte e dura indefinidamente, enquanto o seu recipiente permanecer intacto.\n\nA qualquer momento após o clone amadurecer, se a criatura original morrer, sua alma será transferida para o clone, desde que a alma esteja livre e disposta a retornar. O clone é fisicamente idêntico ao original e tem a mesma personalidade, memórias e habilidades, mas nenhum equipamento do original. Os restos físicos da criatura original, se ainda existirem, tornam-se inertes e não podem mais ser restaurados à vida, uma vez que a alma da criatura está em outro lugar."
  },
  {
    "name": "Controlar o Clima",
    "level": 8,
    "classes": [
      "Clérigo",
      "Druida",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "10 minutes",
    "range": "Self (5-mile radius)",
    "duration": "Concentração, up to 8 hours",
    "description": "Você assume o controle do clima em um raio de 8 quilômetros de você durante todo o período. Você deve estar ao ar livre para lançar este feitiço. Mover-se para um lugar onde você não tenha um caminho claro para o céu encerra o feitiço mais cedo.\n\n Quando você conjura uma magia, você altera as condições climáticas atuais, que são determinadas pelo Mestre com base no clima e na estação. Você pode alterar a precipitação, a temperatura e o vento. São necessários 1d4 × 10 minutos para que as novas condições entrem em vigor. Depois que eles fizerem isso, você poderá alterar as condições novamente. Quando a magia termina, o tempo volta gradualmente ao normal. \n\n Quando você altera as condições climáticas, encontre uma condição atual nas tabelas a seguir e altere seu estágio em um, para cima ou para baixo. Ao mudar o vento, você pode mudar sua direção.\n\nTemperaturaEstágioCondição1Calor insuportável2Quente3Quente4Frio5Frio6Frio árticoVentoEstágioCondição1Calma2Vento moderado3Vento forte4Vento forte4TempestadePrecipitaçãoEstágioCondição1Claro2Nuvens claras3Névoa nublada ou grodada4Chuva, granizo ou neve5Chuva torrencial, granizo ou nevasca"
  },
  {
    "name": "Demiplano",
    "level": 8,
    "classes": [
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "1 hora",
    "description": "Você cria uma porta sombria em uma superfície plana e sólida que você pode ver dentro do alcance. A porta é grande o suficiente para permitir que criaturas Médias passem sem impedimentos. Quando aberta, a porta leva a um semiplano que parece ser uma sala vazia de 9 metros em cada dimensão, feita de madeira ou pedra. Quando a magia termina, a porta desaparece, e quaisquer criaturas ou objetos dentro do semiplano permanecem presos ali, assim como a porta também desaparece do outro lado.\n\nCada vez que você lança este feitiço, você pode criar um novo semiplano ou fazer com que a porta sombria se conecte a um semiplano Você criou com um lançamento anterior deste feitiço.  Além disso, se você conhece a natureza e o conteúdo de um semiplano criado pela conjuração desta magia por outra criatura, você pode fazer com que a porta sombria se conecte ao seu semiplano."
  },
  {
    "name": "Dominar Monstro",
    "level": 8,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você tenta enganar uma criatura que você pode ver dentro do alcance. Deve ser aprovado em Teste de resistência de Sabedoria ou ser feitiçado por você durante todo o período. Se você ou criaturas que lhe são amigas estão lutando contra isso, tem vantagem no teste de resistência.\n\nEnquanto a criatura estiver enfeitada, você terá uma ligação telepática com ela enquanto vocês dois estiverem no mesmo plano de existência. Você pode usar esse link telepático para emitir comandos à criatura enquanto estiver consciente (nenhuma ação necessária), aos quais ela fará o possível para obedecer. Você pode especificar um curso de ação simples e geral, como Atacar aquela criatura, Correr até lá ou Buscar aquele objeto. Se a criatura completar a ordem e não receber mais orientações suas, ela se defenderá e se preservará da melhor maneira possível.\n\nVocê pode usar sua ação para assumir o controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita. Durante esse tempo, você também pode fazer com que a criatura use uma ocorrência, mas isso exige que você use sua própria ocorrência também.\n\nCada vez que o alvo sofre dano, ele faz um novo Teste de resistência de Sabedoria contra o feitiço. Se o teste de resistência for bem-sucedido, a magia termina."
  },
  {
    "name": "Terremoto",
    "level": 8,
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "150 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você cria um distúrbio sísmico em um ponto da superfície que você pode ver dentro do alcance. Durante esse tempo, um tremor intenso rasga a grodada em um círculo de 30 metros de raio centrado naquele ponto e sacode criaturas e estruturas em contato com a grodada naquela área. \n\n A grodada da região torna-se terreno difícil. Cada criatura da grodada que estiver se concentrando deverá fazer um Teste de resistência de Constituição. Em um teste de resistência falho, a concentração da criatura é quebrada. \n\n Quando você conjura essa magia e ao final de cada turno você passa concentrado nela, cada criatura da grodada na área deve fazer um Teste de resistência de Destreza. Em um teste de resistência falho, a criatura é derrubada. \n\n Este feitiço pode ter efeitos adicionais dependendo do terreno da área, conforme determinado pelo Mestre. \n\nFissuras: Fissuras se abrem em toda a área do feitiço no início do seu próximo turno após você conjurar uma magia. Um total de 1d6 dessas fissuras se abrem em locais escolhidos pelo Mestre. Cada um tem 1d10 × 3 metros de profundidade, 3 metros de largura e se estende de uma borda da área da magia até o lado oposto. Uma criatura parada em um local onde uma fissura se abre deve ter sucesso em um Teste de resistência de Destreza ou cairá. Uma criatura que consegue salvar se move com a borda da fissura conforme ela se abre. \n\n Uma fissura que se abre abaixo de uma estrutura faz com que ela desmorone automaticamente (veja abaixo). \n\nEstruturas: O tremor causa 50 de dano de concussão a qualquer estrutura em contato com a grodada na área quando você conjura uma magia e no início de cada um de seus turnos até a magia terminar. Se uma estrutura cair para 0 pontos de vida, ela entra em colapso e potencialmente danifica as criaturas próximas. Uma criatura que esteja a meia distância da altura de uma estrutura deve fazer um Teste de resistência de Destreza. Em um teste de resistência falho, a criatura sofre 5d6 de dano de concussão, é derrubada e enterrada nos escombros, exigindo um teste de Força CD 20 (Atletismo) como uma ação para escapar. O Mestre pode ajustar a CD para mais ou para menos, dependendo da natureza dos escombros. Em um teste de resistência bem-sucedido, a criatura leva metade do dano e não cai nem é soterrada."
  },
  {
    "name": "Debilitar Mente",
    "level": 8,
    "classes": [
      "Bardo",
      "Druida",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "Você explode a mente de uma criatura que você pode ver dentro do alcance, tentando destruir seu intelecto e personalidade. O alvo sofre 4d6 de dano psíquico e deve fazer um Teste de resistência de Inteligência. \n\n Em um teste de resistência falho, os valores de Inteligência e Carisma da criatura tornam-se 1. A criatura não pode lançar feitiços, ativar itens mágicos, entender a linguagem ou se comunicar de qualquer maneira inteligível. A criatura pode, entretanto, identificar seus amigos, segui-los e até mesmo protegê-los. \n\n Ao final de cada 30 dias, a criatura poderá repetir seu teste de resistência contra este feitiço. Se obtiver sucesso no teste de resistência, a magia termina. \n\n O feitiço também pode ser encerrado com uma restauração maior, cura ou desejo."
  },
  {
    "name": "Presciência",
    "level": 9,
    "classes": [
      "Bardo",
      "Druida",
      "Bruxo",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 minute",
    "range": "Toque",
    "duration": "8 horas",
    "description": "Você toca uma criatura voluntária e concede uma capacidade limitada de ver o futuro imediato. Durante o tempo o alvo não pode ser surpreendido e tem vantagem em ataque de ataques, teste de habilidades e testes de resistência. Além disso, outras criaturas têm manobras de ataque contra o alvo durante o período.\n\nEste feitiço termina imediatamente se você lançá-lo novamente antes que sua duração termine."
  },
  {
    "name": "Portal",
    "level": 9,
    "classes": [
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você invoca um portal ligando um espaço desocupado que você pode ver até um local preciso em um plano de existência diferente. O portal é uma abertura circular, que pode ser feita com 1,5 a 6 metros de diâmetro. Você pode orientar o portal em qualquer direção que desejar. O portal dura enquanto durar.\n\nO portal possui uma frente e um verso em cada plano onde aparece. Viajar pelo portal só é possível passando pela sua frente. Qualquer coisa que faça isso é instantaneamente transportada para o outro plano, aparecendo no espaço desocupado mais próximo do portal.\n\nDivindades e outros governantes planares podem impedir que portais criados por esta magia se abram em sua presença ou em qualquer lugar dentro de seus domínios.\n\nQuando você conjura essa magia, você pode falar o nome de uma criatura específica (um pseudônimo, título ou apelido não funciona). Se aquela criatura estiver em um plano diferente daquele em que você está, o portal se abre nas imediações da criatura nomeada e atrai a criatura através dele até o espaço desocupado mais próximo do seu lado do portal. Você não ganha nenhum poder especial sobre a criatura, e ela é livre para agir como o Mestre considerar apropriado. Pode sair, atacá-lo ou ajudá-lo."
  },
  {
    "name": "Fluência",
    "level": 8,
    "classes": [
      "Bardo",
      "Bruxo"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "1 hora",
    "description": "Até o fim da magia, quando você faz um teste de Carisma, você pode substituir o número obtido por 15. Além disso, não importa o que você diga, a magia que determinaria se você está dizendo a verdade indica que você está sendo verdadeiro."
  },
  {
    "name": "Aura Sagrada",
    "level": 8,
    "classes": [
      "Clérigo"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "A luz divina sai de você e se funde em um brilho suave em um raio de 9 metros ao seu redor. Criaturas de sua escolha naquele raio Quando você conjura essa magia lança luz fraca em um raio de 1,5 metro e tem vantagem sobre todos os testes de resistência, e outras criaturas têm interferência no jogo de ataques contra eles até a magia terminar. Além disso, quando um inimigo ou um morto-vivo vence uma criatura afetada com um ataque corpo a corpo, a aura brilha com uma luz brilhante. O atacante deve ter sucesso em um Teste de resistência de Constituição ou ficará cego até a magia terminar."
  },
  {
    "name": "Aprisionamento",
    "level": 9,
    "classes": [
      "Bruxo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 minute",
    "range": "9 metros",
    "duration": "Até ser dissipada",
    "description": "Você cria uma restrição mágica para segurar uma criatura que você pode ver dentro do alcance. O deve ter sucesso em um Teste de resistência de Sabedoria ou ficar preso ao feitiço; se tiver sucesso, ele ficará imune a esta magia se você lançá-la novamente. Enquanto afetada por este feitiço, a criatura não precisa respirar, comer ou beber e não envelhece. Feitiços de adivinhação não conseguem localizar ou perceber o alvo. \n\n Ao conjurar uma magia, você escolhe uma das seguintes formas de prisão. \n\nEnterro: O alvo é sepultado bem abaixo da terra em uma esfera de força mágica que é grande o suficiente para conter o alvo. Nada pode passar pela esfera, nem qualquer criatura pode se teletransportar ou usar viagens planas para entrar ou sair dela. \n\n O componente especial para esta versão do feitiço é um pequeno orbe de mitral. \n\nAcorrentamento: Correntes pesadas, firmemente enraizadas na grodada, mantêm o alvo no lugar. O alvo fica imobilizado até o final da magia, e não pode se mover ou ser movido de forma alguma até então. \n\n O componente especial desta versão do feitiço é uma fina corrente de metal precioso. \n\nPrisão Hedged: O feitiço transporta o alvo para um pequeno semiplano que é protegido contra teletransporte e viagens planares. O semiplano pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada semelhante de sua escolha. \n\n O componente especial desta versão do feitiço é uma representação em miniatura da prisão feita de jade. \n\nContenção Mínima: O alvo encolhe até uma altura de 2,5 cm e fica aprisionado dentro de uma pedra preciosa ou objeto similar. A luz pode passar através da gema normalmente (permitindo que o alvo veja para fora e outras criaturas vejam para dentro), mas nada mais pode passar, mesmo por meio de teletransporte ou viagem planar. A pedra preciosa não pode ser cortada ou quebrada enquanto o feitiço permanecer em vigor. \n\n O componente especial para esta versão do feitiço é uma pedra preciosa grande e transparente, como corindo, diamante ou rubi. \n\nSono: O alvo adormece e não consegue ser acordado. O componente especial desta versão do feitiço consiste em ervas soporíficas raras. \n\nFinalizando o Feitiço: Durante o lançamento do feitiço, em qualquer uma de suas versões, você pode especificar uma condição que fará com que o feitiço termine e libere o alvo. A condição pode ser tão específica ou elaborada quanto você escolher, mas o Mestre deve concordar que a condição é razoável e tem probabilidade de se concretizar. As condições podem ser baseadas no nome, identidade ou divindade de uma criatura, mas de outra forma devem ser baseadas em ações ou qualidades observáveis ​​e não baseadas em intangíveis como nível, classe ou pontos de vida. \n\n Uma magia dissipar magia só pode encerrar a magia se for lançada como uma magia de 9º nível, visando a prisão ou o componente especial usado para criá-la. \n\n Você pode usar um componente especial específico para criar apenas uma prisão por vez. Se você conjurar uma magia novamente usando o mesmo componente, o alvo da primeira conjuração é imediatamente liberado de sua ligação."
  },
  {
    "name": "Nuvem Incendiária",
    "level": 8,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma nuvem rodopiante de fumaça atravessada por brasas quentes aparece a uma distância de 6 metros. A nuvem se espalha pelos cantos arodada e fica fortemente obscurecida. Dura enquanto durar ou até que um vento de velocidade moderada ou maior (pelo menos 10 milhas por hora) o disperse.\n\nQuando a nuvem aparece, cada criatura nela contida deve fazer um Teste de resistência de Destreza. Uma criatura sofre 10d8 de dano de fogo em um teste de resistência falho, ou metade do dano em caso de sucesso. Uma criatura também deve realizar este teste de resistência quando entrar na área da magia pela primeira vez em um turno ou terminar seu turno ali.\n\nA nuvem se move 3 metros diretamente para longe de você, na direção que você escolher no início de cada um dos seus turnos."
  },
  {
    "name": "Curar em Massa",
    "level": 9,
    "classes": [
      "Clérigo"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Uma inundação de energia curativa flui de você para criaturas feridas que o cercam. Você restaura até 700 pontos de vida, divididos como quiser entre qualquer número de criaturas que você pode ver dentro do alcance. As criaturas curadas por este feitiço também são curadas de todas as doenças e de qualquer efeito que as torne cegas ou ensurdecidas. Este feitiço não tem efeito sobre mortos-vivos ou constructoos."
  },
  {
    "name": "Labirinto",
    "level": 8,
    "classes": [
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você bane uma criatura que você pode ver dentro do alcance para um semiplano labiríntico. O alvo permanece lá durante ou até escapar do labirinto.\n\nO alvo pode usar sua ação para tentar escapar. Quando isso acontece, ele faz um teste de Inteligência CD 20. Se tiver sucesso, ele escapa e a magia termina (um minotauro ou demônio goristro obtém sucesso automaticamente).\n\nQuando a magia termina, o alvo reaparece no espaço que deixou ou, se esse espaço estiver ocupado, no espaço desocupado mais próximo."
  },
  {
    "name": "Chuva de Meteoros",
    "level": 9,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "1 mile",
    "duration": "Instantâneo",
    "description": "Orbes ardentes de fogo despencam até a grodada em quatro pontos diferentes que você pode ver dentro do alcance. Cada criatura em uma esfera de 12 metros de raio centrada em cada ponto escolhido deve fazer um Teste de resistência de Destreza. A esfera espalha cantos arodada. Uma criatura sofre 20d6 de dano de fogo e 20d6 de dano de concussão em um teste de resistência falho, ou metade do dano em um teste bem sucedido. Uma criatura na área de mais de uma explosão de fogo é afetada apenas uma vez.\n\nO feitiço danifica objetos na ��rea e incendeia objetos inflamáveis ​​que não estão sendo usados ​​ou carregados."
  },
  {
    "name": "Mente em Branco",
    "level": 8,
    "classes": [
      "Bardo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "24 horas",
    "description": "Até o final da magia, uma criatura voluntária que você tocar é imune a dano psíquico, qualquer efeito que possa sentir suas emoções ou ler seus pensamentos, feitiços de adivinhação e a condição enfeitiçado. O feitiço frustra até mesmo feitiços e feitiços ou efeitos de poder semelhante usados ​​para afetar a mente do alvo ou para obter informações sobre o alvo."
  },
  {
    "name": "Palavra de Poder: Curar",
    "level": 9,
    "classes": [
      "Bardo"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Uma onda de energia curativa envolve a criatura que você toca. O recupera todos os seus pontos de vida. Se a criatura estiver enfeitada, amedrontada, paralisada ou atordoada, o quadro termina. Se a criatura cair, ela poderá usar sua ocorrência para se levantar. Este feitiço não tem efeito sobre mortos-vivos ou constructoos."
  },
  {
    "name": "Palavra de Poder: Matar",
    "level": 9,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você pronuncia uma palavra de poder que pode obrigar uma criatura que você possa ver dentro do alcance a morrer instantaneamente. Se a criatura escolhida tiver 100 pontos de vida ou menos, ela morre. Caso contrário, o feitiço não terá efeito."
  },
  {
    "name": "Palavra de Poder: Atordoar",
    "level": 8,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você fala uma palavra de poder que pode dominar a mente de uma criatura que você possa ver dentro do alcance, deixando-a pasma. Se o alvo tiver 150 pontos de vida ou menos, está atordoado. Caso contrário, o feitiço não terá efeito.\n\nO alvo atordoado deverá realizar um Teste de resistência de Constituição ao final de cada um de seus turnos.  Em um teste de resistência bem-sucedido, esse efeito deslumbrante termina."
  },
  {
    "name": "Muro Prismático",
    "level": 9,
    "classes": [
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "10 minutos",
    "description": "Um plano de luz brilhante e multicolorido forma uma parede vertical opaca - de até 27 metros de comprimento, 9 metros de altura e 1 polegada de espessura - centrada em um ponto que você pode ver dentro do alcance. Alternativamente, você pode moldar a parede em uma esfera de até 9 metros de diâmetro centrada em um ponto escolhido dentro do alcance. A parede permanece no lugar durante todo o período. Se você posicionar a parede de forma que ela passe por um espaço ocupado por uma criatura, o feitiço falha e sua ação e espaço de magia são desperdiçados. \n\n A parede emite luz brilhante até um alcance de 30 metros e luz fraca por mais 30 metros adicionais. Você e as criaturas que você designar no momento em que você conjurar uma magia podem passar e permanecer perto da parede sem danos. Se outra criatura que possa ver a parede se mover para até 6 metros dela ou começar seu turno ali, a criatura deverá ter sucesso em um Teste de Resistência de Constituição ou ficará cega por 1 minuto. \n\n A parede consiste em sete camadas, cada uma com uma cor diferente. Quando uma criatura tenta alcançar ou atravessar a parede, ela o faz, uma camada de cada vez, através de todas as camadas da parede. À medida que passa ou alcança cada camada, a criatura deve fazer um Teste de resistência de Destreza ou será afetada pelas propriedades daquela camada conforme descrito abaixo. \n\n A parede pode ser destruída, também uma camada de cada vez, na ordem do vermelho ao violeta, por meios específicos para cada camada. Uma vez que uma camada é destruída, ela permanece assim durante a duração do feitiço. O campo antimagia não tem efeito na parede e dissipar magia pode afetar apenas a camada violeta. Vermelho A criatura sofre 10d6 de dano de fogo em um teste de resistência falho, ou metade do dano em um teste bem sucedido. Enquanto esta camada estiver no lugar, ataques à distância não mágicos não podem atravessar a parede. A camada pode ser destruída causando pelo menos 25 de dano de frio a ela. Laranja A criatura sofre 10d6 de dano de ácido em um teste de resistência falho, ou metade do dano em um teste bem-sucedido. Enquanto esta camada estiver no lugar, ataques mágicos de longo alcance não poderão atravessar a parede. A camada é destruída por um vento forte. Amarelo A criatura sofre 10d6 dano de raio em um teste de resistência falho, ou metade do dano em um teste bem-sucedido. Esta camada pode ser destruída causando pelo menos 60 de dano de força a ela. Verde A criatura sofre 10d6 de dano de veneno em um teste de resistência falho, ou metade do dano em um teste bem sucedido. Um feitiço de passagem, ou outro feitiço de nível igual ou superior que possa abrir um portal em uma superfície sólida, destrói esta camada. Azul A criatura sofre 10d6 de dano de frio em um teste de resistência de falho, ou metade do dano em um teste bem sucedido. Esta camada pode ser destruída causando pelo menos 25 de dano de fogo a ela.Indigo Em um teste de resistência falho, a criatura fica imobilizada. Deve então fazer um Teste de resistência de Constituição ao final de cada um de seus turnos. Se salvar com sucesso três vezes, a magia termina. Se falhar três vezes no salvamento, ele se transforma permanentemente em pedra e fica sujeito à condição petrificado. Os sucessos e fracassos não precisam ser consecutivos; acompanhe ambos até que a criatura colete três do mesmo tipo. Enquanto esta camada estiver no lugar, os feitiços não podem ser lançados através da parede. A camada é destruída pela luz brilhante emitida por um feitiço luz do dia ou um feitiço similar de nível igual ou superior. Violeta Em um teste de resistência falho, a criatura é cega. Ele deverá então fazer um Teste de resistência de Sabedoria no início do seu próximo turno. Uma defesa bem-sucedida acaba com a cegueira. Se falhar no teste, a criatura é transportada para outro plano à escolha do Mestre e não fica mais cega. (Normalmente, uma criatura que está em um plano que não é seu plano natal é banida para casa, enquanto outras criaturas são geralmente lançadas nos planos Astral ou Etéreo.) Esta camada é destruída por um feitiço dissipar magia ou um feitiço similar de nível igual ou superior que pode encerrar feitiços e efeitos mágicos."
  },
  {
    "name": "Metamorfose",
    "level": 9,
    "classes": [
      "Druida",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 hour",
    "description": "Você assume a forma de uma criatura diferente durante o jogo. A nova forma pode ser de qualquer criatura com nível de desafio igual ao seu nível ou inferior. A criatura não pode ser um constructo ou um morto-vivo, e você deve ter visto esse tipo de criatura pelo menos uma vez. Você se transforma em um exemplo comum dessa criatura, sem nenhum nível de classe ou a característica Conjuração. \n\n Suas estatísticas de jogo são substituídas pelas estatísticas da criatura escolhida, embora você mantenha sua tendência e valores de Inteligência, Sabedoria e Carisma. Você também mantém todas as suas habilidades e proficiências em teste de resistência, além de ganhar as da criatura. Se a criatura tiver a mesma proficiência que você e o bônus listado em suas estatísticas for maior que o seu, use o bônus da criatura no lugar do seu. Você não pode usar nenhuma ação lendária ou ação covil da nova forma. \n\n Você assume os pontos de vida e Sucesso Dice da nova forma. Ao voltar à sua forma normal, você retorna ao número de pontos de vida que tinha antes de se transformar. Se você reverter como resultado de cair para 0 pontos de vida, qualquer dano excessivo será transferido para sua forma normal. Contanto que o dano excessivo não reduza sua forma normal a 0 pontos de vida, você não será nocauteado inconsciente. \n\n Você retém o benefício de quaisquer recursos de sua classe, raça ou outra fonte e pode usá-los, desde que sua nova forma seja fisicamente capaz de fazê-lo. Você não pode usar nenhum sentido especial que possua (por exemplo, visão no escuro), a menos que sua nova forma também tenha esse sentido. Você só pode falar se a criatura puder falar normalmente. \n\n Ao se transformar, você escolhe se seu equipamento cairá na grodada, se fundirá na nova forma ou será usado por ela. Equipamentos gastos funcionam normalmente. O Mestre determina se é prático para a nova forma usar um equipamento, baseado na forma e tamanho da criatura. Seu equipamento não muda de forma ou tamanho para combinar com a nova forma, e qualquer equipamento que a nova forma não possa usar deve cair na grodada ou se fundir em sua nova forma. Equipamentos que se fundem não têm efeito nesse estado. \n\n Durante a duração desta magia, você pode usar sua ação para assumir uma forma diferente seguindo as mesmas restrições e regras da forma original, com uma exceção: se sua nova forma tiver mais pontos de vida que a atual, seus pontos de vida permanecerão com o valor atual."
  },
  {
    "name": "Tempestade de Vingança",
    "level": 9,
    "classes": [
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "Sight",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma nuvem de tempestade agitada se forma, centrada em um ponto que você possa ver e se espalhando por um raio de 318 metros. Relâmpagos brilham na área, trovões estrondosos e ventos fortes rugem. Cada criatura sob a nuvem (não mais que 5.000 pés abaixo da nuvem) quando aparecer deverá fazer um Teste de resistência de Constituição. Em um teste de resistência falho, uma criatura sofre 2d6 de dano sônico e fica ensurdecida por 5 minutos. \n\n A cada rodada que você mantém concentração neste feitiço, a tempestade produz efeitos diferentes no seu turno. \n\nRodada 2: Chuva ácida cai da nuvem. Cada criatura e objeto sob a nuvem sofre 1d6 dano de ácido. \n\nRodada 3: Você invoca seis raios da nuvem para atingir seis criaturas ou objetos de sua escolha sob a nuvem. Uma determinada criatura ou objeto não pode ser atingido por mais de um raio. Uma criatura atingida deve fazer um Teste de resistência de Destreza. A criatura sofre 10d6 dano de raio em um teste de resistência falho, ou metade do dano em caso de sucesso. \n\nRodada 4: Chuvas de granizo caem da nuvem. Cada criatura sob a nuvem sofre 2d6 de dano de concussão. \n\nRodada 5–10: Rajadas e chuva congelante assolam a área sob a nuvem. A área se torna um terreno difícil e está fortemente obscurecida. Cada criatura sofre 1d6 dano de frio. Ataque à distância com armas na área é impossível. O vento e a chuva contam como uma distração severa para fins de manutenção da concentração nos períodos. Finalmente, rajadas de vento forte (variando de 32 a 80 quilômetros por hora) dispersam automaticamente neblina, neblina e fenômenos similares na área, sejam eles mundanos ou mágicos."
  },
  {
    "name": "Telepatia",
    "level": 8,
    "classes": [
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Unlimited",
    "duration": "24 horas",
    "description": "Você cria uma ligação telepática entre você e uma criatura voluntária com a qual você está familiarizado. A criatura pode estar em qualquer lugar do mesmo plano de existência que você. A magia termina se você ou o alvo não estiverem mais no mesmo plano.\n\nAté a magia terminar, você e o alvo podem compartilhar instantaneamente palavras, imagens, sons e outras mensagens sensoriais através do link, e o alvo reconhece você como a criatura com quem está se comunicando. A magia permite que uma criatura com um valor de Inteligência de pelo menos 1 entenda o significado de suas palavras e capte o alcance de quaisquer mensagens sensoriais que você enviar a ela."
  },
  {
    "name": "Explosão Solar",
    "level": 8,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "A luz solar brilhante brilha em um raio de 18 metros centrado em um ponto que você escolher dentro do alcance. Cada criatura sob esse prisma deve fazer um Teste de resistência de Constituição. Em um teste de resistência falho, a criatura sofre 12d6 de dano radiante e fica cega por 1 minuto. Em um teste de resistência bem-sucedido, ele leva metade do dano e não fica cego por esse feitiço. Mortos-vivos e gosmas têm desvantagem nesse teste de resistência.\n\nUma criatura cega por este feitiço faz outro Teste de resistência de Constituição ao final de cada um de seus turnos. Em um teste de resistência bem sucedido, não é mais cego.\n\nEste feitiço dissipa qualquer escuridão em sua área que tenha sido criada por um feitiço."
  },
  {
    "name": "Parar o Tempo",
    "level": 9,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Instantâneo",
    "description": "Você interrompe brevemente o fluxo do tempo para todos, menos para você. Nenhum tempo passa para outras criaturas, enquanto você realiza 1d4 + 1 turnos consecutivos, durante os quais você pode usar ações e se mover normalmente.\n\nEsta magia termina se uma das ações que você usa durante este período, ou qualquer efeito que Você cria durante este período, afetar uma criatura que não seja você ou um objeto sendo usado ou carregado por alguém que não seja você. Além disso, a magia termina se você se mover para um local a mais de 300 metros do local onde você a lançou."
  },
  {
    "name": "Polimorfismo Verdadeiro",
    "level": 9,
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Escolha uma criatura ou objeto não mágico que você possa ver dentro do alcance. Você transforma a criatura em uma criatura diferente, a criatura em um objeto não mágico ou o objeto em uma criatura (o objeto não deve ser usado nem carregado por outra criatura). A magia dura pela duração, ou até que o alvo caia para 0 pontos de vida ou morra. Se você se concentrar neste feitiço por toda a duração, o feitiço durará até ser dissipado. \n\n Este feitiço não tem efeito em um metamorfo ou criatura com 0 pontos de vida. Uma incriatura voluntária pode fazer um Teste de resistência de Sabedoria, e se tiver sucesso, não é afetado por este feitiço. \n\nCriatura em Criatura: Se você transformar uma criatura em outro tipo de criatura, a nova forma pode ser qualquer tipo que você escolher cujo nível de desafio seja igual ou menor que o do alvo (ou seu nível, se o alvo não tiver um nível de desafio). As estatísticas de jogo do alvo, incluindo pontuações de habilidade mental, são substituídas pelas estatísticas da nova forma. Ele mantém seu alinhamento e personalidade. \n\n O alvo assume os pontos de vida de sua nova forma, e quando volta à sua forma normal, a criatura retorna ao número de pontos de vida que tinha antes de se transformar. Se reverter como resultado de cair para 0 pontos de vida, qualquer dano excessivo será transferido para sua forma normal. Contanto que o dano excessivo não reduza a forma normal da criatura a 0 pontos de vida, ela não será derrubada inconsciente. \n\n A criatura é limitada nas ações que pode realizar pela natureza de sua nova forma e não pode falar, lançar feitiços ou executar qualquer outra ação que exija mãos ou fala, a menos que sua nova forma seja capaz de tais ações. \n\n O equipamento do alvo se funde na nova forma. A criatura não pode ativar, usar, empunhar ou de qualquer outra forma se beneficiar de qualquer um de seus equipamentos. \n\nObjeto em Criatura: Você pode transformar um objeto em qualquer tipo de criatura, desde que o tamanho da criatura não seja maior que o tamanho do objeto e o nível de desafio da criatura seja 9 ou inferior. A criatura é amigável com você e seus companheiros. Ele atua em cada um dos seus turnos. Você decide qual ação será necessária e como ela se move. O Mestre possui as estatísticas da criatura e resolve todas as suas ações e movimentos. \n\n Se a magia se tornar permanente, você não controlará mais a criatura. Pode permanecer amigável com você, dependendo de como você o tratou. \n\nCriação em Objeto: Se você transformar uma criatura em um objeto, ela se transforma junto com tudo o que estiver vestindo e carregando naquela forma, desde que o tamanho do objeto não seja maior que o tamanho da criatura. As estatísticas da criatura tornam-se as do objeto, e a criatura não tem memória do tempo passado nesta forma, depois que a magia termina e ela retorna à sua forma normal."
  },
  {
    "name": "Tsunami",
    "level": 8,
    "classes": [
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "1 minute",
    "range": "Sight",
    "duration": "Concentração, up to 6 rounds",
    "description": "Uma parede de água surge em um ponto que você escolhe dentro do alcance. Você pode fazer a parede com até 90 metros de comprimento, 90 metros de altura e 15 metros de espessura. A parede dura enquanto durar.\n\nQuando a parede aparecer, cada criatura dentro de sua área deverá fazer um Teste de resistência de Força. Em um teste de resistência falho, uma criatura sofre 6d10 dano de concussão, ou metade do dano em um teste de resistência bem-sucedido.\n\nNo início de cada um dos seus turnos após o aparecimento da parede, a parede, junto com quaisquer criaturas nela contidas, se move 15 metros para longe de você. Qualquer criatura Enorme ou menor dentro da muralha ou em cujo espaço a muralha entra quando se move deve ter sucesso em um Teste de resistência de Força ou sofrer 5d10 dano de concussão. Uma criatura pode sofrer esse dano apenas uma vez por rodada. No final do turno, a altura da muralha é reduzida em 15 metros, e o dano que as criaturas recebem do feitiço nas rodadas subsequentes é reduzido em 1d10. Quando a parede atinge 0 metro de altura, a magia termina.\n\nUma criatura presa na parede pode se mover nadando. Porém, por causa da força da onda, a criatura deve fazer um teste bem-sucedido de Força (Atletismo) contra seu CD de resistência de magia para poder se mover. Se falhar no teste, ele não poderá se mover. Uma criatura que sai da área cai nas mãos da grodada."
  },
  {
    "name": "Ressurreição Verdadeira",
    "level": 9,
    "classes": [
      "Clérigo",
      "Druida"
    ],
    "school": "Necromancia",
    "castingTime": "1 hour",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você toca uma criatura que não está morta há mais de 200 anos e que morreu por qualquer motivo, exceto velhice. Se a alma da criatura for livre e voluntária, a criatura será restaurada à vida com todos os seus pontos de vida.\n\nEste feitiço fecha todas as feridas, neutraliza qualquer veneno, cura todas as doenças e elimina qualquer maldição que afetasse a criatura quando ela morresse. O feitiço substitui órgãos e membros danificados ou com defeito.\n\nO feitiço pode até fornecer um novo corpo se o original não existir mais, caso em que você deverá falar o nome da criatura. A criatura então aparece em um espaço desocupado à sua escolha a até 3 metros de você."
  },
  {
    "name": "Pesadelo",
    "level": 9,
    "classes": [
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Baseando-se nos medos mais profundos de um grupo de criaturas, Você cria criaturas ilusórias em suas mentes, visíveis apenas para elas. Cada criatura em uma esfera de 9 metros de raio centrada em um ponto de sua escolha dentro do alcance deve fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, uma criatura fica amedrontada durante todo o tempo. A ilusão invoca os medos mais profundos da criatura, manifestando os seus piores pesadelos como uma ameaça implacável. No início de cada turno da criatura amedrontada, ela deve ter sucesso em um Teste de resistência de Sabedoria ou sofrer 4d10 de dano psíquico. Em um teste de resistência bem-sucedido, a magia termina para aquela criatura."
  },
  {
    "name": "Desejo",
    "level": 9,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Instantâneo",
    "description": "Desejo é o feitiço mais poderoso que uma criatura mortal pode lançar. Simplesmente falando em voz alta, você pode alterar os próprios fundamentos da realidade de acordo com seus desejos.\n\nO uso básico desta magia é duplicar qualquer outra magia de 8º nível ou inferior. Você não precisa atender a nenhum requisito desse feitiço, incluindo componentes caros. O feitiço simplesmente entra em vigor. Você cria um objeto de valor de até 25.000 po que não seja um item mágico. O objeto não pode ter mais de 300 pés em qualquer dimensão e aparece em um espaço desocupado que você possa ver na grodada. Você permite que até vinte criaturas que você possa ver recuperem todos os pontos de vida e encerre todos os efeitos sobre elas descritos no feitiço de restauração maior. Você concede até dez criaturas que você possa ver resistência a um tipo de dano que você escolher. Por exemplo, você pode tornar você e todos os seus companheiros imunes ao ataque de drenagem de vida de um lich. Você desfaz um único evento recente forçando uma nova rolagem de qualquer rolagem feita na última rodada (incluindo seu último turno). A realidade se remodela para acomodar o novo resultado. Por exemplo, um feitiço de desejo pode desfazer um salvamento bem-sucedido de um oponente, um sucesso crítico de um inimigo ou um salvamento fracassado de um amigo. Você pode forçar que a rerrolagem seja feita com vantagem ou desvantagem, podendo escolher entre usar a rerrolagem ou a rolagem original. Você pode conseguir algo além do escopo dos exemplos acima. Declare seu desejo ao Mestre com a maior precisão possível. O Mestre tem grande liberdade para decidir o que ocorre em tal caso; quanto maior o desejo, maior a probabilidade de algo dar errado. Este feitiço pode simplesmente falhar, o efeito que você deseja pode ser alcançado apenas parcialmente ou você pode sofrer alguma consequência imprevista como resultado de como formulou o desejo. Por exemplo, desejar que um vilão estivesse morto pode impulsioná-lo para um período em que esse vilão não esteja mais vivo, removendo-o efetivamente do jogo. Da mesma forma, desejar um item mágico ou artefato lendário pode transportá-lo instantaneamente para a presença do atual proprietário do item.\n\nO estresse de lançar esta magia para produzir qualquer efeito que não seja duplicar outra magia enfraquece você. Depois de suportar esse estresse, cada vez que você conjurar uma magia até terminar um descanso longo, você sofre 1d10 de dano necrótico por nível daquela magia. Este dano não pode ser reduzido ou evitado de forma alguma. Além disso, sua Força cai para 3, se ainda não for 3 ou menos, por 2d4 dias. Para cada um dos dias que você passa descansando e não fazendo nada além de atividades leves, o tempo restante de recuperação diminui em 2 dias. Finalmente, há 33% de chance de você nunca mais conseguir realizar o desejo se sofrer esse estresse."
  },
  {
    "name": "Convocar Celestial",
    "level": 7,
    "classes": [
      "Clérigo"
    ],
    "school": "Conjuração",
    "castingTime": "1 minute",
    "range": "27 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você convoca um celestial com classificação de desafio 4 ou inferior, que aparece em um espaço desocupado que você pode ver dentro do alcance. O celestial desaparece quando cai para 0 pontos de vida ou quando a magia termina.\n\nO Celestial é amigável com você e seus companheiros durante todo o tempo. Role a iniciativa para o celestial, que tem seus próprios turnos. Ele obedece a quaisquer comandos verbais que você emitir (nenhuma ação exigida por você), desde que eles não violem seu alinhamento. Se você não der nenhum comando ao celestial, ele se defenderá de criaturas hostis, mas de outra forma não tomará nenhuma atitude.\n\nO Mestre tem as estatísticas do celestial."
  },
  {
    "name": "Bola de Fogo de Explosão Retardada",
    "level": 7,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Um feixe de luz amarela pisca do dedo que aponta e depois se condensa para permanecer em um ponto escolhido dentro do alcance como uma conta brilhante durante todo o tempo. Quando a magia termina, seja porque sua concentração foi quebrada ou porque você decidiu encerrá-la, a conta floresce com um rugido baixo em uma explosão de chama que espalha cantos arodada. Cada criatura em uma esfera de 6 metros de raio centrada nesse ponto deve fazer um Teste de resistência de Destreza. Uma criatura sofre dano de fogo igual ao dano total acumulado em um teste de resistência falho, ou metade do dano em caso de sucesso.\n\nO dano base do feitiço é 12d6. Se no final do seu turno a conta ainda não tiver detonado, o dano aumenta em 1d6.\n\nSe a conta brilhante for tocada antes do intervalo expirar, a criatura que a tocar deverá fazer um Teste de resistência de Destreza. Em um teste de resistência falho, a magia termina imediatamente, fazendo a conta explodir em chamas. Em um teste de resistência bem-sucedido, a criatura pode lançar a conta a até 12 metros de altura. Quando atinge uma criatura ou objeto sólido, a magia termina e a conta explode.\n\nO dano de fogo dispara objetos na área e incendeia objetos inflamáveis ​​que não estão sendo usados ​​ou carregados."
  },
  {
    "name": "Porta Dimensional",
    "level": 4,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "150 metros",
    "duration": "Instantâneo",
    "description": "Você se teletransporta de sua localização atual para qualquer outro local dentro do alcance. Você chega exatamente ao local desejado. Pode ser um lugar que você possa ver, que você possa visualizar ou que você possa descrever declarando a distância e a direção, como 200 pés em linha reta para baixo ou para cima em direção noroeste em um ângulo de 45 graus, 300 pés.\n\nVocê pode trazer objetos desde que o peso deles não exceda o que você pode carregar. Você também pode trazer uma criatura voluntária do seu tamanho ou menor que carregue equipamentos até sua capacidade de carga. A criatura deve estar a até 1,5 metro de você quando você conjura essa magia.\n\nSe você chegar em um local já ocupado por um objeto ou criatura, você e qualquer criatura viajando com você sofrerão 4d6 de dano de força cada, e a magia não conseguirá teletransportá-lo."
  },
  {
    "name": "Palavra Divina",
    "level": 7,
    "classes": [
      "Clérigo"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Você pronuncia uma palavra divina, imbuída do poder que moldou o mundo no início da criação. Escolha qualquer número de criaturas que você possa ver dentro do alcance. Cada criatura que puder te ouvir deverá fazer um Teste de resistência de Carisma. Em um teste de resistência falho, uma criatura sofre um efeito com base em seus pontos de vida atuais: 50 pontos de vida ou menos: ensurdecido por 1 minuto40 pontos de vida ou menos: ensurdecido e cego por 10 minutos30 pontos de vida ou menos: cego, ensurdecido e atordoado por 1 hora20 pontos de vida ou menos: morto instantaneamente Independentemente de seus pontos de vida atuais, um celestial, um elemental, um feérico ou um inimigo que falhar em seu salvamento é forçado a voltar ao seu plano de origem (se ainda não estiver lá) e não pode retornar ao seu plano atual por 24 horas por qualquer meio que não seja um feitiço de desejo."
  },
  {
    "name": "Etereidade",
    "level": 7,
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Até 8 horas",
    "description": "Você entra nas regiões fronteiriças do Plano Etéreo, na área onde ele se sobrepõe ao seu plano atual. Você permanece na Fronteira Etérea enquanto durar ou até usar sua ação para desfalhar o feitiço. Durante esse tempo, você pode se mover em qualquer direção. Se você subir ou descer, cada metro de movimento custará um metro extra. Você pode ver e ouvir o avião de onde veio, mas tudo lá parece cinza e você não consegue ver nada a mais de 18 metros de distância.\n\nEnquanto estiver no Plano Etéreo, você só pode afetar e ser afetado por outras criaturas daquele plano. Criaturas que não estão no Plano Etéreo não podem perceber você e não podem interagir com você, a menos que uma habilidade especial ou magia lhes dê a habilidade para fazer isso.\n\nVocê ignora todos os objetos e efeitos que não estão no Plano Etéreo, permitindo que você se mova através de objetos que você percebe no plano de origem.\n\nQuando a magia termina, você retorna imediatamente ao plano de origem no local que ocupa atualmente.  Se você ocupar o mesmo lugar que um objeto sólido ou criatura quando isso acontecer, você será imediatamente desviado para o espaço desocupado mais próximo que você possa ocupar e sofrerá dano de força igual ao dobro do número de pés que você moveu.\n\nEste feitiço não tem efeito se você o conjurar enquanto estiver no Plano Etéreo ou em um plano que não o faça fronteira, como um dos Planos Exteriores."
  },
  {
    "name": "Dedo da Morte",
    "level": 7,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você envia energia negativa percorrendo uma criatura que você pode ver dentro do alcance, causando-lhe uma dor lancinante. O alvo deverá fazer um Teste de resistência de Constituição. São necessários 7d8 + 30 de dano necrótico em um teste de resistência falho, ou metade do dano em um teste bem-sucedido.\n\nUm humanóide morto por esta magia surge no início do seu próximo turno como um zumbi que está permanentemente sob seu comando, seguindo suas ordens verbais da melhor maneira possível."
  },
  {
    "name": "Tempestade de Fogo",
    "level": 7,
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "Uma tempestade composta por camadas de chamas crepitantes aparece em um local escolhido dentro do alcance. A área da tempestade consiste em até dez cubos de 3 metros, que você pode organizar como desejar. Cada cubo deve ter pelo menos uma face adjacente à face de outro cubo. Cada criatura da área deverá fazer um Teste de resistência de Destreza. São necessários 7d10 dano de fogo em um teste de resistência falho, ou metade do dano em um teste bem sucedido.\n\nO dano de fogo incendeia objetos na área e incendeia objetos inflamáveis ​​que não estão sendo usados ​​ou carregados. Se você escolher, a vida das plantas na área não será afetada por esta magia."
  },
  {
    "name": "Gaiola de Força",
    "level": 7,
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "30 metros",
    "duration": "1 hora",
    "description": "Uma prisão imóvel, invisível e em forma de cubo composta de força mágica surge em uma área que você escolhe dentro do alcance. A prisão pode ser uma jaula ou uma caixa sólida, conforme você escolher.\n\nUma prisão em forma de gaiola pode ter até 6 metros de lado e é feita de barras de 1/2 polegada de diâmetro espaçadas de 1/2 polegada.\n\nUma prisão em forma de caixa pode ter até 3 metros de tamanho, criando uma barreira sólida que impede qualquer matéria de passar por ela e bloqueia quaisquer feitiços lançados dentro ou fora da área.\n\nQuando você conjura uma magia, qualquer criatura que esteja completamente dentro da área da jaula fica presa. Criaturas apenas parcialmente dentro da área, ou aquelas grandes demais para caber dentro da área, são empurradas para longe do centro da área até ficarem completamente fora da área.\n\nUma criatura dentro da jaula não pode sair dela por meios não mágicos. Se a criatura tentar usar teletransporte ou viagem interplanar para sair da jaula, ela deverá primeiro fazer um Teste de resistência de Carisma. Se obtiver sucesso, a criatura pode usar essa magia para sair da jaula. Em caso de falha, a criatura não consegue sair da jaula e desperdiça o uso da magia ou efeito. A jaula também se estende até o Plano Etéreo, bloqueando a viagem etérea.\n\nEste feitiço não pode ser dissipado por dissipar magia."
  },
  {
    "name": "Miragem Arcana",
    "level": 7,
    "classes": [
      "Bardo",
      "Druida",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "10 minutes",
    "range": "Sight",
    "duration": "10 dias",
    "description": "Você faz com que um terreno em uma área de até 1,5 milha quadrada tenha aparência, som, cheiro e até mesmo pareça algum outro tipo de terreno. A forma geral do terreno permanece a mesma, entretanto. Campos abertos ou estradas podem ser transformados em pântanos, colinas, fendas ou outros terrenos difíceis ou intransitáveis. Um lago pode parecer um prado gramado, um precipício como uma encosta, ou um barranco coberto de pedras como uma estrada larga e lisa.\n\nDa mesma forma, você pode alterar a aparência das estruturas e adicioná-las onde não houver nenhuma. O feitiço não disfarça, oculta ou acrescenta criaturas.\n\nA ilusão inclui elementos sonoros, visuais, táteis e olfativos, de modo que pode transformar uma grodada clara em terreno difícil (ou vice-versa) ou impedir o movimento pela área. Qualquer pedaço do terreno ilusório (como uma pedra ou um pedaço de pau) removido da área da magia desaparece imediatamente.\n\nCriaturas com visão verdadeira podem ver através da ilusão a verdadeira forma do terreno; entretanto, todos os outros elementos da ilusão permanecem, portanto, embora a criatura esteja ciente da presen��a da ilusão, a criatura ainda pode interagir fisicamente com a ilusão."
  },
  {
    "name": "Aspersão Prismática",
    "level": 7,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (60-foot cone)",
    "duration": "Instantâneo",
    "description": "Oito raios de luz multicoloridos brilham em sua mão. Cada raio tem uma cor diferente e tem um poder e propósito diferentes. Cada criatura num cone de 18 metros deverá fazer um Teste de resistência de Destreza. Para cada alvo, jogue um d8 para determinar qual raio colorido o afeta. Vermelho: O alvo sofre 10d6 de dano de fogo em um teste de resistência falho, ou metade do dano em um teste bem-sucedido. Laranja: O alvo sofre 10d6 dano de ácido em um teste de resistência falho, ou metade do dano em um teste de resistência falho, ou metade do dano em um teste de resistência falho, ou metade do dano em um teste de resistência falho, ou metade do dano em um teste de resistência falho, ou metade do dano em um teste de resistência falho, ou metade do dano em um teste de resistência falho, ou metade do dano em um teste de resistência falho, ou metade do dano. em um sucesso.Indigo: Em um teste de resistência falho, o alvo fica imobilizado. Deve então fazer um Teste de resistência de Constituição ao final de cada um de seus turnos. Se salvar com sucesso três vezes, a magia termina. Se falhar três vezes no salvamento, ele se transforma permanentemente em pedra e fica sujeito à condição petrificado. Os sucessos e fracassos não precisam ser consecutivos; acompanhe ambos até que o alvo colete uma trinca. Violeta: Em um teste de resistência falho, o alvo é cego. Ele deverá então fazer um Teste de resistência de Sabedoria no início do seu próximo turno. Uma defesa bem-sucedida acaba com a cegueira. Se falhar no teste, a criatura é transportada para outro plano de existência à escolha do Mestre e não fica mais cega. (Normalmente, uma criatura que está em um plano que não é seu plano natal é banida para casa, enquanto outras criaturas são geralmente lançadas nos planos Astral ou Etéreo.) Especial: O alvo é atingido por dois raios. Role mais duas vezes, rolando novamente qualquer 8."
  },
  {
    "name": "Projetar Imagem",
    "level": 7,
    "classes": [
      "Bardo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "500 miles",
    "duration": "Concentração, up to 1 day",
    "description": "Você cria uma cópia ilusória de si mesmo que dura o tempo todo. A cópia pode aparecer em qualquer local dentro do alcance que você já tenha visto, independentemente dos obstáculos intervenientes. A ilusão parece e soa como você, mas é intangível. Se a ilusão sofrer algum dano, ela desaparece e a magia termina.\n\nVocê pode usar sua ação para mover essa ilusão até o dobro da sua velocidade e fazê-la gesticular, falar e se comportar da maneira que você escolher. Ele imita seus maneirismos perfeitamente.\n\nQue você possa ver através de seus olhos e ouvir através de seus ouvidos como se estivesse em seu espaço. No seu turno, como bônus de ação, você pode passar do uso dos sentidos para o uso dos seus próprios sentidos ou vice-versa. Enquanto você usa seus sentidos, você fica cego e ensurdecido em relação aos seus próprios arredores.\n\nA interação física com a imagem revela que ela é uma ilusão, pois coisas podem passar por ela. Uma criatura que use sua ação para examinar a imagem pode determinar que se trata de uma ilusão com um teste bem-sucedido de Inteligência (Investigação) contra seu CD de resistência de magia. Se uma criatura discernir a ilusão pelo que ela é, a criatura poderá ver através da imagem, e qualquer ruído que ela fizer soará vazio para a criatura."
  },
  {
    "name": "Mudança Planar",
    "level": 7,
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você e até oito criaturas voluntárias que dão as mãos em um círculo são transportados para um plano de existência diferente. Você pode especificar um destino alvo em termos gerais, como a Cidade de Bronze no Plano Elemental do Fogo ou o palácio de Dispater no segundo nível dos Nove Infernos, e você aparece nesse destino ou próximo a ele. Se você está tentando chegar à Cidade de Bronze, por exemplo, você pode chegar pela Rua de Aço, antes do Portão das Cinzas, ou olhar a cidade do outro lado do Mar de Fogo, a critério do Mestre.\n\nAlternativamente, se você conhece a sequência de sigilos de um círculo de teletransporte em outro plano de existência, esta magia pode levá-lo a esse círculo. Se o círculo de teletransporte for muito pequeno para conter todas as criaturas que você transportou, elas aparecerão nos espaços desocupados mais próximos do círculo.\n\nVocê pode usar este feitiço para banir uma incriatura voluntária para outro plano.  Escolha uma criatura ao seu alcance e faça um ataque de magia corpo a corpo contra ela. Sem sucesso, a criatura deverá fazer um Teste de resistência de Carisma. Se a criatura falhar neste teste, ela será transportada para um local aleatório no plano de existência que você especificar. Uma criatura assim transportada deve encontrar seu próprio caminho de volta ao seu atual plano de existência."
  },
  {
    "name": "Regenerar",
    "level": 7,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 minute",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Você toca uma criatura e estimula sua capacidade natural de cura. O alvo recupera 4d8 + 15 pontos de vida. Durante a magia, o alvo recupera 1 ponto de vida no início de cada um de seus turnos (10 pontos de vida a cada minuto).\n\nOs membros decepados do corpo do alvo (dedos, pernas, cauda e assim por diante), se houver, são restaurados após 2 minutos. Se você tiver a parte cortada e segurá-la contra o coto, o feitiço faz com que o membro se junte instantaneamente ao coto."
  },
  {
    "name": "Ressurreição",
    "level": 7,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ],
    "school": "Necromancia",
    "castingTime": "1 hour",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você toca uma criatura morta que não morreu há mais de um século, que não morreu de velhice e que não é morto-vivo. Se a sua alma for livre e disposta, o alvo volta à vida com todos os seus pontos de vida.\n\nEste feitiço neutraliza quaisquer venenos e cura doenças normais que afligiam a criatura quando ela morria. No entanto, não remove doenças mágicas, maldições e coisas do gênero; se tais efeitos não forem removidos antes de lançar o feitiço, eles afligirão o alvo quando ele retornar à vida.\n\nEste feitiço fecha todas as feridas mortais e restaura quaisquer partes do corpo defeituosas.\n\nVoltar dos mortos é uma provação. O alvo sofre uma penalidade de -4 em todas as jogadas de ataques, testes de resistência e testes de habilidades. Cada vez que o alvo termina um descanso longo, a penalidade é reduzida em 1 até desaparecer.\n\nLançar este feitiço para restaurar a vida de uma criatura que está morta há um ano ou mais é muito difícil para você. Até terminar um descanso longo, você não poderá lançar feitiços novamente e terá manobras de ataque, teste de habilidades e testes de resistência."
  },
  {
    "name": "Inverter a Gravidade",
    "level": 7,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "30 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Este feitiço reverte a gravidade em um cilindro de 15 metros de raio e 30 metros de altura centrado em um ponto dentro do alcance. Todas as criaturas e objetos que não estão de alguma forma ancorados na grodada da área caem para cima e alcançam o topo da área Quando você conjura essa magia. Uma criatura pode fazer um Teste de resistência de Destreza para agarrar-se a um objeto fixo que possa alcançar, evitando assim a queda.\n\nSe algum objeto sólido (como um teto) for encontrado nesta queda, os objetos e criaturas em queda o atingirão exatamente como fariam durante uma queda normal. Se um objeto ou criatura chegar ao topo da área sem atingir nada, ele permanecerá lá, oscilando levemente, durante todo o tempo.\n\nAo final da duração, os objetos e criaturas afetados caem novamente."
  },
  {
    "name": "Sequestrar",
    "level": 7,
    "classes": [
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Até ser dissipada",
    "description": "Por meio deste feitiço, uma criatura voluntária ou um objeto pode ser escondido, protegido da detecção durante todo o tempo. Quando você conjura uma magia e toca o alvo, ele se torna invisível e não pode ser alvo de feitiços de adivinhação ou percebido através de sensores de vidência criados por feitiços de adivinhação.\n\nSe o alvo for uma criatura, ele entra em estado de animação suspensa. O tempo deixa de fluir para ele e ele não envelhece.\n\nVocê pode definir uma condição para que o feitiço termine mais cedo. A condição pode ser qualquer que você escolher, mas deve ocorrer ou ser visível dentro de 1,5 milha do alvo.  Os exemplos incluem após 1.000 anos ou quando o tarrasque despertar. Este feitiço também termina se o alvo sofrer algum dano."
  },
  {
    "name": "Simulacro",
    "level": 7,
    "classes": [
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "12 hours",
    "range": "Toque",
    "duration": "Até ser dissipada",
    "description": "Você molda uma duplicata ilusória de um besta ou humanoide que esteja dentro do alcance durante todo o tempo de lançamento da magia. A duplicata é uma criatura, parcialmente real e formada de gelo ou neve, e pode realizar ações e ser afetada como uma criatura normal. Parece igual ao original, mas tem metade do ponto de vida máximo da criatura e é formado sem nenhum equipamento. Caso contrário, a ilusão utiliza todas as estatísticas da criatura que duplica.\n\nO simulacro é amigável com você e com as criaturas que você designa. Ele obedece aos seus comandos falados, movendo-se e agindo de acordo com seus desejos e agindo no seu turno em combate. O simulacro não possui a habilidade de aprender ou se tornar mais poderoso, então ele nunca aumenta seu nível ou outras habilidades, nem pode recuperar espaços de magia gastos.\n\nSe o simulacro estiver danificado, você pode consertá-lo em um laboratório alquímico, usando ervas e minerais raros no valor de 100gp por ponto de vida que ele recupera. O simulacro dura até cair para 0 pontos de vida, momento em que reverte para neve e derrete instantaneamente.\n\nSe você lançar este feitiço novamente, quaisquer duplicatas atualmente ativas que você criou com este feitiço serão destruídas instantaneamente."
  },
  {
    "name": "Símbolo",
    "level": 7,
    "classes": [
      "Bardo",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 minute",
    "range": "Toque",
    "duration": "Até ser dissipada ou acionada",
    "description": "Quando você conjura essa magia, você inscreve um glifo prejudicial em uma superfície (como uma seção do chão, uma parede ou uma mesa) ou dentro de um objeto que pode ser fechado para ocultar o glifo (como um livro, um pergaminho ou um baú de tesouro). Se você escolher uma superfície, o glifo poderá cobrir uma área da superfície com no máximo 3 metros de diâmetro. Se você escolher um objeto, esse objeto deverá permanecer em seu lugar; se o objeto for movido mais de 3 metros de onde você lançou este feitiço, o glifo será quebrado e a magia terminará sem ser acionada. \n\n O glifo é quase invisível, exigindo um teste de Inteligência (Investigação) em seu CD de resistência de magia para encontrá-lo. \n\n Você decide o que aciona o glifo quando você conjura uma magia. Para glifos inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou pisar no glifo, remover outro objeto que o cobre, aproximar-se a uma certa distância dele ou manipular o objeto que o contém. Para glifos inscritos em um objeto, os gatilhos mais comuns são abrir o objeto, aproximar-se a uma certa distância dele ou ver ou ler o glifo. \n\n Você pode refinar ainda mais o gatilho para que o feitiço seja ativado apenas sob certas circunstâncias ou de acordo com as características físicas da criatura (como altura ou peso) ou tipo físico (por exemplo, a proteção pode ser configurada para afetar bruxas ou metamorfos). Você também pode especificar criaturas que não acionem o glifo, como aquelas que dizem uma determinada senha. \n\n Ao inscrever o glifo, escolha uma das opções abaixo para seu efeito. Uma vez acionado, o glifo brilha, preenchendo uma esfera de raio de 18 metros com luz fraca por 10 minutos, após o qual a magia termina. Cada criatura na esfera quando o glifo é ativado é alvo de seu efeito, assim como uma criatura que entra na esfera pela primeira vez em um turno ou termina seu turno lá. \n\nMorte: Cada alvo deve fazer um Teste de resistência de Constituição, levando 10d10 dano necrótico em um teste de resistência falho, ou metade do dano em um teste de resistência bem sucedido. \n\nDiscórdia: Cada alvo deverá fazer um Teste de resistência de Constituição. Em um teste de resistência falho, um alvo briga e discute com outras criaturas por 1 minuto. Durante esse período, ele é incapaz de comunicação significativa e tem manobras de ataque e teste de habilidades. \n\nMedo: Cada alvo deve fazer um Teste de resistência de Sabedoria e fica amedrontado por 1 minuto em um teste de resistência falho. Enquanto estiver amedrontado, o alvo larga tudo o que estiver segurando e deve se afastar pelo menos 9 metros do glifo em cada um de seus turnos, se puder. \n\nDesesperança: Cada alvo deve fazer um Teste de resistência de Carisma. Em um teste de resistência falho, o alvo fica desesperado por 1 minuto. Durante este tempo, ele não pode atacar ou atingir qualquer criatura com habilidades prejudiciais, feitiços ou outros efeitos mágicos. \n\nInsanidade: Cada alvo deve fazer um Teste de resistência de Inteligência. Em um teste de resistência falho, o alvo fica louco por 1 minuto. Uma criatura insana não consegue realizar ações, não consegue entender o que outras criaturas dizem, não sabe ler e fala apenas coisas sem sentido. O GM controla seu movimento, que é errático. \n\nDor: Cada alvo deve fazer um Teste de resistência de Constituição e fica incapacitado com dor excruciante por 1 minuto em um teste de resistência de falho. \n\nSono: Cada alvo deve fazer um Teste de resistência de Sabedoria e cai inconsciente por 10 minutos em um teste de resistência falho. Uma criatura desperta se sofrer dano ou se alguém usar uma ação para sacudi-la ou esbofeteá-la. \n\nImpressionante: Cada alvo deve fazer um Teste de resistência de Sabedoria e fica atordoado por 1 minuto em um teste de resistência falho."
  },
  {
    "name": "Teletransporte",
    "level": 7,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "3 metros",
    "duration": "Instantâneo",
    "description": "Este feitiço transporta instantaneamente você e até oito criaturas voluntárias de sua escolha que você possa ver dentro do alcance, ou um único objeto que você possa ver dentro do alcance, para um destino que você selecionar. Se você atingir um objeto, ele deve caber inteiramente dentro de um cubo de 3 metros, e não pode ser segurado ou carregado por uma criação voluntária. \n\n O destino que você escolher deve ser conhecido por você e deve estar no mesmo plano de existência que você. Sua familiaridade com o destino determina se você chegará lá com sucesso. O Mestre rola d100 e consulta a tabela. FamiliaridadeAcidenteÁrea semelhanteOff AlvoOn AlvoCírculo permanente---01-100Objeto associado---01-100Muito familiar01-0506-1314-2425-100Visto casualmente01-3334-4344-5354-100Visualizado uma vez01-4344-5354-7374-100Descrição01-4344-5354-7374-100Destino falso01-5051-100--Familiaridade: Círculo permanente significa um círculo de teletransporte permanente cuja sequência de sigilo você conhece.\n Objeto associado significa que você possui um objeto retirado do destino desejado nos últimos seis meses, como um livro da biblioteca de um mago, roupa de cama de uma suíte real ou um pedaço de mármore da tumba secreta de um lich. \n Muito familiar é um lugar onde você esteve com frequência, um lugar que você estudou cuidadosamente ou um lugar que você pode ver quando conjura uma magia.\nVisto casualmente é algum lugar que você viu mais de uma vez, mas com o qual não está muito familiarizado.\nVisto uma vez é um lugar que você viu uma vez, possivelmente usando magia.\nDescrição é um lugar cuja localização e aparência você conhece através da descrição de outra pessoa, talvez de um mapa.\nO falso destino é um lugar que não existe. Talvez você tenha tentado visualizar o santuário de um inimigo, mas em vez disso viu uma ilusão, ou está tentando se teletransportar para um local familiar que não existe mais. \n\nNo Alvo: Você e seu grupo (ou o objeto alvo) aparecem onde quiserem. \n\nOff Alvo: Você e seu grupo (ou o objeto alvo) aparecem a uma distância aleatória do destino em uma direção aleatória. A distância do alvo é 1d10 × 1d10 por cento da distância que deveria ser percorrida. Por exemplo, se você tentasse viajar 190 quilômetros, pousasse no alvo e obtivesse um 5 e 3 nos dois d10s, então você estaria 15% fora do alvo, ou 18 quilômetros. O Mestre determina a direção do alvo aleatoriamente rolando um d8 e designando 1 como norte, 2 como nordeste, 3 como leste e assim por diante, arodada nos pontos cardeais. Se você estivesse se teletransportando para uma cidade costeira e acabasse a 29 quilômetros no mar, poderia estar em apuros. \n\nÁrea semelhante: Você e seu grupo (ou o objeto alvo) acabam em uma área diferente que é visual ou tematicamente semelhante à área alvo. Se você estiver indo para o seu laboratório doméstico, por exemplo, você pode acabar no laboratório de outro mago ou em uma loja de suprimentos alquímicos que tenha muitas das mesmas ferramentas e implementos do seu laboratório. Geralmente, você aparece no local mais próximo, mas como o feitiço não tem limite de alcance, você pode acabar em qualquer lugar do avião. \n\nAcidente: A magia imprevisível do feitiço resulta em uma jornada difícil. Cada criatura teletransportada (ou objeto alvo) sofre 3d10 de dano de força, e o Mestre rola novamente na mesa para ver onde você vai parar (múltiplos acidentes podem ocorrer, causando dano a cada vez)."
  },
  {
    "name": "Sugestão",
    "level": 2,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 8 hours",
    "description": "Você sugere um curso de atividade (limitado a uma frase ou duas) e influencia magicamente uma criatura que você pode ver dentro do alcance que pode ouvi-lo e compreendê-lo. Criaturas que não podem ser feitiçadas ficam imunes a esse efeito. A sugestão deve ser formulada de forma a fazer com que o curso da ação pareça razoável. Pedir à criatura que se esfaqueie, se jogue em uma lança, se imole ou faça algum outro ato obviamente prejudicial encerra o feitiço.\n\nO alvo deve fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, ele prossegue o curso de ação que você descreveu da melhor maneira possível. O curso de ação sugerido pode continuar durante todo o período. Se a atividade sugerida puder ser concluída em menos tempo, a magia termina quando o sujeito terminar o que foi solicitado.\n\nVocê também pode especificar condições que desencadearão uma atividade especial durante a duração. Por exemplo, você pode sugerir que um cavaleiro dê seu cavalo de guerra ao primeiro mendigo que encontrar. Se a condição não for atendida antes da magia expirar, a atividade não será realizada.\n\nSe você ou algum de seus companheiros danificar o alvo, a magia termina."
  },
  {
    "name": "Invisibilidade",
    "level": 2,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Uma criatura que você toca fica invisível até o fim da magia. Qualquer coisa que o alvo esteja vestindo ou carregando é invisível, desde que esteja na pessoa do alvo. A magia termina para um alvo que ataca ou lança um feitiço."
  },
  {
    "name": "Animar Objetos",
    "level": 5,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Os objetos ganham vida ao seu comando. Escolha até dez objetos não mágicos dentro do alcance que não estão sendo usados ​​ou carregados. Alvos Médios contam como dois objetos, Alvos Grandes contam como quatro objetos, Alvos Enormes contam como oito objetos. Você não pode animar nenhum objeto maior que Enorme. Cada um se anima e se torna uma criatura sob seu controle até o fim da magia ou até ser reduzido a 0 pontos de vida.\n\nComo bônus de ação, você pode comandar mentalmente qualquer criatura que você criou com este feitiço se a criatura estiver a até 150 metros de você (se você controlar múltiplas criaturas, você pode comandar uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura realizará e para onde ela se moverá durante seu próximo turno, ou pode emitir um comando geral, como guardar uma câmara ou corredor específico. Se você não der nenhum comando, a criatura apenas se defenderá contra criaturas hostis. Uma vez dada uma ordem, a criatura continua a segui-la até que sua tarefa seja concluída. TamanhoHPACStrDexAttackTiny2018418+8 para sucesso, 1d4 + 4 danosPequeno2516614+6 para sucesso, 1d8 + 2 danosMédio40131012+5 para sucesso, 2d6 + 1 danoGrande50101410+6 para sucesso, 2d10 + 2 danosEnorme8010186+8 para sucesso, 2d12 + 4 de dano Um objeto animado é um constructo com CA, pontos de vida, ataques, Força e Destreza determinados por seu tamanho. Sua Constituição é 10 e sua Inteligência e Sabedoria são 3, e seu Carisma é 1. Sua velocidade é de 9 metros; se o objeto não tiver pernas ou outros apêndices que possa usar para locomoção, ele terá uma velocidade de vôo de 9 metros e poderá pairar. Se o objeto estiver firmemente preso a uma superfície ou a um objeto maior, como uma corrente aparafusada a uma parede, sua velocidade é 0. Ele tem visão cega com um raio de 9 metros e fica cego além dessa distância. Quando o objeto animado chega a 0 pontos de vida, ele reverte à sua forma de objeto original e qualquer dano restante é transferido para sua forma de objeto original.\n\nSe você comandar um objeto para atacar, ele poderá realizar um único ataque corpo a corpo contra uma criatura a até 1,5 metro dela. Ele faz um ataque slam com bônus de ataque e dano de concussão determinados pelo seu tamanho. O Mestre pode determinar que um objeto específico inflija corte ou dano perfurante com base em sua forma."
  },
  {
    "name": "Escudo Anticriaturas Vivas",
    "level": 5,
    "classes": [
      "Druida"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Self (10-foot radius)",
    "duration": "Concentração, up to 1 hour",
    "description": "Uma barreira cintilante se estende a partir de você em um raio de 3 metros e se move com você, permanecendo centrada em você e protegendo outras criaturas além de mortos-vivos e constructoos. A barreira dura enquanto durar.\n\nA barreira impede que uma criatura afetada passe ou alcance. Uma criatura afetada pode lançar feitiços ou fazer ataques com armas de longo alcance ou de alcance através da barreira.\n\nSe você se mover de forma que uma criatura afetada seja forçada a passar pela barreira, a magia termina."
  },
  {
    "name": "Portal Arcano",
    "level": 6,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "150 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você cria portais de teletransporte vinculados que permanecem abertos durante todo o período. Escolha dois pontos na grodada que você possa ver, um ponto a até 3 metros de você e um ponto a 500 pés de você. Um portal circular, com 3 metros de diâmetro, abre-se sobre cada ponto. Se o portal se abrir no espaço ocupado por uma criatura, o feitiço falha e a conjuração é perdida.\n\nOs portais são anéis brilhantes bidimensionais cheios de névoa, pairando a centímetros da grodada e perpendiculares a ela nos pontos que você escolher. Um anel é visível apenas de um lado (à sua escolha), que é o lado que funciona como portal.\n\nQualquer criatura ou objeto que entre no portal sai do outro portal como se os dois fossem adjacentes; passar por um portal do lado não-portal não tem efeito. A névoa que preenche cada portal é opaca e bloqueia a visão através dele. No seu turno, você pode girar os anéis como uma ação bônus para que o lado ativo fique voltado em uma direção diferente."
  },
  {
    "name": "Despertar",
    "level": 5,
    "classes": [
      "Bardo",
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "8 hours",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Depois de passar o tempo de conjuração traçando caminhos mágicos dentro de uma pedra preciosa, você toca uma besta ou planta enorme ou menor. O alvo não deve ter nenhum valor de Inteligência ou ter Inteligência 3 ou menos. O alvo ganha Inteligência 10. O alvo também ganha a habilidade de falar um idioma que você conhece. Se o alvo for uma planta, ele ganha a habilidade de mover seus galhos, raízes, trepadeiras, trepadeiras e assim por diante, e ganha sentidos semelhantes aos de um humano. Seu Mestre escolhe as estatísticas apropriadas para a planta despertada, como as estatísticas do arbusto despertado ou da árvore despertada.\n\nA besta ou planta despertada é enfeitada por você por 30 dias ou até que você ou seus companheiros façam algo prejudicial a ela. Quando a condição enfeitiçado termina, a criatura desperta escolhe se deseja permanecer amigável com você, com base em como você a tratou enquanto ela estava enfeitiçado."
  },
  {
    "name": "Golpe do Banimento",
    "level": 5,
    "classes": [
      "Paladino"
    ],
    "school": "Abjuração",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na próxima vez que você acertar uma criatura com um ataque com arma antes que a magia termine, sua arma estala com força e o ataque causa 5d10 de dano de força extra ao alvo. Além disso, se este ataque reduzir o alvo a 50 pontos de vida ou menos, você o bane. Se o alvo for nativo de um plano de existência diferente daquele em que você está, o alvo desaparece, retornando ao seu plano natal. Se o alvo for nativo do plano em que você está, a criatura desaparece em um semiplano inofensivo. Enquanto estiver lá, o alvo fica incapacitado. Ele permanece lá até a magia terminar, momento em que o alvo reaparece no espaço que deixou ou no espaço desocupado mais próximo, se esse espaço estiver ocupado."
  },
  {
    "name": "Relâmpago em Cadeia",
    "level": 6,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "Você cria um raio que se move em direção a um alvo de sua escolha que você pode ver dentro do alcance. Três dardos saltam então desse alvo para até três outros alvos, cada um dos quais deve estar a até 9 metros do primeiro alvo. Um alvo pode ser uma criatura ou um objeto e pode ser atingido por apenas um dos raios.\n\nUm alvo deve fazer um Teste de resistência de Destreza. O alvo leva 10d8 dano de raio em um teste de resistência falho, ou metade do dano em caso de sucesso."
  },
  {
    "name": "Barreira de Lâminas",
    "level": 6,
    "classes": [
      "Clérigo"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você cria uma parede vertical de lâminas giratórias e afiadas feitas de energia mágica. A parede aparece dentro do alcance e dura enquanto durar. Você pode fazer uma parede reta de até 30 metros de comprimento, 6 metros de altura e 1,5 metro de espessura, ou uma parede circular de até 18 metros de diâmetro, 20 metros de altura e 1,5 metro de espessura. A parede fornece três quartos de cobertura para as criaturas atrás dela, e seu espaço é um terreno difícil.\n\nQuando uma criatura entra na área da parede pela primeira vez em um turno ou inicia seu turno lá, a criatura deve fazer um Teste de resistência de Destreza. Em um teste de resistência falho, a criatura sofre 6d10 de dano cortante. Em um teste de resistência bem-sucedido, a criatura leva metade do dano."
  },
  {
    "name": "Círculo da Morte",
    "level": 6,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "Uma esfera de energia negativa ondula em uma esfera de raio de 18 metros a partir de um ponto dentro do alcance. Cada criatura daquela área deverá fazer um Teste de resistência de Constituição. Um alvo leva 8d6 de dano necrótico em um teste de resistência falho, ou metade do dano em um teste bem sucedido."
  },
  {
    "name": "Círculo de Poder",
    "level": 5,
    "classes": [
      "Paladino"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Self (30-foot radius)",
    "duration": "Concentração, up to 10 minutes",
    "description": "A energia divina irradia de você, distorcendo e difundindo a energia mágica a até 9 metros de você. Até a magia terminar, a esfera se move com você, centrada em você. Durante a duração, cada criatura amiga na área (incluindo você) tem vantagem em testes de resistência contra feitiços e outros efeitos mágicos. Além disso, quando uma criatura afetada é bem-sucedida em um teste de resistência feito contra um feitiço ou efeito mágico que lhe permite fazer um teste de resistência para receber apenas metade do dano, ela não sofre nenhum dano se for bem-sucedida no teste de resistência."
  },
  {
    "name": "Matar na Nuvem",
    "level": 5,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você cria uma esfera de névoa venenosa verde-amarelada com 6 metros de raio centrada em um ponto que você escolher dentro do alcance. A neblina espalha cantos arodada. Dura pela duração ou até que um vento forte disperse a neblina, encerrando o feitiço. Sua área está fortemente obscurecida.\n\nQuando uma criatura entra na área da magia pela primeira vez em um turno ou inicia seu turno lá, aquela criatura deve fazer um Teste de resistência de Constituição. A criatura sofre 5d8 de dano de veneno em um teste de resistência falho, ou metade do dano em caso de sucesso. As criaturas são afetadas mesmo que prendam a respiração ou não precisem respirar.\n\nA neblina se afasta 3 metros de você no início de cada um dos seus turnos, rolando pela superfície da grodada. Os vapores, por serem mais pesados ​​que o ar, descem até o nível mais baixo do terreno, chegando até mesmo a escorrer por aberturas."
  },
  {
    "name": "Comungar com a Natureza",
    "level": 5,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Adivinhação",
    "castingTime": "1 minute",
    "range": "Si mesmo",
    "duration": "Instantâneo",
    "description": "Você brevemente se torna um com a natureza e ganha conhecimento do território circundante. Ao ar livre, a magia lhe dá conhecimento da terra a até 3 milhas de você. Em cavernas e outros ambientes naturais subterrâneos, o raio é limitado a 300 pés. O feitiço não funciona onde a natureza foi substituída pela construção, como em masmorras e cidades. terreno e corpos de água plantaas predominantes, minerais, animais ou pessoas poderosas celestiais, feéricos, inimigos, elementais ou mortos-vivos influência de outros planos de existência edifícios Por exemplo, você pode determinar a localização de poderosos mortos-vivos na área, a localização das principais fontes de água potável e a localização de quaisquer cidades próximas."
  },
  {
    "name": "Comungar",
    "level": 5,
    "classes": [
      "Clérigo"
    ],
    "school": "Adivinhação",
    "castingTime": "1 minute",
    "range": "Si mesmo",
    "duration": "1 minuto",
    "description": "Você entra em contato com sua divindade ou um procurador divino e faz até três perguntas que podem ser respondidas com sim ou não. Você deve fazer suas perguntas antes que a magia termine. Você recebe uma resposta correta para cada pergunta.\n\nOs seres divinos não são necessariamente oniscientes, então você pode receber uma resposta pouco clara se uma pergunta se referir a informações que estão além do conhecimento da divindade. Num caso em que uma resposta de uma palavra possa ser enganosa ou contrária aos interesses da divindade, o Mestre pode oferecer uma frase curta como resposta.\n\nSe você conjurar uma magia duas ou mais vezes antes de terminar seu próximo descanso longo, há uma chance cumulativa de 25% para cada lançamento após o primeiro de você não obter resposta. O Mestre faz esse teste em segredo."
  },
  {
    "name": "Cone de Frio",
    "level": 5,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (60-foot cone)",
    "duration": "Instantâneo",
    "description": "Uma rajada de ar frio sai de suas mãos. Cada criatura num cone de 18 metros deverá fazer um Teste de resistência de Constituição. Uma criatura sofre 8d8 de dano de frio em um teste de resistência falho, ou metade do dano em caso de sucesso.\n\nUma criatura morta por este feitiço se torna uma estátua congelada até descongelar."
  },
  {
    "name": "Convocar Elemental",
    "level": 5,
    "classes": [
      "Druida",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 minute",
    "range": "27 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você invoca um servo elemental. Escolha uma área de ar, terra, fogo ou água que preencha um cubo de 3 metros dentro do alcance. Um elemental de nível de desafio 5 ou inferior apropriado à área que você escolheu aparece em um espaço desocupado a até 3 metros dele. Por exemplo, um elemental do fogo emerge de uma fogueira e um elemental da terra surge da grodada. O elemental desaparece quando cai para 0 pontos de vida ou quando a magia termina.\n\nO elemental é amigável com você e seus companheiros durante todo o período. Role a iniciativa para o elemental, que tem seus próprios turnos. Ele obedece a quaisquer comandos verbais que você emitir (nenhuma ação exigida por você). Se você não der nenhum comando ao elemental, ele se defenderá de criaturas hostis, mas não realizará nenhuma ação.\n\nSe sua concentração for quebrada, o elemental não desaparece. Em vez disso, você perde o controle do elemental, ele se torna hostil com você e seus companheiros e pode atacar. Um elemental descontrolado não pode ser desfalcado por você, e ele desaparece 1 hora depois que você o convocou.\n\nO Mestre possui as estatísticas do elemental."
  },
  {
    "name": "Convocar o Feérico",
    "level": 6,
    "classes": [
      "Druida",
      "Bruxo"
    ],
    "school": "Conjuração",
    "castingTime": "1 minute",
    "range": "27 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você convoca uma criatura feérica com nível de desafio 6 ou inferior, ou um espírito feérico que assume a forma de uma besta com nível de desafio 6 ou inferior. Aparece em um espaço desocupado que você pode ver dentro do alcance. A criatura feérico desaparece quando cai para 0 pontos de vida ou quando a magia termina.\n\nA criatura feérico é amigável com você e seus companheiros durante todo o tempo. Role a iniciativa para a criatura, que tem seus próprios turnos. Ele obedece a quaisquer comandos verbais que você emitir (nenhuma ação exigida por você), desde que eles não violem seu alinhamento. Se você não der nenhum comando à criatura feérica, ela se defenderá de criaturas hostis, mas não realizará nenhuma ação.\n\nSe sua concentração for prejudicada, a criatura feérica não desaparece. Em vez disso, você perde o controle da criatura feérica, ela se torna hostil com você e seus companheiros e pode atacar. Uma criatura feérico descontrolada não pode ser desfalcada por você e desaparece 1 hora depois que você a convocou.\n\nO Mestre possui as estatísticas da criatura feérico."
  },
  {
    "name": "Convocar Salva",
    "level": 5,
    "classes": [
      "Patrulheiro"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "Você dispara uma munição não-mágica de uma arma de longo alcance ou joga uma arma não-mágica no ar e escolhe um ponto dentro do alcance. Centenas de duplicatas da munição ou arma caem de cima e depois desaparecem. Cada criatura em um cilindro de 12 metros de raio e 6 metros de altura centrado nesse ponto deve fazer um Teste de resistência de Destreza. Uma criatura sofre 8d8 de dano em um teste de resistência falho, ou metade do dano em um teste bem-sucedido. O tipo de dano é o mesmo da munição ou arma."
  },
  {
    "name": "Contatar Outro Plano",
    "level": 5,
    "classes": [
      "Bruxo",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 minute",
    "range": "Si mesmo",
    "duration": "1 minuto",
    "description": "Você contata mentalmente um semideus, o espírito de um sábio falecido há muito tempo ou alguma outra entidade misteriosa de outro plano. Entrar em contato com essa inteligência extraplanar pode sobrecarregar ou até quebrar sua mente. Quando você conjurar essa magia, faça um Teste de resistência de Inteligência DC 15. Em caso de falha, você sofre 6d6 de dano psíquico e fica louco até terminar um descanso longo. Enquanto estiver louco, você não consegue realizar ações, não consegue entender o que outras criaturas dizem, não consegue ler e fala apenas coisas sem sentido. Um feitiço de restauração maior lançado em você encerra esse efeito.\n\nEm um teste de resistência bem-sucedido, você pode fazer até cinco perguntas à entidade. Você deve fazer suas perguntas antes que a magia termine. O Mestre responde a cada pergunta com uma palavra, como sim, não, talvez, nunca, irrelevante ou pouco claro (se a entidade não souber a resposta para a pergunta). Se uma resposta de uma palavra for enganosa, o Mestre pode, em vez disso, oferecer uma frase curta como resposta."
  },
  {
    "name": "Contágio",
    "level": 5,
    "classes": [
      "Clérigo",
      "Druida"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "7 dias",
    "description": "Seu toque inflige doenças. Faça um ataque de magia corpo a corpo contra uma criatura ao seu alcance. Sem sucesso, o alvo está envenenado. \n\n No final de cada um dos turnos do alvo envenenado, o alvo deverá fazer um Teste de resistência de Constituição. Se o alvo obtiver sucesso em três desses testes, ele não será mais envenenado e a magia terminará. Se o alvo falhar em três desses salvamentos, o alvo não será mais envenenado, mas sim escolhido uma das doenças abaixo. O alvo fica sujeito à doença escolhida durante a duração da magia. \n\n Como esta magia induz uma doença natural em seu alvo, qualquer efeito que remova uma doença ou melhore os efeitos de uma doença se aplica a ela. \n\nDoença Cegante: A dor toma conta da mente da criatura e seus olhos ficam com uma aparência leitosa. A criatura tem desvantagem em testes de Sabedoria e Teste de resistência de Sabedorias e é cega. \n\nFebre da Sujeira: Uma febre violenta varre o corpo da criatura. A criatura tem desvantagem em testes de Força, Teste de resistência de Forças e jogo de ataques que utilizam Força. \n\nPodridão da Carne: A carne da criatura se deteriora. A criatura tem desvantagem em testes de Carisma e vulnerabilidade a todos os danos. \n\nMindfire: A mente da criatura fica febril. A criatura tem desvantagem em testes de Inteligência e Teste de resistência de Inteligências, e a criatura se comporta como se estivesse sob os efeitos do feitiço confusão durante o combate. \n\nConvulsão: A criatura é dominada pela agitação. A criatura tem desvantagem em testes de Destreza, Teste de resistência de Destrezas e ataque de ataques que utilizam Destreza. \n\nSlimy Doom: A criatura começa a sangrar incontrolavelmente. A criatura tem desvantagem em verificações de Constituição e Teste de resistência de Constituições. Além disso, sempre que a criatura sofrer dano, ela ficará atordoada até o final do próximo turno."
  },
  {
    "name": "Contingência",
    "level": 6,
    "classes": [
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "10 minutes",
    "range": "Si mesmo",
    "duration": "10 dias",
    "description": "Escolha uma magia de 5º nível ou inferior que você possa lançar, que tenha um tempo de lançamento de 1 ação, e que possa atingir você. Você conjura esse feitiço – chamado de feitiço contingente – como parte do lançamento de contingência, gastando espaços de magia para ambos, mas o feitiço contingente não entra em vigor. Em vez disso, entra em vigor quando ocorre uma determinada circunstância. Você descreve essa circunstância quando lança os dois feitiços. Por exemplo, uma contingência lançada com respiração na água (nível 3) pode estipular que a respiração na água entra em vigor quando você é engolfado por água ou líquido semelhante.\n\nA magia contingente entra em vigor imediatamente após a circunstância ser encontrada pela primeira vez, quer você queira ou não. E então a contingência termina.\n\nA magia contingente tem efeito apenas em você, mesmo que normalmente possa atingir outras pessoas. Você pode usar apenas um feitiço de contingência por vez. Se você lançar esta magia novamente, o efeito de outra magia de contingência em você termina. Além disso, a contingência termina com você se o componente material não estiver com você."
  },
  {
    "name": "Criar Morto-Vivo",
    "level": 6,
    "classes": [
      "Clérigo",
      "Bruxo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 minute",
    "range": "3 metros",
    "duration": "Instantâneo",
    "description": "Você só pode lançar este feitiço à noite. Escolha até três cadáveres de humanóides Médios ou Pequenos dentro do alcance. Cada cadáver se torna um ghoul sob seu controle. (O Mestre tem estatísticas de jogo para essas criaturas.)\n\nComo bônus de ação em cada um de seus turnos, você pode comandar mentalmente qualquer criatura que você animou com esta magia se a criatura estiver a 36 metros de você (se você controlar múltiplas criaturas, você pode comandar uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura realizará e para onde ela se moverá durante seu próximo turno, ou pode emitir um comando geral, como guardar uma câmara ou corredor específico. Se você não der nenhum comando, a criatura apenas se defenderá contra criaturas hostis. Uma vez dada uma ordem, a criatura continua a segui-la até que sua tarefa seja concluída.\n\nA criatura fica sob seu controle por 24 horas, após as quais ela deixa de obedecer a qualquer comando que você tenha dado. Para manter o controle da criatura por mais 24 horas, você deve lançar este feitiço na criatura antes que o período atual de 24 horas termine. Este uso da magia reafirma seu controle sobre até três criaturas que você animou com esta magia, em vez de animar novas."
  },
  {
    "name": "Chama Contínua",
    "level": 2,
    "classes": [
      "Clérigo",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Até ser dissipada",
    "description": "Uma chama, equivalente em brilho a uma tocha, brota de um objeto que você toca. O efeito se parece com uma chama normal, mas não cria calor e não utiliza oxigênio. Uma chama contínua pode ser coberta ou escondida, mas não sufocada ou extinta."
  },
  {
    "name": "Criação",
    "level": 5,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 minute",
    "range": "9 metros",
    "duration": "Especial",
    "description": "Você puxa fragmentos de material sombreado do Pendor das Sombras para criar um objeto inanimado de matéria vegetal dentro do alcance: produtos leves, corda, madeira ou algo semelhante. Você também pode usar este feitiço para criar objetos minerais como pedra, cristal ou metal. O objeto criado não deve ser maior que um metrocubo de 1,5 metro e deve ter uma forma e material que você já tenha visto antes.\n\nA duração depende do material do objeto. Se o objeto for composto por vários materiais, use o de menor duração. MaterialDuraçãoMatéria vegetal1 dia Pedra ou cristal12 horas Metais preciosos1 hora Gemas10 minutos Adamantino ou mithral1 minuto  Usar qualquer material criado por este feitiço como componente material de outro feitiço faz com que o feitiço falhe."
  },
  {
    "name": "Onda Destrutiva",
    "level": 5,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (30-foot radius)",
    "duration": "Instantâneo",
    "description": "Você atinge a grodada, criando uma explosão de energia divina que se espalha para fora de você. Cada criatura que você escolher a até 9 metros de você deve ter sucesso em um Teste de resistência de Constituição ou sofrer 5d6 dano sônico, bem como 5d6 dano radiante ou necrótico (sua escolha), e ser derrubado. Uma criatura que consegue seu teste de resistência leva metade do dano e não cai."
  },
  {
    "name": "Desintegrar",
    "level": 6,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Um fino raio verde brota do seu dedo apontador para um alvo que você possa ver dentro do alcance. O alvo pode ser uma criatura, um objeto ou uma criação de força mágica, como a parede criada por parede de força (nível 5).\n\nUma criatura atingida por este feitiço deve fazer um Teste de resistência de Destreza. Em um teste de resistência falho, o alvo leva 10d6 + 40 dano de força. Se esse dano reduzir o alvo a 0 pontos de vida, ele se desintegra.\n\nUma criatura desintegrada e tudo o que ela veste e carrega, exceto itens mágicos, são reduzidos a uma pilha de pó cinza e fino. A criatura só pode ser restaurada à vida por meio de um feitiço de ressurreição verdadeira (nível 9) ou de desejo (nível 9).\n\nEste feitiço desintegra automaticamente um objeto não mágico grande ou menor ou uma criação de força mágica. Se o alvo for um objeto Enorme ou maior ou criação de força, este feitiço desintegra uma porção de 3 metros cúbicos dele. Um item mágico não é afetado por este feitiço."
  },
  {
    "name": "Adivinhação",
    "level": 4,
    "classes": [
      "Clérigo"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Instantâneo",
    "description": "Sua magia e uma oferenda colocam você em contato com um deus ou com os servos de um deus. Você faz uma única pergunta sobre um objetivo, evento ou atividade específica que ocorrerá dentro de 7 dias. O Mestre oferece uma resposta verdadeira. A resposta pode ser uma frase curta, uma rima enigmática ou um presságio.\n\nA magia não leva em consideração quaisquer circunstâncias possíveis que possam alterar o resultado, como o lançamento de magias adicionais ou a perda ou ganho de um companheiro.\n\nSe você lançar este feitiço duas ou mais vezes antes de terminar seu próximo descanso longo, há uma chance cumulativa de 25% para cada lançamento após o primeiro de você obter uma leitura aleatória. O Mestre faz esse teste em segredo."
  },
  {
    "name": "Dissipar o Bem e o Mal",
    "level": 5,
    "classes": [
      "Clérigo",
      "Paladino"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "A energia cintilante protege você de feéricos, mortos-vivos e criaturas originárias de além do Plano Material. Enquanto isso, celestiais, elementais, feéricos, inimigos e mortos-vivos terão manobras de ataque contra você.\n\nVocê pode encerrar o feitiço mais cedo usando qualquer uma das seguintes funções especiais. \n\nQuebrar Encantamento: Como sua ação, você toca uma criatura que você pode alcançar que está enfeitiçado, amedrontado ou possuída por um celestial, um elemental, um feérico, um inimigo ou um morto-vivo. A criatura que você toca não está mais enfeitada, amedrontada ou possuída por tais criaturas. \n\nDisfalhaal: Como sua ação, faça um ataque de magia corpo a corpo contra um celestial, um elemental, um feérico, um inimigo ou um morto-vivo que você possa alcançar. Sem sucesso, você tenta levar a criatura de volta ao seu plano natal. A criatura deve ser bem-sucedida em um Teste de resistência de Carisma ou será enviada de volta ao seu plano natal (se ainda não estiver lá). Se não estiverem em seu plano natal, os mortos-vivos são enviados para Shadowfell e os feéricos são enviados para Feéricowild."
  },
  {
    "name": "Dominar Besta",
    "level": 4,
    "classes": [
      "Druida",
      "Feiticeiro"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você tenta enganar a melhor coisa que você pode ver dentro do alcance. Deve ser aprovado em Teste de resistência de Sabedoria ou ser feitiçado por você durante todo o período. Se você ou criaturas que lhe são amigas estão lutando contra isso, tem vantagem no teste de resistência.\n\nEnquanto a besta estiver enfeitada, você mantém uma ligação telepática com ela desde que vocês dois estejam no mesmo plano de existência. Você pode usar esse link telepático para emitir comandos à criatura enquanto estiver consciente (nenhuma ação necessária), aos quais ela fará o possível para obedecer. Você pode especificar um curso de ação simples e geral, como Atacar aquela criatura, Correr até lá ou Buscar aquele objeto. Se a criatura completar a ordem e não receber mais orientações suas, ela se defenderá e se preservará da melhor maneira possível.\n\nVocê pode usar sua ação para assumir o controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita. Durante esse tempo, você também pode fazer com que a criatura use uma ocorrência, mas isso exige que você use sua própria ocorrência também. Cada vez que o alvo sofre dano, ele faz um novo Teste de resistência de Sabedoria contra o feitiço. Se o teste de resistência for bem-sucedido, a magia termina."
  },
  {
    "name": "Dominar Pessoa",
    "level": 5,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você tenta enganar um humanoide que você possa ver dentro do alcance. Deve ser aprovado em Teste de resistência de Sabedoria ou ser feitiçado por você durante todo o período. Se você ou criaturas que lhe são amigas estão lutando contra isso, tem vantagem no teste de resistência.\n\nEnquanto o alvo estiver enfeitiçado, você terá uma ligação telepática com ele desde que vocês dois estejam no mesmo plano de existência. Você pode usar esse link telepático para emitir comandos à criatura enquanto estiver consciente (nenhuma ação necessária), aos quais ela fará o possível para obedecer. Você pode especificar um curso de ação simples e geral, como Atacar aquela criatura, Correr até lá ou Buscar aquele objeto. Se a criatura completar a ordem e não receber mais orientações suas, ela se defenderá e se preservará da melhor maneira possível.\n\nVocê pode usar sua ação para assumir o controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita. Durante esse tempo você também pode fazer com que a criatura use uma ocorrência, mas isso requer que você use sua própria ocorrência também. Cada vez que o alvo sofre dano, ele faz um novo Teste de resistência de Sabedoria contra o feitiço. Se o teste de resistência for bem-sucedido, a magia termina."
  },
  {
    "name": "Sonho",
    "level": 5,
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 minute",
    "range": "Special",
    "duration": "8 horas",
    "description": "Este feitiço molda os sonhos de uma criatura. Escolha uma criatura conhecida por você como o alvo desta magia. O alvo deve estar no mesmo plano de existência que você. Criaturas que não dormem, como elfos, não podem ser contatadas por esta magia. Você, ou uma criatura voluntária que você toca, entra em estado de transe, agindo como um mensageiro. Enquanto está em transe, o mensageiro está ciente de suas subordinações, mas não pode realizar ações ou se mover.\n\nSe o alvo estiver dormindo, o mensageiro aparece nos sonhos do alvo e pode conversar com o alvo enquanto ele permanecer dormindo, durante a duração do feitiço. O mensageiro também pode moldar o ambiente do sonho, criando paisagens, objetos e outras imagens. O mensageiro pode sair do transe a qualquer momento, encerrando o efeito do feitiço mais cedo. O alvo lembra perfeitamente do sonho ao acordar. Se o alvo estiver acordado quando você conjurar uma magia, o mensageiro sabe disso e pode encerrar o transe (e o feitiço) ou esperar que o alvo adormeça, momento em que o mensageiro aparece nos sonhos do alvo.\n\nVocê pode fazer o mensageiro parecer monstruoso e assustador para o alvo. Se o fizer, o mensageiro poderá entregar uma mensagem de no máximo dez palavras e então o alvo deverá fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, ecos da monstruosidade fantasmagórica geram um pesadelo que dura a duração do sono do alvo e impede que o alvo obtenha qualquer benefício desse descanso. Além disso, quando o alvo acorda, ele sofre 3d6 de dano psíquico.\n\nSe você tiver uma parte do corpo, mecha de cabelo, recorte de unha, ou porção similar do corpo do alvo, o alvo faz seu teste de resistência com interferência."
  },
  {
    "name": "Aprimorar Habilidade",
    "level": 2,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Feiticeiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Você toca uma criatura e concede a ela um aprimoramento mágico. Escolha um dos seguintes efeitos; o ganha esse efeito até a magia terminar. \n\nResistência do Urso: O alvo tem vantagem em testes de Constituição. Ele também ganha 2d6 pontos de vida temporários, que são perdidos quando a magia termina. \n\nForça do Touro: O alvo tem vantagem em testes de Força e sua capacidade de carga dobra. \n\nGraça do Gato: O alvo tem vantagem em testes de Destreza. Ele também não sofre danos ao cair de 6 metros ou menos se não estiver incapacitado. \n\nEsplendor da Águia: O alvo tem vantagem em testes de Carisma. \n\nAstúcia da Raposa: O alvo tem vantagem em testes de Inteligência. \n\nSabedoria da Coruja: O alvo tem vantagem em testes de Sabedoria."
  },
  {
    "name": "Aumentar/Reduzir",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você faz com que uma criatura ou objeto que você possa ver dentro do alcance cresça ou diminua com o passar do tempo. Escolha uma criatura ou um objeto que não seja usado nem carregado. Se o alvo não quiser, pode fazer um Teste de resistência de Constituição. Caso obtenha sucesso, o feitiço não tem efeito. \n\n Se o alvo for uma criatura, tudo o que ele veste e carrega muda de tamanho junto com ele. Qualquer item largado por uma criatura afetada retorna ao tamanho normal imediatamente. \n\nAmpliar: O tamanho do alvo dobra em todas as dimensões e seu peso é multiplicado por oito. Esse crescimento aumenta seu tamanho em uma categoria – de Médio a Grande, por exemplo. Se não houver espaço suficiente para o alvo dobrar de tamanho, a criatura ou objeto atinge o tamanho máximo possível no espaço disponível. Até a magia terminar, o alvo também tem vantagem em testes de Força e Teste de resistência de Forças. As armas do alvo também crescem para corresponder ao seu novo tamanho. Embora essas armas sejam ampliadas, os ataques do alvo com elas causam 1d4 de dano extra. \n\nReduzir: O tamanho do alvo é reduzido pela metade em todas as dimensões e seu peso é reduzido a um oitavo do normal. Esta redução diminui o seu tamanho em uma categoria – de Médio para Pequeno, por exemplo. Até a magia terminar, o alvo também possui interferência em testes de Força e Teste de resistência de Forças. As armas do alvo também encolhem para corresponder ao seu novo tamanho. Embora essas armas sejam reduzidas, os ataques do alvo com elas causam 1d4 a menos de dano (isso não pode reduzir o dano abaixo de 1)."
  },
  {
    "name": "Fascinar",
    "level": 2,
    "classes": [
      "Bardo",
      "Bruxo"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "1 minuto",
    "description": "Você tece uma série de palavras que distraem, fazendo com que criaturas de sua escolha, que você possa ver dentro do alcance e que possam ouvi-lo, façam um Teste de resistência de Sabedoria. Qualquer criatura que não possa ser enfeitada terá sucesso neste teste de resistência automaticamente, e se você ou seus companheiros estiverem lutando contra uma criatura, ela terá vantagem no teste de resistência. Em um teste de resistência falho, o alvo tem desvantagem em testes de Sabedoria (Percepção) feitos para perceber qualquer criatura que não seja você até o final da magia ou até que o alvo não possa mais ouvi-lo. A magia termina se você estiver incapacitado ou não puder mais falar."
  },
  {
    "name": "Fabricar",
    "level": 4,
    "classes": [
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "10 minutes",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Você converte matérias-primas em produtos do mesmo material. Por exemplo, você pode fabricar uma ponte de madeira com um grupo de árvores, uma corda com um pedaço de cânhamo e roupas com linho ou lã.\n\nEscolha matérias-primas que você possa ver dentro do alcance. Você pode fabricar um objeto Grande ou menor (contido dentro de um cubo de 3 metros, ou oito cubos de 1,5 metro conectados), desde que haja quantidade suficiente de matéria-prima. Se você estiver trabalhando com metal, pedra ou outra substância mineral, entretanto, o objeto fabricado não poderá ser maior que Médio (contido em um único cubo de 1,5 metro). A qualidade dos objetos feitos pelo feitiço é proporcional à qualidade das matérias-primas.\n\nCriaturas ou itens mágicos não podem ser criados ou transmutados por este feitiço. Você também não pode usá-lo para criar itens que normalmente exijam um alto grau de habilidade, como joias, armas, vidro ou armaduras, a menos que você tenha proficiência com o tipo de ferramenta de artesão usada para fabricar tais objetos."
  },
  {
    "name": "Mordida do Olhar",
    "level": 6,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Durante a duração do feitiço, seus olhos se tornam um vazio escuro imbuído de poder pavoroso. Uma criatura de sua escolha a até 18 metros de você que você possa ver deve ter sucesso em um Teste de resistência de Sabedoria ou ser afetada por um dos seguintes efeitos de sua escolha durante a duração. Em cada um de seus turnos até o final da magia, você pode usar sua ação para atacar outra criatura, mas não poderá atacar uma criatura novamente se ela tiver obtido sucesso em um teste de resistência contra esse lançamento de mordida ocular. \n\nAdormecido: O alvo cai inconsciente. Ele acorda se sofrer algum dano ou se outra criatura usar sua ação para acordar o dorminhoco. \n\nEm pânico: O alvo está amedrontado de você. Em cada um de seus turnos, a criatura amedrontada deve pegar a ação Dash e se afastar de você pela rota mais segura e curta disponível, a menos que não haja para onde se mover. Se o alvo se deslocar para um local a pelo menos 18 metros de distância de você, onde não possa mais vê-lo, esse efeito termina. \n\nEnjoado: O alvo tem manobra de ataque e teste de habilidades. Ao final de cada um de seus turnos, ele poderá realizar outro Teste de resistência de Sabedoria. Se tiver sucesso, o efeito termina."
  },
  {
    "name": "Encontrar Corcel",
    "level": 2,
    "classes": [
      "Paladino"
    ],
    "school": "Conjuração",
    "castingTime": "10 minutes",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Você convoca um espírito que assume a forma de um corcel extraordinariamente inteligente, forte e leal, criando um vínculo duradouro com ele. Aparecendo em um espaço desocupado dentro do alcance, o corcel assume a forma que você escolher, como um cavalo de guerra, um pônei, um camelo, um alce ou um mastim. (Seu Mestre pode permitir que outros animais sejam convocados como corcéis.) O corcel tem as estatísticas da forma escolhida, embora seja um celestial, feérico ou inimigo (sua escolha) em vez de seu tipo normal. Além disso, se o seu cavalo tiver Inteligência 5 ou menos, sua Inteligência se torna 6 e ele ganha a habilidade de entender um idioma de sua escolha que você fale.\n\nSeu corcel serve como montaria, tanto em combate quanto fora dele, e você tem um vínculo instintivo com ele que lhe permite lutar como uma unidade perfeita. Enquanto montado em seu corcel, você pode fazer qualquer feitiço que lançar que atinja apenas você também alvo de seu corcel.\n\nQuando o corcel cai para 0 pontos de vida, ele desaparece, não deixando para trás nenhuma forma física. Você também pode desfalhar seu corcel a qualquer momento como uma ação, fazendo com que ele desapareça. Em ambos os casos, lançar este feitiço invoca novamente o mesmo corcel, restaurado ao seu ponto de vida máximo.\n\nEnquanto seu cavalo estiver a 1,5 milha de você, você poderá se comunicar com ele telepaticamente.\n\nVocê não pode ter mais de um cavalo vinculado por este feitiço ao mesmo tempo. Como ação, você pode liberar o corcel de seu vínculo a qualquer momento, fazendo com que ele desapareça."
  },
  {
    "name": "Encontrar o Caminho",
    "level": 6,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ],
    "school": "Adivinhação",
    "castingTime": "1 minute",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 day",
    "description": "Este feitiço permite que você encontre a rota física mais curta e direta para um local fixo específico com o qual você está familiarizado no mesmo plano de existência. Se você nomear um destino em outro plano de existência, um destino que se mova (como uma fortaleza móvel) ou um destino que não seja específico (como o covil de um dragão verde), a magia falha.\n\nDurante todo o tempo, enquanto você estiver no mesmo plano de existência do destino, você saberá a que distância ele está e em que direção está. Enquanto você viaja para lá, sempre que lhe é apresentada uma escolha de caminhos ao longo do caminho, você determina automaticamente qual caminho é o caminho mais curto e direto (mas não necessariamente o mais seguro) para o destino."
  },
  {
    "name": "Encontrar Armadilhas",
    "level": 2,
    "classes": [
      "Clérigo",
      "Druida",
      "Patrulheiro"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Você sente a presença de qualquer armadilha dentro do alcance que esteja dentro da linha de visão. Uma armadilha, para o propósito desta magia, inclui qualquer coisa que possa infligir um efeito repentino ou inesperado que você considere prejudicial ou indesejável, que foi especificamente concebido como tal por seu criador. Assim, o feitiço sentiria uma área afetada pelo feitiço de alarme (nível 1), um glifo de proteção (nível 3) ou uma armadilha mecânica, mas não revelaria uma fraqueza natural no chão, um teto instável ou um buraco escondido.\n\nEste feitiço apenas revela que uma armadilha está presente. Você não aprende a localização de cada armadilha, mas aprende a natureza geral do perigo representado por uma armadilha que você sente."
  },
  {
    "name": "Escudo de Fogo",
    "level": 4,
    "classes": [
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "10 minutos",
    "description": "Chamas finas e finas envolvem seu corpo durante toda a duração, lançando luz brilhante em um raio de 3 metros e luz fraca por mais 3 metros adicionais. Você pode encerrar o feitiço mais cedo usando uma ação para disfalha-lo.\n\nAs chamas fornecem um escudo quente ou um escudo frio, conforme você escolher. O escudo quente concede resistência ao dano de frio, e o escudo frio concede resistência ao dano de fogo.\n\nAlém disso, sempre que uma criatura a até 1,5 metro de você acerta um ataque corpo a corpo, o escudo explode em chamas. O atacante sofre 2d8 dano de fogo de um escudo quente, ou 2d8 dano de frio de um escudo frio."
  },
  {
    "name": "Flame Blade",
    "level": 2,
    "classes": [
      "Druida"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você evoca uma lâmina de fogo em sua mão livre. A lâmina é semelhante em tamanho e formato a uma cimitarra e dura o tempo todo. Se você soltar a lâmina, ela desaparece, mas você pode evocá-la novamente como uma ação bônus.\n\nVocê pode usar sua ação para fazer um ataque de magia corpo a corpo com a lâmina de fogo. Sem sucesso, o alvo leva 3d6 de dano de fogo.\n\nA lâmina flamejante emite luz brilhante em um raio de 3 metros e luz fraca por mais 3 metros adicionais."
  },
  {
    "name": "Golpe de Chama",
    "level": 5,
    "classes": [
      "Clérigo"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Uma coluna vertical de fogo divino desce dos céus em um local que você especificar. Cada criatura em um cilindro de raio de 3 metros e 40 pés de altura centrado em um ponto dentro do alcance deve fazer um Teste de resistência de Destreza. Uma criatura sofre 4d6 de dano de fogo e 4d6 de dano radiante em um teste de resistência falho, ou metade do dano em um teste bem sucedido."
  },
  {
    "name": "Esfera Flamejante",
    "level": 2,
    "classes": [
      "Druida",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma esfera de fogo de 1,5 metro de diâmetro aparece em um espaço desocupado de sua escolha dentro do alcance e dura enquanto durar. Qualquer criatura que termine seu turno a até 1,5 metro da esfera deverá fazer um Teste de resistência de Destreza. A criatura sofre 2d6 de dano de fogo em um teste de resistência falho, ou metade do dano em caso de sucesso.\n\nComo ação bônus, você pode mover a esfera até 9 metros. Se você bater a esfera em uma criatura, essa criatura deverá fazer o teste de resistência contra o dano da esfera, e a esfera para de se mover neste turno.\n\nAo mover a esfera, você pode direcioná-la sobre barreiras de até 1,5 metro de altura e saltar sobre poços de até 3 metros de largura. A esfera acende objetos inflamáveis ​​que não estão sendo usados ​​ou carregados e emite luz brilhante em um raio de 6 metros e luz fraca por mais 6 metros adicionais."
  },
  {
    "name": "Carne em Pedra",
    "level": 6,
    "classes": [
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você tenta transformar uma criatura que você pode ver dentro do alcance em pedra. Se o corpo do alvo for de carne, a criatura deverá fazer um Teste de resistência de Constituição. Em um teste de resistência falho, ele é imobilizado à medida que sua carne começa a endurecer. Em um teste de resistência bem sucedido, a criatura não é afetada.\n\nUma criatura imobilizada por este feitiço deverá realizar outro teste de Constituição de resistência ao final de cada um de seus turnos. Se ele conseguir salvar essa magia três vezes, a magia termina. Se falhar no salvamento três vezes, ele será transformado em pedra e submetido à condição petrificado durante todo o tempo. Os sucessos e fracassos não precisam ser consecutivos; acompanhe ambos até que o alvo colete uma trinca.\n\nSe a criatura for fisicamente quebrada enquanto petrificada, ela sofrerá deformidades semelhantes se reverter ao seu estado original.\n\nSe você mantiver sua concentração neste feitiço por toda a duração possível, a criatura se transformará em pedra até que o efeito seja removido."
  },
  {
    "name": "Proibição",
    "level": 6,
    "classes": [
      "Clérigo"
    ],
    "school": "Abjuração",
    "castingTime": "10 minutes",
    "range": "Toque",
    "duration": "1 day",
    "description": "Você cria uma proteção contra viagens mágicas que protege até 40.000 pés quadrados de espaço a uma altura de 9 metros acima do chão. Enquanto durar, as criaturas não podem se teletransportar para a área ou usar portais, como aqueles criados pelo feitiço portão (nível 9), para entrar na área. O feitiço protege a área contra viagens planares e, portanto, evita que criaturas acessem a área por meio do feitiço Plano Astral, Plano Etéreo, Feéricowild, Shadowfell ou mudança de plano (nível 7).\n\nAlém disso, o feitiço causa danos a tipos de criaturas que você escolhe ao conjurá-lo. Escolha um ou mais dos seguintes: celestiais, elementais, feéricos, inimigos e mortos-vivos. Quando uma criatura escolhida entra na área da magia pela primeira vez em um turno ou começa seu turno lá, a criatura sofre 5d10 de dano radiante ou necrótico (você escolhe quando você conjura essa magia).\n\nQuando você conjura essa magia, você pode designar uma senha. Uma criatura que pronuncie a senha ao entrar na área não sofre dano do feitiço.\n\nA área da magia não pode se sobrepor à área de outra magia *proibição*. Se você lançar *proibição* todos os dias durante 30 dias no mesmo local, o feitiço dura até ser dissipado e os componentes materiais são consumidos no último lançamento."
  },
  {
    "name": "Liberdade de Movimentos",
    "level": 4,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Patrulheiro"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Você toca uma criatura voluntária. Durante esse período, o movimento do alvo não é afetado por terreno difícil, e feitiços e outros efeitos mágicos não podem reduzir a velocidade do alvo nem fazer com que o alvo fique paralisado ou imobilizado.\n\nO alvo também pode gastar 1,5 metro de movimento para escapar automaticamente de restrições não-mágicas, como algemas ou uma criatura que o tenha agarrado. Finalmente, estar submerso não impõe penalidades ao movimento ou aos ataques do alvo."
  },
  {
    "name": "Compromisso",
    "level": 5,
    "classes": [
      "Clérigo",
      "Mago",
      "Paladino",
      "Druida",
      "Bardo"
    ],
    "school": "Encantamento",
    "castingTime": "1 minute",
    "range": "18 metros",
    "duration": "30 dias",
    "description": "Você coloca um comando mágico em uma criatura que você pode ver dentro do alcance, forçando-a a realizar algum serviço ou abster-se de alguma ação ou curso de atividade conforme você decidir. Se a criatura puder entendê-lo, ela deverá ter sucesso em um Teste de resistência de Sabedoria ou ser enfeitiçada por você durante esse período. Enquanto a criatura for enfeitada por você, ela sofrerá 5d10 de dano psíquico cada vez que ela agir de maneira diretamente contrária às suas instruções, mas não mais do que uma vez por dia. Uma criatura que não consegue entender você não é afetada pelo feitiço.\n\nVocê pode emitir qualquer comando que escolher, exceto uma atividade que resultaria em morte certa. Se você emitir um comando suicida, a magia termina.\n\nVocê pode encerrar o feitiço mais cedo usando uma ação para disfalha-lo. Um feitiço remover maldição (nível 3), restauração maior (nível 5) ou desejo (nível 9) também o encerra."
  },
  {
    "name": "Repouso Gentil",
    "level": 2,
    "classes": [
      "Clérigo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "10 dias",
    "description": "Você toca um cadáver ou outros restos mortais. Enquanto durar, o alvo fica protegido da decomposição e não pode se tornar morto-vivo.\n\nO feitiço também estende efetivamente o limite de tempo para ressuscitar o alvo dos mortos, já que os dias passados ​​sob a influência deste feitiço não contam para o limite de tempo de feitiços como ressuscitar os mortos (nível 5)."
  },
  {
    "name": "Inseto Gigante",
    "level": 4,
    "classes": [
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você transforma até dez centopéias, três aranhas, cinco vespas ou um escorpião dentro do alcance em versões de suas formas naturais durante a duração. Uma centopéia se torna uma centopéia gigante, uma aranha se torna uma aranha gigante, uma vespa se torna uma vespa gigante e um escorpião se torna um escorpião gigante.\n\nCada criatura obedece aos seus comandos verbais e, em combate, eles agem no seu turno a cada rodada. O DM possui as estatísticas dessas criaturas e resolve suas ações e momento.\n\nUma criatura permanece em seu tamanho gigante até que caia para 0 pontos de vida, ou até que você use uma ação para desfalhar o efeito sobre ela.\n\nO Mestre pode permitir que você escolha diferentes alvos. por exemplo, se você transformar uma abelha, sua versão gigante poderá ter as mesmas estatísticas de uma vespa gigante."
  },
  {
    "name": "Globo de Invulnerabilidade",
    "level": 6,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma barreira imóvel e levemente cintilante surge em um raio de 3 metros ao seu redor e permanece durante todo o tempo.\n\nQualquer magia de 5º nível ou inferior lançada de fora da barreira não pode afetar criaturas ou objetos dentro dela, mesmo que a magia seja lançada usando um nível superior de espaço de magia. Tal feitiço pode atingir criaturas e objetos dentro da barreira, mas o feitiço não tem efeito sobre eles. Da mesma forma, a área dentro da barreira é excluída das áreas afetadas por tais feitiços."
  },
  {
    "name": "Glifo de Proteção",
    "level": 3,
    "classes": [
      "Clérigo",
      "Mago",
      "Bardo"
    ],
    "school": "Abjuração",
    "castingTime": "1 hour",
    "range": "Toque",
    "duration": "Até ser dissipada ou acionada",
    "description": "Quando você conjura essa magia, você inscreve um glifo que mais tarde libera um efeito mágico. Você o inscreve em uma superfície (como uma mesa ou uma seção do chão ou parede) ou dentro de um objeto que pode ser fechado (como um livro, um pergaminho ou um baú de tesouro) para ocultar o glifo. O glifo pode cobrir uma área não superior a 3 metros de diâmetro. Se a superfície ou objeto for movido mais de 3 metros de onde você lançou este feitiço, o glifo será quebrado e a magia terminará sem ser acionada. \n\n O glifo é quase invisível e requer um teste bem sucedido de Inteligência (Investigação) contra seu CD de resistência de magia para ser encontrado. \n\n Você decide o que aciona o glifo quando você conjura uma magia. Para glifos inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou ficar sobre o glifo, remover outro objeto que cobre o glifo, aproximar-se a uma certa distância do glifo ou manipular o objeto no qual o glifo está inscrito. Para glifos inscritos em um objeto, os gatilhos mais comuns incluem abrir esse objeto, aproximar-se a uma certa distância do objeto ou ver ou ler o glifo. Uma vez que um glifo é acionado, esta magia termina. \n\n Você pode refinar ainda mais o gatilho para que a magia seja ativada apenas sob certas circunstâncias ou de acordo com características físicas (como altura ou peso), tipo de criatura (por exemplo, a proteção pode ser configurada para afetar aberrações ou drow) ou alinhamento. Você também pode definir condições para criaturas que não acionam o glifo, como aquelas que dizem uma determinada senha. \n\n Ao inscrever o glifo, escolha runas explosivas ou um glifo mágico. \n\nRunas Explosivas: Quando acionado, o glifo irrompe com energia mágica em uma esfera de 6 metros de raio centrada no glifo. A esfera espalha cantos arodada. Cada criatura da área deverá fazer um Teste de resistência de Destreza. Uma criatura sofre 5d8 de ácido, frio, fogo, raio ou dano sônico se falhar no teste de resistência (sua escolha quando Você cria o glifo), ou metade do dano se falhar. \n\nGlifo de Feitiço: Você pode armazenar um feitiço preparado de 3º nível ou inferior no glifo, lançando-o como parte da criação do glifo. O feitiço deve atingir uma única criatura ou área. O feitiço armazenado não tem efeito imediato quando lançado desta forma. Quando o glifo é acionado, o feitiço armazenado é lançado. Se o feitiço tiver um alvo, ele atingirá a criatura que acionou o glifo. Se a magia afetar uma área, a área será centrada naquela criatura. Se o feitiço invocar criaturas hostis ou criar objetos ou armadilhas prejudiciais, elas aparecem o mais próximo possível do intruso e o atacam. Se o feitiço exigir concentração, ele dura até o final de sua duração total."
  },
  {
    "name": "Videira Apreensora",
    "level": 4,
    "classes": [
      "Patrulheiro",
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "1 bonus ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você conjura uma videira que brota da grodada em um espaço desocupado de sua escolha que você possa ver dentro do alcance. Quando você conjura essa magia, você pode direcionar a videira para atacar uma criatura a até 9 metros dela que você puder ver. Essa criatura deve ter sucesso em um Teste de resistência de Destreza ou será puxada 6 metros diretamente em direção à videira.\n\nAté o final da magia, você pode direcionar a videira para atacar a mesma criatura ou outra como bônus de ação em cada um de seus turnos."
  },
  {
    "name": "Invisibilidade Superior",
    "level": 4,
    "classes": [
      "Feiticeiro",
      "Mago",
      "Bardo"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 minute",
    "description": "Você ou uma criatura que você toca fica invisível até o fim da magia. Qualquer coisa que o alvo esteja vestindo ou carregando é invisível, desde que esteja na pessoa do alvo."
  },
  {
    "name": "Restauração Superior",
    "level": 5,
    "classes": [
      "Clérigo",
      "Druida",
      "Bardo"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você imbui uma criatura que toca com energia positiva para desfazer um efeito debilitante. Você pode reduzir o nível de exaustão do alvo em um, ou encerrar um dos seguintes efeitos no alvo:\n\nUm efeito que enfeitiçado ou petrificou o alvoUma maldição, incluindo a sintonização do alvo com um item mágico amaldiçoadoQualquer redução em um dos valores de habilidade do alvoUm efeito que reduz ao máximo o ponto de vida do alvo"
  },
  {
    "name": "Guardião da Fé",
    "level": 4,
    "classes": [
      "Clérigo"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "8 horas",
    "description": "Um grande guardião espectral aparece e paira enquanto durar em um espaço desocupado de sua escolha que você possa ver dentro do alcance. O guardião ocupa esse espaço e é indistinto, exceto por uma espada brilhante e um escudo estampado com o símbolo de sua divindade.\n\nQualquer criatura hostil a você que se mova para um espaço de até 3 metros do guardião pela primeira vez em um turno deverá ter sucesso em um Teste de resistência de Destreza. A criatura leva 20 de dano radiante em um teste de resistência falho, ou metade do dano em um teste bem-sucedido. O guardião desaparece quando causa um total de 60 de dano."
  },
  {
    "name": "Guardas e Vigias",
    "level": 6,
    "classes": [
      "Mago",
      "Bardo"
    ],
    "school": "Abjuração",
    "castingTime": "10 minutes",
    "range": "Toque",
    "duration": "24 horas",
    "description": "Você cria uma enfermaria que protege até 2.500 pés quadrados de área útil (uma área de 50 pés quadrados, ou cem quadrados de 1,5 metro ou vinte e cinco quadrados de 3 metros). A área protegida pode ter até 6 metros de altura e ter o formato que você desejar. Você pode proteger vários andares de uma fortaleza dividindo a área entre eles, desde que você possa entrar em cada área contígua enquanto lança o feitiço.\n\nQuando você conjura essa magia, você pode especificar indivíduos que não são afetados por nenhum ou todos os efeitos que você escolher. Você também pode especificar uma senha que, quando falada em voz alta, torne o locutor imune a esses efeitos. Guardas e sentinelas criam os seguintes efeitos dentro da área protegida. Coloque luzes dançantes (cantrip) em quatro corredores. Você pode designar um programa simples que as luzes repitam enquanto durarem os guardas e enfermarias. Coloque a boca mágica (nível 2) em dois locais. Coloque a nuvem fedorenta (nível 3) em dois locais. Os vapores aparecem nos locais que você designar; Eles retornam dentro de 10 minutos se forem dispersos pelo vento enquanto durarem os guardas e enfermarias. Coloque uma rajada de vento constante (nível 2) em um corredor ou sala. Coloque uma sugestão (nível 2) em um local. Você seleciona uma área de até 1,5 metro quadrado, e qualquer criatura que entre ou passe pela área recebe a sugestão mentalmente. Toda a área protegida irradia magia. Uma dissipação de magia (nível 3) lançada em um efeito específico, se bem-sucedida, remove apenas esse efeito.\n\nVocê pode criar uma estrutura permanentemente protegida e protegida lançando esse feitiço lá todos os dias durante um ano."
  },
  {
    "name": "Rajada de Vento",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Mago",
      "Druida"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (60-foot line)",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma linha de vento forte de 18 metros de comprimento e 3 metros de largura sopra de você em uma direção que você escolher durante a duração do feitiço. Cada criatura que inicia seu turno na linha deve ser bem sucedida em um Teste de resistência de Força ou ser empurrada 4,5 metros para longe de você na direção seguinte à linha.\n\nQualquer criatura na linha deve gastar 60 centímetros de movimento para cada 30 centímetros que se mover ao se aproximar de você.\n\nA rajada dispersa gás ou vapor e extingue velas, tochas e chamas desprotegidas semelhantes na área. Faz com que chamas protegidas, como as de lanternas, dancem descontroladamente e tem 50% de chance de apagá-las.\n\nComo bônus de ação em cada um de seus turnos antes do término da magia, você pode mudar a direção em que a linha sai de você."
  },
  {
    "name": "Terreno Alucinatório",
    "level": 4,
    "classes": [
      "Bardo",
      "Druida",
      "Bruxo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "10 minutes",
    "range": "90 metros",
    "duration": "24 horas",
    "description": "Você faz com que o terreno natural em um cubo de 150 pés de alcance pareça, soe e cheire como algum outro tipo de terreno natural. Assim, campos abertos ou uma estrada podem assemelhar-se a um pântano, colina, fenda ou algum outro terreno difícil ou intransitável. Um lago pode parecer um prado gramado, um precipício como uma encosta suave ou um barranco coberto de pedras como uma estrada larga e lisa. Estruturas fabricadas, equipamentos e criaturas dentro da área não mudam em aparência.\n\nAs características táteis do terreno permanecem inalteradas, então as criaturas que entram na área provavelmente verão através da ilusão. Se a diferença não for óbvia ao toque, uma criatura examinando cuidadosamente a ilusão pode tentar um teste de Inteligência (Investigação) contra seu CD de resistência de magia para desacreditá-la. Uma criatura que discerne a ilusão pelo que ela é, vê-a como uma imagem vaga sobreposta ao terreno."
  },
  {
    "name": "Consagrar",
    "level": 5,
    "classes": [
      "Clérigo"
    ],
    "school": "Evocação",
    "castingTime": "24 hours",
    "range": "Toque",
    "duration": "Até ser dissipada",
    "description": "Você toca um ponto e infunde uma área arodada com poder sagrado (ou profano). A área pode ter um raio de até 18 metros, e o feitiço falha se o raio incluir uma área já sob o efeito de um feitiço sagrado. A área afetada está sujeita aos seguintes efeitos. Primeiro, celestiais, elementais, feéricos, inimigos e mortos-vivos não podem entrar na área, nem tais criaturas podem encantar, assustar ou possuir criaturas dentro dela. Qualquer criatura enfeitiçado, amedrontado ou possuída por tal criatura não será mais enfeitiçado, amedrontado ou possuído ao entrar na área. Você pode excluir um ou mais desses tipos de criaturas deste efeito. Segundo, você pode vincular um efeito extra à área. Escolha o efeito da lista a seguir ou escolha um efeito oferecido pelo Mestre. Alguns destes efeitos se aplicam às criaturas da área; você pode designar se o efeito se aplica a todas as criaturas, criaturas que seguem uma divindade ou líder específico, ou criaturas de um tipo específico, como orcs ou trolls. Quando uma criatura que seria afetada entra na área do feitiço pela primeira vez em um turno ou inicia seu turno ali, ela pode realizar um Teste de resistência de Carisma. Se obtiver sucesso, a criatura ignora o efeito extra até sair da área. \n\nCoragem: As criaturas afetadas não podem ser amedrontadas enquanto estiverem na área. \n\nEscuridão: A escuridão preenche a área. A luz normal, assim como a luz mágica criada por magias de nível inferior ao slot que você usou para lançar esta magia, não pode iluminar a área. \n\nLuz do dia: A luz brilhante preenche a área. A escuridão mágica criada por feitiços de nível inferior ao slot que você usou para lançar este feitiço não pode extinguir a luz. \n\nProteção de Energia: As criaturas afetadas na área têm resistência a um tipo de dano à sua escolha, exceto concussão, perfurante ou cortante. \n\nVulnerabilidade à Energia: As criaturas afetadas na área têm vulnerabilidade a um tipo de dano à sua escolha, exceto concussão, perfurante ou cortante. \n\nDescanso Eterno: Cadáveres enterrados na área não podem ser transformados em mortos-vivos. \n\nInterferência Extradimensional: As criaturas afetadas não podem se mover ou viajar usando teletransporte ou por meios extradimensionais ou interplanares. \n\nMedo: As criaturas afetadas ficam amedrontadas enquanto estão na área. \n\nSilêncio: Nenhum som pode emanar de dentro da área e nenhum som pode alcançá-la. \n\nLínguas: As criaturas afetadas podem se comunicar com qualquer outra criatura na área, mesmo que não compartilhem uma língua comum."
  },
  {
    "name": "Causar Dano",
    "level": 6,
    "classes": [
      "Clérigo"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você libera uma doença virulenta em uma criatura que você pode ver dentro do alcance. O alvo deverá fazer um Teste de resistência de Constituição. Em um teste de resistência falho, são necessários 14d6 dano necrótico, ou metade do dano em um teste de resistência bem-sucedido. O dano não pode reduzir os pontos de vida do alvo abaixo de 1. Se o alvo falhar no teste de resistência, seu ponto de vida máximo é reduzido por 1 hora em uma quantidade igual ao dano necrótico que sofreu. Qualquer efeito que remova uma doença permite que o ponto de vida máximo de uma criatura retorne ao normal antes que esse tempo passe."
  },
  {
    "name": "Aquecer Metal",
    "level": 2,
    "classes": [
      "Druida",
      "Bardo"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Escolha um objeto de metal manufaturado, como uma arma de metal ou uma armadura de metal pesado ou médio, que você possa ver dentro do alcance. Você faz com que o objeto brilhe em brasa. Qualquer criatura em contato físico com o objeto sofre 2d8 de dano de fogo quando você conjura uma magia. Até o fim da magia, você pode usar um bônus de ação em cada um dos seus turnos subsequentes para causar esse dano novamente.\n\nSe uma criatura estiver segurando ou usando o objeto e sofrer o dano dele, a criatura deverá ter sucesso em um Teste de resistência de Constituição ou largar o objeto, se puder. Caso não deixe cair o objeto, ele terá manobra de ataque e teste de habilidades até o início do seu próximo turno."
  },
  {
    "name": "Curar",
    "level": 6,
    "classes": [
      "Clérigo",
      "Druida"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Escolha uma criatura que você possa ver dentro do alcance. Uma onda de energia positiva percorre a criatura, fazendo com que ela recupere 70 pontos de vida. Este feitiço também acaba com a cegueira, a surdez e quaisquer doenças que afetem o alvo. Este feitiço não tem efeito sobre constructos ou mortos-vivos."
  },
  {
    "name": "Banquete dos Heróis",
    "level": 6,
    "classes": [
      "Clérigo",
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "10 minutes",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Você oferece um grande banquete, incluindo comida e bebida magníficas. O banquete leva 1 hora para ser consumido e desaparece ao final desse tempo, e os efeitos benéficos não se instalam até que essa hora termine. Até doze outras criaturas podem participar do banquete.\n\nUma criatura que participa do banquete ganha vários benefícios. A criatura é curada de todas as doenças e venenos, torna-se imune ao veneno e ao amedrontado, e faz todo Teste de resistência de Sabedorias com vantagem. Seu ponto de vida máximo também aumenta em 2d10 e ganha o mesmo número de pontos de vida. Esses benefícios duram 24 horas."
  },
  {
    "name": "Paralisar Monstro",
    "level": 5,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Escolha uma criatura que você possa ver dentro do alcance. O deve ser aprovado em Teste de resistência de Sabedoria ou ficar paralisado durante o período. Este feitiço não tem efeito em mortos-vivos. Ao final de cada um de seus turnos, o alvo pode fazer outro Teste de resistência de Sabedoria. Com um sucesso, a magia termina no alvo."
  },
  {
    "name": "Tempestade de Gelo",
    "level": 4,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "90 metros",
    "duration": "Instantâneo",
    "description": "Uma chuva de gelo duro como rocha atinge a grodada em um cilindro de 6 metros de raio e 12 metros de altura centrado em um ponto dentro do alcance. Cada criatura no cilindro deve fazer um Teste de resistência de Destreza. Uma criatura sofre 2d8 de dano de concussão e 4d6 de dano de frio em um teste de resistência falho, ou metade do dano em um teste bem-sucedido.\n\nGranizo transforma a área de efeito da tempestade em terreno difícil até o final do seu próximo turno."
  },
  {
    "name": "Praga de Insetos",
    "level": 5,
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "90 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Gafanhotos que atacam e mordem preenchem uma esfera de 6 metros de raio centrada em um ponto que você escolher dentro do alcance. A esfera se espalha pelos cantos arodada. A esfera permanece enquanto durar e sua área fica levemente obscurecida. A área da esfera é um terreno difícil.\n\nQuando a área aparecer, cada criatura nela contida deverá fazer um Teste de resistência de Constituição. Uma criatura sofre 4d10 dano perfurante em um teste de resistência falho, ou metade do dano se for bem sucedido. Uma criatura também deve realizar este teste de resistência quando entrar na área da magia pela primeira vez em um turno ou terminar seu turno ali."
  },
  {
    "name": "Destravar",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Mago",
      "Bardo"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Escolha um objeto que você possa ver dentro do alcance. O objeto pode ser uma porta, uma caixa, um baú, um conjunto de algemas, um cadeado ou outro objeto que contenha um meio mundano ou mágico que impeça o acesso.\n\nUm alvo que é mantido fechado por uma fechadura mundana ou que está preso ou barrado torna-se destrancado, destravado ou destravado. Se o objeto tiver vários bloqueios, apenas um deles será desbloqueado.\n\nSe você escolher um alvo que é mantido fechado com fechadura arcana (nível 2), esse feitiço é suprimido por 10 minutos, período durante o qual o alvo pode ser aberto e fechado normalmente.\n\nQuando você conjura uma magia, uma batida forte, audível a uma distância de até 300 pés, emana do objeto alvo."
  },
  {
    "name": "Conhecimento Lendário",
    "level": 5,
    "classes": [
      "Clérigo",
      "Mago",
      "Bardo"
    ],
    "school": "Adivinhação",
    "castingTime": "10 minutes",
    "range": "Si mesmo",
    "duration": "Instantâneo",
    "description": "Nomeie ou descreva uma pessoa, lugar ou objeto. O feitiço traz à sua mente um breve resumo do conhecimento significativo sobre a coisa que você nomeou. A tradição pode consistir em contos atuais, histórias esquecidas ou até mesmo conhecimento secreto que nunca foi amplamente conhecido. Se a coisa que você nomeou não for de importância lendária, você não obterá nenhuma informação. Quanto mais informações você já tiver sobre o assunto, mais precisas e detalhadas serão as informações que você receberá.\n\nAs informações que você aprende são precisas, mas podem ser expressas em linguagem figurada. Por exemplo, se você tiver um machado mágico misterioso em mãos, o feitiço pode fornecer esta informação: Ai do malfeitor cuja mão tocar o machado, pois até mesmo o cabo corta a mão dos malignos. Somente um verdadeiro Filho de Pedra, amante e amado de Moradin, pode despertar os verdadeiros poderes do machado, e somente com a palavra sagrada Rudnogg nos lábios."
  },
  {
    "name": "Levitar",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Uma criatura ou objeto de sua escolha que você possa ver dentro do alcance sobe verticalmente, até 6 metros, e permanece suspenso ali durante todo o tempo. O feitiço pode levitar um alvo que pesa até 500 quilos. A incriatura voluntária que obtiver êxito no Teste de resistência de Constituição não é afetada.\n\nO alvo só pode se mover empurrando ou puxando um objeto fixo ou superfície ao seu alcance (como uma parede ou teto), o que lhe permite mover-se como se estivesse escalando. Você pode alterar a altitude do alvo em até 6 metros em qualquer direção no seu turno. Se você for o alvo, poderá subir ou descer como parte do seu movimento. Caso contrário, você pode usar sua ação para mover o alvo, que deve permanecer dentro do alcance do feitiço.\n\nQuando a magia termina, o alvo flutua suavemente até a grodada se ela ainda estiver no ar."
  },
  {
    "name": "Localizar Animais ou Plantas",
    "level": 2,
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Instantâneo",
    "description": "Descreva ou nomeie um tipo específico de besta ou planta. Concentrando-se na voz da natureza em seus arredores, você aprende a direção e a distância até a criatura ou planta mais próxima desse tipo num raio de 8 quilômetros, se houver alguma presente."
  },
  {
    "name": "Raio",
    "level": 3,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (100-foot line)",
    "duration": "Instantâneo",
    "description": "Um raio formando uma linha de 30 metros de comprimento e 1,5 metro de largura sai de você na direção que você escolher. Cada criatura da linha deverá fazer um Teste de resistência de Destreza. Uma criatura sofre 8d6 de dano de raio em um teste de resistência falho, ou metade do dano em caso de sucesso.\n\nO raio incendeia objetos inflamáveis ​​na área que não estão sendo usados ​​ou carregados."
  },
  {
    "name": "Localizar Criatura",
    "level": 4,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 hour",
    "description": "Descreva ou nomeie uma criatura que lhe seja familiar. Você sente a direção da localização da criatura, desde que ela esteja a até 300 metros de você. Se a criatura estiver se movendo, você sabe a direção do seu movimento.\n\nO feitiço pode localizar uma criatura específica conhecida por você, ou a criatura mais próxima de um tipo específico (como um humano ou um unicórnio), desde que você tenha visto tal criatura de perto - a até 9 metros - pelo menos uma vez. Se a criatura que você descreveu ou nomeou estiver em uma forma diferente, como sob os efeitos de um feitiço polimorfo (nível 4), este feitiço não localiza a criatura.\n\nEste feitiço não pode localizar uma criatura se água corrente com pelo menos 3 metros de largura bloquear um caminho direto entre você e a criatura."
  },
  {
    "name": "Localizar Objeto",
    "level": 2,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Descreva ou nomeie um objeto que lhe seja familiar. Você sente a direção da localização do objeto, desde que esse objeto esteja a até 300 metros de você. Se o objeto estiver em movimento, você sabe a direção do seu movimento.\n\nO feitiço pode localizar um objeto específico conhecido por você, desde que você o tenha visto de perto – a até 9 metros – pelo menos uma vez. Alternativamente, a magia pode localizar o objeto mais próximo de um tipo específico, como um certo tipo de roupa, joia, mobília, ferramenta ou arma.\n\nEste feitiço não consegue localizar um objeto se qualquer espessura de chumbo, mesmo uma folha fina, bloquear um caminho direto entre você e o objeto."
  },
  {
    "name": "Jarro Mágico",
    "level": 6,
    "classes": [
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 minute",
    "range": "Si mesmo",
    "duration": "Até ser dissipada",
    "description": "Seu corpo cai em um estado catatônico quando sua alma o deixa e entra no recipiente que você usou para o componente material do feitiço. Enquanto sua alma habita o recipiente, você fica consciente de seus arredores como se estivesse no espaço do recipiente. Você não pode mover ou usar fatos. A única ação que você pode realizar é projetar sua alma até 30 metros para fora do recipiente, seja retornando ao seu corpo vivo (e encerrando o feitiço) ou tentando possuir o corpo de um humanóide.\n\nVocê pode tentar possuir qualquer humanóide a até 30 metros de você que você possa ver (criaturas protegidas por um feiti��o de proteção contra o mal e o bem (nível 1) ou círculo mágico (nível 3) não podem ser possuídas). O alvo deve fazer um Teste de resistência de Carisma. Em caso de falha, sua alma se move para o corpo do alvo, e a alma do alvo fica presa no recipiente. Se obtiver sucesso, o alvo resiste aos seus esforços para possuí-lo e você não poderá tentar possuí-lo novamente por 24 horas.\n\nDepois de possuir o corpo de uma criatura, você a controla. Suas estatísticas de jogo são substitu��das pelas estatísticas da criatura, embora você mantenha sua tendência e seus valores de Inteligência, Sabedoria e Carisma. Você retém o benefício de seus próprios recursos de classe. Se o alvo tiver algum nível de classe, você não poderá usar nenhum de seus recursos de classe.\n\nEnquanto isso, a alma da criatura possuída pode perceber o que está no recipiente usando seus próprios sentidos, mas não pode se mover ou realizar ações.\n\nEnquanto possuir um corpo, você pode usar sua ação para retornar do corpo hospedeiro para o contêiner se ele estiver a até 30 metros de você, devolvendo a alma da criatura hospedeira ao seu corpo. Se o corpo hospedeiro morrer enquanto você estiver nele, a criatura morre e você deverá fazer um Teste de resistência de Carisma contra sua própria CD de conjuração. Se obtiver sucesso, você retorna ao contêiner se ele estiver a até 30 metros de você. Caso contrário, você morre.\n\nSe o recipiente for destruído ou a magia terminar, sua alma retornará imediatamente ao seu corpo. Se seu corpo estiver a mais de 30 metros de você ou se seu corpo estiver morto quando você tentar retornar a ele, você morre. Se a alma de outra criatura estiver no recipiente quando ele for destruído, a alma da criatura retornará ao seu corpo se o corpo estiver vivo e dentro de 30 metros. Caso contrário, essa criatura morre.\n\nQuando a magia termina, o contêiner é destruído."
  },
  {
    "name": "Arma Mágica",
    "level": 2,
    "classes": [
      "Paladino",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 bonus ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Você toca uma arma não-mágica. Até o fim da magia, essa arma se torna uma arma mágica com bônus de +1 para jogo de ataques e jogadas de dano."
  },
  {
    "name": "Boca Mágica",
    "level": 2,
    "classes": [
      "Bardo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 minute",
    "range": "9 metros",
    "duration": "Até ser dissipada",
    "description": "Você implanta uma mensagem dentro de um objeto ao alcance, uma mensagem que é pronunciada quando uma condição de disparo é atendida. Escolha um objeto que você possa ver e que não esteja sendo usado ou carregado por outra criatura e, em seguida, fale a mensagem, que deve ter 25 palavras ou menos, embora possa ser entregue em até dez minutos. Finalmente, determine a circunstância que acionará o feitiço para entregar sua mensagem.\n\nQuando essa circunstância ocorre, uma boca mágica aparece no objeto e recita a mensagem em sua voz no mesmo volume que você falou. Se o objeto que você escolheu tiver uma boca ou algo parecido com uma boca (por exemplo, a boca de uma estátua) a boca mágica aparece ali para que as palavras pareçam vir da boca do objeto. Quando você conjura essa magia, você pode fazer com que o feitiço termine após entregar sua mensagem ou ele pode permanecer e repetir sua mensagem sempre que o gatilho ocorrer.\n\nA circunstância desencadeadora pode ser tão geral ou detalhada quanto você desejar, mas deve ser baseada em condições visuais ou sonoras que ocorrem a até 9 metros do objeto. Por exemplo, você poderia instruir a boca a falar quando alguma criatura se mover a até 9 metros do objeto ou quando um sino prateado tocar a até 9 metros."
  },
  {
    "name": "Curar Ferimentos em Massa",
    "level": 5,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Uma onda de energia curativa sai de um ponto de sua escolha dentro do alcance. Escolha até seis criaturas em uma esfera de 9 metros de raio centrada naquele ponto. Cada alvo recupera pontos de vida iguais a 3d8 + seu modificador de atributo de conjuração. Este feitiço não tem efeito sobre mortos-vivos ou constructoos."
  },
  {
    "name": "Sugestão em Massa",
    "level": 6,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "24 horas",
    "description": "Você sugere um curso de atividade (limitado a uma frase ou duas) e influencia magicamente até doze criaturas de sua escolha que você possa ver dentro do alcance e que possam ouvir e compreender você. Criaturas que não podem ser feitiçadas ficam imunes a esse efeito. A sugestão deve ser formulada de forma a fazer com que o curso da ação pareça razoável. Pedir à criatura que se esfaqueie, se jogue em uma lança, se imole ou faça algum outro ato obviamente prejudicial anula automaticamente o efeito do feitiço.\n\nCada alvo deverá fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, ele prossegue o curso de ação que você descreveu da melhor maneira possível. O curso de ação sugerido pode continuar durante todo o período. Se a atividade sugerida puder ser concluída em menos tempo, a magia termina quando o sujeito terminar o que foi solicitado.\n\nVocê também pode especificar condições que desencadearão uma atividade especial durante a duração. Por exemplo, você pode sugerir que um grupo de soldados dê todo o seu dinheiro ao primeiro mendigo que encontrar. Se a condição não for atendida antes do término da magia, a atividade não será realizada.\n\nSe você ou qualquer um de seus companheiros causar dano a uma criatura afetada por esta magia, a magia termina para aquela criatura."
  },
  {
    "name": "Imagem Espelhada",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "1 minuto",
    "description": "Três duplicatas ilusórias de você mesmo aparecem em seu espaço. Até o final da magia, as duplicatas se movem com você e imitam suas ações, mudando de posição para que seja impossível rastrear qual imagem é real. Você pode usar sua ação para disfalhar as duplicatas ilusórias.\n\nCada vez que uma criatura atingir você com um ataque durante a duração da magia, jogue um d20 para determinar se o ataque atinge uma de suas duplicatas.\n\nSe você tiver três duplicatas, deverá tirar 6 ou superior para alterar o alvo do ataque para uma duplicata. Com duas duplicatas, você deve obter um 8 ou superior. Com uma duplicata, você deve tirar 11 ou superior.\n\nA CA de uma duplicata é igual a 10 + seu Modificador de Destreza. Se um ataque acertar uma duplicata, a duplicata será destruída. Uma duplicata só pode ser destruída por um ataque que a acerte. Ignora todos os outros danos e efeitos. A magia termina quando todas as três duplicatas são destruídas.\n\nUma criatura não é afetada por esta magia se não puder ver, se confiar em outros sentidos além da visão, como a visão às cegas, ou se puder perceber ilusões como falsas, como acontece com a visão verdadeira."
  },
  {
    "name": "Enganar",
    "level": 5,
    "classes": [
      "Bardo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 hour",
    "description": "Você se torna invisível ao mesmo tempo que um duplo ilusório seu aparece onde você está. O dobro dura pela duração, mas a invisibilidade termina se você atacar ou lançar um feitiço.\n\nVocê pode usar sua ação para mover seu duplo ilusório até o dobro de sua velocidade e fazê-lo gesticular, falar e se comportar da maneira que você escolher.\n\nQue você possa ver através de seus olhos e ouvir através de seus ouvidos como se estivesse localizado onde ele está. Em cada um de seus turnos, como bônus de ação, você pode passar do uso dos sentidos para o uso dos seus próprios sentidos ou vice-versa. Enquanto você usa seus sentidos, você fica cego e ensurdecido em relação à sua própria surrodada."
  },
  {
    "name": "Passo Nebuloso",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Instantâneo",
    "description": "Brevemente cercado por uma névoa prateada, você se teletransporta até 9 metros para um espaço desocupado que você possa ver."
  },
  {
    "name": "Modificar Memória",
    "level": 5,
    "classes": [
      "Bardo",
      "Mago"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você tenta remodelar as memórias de outra criatura. Uma criatura que você possa ver deve fazer um Teste de resistência de Sabedoria. Se você está lutando contra a criatura, ela tem vantagem no teste de resistência. Em um teste de resistência falho, o alvo torna-se feitiçado por você durante todo o tempo. O alvo enfeitiçado está incapacitado e inconsciente de seus arredores, embora ainda possa ouvi-lo. Se sofrer algum dano ou for atingido por outro feitiço, esta magia termina e nenhuma das memórias do alvo é modificada.\n\nEnquanto durar este encanto, poderá afectar a memória do alvo de um acontecimento que viveu nas últimas 24 horas e que não durou mais de 10 minutos. Você pode eliminar permanentemente toda a memória do evento, permitir que o alvo relembre o evento com perfeita clareza e detalhes exatos, alterar sua memória dos detalhes do evento ou criar uma memória de algum outro evento.\n\nVocê deve falar com o alvo para descrever como suas memórias são afetadas, e ele deve ser capaz de compreender sua linguagem para que as memórias modificadas criem raízes. Sua mente preenche quaisquer lacunas nos detalhes da sua descrição. Se a magia terminar antes de você terminar de descrever as memórias modificadas, a memória da criatura não será alterada. Caso contrário, as memórias modificadas serão mantidas quando a magia terminar.\n\nUma memória modificada não afeta necessariamente o comportamento de uma criatura, especialmente se a memória contradizer as inclinações, tendências ou crenças naturais da criatura. Uma memória modificada ilógica, como implantar uma memória de quanto a criatura gostava de se banhar em ácido, é desfalecida, talvez como um sonho ruim. O Mestre pode considerar uma memória modificada absurda demais para afetar uma criatura de maneira significativa.\n\nUm feitiço de remoção de maldição (nível 3) ou restauração superior (nível 5) lançado no alvo restaura a verdadeira memória da criatura."
  },
  {
    "name": "Raio de Lua",
    "level": 2,
    "classes": [
      "Druida"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Um feixe prateado de luz pálida brilha em um cilindro de raio metro 1,5 e 12 metros de altura centrado em um ponto dentro do alcance. Até a magia terminar, uma luz fraca preenche o cilindro.\n\nQuando uma criatura entra na área da magia pela primeira vez em um turno ou inicia seu turno lá, ela é envolvida por chamas fantasmagóricas que causam uma dor lancinante e deve fazer um Teste de resistência de Constituição. São necessários 2d10 de dano radiante em um teste de resistência falho, ou metade disso em um teste bem-sucedido.\n\nUm metamorfo faz seu teste de resistência com desvantagem. Se falhar, ele também reverte instantaneamente à sua forma original e não pode assumir uma forma diferente até deixar os feitiços leves.\n\nEm cada um dos seus turnos após lançar este feitiço, você pode usar uma ação para mover o feixe 18 metros em qualquer direção."
  },
  {
    "name": "Mover a Terra",
    "level": 6,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 2 hours",
    "description": "Escolha uma área de terreno não superior a 12 metros de lado dentro do alcance. Você pode remodelar sujeira, areia ou argila na área da maneira que desejar durante o período. Você pode aumentar ou diminuir a elevação da área, criar ou preencher uma vala, erguer ou nivelar uma parede ou formar um pilar. A extensão de tais alterações não pode exceder metade da maior dimensão da área. Portanto, se você afetar um quadrado de 12 metros, poderá criar um pilar de até 6 metros de altura, aumentar ou diminuir a elevação do quadrado em até 6 metros, cavar uma trincheira de até 6 metros de profundidade e assim por diante. Leva 10 minutos para que essas alterações sejam concluídas.\n\nAo final de cada 10 minutos que você gasta concentrando-se no feitiço, você pode escolher uma nova área de terreno para afetar.\n\nComo a transformação do terreno ocorre lentamente, as criaturas da área geralmente não podem ficar presas ou feridas pelo movimento da grodada. Este feitiço não pode manipular pedra natural ou construção de pedra. Rochas e estruturas mudam para acomodar o novo terreno. Se a maneira como você molda o terreno tornar uma estrutura instável, ela poderá desabar.\n\nDa mesma forma, este feitiço não afeta diretamente o crescimento das plantas. A terra movida carrega consigo qualquer plantaa."
  },
  {
    "name": "Passagem sem Rastros",
    "level": 2,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 hour",
    "description": "Um véu de sombras e silêncio irradia de você, mascarando você e seus companheiros da detecção. Durante a duração, cada criatura que você escolher a até 9 metros de você (incluindo você) tem um bônus de +10 em testes de Destreza (Furtividade) e não pode ser rastreada exceto por meios mágicos. Uma criatura que recebe este bônus não deixa rastros ou outros vestígios de sua passagem."
  },
  {
    "name": "Passagem Mural",
    "level": 5,
    "classes": [
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "1 hora",
    "description": "Uma passagem aparece em um ponto de sua escolha que você possa ver em uma superfície de madeira, gesso ou pedra (como uma parede, um teto ou um chão) dentro do alcance e dura pela duração. Você escolhe as dimensões da abertura: até 1,5 metro de largura, 8 metros de altura e 20 metros de profundidade. A passagem não cria instabilidade na estrutura que a circunda.\n\nQuando a abertura desaparece, quaisquer criaturas ou objetos ainda na passagem criada pela magia são ejetados com segurança para um espaço desocupado mais próximo da superfície onde você conjura uma magia."
  },
  {
    "name": "Assassino Fantasmal",
    "level": 4,
    "classes": [
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você entra nos pesadelos de uma criatura que você pode ver dentro do alcance e cria uma manifestação ilusória de seus medos mais profundos, visíveis apenas para essa criatura. O alvo deve fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, o alvo fica amedrontado durante todo o tempo. No início de cada turno do alvo antes da magia terminar, o alvo deve ter sucesso em um Teste de resistência de Sabedoria ou sofrer 4d10 dano psíquico. Em um teste de resistência bem sucedido, a magia termina."
  },
  {
    "name": "Phantasmal Force",
    "level": 2,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você cria uma ilusão que se enraíza na mente de uma criatura que você pode ver dentro do alcance. O alvo deve fazer um Teste de resistência de Inteligência. Em um teste de resistência falho, você cria um objeto fantasmagórico, criatura ou outro fenômeno visível de sua escolha que não seja maior que um cubo de 30 metros e que seja perceptível apenas pelo alvo durante a duração. Este feitiço não tem efeito sobre mortos-vivos ou constructoos.\n\nO fantasma inclui som, temperatura e outros estímulos, também evidentes apenas para a criatura.\n\nO alvo pode usar sua ação para examinar o fantasma com um teste de Inteligência (Investigação) contra seu CD de resistência de magia. Se o teste for bem-sucedido, o alvo percebe que o fantasma é uma ilusão e a magia termina.\n\nEnquanto um alvo é afetado pelo feitiço, o alvo trata o fantasma como se fosse real. O alvo racionaliza quaisquer resultados ilógicos da interação com o fantasma. Por exemplo, um alvo que tenta atravessar uma ponte fantasmagórica que atravessa um abismo cai ao pisar na ponte. Se o alvo sobreviver à queda, ele ainda acredita que a ponte existe e apresenta alguma outra explicação para sua queda – ela foi empurrada, escorregou ou um vento forte pode tê-la derrubado.\n\nUm alvo afetado está tão convencido da realidade do fantasma que pode até sofrer danos causados ​​pela ilusão. Um fantasma criado para aparecer como uma criatura pode atacar o alvo. De forma similar. um fantasma criado para parecer fogo, uma poça de ácido ou lava pode queimar o alvo. A cada rodada do seu turno, o fantasma pode causar 1d6 de dano psíquico ao alvo se ele estiver na área do fantasma ou até 1,5 metro do fantasma, desde que a ilusão seja de uma criatura ou perigo que possa logicamente causar dano, como atacando. O alvo percebe o dano como um tipo apropriado à ilusão."
  },
  {
    "name": "Planar Ally",
    "level": 6,
    "classes": [
      "Clérigo"
    ],
    "school": "Conjuração",
    "castingTime": "10 minutes",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você implora por ajuda a uma entidade de outro mundo. O ser deve ser conhecido por você: um deus, um primordial, um príncipe demônio ou algum outro ser de poder cósmico. Essa entidade envia um celestial, um elemental ou um inimigo leal a ela para ajudá-lo, fazendo a criatura aparecer em um espaço desocupado dentro do alcance. Se você souber o nome de uma criatura específica, poderá pronunciá-lo quando conjurar essa magia para solicitar aquela criatura, embora você possa obter uma criatura diferente de qualquer maneira (a escolha do Mestre).\n\nQuando a criatura aparece, ela não é compelida a se comportar de nenhuma maneira específica. Você pode pedir à criatura que realize um serviço em troca de pagamento, mas ela não é obrigada a fazê-lo. A tarefa solicitada pode variar de simples (voar-nos através do abismo ou ajudar-nos a travar uma batalha) a complexa (espionar nossos inimigos ou proteger-nos durante nossa incursão na masmorra). Você deve ser capaz de se comunicar com a criatura para negociar seus serviços.\n\nO pagamento pode assumir diversas formas. Um celestial pode exigir uma doação considerável de ouro ou itens mágicos para um templo aliado, enquanto um inimigo pode exigir um sacrifício vivo ou um presente de tesouro. Algumas criaturas podem trocar seus serviços por uma missão realizada por você. Como regra geral, uma tarefa que pode ser medida em minutos exige um pagamento no valor de 100 po por minuto. Uma tarefa medida em horas requer 1.000 po por hora. E uma tarefa medida em dias (até 10 dias) requer 10.000 po por dia. O Mestre pode ajustar esses pagamentos com base nas circunstâncias sob as quais você conjura a magia. Se a tarefa estiver alinhada com o espírito da criatura, o pagamento poderá ser reduzido pela metade ou até mesmo dispensado. Tarefas não perigosas normalmente exigem apenas metade do pagamento sugerido, enquanto tarefas especialmente perigosas podem exigir um presente maior. As criaturas raramente aceitam tarefas que pareçam suicidas.\n\nApós a criatura completar a tarefa, ou quando a duração do serviço acordado expirar, a criatura retorna ao seu plano natal após apresentar um relatório a você, se for apropriado para a tarefa e se possível. Se você não conseguir chegar a um acordo sobre o preço do serviço da criatura, a criatura retornará imediatamente ao seu plano natal.\n\nUma criatura alistada para se juntar ao seu grupo conta como membro dele, recebendo uma parcela integral dos pontos de experiência concedidos."
  },
  {
    "name": "Vínculo Planar",
    "level": 5,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 hour",
    "range": "18 metros",
    "duration": "24 horas",
    "description": "Com este feitiço, você tenta vincular um celestial, um elemental, um feérico ou um inimigo ao seu serviço. A criatura deve estar dentro do alcance durante todo o lançamento do feitiço. (Normalmente, a criatura é primeiro convocada para o centro de um círculo mágico invertido para mantê-la presa enquanto o feitiço é lançado.) Ao completar a conjuração, o alvo deve fazer um Teste de resistência de Carisma. Em um teste de resistência falho, certamente servirá para você durante todo o tempo. Se a criatura foi invocada ou criada por outra magia, a duração daquela magia é estendida para corresponder à dura��ão desta magia.\n\nUma criatura presa deve seguir suas instruções da melhor maneira possível. Você pode comandar a criatura para acompanhá-lo em uma aventura, para proteger um local ou para entregar uma mensagem. A criatura obedece à letra de suas instruções, mas se for hostil a você, ela se esforçará para distorcer suas palavras para atingir seus próprios objetivos. Se a criatura seguir completamente suas instruções antes que a magia termine, ela viajará até você para relatar esse fato se você estiver no mesmo plano de existência. Se você estiver em um plano de existência diferente, ele retornará ao local onde você o amarrou e permanecerá lá até a magia terminar."
  },
  {
    "name": "Polimorfismo",
    "level": 4,
    "classes": [
      "Bardo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Este feitiço transforma uma criatura que você pode ver dentro do alcance em uma nova forma. Uma incriatura voluntária deve fazer um Teste de resistência de Sabedoria para evitar o efeito. Um metamorfo é automaticamente bem-sucedido neste teste de resistência.\n\nA transformação dura enquanto durar, ou até que o alvo caia para 0 pontos de vida ou morra. A nova forma pode ser qualquer besta cujo nível de desafio seja igual ou inferior ao do alvo (ou ao nível do alvo, se não tiver nível de desafio). As estatísticas de jogo do alvo, incluindo pontuações de habilidades mentais, são substituídas pelas estatísticas do besta escolhido. Ele mantém seu alinhamento e personalidade.\n\nO alvo assume os pontos de vida da sua nova forma. Ao retornar à sua forma normal, a criatura retorna ao número de pontos de vida que tinha antes de se transformar. Se reverter como resultado de cair para 0 pontos de vida, qualquer dano excessivo será transferido para sua forma normal.\n\nContanto que o dano excessivo não reduza a forma normal da criatura a 0 pontos de vida, ela não ser�� derrubada inconsciente.\n\nA criatura é limitada nas ações que pode realizar pela natureza de sua nova forma e não pode falar, lançar feitiços ou realizar qualquer outra ação que exija mãos ou fala.\n\nO equipamento do alvo se funde à nova forma. A criatura não pode ativar, usar, empunhar ou de qualquer outra forma se beneficiar de qualquer um de seus equipamentos."
  },
  {
    "name": "Ilusão Programada",
    "level": 6,
    "classes": [
      "Bardo",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Até ser dissipada",
    "description": "Você cria a ilusão de um objeto, uma criatura ou algum outro fenômeno visível dentro do alcance que é ativado quando ocorre uma condição específica. A ilusão é imperceptível até então. Não deve ser maior que um cubo de 9 metros, e você decide quando conjurar uma magia, como a ilusão se comporta e que sons ela emite. Esta performance roteirizada pode durar até 5 minutos.\n\nQuando a condição que você especificou ocorre, a ilusão surge e funciona da maneira que você descreveu. Assim que a ilusão termina de funcionar, ela desaparece e permanece inativa por 10 minutos. Após este tempo, a ilusão pode ser ativada novamente. A condição de disparo pode ser tão geral ou detalhada quanto você desejar, porém deve ser baseada em condições visuais ou sonoras que ocorrem a até 9 metros da área. Por exemplo, você poderia criar uma ilusão de si mesmo para aparecer e alertar outros que tentassem abrir uma porta com armadilha, ou você poderia configurar a ilusão para ser acionada somente quando uma criatura disser a palavra ou frase correta.\n\nA interação física com a imagem revela que ela é uma ilusão, pois coisas podem passar por ela. Uma criatura que use sua ação para examinar a imagem pode determinar que se trata de uma ilusão com um teste bem-sucedido de Inteligência (Investigação) contra seu CD de resistência de magia. Se uma criatura discernir a ilusão pelo que ela é, a criatura poderá ver através da imagem, e qualquer ruído que ela fizer soará vazio para a criatura."
  },
  {
    "name": "Ressuscitar os Mortos",
    "level": 5,
    "classes": [
      "Clérigo",
      "Paladino",
      "Bardo"
    ],
    "school": "Necromancia",
    "castingTime": "1 hour",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você devolve à vida uma criatura morta que você toca, desde que ela esteja morta há não mais de 10 dias. Se a alma da criatura estiver disposta e tiver liberdade para se juntar ao corpo, a criatura retorna à vida com 1 ponto de vida.\n\nEste feitiço também neutraliza quaisquer venenos e cura doenças não-mágicas que afetaram a criatura no momento em que ela morreu. Este feitiço, entretanto, não remove doenças mágicas, maldições ou efeitos similares; se eles não forem removidos antes de lançar o feitiço, eles entrarão em vigor quando a criatura retornar à vida. O feitiço não pode devolver a vida a uma criatura morta-vivo.\n\nEste feitiço fecha todos os ferimentos mortais, mas não restaura partes defeituosas do corpo. Se a criatura não tiver partes do corpo ou órgãos essenciais para sua sobrevivência – sua cabeça, por exemplo – o feitiço falha automaticamente.\n\nVoltar dos mortos é uma provação. O alvo sofre uma penalidade de -4 em todos os ataques, testes de resistência e testes de habilidades. Cada vez que o alvo termina um descanso longo, a penalidade é reduzida em 1 até desaparecer."
  },
  {
    "name": "Proteção contra Veneno",
    "level": 2,
    "classes": [
      "Clérigo",
      "Patrulheiro",
      "Paladino",
      "Druida"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Você toca uma criatura. Se for envenenado, você neutraliza o veneno. Se mais de um veneno atingir o alvo, você neutraliza um veneno que você sabe que está presente ou neutraliza um aleatoriamente. Durante a duração, o alvo tem vantagem em testes de resistência contra ser envenenado, e tem resistência a dano de veneno."
  },
  {
    "name": "Raio de Enfraquecer",
    "level": 2,
    "classes": [
      "Bruxo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Um raio negro de energia enervante brota do seu dedo em direção a uma criatura dentro do alcance. Faça um ataque de magia à distância contra o alvo. Sem sucesso, o alvo causa apenas metade do dano com ataques de armas que usam Força até a magia terminar.\n\nAo final de cada um dos turnos do alvo, ele poderá fazer um Teste de resistência de Constituição contra o feitiço. Com um sucesso, a magia termina."
  },
  {
    "name": "Reencarnar",
    "level": 5,
    "classes": [
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 hour",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você toca um humanóide morto ou um pedaço de um humanóide morto. Desde que a criatura esteja morta há não mais que 10 dias, o feitiço forma um novo corpo adulto para ela e então chama a alma para entrar naquele corpo. Se a alma do alvo não estiver livre ou disposta a fazê-lo, o feitiço falha.\n\nA magia cria um novo corpo para a criatura habitar, o que provavelmente faz com que a raça da criatura mude. O Mestre rola um d100 e consulta a tabela a seguir para determinar que forma a criatura assume quando restaurada à vida, ou o Mestre d100Raça01-04Dragãonascido05-13Anão, colina14-21Anão, montanha22-25Elfo, escuro26-34Elfo, alto35-42Elfo, madeira43-46Gnomo, floresta47-52Gnomo, rocha53-56Meio-elfo57-60Meio-orc61-68Halfling, pé leve69-76Halfling, robusto77-96Humano97-100Tiefling A criatura reencarnada relembra sua vida e experiências anteriores. Ele retém as capacidades que tinha em sua forma original, exceto pela troca de sua raça original pela nova e pela mudança de suas características raciais de acordo."
  },
  {
    "name": "Truque da Corda",
    "level": 2,
    "classes": [
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Você toca um pedaço de corda que tem até 18 metros de comprimento. Uma extremidade da corda então sobe no ar até que toda a corda fique pendurada perpendicularmente à grodada. Na extremidade superior da corda, uma entrada invisível se abre para um espaço extradimensional que dura até a magia terminar.\n\nO espaço extradimensional pode ser alcançado subindo até o topo da corda. O espaço pode acomodar até oito criaturas médias ou menores. A corda pode ser puxada para dentro do espaço, fazendo com que ela desapareça da vista fora do espaço.\n\nAtaques e feitiços não podem atravessar a entrada ou saída do espaço extradimensional, mas aqueles que estão dentro dele podem ver através de uma janela de metrô de 3 pés por 1,5 centrado na corda.\n\nQualquer coisa dentro do espaço extradimensional desaparece quando a magia termina."
  },
  {
    "name": "Scorching Ray",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Você cria três raios de fogo e os lança em alvos dentro do alcance. Você pode arremessá-los em um alvo ou em vários.\n\nFaça um ataque de magia à distância para cada raio. Sem sucesso, o alvo sofre 2d6 de dano de fogo."
  },
  {
    "name": "Escrutinar",
    "level": 5,
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Bruxo",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "10 minutes",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Que você possa ver e ouvir uma criatura específica que você escolher e que está no mesmo plano de existência que você. O alvo deve fazer um Teste de resistência de Sabedoria, que é modificado pelo quão bem você conhece o alvo e pelo tipo de conexão física que você tem com ele. Se um alvo souber que você está lançando este feitiço, ele poderá falhar no teste de resistência voluntariamente se quiser ser observado. KnowledgeSave ModifierSegunda mão (você já ouviu falar do alvo)+5Primeira mão (você conheceu o alvo)0Familiar (você conhece bem o alvo)-5ConnectionSave ModifierSemelhança ou imagem-2Posse ou roupa-4Parte do corpo, mecha de cabelo, pedaço de unha, ou algo parecido-10 Em um teste de resistência bem-sucedido, o alvo não é afetado, e você não pode usar este feitiço contra ele novamente por 24 horas. Em um teste de resistência falho, o feitiço cria um sensor invisível a até 3 metros do alvo. Que você possa ver e ouvir através do sensor como se estivesse lá. O sensor se move com o alvo, permanecendo a até 3 metros dele durante todo o tempo. Uma criatura que pode ver objetos invisíveis vê o sensor como uma esfera luminosa do tamanho do seu punho.\n\nEm vez de atacar uma criatura, você pode escolher um local que já tenha visto antes como alvo desta magia. Ao fazer isso, o sensor aparece naquele local e não se move."
  },
  {
    "name": "Aparência",
    "level": 5,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "8 horas",
    "description": "Este feitiço permite que você altere a aparência de qualquer número de criaturas que você possa ver dentro do alcance. Você dá a cada alvo escolhido uma aparência nova e ilusória. Um alvo relutante pode fazer um Teste de resistência de Carisma e, se tiver sucesso, não será afetado por este feitiço.\n\nO feitiço disfarça a aparência física, bem como roupas, armaduras, armas e equipamentos. Você pode fazer com que cada criatura pareça 30 centímetros mais baixa ou mais alta e pareça magra, gorda ou intermediária. Você não pode alterar o tipo de corpo de um alvo, então você deve escolher uma forma que tenha a mesma disposição básica dos membros. Caso contrário, a extensão da ilusão depende de você. O feitiço dura pela duração, a menos que você use sua ação para disfalha-lo antes.\n\nAs mudanças provocadas por este feitiço não resistem à inspeção física. Por exemplo, se você usar este feitiço para adicionar um chapéu à roupa de uma criatura, os objetos passarão através do chapéu e qualquer um que o tocar não sentirá nada ou sentirá a cabeça e o cabelo da criatura. Se você usar esse feitiço para parecer mais magro do que é, a mão de alguém que estender a mão para tocá-lo irá esbarrar em você enquanto aparentemente ainda está no ar.\n\nUma criatura pode usar sua ação para inspecionar um alvo e fazer um teste de Inteligência (Investigação) contra seu CD de resistência de magia. Se conseguir, percebe que o alvo está disfarçado."
  },
  {
    "name": "Ver Invisibilidade",
    "level": 2,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "1 hora",
    "description": "Durante o período, você vê criaturas e objetos invisíveis como se fossem visíveis, e você pode ver no Plano Etéreo. Criaturas e objetos etéreos parecem fantasmagóricos e translúcidos."
  },
  {
    "name": "Estilhaçar",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Um barulho repentino e alto, dolorosamente intenso, irrompe de um ponto de sua escolha dentro do alcance. Cada criatura numa esfera de 10 pés de raio centrada nesse ponto deve fazer um Teste de resistência de Constituição. Uma criatura sofre 3d8 de dano sônico em um teste de resistência falho, ou metade do dano em caso de sucesso. Uma criatura feita de material inorgânico como pedra, cristal ou metal tem desvantagem neste teste de resistência.\n\nUm objeto não-mágico que não esteja sendo vestido ou carregado também sofre o dano se estiver na área da magia."
  },
  {
    "name": "Escalar como Aranha",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Até o final da magia, uma criatura voluntária que você toca ganha a habilidade de se mover para cima, para baixo e através de superfícies verticais e de cabeça para baixo ao longo do teto, deixando suas mãos livres. O alvo também ganha uma velocidade de escalada igual à sua velocidade de caminhada."
  },
  {
    "name": "Crescimento de Espinhos",
    "level": 2,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "A grodada num raio de 6 metros centrada em um ponto dentro do alcance se contorce e brota espinhos duros e espinhos. A área se torna um terreno difícil durante o período. Quando uma criatura se move para dentro da área, ela sofre 2d4 dano perfurante para cada 1,5 metro que ela percorre.\n\nA transformação da grodada é camuflada para parecer natural. Qualquer criatura que não possa ver a área no momento em que a magia é lançada deve fazer um teste de Sabedoria (Percepção) contra seu CD de resistência de magia para reconhecer o terreno como perigoso antes de entrar nele."
  },
  {
    "name": "Staggering Smite",
    "level": 4,
    "classes": [
      "Paladino"
    ],
    "school": "Evocação",
    "castingTime": "1 bonus ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Na próxima vez que você acertar uma criatura com um ataque corpo a corpo com arma durante a duração deste feitiço, sua arma perfura tanto o corpo quanto a mente, e o ataque causa 4d6 de dano psíquico extra ao alvo. O alvo deve fazer um Teste de resistência de Sabedoria. Em um teste de resistência falho, ele tem manobras de ataque e teste de habilidades, e não pode sofrer ocorrências, até o final do seu próximo turno."
  },
  {
    "name": "Moldar Pedra",
    "level": 4,
    "classes": [
      "Clérigo",
      "Druida",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você toca um objeto de pedra de tamanho médio ou menor ou uma seção de pedra de não mais que 1,5 metro em qualquer dimensão e o molda em qualquer formato que se adapte ao seu propósito. Assim, por exemplo, você pode transformar uma pedra grande em uma arma, ídolo ou cofre, ou fazer uma pequena passagem através de uma parede, desde que a parede tenha menos de 1,5 metro de espessura. Você também pode moldar uma porta de pedra ou sua moldura para vedá-la. O objeto Você cria pode ter até duas dobradiças e uma trava, mas detalhes mecânicos mais finos não são possíveis."
  },
  {
    "name": "Raio de Sol",
    "level": 6,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (60-foot line)",
    "duration": "Concentração, up to 1 minute",
    "description": "Um feixe de luz brilhante sai da sua mão em uma linha de 1,5 metros de largura e 18 metros de comprimento. Cada criatura da linha deverá fazer um Teste de resistência de Constituição. Em um teste de resistência falho, uma criatura sofre 6d8 de dano radiante e fica cega até seu próximo turno. Em um teste de resistência bem-sucedido, ele leva metade do dano e não fica cego por esse feitiço. Mortos-vivos e gosmas têm desvantagem nesse teste de resistência.\n\nVocê pode criar uma nova linha de brilho conforme sua ação em qualquer turno até o final da magia.\n\nEnquanto isso, uma partícula de brilho brilhante brilha em sua mão. Ele emite luz brilhante em um raio de 9 metros e luz fraca por mais 9 metros. Esta luz é a luz solar."
  },
  {
    "name": "Pele de Pedra",
    "level": 4,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Patrulheiro",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Este feitiço transforma a carne de uma criatura voluntária que você toca tão dura quanto pedra. Até o fim da magia, o alvo tem resistência a concussão não-mágica, perfuração e dano cortante."
  },
  {
    "name": "Aljava Veloz",
    "level": 5,
    "classes": [
      "Patrulheiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 bonus ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 minute",
    "description": "Você transmuta sua aljava para que ela produza um suprimento infinito de munição não-mágica, que parece saltar para sua mão quando você a pega.\n\nEm cada um dos seus turnos até o final da magia, você pode usar uma ação bônus para fazer dois ataques com uma arma que utiliza munição da aljava. Cada vez que você faz um ataque à distância, sua aljava substitui magicamente a munição que você usou por uma munição não-mágica semelhante. Quaisquer pedaços de munição criados por este feitiço se desintegram quando a magia termina. Se a aljava deixar sua posse, a magia termina."
  },
  {
    "name": "Telecinese",
    "level": 5,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você ganha a habilidade de mover ou manipular criaturas ou objetos pelo pensamento. Quando você conjura uma magia, e conforme sua ação a cada rodada durante a duração, você pode exercer sua vontade em uma criatura ou objeto que você possa ver dentro do alcance, causando o efeito apropriado abaixo. Você pode afetar o mesmo alvo rodada após rodada, ou escolher um novo a qualquer momento. Se você trocar de alvo, o alvo anterior não será mais afetado pela magia. \n\nCriatura: Você pode tentar mover uma criatura enorme ou menor. Faça um teste de habilidade com seu atributo de conjuração contestado pelo teste de Força da criatura. Se você vencer a disputa, você moverá a criatura até 9 metros em qualquer direção, inclusive para cima, mas não além do alcance desta magia. Até o final do seu próximo turno, a criatura fica imobilizada em seu controle telecinético. Uma criatura levantada fica suspensa no ar. \n\n Nas rodadas subsequentes, você pode usar sua ação para tentar manter seu controle telecinético sobre a criatura, repetindo a competição. \n\nObjeto: Você pode tentar mover um objeto que pese até 1.000 libras. Se o objeto não estiver sendo usado ou carregado, você o move automaticamente até 9 metros em qualquer direção, mas não além do alcance deste feitiço. \n\n Se o objeto for usado ou carregado por uma criatura, você deve fazer um teste de habilidade com seu atributo de conjuração contestado pelo teste de Força daquela criatura. Se tiver sucesso, você puxa o objeto para longe daquela criatura e pode movê-lo até 9 metros em qualquer direção, mas não além do alcance desta magia. \n\n Você pode exercer controle preciso sobre objetos com sua pegada telecinética, como manipular uma ferramenta simples, abrir uma porta ou contêiner, guardar ou recuperar um item de um contêiner aberto ou despejar o conteúdo de um frasco."
  },
  {
    "name": "Círculo de Teletransporte",
    "level": 5,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 minute",
    "range": "3 metros",
    "duration": "1 rodada",
    "description": "Ao conjurar uma magia, você desenha um círculo de 3 metros de diâmetro na grodada inscrito com sigilos que ligam sua localização a um círculo de teletransporte permanente de sua escolha, cuja sequência de sigilos você conhece e que está no mesmo plano de existência que você. Um portal brilhante se abre dentro do círculo que você desenhou e permanece aberto até o final do seu próximo turno. Qualquer criatura que entre no portal aparece instantaneamente a até 1,5 metro do círculo de destino ou no espaço desocupado mais próximo se esse espaço estiver ocupado.\n\nMuitos dos principais templos, guildas e outros locais importantes possuem círculos de teletransporte permanentes inscritos em algum lugar dentro de seus limites. Cada um desses círculos inclui uma sequência única de sigilos - uma série de runas mágicas dispostas em um padrão específico. Quando você ganha a habilidade de lançar esta magia pela primeira vez, você aprende as sequências de sigilos para dois destinos no Plano Material, determinados pelo Mestre. Você pode aprender sequências de sigilos adicionais durante suas aventuras. Você pode memorizar uma nova sequência de sigilos depois de estudá-la por 1 minuto.\n\nVocê pode criar um círculo de teletransporte permanente lançando este feitiço no mesmo local todos os dias durante um ano. Você não precisa usar o círculo para se teletransportar ao conjurar uma magia dessa maneira."
  },
  {
    "name": "Transporte via Plantas",
    "level": 6,
    "classes": [
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "3 metros",
    "duration": "1 rodada",
    "description": "Este feitiço cria uma ligação mágica entre uma planta inanimada Grande ou maior dentro do alcance e outra planta, a qualquer distância, no mesmo plano de existência. Você deve ter visto ou tocado a planta de destino pelo menos uma vez antes. Enquanto isso, qualquer criatura pode entrar na planta alvo e sair da planta de destino usando 1,5 metro de movimento."
  },
  {
    "name": "Passo Arbóreo",
    "level": 5,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Você ganha a habilidade de entrar em uma árvore e passar de dentro dela para outra árvore do mesmo tipo em um raio de 150 metros. Ambas as árvores devem estar vivas e ter pelo menos o mesmo tamanho que você. Você deve usar 1,5 metro de movimento para entrar em uma árvore. Você sabe instantaneamente a localização de todas as outras árvores do mesmo tipo em um raio de 500 pés e, como parte do movimento usado para entrar na árvore, pode passar por uma dessas árvores ou sair da árvore em que está. Você aparece em um local de sua escolha a até 1,5 metro da árvore de destino, usando mais 1,5 metro de movimento. Se você não tiver mais movimento, você aparecerá a até 1,5 metro da árvore que você inseriu.\n\nVocê pode usar esta habilidade de transporte uma vez por rodada durante toda a duração. Você deve terminar cada turno fora de uma árvore."
  },
  {
    "name": "Visão Verdadeira",
    "level": 6,
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "1 hora",
    "description": "Este feitiço dá à criatura voluntária que você toca a habilidade de ver as coisas como elas realmente são. Durante esse período, a criatura tem visão verdadeira, percebe portas secretas escondidas por magia e pode ver o Plano Etéreo, tudo em um alcance de 36 metros."
  },
  {
    "name": "Toque Vampírico",
    "level": 3,
    "classes": [
      "Bruxo",
      "Mago"
    ],
    "school": "Necromancia",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "O toque de sua mão envolta em sombras pode sugar a força vital de outras pessoas para curar suas feridas. Faça um ataque de magia corpo a corpo contra uma criatura ao seu alcance. Sem sucesso, o alvo sofre 3d6 de dano necrótico e você recupera pontos de vida iguais à metade da quantidade de dano necrótico causado. Até o fim da magia, você pode fazer o ataque novamente em cada um de seus turnos como uma ação."
  },
  {
    "name": "Muro de Fogo",
    "level": 4,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você cria uma parede de fogo em uma superfície sólida dentro do alcance. Você pode fazer uma parede de até 18 metros de comprimento, 6 metros de altura e 30 centímetros de espessura, ou uma parede circular de até 6 metros de diâmetro, 6 metros de altura e 30 centímetros de espessura. A parede é opaca e dura enquanto durar.\n\nQuando a parede aparecer, cada criatura dentro de sua área deverá fazer um Teste de resistência de Destreza. Em um teste de resistência falho, uma criatura sofre 5d8 dano de fogo, ou metade do dano em um teste de resistência bem sucedido.\n\nUm lado da parede, selecionado por você quando você conjura essa magia, causa 5d8 de dano de fogo a cada criatura que termina seu turno a até 3 metros daquele lado ou dentro da parede. Uma criatura sofre o mesmo dano quando entra na parede pela primeira vez em um turno ou termina seu turno ali. O outro lado da parede não causa dano."
  },
  {
    "name": "Muro de Gelo",
    "level": 6,
    "classes": [
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você cria uma parede de gelo em uma superfície sólida dentro do alcance. Você pode transformá-lo em uma cúpula hemisférica ou em uma esfera com um raio de até 3 metros, ou pode moldar uma superfície plana composta por dez painéis quadrados de 3 metros. Cada painel deve ser contíguo a outro painel. Em qualquer forma, a parede tem 30 centímetros de espessura e dura enquanto durar.\n\nSe a parede cortar o espaço de uma criatura quando ela aparecer, a criatura dentro de sua área será empurrada para um lado da parede e deverá fazer um Teste de resistência de Destreza. Em um teste de resistência falho, a criatura sofre 10d6 dano de frio, ou metade do dano em um teste de resistência bem sucedido.\n\nA parede é um objeto que pode ser danificado e, portanto, rompido. Possui AC 12 e 30 pontos de vida por trecho de 3 metros, sendo vulnerável a dano de fogo. Reduzir uma secção de parede de 3 metros a 0 pontos de vida destrói-a e deixa para trás uma camada de ar gelado no espaço que a parede ocupava. Uma criatura que se mova pela camada de ar gelado pela primeira vez em uma curva deve fazer um Teste de resistência de Constituição. Essa criatura sofre 5d6 de dano de frio em um teste de resistência falho, ou metade do dano em um teste bem-sucedido."
  },
  {
    "name": "Muro de Força",
    "level": 5,
    "classes": [
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Uma parede invisível de força surge em um ponto que você escolhe dentro do alcance. A parede aparece em qualquer orientação que você escolher, como uma barreira horizontal ou vertical ou em ângulo. Pode flutuar livremente ou repousar sobre uma superfície sólida. Você pode transformá-lo em uma cúpula hemisférica ou em uma esfera com um raio de até 3 metros, ou pode moldar uma superfície plana composta por dez painéis de 3 metros por 3 metros. Cada painel deve ser contíguo a outro painel. De qualquer forma, a parede tem 1/4 de polegada de espessura. Dura enquanto durar. Se a parede cortar o espaço de uma criatura quando ela aparecer, a criatura será empurrada para um lado da parede (você escolhe qual lado).\n\nNada pode passar fisicamente pela parede. É imune a todos os danos e não pode ser dissipado por dissipar magia (nível 3). No entanto, um feitiço de desintegração (nível 6) destrói a parede instantaneamente. A parede também se estende até o Plano Etéreo, bloqueando a viagem etérea através da parede."
  },
  {
    "name": "Muro de Pedra",
    "level": 5,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Uma parede não-mágica de pedra sólida surge em um ponto que você escolher dentro do alcance. A parede tem 15 centímetros de espessura e é composta por dez painéis de 3 metros por 3 metros. Cada painel deve ser contíguo a pelo menos um outro painel. Alternativamente, você pode criar painéis de 3 metros por 20 pés com apenas 3 polegadas de espessura.\n\nSe a parede cortar o espaço de uma criatura quando ela aparecer, a criatura será empurrada para um lado da parede (sua escolha). Se uma criatura for cercada por todos os lados pela parede (ou pela parede e outra superfície sólida), essa criatura pode fazer um Teste de resistência de Destreza. Em caso de sucesso, ele pode usar sua ocorrência para aumentar sua velocidade e não ficar mais cercado pela parede.\n\nA parede pode ter qualquer formato que você desejar, embora não possa ocupar o mesmo espaço que uma criatura ou objeto. A parede não precisa ser vertical ou apoiada em uma base sólida. Deve, no entanto, fundir-se e ser solidamente suportado pela pedra existente. Assim, você pode usar este feitiço para transpor um abismo ou criar uma rampa.\n\nSe você criar um vão maior que 20 pés de comprimento, deverá reduzir pela metade o tamanho de cada painel para criar suportes. Você pode moldar a parede de maneira grosseira para criar ameias, ameias e assim por diante.\n\nA parede é um objeto feito de pedra que pode ser danificado e assim rompido. Cada painel tem AC 15 e 30 pontos de vida por polegada de espessura. Reduzir um painel a 0 pontos de vida o destrói e pode causar o colapso dos painéis conectados a critério do Mestre.\n\nSe você mantiver sua concentração neste feitiço durante toda a duração, o muro se tornará permanente e não poderá ser dissipado. Caso contrário, a parede desaparece quando a magia termina."
  },
  {
    "name": "Muro de Espinhos",
    "level": 6,
    "classes": [
      "Druida"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você cria uma parede de arbustos resistentes, flexíveis e emaranhados, cheios de espinhos pontiagudos. A parede aparece dentro do alcance em uma superfície sólida e dura enquanto durar. Você escolhe fazer a parede com até 18 metros de comprimento, 3 metros de altura e 1,5 metro de espessura ou um círculo com 20 pés de diâmetro e até 20 pés de altura e 1,5 metro de espessura. A parede bloqueia a linha de visão.\n\nQuando a parede aparecer, cada criatura dentro de sua área deverá fazer um Teste de resistência de Destreza. Em um teste de resistência falho, uma criatura sofre 7d8 dano perfurante, ou metade do dano em um teste de resistência bem sucedido.\n\nUma criatura pode atravessar a parede, embora de forma lenta e dolorosa. Para cada 30 centímetros que uma criatura se move através da parede, ela deve gastar 1,2 metros de movimento. Além disso, a primeira vez que uma criatura entra na parede em um turno ou termina seu turno ali, a criatura deve fazer um Teste de resistência de Destreza. São necessários 7d8 de dano cortante em um teste de resistência falho, ou metade do dano em um teste bem-sucedido."
  },
  {
    "name": "Respirar na Água",
    "level": 3,
    "classes": [
      "Druida",
      "Patrulheiro",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "24 horas",
    "description": "Este feitiço concede a até dez criaturas voluntárias que você possa ver dentro do alcance a habilidade de respirar debaixo d'água até o fim da magia. As criaturas afetadas também mantêm seu modo normal de respiração."
  },
  {
    "name": "Caminhar nas Águas",
    "level": 3,
    "classes": [
      "Clérigo",
      "Druida",
      "Patrulheiro",
      "Feiticeiro"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "1 hora",
    "description": "Este feitiço concede a habilidade de se mover através de qualquer superfície líquida - como água, ácido, lama, neve, areia movediça ou lava - como se fosse uma grodada sólida e inofensiva (criaturas que atravessam a lava derretida ainda podem sofrer danos da cura). Até dez criaturas voluntárias que você pode ver dentro do alcance ganham essa habilidade durante o período.\n\nSe você atingir uma criatura submersa em um líquido, a magia carrega o alvo para a superfície do líquido a uma velocidade de 18 metros por rodada."
  },
  {
    "name": "Teia",
    "level": 2,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você conjura uma massa de teia grossa e pegajosa em um ponto de sua escolha dentro do alcance. As teias preenchem um cubo de 6 metros a partir desse ponto durante toda a duração. As teias são terrenos difíceis e obscurecem levemente sua área.\n\nSe as teias não estiverem ancoradas entre duas massas sólidas (como paredes ou árvores) ou espalhadas por um chão, parede ou teto, a teia conjurada colapsará sobre si mesma e a magia terminará no início do seu próximo turno. As teias colocadas sobre uma superfície plana têm uma profundidade de 1,5 metro.\n\nCada criatura que inicia seu turno nas teias ou que nelas entra durante seu turno deve fazer um Teste de resistência de Destreza. Em um teste de resistência falho, a criatura fica imobilizada enquanto permanecer nas teias ou até se libertar.\n\nUma criatura imobilizada pelas teias pode usar sua ação para fazer um teste de Força contra seu CD de resistência de magia. Se tiver sucesso, não fica mais imobilizado.\n\nAs teias são inflamáveis. Qualquer metro cúbico de teia exposto ao fogo queima em 1 rodada, causando 2d4 dano de fogo a qualquer criatura que iniciar seu turno no fogo."
  },
  {
    "name": "Caminhar no Vento",
    "level": 6,
    "classes": [
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 minute",
    "range": "9 metros",
    "duration": "8 horas",
    "description": "Você e até dez criaturas voluntárias que você pode ver dentro do alcance assumem uma forma gasosa durante o período, aparecendo como tufos de nuvem. Enquanto estiver nesta forma de nuvem, uma criatura tem uma velocidade de vôo de 90 metros e tem resistência a danos de armas não-mágicas. As únicas ações que uma criatura pode assumir nesta forma são a ação Dash ou reverter à sua forma normal. A reversão leva 1 minuto, durante o qual a criatura fica incapacitada e não consegue se mover. Até o fim da magia, uma criatura pode reverter para a forma de nuvem, o que também requer a transformação de 1 minuto.\n\nSe uma criatura estiver na forma de nuvem e voando quando o efeito terminar, a criatura desce 18 metros por rodada durante 1 minuto até pousar, o que ela faz com segurança. Se não conseguir pousar após 1 minuto, a criatura percorrerá a distância restante."
  },
  {
    "name": "Muro de Vento",
    "level": 3,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma parede de vento forte surge da grodada em um ponto que você escolhe dentro do alcance. Você pode fazer a parede com até 50 metros de comprimento, 4,5 metros de altura e 1 metro de espessura. Você pode moldar a parede da maneira que desejar, desde que faça um caminho contínuo ao longo da grodada. A parede dura enquanto durar.\n\nQuando a parede aparecer, cada criatura dentro de sua área deverá fazer um Teste de resistência de Força. Uma criatura sofre 3d8 de dano de concussão em um teste de resistência falho, ou metade do dano em caso de sucesso.\n\nO vento forte mantém a neblina, a fumaça e outros gases afastados. Criaturas ou objetos voadores pequenos ou menores não podem passar pela parede. Materiais soltos e leves trazidos para a parede voam para cima. Flechas, dardos e outros projéteis comuns lançados em alvos atrás da parede são desviados para cima e automaticamente falham. (Pedregulhos lançados por gigantes ou máquinas de cerco, e projéteis semelhantes, não são afetados.) Criaturas em forma gasosa não podem passar por ele."
  },
  {
    "name": "Palavra de Retorno",
    "level": 6,
    "classes": [
      "Clérigo"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "2 metros",
    "duration": "Instantâneo",
    "description": "Você e até cinco criaturas voluntárias a até 1,5 metro de você se teletransportam instantaneamente para um santuário previamente designado. Você e quaisquer criaturas que se teletransportem com você aparecem no espaço desocupado mais próximo do local que você designou quando preparou seu santuário (veja abaixo). Se você lançar esta magia sem primeiro preparar um santuário, a magia não terá efeito.\n\nVocê deve designar um santuário lançando esta magia dentro de um local, como um templo, dedicado ou fortemente ligado à sua divindade. Se você tentar lançar a magia dessa maneira em uma área que não seja dedicada à sua divindade, a magia não terá efeito."
  },
  {
    "name": "Zona da Verdade",
    "level": 2,
    "classes": [
      "Bardo",
      "Clérigo",
      "Paladino"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "10 minutos",
    "description": "Você cria uma zona mágica que protege contra o engano em uma esfera de raio de 4,5 metros centrada em um ponto de sua escolha dentro do alcance. Até a magia terminar, uma criatura que entre na área do feitiço pela primeira vez no turno ou inicie seu turno lá deverá fazer um Teste de resistência de Carisma. Em um teste de resistência falho, uma criatura não pode falar uma mentira deliberada enquanto estiver no raio. você sabe se cada criatura é bem-sucedida ou falha em seu teste de resistência.\n\nUma criatura afetada está ciente do feitiço e pode, portanto, evitar responder perguntas às quais normalmente responderia com uma mentira. Tal criatura pode ser evasiva em suas respostas, desde que permaneça dentro dos limites da verdade."
  },
  {
    "name": "Tremor de Terra",
    "level": 1,
    "classes": [
      "Bardo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (10-foot radius)",
    "duration": "Instantâneo",
    "description": "Você causa um tremor na grodada num raio de 3 metros. Cada criatura que não seja você naquela área deve fazer um Teste de resistência de Destreza. Em um teste de resistência falho, uma criatura sofre 1d6 de dano de concussão e é derrubada. Se a grodada naquela área for de terra solta ou pedra, torna-se um terreno difícil até ser limpo."
  },
  {
    "name": "Pirotecnia",
    "level": 2,
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Escolha uma área de chama não mágica que você possa ver e que caiba dentro de um cubo de 1,5 metro dentro do alcance. Você pode apagar o fogo naquela área, e você cria fogos de artifício ou fumaça ao fazer isso. \n\nFogos de artifício: O alvo explode com uma deslumbrante exibição de cores. Cada criatura a até 3 metros do alvo deve ter sucesso em um Teste de resistência de Constituição ou ficará cega até o final do seu próximo turno. \n\nFumaça: Uma espessa fumaça preta se espalha do alvo em um raio de 6 metros, movendo cantos arodada. A área da fumaça está fortemente obscurecida. A fumaça persiste por 1 minuto ou até que um vento forte a disperse."
  },
  {
    "name": "Escrever no Céu",
    "level": 2,
    "classes": [
      "Bardo",
      "Druida",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Sight",
    "duration": "Concentração, up to 1 hour",
    "description": "Você faz com que até dez palavras se formem em uma parte do céu que você possa ver. As palavras parecem ser feitas de nuvens e permanecem no lugar durante a duração do feitiço. As palavras se dissipam quando a magia termina. Um vento forte pode dispersar as nuvens e encerrar o feitiço mais cedo."
  },
  {
    "name": "Trovejada",
    "level": 0,
    "classes": [
      "Bardo",
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Self (5-foot radius)",
    "duration": "Instantâneo",
    "description": "Você cria uma explosão de som estrondoso, que pode ser ouvido a 30 metros de distância. Cada criatura que não seja você a até 1,5 metro de distância deve fazer um Teste de resistência de Constituição. Em um teste de resistência falho, a criatura sofre 1d6 de dano sônico.\n\nO dano da magia aumenta em 1d6 quando você atinge o 5º nível (2d6), 11º nível (3d6) e 17º nível (4d6)."
  },
  {
    "name": "Vento de Proteção",
    "level": 2,
    "classes": [
      "Bardo",
      "Druida",
      "Feiticeiro"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Um vento forte (20 milhas por hora) sopra arodada em um raio de 3 metros e se move com você, permanecendo centrado em você. O vento dura a duração da magia. Ele ensurdece você e outras criaturas em sua área. Ele extingue chamas desprotegidas em sua área, do tamanho de tochas ou menores. A área é um terreno difícil para outras criaturas além de você."
  },
  {
    "name": "Controlar Chamas",
    "level": 0,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você escolhe uma chama não mágica que você possa ver dentro do alcance e que caiba dentro de um cubo de 1,5 metro. Você o afeta de uma das seguintes maneiras: Você expande instantaneamente a chama 1,5 metro em uma direção, desde que haja madeira ou outro combustível no novo local.  Você apaga instantaneamente as chamas dentro do cubo.  Você dobra ou reduz pela metade a área de luz brilhante e fraca emitida pela chama, altera sua cor ou ambos. A mudança dura 1 hora.  Você faz com que formas simples – como a forma vaga de uma criatura, um objeto inanimado ou um local – apareçam dentro das chamas e sejam animadas como você quiser. As formas duram 1 hora.  Se você lançar este feitiço várias vezes, você pode ter até três de seus efeitos não-Instantâneos ativos por vez, e você pode disfalhar tal efeito como uma ação."
  },
  {
    "name": "Criar Fogueira",
    "level": 0,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você cria uma fogueira na grodada que você pode ver dentro do alcance. Até a magia terminar, a fogueira preenche um cubo de 1,5 metros. Qualquer criatura no espaço da fogueira quando você conjurar uma magia deve ter sucesso em um Teste de resistência de Destreza ou sofrer 1d8 de dano de fogo. Uma criatura também deve fazer o teste de resistência quando entrar no espaço da fogueira pela primeira vez em um turno ou terminar seu turno ali.\n\nO dano da magia aumenta em 1d8 quando você atinge o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8)."
  },
  {
    "name": "Queimadura de Gelo",
    "level": 0,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você causa a formação de gelo entorpecente em uma criatura que você pode ver dentro do alcance. O alvo deverá fazer um Teste de resistência de Constituição. Em um teste de resistência falho, o alvo sofre 1d6 de dano de frio, e tem prevenção na próxima jogada de ataque com arma que fizer antes do final do seu próximo turno.\n\nO dano da magia aumenta em 1d6 quando você atinge o 5º nível (2d6), 11º nível (3d6) e 17º nível (4d6)."
  },
  {
    "name": "Rajada",
    "level": 0,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Você agarra o ar e o obriga a criar um dos seguintes efeitos em um ponto que você possa ver dentro do alcance: Uma criatura Média ou menor que você escolher deve ter sucesso em um Teste de resistência de Força ou ser empurrada até 1,5 metro de distância de você. Você cria uma pequena rajada de ar capaz de mover um objeto que não é segurado nem carregado e que não pesa mais do que 5 libras. O objeto é empurrado até 3 metros de distância de você. Ele não é empurrado com força suficiente para causar danos. Você cria um efeito sensorial inofensivo usando o ar, como fazer com que as folhas farfalhem, o vento feche as venezianas ou suas roupas ondulem com a brisa."
  },
  {
    "name": "Pedra Mágica",
    "level": 0,
    "classes": [
      "Druida",
      "Bruxo"
    ],
    "school": "Transmutação",
    "castingTime": "1 bonus ação",
    "range": "Toque",
    "duration": "1 minuto",
    "description": "Você toca de uma a três pedras e as imbui de magia. Você ou outra pessoa pode fazer um ataque de magia à distância com uma das pedras, jogando-a ou arremessando-a com uma funda. Se lançado, tem alcance de 18 metros. Se outra pessoa atacar com a pedra, esse atacante adiciona seu modificador de atributo de conjuração, e não o do atacante, à jogada de ataque. Sem sucesso, o alvo leva dano de concussão igual a 1d6 + seu modificador de atributo de conjuração. Sucesso ou falha, o feitiço termina então na pedra.\n\nSe você conjurar esta magia novamente, a magia termina mais cedo em quaisquer pedras ainda afetadas por ela."
  },
  {
    "name": "Moldar a Terra",
    "level": 0,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Você escolhe uma porção de terra ou pedra que você possa ver dentro do alcance e que caiba dentro de um cubo de 1,5 metro. Você o manipula de uma das seguintes maneiras: Se você atingir uma área de terra solta, poderá escavá-la instantaneamente, movê-la ao longo da grodada e depositá-la a até 1,5 metro de distância. Esse movimento não tem força suficiente para causar danos. Você faz com que formas, cores ou ambas apareçam na terra ou na pedra, soletrando palavras, criando imagens ou moldando padrões. As mudanças duram 1 hora. Se a sujeira ou pedra que você atingir estiver na grodada, você fará com que ela se torne um terreno difícil. Alternativamente, você pode fazer com que a grodada se torne um terreno normal se já for um terreno difícil. Essa mudança dura 1 hora. Se você lançar este feitiço múltiplas vezes, você não poderá ter mais do que dois de seus efeitos não Instantâneos ativos por vez, e poderá disfalhar tal efeito como uma ação."
  },
  {
    "name": "Modelar Água",
    "level": 0,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Instantâneo",
    "description": "Você escolhe uma área de água que você possa ver dentro do alcance e que caiba dentro de um cubo de 1,5 metro. Você o manipula de uma das seguintes maneiras: Você move instantaneamente ou altera o fluxo da água conforme direciona, até 1,5 metro em qualquer direção. Este movimento não tem força suficiente para causar danos.  Você faz com que a água tenha formas simples e se anime conforme sua direção. Essa mudança dura 1 hora.  Você altera a cor ou opacidade da água. A água deve ser trocada da mesma forma durante todo o processo. Essa mudança dura 1 hora.  Você congela a água, desde que nela não haja criaturas. A água descongela em 1 hora.  Se você lançar este feitiço múltiplas vezes, você não poderá ter mais do que dois de seus efeitos não Instantâneos ativos por vez, e poderá disfalhar tal efeito como uma ação."
  },
  {
    "name": "Absorver Elementos",
    "level": 1,
    "classes": [
      "Druida",
      "Patrulheiro",
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "1 reação, which you take when you take acid, cold, fire, lightning, or thunder damage",
    "range": "Si mesmo",
    "duration": "1 rodada",
    "description": "O feitiço captura parte da energia recebida, diminuindo seu efeito sobre você e armazenando-a para seu próximo ataque corpo a corpo. Você tem resistência ao tipo de dano desencadeado até o início do seu próximo turno. Além disso, na primeira vez que você tiver sucesso com um ataque corpo a corpo em seu próximo turno, o alvo sofre 1d6 de dano extra do tipo desencadeante e a magia termina."
  },
  {
    "name": "Beast Bond",
    "level": 1,
    "classes": [
      "Druida",
      "Patrulheiro"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você estabelece um vínculo telepático com um besta que você toca que é amigável com você ou enfeitiçado por você. O feitiço falha se a Inteligência do besta for 4 ou superior. Até a magia terminar, o link estará ativo enquanto você e o besta estiverem na linha de visão um do outro. Através do link, o besta pode entender suas mensagens telepáticas para ele e pode comunicar telepaticamente emoções e conceitos simples para você. Enquanto o link estiver ativo, o besta ganha vantagem no jogo de ataques contra qualquer criatura a até 1,5 metro de distância que você possa ver."
  },
  {
    "name": "Faca de Gelo",
    "level": 1,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Instantâneo",
    "description": "Você cria um pedaço de gelo e o arremessa em uma criatura dentro do alcance. Faça um ataque de magia à distância contra o alvo. Sem sucesso, o alvo leva 1d10 dano perfurante. Sucesso ou falha, o fragmento então explode. O alvo e cada criatura a até 1,5 metro do ponto onde o gelo explodiu devem ter sucesso em um Teste de resistência de Destreza ou sofrer 2d6 dano de frio."
  },
  {
    "name": "Prender à Terra",
    "level": 2,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "90 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Escolha uma criatura que você possa ver dentro do alcance. Tiras amarelas de energia mágica giram em torno da criatura. O alvo deve ter sucesso em um Teste de resistência de Força ou sua velocidade de vôo (se houver) será reduzida a 0 pés durante a duração da magia. Uma criatura aérea afetada por este feitiço desce 18 metros por rodada até atingir a grodada ou a magia termina."
  },
  {
    "name": "Redemoinho de Poeira",
    "level": 2,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Escolha um cubo de ar desocupado de 1,5 metro que você possa ver dentro do alcance. Uma força elemental que se assemelha a um redemoinho de poeira aparece no cubo e dura pela duração do feitiço.\n\nQualquer criatura que termine seu turno a até 1,5 metro do redemoinho deve fazer um Teste de resistência de Força. Em um teste de resistência falho, a criatura sofre 1d8 de dano de concussão e é empurrada 3 metros para longe. Em um teste de resistência bem-sucedido, a criatura leva metade do dano e não é empurrada.\n\nComo ação bônus, você pode mover o redemoinho até 9 metros em qualquer direção. Se o redemoinho se mover sobre areia, poeira, terra solta ou cascalho pequeno, ele suga o material e forma uma nuvem de detritos com raio de 3 metros que dura até o início do seu próximo turno. A nuvem obscurece fortemente sua área."
  },
  {
    "name": "Catapulta",
    "level": 1,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "Escolha um objeto pesando de 1 a 5 libras dentro do alcance que não esteja sendo usado ou carregado. O objeto voa em linha reta até 27 metros na direção que você escolher antes de cair na grodada, parando precocemente caso colida contra uma superfície sólida. Se o objeto atingir uma criatura, essa criatura deverá fazer um Teste de resistência de Destreza. Em um teste de resistência falho, o objeto atinge o alvo e para de se mover. Em ambos os casos, tanto o objeto quanto a criatura ou superfície sólida sofrem 3d8 de dano de concussão."
  },
  {
    "name": "Controlar Ventos",
    "level": 5,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "90 metros",
    "duration": "Concentração, up to 1 hour",
    "description": "Você assume o controle do ar em um cubo de 30 metros que você pode ver dentro do alcance. Escolha um dos seguintes efeitos quando você conjurar uma magia. O efeito dura a duração da magia, a menos que você use sua ação em um turno posterior para mudar para um efeito diferente. Você também pode usar sua ação para interromper temporariamente o efeito ou reiniciar um que você interrompeu. \n\nRajadas: Um vento sopra dentro do cubo, soprando continuamente na direção horizontal que você designar. Você escolhe a intensidade do vento: calmo, moderado ou forte. Se o vento for moderado ou forte, o ataque à distância com armas que entram ou saem do cubo ou passam por ele têm desvantagens em sua estratégia de ataque. Se o vento estiver forte, qualquer criatura que se mova contra o vento deverá gastar 1 metro extra de movimento para cada pé movido. \n\nCorrente descendente: Você faz com que uma rajada sustentada de vento forte sopre para baixo a partir do topo do cubo. Ataque à distância com armas que passam pelo cubo ou que são feitas contra alvos dentro dele têm desvantagem em seu ataque de ataques. Uma criatura deve fazer um Teste de resistência de Força se voar para dentro do cubo pela primeira vez em um turno ou começar seu turno voando. Em um teste de resistência falho, a criatura é derrubada. \n\nCorrente ascendente: Você causa uma corrente ascendente sustentada dentro do cubo, subindo a partir da parte inferior do cubo. Criaturas que finalizam uma queda dentro do cubo sofrem apenas metade do dano da queda. Quando uma criatura no cubo dá um salto vertical, a criatura pode saltar até 3 metros acima do normal."
  },
  {
    "name": "Bones of the Earth",
    "level": 6,
    "classes": [
      "Druida"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Você faz com que até seis pilares de pedra explodam de lugares na grodada que você pode ver dentro do alcance. Cada pilar é um cilindro com diâmetro de 1,5 metro e altura de até 9 metros. A grodada onde aparece um pilar deve ser larga o suficiente para seu diâmetro, e você pode alvo grodada sob uma criatura se essa criatura for Média ou menor. Cada pilar possui AC 5 e 30 pontos de vida. Ao ser reduzido a 0 pontos de vida, um pilar desfaz-se em escombros, o que cria uma área de terreno difícil com um raio de 3 metros. Os escombros duram até serem removidos.\n\nSe um pilar for criado sob uma criatura, essa criatura deverá ter sucesso em um Teste de resistência de Destreza ou será levantada pelo pilar. Uma criatura pode optar por falhar no salvamento.\n\nSe um pilar for impedido de atingir sua altura total por causa de um teto ou outro obstáculo, uma criatura no pilar sofre 6d6 de dano de concussão e fica imobilizada, presa entre o pilar e o obstáculo. A criatura imobilizada pode usar uma ação para fazer um teste de Força ou Destreza (a escolha da criatura) contra a CD teste de resistência da magia. Se obtiver sucesso, a criatura não estará mais imobilizada e deverá sair do pilar ou cair dele."
  },
  {
    "name": "Terra em Erupção",
    "level": 3,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Escolha um ponto que você possa ver na área dentro do alcance. Uma fonte de terra agitada e pedra irrompe num cubo de 6 metros centrado naquele ponto. Cada criatura daquela área deverá fazer um Teste de resistência de Destreza. Uma criatura sofre 3d12 de dano de concussão em um teste de resistência falho, ou metade do dano em um teste bem sucedido. Além disso, a grodada naquela área torna-se um terreno difícil até ser removida. Cada porção de 1,5 metro quadrado da área requer pelo menos 1 minuto para ser limpa manualmente."
  },
  {
    "name": "Perdição Elemental",
    "level": 4,
    "classes": [
      "Druida",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Escolha uma criatura que você possa ver dentro do alcance e escolha um dos seguintes tipos de dano: ácido, frio, fogo, raio ou trovão. O alvo deve ter sucesso em um Teste de resistência de Constituição ou ser afetado pelo feitiço durante sua duração. Na primeira vez em cada turno o alvo afetado sofre dano do tipo escolhido, o alvo sofre 2d6 de dano extra daquele tipo. Além disso, o alvo perde qualquer resistência a esse tipo de dano até o fim da magia."
  },
  {
    "name": "Flechas em Chamas",
    "level": 3,
    "classes": [
      "Druida",
      "Patrulheiro",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Concentração, up to 1 hour",
    "description": "Você toca uma aljava contendo flechas ou virotes. Quando um alvo é atingido por um ataque à distância com arma usando uma munição retirada da aljava, o alvo sofre 1d6 de dano de fogo extra. A magia do feitiço termina na munição quando ela tiver sucesso ou falha, e a magia termina quando doze peças de munição forem retiradas da aljava."
  },
  {
    "name": "Investidura de Chamas",
    "level": 6,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Chamas percorrem seu corpo, lançando luz brilhante em um raio de 9 metros e penumbra por mais 9 metros durante a duração do feitiço. As chamas não fazem mal a você. Até a magia terminar, você ganha os seguintes benefícios: Você é imune a dano de fogo e tem resistência a dano de frio. Qualquer criatura que se mova até 1,5 metro de você pela primeira vez em um turno ou termine seu turno lá leva 1d10 dano de fogo. Você pode usar sua ação para criar uma linha de fogo de 4,5 metros de comprimento e 1,5 metro de largura estendendo-se de você na direção que você escolher. Cada criatura da linha deverá fazer um Teste de resistência de Destreza. Uma criatura sofre 4d8 de dano de fogo em um teste de resistência falho, ou metade do dano em caso de sucesso."
  },
  {
    "name": "Investidura de Gelo",
    "level": 6,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Até a magia terminar, o gelo cobre seu corpo e você ganha os seguintes benefícios: Você é imune ao dano de frio e tem resistência ao dano de fogo. Você pode se mover por terreno difícil criado por gelo ou neve sem gastar movimento extra. O raio se move com você. Você pode usar sua ação para criar um cone de vento gelado de 4,5 metros estendendo-se de sua mão estendida na direção que você escolher. Cada criatura do cone deverá fazer um Teste de resistência de Constituição. Uma criatura sofre 4d6 de dano de frio em um teste de resistência falho, ou metade do dano em caso de sucesso. Uma criatura que falhar no teste de resistência contra este efeito terá sua velocidade reduzida pela metade até o início do seu próximo turno."
  },
  {
    "name": "Investidura de Pedra",
    "level": 6,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Até o fim da magia, pedaços de rocha se espalham por seu corpo e você ganha os seguintes benefícios: Você tem resistência a concussão, perfuração e dano cortante de armas não-mágicas. Você pode usar sua ação para criar um pequeno terremoto na grodada em um raio de 4,5 metros centrado em você. Outras criaturas nessa grodada devem ter sucesso em um Teste de resistência de Destreza ou serão derrubadas. Você pode se mover por terreno difícil feito de terra ou pedra sem gastar movimento extra. Você pode se mover através de terra sólida ou pedra como se fosse ar e sem desestabilizá-la, mas não pode terminar seu movimento aí. Se você fizer isso, você será ejetado para o espaço desocupado mais próximo, esta magia termina, e você ficará atordoado até o final do seu próximo turno."
  },
  {
    "name": "Investidura de Vento",
    "level": 6,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Bruxo",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 10 minutes",
    "description": "Até a magia terminar, o vento gira em torno de você, e você ganha os seguintes benefícios: Ataque à distância com armas feito contra você tem prevenção na jogada de ataque. Você ganha uma velocidade de vôo de 18 metros. Se você ainda estiver voando quando a magia terminar, você cairá, a menos que possa de alguma forma evitá-la. Você pode usar sua ação para criar um cubo de 4,5 metros de vento rodopiante centrado em um ponto que você possa ver a até 18 metros de você. Cada criatura daquela área deverá fazer um Teste de resistência de Constituição. Uma criatura sofre 2d10 de dano de concussão em um teste de resistência falho, ou metade do dano em caso de sucesso. Se uma criatura Grande ou menor falhar no salvamento, essa criatura também será empurrada até 3 metros de distância do centro do cubo."
  },
  {
    "name": "Maelstrom",
    "level": 5,
    "classes": [
      "Druida"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma massa de água com profundidade de 1,5 metro aparece e gira em um raio de 9 metros centrado em um ponto que você possa ver dentro do alcance. O ponto deve estar em uma grodada ou em um corpo d’água. Até o final da magia, aquela área é um terreno difícil, e qualquer criatura que iniciar seu turno lá deve ter sucesso em um Teste de resistência de Força ou sofrer 6d6 de dano de concussão e ser puxada 3 metros em direção ao centro."
  },
  {
    "name": "Proteção Primordial",
    "level": 6,
    "classes": [
      "Druida"
    ],
    "school": "Abjuração",
    "castingTime": "1 ação",
    "range": "Si mesmo",
    "duration": "Concentração, up to 1 minute",
    "description": "Você tem resistência a ácido, frio, fogo, raio e dano sônico enquanto durar o feitiço.\n\nAo sofrer dano de um desses tipos, você pode usar sua ocorrência para ganhar imunidade a esse tipo de dano, inclusive contra o dano desencadeador. Se você fizer isso, as resistências terminam e você terá imunidade até o final do seu próximo turno, momento em que a magia termina."
  },
  {
    "name": "Onda Tidal",
    "level": 3,
    "classes": [
      "Druida",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Você evoca uma onda de água que cai sobre uma área dentro do alcance. A área pode ter até 9 metros de comprimento, até 3 metros de largura e até 3 metros de altura. Cada criatura daquela área deverá fazer um Teste de resistência de Destreza. Em caso de falha, uma criatura sofre 4d8 de dano de concussão e é derrubada. Em caso de sucesso, a criatura sofre metade do dano e não é derrubada. A água então se espalha pela grodada em todas as direções, extinguindo chamas desprotegidas em sua área e em até 9 metros dela."
  },
  {
    "name": "Transmutar Rocha",
    "level": 5,
    "classes": [
      "Druida",
      "Mago"
    ],
    "school": "Transmutação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Instantâneo",
    "description": "Você escolhe uma área de pedra ou lama que você possa ver, que caiba em um cubo de 12 metros e esteja dentro do alcance, e escolha um dos seguintes efeitos. \n\nTransmutar Rocha em Lama: Rocha não-mágica de qualquer tipo na área torna-se um volume igual de lama espessa e fluida que permanece durante a duração da magia. \n\n A grodada na área do feitiço fica lamacenta o suficiente para que as criaturas possam afundar nela. Cada pé que uma criatura move pela lama custa 4 pés de movimento, e qualquer criatura na grodada quando você conjura uma magia deve fazer um Teste de resistência de Força. Uma criatura também deve fazer o teste de resistência quando entrar na área pela primeira vez em um turno ou terminar seu turno ali. Em um teste de resistência falho, uma criatura afunda na lama e fica imobilizada, embora possa usar uma ação para acabar com a condição imobilizada em si mesma, libertando-se da lama. \n\n Se você conjurar magia no teto, a lama cai. Qualquer criatura debaixo da lama quando cair deve fazer um Teste de resistência de Destreza. Uma criatura sofre 4d8 de dano de concussão em um teste de resistência falho, ou metade do dano em um teste bem-sucedido. \n\nTransmute Lama em Pedra. Lama não-mágica ou areia movediça em uma área com não mais que 3 metros de profundidade se transforma em pedra macia durante a duração da magia. Qualquer criatura na lama ao se transformar deve fazer um Teste de resistência de Destreza. Em um teste de resistência bem-sucedido, uma criatura é desviada com segurança para a superfície em um espaço desocupado. Em um teste de resistência falho, uma criatura fica imobilizada pela rocha. Uma criatura imobilizada, ou outra criatura ao alcance, pode usar uma ação para tentar quebrar a rocha, obtendo sucesso em um teste de Força CD 20 ou causando dano a ela. A pedra tem AC 15 e 25 pontos de vida, e é imune a veneno e dano psíquico."
  },
  {
    "name": "Muro de Água",
    "level": 3,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você evoca uma parede de água na grodada em um ponto que você pode ver dentro do alcance. Você pode fazer a parede com até 9 metros de comprimento, 3 metros de altura e 30 centímetros de espessura, ou pode fazer uma parede circular de até 6 metros de diâmetro, 6 metros de altura e 30 centímetros de espessura. A parede desaparece quando a magia termina. O espaço da parede é um terreno difícil.\n\nQualquer ataque à distância com arma que entre no espaço da parede tem interferência na jogada de ataque, e o dano de fogo é reduzido pela metade se o efeito do fogo passar pela parede para atingir seu alvo. Feitiços que causam dano de frio que passam pela parede fazem com que a área da parede pela qual eles passam congele (pelo menos uma seção de 1,5 metro quadrado está congelada). Cada trecho congelado de 1,5 metro quadrado possui AC 5 e 15 pontos de vida. Reduzir uma seção congelada a 0 pontos de vida a destrói. Quando uma secção é destruída, a água da parede não a enche."
  },
  {
    "name": "Esfera de Água",
    "level": 4,
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você evoca uma esfera de água com um raio de 3 metros em um ponto que você pode ver dentro do alcance. A esfera pode pairar no ar, mas não mais que 3 metros da grodada. A esfera permanece durante a duração da magia.\n\nQualquer criatura no espaço da esfera deverá fazer um Teste de resistência de Força. Em um teste de resistência bem sucedido, uma criatura é ejetada daquele espaço para o espaço desocupado mais próximo fora dele. Uma criatura Enorme ou maior obtém sucesso no teste de resistência automaticamente. Em um teste de resistência falho, uma criatura é imobilizada pela esfera e é engolfada pela água. Ao final de cada um de seus turnos, um alvo imobilizado pode repetir o teste de resistência.\n\nA esfera pode conter no máximo quatro criaturas Médias ou menores ou uma criatura Grande. Se a esfera reter uma criatura acima desses números, uma criatura aleatória que já estava imobilizada pela esfera cai dela e cai caída em um espaço a até 1,5 metro dela.\n\nComo ação, você pode mover a esfera at�� 9 metros em linha reta. Se ele se mover sobre um poço, penhasco ou outra queda, ele desce com segurança até pairar 3 metros sobre a grodada. Qualquer criatura imobilizada pela esfera se move com ela. Você pode enfiar a esfera em criaturas, forçando-as a fazer o teste de resistência, mas não mais do que uma vez por turno.\n\nQuando a magia termina, a esfera cai na grodada e apaga todas as chamas normais a até 9 metros dela. Qualquer criatura imobilizada pela esfera é derrubada no espaço onde cai."
  },
  {
    "name": "Redemoinho",
    "level": 7,
    "classes": [
      "Druida",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "90 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Um redemoinho uiva até um ponto na grodada que você especifica. O redemoinho é um cilindro de 3 metros de raio e 9 metros de altura centrado nesse ponto. Até a magia terminar, você pode usar sua ação para mover o redemoinho até 9 metros em qualquer direção ao longo da grodada. O redemoinho suga quaisquer objetos Médios ou menores que não estejam presos a nada e que não sejam usados ​​ou carregados por ninguém.\n\nUma criatura deve fazer um Teste de resistência de Destreza na primeira vez em um turno em que ela entrar no redemoinho ou em que o redemoinho entrar em seu espaço, inclusive quando o redemoinho aparecer pela primeira vez. Uma criatura sofre 10d6 de dano de concussão em um teste de resistência falho, ou metade do dano em um teste bem sucedido. Além disso, uma criatura Grande ou menor que falhar no teste deverá ter sucesso em um Teste de resistência de Força ou ficará imobilizada no redemoinho até o fim da magia. Quando uma criatura inicia seu turno imobilizada pelo redemoinho, a criatura é puxada 1,5 metro para cima dentro dele, a menos que a criatura esteja no topo. Uma criatura imobilizada se move com o redemoinho e cai quando a magia termina, a menos que a criatura tenha algum meio de permanecer no ar.\n\nUma criatura imobilizada pode usar uma ação para fazer um teste de Força ou Destreza contra seu CD de resistência de magia. Se tiver sucesso, a criatura não fica mais imobilizada pelo redemoinho e é arremessada 3d6 × 3 metros para longe dele em uma direção aleatória."
  },
  {
    "name": "Imolação",
    "level": 5,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "As chamas envolvem uma criatura que você pode ver dentro do alcance. O alvo deve fazer um Teste de resistência de Destreza. São necessários 7d6 dano de fogo em um teste de resistência falho, ou metade do dano em um teste bem sucedido. Em um teste de resistência falho, o alvo também queima enquanto durar o feitiço. O alvo em chamas emite luz brilhante em um raio de 9 metros e luz fraca por mais 9 metros. Ao final de cada um de seus turnos, o alvo repete o teste de resistência. São necessários 3d6 de dano de fogo em um teste de resistência falho, e a magia termina com sucesso. Essas chamas mágicas não podem ser extintas por meios não mágicos.\n\nSe o dano deste feitiço reduzir um alvo a 0 pontos de vida, o alvo se transforma em cinzas."
  },
  {
    "name": "Esfera da Tempestade",
    "level": 4,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma esfera de ar rodopiante com 6 metros de raio surge centrada em um ponto que você escolher dentro do alcance. A esfera permanece durante a duração da magia. Cada criatura na esfera quando aparecer ou terminar seu turno nela deverá ter sucesso em um Teste de resistência de Força ou sofrer 2d6 dano de concussão. O espaço da esfera é um terreno difícil.\n\nAté o final da magia, você pode usar um bônus de ação em cada um de seus turnos para fazer com que um raio salte do centro da esfera em direção a uma criatura que você escolher até 18 metros do centro. Faça um ataque de magia à distância. Você tem vantagem na jogada de ataque se o alvo estiver na esfera. Sem sucesso, o alvo leva 4d6 dano de raio.\n\nCriaturas a até 9 metros da esfera possuem interferência em testes de Sabedoria (Percepção) feitos para ouvir."
  },
  {
    "name": "Esfera Vitriólica",
    "level": 4,
    "classes": [
      "Feiticeiro",
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "45 metros",
    "duration": "Instantâneo",
    "description": "Você aponta para um lugar dentro do alcance, e uma bola brilhante de ácido esmeralda de 30 centímetros de altura atinge lá e explode em um raio de 6 metros. Cada criatura daquela área deverá fazer um Teste de resistência de Destreza. Em um teste de resistência falho, uma criatura sofre 10d4 dano de ácido e 5d4 dano de ácido no final de seu próximo turno. Em um teste de resistência bem sucedido, uma criatura sofre metade do dano inicial e nenhum dano no final do seu próximo turno."
  },
  {
    "name": "Muro de Areia",
    "level": 3,
    "classes": [
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 10 minutes",
    "description": "Você evoca uma parede de areia rodopiante na grodada em um ponto que você pode ver dentro do alcance. Você pode fazer a parede com até 9 metros de comprimento, 3 metros de altura e 3 metros de espessura, e ela desaparece quando a magia termina. Bloqueia a linha de visão, mas não o movimento. Uma criatura fica cega enquanto estiver no espaço da parede e deve gastar 90 cm de movimento para cada 30 cm que se mover até lá."
  },
  {
    "name": "Mão Arcana",
    "level": 5,
    "classes": [
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "36 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você cria uma mão grande de força translúcida e cintilante em um espaço desocupado que você pode ver dentro do alcance. A mão dura a duração do feitiço e se move sob seu comando, imitando os movimentos de sua própria mão. \n\n A mão é um objeto que tem CA 20 e pontos de vida iguais ao seu ponto de vida máximo. Se cair para 0 pontos de vida, a magia termina. Possui Força 26 (+8) e Destreza 10 (+0). A mão não preenche seu espaço. \n\n Quando você conjura uma magia e como bônus de ação em seus turnos subsequentes, você pode mover a mão até 18 metros e então causar um dos seguintes efeitos com ela. \n\n Punho Cerrado: A mão atinge uma criatura ou objeto a até 1,5 metro dela. Faça um ataque de magia corpo a corpo para a mão usando as estatísticas do jogo. Sem sucesso, o alvo leva 4d8 de dano de força. \n\n Mão Forte A mão tenta empurrar uma criatura até 1,5 metro dela na direção que você escolher. Faça um teste com a Força da mão contestada pelo teste de Força (Atletismo) do alvo. Se o alvo for Médio ou menor, você tem vantagem no teste. Se você tiver sucesso, a mão empurra o alvo até 1,5 metro mais um número de pés igual a cinco vezes o seu modificador de atributo de conjuração. O ponteiro se move com o alvo para ficar a até 1,5 metro dele. \n\n Mão Agarrada: A mão tenta agarrar uma criatura Enorme ou menor a até 1,5 metro dela. Você usa o valor de Força da mão para resolver o agarrar. Se o alvo for Médio ou menor, você tem vantagem no teste. Enquanto a mão está agarrando o alvo, você pode usar uma ação bônus para que a mão o esmague. Ao fazer isso, o alvo recebe dano de concussão igual a 2d6 + seu modificador de atributo de conjuração. \n\n Mão Interposta: A mão se interpõe entre você e uma criatura que você escolher até que você dê um comando diferente à mão. A mão se move para ficar entre você e o alvo, proporcionando meia cobertura contra o alvo. O alvo não pode se mover pelo espaço da mão se seu valor de Força for menor ou igual ao valor de Força da mão. Se o seu valor de Força for maior que o valor de Força da mão, o alvo pode se mover em sua direção através do espaço da mão, mas esse espaço é um terreno difícil para o alvo."
  },
  {
    "name": "Arcane Sword",
    "level": 7,
    "classes": [
      "Mago",
      "Bardo"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "18 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Você cria um plano de força em forma de espada que paira dentro do alcance. Dura enquanto durar. \n\n Quando a espada aparecer, você faz um ataque de magia corpo a corpo contra um alvo de sua escolha a até 1,5 metro da espada. Sem sucesso. o alvo leva 3d10 dano de força. Até o fim da magia, você pode usar um bônus de ação em cada um de seus turnos para mover a espada até 20 pés para um local que você possa ver e repetir este ataque contra o mesmo alvo ou outro diferente."
  },
  {
    "name": "Freezing Sphere",
    "level": 6,
    "classes": [
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "90 metros",
    "duration": "Instantâneo",
    "description": "Um globo gelado de energia fria vai da ponta dos dedos até um ponto de sua escolha dentro do alcance, onde explode em uma esfera de 18 metros de raio. Cada criatura dentro da área deverá fazer um Teste de resistência de Constituição. Em um teste de resistência falho, uma criatura sofre 10d6 de dano de frio. Em um teste de resistência bem-sucedido, é preciso metade do dano. \n\n Se o globo atingir um corpo de água ou um líquido que seja principalmente água (sem incluir criaturas à base de água), ele congela o líquido a uma profundidade de 15 centímetros em uma área de 9 metros quadrados. Este gelo dura 1 minuto. Criaturas que nadavam na superfície da água congelada ficam presas no gelo. Uma criatura presa pode usar uma ação para fazer um teste de Força contra seu CD de resistência de magia para se libertar. \n\n Você pode evitar disparar o globo após completar o feitiço, se desejar. Um pequeno globo do tamanho de uma pedra de funda, fresco ao toque, aparece em sua mão. A qualquer momento, você ou uma criatura para quem você deu o globo pode arremessá-lo (a um alcance de 12 metros) ou arremessá-lo com uma funda (ao alcance normal da funda). Ele se estilhaça com o impacto, com o mesmo efeito do lançamento normal do feitiço. Você também pode pousar o globo sem quebrá-lo. Depois de 1 minuto, se o globo ainda não estiver quebrado, ele explode."
  },
  {
    "name": "Riso Horrível",
    "level": 1,
    "classes": [
      "Mago",
      "Bardo"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma criatura de sua escolha que você possa ver dentro do alcance percebe tudo como hilariamente engraçado e cai na gargalhada se esse feitiço o afetar. O deve ter sucesso em um Teste de resistência de Sabedoria de queda caída, ficando incapacitado e incapaz de ficar em pé durante todo o tempo. Uma criatura com valor de Inteligência igual ou inferior a 4 não é afetada. \n\n Ao final de cada um de seus turnos, e cada vez que sofrer dano, o alvo pode fazer outro Teste de resistência de Sabedoria. O alvo tem vantagem no teste de resistência se for desencadeado por dano. Com um sucesso, a magia termina."
  },
  {
    "name": "Secret Chest",
    "level": 4,
    "classes": [
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "Instantâneo",
    "description": "Você esconde um baú e todo o seu conteúdo no Plano Etéreo. Você deve tocar no baú e na réplica em miniatura que serve como componente material para o feitiço. O baú pode conter até 12 pés cúbicos de material inanimado (3 pés por 2 pés por 2 pés). \n\n Enquanto o baú permanece no Plano Etéreo, você pode usar uma ação e tocar na réplica para recuperar o baú. Ele aparece em um espaço desocupado na grodada a até 1,5 metro de você. Você pode enviar o baú de volta ao Plano Etéreo usando uma ação e tocando tanto no baú quanto na réplica. \n\n Após 60 dias, há uma chance cumulativa de 5% por dia de que o efeito do feitiço termine. Este efeito termina se você lançar esta magia novamente, se a réplica do baú menor for destruída ou se você decidir encerrar a magia como uma ação. Se a magia terminar e o baú maior estiver no Plano Etéreo, ele estará irremediavelmente perdido."
  },
  {
    "name": "Magnificent Mansion",
    "level": 7,
    "classes": [
      "Mago",
      "Bardo"
    ],
    "school": "Conjuração",
    "castingTime": "1 minute",
    "range": "90 metros",
    "duration": "24 horas",
    "description": "Você conjura uma morada extradimensional ao alcance que dura por toda a duração. Você escolhe onde sua única entrada está localizada. A entrada brilha levemente e tem 1,5 metros de largura e 3 metros de altura. Você e qualquer criatura que você designar ao conjurar uma magia podem entrar na morada extradimensional desde que o portal permaneça aberto. Você pode abrir ou fechar o portal se estiver a até 9 metros dele. Enquanto fechado, o portal fica invisível. \n\n Além do portal há um magnífico foyer com inúmeras câmaras. A atmosfera é limpa, fresca e quente. \n\n Você pode criar a planta que quiser, mas o espaço não pode ultrapassar 50 cubos, sendo cada cubo 3 metros de cada lado. O local é mobiliado e decorado como você escolher. Contém comida suficiente para servir um banquete de nove pratos para até 100 pessoas. Uma equipe de 100 servidores quase transparentes atende todos que entram. Você decide a aparência visual desses servos e seus trajes. Eles são completamente obedientes às suas ordens. Cada servo pode realizar qualquer tarefa que um servo humano normal poderia realizar, mas não pode atacar ou realizar qualquer ação que possa prejudicar diretamente outra criatura. Assim, os servos podem buscar coisas, limpar, consertar, dobrar roupas, acender fogueiras, servir comida, servir vinho e assim por diante. Os servos podem ir a qualquer lugar da mansão, mas não podem sair dela. Móveis e outros objetos criados por este feitiço se dissipam em fumaça se forem removidos da mansão. Quando a magia termina, quaisquer criaturas dentro do espaço extradimensional são expulsas para os espaços abertos mais próximos da entrada."
  },
  {
    "name": "Arcanist's Magic Aura",
    "level": 2,
    "classes": [
      "Mago"
    ],
    "school": "Ilusão",
    "castingTime": "1 ação",
    "range": "Toque",
    "duration": "24 horas",
    "description": "Você coloca uma ilusão em uma criatura ou objeto que você toca para que os feitiços de adivinhação revelem informações falsas sobre ele. O alvo pode ser uma criatura voluntária ou um objeto que não está sendo carregado ou usado por outra criatura.\n Ao conjurar uma magia, escolha um ou ambos os efeitos a seguir. O efeito dura enquanto durar. Se você lançar este feitiço na mesma criatura ou objeto todos os dias durante 30 dias, aplicando o mesmo efeito a cada vez, a ilusão durará até ser dissipada. \n\n Falsa Aura: Você altera a forma como o alvo aparece para magias e efeitos mágicos, como detectar magia, que detectam auras mágicas. Você pode fazer um objeto não-mágico parecer mágico, um objeto mágico parecer não-mágico ou alterar a aura mágica do objeto para que ele pareça pertencer a uma escola específica de magia que você escolher. Quando você usa esse efeito em um objeto, você pode tornar a falsa magia aparente para qualquer criatura que manuseie o item. \n\n Máscara: Você altera a forma como o alvo aparece para magias e efeitos mágicos que detectam tipos de criaturas, como o Sentido Divino de um paladino ou o gatilho de uma magia de símbolo. Você escolhe um tipo de criatura e outras magias e efeitos mágicos tratam o alvo como se fosse uma criatura daquele tipo ou daquela tendência."
  },
  {
    "name": "Private Sanctum",
    "level": 4,
    "classes": [
      "Mago"
    ],
    "school": "Abjuração",
    "castingTime": "10 minutes",
    "range": "36 metros",
    "duration": "24 horas",
    "description": "Você coloca uma ilusão em uma criatura ou objeto que você toca para que os feitiços de adivinhação revelem informações falsas sobre ele. O alvo pode ser uma criatura voluntária ou um objeto que não está sendo carregado ou usado por outra criatura.\n Ao conjurar uma magia, escolha um ou ambos os efeitos a seguir. O efeito dura enquanto durar. Se você lançar este feitiço na mesma criatura ou objeto todos os dias durante 30 dias, aplicando o mesmo efeito a cada vez, a ilusão durará até ser dissipada. \n\n Falsa Aura: Você altera a forma como o alvo aparece para magias e efeitos mágicos, como detectar magia, que detectam auras mágicas. Você pode fazer um objeto não-mágico parecer mágico, um objeto mágico parecer não-mágico ou alterar a aura mágica do objeto para que ele pareça pertencer a uma escola específica de magia que você escolher. Quando você usa esse efeito em um objeto, você pode tornar a falsa magia aparente para qualquer criatura que manuseie o item. \n\n Máscara: Você altera a forma como o alvo aparece para magias e efeitos mágicos que detectam tipos de criaturas, como o Sentido Divino de um paladino ou o gatilho de uma magia de símbolo. Você escolhe um tipo de criatura e outras magias e efeitos mágicos tratam o alvo como se fosse uma criatura daquele tipo ou daquela tendência."
  },
  {
    "name": "Tentáculos Negros",
    "level": 4,
    "classes": [
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "27 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Contorcendo-se, tentáculos de ébano preenchem um quadrado de 6 metros de altura que você pode ver dentro do alcance. Enquanto isso, esses tentáculos transformam a grodada da área em terreno difícil.\n \nQuando uma criatura entra na área afetada pela primeira vez em um turno ou inicia seu turno lá, a criatura deve ter sucesso em um Teste de resistência de Destreza ou sofrer 3d6 de dano de concussão e ser imobilizada pelos tentáculos até o fim da magia. Uma criatura que inicia seu turno na área e já está imobilizada pelos tentáculos sofre 3d6 dano de concussão. \n\n Uma criatura imobilizada pelos tentáculos pode usar sua ação para fazer um teste de Força ou Destreza (à sua escolha) contra seu CD de resistência de magia. Com um sucesso, ele se liberta."
  },
  {
    "name": "Floating Disk",
    "level": 1,
    "classes": [
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "1 hora",
    "description": "Este feitiço cria um plano de força circular e horizontal, com 3 pés de diâmetro e 1 polegada de espessura, que flutua 3 pés acima da grodada em um espaço desocupado de sua escolha que você possa ver dentro do alcance. O disco permanece durante todo o tempo e pode conter até 500 libras. Se for colocado mais peso sobre ele, a magia termina e tudo que está no disco cai na grodada. \n\n O disco fica imóvel enquanto você estiver a até 6 metros dele. Se você se afastar mais de 6 metros dele, o disco o seguirá e permanecerá a 6 metros de você. Ele pode atravessar terrenos irregulares, subir ou descer escadas, declives e similares, mas não pode atravessar uma mudança de elevação de 3 metros ou mais. Por exemplo, o disco não pode se mover através de um poço com 3 metros de profundidade, nem poderia sair desse poço se fosse criado no fundo. \n\n Se você se mover mais de 30 metros do disco (normalmente porque ele não consegue se mover, aroda um obstáculo para segui-lo), a magia termina."
  },
  {
    "name": "Convocação Instantânea",
    "level": 6,
    "classes": [
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 minute",
    "range": "Toque",
    "duration": "Até ser dissipada",
    "description": "Você toca um objeto pesando 4,5 quilos ou menos cuja maior dimensão é de 1,80 metro ou menos. O feitiço deixa uma marca invisível em sua superfície e inscreve invisivelmente o nome do item na safira que você usa como componente material. Cada vez que você lança este feitiço, você deve usar uma safira diferente. \n\n A qualquer momento, você pode usar sua ação para falar o nome do item e esmagar a safira. O item aparece instantaneamente em sua mão, independentemente da distância física ou plana, e a magia termina. \n\n Se outra criatura estiver segurando ou carregando o item, esmagar a safira não transporta o item para você, mas em vez disso você aprende quem é a criatura que possui o objeto e aproximadamente onde essa criatura está localizada naquele momento. \n\n Dissipar magia ou um efeito similar aplicado com sucesso à safira encerra o efeito desta magia."
  },
  {
    "name": "Telepathic Bond",
    "level": 6,
    "classes": [
      "Mago"
    ],
    "school": "Adivinhação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "1 hora",
    "description": "Você estabelece um vínculo telepático entre até oito criaturas voluntárias de sua escolha dentro do alcance, ligando psiquicamente cada criatura a todas as outras durante o período. Criaturas com valores de Inteligência de 2 ou menos não são afetadas por este feitiço. \n\n Até a magia terminar, os alvos podem se comunicar telepaticamente através do vínculo, tenham ou não uma linguagem comum. A comunicação⁠ é possível a qualquer distância, embora não possa se estender a outros planos de existência."
  },
  {
    "name": "Faithful Hound",
    "level": 5,
    "classes": [
      "Mago"
    ],
    "school": "Conjuração",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "8 horas",
    "description": "Você conjura um cão de guarda fantasma em um espaço desocupado que você pode ver dentro do alcance, onde permanece durante todo o tempo, até que você o desfaça como uma ação, ou até que você se afaste mais de 30 metros dele. \n\n O cão é invisível para todas as criaturas, exceto você, e não pode ser ferido. Quando uma criatura pequena ou maior chega a até 9 metros dela sem primeiro falar a senha que você especificou. Quando você conjura essa magia, o cão começa a latir alto. O cão vê criaturas invisíveis e pode ver o Plano Etéreo. Ignora as ilusões. \n\n No início de cada um de seus turnos, o cão tenta morder uma criatura a até 1,5 metro dela que seja hostil a você. O bônus de ataque do cão é igual ao seu modificador de atributo de conjuração + seu bônus de proficiência. Sem sucesso, causa 4d8 dano perfurante."
  },
  {
    "name": "Resilient Sphere",
    "level": 4,
    "classes": [
      "Mago"
    ],
    "school": "Evocação",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Uma esfera de força cintilante envolve uma criatura ou objeto de tamanho Grande ou menor dentro do alcance. Uma incriatura voluntária deverá realizar um Teste de resistência de Destreza. Em um teste de resistência falho, a criatura fica encerrada durante todo o tempo. \n\n Nada, nem objetos físicos, energia ou outros efeitos mágicos, pode passar através da barreira, para dentro ou para fora, embora uma criatura na esfera possa respirar ali. A esfera é imune a todos os danos, e uma criatura ou objeto dentro dela não pode ser danificado por ataques ou efeitos originados de fora, nem uma criatura dentro da esfera pode danificar nada fora dela. \n\n A esfera não tem peso e é grande o suficiente para conter a criatura ou objeto dentro dela. Uma criatura enclausurada pode usar sua ação para empurrar as paredes da esfera e, assim, rolar a esfera até metade da velocidade da criatura. Da mesma forma, o globo pode ser apanhado e movido por outras criaturas. \n\n Um feitiço de desintegração que atinge o globo o destrói sem danificar nada dentro dele."
  },
  {
    "name": "Dança Irresistível",
    "level": 6,
    "classes": [
      "Mago",
      "Bardo"
    ],
    "school": "Encantamento",
    "castingTime": "1 ação",
    "range": "9 metros",
    "duration": "Concentração, up to 1 minute",
    "description": "Escolha uma criatura que você possa ver dentro do alcance. O alvo começa uma dança cômica no local - arrastando os pés, batendo os pés e saltitando durante todo o tempo. Criaturas que não podem ser feitiçadas ficam imunes a esse feitiço. \n\n Uma criatura dançante deve usar todo o seu movimento para dançar sem sair do seu espaço e tem manobras em Teste de resistência de Destrezas e jogada de ataques. Enquanto o alvo for afetado por este feitiço, outras criaturas terão vantagem em jogar de ataques contra ele. Como ação, uma criatura dançante faz um Teste de resistência de Sabedoria para recuperar o controle de si mesma. Em um teste de resistência bem sucedido, a magia termina."
  },
  {
    "name": "Tiny Hut",
    "level": 3,
    "classes": [
      "Mago",
      "Bardo"
    ],
    "school": "Evocação",
    "castingTime": "1 minute",
    "range": "Self (10-foot radius hemisphere)",
    "duration": "8 horas",
    "description": "Uma cúpula de força imóvel com raio de 3 metros surge arodada e acima de você e permanece estacionária durante todo o tempo. A magia termina se você sair da área. \n\n Nove criaturas de tamanho médio ou menor podem caber dentro da cúpula com você. A magia falha se sua área incluir uma criatura maior ou mais de nove criaturas. Criaturas e objetos⁠ dentro da cúpula Quando você conjura essa magia pode se mover livremente através dela. Todas as outras criaturas e objetos estão impedidos de passar por ele. Feitiços e outros efeitos mágicos não podem se estender através da cúpula ou ser lançados através dela. A atmosfera no interior do espaço é confortável e seca, independentemente do clima exterior. \n\n Até a magia terminar, você pode comandar o interior para ficar mal iluminado ou escuro. A cúpula é opaca por fora, da cor que você escolher, mas é transparente por dentro."
  }
];
