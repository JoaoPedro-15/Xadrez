function peao(){
    div_tutorial.innerHTML = `
    <div class="content light-bg" style="width: 500px;">
    <img src="./assets/TutorialPeao.gif">
    </div>
    <div class="content dark-bg" style="width: 500px; padding: 10px;">
    <p>Normalmente os peões se movem uma casa para frente a cada lance. No entanto, os peões têm algumas características especiais.<br><br> Um peão pode avançar uma ou duas casas em seu primeiro lance. Além disso, os peões não capturam da mesma maneira como se movem. Os peões só podem capturar uma peça que esteja uma casa à frente na diagonal. Os peões também são a única peça que só podem mover para frente.<br><br> Ao chegarem no final do tabuleiro podem se transformam em qualquer outra peça exceto o rei</p>
    </div>
    `;
}
function bispo(){
    div_tutorial.innerHTML = `
    <div class="content light-bg" style="width: 500px;">
    <img src="./assets/TutorialBispo.gif">
    </div>
    <div class="content dark-bg" style="width: 500px; padding: 10px;">
    <p>O bispo pode se mover na diagonal como uma dama, mas não pode para frente, para trás ou para os lados. Cada lado começa com dois bispos, um em uma casa clara e outro em uma casa escura.</p>
    </div>
    `;
}
function cavalo(){
    div_tutorial.innerHTML = `
    <div class="content light-bg" style="width: 500px;">
    <img src="./assets/TutorialCavalo.gif">
    </div>
    <div class="content dark-bg" style="width: 500px; padding: 10px;">
    <p>O cavalo é a única peça de xadrez que não anda em linha reta. O cavalo se move duas casas em uma direção e depois vira e anda mais uma em outra direção. Por exemplo, um cavalo pode mover duas casas para cima e uma para a esquerda. <br><br> O cavalo também pode mover duas casas para a direita e uma para baixo. Sempre segue aquele padrão duas e depois uma, que se assemelha a um L. Outra coisa que torna o cavalo único é que ele é a única peça capaz de pular sobre outras peças.</p>
    </div>
    `;
}
function torre(){
    div_tutorial.innerHTML = `
    <div class="content light-bg" style="width: 500px;">
    <img src="./assets/TutorialTorre.gif">
    </div>
    <div class="content dark-bg" style="width: 500px; padding: 10px;">
    <p>A torre pode se mover para frente, para trás e para os lados como uma dama. No entanto, ao contrário da dama, a torre não pode se mover na diagonal.</p>
    </div>
    `;
}
function dama(){
    div_tutorial.innerHTML = `
    <div class="content light-bg" style="width: 500px;">
    <img src="./assets/TutorialDama.gif">
    </div>
    <div class="content dark-bg" style="width: 500px; padding: 10px;">
    <p>O rei é a peça mais importante do xadrez, mas a dama é a mais poderosa. A dama pode se mover para frente, para trás, para os lados e na diagonal como um rei. No entanto, ao contrário do rei, a dama pode mover-se quantas casas quiser em cada uma dessas direções. A única coisa que a dama não pode fazer é pular sobre as peças ao longo do caminho.</p>
    </div>
    `;
}
function rei(){
    div_tutorial.innerHTML = `
    <div class="content light-bg" style="width: 500px;">
    <img src="./assets/TutorialRei.gif">
    </div>
    <div class="content dark-bg" style="width: 500px; padding: 10px;">
    <p>Embora o rei seja a peça mais importante, não é a mais poderosa. O rei pode se mover para qualquer casa que esteja diretamente ao lado dele: para cima, para baixo, para os lados ou na diagonal.<br><br> O rei não pode realizar qualquer movimento que torne possível o oponente captura-lo logo em seguida, já que assim o jogo acabaria.</p>
    </div>
    `;
}