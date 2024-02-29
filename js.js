function ChangeText(img) {
    const id = img.id;
    let text;

    switch(parseInt(id)) {
        case 1:
            text = 'Faça sua matrícula com facilidade escolhendo sua preferência de turmas onde gostaria de estudar neste período letivo.';
            break;
        case 2:
            text = 'Conheça todos os componentes curriculares da matriz curricular de seu curso.';
            break;
        case 3:
            text = 'Confira o horário de suas aulas no período.';
            break;
        case 4:
            text = 'Consulte todas suas notas e faltas em qualquer lugar, a qualquer momento.';
            break;
        case 5:
            text = 'Consulte o acervo, faça uma reserva... A biblioteca da instituição está a sua disposição.';
            break;
    }

    const span = document.getElementById('inv');
    span.innerHTML = text;
}