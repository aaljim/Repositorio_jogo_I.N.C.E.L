// HISTORY ARRAY

    // !!! OBS: ONLY 2 SCENES HAD 3 OPTIONS, IN GENERAL OPT3.NEXTPOINT MUST BE EQUAL TO HIS INDEX;
    // !!! OBS: COMMENT ALL THE INDEX;

    const history = [
// 0
        {
            action: "Olá caro Jogador, antes de interagir com o século 18, que tal saber um pouco sobre minha história??",
            opt1: {
                text: "Sim",
                nextpoint: 1 ,
            },
            opt2:  {
                text: "Não",
                nextpoint: 3 ,
            },
            opt3: {
                text: "",
                nextpoint: 0,
            }
        },
// 1
        {
            action: "Meu nome é Aliquis Petit, nasci em 1768, na região próxima ao Palácio de Versalhes. Não sei muito sobre meus pais, sou órfão desde que eu me entendo por gente.Minha maior ambição é conseguir fazer algo a respeito dessa monarquia, enquanto todos vivem na pobreza, o clero esnoba com suas festividades e negligenciam o próprio povo.",
            opt1: {
                text: "Continuar",
                nextpoint: 2,
            },
            opt2: {
                text: "",
                nextpoint: 1,
            },
            opt3: {
                text: "",
                nextpoint: 1,
            }
        },
//2
        {
            action: "Comecei a trabalhar desde pequeno para não morrer, então, sempre me virei, com isto, aprendi a lutar. Meu único amigo, Patróclo Tisía Hetairos, descendente de famílias nórdicas, sempre me contava sobre as histórias que seus avós lhe falavam.Patróclo me contava sobre Valhalla, um palácio para onde iria os soldados após suas mortes. E falava que esse era o seu sonho.",
            opt1: {
                text: "Continuar",
                nextpoint: 3,
            },
            opt2: {
                text: "",
                nextpoint: 2,
            },
            opt3: {
                text: "",
                nextpoint: 2,
            }
        },
//3
        {
            action: "Você está voltando de mais um dia de trabalho, e sente um pouco de fome.",
            opt1: {
                text: "Ir para casa",
                nextpoint: 4,
            },
            opt2: {
                text: "Passar no BAR e comer um pouco",
                nextpoint: 19,
            },
            opt3: {
                text: "",
                nextpoint: 3,
            },
        },
//4
        {
            action: "Você volta para casa, mas não tem nada pra comer, então, você decide dormir.",
            opt1: {
                text: "Continuar",
                nextpoint: 5,
            },
            opt2: {
                text: "",
                nextpoint: 4,
            },
            opt3: {
                text: "",
                nextpoint: 4,
            },
        },
//5
        {
            action: "No dia seguinte, sai de casa para mais um trabalho, e acaba por ler um panfleto jogado na rua. O panfleto fala sobre a Assembleia dos Estados Gerais, e vê que não adiantaria nada resolver as coisas de um jeito pacífico. Você então continua indo para o trabalho, contudo, no meio do caminho, avista seu melhor amigo, Patróclo Tisía Hetairos. Você comenta sobre a Assembleia com ele, e ele lhe conta sobre a ideia que estão tendo.",                        
            opt1: {
                text: "Continuar",
                nextpoint: 6,
            },
            opt2: {
                text: "",
                nextpoint: 5,
            },
            opt3: {
                text: "",
                nextpoint: 5,
            },
        },
//6
        {
            action: "O panfleto fala sobre a Assembleia dos Estados Gerais, e vê que não adiantaria nada resolver as coisas de um jeito pacifico.",
            opt1: {
                text: "continuar",
                nextpoint: 7,
            },
            opt2: {
                text: "",
                nextpoint: 6,
            },
            opt3: {
                text: "",
                nextpoint: 6,
            },
        }

    ];
//7
        {
            action: "Você então continua indo para o trabalho, contudo, no meio do caminho, avista seu melhor amigo, Patróclo Tisía Hetairos.",
            opt1: {
                text: "continuar",
                nextpoint: 8,
            },
            opt2: {
                text: "",
                nextpoint: 7,
            },
            opt3: {
                text: "",
                nextpoint: 7,
            },
        }

    ];
//8
        {
            action: "Você comenta sobre a Assembleia com ele, e ele lhe conta sobre a ideia que estão tendo.",
            opt1: {
                text: "continuar",
                nextpoint: 9,
            },
            opt2: {
                text: "",
                nextpoint: 8,
            },
            opt3: {
                text: "",
                nextpoint: 8,
            },
        }

    ];
//9
        {
            action: "Ouvi que estão com um plano de tomar bastilha e fazer uma declaração por direito do homem e do cidadão. Mostrar pra aquele reizinho de merda quem somos",
            opt1: {
                text: "continuar",
                nextpoint: 10,
            },
            opt2: {
                text: "",
                nextpoint: 9,
            },
            opt3: {
                text: "",
                nextpoint: 9,
            },
        }

    ];
//10
        {
            action: "Ele lhe pergunta se quer se juntar.",
            opt1: {
                text: "Aceita convite",
                nextpoint: 12,
            },
            opt2: {
                text: "Recusar convite",
                nextpoint: 11,
            },
            opt3: {
                text: "",
                nextpoint: 10,
            },
        }

    ];
//11
        {
            action: "Você recusa, mas se lembra de todo o seu passado.",
            opt1: {
                text: "continuar",
                nextpoint: 12,
            },
            opt2: {
                text: "",
                nextpoint: 11,
            },
            opt3: {
                text: "",
                nextpoint: 11,
            },
        }

    ];
