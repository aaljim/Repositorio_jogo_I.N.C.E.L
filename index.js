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
                nextpoint: 3,
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
            action: "",
            opt1: {
                text: "",
                nextpoint: 6,
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




