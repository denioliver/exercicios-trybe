const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
            },
    },
    payment: {
        total: 60,
    },
    };

    const customerInfo = (fullOrder) => {
        return `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}.`
    }

    console.log(customerInfo(order));

    const orderModifier = (fullOrder) => {
        fullOrder.name = 'Luiz Silva'
    return `Olá, ${fullOrder.name}, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.`
}

    console.log(orderModifier(order));

// manipulação de objeto parte 3

const school = {
    lessons: [
        {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
        },
        {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
        },
        {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
        },
        {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
        },
    ]
};

function cursos(objeto, posicao) {
    console.log(objeto.lessons[posicao]);
}

cursos(school, 2)

function somaDeEstudantes(){
    let total = 0
    for(let index = 0; index < school.lessons.length; index += 1){
        total = total + school.lessons[index].students
    }
    return total
}

console.log(somaDeEstudantes());

function verificacaoDeChave(object, keys) {
    for(let index = 0; index < object.lessons.length; index += 1){
        if (object.lessons[index][keys] === undefined) {
            return false
        }
    }
    return true
}
console.log(verificacaoDeChave(school, 'shift'));