//12
        {
            action: "Sabe Patróclo, desde sempre eu quis isto, ir contra este rei de merda. Eu vou.",
            opt1: {
                text: "continuar",
                nextpoint: 13,
            },
            opt2: {
                text: "",
                nextpoint: 12,
            },
            opt3: {
                text: "",
                nextpoint: 12,
            },
        }

    ];
//13
        {
            action: "É assim que se fala Aliquis. Vai ser em 2 semanas, se prepare.",
            opt1: {
                text: "continuar",
                nextpoint: 14,
            },
            opt2: {
                text: "",
                nextpoint: 13,
            },
            opt3: {
                text: "",
                nextpoint: 13,
            },
        }

    ];
	
	
//14
        {
            action: "Tenho duas semanas para me preparar, ok... vamos lá",
            opt1: {
                text: "continuar",
                nextpoint: 15,
            },
            opt2: {
                text: "",
                nextpoint: 14,
            },
            opt3: {
                text: "",
                nextpoint: 14,
            },
        }

    ];
//15
        {
            action: "Você tira uma folga do trabalho para se preparar.",
            opt1: {
                text: "continuar",
                nextpoint: 16,
            },
            opt2: {
                text: "",
                nextpoint: 15,
            },
            opt3: {
                text: "",
                nextpoint: 15,
            },
        }

    ];
//16
        {
            action: "Como você não comeu, tem tal opção agora. Deseja comer ou ir direto para o treino?",
            opt1: {
                text: "Comer",
                nextpoint: 18,
            },
            opt2: {
                text: "Treino",
                nextpoint: 17,
            },
            opt3: {
                text: "",
                nextpoint: 16,
            },
        }

    ];
//17
        {
            action: "Aliquis morre de fome", //linkar com a morte
            opt1: {
                text: "",
                nextpoint: x,
            },
            opt2: {
                text: "",
                nextpoint: 17,
            },
            opt3: {
                text: "",
                nextpoint: 17,
            },
        }

    ];
//18
        {
            action: "Você tem o melhor treino de sua vida, assim, ficando totalmente preparado.",
            opt1: {
                text: "continuar",
                nextpoint: x,
            },
            opt2: {
                text: "",
                nextpoint: 18,
            },
            opt3: {
                text: "",
                nextpoint: 18,
            },
        }
// OUHAHAUOSAHOUHNOUHUOHNUOHNUOHNUOHNUOHNUOHNUOHNUOHNUOH
    ];
//19
        {
            action: "",
            opt1: {
                text: "continuar",
                nextpoint: x,
            },
            opt2: {
                text: "",
                nextpoint: x,
            },
            opt3: {
                text: "",
                nextpoint: x,
            },
        }

    ];
//x
        {
            action: "",
            opt1: {
                text: "continuar",
                nextpoint: x,
            },
            opt2: {
                text: "",
                nextpoint: x,
            },
            opt3: {
                text: "",
                nextpoint: x,
            },
        }

    ];

	
	
	
	
// CONST AND VARS DECLARATION:

    const action = document.getElementById("action-text");
    const option1 = document.getElementById("option-1");
    const option2 = document.getElementById("option-2");
    const option3 = document.getElementById("option-3");


// FUNCTIONS:

    function typing(){
        if(counter < text_typing.length){
            action.innerHTML += text_typing.charAt(counter);
            
            counter += 1;

            setTimeout(typing, 30);
        };

    total_time =  (text_typing.length)*30

    return total_time;
    }

    function applyPoint(next) {
        const point = history[next];
        
        counter = 0;
        text_typing = String(point.action); 
        typing();

        setTimeout(() => {
            if((point.opt1.text) != ("")){
                option1.innerHTML = 
                `<button class="option-1-pushable" role="button">
                <span class="option-1-shadow"></span>
                <span class="option-1-edge"></span>
                <span class="option-1-front text">
                ${point.opt1.text}
                </span>
                </button>`
            }
            if((point.opt2.text) != ("")){
                option2.innerHTML = 
                `<button class="option-2-pushable" role="button">
                <span class="option-2-shadow"></span>
                <span class="option-2-edge"></span>
                <span class="option-2-front text">
                ${point.opt2.text}
                </span>
                </button>`
            }
            if((point.opt3.text) != ("")){
                option3.innerHTML = 
                `<button class="option-3-pushable" role="button">
                <span class="option-3-shadow"></span>
                <span class="option-3-edge"></span>
                <span class="option-3-front text">
                ${point.opt3.text}
                </span>
                </button>`
            }
            option1.setAttribute('data-nextpoint', point.opt1.nextpoint);
            option2.setAttribute('data-nextpoint', point.opt2.nextpoint);
            option3.setAttribute('data-nextpoint', point.opt3.nextpoint);
        }, total_time+250)
        
    }

    applyPoint(0);

// EVENTS:

    option1.addEventListener('click', function(e) {
        action.innerHTML = "";
        option1.innerHTML = "";
        option2.innerHTML = "";
        option3.innerHTML = "";
        applyPoint(option1.getAttribute('data-nextpoint'));
    });

    option2.addEventListener('click', function(e) {
        action.innerHTML = "";
        action.innerHTML = "";
        option1.innerHTML = "";
        option2.innerHTML = "";
        option3.innerHTML = "";
        applyPoint(option2.getAttribute('data-nextpoint'));
    });

    option3.addEventListener('click', function(e) {
        action.innerHTML = "";
        action.innerHTML = "";
        option1.innerHTML = "";
        option2.innerHTML = "";
        option3.innerHTML = "";
        applyPoint(option3.getAttribute('data-nextpoint'));
    });




