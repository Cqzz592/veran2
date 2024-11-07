const tables = document.querySelectorAll('.table');
let reservedCount = 0; // Contador de mesas reservadas

// Função para alterar o estado da mesa ao ser clicada
tables.forEach(table => {
    table.addEventListener('click', () => {
        // Se a mesa estiver disponível ou se o cliente clicar em uma mesa já reservada
        if (table.classList.contains('available') && reservedCount < 2) {
            // Se a mesa estiver disponível e o limite não foi atingido, reserva a mesa
            table.classList.remove('available');
            table.classList.add('occupied');
            reservedCount++; // Aumenta o contador de reservas
            console.log(`Mesa ${table.dataset.table} reservada. Total reservado: ${reservedCount}`);
        } else if (table.classList.contains('occupied')) {
            // Se a mesa já estiver ocupada, o cliente pode desmarcar (desreservar)
            table.classList.remove('occupied');
            table.classList.add('available');
            reservedCount--; // Diminui o contador de reservas
            console.log(`Mesa ${table.dataset.table} desreservada. Total reservado: ${reservedCount}`);
        } else if (reservedCount >= 2) {
            // Se o cliente já tiver reservado 2 mesas, ele não pode reservar mais
            alert('Você pode reservar no máximo 2 mesas.');
        }
    });
});

// Selecionando o campo de data
const dateInput = document.getElementById('date');
const today = new Date();

// Formatar a data no formato "YYYY-MM-DD"
const day = today.getDate().toString().padStart(2, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const year = today.getFullYear();

// Definir a data mínima (não pode ser no passado)
const minDate = `${year}-${month}-${day}`; // Ex: 2024-11-06
// Definir a data máxima (não pode ser no futuro)
const maxDate = `${year}-12-31`; // Ex: 2024-12-31

// Definir os limites do campo de data
dateInput.min = minDate;
dateInput.max = maxDate;

// Função para corrigir automaticamente o valor do número de pessoas
const guestsInput = document.getElementById('guests');

// Definindo os limites do número de pessoas
const minGuests = 1;
const maxGuests = 10;

// Função para corrigir automaticamente o valor do número de pessoas
guestsInput.addEventListener('input', function() {
    let value = parseInt(guestsInput.value);

    if (value < minGuests) {
        guestsInput.value = minGuests; // Ajusta para o valor mínimo
    } else if (value > maxGuests) {
        guestsInput.value = maxGuests; // Ajusta para o valor máximo
    }
});

// Selecionando o campo de hora
const timeInput = document.getElementById('time');

// Definindo os limites do horário
const minTime = "09:00";  // Horário mínimo permitido
const maxTime = "22:00";  // Horário máximo permitido

// Função para corrigir automaticamente o valor do horário
timeInput.addEventListener('input', function() {
    let value = timeInput.value;

    // Verifica se o valor está abaixo do horário mínimo
    if (value < minTime) {
        timeInput.value = minTime;  // Ajusta para o horário mínimo
    }
    // Verifica se o valor está acima do horário máximo
    else if (value > maxTime) {
        timeInput.value = maxTime;  // Ajusta para o horário máximo
    }
});
