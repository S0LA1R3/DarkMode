let trigger = false;

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

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('dark-mode');
    const main = document.querySelector('main');
    const body = document.querySelector('body');
    const footer = document.querySelector('footer');
    const icon = document.getElementById('icon');
    
    button.addEventListener('click', function() {
        if(trigger === false) {
            button.style.background = "url(imgs/2bbf31ad4094b5f1a5031fbe91faa12b-removebg-preview-removebg-preview.png)";
            icon.href = "imgs/2bbf31ad4094b5f1a5031fbe91faa12b-removebg-preview-removebg-preview.png";
            trigger = true;
            console.log('lua');
            body.style.backgroundColor = '#24292f';
            main.style.backgroundColor = '#212121';
            main.style.borderColor = 'darkslategray';
            footer.style.backgroundColor = '#24292f';
            footer.style.color = '#e6edf3'
            footer.style.borderColor = 'darkslategray';
        } else {
            button.style.background = "url(imgs/solaire__sun___dark_souls_by_redknightz01_dbcdh4n-fullview-removebg-preview.png)";
            icon.href = "imgs/solaire__sun___dark_souls_by_redknightz01_dbcdh4n-fullview-removebg-preview.png";
            trigger = false;
            console.log('sol');
            main.style.backgroundColor = 'white';
            main.style.borderColor = '#84704b';
            body.style.backgroundColor = '#f7f2e7';
            footer.style.backgroundColor = '#f7f2e7';
            footer.style.color = 'black'
            footer.style.borderColor = '#84704b';
        }
    })
})
